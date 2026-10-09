# SocialChef Design System

> Companion to `IMPLEMENTATION_GUIDE.md` §12. Tokens live in `theme/theme.css`; `theme/theme.config.ts` mirrors the raw colour values for MUI. Components use token classes only.

---

## 1. Rationale

SocialChef sits between a fine-dining menu and a fintech dashboard. Vendors are busy, on a phone, and not technical; the product's promise is calm clarity over a noisy inbox. The system therefore uses:

- **Dark espresso by default.** A near-black warm base makes gold accents and ivory text read as premium rather than loud, and it is what a vendor sees at 9pm between orders.
- **One accent.** Champagne gold is reserved for primary actions, "Order" labels and key numbers. Everything else is ivory or muted ivory, so the eye lands on money and actions.
- **Serif display, sans body.** Fraunces headlines carry the warmth and confidence; Inter keeps UI, tables and numbers legible at small sizes.
- **Glass over flat.** Hairline gold borders, low-opacity ivory fills and a soft inner highlight give depth without heavy shadows. Film grain on the landing page keeps large dark areas from banding.
- **Dashboard = same palette, calmer.** Less glow, no grain, denser spacing, `panel` surfaces instead of `glass`, and semantic AI-label tokens so Order / Enquiry / Noise read the same way on the landing page and in the inbox table.

An ivory light variant is available with `<html data-theme="light">` plus `ThemeProvider mode="light"`; it re-maps the same token names, so no component changes.

---

## 2. Tokens

### 2.1 Palette (dark default)

| Token                | Value                     | Tailwind class(es)                                             | Use                                   |
| -------------------- | ------------------------- | -------------------------------------------------------------- | ------------------------------------- |
| `--espresso`         | `#0e0b09`                 | —                                                              | Base; aliased by `--background`       |
| `--espresso-deep`    | `#060403`                 | `bg-neutral`                                                   | Final CTA band, overlays              |
| `--ivory`            | `#f5efe6`                 | `text-ivory`, `text-text`                                      | Primary text                          |
| `--ivory-muted`      | `#a89f93`                 | `text-ivory-muted`, `text-text-light`                          | Secondary text (7.4:1 on espresso)    |
| `--gold`             | `#c9a25f`                 | `bg-primary`, `text-primary`, `text-gold`                      | CTAs, highlights, Order label         |
| `--gold-deep`        | `#a8823f`                 | `bg-primary-dark`                                              | Pressed / hover gold                  |
| `--ember`            | `#d9743a`                 | `text-tertiary`, `bg-ember`                                    | Glows, waiting-time accents           |
| `--saffron`          | `#e9a23b`                 | `text-saffron`                                                 | Gradient tail, MUI warning            |
| `--sage`             | `#8fae88`                 | `text-secondary`, `text-success`, `bg-sage`                    | Confirmed / connected / success       |
| `--sage-deep`        | `#5f7b5b`                 | `bg-secondary-dark`                                            | Pressed sage                          |
| `--surface`          | `#15110e`                 | `bg-surface`                                                   | Cards, sidebar, header                |
| `--background`       | `#0e0b09`                 | `bg-background`                                                | Page                                  |
| `--background-light` | `#1c1613`                 | `bg-background-light`                                          | Inset wells, chart tracks, hover rows |
| `--stroke`           | gold 18 %                 | `border-stroke`                                                | Hairline borders                      |
| `--stroke-strong`    | gold 36 %                 | `border-stroke-strong`                                         | Hover / highlighted borders           |
| `--primary-light`    | gold 14 %                 | `bg-primary-light`                                             | Gold tint fills (active nav, icons)   |
| `--secondary-light`  | sage 14 %                 | `bg-secondary-light`                                           | Sage tint fills                       |
| `--tertiary-light`   | ember 14 %                | `bg-tertiary-light`                                            | Ember tint fills                      |
| `--disabled`         | `#6e655a`                 | `text-disabled`                                                | Disabled text                         |
| `--error`            | `#e0645a`                 | `text-error`                                                   | Errors                                |
| `--on-primary`       | `#0e0b09`                 | `text-on-primary`                                              | Text on gold                          |

### 2.2 Semantic AI-label tokens

