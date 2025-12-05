# Royal Basmati Premium Rice Mill - Project Documentation

## Overview

This is a premium e-commerce website for Royal Rice Mills, a rice mill company established in 1987 specializing in Basmati and Chinigura rice. The site showcases their premium rice products, manufacturing process, factory facilities, export markets, and certifications. The design follows a luxury aesthetic with golden accents, cinematic animations, and a focus on heritage craftsmanship combined with modern web technologies.

**Key Features:**
- Premium product showcase with multiple rice varieties
- Interactive process timeline visualization
- Factory gallery with image viewing capabilities
- Global export market visualization with interactive map
- Animated statistics and certifications display
- Responsive design optimized for mobile and desktop
- Smooth scroll animations and transitions throughout

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools:**
- React 18+ with TypeScript for type safety
- Vite as the build tool and development server
- Wouter for client-side routing (lightweight alternative to React Router)
- React Query (@tanstack/react-query) for server state management and data fetching

**UI Component System:**
- shadcn/ui components based on Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- Class Variance Authority (CVA) for component variant management
- Framer Motion for animations and transitions
- Custom color palette defined in CSS variables supporting the premium brand aesthetic (gold #D4AF37, royal black #0F0F0F, cream #F8F5F0)

**Typography:**
- Cinzel for display/headlines (premium serif font)
- Inter for body text (clean sans-serif)
- Font imports via Google Fonts

**Design System:**
- Component-based architecture using shadcn/ui components
- Consistent spacing using Tailwind's spacing scale (4, 8, 12, 16, 24, 32)
- Custom theme with elevation effects (hover-elevate, active-elevate-2)
- Golden accent color as signature premium element throughout

**Page Structure:**
- Single-page application (SPA) with smooth scrolling between sections
- Modular component architecture with section-based organization:
  - HeroSection: Full-viewport video/image background with overlay
  - Navigation: Floating navbar with glassmorphism effect on scroll
  - TrustBar: Certification badges
  - RiceCollection: Product showcase grid
  - ProcessTimeline: Animated vertical timeline
  - FactoryGallery: Masonry-style image gallery with lightbox
  - AnimatedCounters: Statistics with count-up animations
  - ExportMap: Interactive world map showing export countries
  - PackagingShowcase: Product packaging display
  - Footer: Contact information and links

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- HTTP server using Node's built-in `http` module
- RESTful API architecture

**API Design:**
- RESTful endpoints following resource-based patterns
- JSON responses for all API endpoints
- Error handling with appropriate HTTP status codes
- Currently serving static data from `server/data.ts`

**Data Layer:**
- In-memory storage implementation (`MemStorage` class)
- Designed with interface abstraction (`IStorage`) for easy migration to database
- Static data arrays for rice products, process steps, export countries, factory images, statistics, certifications, and packaging products

**Build Process:**
- Server bundled using esbuild for production
- Client bundled using Vite
- Separate build outputs for server and client
- Custom build script in `script/build.ts`

**Development Environment:**
- Hot module replacement (HMR) via Vite
- Vite middleware integration with Express
- Custom error overlays and development banners (Replit-specific)
- Source maps for debugging

### Data Storage Solutions

**Current Implementation:**
- In-memory data storage using Maps and Arrays
- User storage with Map-based implementation
- Static product/content data served from TypeScript files

**Database Configuration (Prepared but not actively used):**
- Drizzle ORM configured with PostgreSQL dialect
- Schema defined in `shared/schema.ts` with users table
- Migration support via drizzle-kit
- Connection string expected via `DATABASE_URL` environment variable
- Session storage configured for `connect-pg-simple` (PostgreSQL session store)

**Data Models:**
- User authentication schema (username/password)
- Product schemas: RiceProduct, ProcessStep, ExportCountry, FactoryImage, Statistic, Certification, PackagingProduct
- Schema validation using Zod with drizzle-zod integration

### Authentication & Authorization

**Current Setup:**
- Basic user schema with username and password fields
- UUID-based user IDs
- Authentication infrastructure prepared but not actively implemented in routes
- No session management currently active in the application

**Prepared Dependencies:**
- Passport.js for authentication strategies
- Express-session for session management
- connect-pg-simple for PostgreSQL session storage
- bcrypt/jsonwebtoken libraries available for password hashing and JWT tokens

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives (accordion, dialog, dropdown, popover, select, tabs, toast, tooltip, etc.)
- **Framer Motion**: Animation library for React components with scroll-based animations
- **Lucide React**: Icon library for consistent iconography
- **cmdk**: Command menu component
- **embla-carousel-react**: Carousel/slider component

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **class-variance-authority (CVA)**: Type-safe component variants
- **clsx & tailwind-merge**: Utility for conditional className merging

### Form Management
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Validation resolver for React Hook Form
- **Zod**: Schema validation library

### Data Fetching & State
- **@tanstack/react-query**: Server state management with caching
- **wouter**: Lightweight routing library

### Backend Services
- **Express.js**: Web application framework
- **Drizzle ORM**: TypeScript ORM for SQL databases
- **connect-pg-simple**: PostgreSQL session store for Express
- **pg**: PostgreSQL client

### Development Tools
- **TypeScript**: Type safety across the application
- **Vite**: Build tool and dev server
- **esbuild**: JavaScript bundler for production builds
- **tsx**: TypeScript execution for development

### Date & Utilities
- **date-fns**: Date utility library
- **nanoid**: Unique ID generation
- **uuid**: UUID generation

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Code mapping tool
- **@replit/vite-plugin-dev-banner**: Development environment banner

### Potential Future Integrations
The dependencies suggest readiness for:
- Payment processing (Stripe)
- Email notifications (Nodemailer)
- File uploads (Multer)
- Real-time features (WebSocket via ws)
- AI integration (OpenAI, Google Generative AI)
- Spreadsheet operations (XLSX)
- Rate limiting (express-rate-limit)