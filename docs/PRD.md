# Product Requirements Document (PRD) - Rack Legends

## 1. Project Overview
**Rack Legends** is a social club offering food, drinks, billiards ("bilyaran"), board games, gaming, and streaming.
The website will serve as a **visual showcase** and **informational hub** for the physical location.
**Key Vibe**: Retro-futuristic, Synthwave, Social, Fun.

## 2. Objectives
- **Primary Goal**: Inform visitors about offerings (Menu, Games, Location) and attract foot traffic.
- **Scope**: Informational Only. No user accounts, no payments, no online bookings.

## 3. Features
- **Home Page**: High-impact visual landing with "Wow" factor.
- **Menu Section**: Food & Drinks list (Hardcoded data).
- **Amenities Showcase**:
    - **Bilyaran (Billiards)**: Showcase tables/environment.
    - **Gaming**: Console/PC gaming setup details.
    - **Board Games**: Library list/photos.
    - **Streaming**: Netflix/Chill zones.
- **Location & Contact**: Map integration (or static map), address, usage fees/rates.

## 4. Technical Requirements
- **Framework**: Next.js (App Router).
- **UI Library**: `shadcn/ui`.
- **Styling**: Tailwind CSS.
- **Architecture**: **Atomic Design** (Atoms, Molecules, Organisms, Templates, Pages).
- **Data Source**: Hardcoded JSON/TS files in `./data/`.

## 5. Design & User Experience
- **Theme**: **Synthwave / Retro-Future** (Based on Logo).
    - **Backgrounds**: Deep Purple / Dark Void / Grid Elements.
    - **Accents**: Neon Cyan, Neon Magenta/Pink.
    - **Typography**: Modern Sans-Serif (Inter/Outfit) + Display Font for headers (resembling the "RACK" logo font if possible).
- **Logo**: Used as the primary brand anchor.

### Color Palette (Extracted from Logo)
- **Primary**: Neon Cyan (`#00f0ff` approx) - *Triangle, RACK top gradient*
- **Secondary**: Neon Magenta (`#b026ff` to `#ff0099`) - *RACK bottom gradient, Legends script*
- **Background**: Dark Violet/Black (`#0f0518`)
- **Grid/Lines**: Faint Purple (`#2d1b4e`)

## 6. Project Structure (Atomic)
```
/components
  /atoms       # Buttons, Typography, Icons, Badges
  /molecules   # Cards, ListItems, NavLinks
  /organisms   # Navbar, Footer, HeroSection, MenuList
  /templates   # PageLayouts
/app           # Routes
/data          # Hardcoded content (menu.json, games.json)
```

## 7. Open Questions
*None. Requirements locked for MVP.*
