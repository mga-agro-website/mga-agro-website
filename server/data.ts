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
    id: "classic-basmati",
    name: "Royal Classic Basmati",
    description: "The prince of rice varieties, grown in the foothills of the Himalayas. Known for its exquisite aroma and long grains.",
    origin: "Dehradun, India",
    grainType: "Aromatic Long Grain",
    features: ["Naturally Aromatic", "Himalayan Origin", "Gluten Free"],
    image: "rice-bags-1",
  },
  {
    id: "basmati-1121",
    name: "Platinum Basmati 1121",
    description: "World's longest grain basmati, perfect for biryanis and special occasions. Aged for 2 years for exceptional taste.",
    origin: "Punjab, India",
    grainType: "Extra Long Grain",
    features: ["Extra Long Grain", "Aged 2 Years", "Premium Quality"],
    image: "rice-bags-2",
  },
  {
    id: "govindobhog",
    name: "Heritage Govindobhog",
    description: "A premium aromatic short-grain rice from West Bengal, cherished for its sweet buttery flavor. Essential for offerings and desserts.",
    origin: "West Bengal, India",
    grainType: "Aromatic Short Grain",
    features: ["Sweet Aroma", "Traditional Indian", "Heritage Variety"],
    image: "rice-bags-3",
  },
  {
    id: "sona-masoori",
    name: "Premium Sona Masoori",
    description: "Lightweight and aromatic medium-grain rice. Ideally suited for daily meals and South Indian dishes.",
    origin: "Andhra Pradesh, India",
    grainType: "Medium Grain",
    features: ["Lightweight", "Low Starch", "Daily Premium"],
    image: "rice-bags-4",
  },
  {
    id: "wada-kolam",
    name: "Royal Wada Kolam",
    description: "Also known as Zini rice, this variety from Maharashtra is famous for its soft texture and taste.",
    origin: "Maharashtra, India",
    grainType: "Short Grain",
    features: ["Soft Texture", "Daily Staple", "Traditional Favorite"],
    image: "rice-bags-5",
  },
  {
    id: "sharbati",
    name: "Golden Sharbati",
    description: "A pocket-friendly variety that resembles Basmati in characteristics. Great for daily cooking.",
    origin: "Haryana, India",
    grainType: "Long Grain",
    features: ["Economical", "Fluffy Texture", "Modern Variety"],
    image: "rice-bags-1",
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
  { id: "uae", name: "United Arab Emirates", code: "AE", flag: "AE", since: 1995, x: 61, y: 38 },
  { id: "saudi", name: "Saudi Arabia", code: "SA", flag: "SA", since: 1997, x: 59, y: 36 },
  { id: "qatar", name: "Qatar", code: "QA", flag: "QA", since: 2000, x: 60.5, y: 37.5 },
  { id: "kuwait", name: "Kuwait", code: "KW", flag: "KW", since: 1998, x: 59.5, y: 35 },
  { id: "oman", name: "Oman", code: "OM", flag: "OM", since: 2002, x: 62.5, y: 40 },
  { id: "bahrain", name: "Bahrain", code: "BH", flag: "BH", since: 2001, x: 60.2, y: 37 },
  { id: "uk", name: "United Kingdom", code: "GB", flag: "GB", since: 2005, x: 49, y: 23 },
  { id: "usa", name: "United States", code: "US", flag: "US", since: 2008, x: 28, y: 32 },
  { id: "canada", name: "Canada", code: "CA", flag: "CA", since: 2010, x: 25, y: 18 },
  { id: "australia", name: "Australia", code: "AU", flag: "AU", since: 2012, x: 83, y: 67 },
  { id: "singapore", name: "Singapore", code: "SG", flag: "SG", since: 2003, x: 77, y: 50 },
  { id: "malaysia", name: "Malaysia", code: "MY", flag: "MY", since: 2004, x: 76, y: 49 },
  { id: "japan", name: "Japan", code: "JP", flag: "JP", since: 2015, x: 86, y: 31 },
  { id: "germany", name: "Germany", code: "DE", flag: "DE", since: 2011, x: 51.5, y: 25 },
  { id: "france", name: "France", code: "FR", flag: "FR", since: 2013, x: 49, y: 27 },
  { id: "italy", name: "Italy", code: "IT", flag: "IT", since: 2014, x: 52.5, y: 29 },
  { id: "india", name: "India", code: "IN", flag: "IN", since: 1990, x: 69, y: 40 },
  { id: "nepal", name: "Nepal", code: "NP", flag: "NP", since: 1992, x: 70, y: 37 },
  { id: "bhutan", name: "Bhutan", code: "BT", flag: "BT", since: 1994, x: 71, y: 37 },
  { id: "maldives", name: "Maldives", code: "MV", flag: "MV", since: 2006, x: 68, y: 48 },
  { id: "srilanka", name: "Sri Lanka", code: "LK", flag: "LK", since: 1996, x: 70, y: 47 },
  { id: "southafrica", name: "South Africa", code: "ZA", flag: "ZA", since: 2016, x: 56, y: 71 },
  { id: "mauritius", name: "Mauritius", code: "MU", flag: "MU", since: 2018, x: 63, y: 64 },
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
    image: "rice-bags-1",
  },
  {
    id: "5kg",
    size: "5 KG",
    type: "Luxury Box",
    description: "Rigid box with magnetic closure",
    image: "rice-bags-2",
  },
  {
    id: "10kg",
    size: "10 KG",
    type: "Designer Bag",
    description: "Woven jute with golden embroidery",
    image: "rice-bags-3",
  },
  {
    id: "25kg",
    size: "25 KG",
    type: "Commercial Pack",
    description: "Heavy-duty PP with zip lock",
    image: "rice-bags-4",
  },
  {
    id: "50kg",
    size: "50 KG",
    type: "Bulk Sack",
    description: "Industrial grade for export",
    image: "rice-bags-5",
  },
];
