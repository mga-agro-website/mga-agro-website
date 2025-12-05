import type { 
  RiceProduct, 
  ProcessStep, 
  ExportCountry, 
  FactoryImage, 
  Statistic, 
  Certification, 
  PackagingProduct 
} from "@shared/schema";

export const riceProducts: RiceProduct[] = [
  {
    id: "kalijeera",
    name: "Royal Kalijeera",
    description: "The prince of rice varieties, known for its unique aroma and delicate texture. A heritage grain treasured for generations.",
    origin: "Bangladesh",
    grainType: "Aromatic Short Grain",
    features: ["Naturally Aromatic", "Diabetic Friendly", "Gluten Free"],
    image: "/images/rice-kalijeera.jpg",
  },
  {
    id: "basmati-1121",
    name: "Platinum Basmati 1121",
    description: "World's longest grain basmati, perfect for biryanis and special occasions. Aged for 2 years for exceptional taste.",
    origin: "Premium Select",
    grainType: "Extra Long Grain",
    features: ["Extra Long Grain", "Aged 2 Years", "Premium Quality"],
    image: "/images/rice-basmati.jpg",
  },
  {
    id: "chinigura",
    name: "Diamond Chinigura",
    description: "The queen of Bengali rice, cherished for its sweet fragrance and taste. A true gem from Dinajpur.",
    origin: "Dinajpur, Bangladesh",
    grainType: "Aromatic Short Grain",
    features: ["Sweet Aroma", "Traditional Bengali", "Heritage Variety"],
    image: "/images/rice-chinigura.jpg",
  },
  {
    id: "miniket",
    name: "Premium Miniket Gold",
    description: "Everyday premium rice with exceptional cooking quality and taste. Perfect for daily meals.",
    origin: "Bangladesh",
    grainType: "Fine Grain",
    features: ["Perfect Cooking", "Non-Sticky", "Daily Premium"],
    image: "/images/rice-miniket.jpg",
  },
  {
    id: "nazirshail",
    name: "Royal Nazirshail",
    description: "A beloved Bengali variety known for its soft texture and subtle sweetness. Ideal for traditional dishes.",
    origin: "Bangladesh",
    grainType: "Medium Grain",
    features: ["Soft Texture", "Subtle Sweet", "Traditional Favorite"],
    image: "/images/rice-nazirshail.jpg",
  },
  {
    id: "br28",
    name: "Golden BR-28",
    description: "High-yielding premium variety with excellent cooking properties. A modern classic.",
    origin: "Bangladesh",
    grainType: "Medium Grain",
    features: ["High Yield", "Excellent Cooking", "Modern Variety"],
    image: "/images/rice-br28.jpg",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Harvesting",
    description: "Hand-picked at the perfect moment when the golden paddy reaches optimal maturity for maximum flavor and nutrition.",
    icon: "wheat",
  },
  {
    id: 2,
    title: "Drying",
    description: "Sun-dried using traditional methods to preserve natural aroma and nutrients, ensuring the perfect moisture content.",
    icon: "sun",
  },
  {
    id: 3,
    title: "De-husking",
    description: "Gentle removal of the outer husk using precision Japanese machinery that protects the grain's integrity.",
    icon: "settings",
  },
  {
    id: 4,
    title: "Polishing",
    description: "State-of-the-art Satake polishing technology gives each grain that perfect pearl-white finish.",
    icon: "sparkles",
  },
  {
    id: 5,
    title: "Color Sorting",
    description: "16 German color sorters with AI technology ensure only the finest grains make it through our rigorous selection.",
    icon: "palette",
  },
  {
    id: 6,
    title: "Packaging",
    description: "Hermetically sealed in premium packaging to lock in freshness, aroma, and quality for your table.",
    icon: "package",
  },
];

