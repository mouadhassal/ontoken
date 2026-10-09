---
version: alpha
name: Fjord
description: Calm, trustworthy personal-finance app. Deep teal brand, cool neutrals, generous whitespace.
colors:
  primary: "#1F6F78"
  on-primary: "#FFFFFF"
  secondary: "#E3EFF0"
  on-secondary: "#14474D"
  surface: "#FFFFFF"
  surface-muted: "#F2F6F6"
  ink: "#0F2A2E"
  ink-muted: "#526669"
  border: "#D3DEDF"
  accent: "#F2A541"
  success: "#2E7D4F"
  danger: "#B42318"
typography:
  display:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: 700
    lineHeight: 39px
  headline:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 700
    lineHeight: 31px
  title:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: 600
    lineHeight: 26px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 21px
  body:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 18px
  label:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
rounded:
  sm: 6px
  md: 12px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 12px
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    rounded: "{rounded.md}"
    padding: 12px
  page:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  card-muted:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.ink}"
  caption:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
  badge-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  text-success:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.success}"
  text-danger:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.danger}"
---

## Overview

Calm, trustworthy personal-finance app. Deep teal brand, cool neutrals, generous whitespace.

## Colors

Use only the colours defined above. Do not introduce other hues, greys or tints.

## Typography

Headings use Inter; body text and labels use Inter. Use only the font sizes defined above. Tailwind-compatible type scale (12/14/16/20/24/30).

## Layout

Use only the spacing values defined above for padding, margins and gaps.

## Shapes

Use only the corner radii defined above (pill shapes are allowed for avatars and chips).

## Do's and Don'ts

- Do keep text contrast at WCAG AA or better.
- Don't use colours, sizes or spacing outside these tokens.
