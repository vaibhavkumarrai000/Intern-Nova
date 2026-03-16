# InternNova Deployment Guide

This workspace has two separate apps:

- `InternNova` -> Next.js frontend for Vercel
- `InternNova-Backend` -> Express API for Render

Use Node.js `20.x` for both deployments.

## 1. Backend Deploy on Render

Project root:

```bash
cd InternNova-Backend
```

Required environment variables on Render:

```env
DATABASE_URL=your_mongodb_connection_string
FRONTEND_URL=https://your-frontend-domain.vercel.app
NODE_ENV=production
SCRAPE_API_KEY=your_optional_secret_key
```

Render dashboard settings:

```text
Root Directory: InternNova-Backend
Build Command: npm install
Start Command: npm start
Health Check Path: /health
```

Render CLI commands:

```bash
npm install -g @render/cli
render login
render blueprint launch
```

If you use the included `render.yaml`, run the blueprint command from inside `InternNova-Backend`.

## 2. Frontend Deploy on Vercel

Project root:

```bash
cd InternNova
```

Required environment variable on Vercel:

```env
NEXT_PUBLIC_BACKEND_URL=https://your-render-backend.onrender.com
```

Vercel dashboard settings:

```text
Framework Preset: Next.js
Root Directory: InternNova
Build Command: npm run build
Install Command: npm install
Output Directory: .next
```

Vercel CLI commands:

```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

## 3. Recommended Deploy Order

Deploy backend first, then frontend.

```bash
cd InternNova-Backend
render blueprint launch
```

Copy the backend live URL after Render finishes, then deploy the frontend:

```bash
cd ../InternNova
vercel
vercel --prod
```

Set `NEXT_PUBLIC_BACKEND_URL` in Vercel to your Render backend URL before the production deploy.

## 4. Local Pre-Deploy Checks

Frontend:

```bash
cd InternNova
npm install
npm run build
```

Backend:

```bash
cd InternNova-Backend
npm install
npm start
```

Health check:

```bash
curl https://your-render-backend.onrender.com/health
```

Jobs API check:

```bash
curl https://your-render-backend.onrender.com/api/jobs
```

Protected manual scrape check:

```bash
curl -H "Authorization: Bearer your_optional_secret_key" https://your-render-backend.onrender.com/api/jobs/scrape
```

## 5. Important Notes

- `DATABASE_URL` is the correct backend MongoDB variable name.
- If you use MongoDB Atlas, allow Render network access in Atlas or the backend will fail to connect.
- `FRONTEND_URL` must exactly match your Vercel frontend domain with no trailing slash.
- `NEXT_PUBLIC_BACKEND_URL` must point to the Render backend base URL with no trailing slash.
- Render free instances can sleep, so the first request may be slow.
- Deploy frontend only after the backend URL is final.