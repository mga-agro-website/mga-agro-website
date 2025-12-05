# Royal Basmati Premium Rice Mill - Design Guidelines

## Design Approach
**Reference-Based Luxury E-Commerce**: Drawing inspiration from premium product showcases (luxury fashion, high-end food brands) with cinematic storytelling and Indian/Bangladeshi heritage craftsmanship aesthetics.

## Core Design Principles
- **Premium Above All**: Every element communicates luxury, quality, and trustworthiness
- **Cinematic Experience**: Video backgrounds, smooth animations, immersive storytelling
- **Golden Touch**: Consistent use of golden accents as signature premium element
- **Heritage Meets Modern**: Traditional rice culture presented with cutting-edge web design

## Color Palette
- **Primary Gold**: #D4AF37 (or #C9A24A) - Golden rice/premium accent
- **Base Black**: #0F0F0F (or #121212) - Rich, deep backgrounds
- **Accent Cream**: #F8F5F0 - Off-white/creamy sections
- **CTA Green**: #1B5E20 - Emerald green for calls-to-action (rice field inspiration)

## Typography System
- **Display/Headlines**: Cinzel (serif, premium feel)
- **Body Text**: Satoshi or Neue Montreal (clean, modern)
- **Hierarchy**: Bold contrast between headline and body sizes

## Layout & Spacing
Use Tailwind spacing: Primarily 4, 8, 12, 16, 24, 32 units for consistency

---

## Section-by-Section Specifications

### 1. Hero Section (Full Viewport)
- Full-screen video background: Slow-motion golden paddy fields at sunrise/sunset
- 60% black overlay on video
- Center-aligned text stack:
  - "From Paddy to Plate" (large Cinzel)
  - "Since 1987" (small, subtle)
  - "Premium Basmati & Chinigura Rice" (medium)
- Golden button: "Explore Our Collection" with emerald green hover + subtle glow
- Subtle grain texture overlay (veggie paper texture)
- Fallback: High-quality paddy field hero image for mobile

### 2. Floating Navigation
- Initial: Transparent background
- On scroll: Glassmorphism effect (blurred background, semi-transparent) + golden bottom border
- Logo: Golden rice grain icon + text
- Menu items: Home | Our Rice | Process | Factory | Gallery | Export | Contact
- Mobile: Full-screen golden-black hamburger menu with smooth transition

### 3. Trust Certification Bar
Thin horizontal section below hero:
- Icons + text for: ISO 9001:2015 | FSSC 22000 | 100% Pesticide Tested | Exported to 23 Countries | 37 Years of Excellence
- Golden icons, white text, subtle hover animations
- Centered layout with even spacing

### 4. Premium Rice Collection (Cards)
- Background: Creamy white (#F8F5F0)
- 4-6 product cards in grid layout
- Card Design:
  - Glassmorphism effect with floating appearance
  - Golden border (1-2px)
  - Macro photography of rice grains (extreme close-up, tactile feel)
  - Product name in Cinzel
  - Hover: Card lifts, golden glow appears, "View Details" button emerges (emerald green)
- Products: Royal Kalijeera, Platinum Basmati 1121, Diamond Chinigura, Premium Miniket Gold

### 5. Our Process (Vertical Timeline)
- Full-screen parallax paddy field background
- Center vertical golden line
- 6 steps alternating left-right:
  1. Harvesting → 2. Drying → 3. De-husking → 4. Polishing → 5. Color Sorting → 6. Packaging
- Each step: Cinematic photo + minimal text + icon
- GSAP scroll-triggered animations (steps appear sequentially)

### 6. Factory Gallery
- Pure black background (#0F0F0F)
- Masonry grid layout (Pinterest-style)
- Photos: German color sorter, Japanese Satake machines, clean packaging room, uniformed workers
- Hover: Image zoom + golden frame border
- Bottom text: "State-of-the-art Japanese & German Technology" (golden)

### 7. Why Choose Us (Animated Counters)
- Subtle golden gradient background
- 6 circular statistic displays:
  - 50,000+ Tons/Year | 23 Countries Export | 16 Color Sorters | 37 Years Experience | 500+ Farmer Families | 100% Quality Checked
- Odometer counter effect on scroll
- Golden circular borders with icons

### 8. Interactive Export Map
- Black background
- SVG world map with 23 export countries highlighted in golden glow
- Hover: Country name, flag, "Since 20XX"
- Heading: "Trusted by 23 Countries Worldwide" (Cinzel, golden)

### 9. Packaging Showcase
- 5-7 packaging mockups: 1kg, 5kg, 10kg, 25kg, 50kg
- 3D rotating mockups or parallax scroll effect
- Show variety: Matte black pouches, golden jute bags, luxury boxes
- Heading: "Packaging That Speaks Quality"

### 10. Footer
- Deep black background
- Golden line separator at top
- 4-column grid: Logo/Description | Quick Links | Contact (golden icons) | Social Media (golden hover)
- Bottom: "© 2025 Royal Rice Mills Ltd. Crafted with passion in Bangladesh"

---

## Interaction Patterns
- **Smooth Scrolling**: 60fps throughout
- **Hover States**: Golden glow, lift effects, emerald green for CTAs
- **Animations**: GSAP for scroll-triggered, Framer Motion for micro-interactions
- **Glassmorphism**: Navigation, cards with blur + transparency
- **Video**: Hero background with fallback images

## Mobile Adaptations
- Hero: Static image with same overlay/text
- Navigation: Full-screen golden hamburger menu
- Cards: Horizontal swiper/slider (1 at a time)
- Timeline: Simplified vertical flow
- All animations: Optimized for 60fps mobile performance

## Images Required
1. **Hero Video/Image**: Golden paddy field at sunset/sunrise (cinematic, slow-motion feel)
2. **Rice Macro Photos**: 4-6 extreme close-ups of different rice varieties (textural, premium)
3. **Process Timeline**: 6 high-quality photos of each production stage
4. **Factory Photos**: 4-6 images of modern machinery and clean facilities
5. **Packaging Mockups**: 5-7 product packaging variations in 3D or high-fidelity renders