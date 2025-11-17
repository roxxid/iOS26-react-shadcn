# iOS26 React Component Library

A React component library that replicates iOS 26 design language for web applications. Built with shadcn/ui architecture, Tailwind CSS, and Radix UI primitives.

## Features

- 🎨 **iOS 26 Design Language**: Authentic iOS design patterns, colors, and typography
- ♿ **Accessible**: WCAG 2.1 AA compliant components built on Radix UI
- 🌓 **Dark Mode**: Full dark mode support with system color adaptation
- 📱 **Responsive**: Mobile-first design that works on all screen sizes
- 🎯 **TypeScript**: Full TypeScript support with exported types
- 📦 **Tree-shakeable**: Import only what you need
- 🔧 **Customizable**: Copy-paste components for maximum flexibility
- 📚 **Well Documented**: Comprehensive Storybook documentation

## Installation

```bash
npm install @ios26/ui
# or
pnpm add @ios26/ui
# or
yarn add @ios26/ui
```

## Quick Start

1. **Install the package**:

```bash
npm install @ios26/ui
```

2. **Import styles**:

```tsx
import '@ios26/ui/styles'
```

Or add to your CSS:

```css
@import '@ios26/ui/styles';
```

3. **Configure Tailwind** (if using Tailwind):

Extend your `tailwind.config.js` with iOS26 tokens (see [Design System](./docs/DESIGN_SYSTEM.md)).

4. **Use components**:

```tsx
import { Button, Input, Card } from '@ios26/ui'

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Input placeholder="Enter text..." />
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>Card content</CardContent>
      </Card>
    </div>
  )
}
```

## Documentation

- **[Storybook Documentation](https://your-storybook-url.com)** - Interactive component documentation
- **[Design System](./docs/DESIGN_SYSTEM.md)** - Design tokens, colors, typography
- **[Component Guidelines](./docs/COMPONENT_GUIDELINES.md)** - How to create components
- **[Architecture](./docs/ARCHITECTURE.md)** - Technical architecture
- **[Figma Integration](./docs/FIGMA_INTEGRATION.md)** - Working with Figma designs
- **[Copy-Paste Guide](./docs/COPY_PASTE.md)** - Copy-paste workflow
- **[Contributing](./docs/CONTRIBUTING.md)** - Contribution guidelines
- **[Publishing](./docs/PUBLISHING.md)** - npm publishing process

## Components

### Available Components

- **Button** - iOS-style buttons with multiple variants
- **Input** - Text input fields with iOS styling
- **Card** - Container components with blur effects

More components coming soon! Check the [Figma file](https://www.figma.com/design/bL8KABaz9Vsot0sIi3E3uQ/ios26-shadcn) for the full component list.

## Usage Examples

### Button

```tsx
import { Button } from '@ios26/ui'

// Default button
<Button>Click me</Button>

// Variants
<Button variant="destructive">Delete</Button>
<Button variant="outline">Cancel</Button>
<Button variant="secondary">Secondary</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

### Input

```tsx
import { Input } from '@ios26/ui'

<Input type="email" placeholder="Enter your email" />
<Input type="password" placeholder="Password" />
<Input disabled placeholder="Disabled input" />
```

### Card

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@ios26/ui'

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

## Requirements

- React 18+
- Tailwind CSS 3.0+
- Node.js 18+

## Peer Dependencies

The following packages are required but not bundled:

- `react` ^18.0.0
- `react-dom` ^18.0.0
- `tailwindcss` ^3.0.0

## Copy-Paste Workflow

For maximum customization, you can copy component source code directly into your project. See the [Copy-Paste Guide](./docs/COPY_PASTE.md) for details.

## Development

### Setup

```bash
# Install dependencies
pnpm install

# Start Storybook
pnpm dev

# Build package
pnpm build

# Type check
pnpm typecheck
```

### Project Structure

```
ios26-react-shadcn/
├── packages/
│   └── ui/              # Main component library
├── apps/
│   └── storybook/       # Storybook documentation
└── docs/                # Documentation
```

## Contributing

Contributions are welcome! Please read our [Contributing Guide](./docs/CONTRIBUTING.md) for details.

## Design Reference

Components are based on the iOS26 Figma design file:
- [Primary Design File](https://www.figma.com/design/bL8KABaz9Vsot0sIi3E3uQ/ios26-shadcn)
- [Community File](https://www.figma.com/community/file/1527721578857867021)

## License

MIT © [Nishant Koli](LICENSE)

## Acknowledgments

- Built on [shadcn/ui](https://ui.shadcn.com)
- Uses [Radix UI](https://www.radix-ui.com) primitives
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Documentation with [Storybook](https://storybook.js.org)

