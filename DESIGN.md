---
# Note: color values are OKLCH (the project's canonical format). Stitch will emit a linter
# warning but not a hard error; hex approximations would lose precision.
name: Andres Arreola Portfolio
description: Mechanical engineering portfolio; hydropower specialist, 2026 DOE Hydropower Collegiate Competition national champion.
colors:
  bg:           "oklch(1 0 0)"
  bg-surface:   "oklch(0.975 0.006 75)"
  text-ink:     "oklch(0.13 0.008 255)"
  text-muted:   "oklch(0.47 0.015 260)"
  border:       "oklch(0.88 0.005 255)"
  accent:       "oklch(0.65 0.13 65)"
  accent-deep:  "oklch(0.57 0.14 65)"
  accent-text:  "oklch(0.40 0.12 65)"
  tag-bg:       "oklch(0.96 0.02 65)"
typography:
  display:
    fontFamily:    "'Barlow Condensed', system-ui, sans-serif"
    fontSize:      "clamp(3.5rem, 9vw, 5.5rem)"
    fontWeight:    700
    lineHeight:    1
    letterSpacing: "-0.02em"
  headline:
    fontFamily:    "'Barlow Condensed', system-ui, sans-serif"
    fontSize:      "clamp(1.75rem, 3.5vw, 2.5rem)"
    fontWeight:    700
    lineHeight:    1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily:    "'Barlow Condensed', system-ui, sans-serif"
    fontSize:      "1.2rem"
    fontWeight:    700
    lineHeight:    1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif"
    fontSize:   "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif"
    fontSize:   "0.875rem"
    fontWeight: 600
rounded:
  base:  "6px"
  pill:  "999px"
  photo: "10px"
spacing:
  section: "5rem"
  card:    "1.75rem"
  gap:     "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor:       "oklch(0.13 0.008 255)"
    rounded:         "{rounded.base}"
    padding:         "0.65rem 1.4rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-deep}"
    textColor:       "oklch(0.13 0.008 255)"
    rounded:         "{rounded.base}"
    padding:         "0.65rem 1.4rem"
  button-outline:
    backgroundColor: "transparent"
    textColor:       "{colors.accent-text}"
    rounded:         "{rounded.base}"
    padding:         "0.65rem 1.4rem"
  link-pill-primary:
    backgroundColor: "{colors.accent}"
    textColor:       "oklch(0.13 0.008 255)"
    rounded:         "{rounded.pill}"
    padding:         "0.4rem 0.9rem"
  link-pill-outline:
    backgroundColor: "transparent"
    textColor:       "{colors.accent-text}"
    rounded:         "{rounded.pill}"
    padding:         "0.4rem 0.9rem"
  card-default:
    backgroundColor: "{colors.bg}"
    rounded:         "{rounded.base}"
    padding:         "{spacing.card}"
  tag-chip:
    backgroundColor: "{colors.tag-bg}"
    textColor:       "{colors.accent-text}"
    rounded:         "{rounded.pill}"
    padding:         "0.2rem 0.6rem"
---

# Design System: Andres Arreola Portfolio

## 1. Overview

**Creative North Star: "The Field Engineer's Notebook"**

This system is built for precision and credibility: a document that earns authority through specificity, not decoration. The aesthetic is industrial-condensed — dense information treated with care, a palette that references measurement instruments rather than software, typography that communicates at a glance. Every element asks to be read for its content, not admired for its styling. The audience is a hiring manager or engineer reviewing a technical portfolio; the system makes content easy to scan and impossible to misread.

The accent color is Measurement Amber: the amber of signal indicators, pressure gauges, and test bench warning lights. It appears as a deliberate mark — a highlight on what matters — rather than a theme wash. Against near-white and near-black neutrals with a slight cool-blue tint, it creates precise contrast that says "this is significant" without competing with the engineering content it marks.

The display typeface is Barlow Condensed: tall, compressed, with proportions borrowed from instrument panel labels and field documentation. The body type is a high-quality system font — zero performance cost, maximum legibility, no design statement. The pairing is a contrast axis: the display font carries the author's voice; the body font reads like a clean technical report.

**This system explicitly rejects:**
- The generic engineering portfolio default (blue-600 + white + Inter = invisible in a stack)
- SaaS landing page aesthetics: cream/sand neutral backgrounds, gradient text, glassmorphism
- Decorative UI without engineering substance (hero metrics, identical card grids, scrolled fade-rises on every section)
- Side-stripe borders, gradient text, uppercase tracked eyebrows on every section

