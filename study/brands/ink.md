---
version: alpha
name: Ink
description: Editorial news and long-read publication. Near-black on warm paper, one red primary, sharp corners, serif headlines.
colors:
  primary: "#B4232A"
  on-primary: "#FFFFFF"
  paper: "#FAFAF7"
  card: "#FFFFFF"
  ink: "#111111"
  ink-muted: "#5E5E58"
  rule: "#DCDCD3"
  highlight: "#FFF1C2"
  link: "#1F3A93"
typography:
  display:
    fontFamily: Source Serif 4
    fontSize: 44px
    fontWeight: 700
    lineHeight: 57px
  headline:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: 700
    lineHeight: 42px
  title:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: 600
    lineHeight: 31px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 23px
  body:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: 400
    lineHeight: 20px
  label:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 600
    lineHeight: 17px
rounded:
  none: 0px
  sm: 2px
  md: 4px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px
  4xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 12px
  page:
    backgroundColor: "{colors.paper}"
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
  text-link:
    backgroundColor: "{colors.card}"
    textColor: "{colors.link}"
  highlight:
    backgroundColor: "{colors.highlight}"
    textColor: "{colors.ink}"
---

## Overview

Editorial news and long-read publication. Near-black on warm paper, one red primary, sharp corners, serif headlines.

## Colors

Use only the colours defined above. Do not introduce other hues, greys or tints.

## Typography

Headings use Source Serif 4; body text and labels use Inter. Use only the font sizes defined above. Custom type scale; serif for display/headline/title, sans for body and labels.

## Layout

Use only the spacing values defined above for padding, margins and gaps.

## Shapes

Use only the corner radii defined above (pill shapes are allowed for avatars and chips).

## Do's and Don'ts

- Do keep text contrast at WCAG AA or better.
- Don't use colours, sizes or spacing outside these tokens.
