import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set production environment
process.env.NODE_ENV = 'production';

// Simple API routes
app.post("/api/contact", async (req, res) => {
  res.json({ success: true, message: "Contact form submitted" });
});

app.post("/api/analysis", async (req, res) => {
  res.json({ success: true, message: "Analysis request submitted" });
});

app.post("/api/newsletter", async (req, res) => {
  res.json({ success: true, message: "Newsletter subscription submitted" });
});

app.get("/api/contacts", async (req, res) => {
  res.json([]);
});

app.get("/api/analyses", async (req, res) => {
  res.json([]);
});

// Serve static files from dist/public
const distPath = path.resolve(__dirname, '..', 'dist', 'public');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
}

// Serve index.html for all other routes (SPA routing)
app.get('*', (req, res) => {
  const indexPath = path.resolve(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

// Export the Express app for Vercel
export default app; 