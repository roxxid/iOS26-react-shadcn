# Copy-Paste Workflow

The iOS26 React Component Library supports both npm package installation and copy-paste workflows, similar to shadcn/ui.

## Method 1: npm Package (Recommended)

Install the package and import components:

```bash
npm install @ios26/ui
```

```tsx
import { Button, Input, Card } from '@ios26/ui'
import '@ios26/ui/styles'
```

## Method 2: Copy-Paste Components

For maximum customization, you can copy component source code directly into your project.

### Getting Component Source Code

#### Option A: From Storybook

1. Navigate to the component in Storybook
2. Click the "Show Code" button or view the source tab
3. Copy the component code
4. Paste into your project at `src/components/ui/[component-name].tsx`

#### Option B: From GitHub Repository

1. Navigate to `packages/ui/src/components/[component-name]/`
2. Copy the component file(s)
3. Ensure you have the required dependencies:
   - `@radix-ui/react-slot` (for Button and similar components)
   - `class-variance-authority`
   - `clsx`
   - `tailwind-merge`

#### Option C: From Source Files

If you have the repository cloned:

```bash
# Copy a component
cp -r packages/ui/src/components/button src/components/ui/
```

### Setting Up Copy-Paste

1. **Install dependencies**:

```bash
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge
```

2. **Copy utility function**:

Copy `packages/ui/src/lib/utils.ts` to your project:

```tsx
// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

3. **Configure Tailwind**:

Ensure your `tailwind.config.js` includes the iOS26 design tokens. You can copy the relevant sections from `packages/ui/tailwind.config.js`.

4. **Update imports**:

Update the component imports to match your project structure:

```tsx
// Change from:
import { cn } from "@/lib/utils"

// To your project's path:
import { cn } from "@/lib/utils" // or your utils path
```

5. **Add styles**:

Ensure your Tailwind CSS includes the iOS26 styles. Copy the relevant CSS from `packages/ui/styles/globals.css` or import:

```css
@import '@ios26/ui/styles';
```

### Example: Copying the Button Component

1. Copy `packages/ui/src/components/button/button.tsx`
2. Copy `packages/ui/src/lib/utils.ts` (if you don't have it)
3. Update imports in the button file
4. Install peer dependencies: `@radix-ui/react-slot`
5. Use the component:

```tsx
import { Button } from '@/components/ui/button'

function App() {
  return <Button>Click me</Button>
}
```

## Customization

When copying components, you can:

- Modify component styles directly
- Change variant names
- Add new variants
- Adjust spacing, colors, or typography
- Add custom functionality

## Best Practices

1. **Keep utilities updated**: If you copy components, keep the `cn` utility function updated
2. **Maintain dependencies**: Ensure peer dependencies match the component requirements
3. **Version control**: Track which components you've copied and from which version
4. **Update path**: Update import paths to match your project structure

## When to Use Each Method

### Use npm Package When:
- You want easy updates
- You don't need deep customization
- You want to keep bundle size small (tree-shaking)
- You're building a production app

### Use Copy-Paste When:
- You need to customize components heavily
- You want full control over component code
- You're building a design system on top of iOS26
- You need to modify component internals

## Component Dependencies

Each component may have different dependencies. Check the component file for required imports:

- **Button**: Requires `@radix-ui/react-slot`
- **Input**: No additional Radix dependencies
- **Card**: No additional Radix dependencies
- **Complex components**: May require additional Radix UI primitives

## Troubleshooting

### Import Errors

If you get import errors after copying:

1. Check that all dependencies are installed
2. Verify import paths match your project structure
3. Ensure TypeScript paths are configured correctly

### Styling Issues

If styles don't apply:

1. Verify Tailwind config includes iOS26 tokens
2. Check that CSS is imported
3. Ensure Tailwind processes the component files

### Type Errors

If you get TypeScript errors:

1. Ensure `@types/react` is installed
2. Check that component props match expected types
3. Verify TypeScript configuration

## Resources

- [Component Guidelines](./COMPONENT_GUIDELINES.md)
- [Design System](./DESIGN_SYSTEM.md)
- [Architecture](./ARCHITECTURE.md)

