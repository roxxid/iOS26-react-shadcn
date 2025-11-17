# iOS 26 Design System

This document outlines the design tokens, principles, and visual language used in the iOS26 React Component Library.

## Design Philosophy

The iOS26 design system replicates Apple's iOS 26 design language for web applications, emphasizing clarity, depth, and deference. Components should feel native to iOS while being fully functional in web browsers.

## Color Palette

### System Colors

iOS 26 uses a semantic color system that adapts to light and dark modes.

#### Primary Colors
- **Blue**: `#007AFF` - Primary actions, links
- **Green**: `#34C759` - Success states, positive actions
- **Orange**: `#FF9500` - Warnings, attention
- **Red**: `#FF3B30` - Destructive actions, errors
- **Purple**: `#AF52DE` - Accent color, special actions
- **Pink**: `#FF2D55` - Accent color, special actions
- **Teal**: `#5AC8FA` - Accent color, special actions
- **Indigo**: `#5856D6` - Accent color, special actions

#### Neutral Colors
- **System Background**: Light mode `#FFFFFF`, Dark mode `#000000`
- **Secondary Background**: Light mode `#F2F2F7`, Dark mode `#1C1C1E`
- **Tertiary Background**: Light mode `#FFFFFF`, Dark mode `#2C2C2E`
- **System Fill**: Light mode `#78788033`, Dark mode `#7878805C`
- **Secondary Fill**: Light mode `#78788028`, Dark mode `#78788052`
- **Tertiary Fill**: Light mode `#7676801F`, Dark mode `#7676803D`
- **Quaternary Fill**: Light mode `#74748014`, Dark mode `#74748028`

#### Label Colors
- **Primary Label**: Light mode `#000000`, Dark mode `#FFFFFF`
- **Secondary Label**: Light mode `#3C3C4399`, Dark mode `#EBEBF599`
- **Tertiary Label**: Light mode `#3C3C434D`, Dark mode `#EBEBF54D`
- **Quaternary Label**: Light mode `#3C3C4329`, Dark mode `#EBEBF529`

### Semantic Colors
- **Separator**: Light mode `#3C3C434A`, Dark mode `#54545899`
- **Opaque Separator**: Light mode `#C6C6C8`, Dark mode `#38383A`

## Typography

iOS 26 uses SF Pro font family. For web, we use system fonts that closely match:

```css
font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

### Type Scale

- **Large Title**: 34px, weight 700
- **Title 1**: 28px, weight 700
- **Title 2**: 22px, weight 700
- **Title 3**: 20px, weight 600
- **Headline**: 17px, weight 600
- **Body**: 17px, weight 400
- **Callout**: 16px, weight 400
- **Subheadline**: 15px, weight 400
- **Footnote**: 13px, weight 400
- **Caption 1**: 12px, weight 400
- **Caption 2**: 11px, weight 400

### Line Heights
- Large Title: 41px
- Title 1: 34px
- Title 2: 28px
- Title 3: 25px
- Headline: 22px
- Body: 22px
- Callout: 21px
- Subheadline: 20px
- Footnote: 18px
- Caption 1: 16px
- Caption 2: 13px

## Spacing System

iOS 26 uses an 8pt grid system:

- **xs**: 4px (0.25rem)
- **sm**: 8px (0.5rem)
- **md**: 16px (1rem)
- **lg**: 24px (1.5rem)
- **xl**: 32px (2rem)
- **2xl**: 40px (2.5rem)
- **3xl**: 48px (3rem)
- **4xl**: 64px (4rem)

## Border Radius

- **xs**: 4px
- **sm**: 8px
- **md**: 12px
- **lg**: 16px
- **xl**: 20px
- **full**: 9999px (pill shape)

## Shadows & Elevation

iOS 26 uses subtle shadows to create depth:

- **sm**: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- **md**: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`
- **lg**: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`
- **xl**: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`

## Blur Effects

iOS 26 extensively uses blur effects (glassmorphism):

- **Light mode**: `backdrop-filter: blur(20px) saturate(180%)`
- **Dark mode**: `backdrop-filter: blur(20px) saturate(180%)`
- Background opacity: Light mode `0.8`, Dark mode `0.7`

## Animation & Motion

### Spring Physics
iOS animations use spring physics for natural motion:

```css
transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
```

### Duration
- **Fast**: 150ms
- **Normal**: 250ms
- **Slow**: 350ms

### Easing
- **Ease In**: `cubic-bezier(0.4, 0.0, 1, 1)`
- **Ease Out**: `cubic-bezier(0.0, 0.0, 0.2, 1)`
- **Ease In Out**: `cubic-bezier(0.4, 0.0, 0.2, 1)`

## Component-Specific Tokens

### Buttons
- Height: 44px (minimum touch target)
- Padding: 16px horizontal
- Border radius: 10px
- Font: Headline (17px, 600)

### Input Fields
- Height: 44px
- Padding: 12px horizontal
- Border radius: 10px
- Font: Body (17px, 400)

### Cards
- Padding: 16px
- Border radius: 16px
- Background: System background with blur effect

## Accessibility

### Minimum Touch Targets
- Interactive elements: 44px × 44px minimum
- Spacing between touch targets: 8px minimum

### Contrast Ratios
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- UI components: 3:1 minimum

### Focus Indicators
- Visible focus rings on all interactive elements
- High contrast focus indicators
- Keyboard navigation support

## Dark Mode Support

All components must support both light and dark modes using CSS custom properties and Tailwind's dark mode feature.

## Usage in Tailwind

These tokens are configured in `tailwind.config.js` and can be used throughout components:

```tsx
// Colors
className="bg-system-background dark:bg-system-background-dark"
className="text-primary-label dark:text-primary-label-dark"

// Spacing
className="p-md m-lg"

// Typography
className="text-headline font-semibold"

// Border radius
className="rounded-lg"

// Blur effects
className="backdrop-blur-xl bg-opacity-80"
```

