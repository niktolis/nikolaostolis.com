Each theme file must define the same CSS custom properties.

Required theme tokens:

```css
:root {
  color-scheme: dark;

  --color-page-bg: ;
  --color-page-bg-soft: ;
  --color-surface: ;
  --color-surface-muted: ;

  --color-text-primary: ;
  --color-text-muted: ;

  --color-accent: ;
  --color-accent-contrast: ;
  --color-accent-soft: ;

  --color-border: ;

  --shadow-elevated: ;

  --gradient-page: ;
}
```

Shared non-theme tokens such as layout width, spacing, radii, and font families belong in `src/styles/tokens.css`.

The active theme is selected in `src/styles/theme.css`.