**Key Characteristics:**
- Industrial condensed display font (Barlow Condensed 700) at aggressive fluid scale
- Single accent: Measurement Amber at two OKLCH levels — background use (L=0.65) and text use (L=0.40)
- OKLCH throughout; perceptually uniform transitions across the amber-to-dark-amber gradient
- Flat surfaces by default; shadows respond to state, not applied as decoration
- One page-load choreography on the hero; no scroll-triggered fade-rise on every section
- WCAG AA contrast verified across light and dark modes for all text/background combinations

## 2. Colors: The Measurement Amber Palette

A near-white neutrals stack with a single deliberate accent. The amber appears at two lightness levels — one for backgrounds and decorative use, one for text — both with WCAG AA verified contrast.

### Primary

- **Measurement Amber** (`oklch(0.65 0.13 65)`): The accent color. Used on filled button backgrounds, card-featured border, card-award badge border, list bullet markers, and the hero-win callout border. Never used as body text on white — insufficient contrast. See the Two-Level Amber Rule.
- **Measurement Amber Deep** (`oklch(0.57 0.14 65)`): Hover state for amber-filled elements. Slightly darker, slightly more saturated; appears on `btn-primary:hover` and `link-pill-primary:hover`.
- **Amber-for-Text** (`oklch(0.40 0.12 65)`): Same hue family at L=0.40, giving ~6.5:1 on white. Used wherever amber appears as a foreground text color: link pills, card award labels, hero win places, social link hover, button-outline labels.
- **Tag Background** (`oklch(0.96 0.02 65)`): Very light amber-tinted chip surface. Pairs exclusively with Amber-for-Text. Also used for the hero-win callout background and the card-featured gradient start.

### Neutral

- **Page White** (`oklch(1 0 0)`): Main body background. Pure white — no warm or cool tint. Tint is carried by the accent, not the background.
- **Warm Surface** (`oklch(0.975 0.006 75)`): Alternate section background. A barely-perceptible amber tint (chroma 0.006, hue 75). Creates section rhythm without requiring borders or dividers.
- **Near-Black** (`oklch(0.13 0.008 255)`): Primary text. Near-black with a slight cool-blue lean. Also the hard-coded button text color on amber backgrounds (does not change in dark mode).
- **Cool Gray** (`oklch(0.47 0.015 260)`): Muted text for metadata, card descriptions, award descriptions, and nav links at rest. ~4.6:1 on white. In dark mode, lightened to `oklch(0.65 0.01 260)`.
- **Subtle Border** (`oklch(0.88 0.005 255)`): 1px borders on cards, nav bottom, footer top. Low chroma, slight cool lean — reads as neutral, not colored.

### Named Rules

**The Two-Level Amber Rule.** Amber exists at exactly two levels: `--c-accent` (L=0.65) for backgrounds, borders, and decorative marks, and `--c-accent-text` (L=0.40) for any foreground text use. Never cross levels. `--c-accent` on white text fails WCAG AA. `--c-accent-text` as a button background is too dark.

**The Single Accent Rule.** Measurement Amber is the only accent in the system. No secondary accent colors, gradient overlays, or decorative color fills. Its rarity is what makes it signal anything.

## 3. Typography

**Display Font:** Barlow Condensed (weights 600, 700) — Google Fonts, loaded via `display=swap`
**Body Font:** Segoe UI / system-ui / -apple-system stack — no web font load

**Character:** A deliberate contrast axis, not a harmony. Barlow Condensed is tall and compressed, with proportions reminiscent of instrument panel labels, field documentation, and measurement equipment. The system body font contributes zero typographic personality, which is intentional: the engineering content does the work.

### Hierarchy

- **Display** (Barlow Condensed 700, `clamp(3.5rem, 9vw, 5.5rem)`, line-height 1, -0.02em): Hero name only. Maximum scale, no leading. One element per page. Floor is 3.5rem (56px); ceiling 5.5rem (88px).
- **Headline** (Barlow Condensed 700, `clamp(1.75rem, 3.5vw, 2.5rem)`, line-height 1.2, -0.01em): Section titles (Projects, Resume, Contact). Fluid-scaled; ratio to Display is always ≥2×.
- **Title** (Barlow Condensed 700, `1.2rem`, line-height 1.25, -0.01em): Card titles. Fixed — enough authority to lead a card without competing with section headlines. Ratio to Body is 1.2×.
- **Body** (system stack 400, `1rem`, line-height 1.6): Prose, hero bio, card descriptions, skills list, contact copy. `text-wrap: pretty` on the body element to reduce orphans.
- **Label** (system stack 600, `0.875rem`): Tag chips, card year/metadata, nav links, button text, small callouts. Never below 0.875rem (14px) on any viewport.

### Named Rules

**The Condensed-on-Display Rule.** Barlow Condensed is used exclusively for headings (h1, h2, h3) and the nav logo. All body text, labels, and form elements use the system stack. Condensed body copy trades legibility for aesthetic — the wrong trade for a technical document.

