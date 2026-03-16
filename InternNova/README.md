# 🧠 Job Aggregator & Scraper Web App – InternNova

A full-stack job aggregation platform that automatically scrapes and displays the latest internship/job listings from trusted platforms like **Internshala**. It filters results to show only jobs posted in the last 24 hours and removes outdated listings after 2 days — keeping the feed fresh, clean, and duplicate-free.

---

## 🚀 Tech Stack

### 💻 Frontend
- **Next.js** – React framework for fast rendering and routing  
- **Tailwind CSS** – Utility-first CSS for styling  
- **ShadCN UI** – Accessible and modern UI components  
- **Dark/Light Theme** – Using `next-themes`

### ⚙️ Backend
- **Node.js + Express.js** – API server with job scraping logic  
- **Cheerio + Axios** – For parsing and scraping job data  
- **MongoDB** – Stores job listings with TTL indexing for auto-expiry

---

## ✨ Features

- 🔄 **Live Scraping**: Grabs fresh jobs from platforms like Internshala  
- ⏱️ **Fresh Feed**: Shows only jobs posted in the last 24 hours  
- 🧹 **Auto Cleanup**: Jobs auto-delete after 2 days using MongoDB TTL  
- 🚫 **No Duplicates**: Smart filtering based on job links  
- 🌙 **Modern UI**: Responsive frontend with theme toggle and clean design

---

## ⚙️ Getting Started

### 🔹 Frontend Setup

1. **Clone this repo**  
   ```bash
   git clone https://github.com/amitgupta7061/InternNova.git
   cd InternNova
Install dependencies

bash
Copy
Edit
npm install
Create .env.local

ini
Copy
Edit
NEXT_PUBLIC_BACKEND_URL=http://localhost:4000
Start development server

bash
Copy
Edit
npm run dev
Runs at: http://localhost:3000

🔹 Backend Setup
📦 Repo: InternNova-backend

Clone the backend:

bash
Copy
Edit
git clone https://github.com/amitgupta7061/InternNova-backend.git
cd InternNova-backend
Install dependencies:

bash
Copy
Edit
npm install
Add .env file:

ini
Copy
Edit
MONGODB_URL=your_mongo_connection_string
PORT=4000
Start server:

bash
Copy
Edit
npm run dev
Runs at: http://localhost:4000

📸 Preview
Add screenshots here once the UI is polished!

📄 License
MIT License. Free to use and extend.
## 🛠 Skills
React, HTML, Tailwind


## Screenshots
![InternNova Preview](https://raw.githubusercontent.com/amitgupta7061/InternNova/main/public/preview_1.png)

![InternNova Preview](https://raw.githubusercontent.com/amitgupta7061/InternNova/main/public/preview_2.png)