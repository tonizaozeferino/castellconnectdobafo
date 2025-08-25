import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertAnalysisSchema, insertNewsletterSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ success: true, id: contact.id });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        error: "Invalid contact data provided" 
      });
    }
  });

  // Analysis request submission
  app.post("/api/analysis", async (req, res) => {
    try {
      const validatedData = insertAnalysisSchema.parse(req.body);
      const analysis = await storage.createAnalysis(validatedData);
      res.json({ success: true, id: analysis.id });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        error: "Invalid analysis data provided" 
      });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const newsletter = await storage.createNewsletter(validatedData);
      res.json({ success: true, id: newsletter.id });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        error: "Invalid newsletter subscription data" 
      });
    }
  });

  // Get all contacts (for admin/portal use)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ 
        error: "Failed to retrieve contacts" 
      });
    }
  });

  // Get all analysis requests (for admin/portal use)
  app.get("/api/analyses", async (req, res) => {
    try {
      const analyses = await storage.getAnalyses();
      res.json(analyses);
    } catch (error) {
      res.status(500).json({ 
        error: "Failed to retrieve analysis requests" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
