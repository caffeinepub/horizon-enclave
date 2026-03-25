# Horizon Enclave

## Current State
New project — no existing frontend or backend code.

## Requested Changes (Diff)

### Add
- Full luxury real estate single-page website for "Horizon Enclave" by The Horizon Infra
- 10 structured sections (see below)
- Contact/inquiry form (stores submissions in backend)
- Financial highlights displayed as visual cards
- Amenities grid with icons

### Modify
- N/A

### Remove
- N/A

## Implementation Plan

### Sections
1. **Hero** — Full-viewport aerial luxury housing visual, headline, subheadline, two CTAs (Schedule a Visit / Invest Now)
2. **Project Overview** — Premium description, lifestyle + exclusivity focus
3. **Investment Opportunity** — 3 highlight cards: low-density demand, market gap, fast-selling segment
4. **Financial Highlights** — 5 stat cards: Total Investment ₹8.5–10.5Cr, Projected Revenue ₹14.4–17Cr, Profit ₹4–8.5Cr, ROI 40–100%+, Timeline 12–18 months
5. **Project Layout** — 4 features: 8 premium floors, central park, wide roads, private parking
6. **Amenities** — 6-item icon grid: Clubhouse, Swimming Pool, Mini Golf, Gym, Bar/Social Area, Landscaped Park
7. **Revenue Model** — Unit pricing + recurring income breakdown
8. **Why Invest** — 4 reasons: high-margin, limited competition, strong demand, fast exit
9. **About Developer** — The Horizon Infra brief, trust/quality focus
10. **Call to Action** — Book a Visit + Download Investment Deck buttons + contact form

### Backend
- Store contact form submissions (name, phone, email, message, timestamp)
- Query to retrieve submissions (admin)

### Frontend
- React + Tailwind, black/white/muted-blue palette
- Smooth scroll navigation
- Mobile responsive
- Lucide icons for amenities and financials
- Indian Rupee formatting
