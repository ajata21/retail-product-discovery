# Public Customer Feedback Research Protocol

Status: Proposed protocol for researcher review. No public feedback has been searched, collected, or analyzed for this document. Planned researcher: Andre Taylor.

Project: Independent undergraduate PM portfolio research on sporting-goods e-commerce discovery and local Buy Online, Pick Up In Store (BOPIS).

## 1. Research Objective

Investigate whether identifiable customer accounts in public feedback describe experiences related to the four candidate problems in the [competitive UX synthesis](competitive-ux-synthesis.md#4-potential-customer-problems). Seek supporting, positive, contradictory, mixed, and unexpected accounts rather than confirming a preferred feature.

**Completed work:** Researcher walkthroughs of DICK'S Sporting Goods, Academy Sports + Outdoors, and REI are documented in the [competitive UX audit](competitive-ux-audit.md). All 27 screenshots were visually inspected, with qualifications in audit Section 6. The synthesis provisionally recommends investigating C1; customer difficulty and business impact remain unvalidated.

**Planned work:** A structured review of public feedback, without recruiting participants. This can inform a provisional research direction; it cannot substitute for interviews, controlled usability tests, or verified inventory/fulfillment records. The original scenario—men's running shoes, size 10, maximum displayed price $150, Dallas ZIP 75231—provides context, not a requirement that every feedback item match those exact attributes.

## 2. Research Questions

| Candidate | Question to investigate |
| --- | --- |
| C1: Exact-variant eligibility | Do shoppers describe difficulty or success establishing that a particular size/color meets both their budget and pickup availability at their selected store? Do later details adequately resolve earlier uncertainty? |
| C2: Budget and price clarity | How do shoppers describe interpreting price filters, starting-price ranges, and selected-variant prices? Are controls or explanations reported as sufficient? |
| C3: Selection persistence | Do shoppers report losing, repeating, or successfully retaining size/color selections between results and product pages? Does explicit reselection help confirmation? |
| C4: Pickup timing | Do shoppers distinguish general pickup estimates from selected-item readiness and order-ready notifications? What communication do they describe as clear or unclear? |
| Emergent concerns | What other recurring customer-facing concerns appear, including positive experiences or needs outside C1–C4? |

These questions concern reported experiences. Feedback must not be used to infer technical causes, diagnose an inventory system, or treat fewer interactions as inherently better.

## 3. Sources and Search Strategy

Initial source classes are public Reddit discussions, public consumer reviews, and relevant public app-store reviews. App reviews must concern shopping/discovery/pickup, not merely app installation or unrelated services. Verify that a review concerns the intended retailer/app before inclusion. Broader e-commerce accounts may provide transferable context but must remain separate from retailer-specific evidence.

**Publication window:** January 1, 2024 through October 18, 2026, inclusive. Record each actual search date in `YYYY-MM-DD` format with time zone. Search-engine date filters are aids; confirm publication dates at the original source. Retain the platform's displayed date/date precision; do not invent a day or infer publication time from search ranking. Undated items go into an uncertain-date/background appendix and do not count toward the primary target. Older material, if retained, is background only. Later publications are outside this initial window.

### Fixed initial search plan

Before collection, record the search engine, locale, signed-in state, and platform/sort options. Use one public search engine consistently; use native review search only as a logged fallback when individual reviews are not indexed. Fix the source domains as follows for this first pass:

| Source class | Initial domain restriction | Coverage rule |
| --- | --- | --- |
| Reddit | `site:reddit.com` | Inspect public original discussions; log access restrictions |
| Public consumer reviews | `site:trustpilot.com` | Verify retailer identity and relevance of each original review |
| Relevant app-store reviews | `site:apps.apple.com` | Verify that the intended retailer has a relevant shopping app and accessible customer reviews; do not infer app availability or relevance |

These are proposed domain choices to finalize before collection, not claims of verified coverage. If a source class is unavailable, inaccessible, or irrelevant for a retailer, log the affected planned searches and reason as a coverage gap. Do not fabricate coverage or silently substitute another domain; any replacement belongs in a separately approved expansion.

Run **18 structured searches**: three retailer names × three source classes × two query families. Use `"DICK'S Sporting Goods"`, `"Academy Sports + Outdoors"`, and `"REI"`; verify the identity of ambiguous REI results. Append the applicable domain restriction above to each example. Save the exact submitted query.

| Family | Example query after substituting `{retailer}` | Purpose |
| --- | --- | --- |
| Broad/neutral shopping and pickup | `"{retailer}" ("online shopping" OR "store pickup") experience` | Open discovery of positive, negative, mixed, contradictory, and unexpected experiences |
| Targeted discovery and eligibility clarity | `"{retailer}" ("product discovery" OR "price filter" OR "starting price" OR "size selection" OR "color availability" OR "pickup availability" OR "pickup ready")` | Explore C1 variant/store eligibility, C2 budget/price clarity, C3 selection persistence/repetition, and C4 readiness communication within one family |

The targeted family covers C1–C4 through topic terms, without a separate search for each candidate or a requirement that every result address all four. Screen for successes as well as difficulties; these queries do not require complaint language. If an engine does not support an operator, record the literal query and equivalent substitution without adding a search. Finalize query syntax before collection rather than adapting it to favor C1. The examples are search prompts, not customer statements or findings.

There is no supplementary search batch in this first pass. If evidence is sparse, document gaps and propose a separately approved expansion specifying additional queries, aliases, domains, broader e-commerce context, and time budget before collecting more material.

## 4. Inclusion Criteria

Include an item in the primary corpus only when it:

- Has a publicly accessible original post, comment, or review that can be inspected beyond a search snippet and attributed with a URL or stable platform locator.
- Describes an identifiable shopper experience, question, or observation about online discovery, price comprehension, item/variant availability, or pickup communication.
- Has enough context to classify what was reported without guessing. A question can establish expressed uncertainty, not an experienced failure.
- Has a recorded original publication date within the window, at the precision available. Flag updates or uncertain chronology.
- Can be assigned an experience/group ID for deduplication. Firsthand accounts are preferred; clearly labeled secondhand accounts may provide context but are not independent corroboration of the original story.

Include positive and contradictory items under the same relevance/context rules. Store address, product category, device, and channel are optional context, not facts to infer when absent.

## 5. Exclusion Criteria

Exclude from the primary corpus, with a logged reason:

- Employee-only operational complaints without a customer-facing UX connection.
- Pure shipping or fulfillment problems with no account of website/app availability, readiness, or other relevant communication.
- Technical speculation alone, advertising, spam, irrelevant retailer criticism, or context too thin to classify.
- Duplicated, syndicated, quoted, or cross-posted versions of an already recorded experience as additional independent evidence.
- Inaccessible originals, private/group-only content, undated items, and out-of-window publications.

Retain a relevant reported experience even if its author speculates about the cause; code that explanation separately as unverified. Keep useful secondhand, older, undated, or broader-context material in separate labeled appendices rather than mixing it into primary retailer evidence. If an experience combines unclear communication with a reported fulfillment failure, retain both codes without asserting causation.

## 6. Sampling and Stopping Rule

Aim initially for **10–15 distinct, relevant customer experiences**, subject to availability. This is a planning range, not a retailer/candidate quota or a minimum to manufacture. Do not include irrelevant or insufficiently contextual evidence to reach the target, and do not discard eligible accounts merely because they fall outside preferred themes or exceed 15. Apply the existing independence and deduplication rules.

For each planned search, screen the first five non-advertising results in their displayed order. For each relevant discussion thread, inspect the original post and up to ten initially visible comments in the recorded platform default sort order. Use that rule consistently: do not re-sort to favor a sentiment, expand collapsed replies, or load more comments. For review listings, inspect up to ten initially visible reviews in the recorded default sort order; a direct review permalink is one review, not an invitation to expand the listing. Log fewer visible items and any access restriction. If direct review links are unavailable, record the listing URL plus a stable locator such as review date, rating, and visible text fragment, without copying unnecessary author identifiers.

Work in round-robin retailer order within each source class, completing the broad/neutral family before the targeted family. Record the actual sequence. Stop after completing the **18 planned searches** or reaching a maximum of **approximately two hours of active screening**, whichever occurs first. Count search execution, source reading, screening, deduplication, and decision logging toward the budget; later thematic synthesis is separate. At the time limit, save the current disposition or mark it incomplete without screening further; log the exact stopping point, elapsed time, and unsearched or unavailable cells. Do not stop early solely because 10 or 15 experiences have been reached. If evidence remains sparse or fewer than 10 experiences qualify, document the shortfall and coverage gaps and propose a separately approved expansion; do not silently broaden the search.

Maintain a search log for every query, including zero-result and unsuccessful searches:

| Search ID | Date/time zone | Source/domain and search tool | Exact query, date filter, sort/settings | Result order/URLs screened | Decisions and exclusion reasons | Access limits, elapsed time, next position |
| --- | --- | --- | --- | --- | --- | --- |
| To be populated during collection | | | | | | |

Record every screened result's disposition, including duplicates and excluded examples; separate search-result counts from unique experience counts. This is a bounded purposive/convenience sample shaped by indexing and access, not representative sampling or statistical saturation. Search rankings and public content may change, limiting exact replication.

## 7. Evidence Extraction Template

**Unit of analysis:** One identifiable customer account or experience. A thread is a container, not automatically one experience; each comment is not automatically independent. Link repeated accounts of the same event under one experience/group ID. When independence is unclear, group conservatively and flag uncertainty rather than count corroboration.

Use one record per candidate item, including screened exclusions where appropriate:

| Field | Recording rule |
| --- | --- |
| Feedback ID / experience-group ID | Assign `FB-001` onward; link duplicates, updates, shared stories, and search-log IDs |
| Retailer | Audited retailer, other retailer, or unclear; never infer from a generic complaint |
| Source/platform | Platform, source class, post/comment/review type; app/channel where explicit |
| Source URL / locator | Original permalink where available; otherwise listing URL plus stable locator and link limitation |
| Publication date | Exact displayed date and precision; distinguish original and update dates; unknown if absent |
| Search date | Actual date/time zone; record access date if different |
| Search query | Exact query and search-log ID, including settings/fallback |
| Brief factual summary | Paraphrase what the author reports; distinguish questions, experiences, and assertions |
| Short exact excerpt | Optional, minimal, attributed, and verbatim; otherwise paraphrase and explain omission |
| Experience basis | Firsthand, secondhand, or unclear; questions without experienced outcome labeled explicitly |
| Candidate/theme | C1, C2, C3, C4, emergent theme, and/or counterevidence; allow multiple codes |
| Issue type | Discovery, comprehension, fulfillment, inventory claim, or other; allow multiple codes |
| Relationship to candidate | Supporting, contradictory, mixed, or unclear for each assigned candidate, with rationale |
| Important context/limitations | Only explicit size/color/price/store, date, device/channel, outcome, missing context, alternative interpretations, independence uncertainty |
| Inclusion/exclusion | Include primary, background/context only, duplicate-linked, exclude, or pending clarification; record reason |

No filled customer examples or invented excerpts are included in this protocol.

## 8. Qualitative Analysis Approach

1. Screen and deduplicate before treating items as independent evidence. Multiple replies agreeing with one account are not additional firsthand experiences unless they describe their own distinct event. Cross-posts and updates stay linked; avoid tracking identities across platforms.
2. Pilot the codebook on the first five accepted experiences. Apply C1–C4 provisionally and allow emergent themes. Log definition changes and recode earlier items consistently; keep an audit trail of inclusion and coding decisions.
3. Separate the author's reported event, their explanation, and the researcher's interpretation. “In stock online, canceled later” is a reported sequence, not proof of an inventory-system defect. Mark uncertainty about selected variant, store, chronology, and message scope.
4. Distinguish comprehension difficulty from reported execution failures. An unclear estimate, a missed promise, and collecting before an order-ready notice are different accounts; do not infer which occurred if context is missing. Genuine fulfillment failure cannot be independently confirmed from an unverified review alone.
5. Group accepted accounts by theme and compare positive, contradictory, mixed, and unclear evidence. Describe recurrence as multiple distinct accounts within this bounded corpus; counts may describe collected material, never prevalence among customers or retailer failure rates. Keep broader/secondhand evidence separate.
6. Build a theme table linking each interpretation to feedback IDs, counterevidence, context gaps, alternative explanations, and source coverage. Re-read originals for ambiguous cases and retain unresolved codes. A single researcher's reread is not independent coding reliability.

The audit's Academy Dallas-only scope qualification and REI Arahi displayed-color/URL discrepancy remain unresolved source limitations. Public feedback is separate evidence; it must not retroactively establish those screenshot states or technical causes. The original product counts remain non-equivalent measurements across retailers ([audit Sections 6–8](competitive-ux-audit.md#6-screenshot-references)).

## 9. Research Ethics and Limitations

Use public original sources with attribution and respect platform access restrictions; do not bypass sign-in/paywall barriers, contact authors, or obtain private information. Record only context necessary to understand an experience. Omit usernames, contact details, order numbers, exact home addresses, and unrelated personal details. Source URLs can identify authors; recognize this residual privacy limit and avoid sensitive accounts unsuitable for a public portfolio.

Prefer concise paraphrases. When an exact excerpt is necessary and appropriate, quote only the minimum needed, preserve wording/context, and link the source. As a conservative project rule, keep excerpts to at most 25 words total per source page across the deliverable; this is not a guarantee of permission. Omit sensitive/searchable personal detail rather than disguising it inside an alleged verbatim quote. Do not reproduce whole reviews, threads, or personal-profile screenshots. Record unavailable/deleted sources as unverifiable; do not replace missing wording from memory.

Accounts are self-selected and may be inaccurate, incomplete, or unverifiable. Search ranking, retailer size, platform demographics, app/web differences, review moderation, publication dates, and access restrictions affect coverage. Ratings, likes, and repeated stories do not establish representativeness. No interviews, controlled usability testing, customer prevalence estimates, revenue effects, or verified operational outcomes will result from this method alone. Absence of relevant feedback is not evidence that a problem does not exist.

## 10. Decision Framework

After collection, compare C1–C4 and emergent themes using a narrative evidence matrix:

| Dimension | Decision question |
| --- | --- |
| Direct relevance | Does the account concern the proposed customer problem and task, or merely an adjacent operational issue? |
| Independent consistency | Do distinct firsthand experiences support a coherent pattern across contexts, with duplicates removed and coverage gaps visible? |
| Reported consequences | What concrete consequences are described, and how serious do they appear within the author's account? Do not invent frequency or business impact. |
| Counterevidence/alternatives | Do positive accounts or later clarification challenge the interpretation? Could variant, store, channel, or timing context explain differences? |
| Independent demonstration | Could a small prototype using simulated data test communication or selection support without internal systems or a claim to improve real stock accuracy? |

C1 remains a starting research preference, not a required outcome. Provisionally favor a candidate only when relevant, sufficiently contextual independent accounts make it worth further investigation and a focused demonstration is feasible. Defer or narrow a candidate when evidence is sparse, contradictory, indirect, or mainly operational. An emergent theme may supersede C1; insufficient evidence may justify no feature recommendation. Preserve minority/counterexamples and explain trade-offs rather than declaring a retailer winner.

This framework supports qualitative prioritization, not quantitative validation. Do not calculate RICE scores or fabricate reach, impact, confidence, effort, conversion, or task-performance inputs.

## 11. Next Steps

1. Review and finalize the proposed source domains, two-hour screening limit, 18-query schedule, default-sort/comment rule, query syntax, date handling, and independence rules before searching. Record any amendments and their reasons.
2. Execute the bounded plan and create `research/customer-feedback-analysis.md` separately when actual collection begins. Include the dated search log, extraction records, exclusions/duplicates, coverage gaps, and stopping reason. That file is not created by this protocol task.
3. Analyze reported experiences with the codebook; compare C1–C4 and emergent themes against counterevidence. Keep findings, interpretations, and proposed actions distinct and traceable to feedback IDs.
4. Review the evidence and prioritize a customer problem provisionally, or document why evidence does not yet justify a choice. Public feedback may guide research direction without proving causality or prevalence.
5. Draft a conditional PRD only if a problem is sufficiently supported for a focused portfolio experiment. Define non-goals and testable communication/selection requirements, then demonstrate a narrow functional prototype with simulated data. State the remaining limits of evaluating it without recruited users or live retail integrations.
