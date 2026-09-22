/** Resource configuration: the kit reads this; tests/config.test.js validates it. */
export const config = {
  title: 'Accessibility & UDL Toolkit for Educators',
  tagline: 'A graduate-level guide to accessible teaching: the legal case, WCAG 2.2 and the POUR principles, success criteria in plain language, CAST’s UDL 3.0 guidelines, assistive technologies, accessible documents, STEM content and video, accessibility statements and VPATs, and a remediation roadmap, with a self-audit scorer and a WCAG contrast checker.',
  repo: 'https://github.com/Freddricklogan/accessibility-udl',
  theme: 'plum',
  pagesUrl: 'https://freddricklogan.github.io/accessibility-udl/',
  quizTitle: 'Five questions on accessibility and UDL',
  quiz: [
    {
      id: 'pour',
      prompt: 'What do the four letters of POUR stand for?',
      options: ['Practical, Open, Usable, Reliable', 'Perceivable, Operable, Understandable, Robust', 'Present, Organise, Understand, Review', 'Plan, Observe, Update, Report'],
      answer: 1,
      explanation: 'WCAG organises every success criterion under four principles: content must be perceivable by the senses, operable by any input method, understandable, and robust enough for assistive technologies to interpret.'
    },
    {
      id: 'contrast',
      prompt: 'What contrast ratio does WCAG AA require for normal body text, and for large text?',
      options: ['3:1 and 2:1', '4.5:1 and 3:1', '7:1 and 4.5:1', '10:1 and 7:1'],
      answer: 1,
      explanation: 'AA needs 4.5:1 for normal text and 3:1 for large text and user-interface components; AAA raises normal text to 7:1. The page’s checker computes the ratio from each colour’s relative luminance, the same arithmetic a formal audit uses.'
    },
    {
      id: 'udl',
      prompt: 'Which three principles structure CAST’s Universal Design for Learning?',
      options: ['Multiple means of Engagement, Representation, and Action & Expression', 'Accommodation, modification, differentiation', 'Perceivable, operable, understandable', 'Remember, understand, apply'],
      answer: 0,
      explanation: 'UDL offers multiple means of engagement (the why), representation (the what) and action and expression (the how); the 2024 UDL 3.0 guidelines refresh the framework and foreground learner agency and dismantling barriers.'
    },
    {
      id: 'math',
      prompt: 'Why does the resource say an equation saved as a picture is a barrier, and what should replace it?',
      options: ['Pictures load slowly; use smaller images', 'A screen reader cannot read a flat image; use MathML or LaTeX rendered to real notation', 'Images are not printable; use PDF', 'Pictures break in dark mode; use SVG'],
      answer: 1,
      explanation: 'MathML is the semantic web standard assistive technology can read and navigate term by term; LaTeX through MathJax can render to it. An equation pasted as a picture, like a chart with no described trend, is invisible to a screen-reader user.'
    },
    {
      id: 'vpat',
      prompt: 'How does the resource distinguish an accessibility statement from a VPAT?',
      options: ['They are the same document', 'A statement faces users with the target standard and how to report a barrier; a VPAT faces buyers with a product’s conformance claims', 'A VPAT is for websites; a statement is for software', 'A statement is required by law; a VPAT is optional marketing'],
      answer: 1,
      explanation: 'The public accessibility statement names the conformance target, known limitations and a way to get help; the Voluntary Product Accessibility Template reports conformance to buyers during procurement. Both matter to anyone selecting or maintaining educational technology.'
    }
  ]
};
