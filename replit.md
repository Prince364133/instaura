# INSTAURA - Strategic Consulting Platform

## Overview
INSTAURA is a strategic consulting platform offering signal-driven business intelligence and growth strategies. The platform features service offerings, case studies, insights, and contact capabilities, including a dedicated Signal Architecture service page and comprehensive legal documentation. The business vision is to provide a professional web presence showcasing expertise in market intelligence, strategic consulting, and business transformation.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture
### Frontend Architecture
The frontend is built with **React 18** and **TypeScript** for a component-based, type-safe architecture. It utilizes **Vite** for fast development and optimized builds, **Wouter** for lightweight client-side routing, and **Framer Motion** for smooth animations. Styling is managed with **Tailwind CSS** and **Shadcn/ui** for a consistent, utility-first design. **TanStack Query** handles data fetching, caching, and synchronization. The UI/UX emphasizes a mobile-first, responsive design with engaging animations and interactive elements. A standardized design across all 48 case study subpages, including consistent structure, animations, approach section styling, navigation patterns, and data-testid coverage, has been implemented. All Insights subpages feature a unified 3-column search bar design.

### Backend Architecture
The backend uses **Express.js** with **TypeScript** for a RESTful API, ensuring full-stack type safety. **Drizzle ORM** provides type-safe database operations with **PostgreSQL**. Session management is handled by **connect-pg-simple**, and **Zod schemas** are used for runtime validation.

### Database Design
**PostgreSQL** is used with **Drizzle ORM** for relational data management. The schema includes contact form submissions and a basic user schema for future authentication. **Drizzle migrations** manage schema versioning.

### Component Architecture
The application adheres to **Atomic Design principles** using **Radix UI** primitives for reusable, accessible UI components. It features a responsive, mobile-first design, an animation system with ScrollReveal and Framer Motion, and robust form handling with **React Hook Form** and **Zod validation**.

### Development Environment
The project is configured for **Replit** with the cartographer plugin, utilizing **Vite** for hot reloading and **Path Aliases** for simplified imports.

## External Dependencies
### UI and Styling
- **Radix UI**: Headless UI components.
- **Tailwind CSS**: Utility-first CSS framework.
- **Lucide React**: Icon library.
- **Google Fonts**: Raleway and Inter fonts.

### Data and State Management
- **TanStack React Query**: Server state management and caching.
- **React Hook Form**: Form state management.
- **Framer Motion**: Animation library.

### Database and Backend
- **Neon Database**: Serverless PostgreSQL database hosting.
- **Drizzle ORM**: TypeScript ORM.
- **Express.js**: Node.js web framework.

### Development Tools
- **TypeScript**: Static type checking.
- **Vite**: Build tool and development server.
- **ESBuild**: Fast JavaScript bundler.
- **PostCSS**: CSS processing.