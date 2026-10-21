# Competitive UX Synthesis: Running Shoe Discovery and Local Pickup

Status: Draft for researcher review; customer problems and opportunity assessments are unvalidated. No retailer ranking, final feature decision, or approved PRD.

Walkthrough factual source: [Competitive UX Audit](competitive-ux-audit.md). Observation and screenshot IDs below refer to that audit. Interpretations and proposed research are distinguished from observations.

## 1. Executive Summary

Andre Taylor's structured walkthrough compared DICK'S Sporting Goods, Academy Sports + Outdoors, and REI under one shopping scenario: men's running shoes, US size 10, displayed price at or below $150, and local pickup preferred near ZIP 75231 in Dallas. This was one researcher's walkthrough, not a formal customer usability study. No purchase or fulfillment verification occurred (audit Sections 2–3; D-08, A-12, R-12).

Three observed patterns warrant further research:

- **Results-level eligibility required further variant checks.** Academy's Nike listing indicated Dallas pickup, while the inspected variant's panel said Dallas was out of stock; Dallas-only filter scope and exact pictured-versus-inspected variant conditions remain unresolved. REI's initial Arahi colorway was unavailable for Dallas pickup; another colorway at $150 displayed availability. These are interface observations, not evidence of inventory-system defects (A-05, A-08; E-A07–E-A09; R-10, R-11; E-R07, E-R08).
- **Price controls and displayed prices did not always resolve the exact budget constraint.** DICK'S selected bands excluded prices below $50; REI's omitted below-$50 prices and extended above $150; no omitted qualifying products were documented. REI's Bondi 9 card advertised $140.93–$175, while the selected Black/Black colorway cost $175. Academy offered custom $0–$150 inputs (D-03; S-04; A-02, A-03; E-A02–E-A04; R-03, R-07; E-R02, E-R04, E-R05).
- **Walkthrough-reported persistence differed by retailer and selection.** Size 10 required reselection on the DICK'S product page and REI's Bondi 9 page, while it carried to both Academy product checks. Repetition alone does not establish poor usability (D-07; S-06; A-07, A-11; E-A08, E-A12; R-08; E-R05).

**Historical investigation preference:** C1 was provisional, not a validated priority. Review C1–C4 alongside the repaired public-feedback analysis before designing a separate bounded online pass. Prototype feasibility and assumed potential impact do not establish customer-problem evidence. No problem, solution, PRD, or prototype is selected in this correction pass.

## 2. Research Methodology and Limitations

The researcher used Chrome Incognito on Windows desktop, navigated from retailer homepages through site menus, applied size and available price controls, selected pickup, and inspected products without purchasing. The intended selection rule was the first filtered product with a visibly qualifying price and pickup indication. Academy and REI included explicit follow-up checks; REI's primary choice used an in-budget starting price under the active pickup filter (audit Sections 2–3; A-06, A-10; E-A07, E-A08, E-A11; R-07, R-09; E-R04–E-R06).

| Methodological difference | Consequence for interpretation | Audit trace |
| --- | --- | --- |
| DICK'S used $50–$100 and $100–$150 bands; Academy used custom $0–$150; REI used $50–$99.99 and $100–$199.99 | Different price coverage; REI's 67 pickup results cannot be read as 67 products meeting the $150 cap | D-03–D-05; S-04, S-05; A-03; E-A04; R-03–R-05; E-R02–E-R04 |
| Academy initially included multiple stores, then reportedly narrowed to Dallas; DICK'S and REI used selected Dallas stores | Academy's 43-result state is researcher-reported as Dallas-only; E-A07 and E-A11 still show “Dallas & Nearby Stores” without deselected checkboxes, so that scope is not independently confirmed | D-05; S-05; A-04, A-05, A-10; E-A05–E-A07, E-A11; R-05; E-R04 |
| DICK'S checked one product; Academy checked Nike then Adidas; REI checked Bondi 9 then two Arahi colorways | Unequal exploration and selected variants prevent equivalent outcome-rate comparisons | D-06–D-08; S-05–S-07; A-06–A-11; E-A07–E-A12; R-07–R-11; E-R04–E-R08 |

Counts are session-specific displayed assortments, not equivalent inventory measurements. Different sessions, assortments, price coverage, store scope, and product versus variant eligibility limit comparison. No stock records, actual readiness, customer feedback, task durations, or click counts were validated; accessibility and comparison features were not systematically tested (audit Sections 3, 7–8; D-08, A-12, R-12).

