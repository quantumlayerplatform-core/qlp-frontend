# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

QuantumLayer Platform Landing Page - A modern, responsive marketing website built with Next.js 14 featuring a glassmorphism design, waitlist system, and email integration.

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **UI**: React 18
- **Styling**: Tailwind CSS with custom theme extensions
- **Icons**: Font Awesome
- **Database**: Supabase
- **Email**: Resend API
- **Analytics**: Vercel Analytics
- **Animations**: Framer Motion

## Common Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint

# Run a specific component in isolation (no built-in command, use dev server)
npm run dev
# Then navigate to specific routes like /waitlist or /thank-you
```

## High-Level Architecture

### Component Structure
The app uses a modular component architecture where each major section of the landing page is its own component:
- **Hero.jsx**: Main landing section with animated background
- **Features.jsx**: Product features showcase
- **Architecture.jsx**: System architecture visualization
- **ContactForm.jsx**: Waitlist form with Supabase integration
- **About.jsx**: Company information section

### Styling Architecture
- **Tailwind Config**: Extended theme in `tailwind.config.js` with custom colors (space, electric, glass), animations, and spacing
- **CSS Modules**: Specialized styles in `styles/` directory:
  - `glassmorphism.css`: Glass morphism effects
  - `animations.css`: Custom animations and keyframes
  - `contactForm.css`: Form-specific styles

### API Integration Pattern
All external service integrations follow a serverless pattern through Next.js API routes:
- **Waitlist Submission**: `/api/waitlist/route.js` handles form submissions to Supabase and sends confirmation emails via Resend
- **Open Graph**: `/api/og/route.js` generates dynamic social media preview images

### Environment Variables Required
```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
RESEND_API_KEY=
RESEND_FROM_EMAIL=
```

### Key Architectural Decisions
1. **App Router**: Uses Next.js 14 App Router for better performance and server components
2. **Component Imports**: Uses dynamic imports where beneficial for code splitting
3. **Image Optimization**: All images use Next.js Image component for automatic optimization
4. **Font Loading**: Google Fonts loaded through Next.js font system for optimal performance
5. **Form Handling**: Server-side form processing with client-side validation
6. **Referral System**: Built-in referral tracking through URL parameters