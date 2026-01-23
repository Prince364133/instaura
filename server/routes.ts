import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const contactData = insertContactSchema.parse(req.body);
      
      // Store the contact submission
      const contact = await storage.createContact(contactData);
      
      // In a real application, you might also:
      // - Send an email notification
      // - Add to CRM system
      // - Trigger automated workflows
      
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: contact.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false,
          message: "Invalid form data",
          errors: error.errors 
        });
      } else {
        console.error("Contact form submission error:", error);
        res.status(500).json({ 
          success: false,
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all contacts (for admin purposes - in a real app this would be protected)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json({ contacts });
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ 
        success: false,
        message: "Error fetching contacts" 
      });
    }
  });

  // Get a specific contact by ID
  app.get("/api/contacts/:id", async (req, res) => {
    try {
      const contact = await storage.getContact(req.params.id);
      if (!contact) {
        return res.status(404).json({ 
          success: false,
          message: "Contact not found" 
        });
      }
      res.json({ contact });
    } catch (error) {
      console.error("Error fetching contact:", error);
      res.status(500).json({ 
        success: false,
        message: "Error fetching contact" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
