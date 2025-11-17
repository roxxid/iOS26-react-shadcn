# Component Development Guidelines

This document outlines the standards and patterns for creating components in the iOS26 React Component Library.

## Component Structure

Each component follows this standardized structure:

```
component-name/
├── component-name.tsx        # Main component implementation
├── component-name.stories.tsx # Storybook stories (dev only, not published)
├── index.ts                  # Component exports
└── README.md                 # Component-specific documentation (optional)
```

## Component Template

### Basic Component Structure

```tsx
import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const componentVariants = cva(
  // Base classes - always applied
  "base-classes-here",
  {
    variants: {
      variant: {
        default: "default-variant-classes",
        secondary: "secondary-variant-classes",
        // Add more variants as needed
      },
      size: {
        default: "default-size-classes",
        sm: "small-size-classes",
        lg: "large-size-classes",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ComponentNameProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof componentVariants> {
  // Component-specific props
  // Example: children?: React.ReactNode
}

const ComponentName = React.forwardRef<HTMLElement, ComponentNameProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <element
        ref={ref}
        className={cn(componentVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)
ComponentName.displayName = "ComponentName"

export { ComponentName, componentVariants }
```

## iOS 26 Design Patterns

### Colors

Use iOS 26 color tokens from the design system:

```tsx
// Primary actions
className="bg-ios-blue text-white"

// Success states
className="bg-ios-green text-white"

// Destructive actions
className="bg-ios-red text-white"

// System backgrounds
className="bg-background dark:bg-background-dark"
```

### Typography

Use iOS typography scale:

```tsx
// Headlines
className="text-headline font-semibold"

// Body text
className="text-body"

// Captions
className="text-caption-1"
```

### Spacing

Use iOS spacing system (8pt grid):

```tsx
// Padding
className="p-ios-md"  // 16px

// Margins
className="m-ios-lg"  // 24px

// Gaps
className="gap-ios-sm"  // 8px
```

### Border Radius

Use iOS border radius values:

```tsx
// Standard buttons/inputs
className="rounded-ios-md"  // 10px

// Cards
className="rounded-ios-lg"  // 12px

// Large containers
className="rounded-ios-xl"  // 16px
```

### Blur Effects (Glassmorphism)

For iOS-style blur effects:

```tsx
// Light mode blur
className="ios-blur-light"

// Dark mode blur
className="ios-blur-dark"

// Adaptive blur
className="ios-blur-light dark:ios-blur-dark"
```

### Animations

Use iOS spring physics:

```tsx
className="transition-all duration-ios-normal ease-ios-spring"
```

## Component States

Every interactive component should support:

1. **Default**: Normal state
2. **Hover**: On hover (desktop)
3. **Active/Pressed**: When pressed/clicked
4. **Focus**: Keyboard focus
5. **Disabled**: Disabled state
6. **Loading**: Loading state (if applicable)

Example:

```tsx
const buttonVariants = cva(
  "transition-all duration-ios-normal ease-ios-spring",
  {
    variants: {
      variant: {
        default: "bg-ios-blue text-white hover:opacity-90 active:opacity-80",
        disabled: "bg-fill-secondary text-label-tertiary cursor-not-allowed",
      },
    },
  }
)
```

## Accessibility Requirements

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Use proper focus indicators
- Support Tab navigation
- Support Enter/Space for activation

### ARIA Attributes

- Use semantic HTML elements
- Add ARIA labels when needed
- Support screen readers
- Maintain proper roles

### Focus Management

```tsx
// Focus ring
className="focus:outline-none focus:ring-2 focus:ring-ios-blue focus:ring-offset-2"

// Focus visible (keyboard only)
className="focus-visible:ring-2 focus-visible:ring-ios-blue"
```

### Minimum Touch Targets

- Minimum size: 44px × 44px
- Spacing between targets: 8px minimum

## Component Props

### Standard Props

All components should accept:

- `className`: For custom styling
- `children`: When applicable
- Standard HTML attributes for the element type

### Variant Props

Use `class-variance-authority` for variants:

```tsx
import { cva, type VariantProps } from "class-variance-authority"

const variants = cva(/* ... */)

export interface ComponentProps extends VariantProps<typeof variants> {
  // ...
}
```

## Component Exports

### index.ts Pattern

```tsx
export { ComponentName, componentVariants } from "./component-name"
export type { ComponentNameProps } from "./component-name"
```

### Main Export (src/index.ts)

Add to main export file:

```tsx
export { ComponentName } from "./components/component-name"
export type { ComponentNameProps } from "./components/component-name"
```

## Storybook Stories

Each component needs comprehensive Storybook stories:

```tsx
import type { Meta, StoryObj } from '@storybook/react'
import { ComponentName } from '@ios26/ui'

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof ComponentName>

export const Default: Story = {
  args: {
    children: 'Component Name',
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <ComponentName variant="default">Default</ComponentName>
      <ComponentName variant="secondary">Secondary</ComponentName>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <ComponentName size="sm">Small</ComponentName>
      <ComponentName size="default">Default</ComponentName>
      <ComponentName size="lg">Large</ComponentName>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ComponentName>Default</ComponentName>
      <ComponentName disabled>Disabled</ComponentName>
    </div>
  ),
}
```

## Testing Checklist

Before considering a component complete:

- [ ] Component renders correctly
- [ ] All variants work
- [ ] All sizes work
- [ ] All states work (hover, active, focus, disabled)
- [ ] Keyboard navigation works
- [ ] Screen reader accessible
- [ ] Dark mode supported
- [ ] Responsive (mobile/tablet/desktop)
- [ ] Storybook stories created
- [ ] TypeScript types exported
- [ ] Exported from main index
- [ ] Matches iOS 26 design language
- [ ] No console errors/warnings

## Code Style

### Naming Conventions

- Components: PascalCase (`ComponentName`)
- Files: kebab-case (`component-name.tsx`)
- Props interfaces: `ComponentNameProps`
- Variants: camelCase (`componentVariants`)

### Import Order

1. React imports
2. Third-party imports
3. Internal utilities
4. Types

```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import type { ComponentProps } from "@/lib/types"
```

### Comments

- Add JSDoc comments for complex components
- Document non-obvious logic
- Explain design decisions when needed

## Common Patterns

### Forwarding Refs

Always use `React.forwardRef`:

```tsx
const Component = React.forwardRef<HTMLElement, ComponentProps>(
  ({ className, ...props }, ref) => {
    return <element ref={ref} className={cn(className)} {...props} />
  }
)
Component.displayName = "Component"
```

### Merging Classes

Always use `cn()` utility:

```tsx
className={cn(baseClasses, variantClasses, className)}
```

### Conditional Rendering

Use clear, readable conditions:

```tsx
{isLoading && <Spinner />}
{error && <ErrorMessage error={error} />}
```

## Examples

See existing components in `packages/ui/src/components/` for reference implementations.

## Resources

- [Design System](./DESIGN_SYSTEM.md)
- [Architecture](./ARCHITECTURE.md)
- [Figma Integration](./FIGMA_INTEGRATION.md)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Radix UI Documentation](https://www.radix-ui.com)

