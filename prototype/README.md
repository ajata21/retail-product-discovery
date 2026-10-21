# Fieldwork: qualifying-variant pickup prototype

Revision 2 — October 21, 2026. A local desktop concept implementing the [revised PRD R1–R10](../product/prd.md#4-requirements-and-acceptance-criteria). It is independent of Academy, uses deterministic simulated data, and has no live inventory, ordering, accounts, analytics, external assets, or network requests. Functional checks are not evidence of customer comprehension or business impact.

## Open in Chrome

Double-click `prototype/index.html` if Chrome is your default browser. Otherwise right-click → **Open with → Google Chrome**, or use **Ctrl+O** in Chrome and select `index.html` in this folder. Keep `index.html`, `styles.css`, `fixtures.js`, and `app.js` together. The address starts with `file:///`; no server, build, installation or internet connection is needed.

## Current shopping behavior

Selected-store pickup is an active requirement, together with size, width, maximum price, and any explicit product-specific color preference. Dallas, US men's size 10, Standard/D and $150 are initially selected.

- **Any color** is a preference value, separate from the pictured color. It selects the first confirmed qualifying variant in fixed catalogue color order. The pictured color, ordinary per-variant price, size/width and pickup text all refer to that variant. Sorting changes product order, not the color-selection rule.
- **An explicit color** is never overridden. If it does not qualify, the product leaves confirmed matches. Its preference selector remains visible above results, and a compact exception row explains the exclusion, offers **Clear color preference**, and allows **Inspect selection**. Clearing deliberately returns to Any color and focuses the persistent selector.
- **Confirmed non-matches** are excluded. One unavailable color is not proof that no variant qualifies. Unknown alternatives do not invalidate an already confirmed qualifying variant.
- **Uncertainty** stays outside the matching cards in compact rows, with incomplete-results text and relevant completion/retry actions. A definitive no-matches message appears only when all three products are confirmed non-matches. Loading immediately removes previous match claims. Failure, stale, missing, and unknown answers never imply out of stock.
- **Details** preserve the exact variant pictured on the originating card without turning an automatically pictured color into an explicit preference. Selecting a color in details makes that choice explicit; an unavailable color stays pictured with its exact status. A qualifying alternative, when known, requires an explicit action. **Use Any color for results** clears the preference without silently changing the details picture.
- **Another store** is optional: use **Check another store: Lewisville** (or Dallas when Lewisville is chosen). It does not qualify a product for the chosen-store list, change the chosen store, or silently add scope. Remove the check to exclude it; changing the chosen store clears optional checks. No distances or readiness promises are supplied.
- **Back** and **Return to results** retain selections, explicit preferences, sort, nearby scope and browsing position. If a details selection removed the originating match, return explains that and focuses its persistent preference control instead of restoring an invalid card. Scroll adjusts if needed to make that fallback focus visible.
- **Shipping** is explicitly unevaluated and independent of pickup. Changing its area does not trigger a pickup lookup or change the chosen store.

The compact layout keeps the original visual identity. At 1440 × 900 and default browser zoom, exact-variant information and pickup confirmation appear sooner without reducing text to force the whole page onto one screen. The smaller-window layout uses two columns, then one at narrow widths.

## Demo controls and provenance

Demo controls remain collapsed below the shopping flow. The default is the visibly labeled **invented qualifying-color demonstration**. Resetting a scenario restores Dallas, size 10/D, $150, Any color, original product order, and excluded nearby scope, except the explicit-preference and missing-size cases.

| Scenario | Deterministic behavior |
| --- | --- |
| Qualifying Nike color — default, invented | Grey/Green is unavailable at Dallas; Black/10/D at invented $119.99 qualifies and is pictured under Any color. adidas Black $79.99 and Reebok White/Navy $49.99 also qualify. |
| Several colors — invented | Grey/Green and Black both qualify; fixed catalogue order selects Grey/Green. An explicit Black preference is respected. |
| Explicit Grey/Green — invented | Nike is excluded from matches; eligible Black is not silently substituted. Clear the preference to include Black. |
| Historically inspired original outcomes | Original Nike Grey/Green/10/D/$94.99 is unavailable at Dallas and available at Lewisville. Other Nike colors remain unknown, so Any color cannot establish either a match or a whole-product non-match. adidas/Reebok original variants match at Dallas despite unknown alternative colors. |
| Complete no-variant coverage — invented | All listed colors in size 10/D are unavailable at both demo stores; all products are excluded and no matching products is definitive within this bounded catalogue only. |
| All unknown — invented | Zero confirmed matches; incomplete-results explanation, never an out-of-stock or definitive empty-results claim. |
| Partial — invented | Nike uncertain, adidas/Reebok confirmed. Confirmed matches coexist with incomplete results. |
| Per-variant price — invented | Black costs $159.99 and is excluded by $150. Raise the limit to $160: Nike Black qualifies and displays $159.99. Grey/Green remains unavailable. |
| Incomplete — invented | Size missing; complete the control to evaluate matches. Size 9/11 or width 2E combinations have undefined inventory, not inferred stock. |
| Slow — invented | Fixed 1.8-second lookup; changing selections invalidates old results immediately. |
| Failure — invented | Checks fail until Retry is used per product. Successful retries do not certify unrelated products. |
| Stale — invented | Expired information cannot confirm matches or stock absence. |
| Obsolete response — invented | Starts an older explicit Grey/Green request, then explicitly selects Black after 120 ms. Black resolves first; the older 1.6-second response is discarded. A review log reports this. |

Only the original Nike/adidas/Reebok outcome tuples are inspired by the [dated follow-up](../research/academy-website-followup.md). They are never current stock. Alternate colors, their prices and eligibility, full no-match coverage and special states are invented. Historical mode does not fill unknown combinations with guesses. Product membership and style are a bounded demo, not a complete real catalogue or Academy's unknown filter algorithm.

## Implementation

`fixtures.js` owns per-variant values, lookup, and pure matching assessment. `app.js` separately tracks explicit preferences, pictured variants, match/uncertain/non-match classifications, detail selections and optional store checks. Generation tokens reject obsolete main responses; scoped tokens reject obsolete nearby responses. Fixtures are local JavaScript, not fetched JSON or ES modules, so direct-file opening works.

Original inline SVG shoe illustrations follow the pictured color; they are not product photographs or accurate renders. No conditional-card, installment or recommendation-product prices are used as the selected shoe's ordinary price. Only Dallas and Lewisville are demo stores; availability is never a reservation or fulfillment guarantee. Freshness is a simulated state, not a production expiry policy.

## Verification performed for this revision

Earlier iteration checks are not used as proof of revised compliance. Current checks:

- Node syntax checks for the application, fixtures, and browser-check script.
- **47 built-in Node assertions** cover matching conjunction, fixed-order color choice, explicit preferences, historical unknown coverage, full non-match exclusion, partial results, actual per-variant price limits, store scope, missing context, failures/recovery and stale/unknown data.
- Existing Playwright and installed headless Chrome opened `index.html` via **file://** with no server or installed dependencies. Revised browser checks covered Any color versus explicit preference, image/text/price agreement, counts, immediate invalidation, exclusion versus incomplete results, clearing preferences, details identity and selection exceptions, explicit nearby scope, price changes, missing/unknown/failed/stale states, retry focus, obsolete responses, shipping independence, sorting, browser Back, Return, retained scope/context, and fallback focus after removal.
- Unchanged-selection Back restored measured scroll within one CSS pixel. Keyboard select interaction retained focus after async updates. The polite atomic status region and its text were checked; actual screen-reader speech was not.
- Inspected at **1440 × 900** and **900 × 760** CSS pixels, device scale 1 and default 100% zoom. The desktop pickup confirmation was checked within the viewport; the smaller window had no horizontal overflow. Five new screenshots were captured and visually inspected. No JavaScript errors or HTTP(S) requests occurred.
- Local links, preserved first-iteration screenshots, historical-document integrity and `git diff --check` were checked separately.

Run the dependency-free fixture check with an existing Node runtime:

```powershell
node prototype/tests/fixtures-check.cjs
```

The optional browser check uses an existing Playwright package and Chrome. Set `PLAYWRIGHT_PATH` to that installed package's absolute directory if needed, then run `node prototype/tests/browser-check.cjs`. Its output goes only to the revised screenshot folder below. No test dependency is needed to open the demo.

### Nearby navigation correction — October 21, 2026

Reproduced in installed headless Chrome: after explicitly checking Lewisville for Grey / Green in details and choosing Any color for results, returning displayed qualifying Black/10/D with an indefinite checking message. The stored nearby answer still belonged to Grey / Green. Navigation now starts a replacement check only when an existing opt-in's variant key differs; matching answers are retained, and obsolete responses are rejected. Store scope and explicit preferences are preserved.

The focused browser regression covers returning with both a completed Grey / Green answer and an in-flight response. Black's Lewisville eligibility correctly resolves as unconfirmed in this invented fixture. The full Chrome acceptance script passed at both existing viewport sizes, including unchanged-selection Back with nearby-answer, filter, preference, scroll and focus preservation; no runtime errors or HTTP(S) requests occurred. All 47 fixture assertions and application/test syntax checks passed. Set `PROTOTYPE_SCREENSHOTS=0` when running the browser script to preserve existing captures, as done for this correction. No research or screenshot evidence was changed.

### Revised screenshots

1. [Qualifying pictured variants](screenshots/revised-2026-10-21/01-qualifying-results.png).
2. [Explicit preference retained and exclusion explained](screenshots/revised-2026-10-21/02-explicit-preference.png).
3. [Unknown information, no false empty-results claim](screenshots/revised-2026-10-21/03-uncertain-results.png).
4. [Exact-variant details](screenshots/revised-2026-10-21/04-details-exact-variant.png).
5. [Smaller window](screenshots/revised-2026-10-21/05-smaller-window.png).

The four first-iteration PNGs directly under `screenshots/` are preserved unchanged as earlier-design records. Existing `prototype.zip` is also untouched and does not package this revision.

## Remaining limits and manual review

No material revised PRD behavior is intentionally deferred. Product data access, coverage completeness, reliability, image mapping and production freshness remain unresolved dependencies. No customer comprehension, preference, conversion or business-impact validation occurred.

Manually review double-click opening in your Chrome profile, the full tab order, screen-reader announcements, high-contrast/zoom settings, and other browsers. Automated live-region/focus checks are not a full accessibility audit. Only two viewport sizes were inspected; deep browsing, long inactivity, mobile/native apps and full browser-history sequences were not comprehensively tested. Refresh resets in-memory state. If a changed selection removes a card, exact previous scroll cannot always be retained while keeping fallback focus visible; the remaining filters and preference are preserved and removal is explained.
