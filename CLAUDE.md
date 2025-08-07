# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a single-page portfolio website for Gnarly Brands, an independent incubator agency. The site serves as a landing page for potential investors and clients to showcase brands and capabilities.

**Key Requirements:**
- No photography/complex imagery - typography, color, and motion carry the visual weight
- No mature brand system yet - the page itself IS the temporary brand
- Target audience: investors first, clients second
- Single conversion goal: contact engagement

## Architecture

### Core Files
- `index.html` - Main HTML structure with semantic layout
- `styles.css` - Complete CSS with mobile-first responsive design
- `script.js` - Interactive functionality and animations
- `advices.md` - Design brief and three complete concept options

### Key Components
1. **Header** - Logo, gradient line, contact button (absolute positioned)
2. **Hero Text** - Logotype SVG + main heading with entrance animations
3. **Glass Media** - Video background with PNG fallback and gradient overlays
4. **3D Logo Wheel** - Rotating carousel showing portfolio brands
5. **Description** - Company description text block

## Technical Implementation

### Styling Architecture
- Mobile-first responsive design using viewport units (vw/vh)
- CSS custom fonts (PP Monument Normal) with fallbacks
- 3D transforms for logo wheel using `perspective` and `transform-style: preserve-3d`
- CSS gradients for visual depth and fade effects
- Responsive breakpoints: ≤768px (mobile/tablet), ≥769px (desktop)

### Interactive Features
- **3D Logo Wheel**: Continuous rotation with hover pause, individual logo hover effects
- **Video Background**: Auto-loading with PNG fallback on error
- **Parallax Effects**: Subtle mouse-tracking movement for glass media
- **Entrance Animations**: Staggered reveals for hero text elements
- **Accessibility**: Respects `prefers-reduced-motion` setting

### Performance Optimizations
- Video autoplay with fallback handling
- Reduced motion support for accessibility
- Optimized transform animations using CSS transforms
- Hover state management to prevent animation conflicts

## Development Workflow

Since this is a simple static site with no build process:

**Local Development:**
- Open `index.html` directly in browser or use a local server
- For development servers: `python -m http.server 8000` or `npx serve .`
- No build, lint, or test commands - pure HTML/CSS/JS

**Key Development Notes:**
- Logo wheel system uses CSS custom properties (`--wheel-logo-count`, `--wheel-repetitions`) for dynamic configuration
- Video fallback system automatically switches to PNG on video load failure
- All animations respect `prefers-reduced-motion` accessibility setting
- Contact button currently logs to console - functionality needs implementation

**File Structure:**
```
/
├── index.html          # Main page
├── styles.css          # All styles
├── script.js           # All interactions
├── advices.md          # Design brief with 3 concepts
├── intro.txt           # Client requirements
├── glass.mp4           # Video background
├── glass.png           # Fallback image
├── logo.png            # Header logo
├── logotype.svg        # Hero SVG logotype
├── logotype.png        # Logotype PNG version
├── logo-*.png          # Brand portfolio logos (ballgame, drinky, no-one, prize, zed)
└── mockups/            # Design mockups at various screen sizes
```

## Design System Notes

**Current Palette:**
- Background: #C5C4C8 (light grey)
- Primary text: #282C38 (dark blue-grey)
- Secondary text: #1C262F (darker)
- White accents: #FFFFFF
- Gradients for depth and visual interest

**Typography:**
- PP Monument Normal (Light 400, Black 800)
- Responsive sizing using clamp() and viewport units
- Focus on typography hierarchy since no photography is used

**Interactive Design Patterns:**
- iOS-style fade gradients on logo wheel edges
- Smooth hover transitions (0.3s ease)
- Scale transforms for emphasis (1.1x on hover)
- Drop shadows for depth perception

The `advices.md` file contains three complete alternative design concepts ("Brutal Type", "Soft Gradient", "Terminal Neon") with full copy, styling specifications, and interaction details that can be implemented as alternatives to the current design.