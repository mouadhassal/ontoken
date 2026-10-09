---
version: alpha
name: Ember
description: Warm, appetising food-delivery brand. Burnt orange on cream, friendly rounded shapes.
colors:
  primary: "#C23B0B"
  on-primary: "#FFFFFF"
  secondary: "#2B2D42"
  on-secondary: "#FFFFFF"
  surface: "#FFFBF5"
  surface-muted: "#FAEFE2"
  card: "#FFFFFF"
  ink: "#2B2118"
  ink-muted: "#6B5B4D"
  border: "#EADBC8"
  accent: "#F4B400"
  success: "#2F7D32"
  danger: "#B3261E"
typography:
  display:
    fontFamily: DM Sans
    fontSize: 34px
    fontWeight: 700
    lineHeight: 44px
  headline:
    fontFamily: DM Sans
    fontSize: 28px
    fontWeight: 700
    lineHeight: 36px
  title:
    fontFamily: DM Sans
    fontSize: 22px
    fontWeight: 600
    lineHeight: 29px
  body-lg:
    fontFamily: DM Sans
    fontSize: 17px
    fontWeight: 400
    lineHeight: 22px
  body:
    fontFamily: DM Sans
    fontSize: 15px
    fontWeight: 400
    lineHeight: 20px
  label:
    fontFamily: DM Sans
    fontSize: 13px
    fontWeight: 500
    lineHeight: 17px
rounded:
  sm: 10px
  md: 16px
  lg: 24px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 24px
  3xl: 32px
  4xl: 40px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
    padding: 12px
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    rounded: "{rounded.lg}"
    padding: 12px
  page:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
  card-muted:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.ink}"
  caption:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
  badge-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  text-success:
    backgroundColor: "{colors.card}"
    textColor: "{colors.success}"
  text-danger:
    backgroundColor: "{colors.card}"
    textColor: "{colors.danger}"
---

## Overview

Warm, appetising food-delivery brand. Burnt orange on cream, friendly rounded shapes.

## Colors

Use only the colours defined above. Do not introduce other hues, greys or tints.

## Typography

Headings use DM Sans; body text and labels use DM Sans. Use only the font sizes defined above. Custom type scale (13/15/17/22/28/34): sizes deliberately off the Tailwind defaults.

## Layout

Use only the spacing values defined above for padding, margins and gaps.

## Shapes

Use only the corner radii defined above (pill shapes are allowed for avatars and chips).

## Do's and Don'ts

- Do keep text contrast at WCAG AA or better.
- Don't use colours, sizes or spacing outside these tokens.