# ExplodeLabs

## Overview

A premium SaaS landing page for ExplodeLabs, a web design business specializing in high-converting websites for roofing companies. The design language evokes the precision and polish of Vercel, Stripe, and Linear — dark backgrounds, refined typography, generous whitespace, and subtle ambient motion that rewards attention without overwhelming it.

The signature visual effect is a canvas-based animated mesh gradient background: a 5x5 point grid of color fields that morphs, drifts, and breathes behind the content using simplex noise, creating a living, luminous surface in deep indigo, rose, teal, and amber tones. Overlaid on the gradient is a fine geometric grid pattern with mouse-reactive distortion — nodes near the cursor gently repel, creating a tactile, interactive depth layer. Floating glassmorphic cards with blurred reflections and animated orbiting dots add dimension to the hero, establishing a premium, trust-building first impression.

The page is a single continuous scroll with 13+ sections: fixed navigation, hero, trust bar, problem, solution, offer, why choose me, process, comparison, FAQ, final CTA, and footer. All animations are scroll-triggered for performance and elegance.

---

## Design Tokens

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | #050505 | Page background, all sections |
| Card | #111111 | Card backgrounds, nav, elevated surfaces |
| Border | rgba(255,255,255,.08) | Card borders, dividers, subtle outlines |
| Primary Text | #ffffff | Headlines, key data, primary CTAs |
| Secondary Text | #a1a1aa | Body text, descriptions, labels |
| Accent | #c084fc | Highlighted keywords, active states, glow accents |
| Accent Glow | rgba(192,132,252,.15) | Soft glow behind accent elements |
| Success | #22c55e | Success indicators, checkmarks, conversion metrics |
| Mesh Indigo | #1a1a4e | Gradient mesh base color |
| Mesh Rose | #ff6b9d | Gradient mesh highlight color |
| Mesh Teal | #4ecdc4 | Gradient mesh secondary highlight |
| Mesh Amber | #f7b731 | Gradient mesh warm accent |

### Typography

| Token | Family | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|--------|------|--------|-------------|----------------|-------|
| Display | Space Grotesk | 80px / 5rem | 700 | 1.05 | -0.03em | Hero headline |
| H2 | Space Grotesk | 48px / 3rem | 700 | 1.1 | -0.02em | Section headlines |
| H3 | Space Grotesk | 28px / 1.75rem | 600 | 1.2 | -0.01em | Card titles, subsections |
| Body | Inter | 18px / 1.125rem | 400 | 1.65 | -0.011em | Paragraphs, descriptions |
| Label | Inter | 13px / 0.8125rem | 500 | 1.4 | 0.08em | Eyebrow labels, uppercase |
| Mono | JetBrains Mono | 14px / 0.875rem | 400 | 1.5 | 0 | Data values, stats |
| Nav | Inter | 15px / 0.9375rem | 500 | 1.4 | -0.01em | Navigation links |
| CTA | Inter | 16px / 1rem | 600 | 1 | 0.01em | Button text |

### Spacing

| Token | Value | Usage |
|-------|-------|-------|
| Section Padding | 120px / 7.5rem | Vertical padding between sections |
| Container Max | 1200px | Maximum content width |
| Container Side | 24px | Horizontal page padding |
| Grid Gap | 24px | Column/row gap in grids |
| Card Padding | 32px / 2rem | Internal card padding |
| Component Gap | 16px | Gap between related elements |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| Card | 20px | Cards, panels, containers |
| Button | 12px | Primary and secondary buttons |
| Pill | 9999px | Tags, labels, badges |
| Small | 8px | Small elements, inputs |

### Shadows

| Token | Value | Usage |
|-------|-------|-------|
| Card Shadow | 0 4px 24px rgba(0,0,0,.4) | Default card elevation |
| Card Hover | 0 8px 40px rgba(0,0,0,.5), 0 0 0 1px rgba(255,255,255,.1) | Card hover state |
| Glow Shadow | 0 0 60px rgba(192,132,252,.15) | Accent glow behind key elements |
| Button Glow | 0 0 40px rgba(192,132,252,.25) | Primary CTA glow on hover |

---

## Dependencies

- gsap (with ScrollTrigger)
- simplex-noise
- imagesloaded
- lucide (icons)

---

## Page: Landing Page (Single Page)

### Section 01 — Navigation

Fixed top navigation bar with frosted glass background that transitions from transparent to blur on scroll.

**Layout:**
- Position: fixed, top: 0, width: 100%, z-index: 100
- Height: 72px
- Background: transparent initially, transitions to rgba(17,17,17,.8) + backdrop-filter: blur(20px) after 80px scroll
- Border bottom: 1px solid transparent → rgba(255,255,255,.08) on scroll
- Inner container: max-width 1200px, centered, flex row, justify-content: space-between, align-items: center
- Left: Brand name "ExplodeLabs" in Space Grotesk 20px weight 700
- Center (desktop): Nav links — Home, Process, Portfolio, Pricing, FAQ — in Nav style, gap 32px
- Right: CTA button "Get A Free Redesign" — Background #ffffff, color #050505, Border Radius Button, padding 10px 20px, font CTA weight 600

**States:**
- Nav links: default Secondary Text, hover Primary Text with transition 0.2s ease
- CTA hover: background #e5e5e5, transform translateY(-1px), transition 0.2s ease
- Mobile (<768px): Center links collapse into hamburger menu

---

### Section 02 — Hero

Full-viewport hero section with animated mesh gradient canvas background, geometric grid overlay, and floating glassmorphic cards with orbiting dot animations.

**Background Layers (bottom to top):**
1. **Mesh Gradient Canvas** — Full viewport, position absolute, covers entire section. 5x5 simplex-noise animated gradient in indigo/rose/teal/amber. Soft, slow morphing. See Core Effects for full implementation.
2. **Geometric Grid Overlay** — SVG pattern of 50px spaced lines + nodes at intersections. Nodes near cursor gently repel (radius 150px, force 30px). Lines connect repelled nodes. Semi-transparent white (stroke rgba(255,255,255,.15), nodes rgba(255,255,255,.25)). See Core Effects for implementation.
3. **Vignette Overlay** — Radial gradient from transparent center to rgba(5,5,5,.7) edges, pointer-events none.

