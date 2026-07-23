<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->

---
name: Persona 5 Portfolio
description: Portfolio for Muhammad Reza Ananta — style meets substance
---

# Design System: Persona 5 Portfolio

## 1. Overview

**Creative North Star: "The Editorial Heist"**

A portfolio that moves with the confidence of a planned takedown. Every section arrives on its own terms, framed by sharp contrast and generous whitespace. The atmosphere is theatrical but not costume — it borrows the rebel-chic framing of Persona 5 (bold red against black and white, dramatic pacing, the sense that the layout is making a statement) and translates it into the editorial restraint of Apple, A24, and Kinfolk.

This system explicitly rejects the standard developer-portfolio template: the tidy card grid, the blue accent, the resume-template energy. Instead, it operates like a gallery — each project is an exhibit, each scroll reveals the next piece of evidence, and the red accent lands like a signature.

**Key Characteristics:**
- High-contrast black, white, and red — no gradients, no decoration
- Generous whitespace as a compositional tool
- Scroll-driven reveals with staggered choreography
- Sharp, geometric sans-serif throughout
- Editorial pacing — let the work breathe

## 2. Colors

**The Committed Red Rule.** One saturated color carries 30–60% of any given surface. Its presence is a statement, not an accent.

### Hue family

Anchor: warm red / crimson — the seed of the Phantom Thieves palette, translated into a professional register. Hue stays within ±10° of 18° on the OKLCH hue wheel.

### Strategy

- **Pure white** background (`oklch(1 0 0)`) — the brand lives in the red, not the surface
- **Near-black** ink (`oklch(0.08 0 0)`) — maximum contrast, no hidden warmth
- **Red primary** at a mid-lightness, saturated but not glowing (chroma ≤ 0.23) — used for hero framing, section dividers, key interactive elements
- **Pure white text on red fills** — the Helmholtz-Kohlrausch effect demands it

[Exact color values to be resolved during implementation. Seed guidance: primary in oklch(0.55–0.65 / 0.20–0.25 / 17–19°); bg at oklch(1 0 0); ink at oklch(0.04–0.10 0 0).]

### Named Rules

**The One Surface Rule.** There is exactly one background color (white) and one card/surface color (near-white pulled toward ink). No tiered containers, no nested cards. Content sits directly on the page or not at all.

**The Flat Rule.** No shadows, no elevation. Depth is communicated through scale, position, and color contrast — not through box-shadows or blurs.

## 3. Typography

**The Single Voice Rule.** One typeface carries everything — display, body, and label. Pairing is achieved through weight, size, and case, not through a second face.

### Direction

Sharp geometric sans-serif throughout. The face should feel confident at display sizes (24px–96px) and equally comfortable in body text. Character: sharp terminals, even proportions, a slight technical edge that reads as crafted rather than cold. Recommended: DM Sans (geometric with distinctive sharp cuts, available in variable weight).

### Hierarchy (to be resolved during implementation)

- **Display** (ExtraBold 800, clamp(3rem, 8vw, 6rem), line-height 0.95, letter-spacing -0.03em): Hero statements only. text-wrap: balance.
- **Headline** (Bold 700, clamp(1.75rem, 4vw, 3rem), line-height 1.1): Section titles.
- **Title** (Medium 500, clamp(1.125rem, 2vw, 1.5rem), line-height 1.3): Project cards, feature labels.
- **Body** (Regular 400, 1rem–1.125rem, line-height 1.6, max-width 70ch): Long-form project descriptions.
- **Label** (Medium 500, 0.75rem–0.875rem, letter-spacing 0.05em, uppercase): Meta information, tags, navigation.

### Named Rules

**The Generous Line Rule.** Body text gets room to breathe (line-height 1.6). Tight body copy reads as rushed; this portfolio has nothing to rush.

**The Caps Lock Rule.** Uppercase is reserved for navigation, labels, and metadata. Headings and body are sentence-case. All-caps headings read as shouting.

## 4. Elevation

Flat by default. The system conveys hierarchy through contrast, scale, and position — not through shadows, blurs, or lifted surfaces. Depth perception comes from:
- The red primary pushing forward against black and white
- Scale shifts on scroll (larger elements feel closer)
- Theatrical framing with generous whitespace isolating key content

No shadow vocabulary. No box-shadow tokens. If an element needs to feel interactive, it scales or shifts position rather than gaining a shadow.

## 5. Components

[No components exist yet. To be defined during implementation and captured on the next `/impeccable document` scan pass.]

## 6. Do's and Don'ts

### Do:
- **Do** use red as a committed surface color (30–60% of a section, not a 2px stripe).
- **Do** use pure white backgrounds — let the brand live in the red, not in a tinted surface.
- **Do** animate content into view with staggered scroll-driven reveals.
- **Do** keep body text at ≥4.5:1 contrast against its background.
- **Do** use white text (not dark) on any red-filled element.
- **Do** use generous whitespace — sections should breathe.
- **Do** let projects be the main event; the design frames, never upstages.
- **Do** respect reduced motion preferences — all reveals degrade gracefully to instant appearance.

### Don't:
- **Don't** create a standard developer portfolio (white card grid, blue accent, tidy template). This is anti-referenced as the default to avoid.
- **Don't** use gradient text, glassmorphism, or decorative blurs — the palette is intentionally flat.
- **Don't** use side-stripe borders (border-left/right >1px as colored accents).
- **Don't** add shadows or elevation — the system is flat by design.
- **Don't** use gaming UI motifs (character art, game chrome, icon borders) — the inspiration is design philosophy, not iconography.
- **Don't** use a second typeface — one sharp sans-serif carries everything.
- **Don't** put tiny all-caps tracked kickers above every section — vary the cadence.
- **Don't** let the red drop below 3:1 contrast against white when used as a text-on-color fill.
