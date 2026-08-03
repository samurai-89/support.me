# support.me

Static support pages published with GitHub Pages.

## Structure

```text
.
├── common/
│   ├── language-switch.js
│   ├── site.css
│   └── tokens.css
├── actmark/
│   ├── index.html
│   ├── privacy/
│   └── terms/
├── chiritsumo/
│   ├── index.html
│   ├── privacy/
│   └── terms/
└── index.html
```

## Rules

- Put each app's support, privacy, and terms pages under that app's folder.
- Put shared styles and reusable site assets under `common/`.
- Keep existing public URLs stable because App Store Connect and app binaries may reference them.
- For ActMark legal pages, English content lives on the same page and opens with `#en`; legacy `/en/` URLs redirect to that view.
