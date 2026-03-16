import express from 'express';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cron from 'node-cron';
import connectDatabase from './config/db.js';
import jobRoutes from './routes/jobs.js';
import { scrapeInternshala } from './scrapers/internshala.js';
import Job from './models/Job.js';
import cors from 'cors';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Validate required environment variables before starting
const REQUIRED_ENV = ['DATABASE_URL'];
for (const key of REQUIRED_ENV) {
  if (!process.env[key]) {
    console.error(`Missing required environment variable: ${key}`);
    process.exit(1);
  }
}

const app = express();
const PORT = process.env.PORT || 4000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

// Security headers
app.use(helmet());

// CORS — only allow configured frontend origin
app.use(cors({
  origin: FRONTEND_URL,
  methods: ['GET'],
  optionsSuccessStatus: 200,
}));

// Body parser with size limit
app.use(express.json({ limit: '10kb' }));

// Rate limiting — 100 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again later.' },
});
app.use('/api/', limiter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api/jobs', jobRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Global error handler — hide stack traces in production
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message,
  });
});

// Scheduled scraping — every 6 hours
cron.schedule('0 */6 * * *', async () => {
  console.log('[cron] Running scheduled scrape...');
  try {
    const jobs = await scrapeInternshala();
    for (const job of jobs) {
      await Job.updateOne(
        { link: job.link },
        { $setOnInsert: job },
        { upsert: true }
      );
    }
    console.log(`[cron] Scrape complete: ${jobs.length} jobs processed`);
  } catch (err) {
    console.error('[cron] Scheduled scrape failed:', err.message);
  }
});

const start = async () => {
  try {
    await connectDatabase();
    const server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} (${process.env.NODE_ENV || 'development'})`);
    });

    // Graceful shutdown
    const shutdown = (signal) => {
      console.log(`${signal} received, shutting down gracefully...`);
      server.close(() => {
        console.log('HTTP server closed');
        process.exit(0);
      });
      // Force-exit after 10 s if something hangs
      setTimeout(() => process.exit(1), 10_000).unref();
    };

    process.on('SIGTERM', () => shutdown('SIGTERM'));
    process.on('SIGINT',  () => shutdown('SIGINT'));
  } catch (err) {
    console.error('Failed to start server:', err.message);
    process.exit(1);
  }
};

start();
