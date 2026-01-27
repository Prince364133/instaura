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

  // Chatbot Endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        console.error("Missing GEMINI_API_KEY");
        return res.status(500).json({ message: "API Configuration Error" });
      }

      // Import dynamically or assume it's available since we installed it.
      // But for strict type checking, we should have imported at top.
      // I will use dynamic import or require here if top-level import is tricky with ReplaceFile
      // But better to use the top-level imports.
      // Since I can't easily add top-level imports with ReplaceFile if they are far away, 
      // I'll rely on the fact that I will add imports in a separate call or use require if needed.
      // Wait, I can't mix require and import easily in ES modules.
      // I should have used MultiReplace or just replaced the top too.

      // I'll assume I will fix imports in next step.

      // Let's write the logic here assuming `genAI` is initialized or I init it here.
      const { GoogleGenerativeAI } = await import("@google/generative-ai");
      // Dynamic import of system prompt?
      // It's a file I generated: ../server/systemPrompt.ts. 
      // Since we are in server/routes.ts, it is ./systemPrompt.ts
      const { SYSTEM_PROMPT } = await import("./systemPrompt");

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: "System Context: " + SYSTEM_PROMPT }],
          },
          {
            role: "model",
            parts: [{ text: "Understood. I am YAS, the strategic intelligence assistant. I will use the provided context to answer your questions." }],
          }
        ],
      });

      let retries = 0;
      const maxRetries = 3;
      let result;

      while (retries <= maxRetries) {
        try {
          result = await chat.sendMessage(message);
          break;
        } catch (err: any) {
          if ((err.status === 429 || err.status === 503) && retries < maxRetries) {
            retries++;
            const delay = 3000 * retries; // Backoff: 3s, 6s, 9s
            console.log(`Gemini API Busy (429/503). Retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
          } else {
            throw err;
          }
        }
      }

      if (!result) throw new Error("Failed to get response");


      const response = await result.response;
      const text = response.text();

      res.json({ message: text });
    } catch (error: any) {
      console.error("Chat error:", error);
      res.status(500).json({ message: "I'm having trouble thinking right now. Please try again." });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
