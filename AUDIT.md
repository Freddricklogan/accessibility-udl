# Conversion audit — accessibility-udl

Produced by the Learning Resource Kit converter (`apply/convert.mjs`) from the single-file original (previous revision in git history).

## Findings

- Custom properties prefixed with --lr-: 26 (gold-soft, accent2, accent3, paper2, paper3, panel2, panel3, accent, paper, navy2, panel, line2, muted, serif, navy, line, body, gold, good, warn, sans, maxw, ink, dim, bad, r).
- Inline style attributes converted to classes: 65 occurrences, 21 distinct declarations.
- Inline script blocks moved to src/page.js: 1; shared collapsible script replaced by the kit: 1.
- <main> landmark present in the original.
- Buttons given an explicit type: 0; tables given a <tbody>: 0; top navigation given an accessible name.
- Sections with ids: 14 (why, pour, criteria, audit, contrast, udl, udlfull, at, docs, stem, video, statements, roadmap, glossary).

- Hand-applied after conversion: the ten self-audit items were `<div role="checkbox" tabindex="0">` widgets; html-validate's prefer-native-element flagged them. They are now `<label class="ck">` wrapping a visually hidden native `<input type="checkbox">`, with the focus ring drawn on the card; `src/page.js` listens to `change` instead of click/keydown.

## What changed for the reader

- Executive Shell header, KPI strip (sections, reading time, sections opened, quiz, statements) and footer.
- Collapsible sections are keyboard-operable with saved progress; deep links still open their section.
- A five-question quiz at the end records xAPI 1.0.3 statements in the browser only.
- A print stylesheet expands every section.
- Strict content-security policy: no inline script or style, no network calls.
