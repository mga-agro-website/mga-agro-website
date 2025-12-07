import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  riceProducts, 
  processSteps, 
  exportCountries, 
  factoryImages, 
  statistics, 
  certifications, 
  packagingProducts 
} from "./data";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Rice Products API
  app.get("/api/products", (_req, res) => {
    res.json(riceProducts);
  });

  app.get("/api/products/:id", (req, res) => {
    const product = riceProducts.find(p => p.id === req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  });

  // Process Steps API
  app.get("/api/process", (_req, res) => {
    res.json(processSteps);
  });

  // Export Countries API
  app.get("/api/countries", (_req, res) => {
    res.json(exportCountries);
  });

  // Factory Images API
  app.get("/api/factory", (_req, res) => {
    res.json(factoryImages);
  });

  // Statistics API
  app.get("/api/statistics", (_req, res) => {
    res.json(statistics);
  });

  // Certifications API
  app.get("/api/certifications", (_req, res) => {
    res.json(certifications);
  });

  // Packaging Products API
  app.get("/api/packaging", (_req, res) => {
    res.json(packagingProducts);
  });

  // Company Info API
  app.get("/api/company", (_req, res) => {
    res.json({
      name: "Royal Rice Mills Ltd.",
      tagline: "From Paddy to Plate",
      established: 1987,
      headquarters: "Kolkata, West Bengal, India",
      phone: "+91 98765-43210",
      email: "info@royalrice.in",
      address: "Kolkata, West Bengal, India, 700001",
      hours: "Mon - Sat: 9:00 AM - 6:00 PM",
      socialMedia: {
        facebook: "https://facebook.com/royalrice",
        instagram: "https://instagram.com/royalrice",
        linkedin: "https://linkedin.com/company/royalrice",
        youtube: "https://youtube.com/royalrice",
      },
    });
  });

  return httpServer;
}