Evidence consists of supplied walkthrough observations and screenshot references. E-A08 and E-R08 show shipping ZIP 61820 alongside Dallas pickup selections; this is distinct from reported ZIP 75231 entry and does not establish the cause of Academy distance changes. Price, size, and store-filter conjunction across variants was not established. All 27 screenshots (7 DICK'S, 12 Academy, 8 REI) were individually visually inspected; their visible page states support the mappings subject to the audit's Section 6 qualifications. Still images do not independently prove navigation, automatic persistence/preselection, action order, or non-purchase. DICK'S selected size is above the S-06/S-07 viewport, and closed price controls in S-04 do not independently prove the absence of a custom input. Legible address-bar text is transcribed for 26 images; E-R02 omits the address bar. These transcriptions are not independently validated live URLs, and base category addresses do not substitute for complete filtered URLs. Homepage URLs, capture timestamps, and much setup metadata remain unrecorded or unverified; file timestamps are not verified interaction times (audit Sections 5–7). This synthesis inherits those limits and adds no independent factual research.

## 3. Cross-Retailer Findings

### Product discovery and navigation

**Observed:** DICK'S category offered Road Running and Trail Running links and fulfillment controls; Academy showed category/brand shortcuts; REI had an independently scrollable filter panel and cards with running specifications, ratings, prices, and color options (D-01, D-02; S-01–S-03; A-01; E-A01; R-01, R-02; E-R01).

**Interpretation:** These different information structures may support different browsing strategies. **Uncertainty:** No participant navigation performance or comprehension was measured; control availability does not establish discoverability or superiority.

### Size and variant-selection persistence

**Walkthrough-reported:** DICK'S retained black color but required size 10 and width Medium/D selection. Academy retained size 10 on both checks, with width D automatic and pickup preselected. REI retained Bondi 9 color and Dallas store but required size reselection (D-07; S-06; A-07, A-11; E-A08, E-A12; R-08; E-R05).

**Interpretation:** Carrying a size preference may reduce repeated work, consistent with the audit's unvalidated H-01. **Evidence qualification:** Persistence, automatic preselection, and reselection sequences remain walkthrough-supplied; the inspected stills support visible selection states (audit Section 6). **Uncertainty:** Reselection might help a shopper confirm a variant; fewer interactions alone do not establish a better experience. The audit does not establish Arahi size persistence.

### Price-filtering precision and visibility

**Observed:** Academy supplied custom minimum/maximum inputs. DICK'S and REI used bands with coverage limitations. At least one DICK'S card said “See Price in Cart.” REI's Bondi 9 starting price was within budget, but its selected Black/Black colorway was $175 (D-03, D-04; S-04; A-02, A-03; E-A02–E-A04; R-03, R-04, R-07; E-R02–E-R05).

**Interpretation:** Shoppers may need additional checks to establish exact-variant affordability; this extends the question raised by unvalidated H-02 without confirming it. **Uncertainty:** A $140.93–$175 listing range followed by a $175 selection is not by itself misleading or a filter defect; it may adequately communicate variation. Price-cap treatment of taxes and fees is unrecorded (audit Section 2).

### Pickup discoverability and store selection

**Walkthrough-reported:** Pickup selection preserved existing filters at all three retailers. Academy reportedly defaulted to Dallas plus nearby stores; the 43-result state showed “Pick Up at Dallas” cards, but its “Dallas & Nearby Stores” chip and lack of visible deselected checkboxes leave Dallas-only scope unconfirmed by E-A07/E-A11 (audit Section 6). REI communicated pickup through the active Dallas filter without individual store-specific card messages in the observed screenshot. Academy's displayed Dallas distance also changed between inventory checks (D-05; S-05; A-04, A-05, A-09; E-A05–E-A07, E-A09, E-A10; R-05, R-06; E-R04).

**Interpretation:** Shoppers may need to distinguish selected-store scope from nearby-store scope. **Uncertainty:** Multi-store results may support shoppers willing to travel. The distance change has no established technical cause or measured customer effect.

### Product-level versus exact-variant inventory visibility

**Observed:** Academy's Nike page said “Available Nearby” while the inventory panel marked Dallas out of stock. Its separate Adidas check displayed Dallas pickup “Today” and “Only 2 left!” REI's Arahi Stardust/Cosmic Grey at $120.93 was out of stock for Dallas pickup; Stellar Grey/Stardust at $150 displayed in-stock pickup. DICK'S displayed the selected store and “Only 1 left!” after explicit pickup selection (A-08, A-11; E-A08, E-A09, E-A12; R-10, R-11; E-R07, E-R08; D-08; S-06, S-07).

**Evidence qualification:** E-R08 displays Stellar Grey/Stardust, while its address bar retains `color=STARDUST%252FCOSMIC%2520GREY` from E-R07. The visible price and pickup state support R-11; the URL must not be treated as encoding the displayed colorway. This limits reproduction from the URL, without invalidating the visible selection or establishing a customer-facing defect. The cause is unknown (audit Section 6).

**Interpretation:** If a filtered listing suggests that its pictured variant qualifies for selected-store pickup but the product page does not confirm it, that is a credible interface concern without requiring interviews. Academy store scope and exact pictured-versus-inspected variant conditions remain unresolved. “Available Nearby” and Dallas “Out of Stock” are compatible. Product-level versus exact-variant filter conjunction was not established. **Counterexamples and uncertainty:** The later screens explicitly distinguished available and unavailable variants; they may provide sufficient clarification. The displayed statuses were not checked against actual inventory, so neither their accuracy nor a system defect is established.

### Pickup timing and fulfillment clarity

**Observed:** DICK'S displayed “Ready tomorrow”; Academy's Adidas displayed “Today.” REI showed general readiness within two hours, then “Tomorrow after 11:00 AM” for Bondi 9 and the in-stock Arahi colorway (D-08; S-06, S-07; A-11; E-A12; R-01, R-05, R-08, R-11; E-R01, E-R04, E-R05, E-R08).

**Interpretation:** Shoppers may need to understand which message applies to their final selection. **Uncertainty:** Screenshots show the store closed. Store-hours conditions plausibly explain the general two-hour versus next-day messages, but the cause is not verified and no broken promise is established. Actual fulfillment speed was not tested (audit Section 7; A-12, R-12).

## 4. Potential Customer Problems

All four candidates are hypotheses about customer needs, not proven frustrations. Retailer implications below are assumptions to investigate; no conversion or revenue effect is claimed.

| Candidate problem statement | Observed evidence | Potential customer relevance | Potential retailer relevance | What remains unvalidated |
| --- | --- | --- | --- | --- |
| **C1: A shopper may struggle to confirm that one exact variant satisfies price and selected-store pickup together.** | Academy Nike listing-to-product eligibility concern (store scope unconfirmed); REI Arahi availability differs by colorway and price. Clear later variant messages are counterexamples; E-R08's displayed color differs from its retained URL color parameter (see Section 3) (A-08, A-11; E-A08, E-A09, E-A12; R-10, R-11; E-R07, E-R08) | May require revisiting alternatives before identifying a qualifying choice | Could help align product selection with the shopper's stated constraints | Whether shoppers misinterpret early cues, whether later clarification is sufficient, frequency, and business effects |
| **C2: A shopper may struggle to enforce a strict maximum budget from filters and listing prices.** | Band coverage, hidden card price, Bondi starting versus selected price; Academy custom inputs offer a counterexample (D-03, D-04; S-04; A-02, A-03; E-A02–E-A04; R-03, R-07; E-R02, E-R04, E-R05) | May complicate choosing an affordable variant | Could improve clarity of budget eligibility | Price-range comprehension, unmet need for custom controls, and whether existing checks suffice |
| **C3: A shopper may need to re-establish size preference when opening a product.** | DICK'S and Bondi size reselection versus Academy persistence (D-07; S-06; A-07, A-11; E-A08, E-A12; R-08; E-R05) | May create repeated work or uncertainty about the active size | Could support continuity between listing and product selection | Whether repetition causes difficulty or instead supports useful confirmation; relationship to H-01 |
| **C4: A shopper may be unsure which pickup readiness estimate applies to the selected variant.** | REI general two-hour message versus next-day variant messages; explicit DICK'S and Academy product messages (R-01, R-05, R-08, R-11; E-R01, E-R04, E-R05, E-R08; D-08; S-06, S-07; A-11; E-A12) | May affect planning for a preferred pickup time | Could clarify expectations before order placement | Whether messages are misunderstood, applicable conditions, actual readiness, and any customer or retailer consequences |

## 5. Research Questions and Validation Opportunities

This independent undergraduate PM portfolio can continue using online evidence, documented website walkthroughs, and eventually a prototype. Interviews and recruitment are not prerequisites. Online participant testing is optional future work, not authorized by this correction pass.

| Candidate | Question for a separately designed online evidence pass | What would narrow or challenge it |
| --- | --- | --- |
| C1 | What does a filtered listing establish about the pictured variant, its price, and selected-store pickup? | Explicit later clarification, different variant/store conditions, or evidence limited to only one component. |
| C2 | How precisely do available controls and price displays resolve a maximum budget? | A transparent range and clearly priced final selection may be sufficient; the existence of qualifying products omitted below $50 must not be assumed. |
| C3 | What selection continuity is researcher-observed between listing and product pages? | Still images show states, not intervening actions; deliberate confirmation may be useful. |
| C4 | Are general and selected-variant readiness messages distinguishable in context? | Closed-store conditions and clearly scoped messages may explain differences; fulfillment reliability is a separate question. |

## 6. Preliminary Opportunity Assessment

C1–C4 remain revisable hypotheses. Interface observations support investigating exact-variant eligibility, budget-control coverage, selection continuity, and pickup-message scope. Customer prevalence, technical causes, prototype preference, and business impact remain unestablished. Earlier qualitative impact/feasibility judgments were assumptions; they do not determine a problem priority. No scoring system or retailer ranking is introduced.

The repaired [feedback analysis](customer-feedback-analysis.md) distinguishes direct candidate relevance from adjacent reported experiences. Its October 19, 2026 source-verification corrections are attributed to the supplied independent ChatGPT audit, not to new source reopening here. Six FB accounts remain accepted, FB-003 is a date-incomplete lead, V-04/V-05 are two date-resolved screened accounts without new FB IDs, and BG-001 remains background. Eight source-date-qualified accounts span the FB and V/SC registers, not eight accepted FB records.

- C1 has partial public-feedback components: FB-003 concerns variant-dependent fulfillment options, while V-04 concerns app store switching/stock visibility. Neither validates its full budget/exact-variant/selected-store conjunction.
- C2 and C3 have no accepted direct public-feedback evidence in this corpus. Walkthrough interface evidence remains relevant. V-05's cart/filter loss does not establish listing-to-product size reselection.
- C4's message-comprehension question is not validated by post-purchase reliability accounts. FB-001 explicitly understands ready-email requirements and seeks a useful arrival estimate. FB-004/FB-005 concern adjacent availability/communication; FB-006 challenges blanket unsuccessful pickup, not C4 specifically.
- Emergent themes include arrival-estimate usefulness, assembly-information discovery with later clarification (FB-002), app navigation/performance and positive deals (V-05), and order handoff (FB-007). Public feedback establishes reports, not independently verified retailer conduct.

## 7. Recommended Next Research Direction

Researcher review should precede a separately designed, bounded online research pass. Keep C1 as a historical investigation preference, not a required outcome or validated priority. Compare direct interface evidence, relevant reported consequences, counterevidence, and unresolved context across C1–C4 and emergent themes. Preserve the Nike listing concern while qualifying store/variant scope; preserve the Arahi visible state while treating its URL discrepancy as a reproduction limitation.

Do not select a customer problem, solution, PRD, or prototype during this repair. Feasibility with simulated data can constrain later implementation, but cannot replace evidence that a problem is worth addressing.

## 8. Next Steps

1. Review corrected claims, source classifications, date/count categories, and unresolved Academy store/variant and Arahi reproduction conditions.
2. Separately design a bounded online pass with explicit questions, source-selection rules, provenance, publication-date checks, time budget, stopping conditions, and disconfirming evidence. Preserve historical missing data rather than reconstructing it.
3. Compare evidence before selecting any customer problem. Interviews or recruitment are not prerequisites; optional future online participant testing would require its own design.
4. Defer PRD, solution, and prototype decisions until that review. No new study or publication is authorized by this document correction.

## 9. Pilot update — October 20, 2026

The completed [online research pilot](online-research-pilot.md) records a targeted Academy check and a six-query public-feedback screening pass reported from ChatGPT Work. Its later unchecked nearby-store boxes and pictured-variant listing/product sequence support a specific pickup-clarity concern; automatic size transfer is a counterexample to reselection friction in that journey. The screenshot-visible pickup display is distinguished from the report's explicit Dallas out-of-stock accessibility label. These later observations do not rewrite the historical audit.

Browsing-progress preservation is a competing emerging theme with different reported triggers across retailers, not automatic confirmation of C3. Positive/mixed evidence remains relevant; app reports do not establish desktop website behavior. Pilot dispositions remain separate from formal accepted FB records, including rediscovered V-04/V-05. See the pilot for exact queries, all result positions, review locators, exclusions, duplicates, and limitations. Frequency, cause, customer interpretation, and the final problem remain unresolved. No problem, PRD, or prototype is selected; proposed follow-ups have not been executed by this integration.

## 10. Provisional focus after fixed-sample follow-up — October 20, 2026

The [completed three-card Academy follow-up](academy-website-followup.md) supports the [problem brief's provisional desktop-web pickup-clarity focus](../product/problem-brief.md), with successful pickup matches and preserved selection/filter state retained as counterexamples. This reasoned scope decision supersedes the earlier “no problem selected” status for the current concept only; historical statements remain dated evidence. Browsing-progress complaints with different triggers remain unresolved. Customer priority, comprehension, prevalence, severity, and business impact are unmeasured; no PRD, prototype, or new live research was performed during integration.
