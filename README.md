# Elevate Build Tech — Architecture, Construction & PMC

A high-performance, architecturally authentic Next.js website built to exact design specifications matching the **Elevate Build Tech** brand identity.

---

## 🎨 Color Palette & Design System

| Token | Hex Value | Role / Usage |
| :--- | :--- | :--- |
| **Elevate Black** | `#0E0F12` | Primary hero background, process section, dark frames |
| **Elevate Dark / Charcoal** | `#121316` / `#16171A` | Services section, project split container |
| **Terracotta / Ochre Accent** | `#C4683A` | Brand signature highlight, active CTA buttons, section 03 showcase card |
| **Warm Limestone Cream** | `#F4F0E8` | Section 01 (The Studio) and Section 05 (Start a Project) backgrounds |
| **Cream Pure / Card** | `#FBF9F5` | Form input cards, high contrast surface |
| **Muted Grey / Silver** | `#9CA3AF` / `#71717A` | Subtitles, architectural meta-labels, secondary copy |
| **Off-White / White** | `#FFFFFF` | Headlines, high contrast typography |

---

## 📐 Sections Implemented

1. **Header & Navigation (`components/Navbar.tsx`)**:
   - Geometric nested-frame architectural SVG brand logo.
   - Navigation links: `STUDIO`, `PROJECTS`, `SERVICES`, `CONTACT` with terracotta underline hover transitions.
   - Sticky backdrop blur header and responsive mobile drawer.

2. **Hero Section (`components/Hero.tsx`)**:
   - Tag: `ARCHITECTURE · CONSTRUCTION · PMC` in terracotta uppercase.
   - Primary headline: *"Spaces designed to rise."* in light architectural display typography.
   - Supporting copy: *"One team from first sketch to final handover, building across Sagar and the Malnad region."*
   - CTAs: Solid terracotta `"START A PROJECT"` + Ghost outline `"VIEW WORK"`.
   - Architectural wireframe graphic: 3 rising nested perspective portal frames with terracotta jamb accent and curved foundation line.
   - Bottom status ticker: `SAGAR, KARNATAKA · INDIA` & `EXPLORE OUR STUDIO ↓`.

3. **01 / The Studio (`components/StudioSection.tsx`)**:
   - Warm limestone cream background.
   - Large statement: *"Three disciplines. One structure. Always rising."*
   - Mission statement with regional territorial stamp: *"ROOTED IN SAGAR · BUILDING ACROSS MALNAD"*.

4. **02 / What We Do (`components/WhatWeDoSection.tsx`)**:
   - Deep charcoal background.
   - Heading: *"Design. Build. Deliver."* and subtitle *"Integrated expertise. A single, clear voice."*
   - Three discipline columns:
     - `01 Architecture`: Concept & Space Planning, Architectural Design, Site Plan & 3D Visualisation.
     - `02 Construction`: Civil Construction, Material Coordination, Site Execution.
     - `03 Project Management`: Project Coordination, Schedule & Cost Planning, Quality & Site Review.

5. **03 / Your Project (`components/YourProjectSection.tsx`)**:
   - Split card container.
   - Left dark container: *"A considered space. A connected team."*
   - Right terracotta block: *"ONE VISION, FROM THE GROUND UP."* with center architectural elevation line-art graphic.

6. **04 / How We Work (`components/ProcessSection.tsx`)**:
   - Heading: *"From first sketch to final handover."*
   - 4-stage sequential workflow:
     - `01 Discover`: Ideas, site, ambition.
     - `02 Design`: Plans, materials, details.
     - `03 Build`: Coordinated site execution.
     - `04 Deliver`: Finishing details and handover.

7. **05 / Start a Project (`components/ContactSection.tsx`)**:
   - Warm cream background.
   - Direct contacts: Phone `+91 90197 08760` (clickable `tel:`), location `Sagar, Karnataka – 577401`, and WhatsApp direct-chat trigger.
   - Interactive inquiry form: Name, Phone, Email, Service selection dropdown, Project details textarea, and `"SEND ENQUIRY ↗"` submission with validation and feedback state.

8. **Footer (`components/Footer.tsx`)**:
   - Brand logo, company summary, quick links, contact coordinates, copyright, and motto: *"DESIGN · BUILD · ELEVATE"*.

9. **Interactive Portfolio Showcase (`components/ViewWorkModal.tsx`)**:
   - Modal triggered by "VIEW WORK" with filterable projects in Sagar and Malnad.

---

## 🔍 SEO & Performance Architecture

- **Semantic HTML5**: Full hierarchy (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`).
- **Structured Data (JSON-LD)**: Schema.org `GeneralContractor` and `ArchitecturalFirm` entity definition with geo coordinates for Sagar (14.1670° N, 75.0298° E), services, opening hours, and area served (Malnad region).
- **Metadata**: Next.js App Router dynamic metadata for search engines and social cards (OpenGraph + Twitter Cards).
- **Dynamic Sitemap & Robots**: Generated at `/sitemap.xml` and `/robots.txt`.
- **Web App Manifest**: Mobile PWA manifest at `/manifest.webmanifest`.
- **Lightweight First-Load JS**: Only ~112 kB total First Load JS with prerendered static HTML.

---

## 🚀 Running Locally

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Run the development server
npm run dev

# 3. Open in browser
# Visit http://localhost:3000
```
