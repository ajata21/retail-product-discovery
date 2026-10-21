# Draft PRD: Exact-variant pickup clarity

October 20, 2026. Exploratory independent portfolio concept based on Academy's observed desktop website; not an official retailer initiative, validated business opportunity, or implementation commitment. Status: proposed product direction; no prototype or new research completed.

## 1. Problem, evidence, and limits

The [shopper task](problem-brief.md) is comparing men's running shoes, US size 10, maximum displayed price $150, for pickup at a chosen Dallas store near ZIP 75231. The concern is whether a listing's pickup label applies to the pictured color, selected size and width, and chosen store together.

In the supplied ChatGPT Work [fixed three-card follow-up](../research/academy-website-followup.md#product-outcomes), all sampled cards said pickup at Dallas with nearby-store boxes unchecked. Nike Grey/Green, 10, D, $94.99 instead offered Lewisville pickup and Dallas email notification; the [raw browser-state JSON](../research/evidence/2026-10-20-academy-followup/academy-followup-raw-20261020.json) explicitly labels Dallas out of stock. The Nike screenshot shows its upper product panel, not pickup details. adidas Black, 10, D, $79.99 and Reebok White/Navy, 10, D, $49.99 displayed Dallas pickup: successful comparisons that constrain blanket failure claims.

Nike repeats the [pilot's same product/session environment](../research/online-research-pilot.md#controlled-academy-website-check), not another independent customer account. Local evidence inspection is not live-site verification. Stock accuracy, customer confusion, prevalence, severity, and business impact are unmeasured. App complaints about browsing progress have different triggers; the short desktop Back checks neither disprove them nor validate the proposed solution. See [synthesis](../research/competitive-ux-synthesis.md#10-provisional-focus-after-fixed-sample-follow-up--october-20-2026) and [feedback qualifications](../research/customer-feedback-analysis.md#8-research-limitations-and-search-coverage).

## 2. Goal and non-goals

Goal: make exact-variant/store pickup eligibility understandable during product comparison, before reliance on a card's pickup label. Preserve clear successful matches and existing browsing context.

Exclude inventory-system repair, fulfillment operations, checkout, reservations, native-app redesign, account requirements, broad visual redesign, and unrelated discovery features. Availability is information, not an inventory reservation or readiness guarantee.

## 3. Proposed MVP and flow

Recommend exact-variant pickup information on product cards as the prototype direction, explicitly subject to data feasibility and comprehension validation.

| Approach | Tradeoff |
| --- | --- |
| Exact-variant card information — proposed | Places the answer at comparison time; requires reliable variant/store data and careful state handling. |
| Clarify product-family wording | Simpler and less data-dependent; can explain that availability varies without resolving the pictured variant. |
| Require details or quick view | Gives selection context but adds a step before eligibility is known. |

The recommendation tests whether earlier specificity helps; it is not research-validated. If data is inadequate or simpler wording suffices, reconsider it.

Start from existing chosen store, size, width, and pictured/selected color. Show those values beside each card's pickup status; never silently substitute another variant. Missing values prompt selection through existing controls. Completed selections trigger a lookup; current text becomes “Checking pickup” before a result appears. Distinguish chosen-store availability from named nearby alternatives. Nearby results never silently change the chosen store or override nearby-store exclusions; offer an explicit optional check. Opening details and returning preserves filters, selections, sort, and browsing position. Matching products need no extra confirmation step.

## 4. Requirements and acceptance criteria

These are proposed observable prototype checks, not claims about current retailer capabilities.

| ID | Expected behavior | Observable acceptance criterion |
| --- | --- | --- |
| R1 | Identify exact context | Every resolved status names pictured/selected color, size, width, and chosen store; image and context agree. |
| R2 | Confirm chosen-store availability | An available fixture says “Pickup available at [store]” for R1's tuple; no reservation or unsupported readiness promise appears. |
| R3 | Separate nearby availability | When chosen store is unavailable and an explicitly checked nearby store is available, display both states and names; never label nearby pickup as chosen-store availability. |
| R4 | State no pickup within known scope | When all checked locations return unavailable, identify that scope; do not imply all stores were checked. Unknown locations remain unknown. |
| R5 | Handle incomplete selection | Missing size, width, color mapping, or store prompts the required choice; no confirmed available/unavailable claim appears. A default must be explicit. |
| R6 | Invalidate on changes | Changing color, size, width, or store immediately removes the previous tuple's current eligibility. During lookup show checking; delayed responses for older tuples cannot replace the new result. |
| R7 | Handle uncertain data | Loading says checking; lookup failure offers retry; stale/missing data says eligibility cannot be confirmed. None is presented as available or out of stock. |
| R8 | Separate delivery modes | Shipping ZIP/eligibility cannot determine pickup status. Changing shipping alone does not relabel the chosen pickup store. |
| R9 | Communicate accessibly | All states have text meaning independent of color. Controls work by keyboard; meaningful asynchronous changes are announced without moving focus. Announced context matches the visible tuple. |
| R10 | Preserve browsing | After details → Back, retain filters, sort, variant/store choices, nearby exclusions, and the prior card's visible browsing position; do not reset to the top. |

R5–R7 take precedence over resolved outcomes R2–R4. A selected-store unavailable result may coexist with unknown nearby status; never infer nearby unavailability from a failed lookup.

## 5. Data assumptions and prototype boundaries

The concept needs product/variant identity, image-to-color mapping, size/width options, chosen store identity, per-location eligibility, response context, observation time, and freshness status. Exact-variant/store access, reliability, and a defensible freshness rule are unresolved production dependencies. No API contracts, engineering estimates, capacity, or rollout dates are assumed.

A future deterministic prototype would use explicitly mocked fixtures. Label historically inspired Nike/adidas/Reebok states as historical examples, not current stock. Separately label invented incomplete, failure, stale, and changed-selection scenarios as test cases, not findings. Fixed responses and controlled response ordering would exercise R1–R10, including delayed obsolete results. Do not connect to live inventory or imply that simulated eligibility can fulfill an order.

## 6. Proposed validation and success measures

Primary question: can people correctly identify where a specified pictured color, size, and width can be picked up, distinguishing their chosen store from nearby alternatives and unknown status?

Prototype acceptance checks would compare displayed and announced states against fixture truth for R1–R10. Passing these checks demonstrates specified behavior, not human comprehension.

Optional future online comprehension evaluation could compare current wording, clarified family wording, and exact-variant cards using equivalent scenarios. Proposed measures: eligibility-identification accuracy (answers matching scenario truth), store-scope errors (nearby availability attributed to the chosen store), and uncertainty recognition (unknown cases identified as unconfirmed). Record explanations and whether details were needed. Define the evaluation procedure before collecting results; no baselines, numeric targets, completed sample, or conversion forecasts exist.

In-person interviews and recruitment are not prerequisites. Without a participant study, online evidence and fixture checks can support design rationale and functional consistency, but comprehension, preference, perceived effort, and customer value remain unvalidated.

## 7. Open decisions and risks

- Can reliable exact-variant/store information and freshness be established? If not, use explicit uncertainty and revisit the direction.
- Could clarified family wording provide sufficient understanding with less complexity? This remains a live alternative.
- How should unset widths, image/color ambiguity, nearby exclusions, and freshness expiry be communicated without overloading cards?
- Might detailed statuses imply a reservation or promise? Wording must preserve uncertainty and separate availability from fulfillment.
