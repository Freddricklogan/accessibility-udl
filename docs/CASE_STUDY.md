# Case Study — Accessibility & UDL Toolkit for Educators

**Repository:** [accessibility-udl](https://github.com/Freddricklogan/accessibility-udl) · **Live demo:** [freddricklogan.github.io/accessibility-udl](https://freddricklogan.github.io/accessibility-udl/) · **Author:** Freddrick Logan

---

## 1. Who has this problem

Faculty who receive an accommodation letter mid-semester, instructional designers and disability-services staff who field the follow-up, procurement officers asked to sign a VPAT, and graduate students in educational technology who will inherit it all. Accessibility is part of my daily work at Illinois Tech and in edtech consulting; the pattern is constant: the standard is known to exist, and it reaches the people who must apply it as eighty-seven numbered criteria rather than a handful of habits and two tools.

## 2. The problem, as a scenario

A student who uses a screen reader enrols in a graduate course in week three. The syllabus is a scanned PDF; the slides fake headings with bold text; the lecture videos have unchecked auto-captions; the statistics handout's equations are pictures; the discussion tool bought last year has no VPAT on file. The instructor is willing and has four days. Disability services sends a link to WCAG. Nothing there says which five things to fix first, or whether her slide colours pass.

## 3. What it costs to leave it alone

A student excluded from a course they paid for, an instructor remediating under deadline what could have been a design habit, and an institution exposed under the ADA and Section 504 with a procurement decision it cannot document. I will not put a figure on it — settlements and remediation costs vary widely and the cost to the student does not price at all. What is certain: the highest-impact fixes are few, known and teachable in an afternoon.

## 4. The approach, and the alternative I rejected

I wrote a fourteen-section resource that turns the standard into practice. It opens with the legal and ethical case, explains WCAG through POUR and a plain-language selection of criteria, then gives two tools: a self-audit that reads as ten habits across POUR and scores coverage, and a contrast checker that computes the exact WCAG ratio from relative luminance — the same arithmetic a formal audit uses — so the threshold stops being a mystery. CAST's UDL framework and full guidelines follow, then how screen readers, magnifiers and switch devices reach content, and practice sections for documents, mathematics and data, and video. Statements and the VPAT cover procurement; a roadmap orders remediation of an existing course by impact. The page practises what it teaches: real headings, a main landmark, native form controls, a strict content-security policy. The resource then joined the shared Learning Resource Kit: Executive Shell, collapsible sections with saved progress, a five-question quiz written from this content that records xAPI statements locally, and a print layout.

The alternative I rejected was reproducing the WCAG criteria as a reference table. That table exists at the W3C; the instructor in the scenario needs priority, habit and a way to check her own work.

## 5. What the code does today

Real: the authored content across fourteen sections with an executive summary and glossary; two working widgets — the self-audit and the contrast checker with relative-luminance arithmetic — moved from inline script to a module; the kit layer with progress, quiz, xAPI 1.0.3 statements and print; a strict content-security policy with no inline script or style; tests that validate the quiz configuration and mount the kit against the real page. The conversion also replaced ten `role="checkbox"` divs with native checkboxes inside labels, focus ring on the card, because the validator's prefer-native-element rule was right.

Simulated: nothing. The self-audit's weights are a prioritisation heuristic; the page says testing with real assistive technology and users is not optional.

Worth knowing: the criteria section is a selection, not all eighty-seven; reading time is words at 230 per minute; progress counts a section as opened, not read.

## 6. Evidence

Measured locally with the commands CI runs: 7 tests passing across two files — quiz validity, page invariants, and the vendored kit mounted on this page; coverage 79.84% of all files with `src/config.js` at 100% and the vendored kit at 78.75% from this page's smoke test; ESLint and html-validate clean, including prefer-native-element after the checkbox rewrite. The conversion audit records 65 inline style attributes replaced by 21 classes, 26 custom properties namespaced and the existing `<main>` landmark kept. Headless Chrome on the converted page: zero console errors; three native checkboxes score 33% Emerging with the next fixes named and a visible focus ring; foreground #777777 on white computes 4.48:1, failing AA for normal text and passing for large, the correct WCAG result; Expand all opens 14 of 14 sections and the KPI strip follows; no horizontal scroll at 1280 or 400 pixels.

## 7. What it would take to run this in production

As a public resource it is in production now. For a faculty-development requirement it needs the kit's statements sent to the institution's learning record store — endpoint, credentials, consent notice, identified actor, one origin in the content-security policy — and a second reader for the questions if completion is tracked. Days of integration; the content stays.

## 8. Limits and next steps

United States law only; no image colour picker in the contrast checker; no automated page checker; no downloadable document examples. Next: an image-sampling contrast tool, downloadable before-and-after documents, a WCAG 2.2 criteria filter by role, and per-section questions in place of one quiz at the end.

## 9. Who should look at this

**Hiring manager:** evidence that I teach accessibility as practice, ship a page that meets the standard it teaches, and fix what a validator finds rather than suppress it.
**Consulting client:** the priority order I use to remediate an existing course, and the two documents procurement should ask for.
**Engineer:** read `src/page.js` for the relative-luminance and contrast arithmetic and the native-checkbox rewrite, and `tests/kit.test.js` for the kit mounted against this page's real markup.