| Label      | Text token          | Background token       | Classes                                        |
| ---------- | ------------------- | ---------------------- | ---------------------------------------------- |
| Order      | `--label-order`     | `--label-order-bg`     | `text-label-order bg-label-order-bg`           |
| Enquiry    | `--label-enquiry`   | `--label-enquiry-bg`   | `text-label-enquiry bg-label-enquiry-bg`       |
| Noise      | `--label-noise`     | `--label-noise-bg`     | `text-label-noise bg-label-noise-bg`           |
| Confirmed  | `--label-confirmed` | `--label-confirmed-bg` | `text-label-confirmed bg-label-confirmed-bg`   |

Order = gold, Enquiry = ivory, Noise = muted ivory, Confirmed = sage. `components/AppIntentChip.tsx` is the single component that renders these in the dashboard. Backend `category` values are `order | enquiry | ignore`; `ignore` is displayed as "Noise".

### 2.3 Glass and glow

| Token             | Purpose                                | Class           |
| ----------------- | -------------------------------------- | --------------- |
| `--glass`         | ivory 4 % fill                         | `.glass`        |
| `--glass-strong`  | ivory 7 % fill                         | `.glass-strong` |
| `--glass-border`  | gold 22 % hairline                     | (in `.glass`)   |
| `--glass-inner`   | 1px inner highlight                    | (in `.glass`)   |
| `--glow-gold-*`   | radial gold glow                       | `.glow-gold`    |
| `--glow-ember-*`  | radial ember → saffron glow            | `.glow-ember`   |
| film grain        | SVG `feTurbulence`, 5.5 % soft-light   | `.grain`        |

### 2.4 Type scale

Fonts: `--font-display-font` (Fraunces via `next/font/google`, variable `--font-fraunces`) and `--font-app-font` (Inter, variable `--font-inter`). Both fall back to Georgia / system-ui.

| Class            | Font     | Size (min → max)   | Line | Tracking | Use                                   |
| ---------------- | -------- | ------------------ | ---- | -------- | ------------------------------------- |
| `d1-m` / `d1-r`  | Fraunces | 44px → 76px        | 1.02 | −0.02em  | Hero and final CTA headline           |
| `d2-m` / `d2-r`  | Fraunces | 34px → 56px        | 1.06 | −0.02em  | Section headlines                     |
| `d3-m` / `d3-r`  | Fraunces | 26px → 38px        | 1.12 | −0.015em | Dashboard page titles, big numbers    |
| `d4-m` / `d4-r`  | Fraunces | 20px → 26px        | 1.2  | −0.01em  | Card titles, wordmark, quotes         |
| `lead-r`         | Inter    | 17px → 20px        | 1.55 | —        | Section intro paragraphs              |
| `h1-*` … `h6-*`  | Inter    | existing scale     |      |          | Sans headings (forms, dialogs)        |
| `b1-*`           | Inter    | 16px               | 1.5  |          | Body                                  |
| `b2-*`           | Inter    | 14px               | 1.43 |          | UI body, table cells                  |
| `f1-*`           | Inter    | 12px               | 1.33 |          | Captions, chips                       |
| `f2-*`           | Inter    | 10px               | 1.4  |          | Axis labels, micro text               |
| `eyebrow`        | Inter    | 12px, 500          |      | +0.14em  | Uppercase section labels, chip text   |
| `tabular`        | —        | —                  |      |          | Adds `font-variant-numeric: tabular`  |

Weights: `-m` 500, `-r` 400, `-b` 700 (sans only).

### 2.5 Spacing, radius, shadow, motion