**The Scale-Contrast Rule.** The ratio between Display minimum (3.5rem) and Title (1.2rem) is always ≥2.9×. Flat scales read as uncommitted. Each step in the hierarchy must be unmistakable at a glance.

## 4. Elevation

Flat by default. Surfaces rest at the same visual plane at rest; section separation is achieved through tonal layering (`--c-bg` vs. `--c-bg-alt`), not shadow. Shadows appear only in response to user interaction or scroll state — never applied decoratively at rest, except for the ambient card shadow which must distinguish cards from their background at all times.

### Shadow Vocabulary

- **Card resting** (`0 1px 4px rgba(0,0,0,.05), 0 6px 24px rgba(0,0,0,.07)`): A two-layer ambient shadow — a sharp near shadow at 1px and a soft far shadow at 6px. Distinguishes the card from the page without drawing attention to the shadow itself. Always present on cards.
- **Card hover** (`0 4px 24px rgba(0,0,0,.10)`): The far shadow only, amplified. Works with `translateY(-3px)` — card rises and its shadow widens. Both transform and shadow change simultaneously or the metaphor breaks.
- **Nav scrolled** (`0 2px 20px rgba(0,0,0,.09)`): Appears via IntersectionObserver when the hero section leaves the viewport. Signals the nav is now in an active layer above content. Invisible at rest.
- **Button primary hover** (`0 4px 12px color-mix(in srgb, var(--c-accent) 35%, transparent)`): An amber-tinted glow under the filled primary CTA on hover. Reinforces the amber button's identity; disappears at rest.
- **Dark mode scaling**: Shadow opacities increase to `rgba(0,0,0,.20–.25)` in dark mode. Dark surfaces need more shadow contrast to convey the same depth.

### Named Rules

**The State-Shadow Rule.** Shadows that are always-on at rest communicate hierarchy (card vs. page). Shadows that appear only on interaction communicate state (hover, scroll-past). Never use a decorative shadow for an element that doesn't need to be elevated.

## 5. Components

### Buttons

Precise and legible: designed like instruments, not decorations. One affordance is immediately obvious; no ambiguity about what clicking does.

- **Shape:** 6px radius (`var(--radius)`). Not pill-shaped; not sharp. Consistent with cards and all other bordered surfaces.
- **Primary:** Amber background (`var(--c-accent)`), near-black text (hard-coded `oklch(0.13 0.008 255)`, not `var(--c-text)` — see Do's and Don'ts). Padding: `0.65rem 1.4rem`. Weight 600.
- **Hover:** Darker amber (`var(--c-accent-h)`), `translateY(-1px)`, amber glow shadow. 150ms ease-out-quart. `text-decoration: none`.
- **Active:** `scale(0.98)`, `transition-duration: 80ms` — compressed for immediacy.
- **Outline:** Transparent background, 1.5px amber border, Amber-for-Text label. Hover: `var(--c-tag-bg)` fill, lift. Same dimensions as primary for consistent paired layout.
- **Focus:** `outline: 2px solid var(--c-accent); outline-offset: 3px` via `:focus-visible`. Never removed; never decorated away.

### Chips / Tags

- **Technology chips** (`.card-tags li`): No background, 1px `var(--c-border)` outline, muted text (`var(--c-muted)`). Low visual weight — used to list tech stacks without asserting hierarchy.
- **Category badges** (`.card-tag`): Amber tag background, Amber-for-Text, 999px radius, weight 600. Used for card categorization (DOE Competition, Personal Project, Entrepreneurship). Higher weight than technology chips.

### Cards / Containers

- **Corner style:** 6px radius. Consistent with all other bordered surfaces.
- **Background:** Page white (`var(--c-bg)`) on all section backgrounds.
- **Shadow:** Card resting shadow always present. Lifts 3px on hover with shadow amplification.
- **Border:** 1px `var(--c-border)` in default state. The featured DOE card (`card-featured`) uses amber border (`var(--c-accent)`) to identify it as the hero card.
- **Internal padding:** `1.75rem` on all sides. Consistent across all card types.
- **Card Featured:** Full-width (grid-column 1/-1), amber border, warm diagonal gradient (`linear-gradient(135deg, var(--c-tag-bg) 0%, var(--c-bg) 60%)`). One per page — for the primary showcase project.
- **Card Story:** Full-width, two-column inner grid (text left, photos right). Collapses to single column at 700px.

### Link Pills

The navigation affordance for project links (Live Demo, GitHub, article references). Distinct from buttons by shape and role: pills navigate, buttons act.

