import express from "express";
import Job from "../models/Job.js";
import { scrapeInternshala } from "../scrapers/internshala.js";

const router = express.Router();

// Manual scrape trigger — protected by SCRAPE_API_KEY when set
router.get("/scrape", async (req, res) => {
  const expectedKey = process.env.SCRAPE_API_KEY;
  if (expectedKey) {
    const auth = req.headers.authorization;
    if (auth !== `Bearer ${expectedKey}`) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  }
  try {
    const jobs = await scrapeInternshala();
    for (const job of jobs) {
      await Job.updateOne(
        { link: job.link },
        { $setOnInsert: job },
        { upsert: true }
      );
    }
    res.json({ success: true, count: jobs.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ postedAt: -1 }).limit(20);
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});

export default router;