| Token              | Value                    | Note                                   |
| ------------------ | ------------------------ | -------------------------------------- |
| `--space-2xs`      | 2px                      |                                        |
| `--space-xs`       | 4px                      |                                        |
| `--space-sm`       | 6px                      |                                        |
| `--space-md`       | 8px                      | MUI spacing unit                       |
| `--space-lg`       | 16px                     |                                        |
| `--space-xl`       | 24px                     |                                        |
| `--space-2xl`      | 40px                     |                                        |
| `--space-3xl`      | 64px                     |                                        |
| `--space-section`  | clamp(80px, 8vw, 128px)  | `py-section`                           |
| `--app-radius`     | 20px                     | `rounded-app-radius` cards, panels     |
| `--button-radius`  | 12px                     | `rounded-btn-radius`                   |
| `--input-radius`   | 12px                     | `rounded-input-radius`                 |
| `--chip-radius`    | 999px                    | `rounded-chip-radius`                  |
| `--shadow-sm/md/lg`| 0 1px 2px … 0 24px 64px  | MUI elevation                          |
| `--card-shadow`    | inner highlight + soft   | `shadow-card`, used by `.glass`        |
| `--glow-gold-shadow` | hairline + gold bloom  | `shadow-glow-gold`, hover state        |
| `--ease-out-soft`  | cubic-bezier(.22,1,.36,1)|                                        |
| `--motion-reveal`  | 600ms                    | scroll reveals                         |
| `--motion-fast`    | 240ms                    | hover transitions                      |

### 2.6 Utility classes

`.glass`, `.glass-strong`, `.panel` (surface + hairline + app radius), `.hairline`, `.grain`, `.glow-gold`, `.glow-ember`, `.text-gradient-gold`, `.divider-fade`, `.btn-shimmer` (hover sweep), `.card-lift` (−4px lift + gold glow), `.motion-rise` + `.motion-delay-1..3`.

All motion is disabled under `prefers-reduced-motion: reduce` (CSS) and framer-motion components check `useReducedMotion()` so content is never hidden behind an animation.

---

## 3. Motion

| Pattern                 | Implementation                                                                 |
| ----------------------- | ------------------------------------------------------------------------------ |
| Scroll reveal           | `app/(public)/components/Reveal.tsx`: framer `whileInView`, fade + 16px rise, 600ms ease-out, once |
| Hero stagger            | `motion` variants, 100ms stagger                                               |
| DM → card sort          | `InboxSorter.tsx`: shared `layoutId` morph, 1.4s cadence, rests 2.8s, loops; static when reduced motion |
| Chart animate-in        | `InsightBarList`, `InsightHourChart`, `InsightRepeatRing`: scale / dash-offset once in view |
| Parallax glows          | `ParallaxGlow.tsx`: `useScroll` + `useTransform`, ±40–80px, background only    |
| Button shimmer          | `.btn-shimmer` CSS pseudo-element sweep on hover                               |
| Card lift               | `.card-lift` CSS or `motion.article whileHover={{ y: -4 }}`                   |

---

## 4. Dashboard component specs

Dashboard pages use the same tokens with these rules: `bg-background` page, `panel` cards, no `grain`, no `glass` blur (except the mobile sidebar overlay), eyebrow + `d3-m` page titles, `b2-*` for table content, `AppIntentChip` for every AI label.

msflib usage: `@msflib/react-components` for `TableWidget`, `FormBuilder`, `AppSkeleton`, `SkeletonLoaderWrapper`; `@msflib/react-ux` `useCloseOnOutsideInteraction` for the sidebar drawer and any popover; `@msflib/react-auth` `useAuth` for identity; `@msflib/react-workspace` / `react-shared` for the active workspace.

### 4.1 Sidebar (`app/(protected)/components/Sidebar.tsx`)

- Width 256px, `bg-surface`, right hairline. Wordmark (`AppWordmark`) in a 64px header.
- Section eyebrow "Workspace", then links in `b2-m`. Active: `bg-primary-light text-primary` with a 2px gold bar on the left and `aria-current="page"`. Inactive: `text-text-light`, hover `bg-background-light text-text`.
- Mobile: slides in from the left; overlay `bg-neutral/70 backdrop-blur-sm`; closes on outside interaction via `useCloseOnOutsideInteraction`.
- Role filtering stays as implemented (`navigationLinks[].roles`).

### 4.2 Orders / enquiries inbox (`OrderList.tsx`, `EnquiryList.tsx`, `columns/*.column.tsx`)