**Content Layout:**
- Section: min-height 100vh, position relative, display flex, align-items center
- Container: max-width 1200px, centered, padding 0 24px
- Two-column asymmetric layout: Left 55%, Right 45%
- Padding top: 120px (account for fixed nav)

**Left Column:**
- Eyebrow label: "WEB DESIGN FOR ROOFING COMPANIES" — Label style, uppercase, color Accent, margin bottom 16px. Appears with blur-reveal animation.
- Headline: "We Build Roofing Websites That" / "Convert Visitors Into" / "Booked Inspections" — Display style, color Primary Text. The words "Convert" and "Booked Inspections" have a subtle Accent glow text-shadow. Each line staggers in with blur-reveal (0.15s stagger).
- Subheadline: "We redesign roofing company websites with zero risk. You only pay if you love the result. No upfront costs, no contracts, no hidden fees." — Body style, color Secondary Text, max-width 480px, margin top 24px. Fades in after headline.
- Button group: flex row, gap 16px, margin top 40px
  - Primary CTA: "Get A Free Redesign" — Background #ffffff, color #050505, padding 16px 32px, Border Radius Button, font CTA. Hover: background #e5e5e5, Button Glow shadow, translateY(-2px). Transition 0.25s ease.
  - Secondary CTA: "View Our Process" — Background transparent, border 1px solid rgba(255,255,255,.2), color #ffffff, same padding/radius. Hover: border rgba(255,255,255,.4), background rgba(255,255,255,.05).
- Trust badges: margin top 32px, flex row, gap 24px
  - "5.0 Rating" with star icon
  - "100+ Roofing Sites" with check icon
  - "$0 Upfront" with shield icon
  - Each: Label style, color Secondary Text, flex row, align-items center, gap 6px

**Right Column — Floating Cards:**
Three glassmorphic cards arranged in a staggered floating composition. All cards use glassmorphism: background rgba(255,255,255,.08), backdrop-filter blur(20px), border 1px solid rgba(255,255,255,.15), border-radius 24px, box-shadow 0 8px 32px rgba(0,0,0,.3).

- **Card 1 (Lead Gen Stats):** Positioned top-left of the composition, width 280px, padding 24px.
  - Title: "Lead Generation" — H3 style, color Primary Text
  - Three stat rows with progress bars:
    - "Website Visits" — 2,847 / Mono style, green dot indicator. Progress bar: 70% fill in Success color.
    - "Form Submissions" — 186 / Mono style, green dot. Progress bar: 45% fill in Accent color.
    - "Call Requests" — 94 / Mono style, green dot. Progress bar: 30% fill in teal #4ecdc4.
  - Bars: height 6px, background rgba(255,255,255,.1), border-radius 3px, fill border-radius 3px. Animate width from 0 to target on load (1s duration, ease-out, stagger 0.2s).

