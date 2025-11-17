# Contributing Guide

Thank you for your interest in contributing to the iOS26 React Component Library! This document provides guidelines and instructions for contributing.

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+
- Git

### Setup

1. **Fork the repository**

2. **Clone your fork**:

```bash
git clone https://github.com/your-username/ios26-react-shadcn.git
cd ios26-react-shadcn
```

3. **Install dependencies**:

```bash
pnpm install
```

4. **Start Storybook**:

```bash
pnpm dev
```

## Development Workflow

### Creating a New Component

1. **Check Figma**: Ensure the component exists in the [Figma design file](https://www.figma.com/design/bL8KABaz9Vsot0sIi3E3uQ/ios26-shadcn)

2. **Create component structure**:

```bash
mkdir -p packages/ui/src/components/[component-name]
```

3. **Follow the component template** (see [Component Guidelines](./COMPONENT_GUIDELINES.md))

4. **Create Storybook stories**:

```bash
touch apps/storybook/src/stories/[ComponentName].stories.tsx
```

5. **Export from main index**:

Add to `packages/ui/src/index.ts`

6. **Test in Storybook**: Verify all variants and states work

### Component Requirements

- [ ] Matches iOS 26 design language
- [ ] All variants implemented
- [ ] All states implemented (hover, active, focus, disabled)
- [ ] Dark mode supported
- [ ] Accessible (keyboard navigation, screen readers)
- [ ] TypeScript types exported
- [ ] Storybook stories created
- [ ] Responsive design
- [ ] No console errors/warnings

## Code Style

### TypeScript

- Use TypeScript for all components
- Export types alongside components
- Use interfaces for component props
- Prefer `React.forwardRef` for components

### Naming Conventions

- Components: PascalCase (`Button`, `CardHeader`)
- Files: kebab-case (`button.tsx`, `card-header.tsx`)
- Props interfaces: `ComponentNameProps`
- Variants: camelCase (`buttonVariants`)

### Code Formatting

- Use 2 spaces for indentation
- Use semicolons
- Use single quotes for strings (or double quotes consistently)
- Maximum line length: 100 characters

## Component Structure

Follow the standard component structure:

```tsx
import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const componentVariants = cva(/* ... */)

export interface ComponentProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof componentVariants> {
  // Props
}

const Component = React.forwardRef<HTMLElement, ComponentProps>(
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
Component.displayName = "Component"

export { Component, componentVariants }
```

## Storybook Stories

Each component needs comprehensive stories:

- Default story
- Variants story (all variants)
- Sizes story (all sizes)
- States story (hover, active, disabled, etc.)
- Interactive story with controls

See existing stories for examples.

## Testing

### Manual Testing

- Test in Storybook
- Test in different browsers
- Test keyboard navigation
- Test screen readers
- Test dark mode
- Test responsive breakpoints

### Accessibility Testing

- Use Storybook accessibility addon
- Test with keyboard only
- Test with screen readers
- Verify ARIA attributes
- Check color contrast

## Pull Request Process

1. **Create a branch**:

```bash
git checkout -b feature/component-name
```

2. **Make your changes**

3. **Commit your changes**:

```bash
git commit -m "feat: add ComponentName component"
```

Use conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code refactoring
- `test:` Tests
- `chore:` Maintenance

4. **Push to your fork**:

```bash
git push origin feature/component-name
```

5. **Create a Pull Request**

### PR Checklist

- [ ] Component matches Figma design
- [ ] All variants and states implemented
- [ ] Storybook stories created
- [ ] TypeScript types exported
- [ ] Exported from main index
- [ ] Dark mode supported
- [ ] Accessible
- [ ] Responsive
- [ ] No console errors
- [ ] Documentation updated if needed

## Design Guidelines

### Following iOS 26 Design Language

- Use iOS 26 color tokens (see [Design System](./DESIGN_SYSTEM.md))
- Follow iOS typography scale
- Use iOS spacing system (8pt grid)
- Implement blur effects where appropriate
- Use iOS spring animations
- Maintain 44px minimum touch targets

### Design Token Usage

Always use design tokens, not hardcoded values:

```tsx
// Good
className="bg-ios-blue text-white"

// Bad
className="bg-[#007AFF] text-white"
```

## Documentation

### Component Documentation

If adding a new component, consider adding:

- Component description in Storybook
- Usage examples
- Props documentation
- Design token references
- Accessibility notes

### Updating Documentation

- Update README if adding major features
- Update design system docs if adding tokens
- Update component guidelines if changing patterns

## Questions?

- Open an issue for questions
- Check existing documentation
- Review existing components for examples

## Code of Conduct

- Be respectful
- Be constructive
- Be patient
- Help others learn

Thank you for contributing! 🎉

