---
version: alpha
name: Moss
description: Gentle health and habit-tracking app. Forest green, soft sage surfaces, lavender accent.
colors:
  primary: "#2F6B3A"
  on-primary: "#FFFFFF"
  secondary: "#E5EFE2"
  on-secondary: "#234D2B"
  surface: "#F7FAF5"
  card: "#FFFFFF"
  ink: "#1B261D"
  ink-muted: "#5A6A5C"
  border: "#D5E1D1"
  accent: "#6D5BD0"
  on-accent: "#FFFFFF"
  warning: "#A15C07"
  danger: "#B3261E"
typography:
  display:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: 800
    lineHeight: 42px
  headline:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: 700
    lineHeight: 31px
  title:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: 700
    lineHeight: 23px
  body-lg:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: 500
    lineHeight: 21px
  body:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: 500
    lineHeight: 18px
  label:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px
rounded:
  sm: 8px
  md: 16px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
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
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  caption:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
  badge-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
  text-danger:
    backgroundColor: "{colors.card}"
    textColor: "{colors.danger}"
  text-warning:
    backgroundColor: "{colors.card}"
    textColor: "{colors.warning}"
---

## Overview

Gentle health and habit-tracking app. Forest green, soft sage surfaces, lavender accent.

## Colors

Use only the colours defined above. Do not introduce other hues, greys or tints.

## Typography

Headings use Manrope; body text and labels use Manrope. Use only the font sizes defined above. Tailwind-compatible type scale; 8-point spacing with no 12px step.

## Layout

Use only the spacing values defined above for padding, margins and gaps.

## Shapes

Use only the corner radii defined above (pill shapes are allowed for avatars and chips).

## Do's and Don'ts

- Do keep text contrast at WCAG AA or better.
- Don't use colours, sizes or spacing outside these tokens.