- **Card 2 (Roofing Website Preview):** Positioned center-right, overlapping Card 1, width 320px, height 200px, overflow hidden.
  - Contains a browser chrome mockup: top bar with 3 colored dots (red #ff5f56, yellow #ffbd2e, green #27c93f) at 12px diameter, spaced 8px, padding 12px 16px, background rgba(0,0,0,.3).
  - Below chrome: a preview image of a roofing website (use `generate_image` prompt: "Modern roofing company website displayed in a browser window, dark theme with hero image of a professional roofer on a residential roof, clean navigation, contact form visible, premium design, screenshot style, high quality").
  - The entire card has a subtle float animation: translateY oscillation of 10px over 6s, ease-in-out, infinite.

- **Card 3 (Orbiting Activity Dots):** Positioned bottom-left, overlapping other cards, width 260px, padding 20px.
  - Title: "Live Activity" — H3 style, color Primary Text, margin-bottom 16px
  - Three orbiting dot systems (see Core Effects for implementation):
    - Orbit 1: 4 dots, colors #ff6b9d, #4ecdc4, #c084fc, #f7b731, orbit radius 32px, 8s duration, clockwise
    - Orbit 2: 3 dots, colors #4ecdc4, #f7b731, #ff6b9d, orbit radius 24px, 12s duration, counter-clockwise
    - Orbit 3: 5 dots, colors #c084fc, #4ecdc4, #ff6b9d, #f7b731, #ffffff, orbit radius 40px, 16s duration, clockwise
  - Each orbit container is a circular area with thin border rgba(255,255,255,.1), positioned in a flex row with gap 32px.
  - The orbits start animating when the hero section enters viewport (triggered by IntersectionObserver).

**Card Entrance Animations:**
- All three cards fade in + translateY(40px → 0) + scale(0.95 → 1) on page load
- Duration: 0.8s, ease power3.out, stagger 0.2s between cards
- Delay: 0.3s after hero text completes

---

### Section 03 — Trust Bar

Horizontal scrolling marquee of company logos and trust indicators. Creates social proof momentum.

**Layout:**
- Background: #0a0a0a
- Padding: 40px 0
- Border top/bottom: 1px solid Border
- Overflow: hidden

**Content:**
- Two identical rows of items, animated with CSS translateX for infinite horizontal scroll
- Left-to-right scroll, duration 30s, linear, infinite
- Items (repeated for seamless loop):
  - "5.0 Rating" + 5 star icons
  - "100+ Roofing Companies Served"
  - "Google Partner"
  - "$0 Upfront Cost"
  - "5-Day Turnaround"
  - "100% Satisfaction"
  - Separator dot (4px circle, rgba(255,255,255,.2))
- Typography: Label style, color Secondary Text, flex row, align-items center, gap 12px
- Star icons: 14px, color #f7b731 (filled), gap 2px
- Hover: marquee pauses (animation-play-state: paused)

**Animation:**
- GSAP ScrollTrigger: opacity 0 → 1, translateY(20px → 0), duration 0.6s, trigger start "top 90%"

---

### Section 04 — Problem

Three-card grid highlighting problems roofing companies face with their current websites.

**Layout:**
- Background: #050505
- Padding: Section Padding vertical
- Container: max-width 1200px, centered

**Header:**
- Eyebrow: "THE PROBLEM" — Label style, uppercase, color Accent, text-align center
- Headline: "Your Current Website Is Costing You Jobs Every Single Day" — H2 style, color Primary Text, text-align center, max-width 640px, margin 16px auto 0
- Subheadline: "Most roofing websites are outdated, slow, and fail to turn visitors into leads." — Body style, color Secondary Text, text-align center, max-width 500px, margin 12px auto 0

**Cards Grid:**
- 3-column grid on desktop (1 column mobile), gap 24px, margin-top 64px
- Each card: background Card, border 1px solid Border, Border Radius Card, padding Card Padding

**Card 1 — "Outdated Design"**
- Icon: Clock icon (lucide), 24px, color Accent, in a 48px circle with background rgba(192,132,252,.1)
- Title: "Outdated Design" — H3 style, color Primary Text, margin-top 20px
- Body: "Your website looks like it was built in 2012. First impressions matter, and an outdated site makes potential customers question your professionalism before they even call." — Body style, color Secondary Text, margin-top 12px
- Bottom stat: "78% of visitors judge credibility by design" — Label style, color rgba(255,255,255,.4), margin-top 24px, border-top 1px solid Border, padding-top 16px

**Card 2 — "No Mobile Optimization"**
- Icon: Smartphone icon (lucide), 24px, color #4ecdc4, in circle with rgba(78,205,196,.1)
- Title: "No Mobile Optimization" — H3
- Body: "Over 70% of your potential customers are searching for roofers on their phones. If your site doesn't load perfectly on mobile, you're losing jobs to competitors."
- Stat: "71% of roofing searches happen on mobile"

**Card 3 — "Zero Lead Capture"**
- Icon: UserX icon (lucide), 24px, color #ff6b9d, in circle with rgba(255,107,157,.1)
- Title: "Zero Lead Capture"
- Body: "Your website is just a digital brochure. No clear call-to-action, no easy way to request a quote, no system to capture visitor information and follow up."
- Stat: "96% of visitors leave without contacting you"

**Animations:**
- Header: blur-reveal stagger 0.15s
- Cards: ScrollTrigger per card — opacity 0 → 1, translateY(40px → 0), duration 0.7s, stagger 0.15s, ease power3.out, start "top 80%"
- Card hover: translateY(-4px), border-color rgba(255,255,255,.15), Card Hover shadow, transition 0.3s ease

---

### Section 05 — Solution

Split layout: left side with feature list, right side with a large preview card showing a roofing website mockup.

**Layout:**
- Background: #050505
- Padding: Section Padding vertical
- Container: max-width 1200px, centered
- Two-column: Left 50%, Right 50%, gap 48px, align-items center

**Left Column:**
- Eyebrow: "THE SOLUTION" — Label style, color Accent
- Headline: "A Website Engineered To Book More Roofing Jobs" — H2 style, color Primary Text, margin-top 16px
- Feature list: margin-top 40px, flex column, gap 24px
  - Each item: flex row, gap 16px, align-items flex-start
  - Icon: CheckCircle icon (lucide), 22px, color Success, flex-shrink 0, margin-top 2px
  - Text block:
    - Title: H3 style (24px weight 600), color Primary Text
    - Description: Body style, color Secondary Text, margin-top 4px
  - Items:
    1. "Modern, Premium Design" / "A visually stunning website that immediately builds trust and positions you as the top roofing company in your area."
    2. "Built for Mobile-First" / "Lightning-fast load times and perfect responsiveness on every device, from iPhones to desktops."
    3. "Conversion-Optimized" / "Strategic call-to-action placement, quote request forms, and click-to-call buttons designed to maximize leads."
    4. "SEO-Ready Structure" / "Clean code, fast performance, and proper markup that helps Google rank you above competitors."
- CTA: "Get Your Free Redesign" — Primary button style (white bg, dark text), margin-top 40px

**Right Column:**
- Large glassmorphic card: background rgba(255,255,255,.05), backdrop-filter blur(16px), border 1px solid rgba(255,255,255,.12), Border Radius Card, padding 24px
- Inner content:
  - Browser chrome bar: 3 colored dots, background rgba(0,0,0,.4), padding 12px 16px, border-radius 12px 12px 0 0
  - Preview area: border-radius 0 0 12px 12px, overflow hidden, aspect-ratio 16/10
  - Image: Roofing website preview (use `generate_image` prompt: "Premium roofing company website homepage mockup, dark theme with large hero photo of residential roofing project, navigation bar with company logo, prominent 'Get Free Estimate' button, contact form section, before/after gallery, testimonials, modern clean design, high quality render")
- The card has a subtle parallax effect on scroll: translateY shifts at 0.9x speed (moves slightly slower than scroll)
- Card also has the float animation: translateY ±8px over 5s infinite

**Animations:**
- Left column: blur-reveal stagger on eyebrow, headline, each feature item (0.1s stagger)
- Right column: fade in + scale(0.95 → 1) + translateX(30px → 0), duration 0.9s, delay 0.3s after left starts
- ScrollTrigger: start "top 75%"

---

### Section 06 — Offer

The centerpiece offer section with a large glassmorphic card containing the value proposition.

**Layout:**
- Background: #050505 with subtle radial gradient from rgba(192,132,252,.05) at center to transparent at edges
- Padding: 160px vertical (larger than standard)
- Container: max-width 800px, centered (narrower for focus)

**Main Card:**
- Background: linear-gradient(135deg, rgba(255,255,255,.08) 0%, rgba(255,255,255,.03) 100%), backdrop-filter blur(24px)
- Border: 1px solid rgba(255,255,255,.15)
- Border Radius: 28px
- Padding: 64px 48px
- Text-align: center
- Position: relative
- Box-shadow: 0 0 80px rgba(192,132,252,.08), 0 20px 60px rgba(0,0,0,.4)

**Decorative corner elements:** Four small 8px circles at each corner, color Accent, opacity 0.3.

**Content:**
- Eyebrow badge: Pill shape, background rgba(192,132,252,.12), color Accent, padding 8px 16px, font Label. Text: "ZERO-RISK OFFER"
- Headline: "Try Your New Website Before Paying a Single Dollar" — H2 style (42px), color Primary Text, margin-top 24px
- Body: "We believe in our work so much that we're willing to prove it upfront. Here's how our zero-risk process works:" — Body style, color Secondary Text, margin-top 20px, max-width 560px, margin-inline auto

**Process Steps (vertical timeline inside card):**
- Margin-top 40px, flex column, gap 0
- Each step: flex row, gap 20px, align-items flex-start, padding 24px 0, border-bottom 1px solid Border (last one none)
- Left: Step number in a 40px circle, background rgba(255,255,255,.08), border 1px solid rgba(255,255,255,.15), border-radius 50%, font Mono 18px weight 600, color Primary Text, display flex, align-items center, justify-content center
- Right:
  - Title: H3 style (22px), color Primary Text
  - Description: Body style (16px), color Secondary Text, margin-top 6px
- Steps:
  1. "Send Us Your Current Website" / "Fill out a quick 2-minute form with your website link and business details. No calls required."
  2. "We Redesign It in 5 Days" / "Our team builds a complete redesign of your homepage with modern design, mobile optimization, and lead capture."
  3. "Review Your New Site" / "You'll get a live preview link to see your new website in action on desktop and mobile."
  4. "Love It? Pay $500. Don't? Pay $0." / "If you love the redesign, it's yours for a one-time $500 fee. If not, you owe absolutely nothing."

**CTA:**
- "Start Your Free Redesign" — Primary button style, larger: padding 18px 40px, font 18px weight 600, margin-top 40px
- Below button: "Takes 2 minutes. No credit card required." — Label style, color rgba(255,255,255,.4), margin-top 16px

**Animations:**
- Card: ScrollTrigger — opacity 0 → 1, translateY(60px → 0), scale(0.97 → 1), duration 1s, ease power3.out, start "top 75%"
- Steps: Each step fades in with stagger 0.15s after card appears, translateY(20px → 0)
- CTA: pulse animation on load — scale oscillates 1 → 1.02 → 1 over 2s, ease-in-out, infinite (subtle, not annoying)

---

### Section 07 — Why Choose Me

4-column grid of value proposition cards with icons.

**Layout:**
- Background: #050505
- Padding: Section Padding vertical
- Container: max-width 1200px, centered

**Header:**
- Eyebrow: "WHY CHOOSE EXPLODELABS" — Label style, color Accent, text-align center
- Headline: "Everything You Need, Nothing You Don't" — H2 style, color Primary Text, text-align center, margin-top 16px

**Grid:**
- 4 columns desktop, 2 columns tablet, 1 column mobile
- Gap: 24px, margin-top 64px

**Cards:**
- Background: Card, border 1px solid Border, Border Radius Card, padding Card Padding
- Icon: 24px, in 48px circle with tinted background (10% opacity of icon color)
- Title: H3 style, color Primary Text, margin-top 20px
- Description: Body style (16px), color Secondary Text, margin-top 10px

**Card Content:**
1. Layout icon / "Modern Design" / "Clean, professional aesthetics that reflect the quality of your roofing work and build instant trust."
2. Smartphone icon / "Mobile-First" / "Every site is built for phones first, ensuring 70%+ of your visitors get a flawless experience."
3. Zap icon / "Lightning Fast" / "Sub-3-second load times on every page. Slow sites kill conversions — speed is our priority."
4. Search icon / "SEO Ready" / "Proper heading structure, meta tags, and semantic markup to help you climb local search rankings."
5. ShieldCheck icon / "Zero Risk" / "Pay nothing upfront. See your new site first. Only pay $500 if you're 100% satisfied."
6. Code icon / "Clean Code" / "Hand-written, lightweight HTML/CSS/JS. No bloated page builders slowing your site down."
7. MessageCircle icon / "Easy Communication" / "Direct access via Slack or email. No account managers, no delays, no confusion."
8. TrendingUp icon / "Conversion Focused" / "Every element is placed to drive quote requests and phone calls, not just look pretty."

**Animations:**
- Header: blur-reveal
- Cards: ScrollTrigger — opacity 0 → 1, translateY(40px → 0), duration 0.6s, stagger 0.08s (grid pattern), ease power3.out, start "top 80%"
- Card hover: translateY(-6px), border-color rgba(255,255,255,.15), shadow Card Hover, transition 0.3s ease

---

### Section 08 — Process

Horizontal timeline showing the 5-step process.

**Layout:**
- Background: #0a0a0a
- Padding: Section Padding vertical
- Container: max-width 1200px, centered

**Header:**
- Eyebrow: "OUR PROCESS" — Label style, color Accent, text-align center
- Headline: "From Old Site To New Leads In 5 Simple Steps" — H2 style, color Primary Text, text-align center, margin-top 16px

**Timeline:**
- Margin-top 80px
- Desktop: Horizontal layout with connecting line
- Mobile: Vertical layout

**Connecting Line:**
- Desktop: Horizontal line, 2px height, background linear-gradient(90deg, rgba(192,132,252,.3), rgba(78,205,196,.3)), positioned at top of step circles, spans full width between first and last step
- Mobile: Vertical line, 2px width, same gradient, left 24px, spans full height

**Steps (5 items):**
- Desktop: Flex row, justify-content space-between
- Mobile: Flex column, gap 48px

**Each Step:**
- Flex column, align-items center, max-width 200px
- Circle: 64px diameter, background Card, border 2px solid Border, border-radius 50%, display flex, align-items center, justify-content center. Contains step number in Mono 24px weight 700, color Primary Text.
- Active step (step 1): border-color Accent, background rgba(192,132,252,.1), number color Accent
- Title: H3 style (20px), color Primary Text, margin-top 20px, text-align center
- Description: Body style (15px), color Secondary Text, margin-top 8px, text-align center, line-height 1.5

**Step Content:**
1. "Submit Your Site" / "Share your current website and a few details about your roofing business."
2. "We Get To Work" / "Our team analyzes your market and crafts a custom redesign in 3-5 days."
3. "Review The Design" / "Get a live preview link. See your new site on desktop and mobile."
4. "Request Tweaks" / "We make any adjustments you want. Unlimited revisions until you're happy."
5. "Launch & Pay" / "Love it? Pay $500 one-time. We deploy your site and you start getting leads."

**Animations:**
- Header: blur-reveal
- Timeline line: ScrollTrigger — scaleX 0 → 1 (desktop) / scaleY 0 → 1 (mobile), duration 1.2s, ease power2.inOut, transform-origin left (desktop) / top (mobile), start "top 75%"
- Steps: ScrollTrigger — opacity 0 → 1, translateY(30px → 0), stagger 0.15s, duration 0.7s, ease power3.out, start "top 70%"

---

### Section 09 — Comparison

Side-by-side comparison table showing ExplodeLabs vs alternatives.

**Layout:**
- Background: #050505
- Padding: Section Padding vertical
- Container: max-width 900px, centered

**Header:**
- Headline: "See How We Compare" — H2 style, color Primary Text, text-align center

**Comparison Table:**
- Margin-top 48px, background Card, border 1px solid Border, Border Radius Card, overflow hidden

**Table Header:**
- 3-column grid: 40% | 30% | 30%
- Background: rgba(255,255,255,.03)
- Padding: 20px 24px
- Column 1: empty
- Column 2: "Typical Agency" — Label style, color Secondary Text, text-align center
- Column 3: "ExplodeLabs" — Label style, color Accent, text-align center

**Table Rows (8 rows):**
- Each row: 3-column grid, padding 18px 24px, border-bottom 1px solid Border (last row none)
- Alternating background: even rows rgba(255,255,255,.02)

**Row Content:**
| Feature | Typical Agency | ExplodeLabs |
|---------|---------------|-------------|
| Upfront Cost | "$3,000 - $10,000" | "$0" |
| Design Preview | "Pay first, see later" | "See first, pay later" |
| Contract | "6-12 month lock" | "No contract" |
| Turnaround | "4-8 weeks" | "5 days" |
| Revisions | "2-3 rounds" | "Unlimited" |
| Mobile Speed | "Often neglected" | "Sub-3 seconds" |
| Lead Capture | "Extra cost" | "Built-in" |
| Ongoing Fees | "$200-500/month" | "$0 — one time" |

**Value styling:**
- Typical Agency column: color Secondary Text, text-align center
- ExplodeLabs column: color Primary Text, font-weight 600, text-align center
- "$0" values: color Success, font Mono 16px weight 600
- "See first, pay later": color Success

**Animations:**
- Header: blur-reveal
- Table: ScrollTrigger — opacity 0 → 1, translateY(40px → 0), duration 0.8s, ease power3.out, start "top 80%"
- Rows: stagger fade-in 0.06s after table appears

---

### Section 10 — FAQ

Accordion-style frequently asked questions.

**Layout:**
- Background: #050505
- Padding: Section Padding vertical
- Container: max-width 800px, centered

**Header:**
- Headline: "Frequently Asked Questions" — H2 style, color Primary Text, text-align center

**Accordion:**
- Margin-top 48px, flex column, gap 12px

**Each Item:**
- Background: Card, border 1px solid Border, Border Radius Card
- Padding: 0 (padding on inner elements)
- Open state: border-color rgba(255,255,255,.15)

**Question Bar:**
- Padding: 20px 24px
- Flex row, justify-content space-between, align-items center
- Cursor: pointer
- Question text: H3 style (18px weight 600), color Primary Text
- Chevron icon (lucide ChevronDown): 20px, color Secondary Text, transition transform 0.3s ease. Rotates 180deg when open.
- Hover: background rgba(255,255,255,.02)

**Answer Panel:**
- Max-height: 0 → auto transition (use max-height with specific value or grid-template-rows technique)
- Padding: 0 24px 20px (when open)
- Answer text: Body style (16px), color Secondary Text, line-height 1.6
- Transition: max-height 0.3s ease, padding 0.3s ease

**FAQ Content:**
1. Q: "What exactly do I get for $500?" / A: "A complete homepage redesign with modern visuals, mobile optimization, fast load times, lead capture forms, click-to-call buttons, and SEO-ready structure. If you want additional pages (services, about, contact), we can discuss a separate package."
2. Q: "What if I don't like the redesign?" / A: "You pay absolutely nothing. No hidden fees, no hard feelings. We're confident you'll love it, but if you don't, there's zero obligation."
3. Q: "How long does the process take?" / A: "From the moment you submit your site, you'll have a live preview of your new design within 5 business days. Revisions typically take 1-2 additional days."
4. Q: "Do I need to sign a contract?" / A: "Nope. No contracts, no commitments, no monthly fees. Just a simple one-time payment of $500 if you decide to keep the redesign."
5. Q: "Will my new site work on phones?" / A: "Absolutely. Every site we build is mobile-first, meaning it's designed for phones before desktops. Your site will look and perform flawlessly on every device."
6. Q: "Can I make changes to the site after it's done?" / A: "Yes. We build with clean, well-documented code. You or any developer can easily make edits. We also offer affordable maintenance packages if you prefer we handle updates."
7. Q: "Do you work with all types of roofing companies?" / A: "We specialize in residential and commercial roofing companies across the United States. Whether you're a one-person operation or a multi-million dollar company, we can help."

**Animations:**
- Header: blur-reveal
- Accordion items: ScrollTrigger — opacity 0 → 1, translateY(20px → 0), stagger 0.08s, duration 0.5s, ease power3.out, start "top 80%"

---

### Section 11 — Final CTA

High-impact closing call-to-action section.

**Layout:**
- Background: radial-gradient(ellipse at center, rgba(192,132,252,.08) 0%, transparent 70%), #050505
- Padding: 160px vertical
- Container: max-width 720px, centered, text-align center

**Content:**
- Headline: "Ready To Turn Your Website Into a Lead Machine?" — H2 style (52px), color Primary Text
- Subheadline: "Join 100+ roofing companies who've already upgraded their online presence. Zero risk, zero upfront cost." — Body style (20px), color Secondary Text, margin-top 20px, max-width 560px, margin-inline auto
- Primary CTA: "Get Your Free Redesign Now" — Large button, padding 20px 48px, font 18px weight 600, background #ffffff, color #050505, Border Radius Button. Hover: background #e5e5e5, Button Glow, translateY(-2px). Margin-top 40px.
- Secondary note: "Takes 2 minutes • No credit card • No obligation" — Label style, color rgba(255,255,255,.4), margin-top 20px

**Floating decorative elements:**
- 3-4 small blurred circles (80-120px) in Accent color at ~5% opacity, positioned around the section, with slow drift animation (translateX/Y ±20px over 8-12s infinite)

**Animations:**
- Headline: blur-reveal
- Subheadline: fade in 0.3s after headline
- CTA: fade in + translateY(20px → 0), 0.5s after subheadline
- Decorative elements: continuous float, no scroll trigger needed

---

### Section 12 — Footer

Minimal footer with links and contact info.

**Layout:**
- Background: #0a0a0a
- Border-top: 1px solid Border
- Padding: 60px vertical 40px
- Container: max-width 1200px, centered

**Top Row:**
- Flex row, justify-content space-between, align-items center
- Left: "ExplodeLabs" — Space Grotesk 20px weight 700, color Primary Text
- Right: Nav links — Home, Process, Pricing, FAQ, Contact — Nav style, color Secondary Text, gap 32px. Hover: Primary Text.

**Bottom Row:**
- Margin-top 40px, padding-top 24px, border-top 1px solid Border
- Flex row, justify-content space-between
- Left: "2026 ExplodeLabs. All rights reserved." — Label style, color rgba(255,255,255,.3)
- Right: Social links row, gap 20px
  - Email icon, Linkedin icon, Twitter icon — 20px, color Secondary Text, hover Primary Text

---

## Global Interactions

### Smooth Scrolling
Lenis smooth scroll with lerp 0.15, creating buttery scroll behavior across the entire page. All scroll-triggered animations sync with Lenis.

### Entrance Animations
All content blocks use GSAP ScrollTrigger with IntersectionObserver (threshold 0.15):
- **blur-reveal**: opacity 0 → 1, filter blur(10px) → blur(0px), duration 0.6s, ease power2.out. Used for headlines, eyebrows, and text blocks.
- **fade-up**: opacity 0 → 1, translateY(30px → 0), duration 0.7s, ease power3.out. Used for cards, images, and general content.
- **fade-up-stagger**: Same as fade-up with stagger 0.1-0.15s between siblings. Used for grids, lists, and grouped elements.
- **scale-in**: opacity 0 → 1, scale(0.95 → 1), duration 0.8s, ease power3.out. Used for prominent cards and featured elements.

### Hover States
- Cards: translateY(-4px to -6px), border-color lighten, shadow elevate. Transition 0.3s ease.
- Buttons: translateY(-2px), shadow glow, background shift. Transition 0.25s ease.
- Links: color shift to Primary Text. Transition 0.2s ease.
- Trust bar marquee: animation-play-state paused on hover.

### Cursor Spotlight
Subtle radial gradient follows cursor position within the mesh gradient canvas area, creating a soft illumination effect. Implemented via CSS custom properties (--cursor-x, --cursor-y) updated on mousemove, applied as a radial-gradient overlay on the canvas container.

### Scroll-Triggered Mesh Intensity
As the user scrolls down, the mesh gradient canvas subtly shifts its noise speed (increases by 20% when scrolled past hero), creating a gentle acceleration effect that responds to user engagement.

---

## Core Effects

### Animated Mesh Gradient Background

A 5x5 grid of color control points animated with simplex noise, creating a smooth organic color field using a custom 2D gradient falloff function. Rendered on a full-viewport canvas element.

**Canvas Setup:**
Use a `<canvas>` with `class="mesh-gradient-canvas"` and these exact styles: `position: absolute`, `top: 0`, `left: 0`, `width: 100%`, `height: 100%`, `z-index: 0`, and `pointer-events: none`. The canvas lives inside the hero section container. Its `width` and `height` attributes must be set to match the parent container dimensions each frame (or on resize).

**Palette:**
Use a 5-color `palette` array with these exact `chroma` values: `chroma('#1a1a4e')`, `chroma('#ff6b9d')`, `chroma('#4ecdc4')`, `chroma('#f7b731')`, and `chroma('#6a5af9')`.

**Simplex Noise:**
Instantiate `simplexNoise = new SimplexNoise()`.

**Configuration:**
Keep the config values exactly as: `gridSize: 5`, `speed: 0.0008`, `noiseScale: 0.3`, `colorSmoothness: 2.5`, and `paletteSize: 5`.

**Color Cycle:**
The `getColor(pos, time)` function must:
1. Compute `cyclePos = (pos * 3 + time * 0.0001) % 1`.
2. Compute `idx = cyclePos * (palette.length - 1)`.
3. Set `i = Math.floor(idx)` and `f = idx - i`.
4. Smooth the interpolation with `smoothF = f * f * (3 - 2 * f)`.
5. Read `a = palette[Math.min(i, palette.length - 1)]` and `b = palette[Math.min(i + 1, palette.length - 1)]`.
6. Return `chroma.mix(a, b, smoothF)`.

**Gradient Interpolation (the core of the smooth look):**
The helper `gradColor(x, y, time)` must:
1. Start from black with `col = chroma('#000000')`.
2. Compute `totalWeight = 0`.
3. Iterate all grid points with nested loops: `for (let py = 0; py < gridSize; py++)` and inside that `for (let px = 0; px < gridSize; px++)`.
4. For each control point, compute:
   - `pxp = px / (gridSize - 1)`
   - `pyp = py / (gridSize - 1)`
   - `dx = x - pxp`
   - `dy = y - pyp`
   - `d = Math.sqrt(dx * dx + dy * dy)`
   - `noiseX = px * 0.5`
   - `noiseY = py * 0.5`
   - `n = simplex.noise3D(noiseX, noiseY, time * 0.0005)`
   - `radius = 0.3 + n * 0.2`
   - `weight = Math.exp(-d * d / (2 * radius * radius))`
5. Compute `colorPos = (px + py * gridSize) / (gridSize * gridSize)`.
6. Add the weighted color with `col = chroma.mix(col, getColor(colorPos, time), weight)`.
7. Accumulate `totalWeight += weight`.
8. After both loops, normalize with `col = col.alpha(Math.min(1, totalWeight))`.
9. Return `col`.

**Render Loop:**
The `render(time)` loop must:
1. Read `width = canvas.width` and `height = canvas.height`.
2. Create `imageData = ctx.createImageData(width, height)`.
3. Use a `blockSize` of `4`.
4. For each block, loop `y` from `0` while `y < height`, stepping by `blockSize`, and inside that loop `x` from `0` while `x < width`, stepping by `blockSize`.
5. Convert pixel coordinates into normalized space with `nx = x / width` and `ny = y / height`.
6. Sample `col = gradColor(nx, ny, time)`.
7. Convert the color to `[r, g, b]` with `col.rgb()`.
8. Fill the entire block by looping `by` from `0` to `blockSize - 1` and inside that `bx` from `0` to `blockSize - 1`.
9. Only write pixels when `x + bx < width && y + by < height`. For valid pixels, compute `idx = ((y + by) * width + (x + bx)) * 4` and assign `imageData.data[idx] = r`, `imageData.data[idx + 1] = g`, `imageData.data[idx + 2] = b`, and `imageData.data[idx + 3] = 255`.
10. After all loops, write the frame with `ctx.putImageData(imageData, 0, 0)`.
11. Schedule the next frame with `requestAnimationFrame(render)`.

The render loop runs at 60fps via `requestAnimationFrame`. The `blockSize: 4` creates the soft pixelated/blurred aesthetic — for sharper rendering, reduce to 2 or 1 (at performance cost). `gridSize: 5` controls the density of color fields. `speed: 0.0008` is the slow organic drift speed. Adjust to taste (0.0005 for slower, 0.001 for faster).

**Vignette Overlay:**
Applied as a CSS pseudo-element on the canvas container:
Set `.hero-section::before` to `content: ''`, `position: absolute`, `inset: 0`, `z-index: 1`, `pointer-events: none`, and `background: radial-gradient(ellipse at center, transparent 30%, rgba(5,5,5,0.7) 100%)`.

### Geometric Grid Pattern with Mouse Interaction

An SVG-based grid of nodes and connecting lines overlaid on the mesh gradient. Nodes near the cursor gently repel, creating an interactive depth layer.

**SVG Setup:**
Use an `<svg>` with `class="geometric-grid"` and these exact styles: `position: absolute`, `top: 0`, `left: 0`, `width: 100%`, `height: 100%`, `z-index: 1`, and `pointer-events: none`. It sits above the canvas but below the content, inside the hero section.

**Implementation Details:**
The grid consists of two SVG `<g>` groups: one for lines and one for nodes. Grid spacing is 50px. The grid is generated programmatically on load and resize.

**Node Generation:**
- Create nodes at each 50px intersection across the full viewport width and height.
- Each node is a `<circle>` element with r="2", fill="rgba(255,255,255,.25)".
- Store original x,y position as data attributes on each node.

**Line Generation:**
- Lines connect adjacent nodes horizontally and vertically.
- Each line is a `<line>` element with stroke="rgba(255,255,255,.15)", stroke-width="1".

**Mouse Interaction (repulsion effect):**
Track mouse position relative to the SVG. On each animation frame:
- For each node, calculate distance from mouse cursor.
- If distance < 150px (repulsion radius):
  - Calculate repulsion force: `force = (1 - distance/150) * 30` (30px max displacement)
  - Calculate angle from mouse to node: `angle = Math.atan2(nodeY - mouseY, nodeX - mouseX)`
  - Displace node: `newX = origX + Math.cos(angle) * force`, `newY = origY + Math.sin(angle) * force`
- If distance >= 150px: node returns to original position with lerp (factor 0.1)
- Update node cx/cy attributes.
- Update connected line x1/y1/x2/y2 attributes based on displaced node positions.

**Lerp Function:**
`lerp = (start, end, factor) => start + (end - start) * factor`

**Animation Loop:**
Runs via `requestAnimationFrame`, separate from the mesh gradient render loop. The repulsion creates a gentle "push" effect as the cursor moves across the grid, adding tactile interactivity.

### Orbiting Dots Animation

Small colored dots orbiting in circular paths within glassmorphic cards, creating a sense of active processing and energy.

**Implementation:**
Each orbit system is a container `<div>` with `position: relative`, width/height equal to `orbitRadius * 2`, and a centered circular border.

**Structure:**
```
.orbit-container (position: relative, circular border)
  .orbit-dot (absolute positioned, colored circle)
  .orbit-dot
  ...
```

**CSS Animation:**
The `.orbit-container` must use `position: relative` and `border-radius: 50%`.

Each `.orbit-dot` must use `position: absolute`, `top: 50%`, `left: 50%`, `width: 6px`, `height: 6px`, `border-radius: 50%`, and `margin: -3px 0 0 -3px` so each dot is centered on its transform origin.

The animation is `orbit linear infinite`, and the keyframes must be:
- At `0%`: `transform: rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg)`
- At `100%`: `transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg)`

The counter-rotation in the keyframes keeps dots upright as they circle.

**JavaScript Wiring:**
For each orbit container:
1. Read `dotCount`, `radius`, `duration`, `direction` (`1` for clockwise, `-1` for counter-clockwise), and `colors` from `data-*` attributes.
2. Create `dotCount` dot elements, append them to the container.
3. Assign each dot a color from the `colors` array (cycling through).
4. Set CSS custom properties on each dot:
   - `--orbit-radius: radius + 'px'`
   - `--orbit-color: assigned color`
5. Space dots evenly: `animationDelay = -(duration / dotCount) * index * direction + 's'`
6. Set `animationDuration = duration + 's'`
7. If `direction === -1`, set `animationDirection = 'reverse'`
8. Set `animationTimingFunction = 'linear'` and `animationIterationCount = 'infinite'`
9. Dots are 6px circles (`.orbit-dot { width: 6px; height: 6px; border-radius: 50%; }`)

**Trigger:** Orbits begin animating when the hero section enters the viewport, controlled by IntersectionObserver. This prevents unnecessary animation when the section is not visible.

### Noise Texture Overlay

A subtle static noise texture overlay applied to the entire page background, adding film-grain depth.

**Implementation:**
1. Generate a 256x256 noise texture canvas programmatically.
2. Fill with random grayscale pixels (opacity 0.03-0.06).
3. Set as a repeating background on a fixed-position overlay div.

**Canvas Generation:**
Create a canvas element in JavaScript. Set `noiseCanvas.width = 256` and `noiseCanvas.height = 256`. Get the 2D context with `noiseCanvas.getContext('2d')`, then create `imageData = ctx.createImageData(256, 256)`. Iterate through every pixel in steps of `4`. For each pixel, set the red, green, and blue channels to `255`, and set the alpha channel to `Math.random() * 8 + 3`, which keeps the noise between about `3` and `11` on the `0-255` range. After filling the array, write it back with `ctx.putImageData(imageData, 0, 0)`.

**Overlay Application:**
Use a `<div class="noise-overlay">` with these exact styles: `position: fixed`, `top: 0`, `left: 0`, `width: 100%`, `height: 100%`, `pointer-events: none`, `z-index: 9999`, `opacity: 0.4`, and `background-image: url('generated-noise-data-url')` with `background-repeat: repeat` and `background-size: 256px 256px`. The overlay sits above all content at z-index 9999 with pointer-events: none.

### Counter Animation

Animated number counters that count up when scrolled into view, used for statistics.

**Implementation:**
Use GSAP with ScrollTrigger. The `animateCounter(el, target, duration, suffix = '')` function must create a proxy object `{ val: 0 }`, then call `gsap.to(proxy, { val: target, duration: duration || 2, ease: 'power2.out', snap: { val: 1 }, onUpdate: () => { el.textContent = Math.floor(proxy.val).toLocaleString() + suffix; } })`.

Each counter element gets a ScrollTrigger:
- `trigger: element`, `start: "top 85%"`, `once: true`
- On enter, parse `data-target` and `data-suffix` attributes, call `animateCounter()`

Used in: Trust badges ("100+ Roofing Sites"), hero stats ("2,847 Website Visits"), and any other numerical data display.

### Blur Reveal Animation

Text elements that animate from fully blurred to sharp with opacity fade, creating a cinematic reveal effect.

**Implementation:**
Define a GSAP timeline `blurRevealTl` with `defaults: { duration: 0.6, ease: 'power2.out' }`. Query `document.querySelectorAll('.blur-reveal')`. For each matched element, set the initial state with `gsap.set(el, { opacity: 0, filter: 'blur(10px)' })`, then add a `.to(...)` tween on `blurRevealTl` with `opacity: 1`, `filter: 'blur(0px)'`, and `scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }`.

Applied to: Section eyebrows, headlines, and key text blocks throughout the page.

### Stagger Fade-Up

Standard entrance animation for cards, grids, and grouped elements.

**Implementation:**
The `staggerFadeUp(selector, stagger = 0.1)` helper must call `gsap.from(selector, { y: 30, opacity: 0, duration: 0.7, stagger: stagger, ease: 'power3.out', scrollTrigger: { trigger: selector[0]?.parentElement || selector, start: 'top 80%', toggleActions: 'play none none none' } })`.

Applied to: Problem cards, Why Choose Me cards, FAQ items, comparison table rows.

---

## Assets

### Logo
[ASSET: SVG "explodelabs-logo"]
Simple wordmark "ExplodeLabs" in Space Grotesk 700. No icon. Text only, clean and minimal.

### Hero Browser Mockup
[ASSET: Image "hero-browser-mockup"]
1920x1080. A premium roofing company website displayed within a browser window frame. Dark theme with navy and white color scheme. Hero section shows a professional roofing crew working on a residential roof. Navigation bar with company logo, phone number, and "Get Free Estimate" button. Below: service areas, testimonial cards, and a quote request form. Clean, modern, conversion-focused design. Slight perspective angle for depth.

### Roofing Website Preview (Solution Section)
[ASSET: Image "solution-website-preview"]
1920x1080. Premium roofing company website homepage. Large hero image of a completed residential roofing project at golden hour. Company name "Premier Roofing" in bold white text. Tagline "Protecting Your Home, One Roof at a Time." Prominent orange "Get Your Free Estimate" CTA button. Below: three-column service cards (Roof Repair, Roof Replacement, Emergency Services), a before/after gallery section, and customer testimonials with 5-star ratings. Modern, clean design with dark header and light content sections.

### Noise Texture
Generated programmatically in JavaScript (see Core Effects). No external asset needed.

---

## Notes

### Responsive Behavior
- **Desktop (1200px+)**: Full layouts as described, multi-column grids, horizontal timeline.
- **Tablet (768-1199px)**: 2-column grids collapse to 2 columns where applicable, hero stacks vertically with cards below text, timeline stays horizontal but steps compress.
- **Mobile (<768px)**: Single column throughout, hero stacks (text first, cards below), timeline goes vertical, comparison table scrolls horizontally, navigation collapses to hamburger.

### Performance
- Mesh gradient canvas: use `blockSize: 4` for reasonable performance. On low-end devices, increase to 6 or 8.
- Geometric grid: only render within viewport bounds. Skip nodes outside visible area.
- Orbit animations: use CSS animations (GPU-accelerated) rather than JS transforms.
- Noise overlay: generated once on load, cached as data URL.
- Lazy-load all images below the fold.
- Use `will-change: transform` on animated cards sparingly.

### Accessibility
- All interactive elements have focus states (outline: 2px solid Accent, offset 2px).
- Color contrast ratios meet WCAG AA (Primary Text on Background = 15.8:1, Secondary Text on Background = 7.2:1).
- Accordion items are keyboard-navigable (Enter/Space to toggle).
- Canvas elements have `aria-hidden="true"` and are decorative only.
- Smooth scroll respects `prefers-reduced-motion` (fallback to instant scroll).

### Implementation Order
1. Set up project structure with Vite, install dependencies (gsap, simplex-noise, lenis)
2. Create CSS variables and base typography styles
3. Implement mesh gradient canvas + geometric grid (hero background)
4. Build navigation component
5. Build hero section with floating cards and orbit animations
6. Build remaining sections top-to-bottom with scroll animations
7. Add interactive polish (hover states, accordion, cursor spotlight)
8. Generate and integrate image assets
9. Test responsive behavior and performance
10. Final accessibility and polish pass
