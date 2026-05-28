---
name: Rumah Mandha Ru
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1b1b1b'
  on-surface-variant: '#5a413d'
  inverse-surface: '#303030'
  inverse-on-surface: '#f1f1f1'
  outline: '#8e706c'
  outline-variant: '#e2beb9'
  surface-tint: '#b22a1e'
  primary: '#7a0001'
  on-primary: '#ffffff'
  primary-container: '#9e1b12'
  on-primary-container: '#ffafa3'
  inverse-primary: '#ffb4a9'
  secondary: '#bb0013'
  on-secondary: '#ffffff'
  secondary-container: '#e9061c'
  on-secondary-container: '#fffbff'
  tertiary: '#61603e'
  on-tertiary: '#ffffff'
  tertiary-container: '#afad85'
  on-tertiary-container: '#424122'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4a9'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#900e09'
  secondary-fixed: '#ffdad6'
  secondary-fixed-dim: '#ffb4ab'
  on-secondary-fixed: '#410002'
  on-secondary-fixed-variant: '#93000c'
  tertiary-fixed: '#e7e4b9'
  tertiary-fixed-dim: '#cbc89f'
  on-tertiary-fixed: '#1d1d03'
  on-tertiary-fixed-variant: '#494828'
  background: '#f9f9f9'
  on-background: '#1b1b1b'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Epilogue
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Epilogue
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Epilogue
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base-unit: 8px
  container-max-width: 1200px
  gutter: 24px
  section-padding: 80px
  margin-mobile: 20px
---

## Brand & Style

The brand personality of this design system is rooted in the concept of "Rumah" (home). It aims to evoke a sense of nostalgic comfort, safety, and a slow-paced lifestyle. The target audience includes urban dwellers looking for a cultural escape and coffee enthusiasts who value heritage and storytelling.

The chosen design style is **Tactile Minimalism**. It combines the clean, high-white-space layouts of modern minimalism with subtle physical metaphors—organic shapes, paper-like textures, and high-quality photography that captures the steam of coffee and the texture of old wood. The interface should feel like a well-curated heritage photo album: personal, warm, and intentional.

## Colors

The palette is anchored by **Cream (#E3E0B5)**, which serves as the primary background color to avoid the clinical feel of pure white and provide a "paper" or "parchment" warmth. **Deep Maroon (#9E1B12)** is the lead brand color for text and primary structural elements, offering a sophisticated, grounded alternative to black.

**Vibrant Red (#E6001A)** is used sparingly for high-priority calls to action and accents, drawing the eye like a wax seal or traditional stamp. **Black (#000000)** is reserved for the highest level of typographic hierarchy or deep contrast in photography overlays.

## Typography

This design system utilizes **Epilogue** for headings to capture a distinctive, editorial, and slightly geometric feel that resonates with contemporary heritage branding. It provides the "boldness" seen in the Westpash reference while remaining refined.

For body copy and functional labels, **Be Vietnam Pro** is used. Its warm, approachable curves and high readability ensure that information feels friendly rather than corporate. Tracking is slightly increased on labels to mimic the feel of traditional print typesetting.

## Layout & Spacing

The layout philosophy is a **Fixed Grid with Generous Whitespace**. It follows a 12-column grid system on desktop, but with intentionally large "safe zones" to keep content centered and focused, mimicking the layout of a magazine or a coffee table book.

Spacing rhythm is built on an 8px scale. High-priority content sections should be separated by large vertical gaps (section-padding) to allow the design to "breathe," ensuring the user never feels overwhelmed—maintaining the "rest and relax" brand promise.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** rather than heavy shadows. The primary surface is the Cream background. "Elevated" components like cards use a slightly lighter tint of cream or a very thin, low-opacity Deep Maroon border to define edges.

When depth is necessary, use **Ambient Shadows**: extremely soft, long-range blurs (20-40px) with very low opacity (5-10%) tinted with the Deep Maroon color. This creates a "soft glow" or "floating paper" effect rather than a digital material effect.

## Shapes

The shape language is **Rounded**, using 0.5rem (8px) as the base radius. This softens the interface, making it feel more organic and less rigid. Larger components like featured product cards or image containers should use `rounded-xl` (1.5rem/24px) to emphasize the cozy, friendly aesthetic.

## Components

### Buttons
Primary buttons use a Deep Maroon background with Cream text. Secondary buttons use a Deep Maroon outline with a transparent background. All buttons should have a high internal horizontal padding (min 24px) to feel substantial and inviting.

### Cards
Product cards should feature full-bleed photography at the top with a Cream footer. The transition between photo and text should be clean. Price labels should use the Vibrant Red to stand out as a clear point of information.

### Lists & Menus
Menu items should be presented with high leading (line-height) and thin Deep Maroon dividers. Use small icons or "dots" in Deep Maroon to indicate bullet points, keeping the traditional café menu feel.

### Input Fields
Fields should use a minimal "underline" style or a very soft Cream-tinted background with a Deep Maroon label sitting prominently above the field.

### Additional Components
- **Heritage Badge:** A circular or stamp-shaped component using the Vibrant Red and a script font for "New" or "Best Seller" items.
- **Story Blocks:** Text-heavy sections with decorative serif pull-quotes to reinforce the "Rumah" narrative.