export const exportCountries: ExportCountry[] = [
  { id: "uae", name: "United Arab Emirates", code: "AE", flag: "AE", since: 1995, x: 62, y: 38 },
  { id: "saudi", name: "Saudi Arabia", code: "SA", flag: "SA", since: 1997, x: 58, y: 36 },
  { id: "qatar", name: "Qatar", code: "QA", flag: "QA", since: 2000, x: 61, y: 38 },
  { id: "kuwait", name: "Kuwait", code: "KW", flag: "KW", since: 1998, x: 59, y: 34 },
  { id: "oman", name: "Oman", code: "OM", flag: "OM", since: 2002, x: 63, y: 40 },
  { id: "bahrain", name: "Bahrain", code: "BH", flag: "BH", since: 2001, x: 60, y: 37 },
  { id: "uk", name: "United Kingdom", code: "GB", flag: "GB", since: 2005, x: 48, y: 22 },
  { id: "usa", name: "United States", code: "US", flag: "US", since: 2008, x: 22, y: 32 },
  { id: "canada", name: "Canada", code: "CA", flag: "CA", since: 2010, x: 20, y: 22 },
  { id: "australia", name: "Australia", code: "AU", flag: "AU", since: 2012, x: 82, y: 68 },
  { id: "singapore", name: "Singapore", code: "SG", flag: "SG", since: 2003, x: 76, y: 51 },
  { id: "malaysia", name: "Malaysia", code: "MY", flag: "MY", since: 2004, x: 75, y: 50 },
  { id: "japan", name: "Japan", code: "JP", flag: "JP", since: 2015, x: 84, y: 30 },
  { id: "germany", name: "Germany", code: "DE", flag: "DE", since: 2011, x: 51, y: 24 },
  { id: "france", name: "France", code: "FR", flag: "FR", since: 2013, x: 48, y: 27 },
  { id: "italy", name: "Italy", code: "IT", flag: "IT", since: 2014, x: 52, y: 28 },
  { id: "india", name: "India", code: "IN", flag: "IN", since: 1990, x: 68, y: 40 },
  { id: "nepal", name: "Nepal", code: "NP", flag: "NP", since: 1992, x: 70, y: 36 },
  { id: "bhutan", name: "Bhutan", code: "BT", flag: "BT", since: 1994, x: 72, y: 36 },
  { id: "maldives", name: "Maldives", code: "MV", flag: "MV", since: 2006, x: 67, y: 50 },
  { id: "srilanka", name: "Sri Lanka", code: "LK", flag: "LK", since: 1996, x: 69, y: 48 },
  { id: "southafrica", name: "South Africa", code: "ZA", flag: "ZA", since: 2016, x: 55, y: 72 },
  { id: "mauritius", name: "Mauritius", code: "MU", flag: "MU", since: 2018, x: 62, y: 65 },
];

export const factoryImages: FactoryImage[] = [
  {
    id: "sorter",
    title: "German Color Sorter",
    description: "16 precision color sorting machines for flawless grain selection",
    image: "/images/factory-sorter.jpg",
    category: "Technology",
  },
  {
    id: "polisher",
    title: "Japanese Satake Polisher",
    description: "Premium grain polishing technology for perfect finish",
    image: "/images/factory-polisher.jpg",
    category: "Technology",
  },
  {
    id: "packaging",
    title: "Clean Room Packaging",
    description: "Hermetically sealed environment for freshness",
    image: "/images/factory-packaging.jpg",
    category: "Facility",
  },
  {
    id: "quality",
    title: "Quality Control Lab",
    description: "Advanced testing facilities for quality assurance",
    image: "/images/factory-quality.jpg",
    category: "Quality",
  },
  {
    id: "storage",
    title: "Climate-Controlled Storage",
    description: "Optimal preservation conditions for aging",
    image: "/images/factory-storage.jpg",
    category: "Facility",
  },
  {
    id: "workers",
    title: "Expert Team",
    description: "Trained professionals ensuring quality at every step",
    image: "/images/factory-team.jpg",
    category: "Team",
  },
];

export const statistics: Statistic[] = [
  { id: "capacity", value: 50000, suffix: "+", label: "Tons/Year Capacity", icon: "package" },
  { id: "countries", value: 23, suffix: "", label: "Countries Export", icon: "globe" },
  { id: "sorters", value: 16, suffix: "", label: "Color Sorters", icon: "scan" },
  { id: "years", value: 37, suffix: "", label: "Years Experience", icon: "clock" },
  { id: "farmers", value: 500, suffix: "+", label: "Farmer Families", icon: "users" },
  { id: "quality", value: 100, suffix: "%", label: "Quality Checked", icon: "check-circle" },
];

export const certifications: Certification[] = [
  { id: "iso", name: "ISO 9001:2015 Certified", icon: "award" },
  { id: "fssc", name: "FSSC 22000 Certified", icon: "shield" },
  { id: "pesticide", name: "100% Pesticide Tested", icon: "leaf" },
  { id: "export", name: "Exported to 23 Countries", icon: "globe" },
  { id: "years", name: "37 Years of Excellence", icon: "clock" },
];

export const packagingProducts: PackagingProduct[] = [
  {
    id: "1kg",
    size: "1 KG",
    type: "Premium Pouch",
    description: "Matte black with gold foil accents",
    image: "/images/packaging-1kg.jpg",
  },
  {
    id: "5kg",
    size: "5 KG",
    type: "Luxury Box",
    description: "Rigid box with magnetic closure",
    image: "/images/packaging-5kg.jpg",
  },
  {
    id: "10kg",
    size: "10 KG",
    type: "Designer Bag",
    description: "Woven jute with golden embroidery",
    image: "/images/packaging-10kg.jpg",
  },
  {
    id: "25kg",
    size: "25 KG",
    type: "Commercial Pack",
    description: "Heavy-duty PP with zip lock",
    image: "/images/packaging-25kg.jpg",
  },
  {
    id: "50kg",
    size: "50 KG",
    type: "Bulk Sack",
    description: "Industrial grade for export",
    image: "/images/packaging-50kg.jpg",
  },
];
