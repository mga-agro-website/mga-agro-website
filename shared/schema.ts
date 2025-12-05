import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Rice Product Types
export interface RiceProduct {
  id: string;
  name: string;
  description: string;
  origin: string;
  grainType: string;
  features: string[];
  image: string;
}

// Process Step Types
export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// Export Country Types
export interface ExportCountry {
  id: string;
  name: string;
  code: string;
  flag: string;
  since: number;
  x: number;
  y: number;
}

// Factory Image Types
export interface FactoryImage {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

// Statistics Types
export interface Statistic {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

// Certification Types
export interface Certification {
  id: string;
  name: string;
  icon: string;
}

// Packaging Types
export interface PackagingProduct {
  id: string;
  size: string;
  type: string;
  description: string;
  image: string;
}

// Navigation Items
export interface NavItem {
  id: string;
  label: string;
  href: string;
}