- Title `d3-m`, subtitle `b2-r text-text-light`.
- `TableWidget` from `@/dynamics/TableWidget` with `enableSearch`, `autoHeight`, `loading` from the query.
- Columns (snake_case fields): `category` → `AppIntentChip`, `timestamp` → formatted, `customer_name` (falls back to `sender`), `parsed_metadata` → items / summary, `body`, `channel_type`.
- States:
  - Loading: `TableWidget loading` (DataGrid skeleton) or `AppSkeleton.Text lines={6}` while the role check runs.
  - Empty: `panel` with "No orders yet." / "No enquiries yet.", one explanatory line, and an outlined "Connect a page" button to `ROUTES.admin.platformConnection.list`.
  - Error: "Could not load orders." + outlined Retry.
  - Forbidden: "You need an owner or admin role to view ingested messages."
  - Success: table; relabelling a row (future) uses `toast.success('Label updated')`.

### 4.3 Insights / dashboard (`DashboardReport.tsx`, `MetricCard.tsx`, `IntentBreakdown.tsx`)

- Header: eyebrow "Workspace", `d3-m` "Dashboard", period range `f1-r`. Period selector is MUI `ToggleButtonGroup` (`today | 7d | 30d`) bound to `?period=`.
- `MetricCard`: `panel`, label `f1-m text-text-light`, value `d3-m tabular`, detail `f1-r`.
- `IntentBreakdown`: segmented bar using `bg-label-order / bg-label-enquiry / bg-label-noise`, legend uses `AppIntentChip` + tabular count.
- Charts for top items / peak hours / repeat customers reuse the landing primitives' structure (bar list, hour bars, ring) but with `motion` disabled and `panel` surfaces; data comes from `DashboardMetrics` (`operational.top_selling_items`, `intent`, `customers`).
- States: loading `AppSkeleton.Text lines={8}`; empty per block ("No messages in this period.", "No ordered items in this period.", "No customer activity in this period."); error "Could not load dashboard metrics." + Retry; forbidden copy as above.

### 4.4 Export modal (spec, not yet implemented)

- MUI `Dialog` (`PaperProps` → `panel`), title `d4-m` "Export your data", body `b2-r`.
- `FormBuilder` fields: `period` (select: today / 7d / 30d), `include` (checkbox group: `orders`, `enquiries`), `format` (radio: `csv`, `json`). Field names are snake_case and must match the backend once the endpoint exists.
- Primary button "Export" with `loadingState`; secondary "Cancel".
- States: idle → pending (button spinner) → success toast "Export ready. Check your downloads." → close; error toast "Could not export right now. Please try again."
- Helper line under the form: "Works with ChatGPT, Claude, Gemini or any spreadsheet."

### 4.5 Settings (spec, not yet implemented)

- Sections as `panel` blocks with `d4-m` titles: Workspace, Connected pages (links to `platform-connection`), Notifications (daily summary toggle), Members (links to `member`), Plan (current plan + "Manage plan" → `/pricing`).
- Forms via `FormBuilder`; save buttons disabled while pending; `toast.success('Settings saved')`.
- Danger zone: "Delete workspace" uses `AppConfirmDialog` with the workspace name typed to confirm.

### 4.6 Microcopy

| Context                     | Copy                                                                   |
| --------------------------- | ---------------------------------------------------------------------- |
| Primary CTA                 | Start free · Connect your page · Go Pro · Talk to us                   |
| Secondary CTA               | See how it works · See pricing · Log in                                |
| Labels                      | Order · Enquiry · Noise · Confirmed · Unlabelled                       |
| Orders empty                | No orders yet. Orders found in the DMs and comments of your connected pages will appear here, with the original message kept beside them. |
| Enquiries empty             | No enquiries yet. Questions about price, delivery or your menu will appear here as soon as a connected page receives one. |
| Dashboard empty             | No messages in this period.                                            |
| Loading                     | (skeletons, no text)                                                   |
| Error                       | Could not load orders. / Could not load dashboard metrics. → Retry     |
| Save success                | Label updated · Settings saved · Export ready. Check your downloads.   |
| Save error                  | Could not save. Please try again.                                      |
| Forbidden                   | You need an owner or admin role to view this dashboard.                |

---

## 5. Light variant

`:root[data-theme='light']` remaps background → ivory `#f5efe6`, surface → `#fbf7f0`, text → `#1a1410`, primary → `#8f6b2a` (gold deepened for 5.9:1 on ivory), labels and glass to light-safe mixes. Switch by setting `data-theme="light"` on `<html>` in `app/layout.tsx` and passing `mode="light"` to `ThemeProvider` in `app/Provider.tsx`.
