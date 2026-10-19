# Competitive UX Synthesis: Running Shoe Discovery and Local Pickup

Status: Draft for researcher review; customer problems and opportunity assessments are unvalidated. No retailer ranking, final feature decision, or approved PRD.

Sole factual research source: [Competitive UX Audit](competitive-ux-audit.md). Observation and screenshot IDs below refer to that audit. Interpretations and proposed research are distinguished from observations.

## 1. Executive Summary

Andre Taylor's structured walkthrough compared DICK'S Sporting Goods, Academy Sports + Outdoors, and REI under one shopping scenario: men's running shoes, US size 10, displayed price at or below $150, and local pickup preferred near ZIP 75231 in Dallas. This was one researcher's walkthrough, not a formal customer usability study. No purchase or fulfillment verification occurred (audit Sections 2–3; D-08, A-12, R-12).

Three observed patterns warrant further research:

- **Results-level eligibility required further variant checks.** Academy's Nike listing indicated Dallas pickup, but the selected variant's inventory panel said Dallas was out of stock. REI's initial Arahi colorway was unavailable for Dallas pickup; another colorway at $150 displayed availability. These are interface observations, not evidence of inventory-system defects (A-05, A-08; E-A07–E-A09; R-10, R-11; E-R07, E-R08).
- **Price controls and displayed prices did not always resolve the exact budget constraint.** DICK'S selected bands excluded prices below $50; REI's extended above $150. REI's Bondi 9 card advertised $140.93–$175, while the selected Black/Black colorway cost $175. Academy offered custom $0–$150 inputs (D-03; S-04; A-02, A-03; E-A02–E-A04; R-03, R-07; E-R02, E-R04, E-R05).
- **Persistence differed by retailer and selection.** Size 10 required reselection on the DICK'S product page and REI's Bondi 9 page, while it carried to both Academy product checks. Repetition alone does not establish poor usability (D-07; S-06; A-07, A-11; E-A08, E-A12; R-08; E-R05).

**Provisional recommendation:** First investigate how shoppers determine whether an exact variant meets both their budget and selected-store pickup requirements. The candidate is directly tied to the task and can be explored with public-site tasks and a small prototype using simulated product data. Customer difficulty, prevalence, and business impact remain unknown.

## 2. Research Methodology and Limitations

The researcher used Chrome Incognito on Windows desktop, navigated from retailer homepages through site menus, applied size and available price controls, selected pickup, and inspected products without purchasing. The intended selection rule was the first filtered product with a visibly qualifying price and pickup indication. Academy and REI included explicit follow-up checks; REI's primary choice used an in-budget starting price under the active pickup filter (audit Sections 2–3; A-06, A-10; E-A07, E-A08, E-A11; R-07, R-09; E-R04–E-R06).

| Methodological difference | Consequence for interpretation | Audit trace |
| --- | --- | --- |
| DICK'S used $50–$100 and $100–$150 bands; Academy used custom $0–$150; REI used $50–$99.99 and $100–$199.99 | Different price coverage; REI's 67 pickup results cannot be read as 67 products meeting the $150 cap | D-03–D-05; S-04, S-05; A-03; E-A04; R-03–R-05; E-R02–E-R04 |
| Academy initially included multiple stores, then reportedly narrowed to Dallas; DICK'S and REI used selected Dallas stores | Academy's 43-result state is researcher-reported as Dallas-only; E-A07 and E-A11 still show “Dallas & Nearby Stores” without deselected checkboxes, so that scope is not independently confirmed | D-05; S-05; A-04, A-05, A-10; E-A05–E-A07, E-A11; R-05; E-R04 |
| DICK'S checked one product; Academy checked Nike then Adidas; REI checked Bondi 9 then two Arahi colorways | Unequal exploration and selected variants prevent equivalent outcome-rate comparisons | D-06–D-08; S-05–S-07; A-06–A-11; E-A07–E-A12; R-07–R-11; E-R04–E-R08 |

Counts are session-specific displayed assortments, not equivalent inventory measurements. Different sessions, assortments, price coverage, store scope, and product versus variant eligibility limit comparison. No stock records, actual readiness, customer feedback, task durations, or click counts were validated; accessibility and comparison features were not systematically tested (audit Sections 3, 7–8; D-08, A-12, R-12).

