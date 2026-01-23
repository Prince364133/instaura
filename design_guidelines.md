# INSTAURA Strategic Consulting Platform - Design Guidelines

## Design Approach
**Reference-Based:** Drawing inspiration from Linear's professional clarity, Stripe's sophisticated restraint, and McKinsey's executive presence. This is a high-stakes B2B platform requiring credibility through visual polish.

## Typography System

**Font Stack:**
- Headings: Raleway (600, 700, 800 weights)
- Body: Inter (400, 500, 600 weights)

**Hierarchy:**
- Hero Headline: 4xl/5xl/6xl, Raleway 800
- Section Headers: 3xl/4xl, Raleway 700
- Card Titles: xl/2xl, Raleway 600
- Body Text: base/lg, Inter 400
- Captions/Labels: sm, Inter 500

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-20 lg:py-32
- Card padding: p-6 lg:p-8
- Element gaps: gap-6 lg:gap-12

**Container Strategy:**
- Max-width: max-w-7xl
- Content sections: max-w-6xl
- Prose content: max-w-4xl

## Page Structure

**Navigation:**
Sticky header with logo left, service links center, "Start a Project" CTA right. Backdrop blur on scroll with subtle border.

**Hero Section (100vh):**
Full-screen split layout: Left 50% - bold headline "Strategic Consulting for Modern Growth", subheadline, dual CTAs ("Explore Services" primary, "Schedule Consultation" secondary with blur background). Right 50% - large professional imagery (see Images section). Subtle scroll indicator at bottom.

**Services Grid:**
2x2 grid on desktop, stacked mobile. Each service card features: large icon/graphic top, service name (Raleway 700), 2-3 sentence description, "Learn More" link. Cards have subtle elevation, hover lift animation.

**Methodology Section:**
Timeline-style layout showing consulting process: Discovery → Strategy → Execution → Optimization. Each phase has number badge, title, description. Connects with dotted line visual.

**Case Study Showcase:**
Alternating image-text blocks (bento-style). Left-right-left pattern with metric highlights (3-4 key numbers), client testimonial quote, industry label.

**Trust Section:**
Client logo grid (8-12 logos), centered headline "Trusted by Industry Leaders", subtle fade-in animation on scroll.

**Contact/CTA Section:**
Centered layout with headline, form (name, email, project type dropdown, message), alternative contact info sidebar (email, phone, office location).

**Footer:**
Three-column: Services list, Company (About, Careers, Blog), Contact. Newsletter signup with inline form. Social links. Copyright bottom.

## Component Library

**Cards:**
- Service Cards: p-8, rounded-xl, subtle shadow, hover:shadow-lg transition
- Metric Cards: Large number display, label below, minimal borders
- Testimonial Cards: Quote icon, text, attribution with role/company

**Buttons:**
- Primary: Solid with brand red accent, rounded-lg, px-8 py-3
- Secondary: Outlined, blur background when on images
- Text Links: Underline on hover, subtle arrow icon

**Animations:**
- Scroll reveals: Fade-up on elements entering viewport (stagger children by 100ms)
- Card hovers: Subtle lift (translateY -2px) with shadow increase
- Hero: Gentle parallax on background image
- Section transitions: Smooth fade-ins, no jarring movements

## Images Section

**Hero Image:**
Large professional photograph showing modern business environment - sleek office space, collaborative workspace, or abstract architectural shot representing strategic thinking. Should convey sophistication and clarity. Position: Right 50% of hero section, full height.

**Case Study Images:**
3-4 high-quality images showing: data visualization/analytics dashboards, team collaboration scenarios, growth charts/metrics. Sizes vary in bento layout (some 60% width, others 40%).

**Methodology Graphics:**
Custom illustrated icons or minimal line graphics for each consulting phase - keep sophisticated, not playful.

**General Approach:**
All images should feel premium, professionally shot/designed. Avoid stock photography clichés. Prefer abstract, architectural, or data-focused visuals over posed business people.

## Accessibility
- Focus states: 2px outline in brand accent
- Form labels: Always visible, never placeholder-only
- Contrast ratios: Maintain WCAG AA on all text
- Interactive targets: Minimum 44x44px touch areas

**Critical Specifications:**
- Every section is feature-complete with multiple elements
- Generous whitespace creates breathing room
- Visual hierarchy through size, weight, and spacing - not just color
- Scroll experience reveals value progressively
- Multi-column layouts in services, case studies, footer
- Single column for hero CTA, methodology timeline
- Professional photography establishes credibility immediately