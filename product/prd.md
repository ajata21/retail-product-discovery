# Draft PRD: Exact-variant pickup clarity

October 20, 2026. Exploratory independent portfolio concept based on Academy's observed desktop website; not an official retailer initiative, validated business opportunity, or implementation commitment. Design revision: October 21, 2026. The [local prototype](../prototype/README.md) now implements revised qualifying-variant matching with explicitly simulated data and new functional checks. The first iteration and its screenshots remain earlier-design records; prior checks were not treated as revised compliance. No new research or customer validation completed.

## 1. Problem, evidence, and limits

The [shopper task](problem-brief.md) is comparing men's running shoes, US size 10, maximum displayed price $150, for pickup at a chosen Dallas store near ZIP 75231. The concern is whether a listing's pickup label applies to the pictured color, selected size and width, and chosen store together.

In the supplied ChatGPT Work [fixed three-card follow-up](../research/academy-website-followup.md#product-outcomes), all sampled cards said pickup at Dallas with nearby-store boxes unchecked. Nike Grey/Green, 10, D, $94.99 instead offered Lewisville pickup and Dallas email notification; the [raw browser-state JSON](../research/evidence/2026-10-20-academy-followup/academy-followup-raw-20261020.json) explicitly labels Dallas out of stock. The Nike screenshot shows its upper product panel, not pickup details. adidas Black, 10, D, $79.99 and Reebok White/Navy, 10, D, $49.99 displayed Dallas pickup: successful comparisons that constrain blanket failure claims.

Nike repeats the [pilot's same product/session environment](../research/online-research-pilot.md#controlled-academy-website-check), not another independent customer account. Local evidence inspection is not live-site verification. Stock accuracy, customer confusion, prevalence, severity, and business impact are unmeasured. App complaints about browsing progress have different triggers; the short desktop Back checks neither disprove them nor validate the proposed solution. See [synthesis](../research/competitive-ux-synthesis.md#10-provisional-focus-after-fixed-sample-follow-up--october-20-2026) and [feedback qualifications](../research/customer-feedback-analysis.md#8-research-limitations-and-search-coverage).

## 2. Goal and non-goals

Goal: when selected-store pickup filtering is active, show a confirmed qualifying pictured variant and clearly identify its eligibility during comparison. Preserve explicit shopper preferences, successful matches, and browsing context.

Exclude inventory-system repair, fulfillment operations, checkout, reservations, native-app redesign, account requirements, broad visual redesign, and unrelated discovery features. Availability is information, not an inventory reservation or readiness guarantee.

## 3. Revised direction and flow

Prototype review prompted considering qualifying pictured variants and filtering to prevent the card-to-details mismatch, alongside clearer wording. This combines variant selection, exact confirmation and exclusion of confirmed non-matches. It is a design decision, not a new finding or evidence of easier engineering, better comprehension or business benefit.

| Approach | Tradeoff |
| --- | --- |
| Qualifying pictured variant + exact confirmation — proposed | Addresses selection and messaging together; requires reliable variant coverage and uncertain-result handling. |
| Clarify product-family pickup wording | Explains variation but leaves the shopper to establish exact eligibility. It remains an alternative if wording suffices or data is inadequate. |
| Require details or quick view | Provides selection context, but eligibility remains unresolved until that extra step. |

With selected-store pickup active, evaluate size, width, maximum price, store and any explicit color preference together. Track pictured color separately from explicit preference. “Any color” is intentional, not incomplete: initially picture the first confirmed qualifying color in fixed catalogue order, showing it in image and text. No personalization or optimization.

An explicit color choice is a requirement, never replaced to manufacture a match. Details preserve the card variant; later changes invalidate its eligibility and re-evaluate matching. Unavailable selections belong in details or labeled selection exceptions, not confirmed matches. Nearby alternatives require explicit action without changing the chosen store or overriding exclusions.

## 4. Requirements and acceptance criteria

R1–R10 are revised below; prior prototype checks apply to their earlier definitions. These describe intended behavior, not retailer capabilities.

| ID | Expected behavior | Observable acceptance criterion |
| --- | --- | --- |
| R1 | Choose and identify a qualifying variant | With no color preference and invented Black/10/D/Dallas eligibility, picture Black if it is first in the fixed eligible-color order. Image/text identify that color, size, width, price and store; each satisfies the filters. |
| R2 | Respect preference and preserve detail identity | With explicit Grey/Green preference, an eligible Black fixture cannot silently replace it. Details opened from a match preserve its exact color, size, width, price and store. Confirmed matches explicitly name chosen-store pickup; no reservation/readiness promise. |
| R3 | Keep nearby scope separate | Lewisville availability alone never qualifies a product for Dallas-filtered results. Nearby alternatives require an explicit check, show their location and exact variant, and leave Dallas chosen. |
| R4 | Exclude confirmed non-matches | When complete, fresh fixture coverage confirms no variant meets all active requirements, exclude the product from matching results. One unavailable color alone cannot establish this. A definitive no-matches message requires all relevant products resolved as non-matches, not unknown. |
| R5 | Handle incomplete context | Missing store, size, width, or required variant mapping prompts completion without stock claims. No color preference permits R1 selection; an explicit preference must be honored. Missing mapping/data cannot be treated as absence of qualifying variants. |
| R6 | Re-evaluate changes safely | Color preference, size, width, price-limit or store changes immediately invalidate prior matching/status. Show checking; discard obsolete responses. Re-evaluate all active constraints before restoring a match; never silently override explicit selections. |
| R7 | Distinguish unknown from non-match | Loading, failed, stale or unknown data cannot produce confirmed availability or out-of-stock claims. Failure offers retry. If no match is confirmed because information is uncertain, say results could not be fully confirmed; do not say no matching products exist. |
| R8 | Separate delivery modes | Shipping ZIP/eligibility never determines selected-store pickup or changes its chosen location. |
| R9 | Communicate accessibly | Match, non-match and uncertain states use text, not color alone. Controls are keyboard-operable; meaningful asynchronous changes and partial-results notices are announced without unexpected focus changes. |
| R10 | Preserve browsing | Details → Back retains filters, explicit preferences, displayed exact variant, sort, chosen store, nearby exclusions and browsing position. Rechecking does not silently substitute a shopper-selected color. |

Matching results contain only confirmed qualifying variants. Uncertain products belong outside that list with a clearly labeled incomplete-results notice and appropriate completion/retry actions. If one variant qualifies, unknown alternatives do not invalidate that confirmed match. If none qualifies and any potentially qualifying variant remains unresolved, the product is uncertain, not a confirmed non-match.

Unavailable-variant messages remain useful in details, after explicit selection changes, and in separately labeled alternatives or selection exceptions. They must identify their variant/store scope rather than declare the entire product out of stock.

## 5. Data assumptions and prototype boundaries

Required information includes variant identity, image/color mapping, per-variant price, size/width options, store eligibility, coverage completeness, response context and freshness. Production access, reliability and freshness rules remain unresolved; no APIs, estimates, staffing or rollout commitments are assumed.

Use deterministic mocked data for the next revision. Historical Nike Grey/Green and adidas/Reebok states do not establish another qualifying Nike color at Dallas. Alternate-color availability and complete “no variants qualify” cases need explicitly invented fixtures. Missing combinations remain unknown. Label historical examples and invented scenarios separately; neither is current inventory.

The revised prototype uses persistent product-specific Any color/explicit-color controls, fixed catalogue order, and compact exception rows outside confirmed matches. Clearing a preference returns focus to its persistent control. Details retain the pictured variant until an explicit change; returning after removal explains it and restores context with accessible fallback focus. The invented qualifying-color demo is the labeled default; historical mode leaves unknown variant combinations unresolved.

## 6. Proposed validation and success measures

Primary question: can people identify the exact pictured shoe, size and width that qualifies at their chosen store, while recognizing explicit preferences, nearby-only options and incomplete results?

Future fixture checks should cover R1–R10, especially initial color selection, explicit preferences, exclusion, uncertainty and details identity. Passing demonstrates functional behavior only; retained context never authorizes stale eligibility.

Optional online evaluation could compare this direction, clearer family wording and details-first flow. Proposed measures: eligibility accuracy (answers matching scenario truth), store-scope errors (nearby mistaken for chosen-store pickup), preference recognition (pictured color versus stated preference), and uncertainty recognition (identifying incomplete results). Include successful cases and selection changes. No baselines, targets, completed samples, customer results or business forecasts exist.

In-person interviews and recruitment are not prerequisites. Without a participant study, comprehension, preference, perceived effort and customer value remain unvalidated. The revised direction is a portfolio hypothesis, not a measured improvement.

## 7. Open decisions and risks

- Can variant coverage and freshness reliably distinguish no qualifying variant from incomplete information? If not, reconsider the direction or use explicit uncertainty.
- Could clearer family wording sufficiently explain eligibility without the additional selection behavior?
- Are the prototype's separate pictured-color text and persistent Any color/explicit-preference controls understandable to shoppers? This remains unvalidated.
- Do compact selection exceptions and persistent preference controls communicate removal adequately? Functional focus checks do not establish human comprehension.
- Could eligibility wording still imply reservation or readiness? Keep those separate from availability.