Evidence consists of supplied walkthrough observations and screenshot references. All 27 screenshots (7 DICK'S, 12 Academy, 8 REI) were individually visually inspected; their visible page states support the mappings subject to the audit's Section 6 qualifications. Still images do not independently prove navigation, automatic persistence/preselection, action order, or non-purchase. DICK'S selected size is above the S-06/S-07 viewport, and closed price controls in S-04 do not independently prove the absence of a custom input. Legible address-bar text is transcribed for 26 images; E-R02 omits the address bar. These transcriptions are not independently validated live URLs, and base category addresses do not substitute for complete filtered URLs. Homepage URLs, capture timestamps, and much setup metadata remain unrecorded or unverified; file timestamps are not verified interaction times (audit Sections 5–7). This synthesis inherits those limits and adds no independent factual research.

## 3. Cross-Retailer Findings

### Product discovery and navigation

**Observed:** DICK'S category offered Road Running and Trail Running links and fulfillment controls; Academy showed category/brand shortcuts; REI had an independently scrollable filter panel and cards with running specifications, ratings, prices, and color options (D-01, D-02; S-01–S-03; A-01; E-A01; R-01, R-02; E-R01).

**Interpretation:** These different information structures may support different browsing strategies. **Uncertainty:** No participant navigation performance or comprehension was measured; control availability does not establish discoverability or superiority.

### Size and variant-selection persistence

**Observed:** DICK'S retained black color but required size 10 and width Medium/D selection. Academy retained size 10 on both checks, with width D automatic and pickup preselected. REI retained Bondi 9 color and Dallas store but required size reselection (D-07; S-06; A-07, A-11; E-A08, E-A12; R-08; E-R05).

**Interpretation:** Carrying a size preference may reduce repeated work, consistent with the audit's unvalidated H-01. **Evidence qualification:** Persistence, automatic preselection, and reselection sequences remain walkthrough-supplied; the inspected stills support visible selection states (audit Section 6). **Uncertainty:** Reselection might help a shopper confirm a variant; fewer interactions alone do not establish a better experience. The audit does not establish Arahi size persistence.

### Price-filtering precision and visibility

**Observed:** Academy supplied custom minimum/maximum inputs. DICK'S and REI used bands with coverage limitations. At least one DICK'S card said “See Price in Cart.” REI's Bondi 9 starting price was within budget, but its selected Black/Black colorway was $175 (D-03, D-04; S-04; A-02, A-03; E-A02–E-A04; R-03, R-04, R-07; E-R02–E-R05).

**Interpretation:** Shoppers may need additional checks to establish exact-variant affordability; this extends the question raised by unvalidated H-02 without confirming it. **Uncertainty:** A price range may adequately communicate variation to shoppers. Price-cap treatment of taxes and fees is unrecorded (audit Section 2).

### Pickup discoverability and store selection

**Observed:** Pickup selection preserved existing filters at all three retailers. Academy reportedly defaulted to Dallas plus nearby stores; the 43-result state showed “Pick Up at Dallas” cards, but its “Dallas & Nearby Stores” chip and lack of visible deselected checkboxes leave Dallas-only scope unconfirmed by E-A07/E-A11 (audit Section 6). REI communicated pickup through the active Dallas filter without individual store-specific card messages in the observed screenshot. Academy's displayed Dallas distance also changed between inventory checks (D-05; S-05; A-04, A-05, A-09; E-A05–E-A07, E-A09, E-A10; R-05, R-06; E-R04).

**Interpretation:** Shoppers may need to distinguish selected-store scope from nearby-store scope. **Uncertainty:** Multi-store results may support shoppers willing to travel. The distance change has no established technical cause or measured customer effect.

### Product-level versus exact-variant inventory visibility

**Observed:** Academy's Nike page said “Available Nearby” while the inventory panel marked Dallas out of stock. Its separate Adidas check displayed Dallas pickup “Today” and “Only 2 left!” REI's Arahi Stardust/Cosmic Grey at $120.93 was out of stock for Dallas pickup; Stellar Grey/Stardust at $150 displayed in-stock pickup. DICK'S displayed the selected store and “Only 1 left!” after explicit pickup selection (A-08, A-11; E-A08, E-A09, E-A12; R-10, R-11; E-R07, E-R08; D-08; S-06, S-07).

**Evidence qualification:** E-R08 displays Stellar Grey/Stardust, while its address bar retains `color=STARDUST%252FCOSMIC%2520GREY` from E-R07. The visible price and pickup state support R-11; the URL must not be treated as encoding the displayed colorway. The cause is unknown (audit Section 6).

**Interpretation:** Early pickup cues may leave exact-variant eligibility unresolved. **Counterexamples and uncertainty:** The later screens explicitly distinguished available and unavailable variants; they may provide sufficient clarification. The displayed statuses were not checked against actual inventory, so neither their accuracy nor a system defect is established.

### Pickup timing and fulfillment clarity

**Observed:** DICK'S displayed “Ready tomorrow”; Academy's Adidas displayed “Today.” REI showed general readiness within two hours, then “Tomorrow after 11:00 AM” for Bondi 9 and the in-stock Arahi colorway (D-08; S-06, S-07; A-11; E-A12; R-01, R-05, R-08, R-11; E-R01, E-R04, E-R05, E-R08).

**Interpretation:** Shoppers may need to understand which message applies to their final selection. **Uncertainty:** Store hours, session context, or variant conditions could affect estimates; none is established as the cause. Actual fulfillment speed was not tested (audit Section 7; A-12, R-12).

## 4. Potential Customer Problems

All four candidates are hypotheses about customer needs, not proven frustrations. Retailer implications below are assumptions to investigate; no conversion or revenue effect is claimed.

| Candidate problem statement | Observed evidence | Potential customer relevance | Potential retailer relevance | What remains unvalidated |
| --- | --- | --- | --- | --- |
| **C1: A shopper may struggle to confirm that one exact variant satisfies price and selected-store pickup together.** | Academy Nike pickup discrepancy; REI Arahi availability differs by colorway and price. Clear later variant messages are counterexamples; E-R08's displayed color differs from its retained URL color parameter (see Section 3) (A-08, A-11; E-A08, E-A09, E-A12; R-10, R-11; E-R07, E-R08) | May require revisiting alternatives before identifying a qualifying choice | Could help align product selection with the shopper's stated constraints | Whether shoppers misinterpret early cues, whether later clarification is sufficient, frequency, and business effects |
| **C2: A shopper may struggle to enforce a strict maximum budget from filters and listing prices.** | Band coverage, hidden card price, Bondi starting versus selected price; Academy custom inputs offer a counterexample (D-03, D-04; S-04; A-02, A-03; E-A02–E-A04; R-03, R-07; E-R02, E-R04, E-R05) | May complicate choosing an affordable variant | Could improve clarity of budget eligibility | Price-range comprehension, unmet need for custom controls, and whether existing checks suffice |
| **C3: A shopper may need to re-establish size preference when opening a product.** | DICK'S and Bondi size reselection versus Academy persistence (D-07; S-06; A-07, A-11; E-A08, E-A12; R-08; E-R05) | May create repeated work or uncertainty about the active size | Could support continuity between listing and product selection | Whether repetition causes difficulty or instead supports useful confirmation; relationship to H-01 |
| **C4: A shopper may be unsure which pickup readiness estimate applies to the selected variant.** | REI general two-hour message versus next-day variant messages; explicit DICK'S and Academy product messages (R-01, R-05, R-08, R-11; E-R01, E-R04, E-R05, E-R08; D-08; S-06, S-07; A-11; E-A12) | May affect planning for a preferred pickup time | Could clarify expectations before order placement | Whether messages are misunderstood, applicable conditions, actual readiness, and any customer or retailer consequences |

## 5. Research Questions and Validation Opportunities

The following are proposed activities; no participants, feedback, or results have been collected for this synthesis. Use public websites without purchasing, internal-system access, or private customer data. A small convenience sample is appropriate for exploratory portfolio work, not prevalence estimates.

| Candidate | Concrete question | Lightweight proposed method and evidence that could challenge the interpretation |
| --- | --- | --- |
| C1 | Can shoppers correctly identify a specific color, size, price, and selected-store pickup status before considering their search complete? | Moderated think-aloud tasks on public sites; ask shoppers to explain their final selection and cite its price/store evidence. Correct explanations and easy use of later clarification would weaken the proposed problem. Record current conditions separately from the historical audit. |
| C2 | Do shoppers interpret filtered results and starting prices as guaranteeing the selected variant is within budget? | Short budget-focused tasks followed by neutral comprehension questions. Test custom-cap and band/range mockups only after observing current behavior. Accurate interpretation without difficulty would challenge the candidate. |
| C3 | Does size reselection cause uncertainty or errors, or does it help confirm the choice? | Compare size-preserving and explicit-confirmation mockups with balanced presentation order. Observe final variant correctness and ask about confidence; do not use click reduction alone as success. No meaningful difference, or a preference for confirmation, would weaken automatic persistence as a solution. |
| C4 | Which readiness estimate do shoppers expect to apply after choosing a variant, and why? | Show general and exact-variant messages in a brief comprehension task. Accurate interpretation of their different scope would weaken the need for a new timing treatment. This tests communication, not fulfillment performance. |

Optionally review publicly available customer feedback for recurring descriptions of these problems. Define inclusion criteria, record source/context, separate price and availability complaints from communication issues, and retain disconfirming accounts. Self-selected feedback cannot establish prevalence or technical causes. Define evaluation criteria before sessions and report observations separately from interpretations.

## 6. Preliminary Opportunity Assessment

These are qualitative research judgments, not measured impact or feature priorities. “Potential impact” concerns consequences if the problem is validated. Evidence strength concerns interface observations; customer-problem evidence is absent for every candidate. MVP feasibility assumes simulated data and no live retail inventory integration.

| Candidate | Potential customer impact — assumption | Task relevance — rationale | Evidence strength — observed basis and limit | Independent MVP feasibility — assumption |
| --- | --- | --- | --- | --- |
| C1 | High: could affect whether the final choice meets two central constraints | High: exact price and Dallas pickup define eligibility | Moderate interface basis: Academy Nike and REI Arahi visible states inspected, with explicit later clarification; Academy Dallas-only scope and Arahi URL/state qualifications remain. Customer difficulty unvalidated | High for a small exact-variant eligibility summary with simulated states; live inventory correctness outside scope |
| C2 | High: could affect compliance with the $150 cap | High: budget is explicit | Moderate interface basis across band controls, DICK'S card pricing, and Bondi selected price; no demonstrated comprehension failure | High for custom-cap and selected-variant price displays using a small fixture catalog |
| C3 | Medium: may affect continuity, but consequence is unknown | Medium: supports selection rather than independently establishing eligibility | Walkthrough-reported repetition/persistence; all supporting images inspected, but stills do not independently establish automatic behavior or reselection order; no established customer harm | High for preserving size with visible confirmation in a controlled prototype |
| C4 | Potentially high if pickup timing matters; urgency was not specified | Medium: pickup is preferred, but no required readiness deadline | Limited basis: general versus variant timing on REI; messages may be appropriate to different contexts | High for message hierarchy/comprehension; actual fulfillment improvement cannot be demonstrated |

Evidence traces are listed under C1–C4 in Section 4. No RICE scores are calculated: reliable reach, impact, confidence, and effort estimates are unavailable. A simple prototype's feasibility does not establish production integration feasibility or customer value.

## 7. Recommended Next Research Direction

**Investigate C1 first: confirming exact-variant budget and selected-store pickup eligibility.** Academy's Nike discrepancy and REI's two Arahi colorways provide concrete cases to examine, while Academy's Adidas and DICK'S selected-store messages offer useful counterexamples (A-08, A-11; E-A08, E-A09, E-A12; R-10, R-11; E-R07, E-R08; D-08; S-06, S-07). This makes the question suitable for focused comprehension tasks and a small eligibility-summary prototype if a need is validated.

The trade-off is scope: C1 combines price, variant, and store constraints, whereas C2 offers a simpler budget-only study. Keep the first study focused on whether shoppers can explain one final variant's eligibility; do not assume a new filter or summary is required. Current detailed panels may already resolve ambiguity adequately, and shoppers may willingly change color or store.

The Academy store-scope qualification and Arahi displayed-color/URL discrepancy remain unresolved (audit Section 6); neither establishes a technical cause or customer difficulty. Change direction if resolving these qualifications alters the cited mappings, shoppers consistently interpret pickup scope correctly, or observed difficulty is concentrated in budget comprehension rather than combined eligibility. In that case, investigate C2 first. Retain C3 and C4 as competing candidates if size confirmation or readiness comprehension emerges as the more consequential issue. Set decision criteria before testing; a few exploratory sessions cannot establish broad prevalence.

This is a provisional research recommendation, not a final feature decision or approved PRD. The audit's H-01 and H-02 remain unvalidated and unchanged.

## 8. Next Steps

1. **Resolve evidence qualifications:** All 27 screenshots have been inspected. Clarify Academy's reported Dallas-only scope despite the “Dallas & Nearby Stores” chip, the Arahi displayed-color/URL-parameter discrepancy, walkthrough-supplied action sequences, and missing capture context and price-cap treatment where available. Preserve unknowns rather than filling them by inference (audit Sections 2, 6, 10).
2. **Validate the candidate:** Define C1 task prompts, neutral probes, eligibility-correctness criteria, and disconfirming evidence. Run a small exploratory set of moderated public-site tasks; optionally add a scoped public-feedback review. Record new findings in a separate research record.
3. **Prioritize after review:** Compare supported customer needs, severity of observed consequences, counterexamples, and implementation assumptions across C1–C4. Revisit the recommendation; defer numerical scoring until credible inputs exist.
4. **Draft a PRD conditionally:** If a problem is supported, specify the target shopper, problem evidence, constraints, non-goals, required selection states, and testable acceptance criteria. Separate customer comprehension goals from untested inventory/fulfillment claims.
5. **Build and evaluate a narrow functional prototype:** Use simulated price, color, size, store, available/unavailable, and unknown states to test the chosen communication approach. Compare eligibility explanations and final selection correctness with the baseline before considering broader scope or live integrations.
