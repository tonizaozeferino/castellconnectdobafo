# replit.md

## Overview

CastellConnect is a comprehensive digital marketing website for a Bavarian company targeting small and medium businesses. The application serves as a complete digital solutions platform, offering services from web design to AI-powered content creation. Built with modern React architecture and Express.js backend, it features a professional business website with contact forms, service portfolios, and client management capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight, declarative routing without the overhead of React Router
- **Styling**: TailwindCSS with custom CSS variables for consistent theming and responsive design
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility
- **State Management**: TanStack React Query for server state management and API calls
- **Forms**: React Hook Form with Zod validation for robust form handling
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript for API development
- **Database Layer**: Drizzle ORM for type-safe database operations
- **Data Validation**: Zod schemas shared between frontend and backend
- **Storage Interface**: Abstract storage pattern with in-memory implementation for development
- **API Design**: RESTful endpoints for contact forms, analysis requests, and newsletter subscriptions

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM configuration
- **Connection**: Neon Database serverless connection for cloud deployment
- **Schema Management**: Drizzle migrations for version-controlled database changes
- **Data Models**: Users, contacts, analysis requests, and newsletter subscriptions

### Page Structure & Features
- **Multi-page Application**: Home, services, industries, resources, about, contact, and legal pages
- **Service Portfolio**: Detailed pages for web design, SEO, social media, email marketing, voice/chatbots, and AI visuals
- **Industry Focus**: Specialized content for handwerk (crafts), gastronomy, and local services
- **Contact Forms**: Multiple form types with validation and API integration
- **Newsletter System**: Subscription management with topic preferences

### Design System
- **Color Palette**: Red (#DC052D), Blue (#0066B2), White (#FFFFFF)
- **Typography**: Inter font family for modern, readable typography
- **Components**: Reusable UI components with consistent styling
- **Responsive Design**: Mobile-first approach with TailwindCSS breakpoints

## External Dependencies

### Core Technologies
- **@tanstack/react-query**: Server state management and API caching
- **@radix-ui/***: Accessible UI component primitives (accordion, dialog, dropdown, etc.)
- **wouter**: Lightweight routing library for single-page applications
- **react-hook-form**: Form state management and validation

### Database & ORM
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-kit**: Database migration and schema management tools
- **@neondatabase/serverless**: Serverless PostgreSQL connection

### Validation & Types
- **zod**: Runtime type validation and schema definition
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation

### Styling & UI
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: Conditional class name utilities

### Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Replit-specific development tools

### Additional Libraries
- **date-fns**: Date manipulation utilities
- **embla-carousel-react**: Carousel/slider components
- **cmdk**: Command palette interface
- **nanoid**: Unique ID generation