- **Outline variant:** 999px radius, 1.5px amber border, Amber-for-Text label, 0.875rem, weight 600. Hover: subtle amber fill (`var(--c-tag-bg)`), `translateY(-1px)`. Active: `scale(0.97)`.
- **Primary variant:** Filled with amber, near-black text (same hard-coded value as button-primary). Used for the primary action per card (Live Demo, DOE Article).
- **Layout:** Link pills inside `.card-links` are flex-wrapped with `gap: 0.5rem`. Pills never stack as block elements.

### Navigation

- **Structure:** Sticky, 60px height, `backdrop-filter: blur(8px)`, 92% background opacity. Partially transparent over scrolled content; the blur provides separation without a hard border.
- **Logo:** Barlow Condensed 700, 1.1rem, `var(--c-text)`. Functions as a home link (`href="#about"`). No underline on hover.
- **Links:** 0.95rem, weight 500, `var(--c-muted)` at rest. Transition to `var(--c-text)` on hover and when the `.active` class is set by IntersectionObserver. No underline.
- **Mobile (≤700px):** The link list is `position: absolute`, animated with `opacity + translateY(-6px → 0)` on toggle. Controlled by `aria-expanded` on the toggle button.
- **Scroll state:** Gains `box-shadow: 0 2px 20px rgba(0,0,0,.09)` when the hero section leaves the viewport. Handled by IntersectionObserver in `js/main.js`.

### Hero Win Callout

A signature one-off component for the DOE competition result. Appears once, in the hero section.

- **Style:** `var(--c-tag-bg)` background, 1px border via `color-mix(in srgb, var(--c-accent) 20%, transparent)`, 6px radius, `0.75rem 1rem` padding.
- **Typography:** Two lines — the award places in Amber-for-Text weight 700 at 0.9rem (Barlow Condensed via h1/h2/h3 global rule does not apply here — this is a `<span>`, so it uses the body stack), the competition context in `var(--c-muted)` at 0.8rem.
- **Animation:** Part of the hero choreography. Enters 160ms after the hero name (`rise` keyframe, 550ms ease-out-expo, fill-mode both).

## 6. Do's and Don'ts

### Do:
- **Do** use Amber-for-Text (`oklch(0.40 0.12 65)`, `var(--c-accent-text)`) wherever amber appears as a foreground text color. Prohibited: using the display amber `oklch(0.65 0.13 65)` as text on white — it fails WCAG AA (~3.0:1).
- **Do** hard-code button and pill primary text color as `oklch(0.13 0.008 255)` — never `var(--c-text)`. In dark mode, `--c-text` becomes near-white and fails contrast on amber backgrounds. The near-black value is invariant.
- **Do** use Barlow Condensed for h1, h2, h3, and the nav logo only. All other text uses the system stack.
- **Do** use the two-level amber system: `--c-accent` for backgrounds, borders, decorative marks; `--c-accent-text` for all foreground text. Never cross levels.
- **Do** animate card hover as a transform + shadow pair simultaneously. The physical lift metaphor requires both to move.
- **Do** use `--c-bg` / `--c-bg-alt` alternation for section rhythm. No dividers, no section-spanning borders.
- **Do** use `color-mix(in srgb, var(--c-accent) N%, transparent)` for subtle amber-tinted borders and shadows (hero-win border, card-award border, button primary glow). Full-opacity amber for these is too heavy.

### Don't:
- **Don't** use a warm-neutral (cream, sand, parchment, `oklch(L 0.01–0.05 75–100)`) as the body background. The background is pure white `oklch(1 0 0)`. Warmth is carried by the amber accent, not a tinted background.
- **Don't** use gradient text (`background-clip: text` with a gradient fill). Prohibited. Weight and scale carry emphasis; a single solid color always.
- **Don't** use glassmorphism or decorative blur. `backdrop-filter: blur(8px)` exists on the nav because it's functional — content scrolls beneath a sticky element. Nowhere else.
- **Don't** use a side-stripe border (`border-left` or `border-right` > 1px as a colored accent). Prohibited.
- **Don't** add a tiny uppercase tracked eyebrow above every section heading. No `PROJECTS`, `ABOUT`, `EXPERIENCE` labels in caps before h2 elements. The headings name themselves.
- **Don't** apply scroll-triggered fade-rise animations to every section. The `rise` keyframe fires exactly once, on page load, for the hero. Uniform scroll-triggered reveals on every section are the saturated AI scroll-interaction tell.
- **Don't** add a second accent color to the system. The amber is singular. A second accent dissolves the signal value of the first.
- **Don't** use a hero-metric layout (large number, small label, supporting stats, gradient accent). Prohibited SaaS cliché.
- **Don't** use `var(--c-text)` for text on amber-filled elements. Always use the hard-coded `oklch(0.13 0.008 255)` — it is invariant across light and dark modes.
