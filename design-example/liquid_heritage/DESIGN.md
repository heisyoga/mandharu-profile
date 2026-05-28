---
name: Liquid Heritage
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#e9bcb7'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#af8783'
  outline-variant: '#5e3f3b'
  surface-tint: '#ffb4ab'
  primary: '#ffb4ab'
  on-primary: '#690006'
  primary-container: '#e6001a'
  on-primary-container: '#fff7f6'
  inverse-primary: '#c00014'
  secondary: '#cbc89f'
  on-secondary: '#323214'
  secondary-container: '#494828'
  on-secondary-container: '#b9b78e'
  tertiary: '#ffb4a9'
  on-tertiary: '#690001'
  tertiary-container: '#ce3f30'
  on-tertiary-container: '#fff7f6'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ab'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#93000c'
  secondary-fixed: '#e7e4b9'
  secondary-fixed-dim: '#cbc89f'
  on-secondary-fixed: '#1d1d03'
  on-secondary-fixed-variant: '#494828'
  tertiary-fixed: '#ffdad5'
  tertiary-fixed-dim: '#ffb4a9'
  on-tertiary-fixed: '#410000'
  on-tertiary-fixed-variant: '#900e09'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  container-margin: 32px
  gutter: 20px
---

## Brand & Style

This design system embodies the **"Future Heritage"** philosophy—a synthesis of Mandha Ru’s traditional coffee warmth and a visionary "macOS Tahoe" aesthetic. The brand personality is premium, artisanal, and hyper-technological. It targets a sophisticated audience that appreciates the tactile history of coffee but demands a seamless, high-tech digital experience.

The visual style is **Glassmorphism**, characterized by hyper-realistic "liquid glass" surfaces, multi-layered depth, and organic mesh gradients. It evokes a sense of looking through polished lenses or over shimmering surfaces, creating an emotional response that is both comforting (via heritage colors) and exhilarating (via futuristic physics and lighting).

## Colors

The palette transforms the traditional Mandha Ru identity into a high-contrast dark mode environment. 

- **Primary (Bright Red):** Used for "Liquid Accents," glow effects, and interactive call-to-actions.
- **Secondary (Cream):** Acts as the primary text color and surface stroke color, providing a warm, parchment-like readability against the dark glass.
- **Tertiary (Deep Maroon):** Used for depth gradients, shadows, and subtle background "mesh" light leaks.
- **Neutral (Black):** The foundation of the "Infinite Void" background, allowing glass elements to pop.

Backgrounds should feature a dynamic mesh gradient blending **Deep Maroon** and **Black**, with occasional sweeps of **Bright Red** to simulate light passing through liquid.

## Typography

This design system utilizes **Inter** for its systematic, Apple-like precision and clarity across headlines and body copy. To inject the "High-Tech" element, **Space Grotesk** is used for micro-copy, labels, and technical data points, providing a geometric, futuristic contrast.

Typography should be rendered with high contrast: **Cream** for primary content and a semi-transparent Cream (60% opacity) for secondary information. Large display text should occasionally utilize a subtle "glass-fill" effect, where the mesh gradient is visible through the letterforms.

## Layout & Spacing

The layout philosophy is a **Fluid Grid** with generous "air" to allow the glass effects to breathe. We employ a 12-column system for desktop and a 4-column system for mobile. 

- **Depth Padding:** Elements within glass containers should have a minimum of `24px` internal padding to ensure the frosted edges don't crowd the content.
- **Negative Space:** Use `xl` spacing between major sections to emphasize the "floating" nature of the UI components.

## Elevation & Depth

Hierarchy is established through **Backdrop Blur** and **Inner Glows** rather than traditional elevation.

1.  **Level 0 (Base):** Deep Maroon/Black mesh gradient.
2.  **Level 1 (Sub-surface):** 20px Backdrop blur, 10% opacity Cream fill.
3.  **Level 2 (Active Surface):** 40px Backdrop blur, 20% opacity Cream fill, with a 1px solid Cream border at 20% opacity.
4.  **Level 3 (Popovers/Modals):** 60px Backdrop blur, Deep Maroon inner glow (10px spread), and a 2px "liquid" stroke using a Bright Red gradient.

**Shadows:** Use extremely large, soft shadows (60px-100px blur) with 40% opacity Black to ground floating elements.

## Shapes

The design system uses high-radius **Squircular** (Apple-style) corners to maintain a sleek, friendly, yet modern feel. 

- **Containers:** Use `rounded-xl` (1.5rem / 24px) for cards and main glass panels.
- **Interactive Elements:** Use `rounded-lg` (1rem / 16px) for buttons and input fields.
- **Status Indicators:** Use full pill shapes for chips and tags.

All edges should feel "molded" rather than cut, emphasizing the liquid glass metaphor.

## Components

### Buttons
Primary buttons are **Bright Red** with a subtle inner glow and a white/cream label. Secondary buttons use the glass effect (frosted background) with a 1px cream border. On hover, buttons should "swell" slightly and increase their backdrop blur intensity.

### Cards
Cards are the primary container. They must feature a `backdrop-filter: blur(30px)` and a thin top-down gradient stroke (Cream to Transparent) to simulate a light source hitting the top edge of the glass.

### Input Fields
Fields are dark, semi-transparent wells with a `1px` Deep Maroon bottom border. When focused, the border glows Bright Red and the background blur increases.

### Lists & Navigation
Navigation items use a "Glass Capsule" hover state—a pill-shaped glass highlight that follows the cursor or snaps to the active item, creating a fluid, tactile motion.

### Glowing Accents
Incorporate "Liquid Lights"—small, blurred spheres of Bright Red or Cream that sit behind specific glass components to draw attention to status changes or primary actions.