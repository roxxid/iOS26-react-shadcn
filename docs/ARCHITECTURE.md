# Technical Architecture

This document outlines the technical architecture, build system, and structural decisions for the iOS26 React Component Library.

## Monorepo Structure

The project uses a pnpm workspace monorepo structure:

```
ios26-react-shadcn/
├── packages/
│   ├── ui/              # Main component library
│   └── cli/             # Optional CLI tool
├── apps/
│   ├── storybook/       # Storybook documentation
│   └── playground/      # Development playground
└── docs/                # Documentation
```

## Package: `@ios26/ui`

The main component library package that gets published to npm.

### Structure

```
packages/ui/
├── src/
│   ├── components/      # All UI components
│   ├── lib/             # Utilities (cn, etc.)
│   ├── hooks/           # Custom React hooks
│   └── index.ts         # Main export file
├── styles/
│   └── globals.css      # Tailwind directives
├── dist/                # Build output
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── components.json      # shadcn configuration
```

### Build System

- **TypeScript**: Compiles to ES2020 with ESM and CJS outputs
- **Tailwind CSS**: Processes and outputs CSS file
- **Build Tool**: Uses `tsc` for TypeScript compilation
- **Output**: `dist/` directory with:
  - `index.js` (CJS)
  - `index.mjs` (ESM)
  - `index.d.ts` (TypeScript definitions)
  - `styles.css` (Tailwind output)

### Package Exports

```json
{
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./styles": "./dist/styles.css"
  }
}
```

## Component Architecture

### Base: shadcn/ui

Components are built on top of shadcn/ui architecture:
- Uses Radix UI primitives for accessibility
- Tailwind CSS for styling
- Copy-paste friendly structure
- TypeScript for type safety

### Component Structure

Each component follows this structure:

```
component-name/
├── component-name.tsx        # Main component
├── component-name.stories.tsx # Storybook stories (dev only)
├── index.ts                  # Exports
└── README.md                 # Component docs (optional)
```

### Component Pattern

```tsx
import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const componentVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        default: "default-classes",
        // ... more variants
      },
      size: {
        default: "default-size",
        // ... more sizes
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ComponentProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof componentVariants> {
  // Component-specific props
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

## Styling System

### Tailwind CSS

- **Configuration**: `packages/ui/tailwind.config.js`
- **Design Tokens**: iOS 26 design system tokens
- **Dark Mode**: Class-based dark mode (`dark:` prefix)
- **Custom Utilities**: iOS-specific utilities (blur, glassmorphism)

### CSS Variables

Design tokens are exposed as CSS variables:

```css
:root {
  --ios-blue: #007AFF;
  --ios-green: #34C759;
  /* ... more colors */
}

.dark {
  --ios-blue: #0A84FF;
  /* ... dark mode colors */
}
```

### Utility Functions

- `cn()`: Class name utility (clsx + tailwind-merge)
- Located in `packages/ui/src/lib/utils.ts`

## TypeScript Configuration

### Library TypeScript Config

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM"],
    "declaration": true,
    "declarationMap": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "moduleResolution": "bundler"
  }
}
```

## Dependencies

### Peer Dependencies

Components require these peer dependencies (not bundled):

- `react`: ^18.0.0
- `react-dom`: ^18.0.0
- `tailwindcss`: ^3.0.0

### Internal Dependencies

- `class-variance-authority`: Component variants
- `clsx`: Class name utility
- `tailwind-merge`: Merge Tailwind classes
- `@radix-ui/*`: Accessible primitives (via shadcn)

## Storybook Architecture

### Location

`apps/storybook/` - Separate app for documentation

### Configuration

- **Framework**: React + Vite
- **Addons**: Controls, Actions, Viewport, Accessibility, MDX
- **Styling**: Tailwind CSS integration
- **Build**: Static site generation

### Story Structure

```tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Component } from '@ios26/ui'

const meta: Meta<typeof Component> = {
  title: 'Components/Component',
  component: Component,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Component>

export const Default: Story = {
  args: {
    // Default props
  },
}
```

## Build Process

### Development

1. `pnpm install` - Install dependencies
2. `pnpm dev` - Start Storybook dev server
3. Make changes to components
4. See changes in Storybook

### Production Build

1. `pnpm build` - Build UI package
   - Compiles TypeScript
   - Processes Tailwind CSS
   - Outputs to `dist/`

2. `pnpm build:storybook` - Build Storybook
   - Generates static site
   - Outputs to `storybook-static/`

## Publishing

### Versioning

- Follows [Semantic Versioning](https://semver.org/)
- Major: Breaking changes
- Minor: New features (backward compatible)
- Patch: Bug fixes

### npm Publishing

1. Update version in `packages/ui/package.json`
2. Build package: `pnpm build`
3. Publish: `cd packages/ui && npm publish`

### CI/CD

GitHub Actions workflow:
- Runs on version tags
- Builds package
- Publishes to npm
- Deploys Storybook

## Development Workflow

### Adding a New Component

1. Create component directory: `packages/ui/src/components/[name]/`
2. Implement component: `[name].tsx`
3. Export from component: `index.ts`
4. Add to main export: `src/index.ts`
5. Create Storybook story: `apps/storybook/src/stories/[name].stories.tsx`
6. Document in Storybook

### Testing Components

- Visual testing via Storybook
- Manual testing in playground app
- Accessibility testing with Storybook addon

## Performance Considerations

### Bundle Size

- Tree-shakeable exports
- Individual component imports
- No unnecessary dependencies

### Runtime Performance

- Optimized animations
- Lazy loading support
- Minimal re-renders

## Accessibility

### Standards

- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- Focus management

### Implementation

- Radix UI primitives (accessible by default)
- ARIA attributes
- Focus indicators
- Semantic HTML

## Browser Support

- Modern browsers (last 2 versions)
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Considerations

### Potential Enhancements

- Unit tests (Vitest)
- E2E tests (Playwright)
- Visual regression testing
- Automated accessibility testing
- Component playground improvements
- CLI tool for component generation

