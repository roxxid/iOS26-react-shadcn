# Figma Integration Workflow

This document describes how to use the MCP (Model Context Protocol) server with Figma to extract component specifications and design tokens for building iOS26 components.

## Overview

The Figma integration allows us to:
1. Extract design specifications from the iOS26 Figma file
2. Get exact measurements, colors, and typography
3. Understand component states and variants
4. Maintain design fidelity during implementation

## Figma File

**Primary Design File**: [iOS26 shadcn Figma Design](https://www.figma.com/design/bL8KABaz9Vsot0sIi3E3uQ/ios26-shadcn?node-id=0-1&t=ksrm9YvcfEbncGvr-1)

**Community File**: [iOS26 Figma Community File](https://www.figma.com/community/file/1527721578857867021)

## MCP Server Setup

The MCP server provides a bridge between Figma and our development workflow, allowing us to:
- Query component specifications
- Extract design tokens
- Get component variants and states
- Retrieve spacing and layout information

## Workflow

### 1. Component Discovery

When starting a new component:

1. Open the Figma file
2. Locate the component in the Figma file structure
3. Note the component name and location (node-id)
4. Use MCP server to query component details:
   ```
   Query: "Get specifications for Button component"
   ```

### 2. Design Token Extraction

For each component, extract:

- **Colors**: Background, text, border, states (hover, active, disabled)
- **Typography**: Font family, size, weight, line height
- **Spacing**: Padding, margins, gaps
- **Dimensions**: Width, height, min/max constraints
- **Border Radius**: Corner radius values
- **Shadows**: Elevation and shadow specifications
- **Effects**: Blur, opacity, blend modes

### 3. Component States

Document all component states:
- Default
- Hover
- Active/Pressed
- Focused
- Disabled
- Loading
- Error
- Success

### 4. Variants

Identify all component variants:
- Sizes (small, medium, large)
- Styles (primary, secondary, tertiary)
- Types (filled, outlined, text)
- Icons (with/without icons, icon positions)

### 5. Implementation Checklist

For each component:

- [ ] Extract design tokens from Figma
- [ ] Map tokens to Tailwind classes
- [ ] Implement base component structure
- [ ] Add all variants
- [ ] Implement all states
- [ ] Add animations and transitions
- [ ] Test accessibility
- [ ] Create Storybook stories
- [ ] Document props and usage

## MCP Server Commands

### Query Component Specs
```
Command: Get component specifications
Parameters:
  - component_name: "Button"
  - node_id: "0-1:123"
```

### Extract Design Tokens
```
Command: Extract design tokens
Parameters:
  - component_name: "Button"
  - include_colors: true
  - include_typography: true
  - include_spacing: true
```

### Get Component Variants
```
Command: List component variants
Parameters:
  - component_name: "Button"
```

### Get Component States
```
Command: Get component states
Parameters:
  - component_name: "Button"
```

## Design Token Mapping

When extracting tokens from Figma, map them to our design system:

### Colors
- Figma color → Tailwind color variable
- Document hex values and opacity
- Map to light/dark mode variants

### Typography
- Figma font → CSS font-family
- Figma size → Tailwind text size
- Figma weight → Tailwind font weight

### Spacing
- Figma padding → Tailwind padding class
- Figma margin → Tailwind margin class
- Figma gap → Tailwind gap class

### Effects
- Figma blur → Tailwind backdrop-blur
- Figma shadow → Tailwind shadow class
- Figma opacity → Tailwind opacity class

## Component Implementation Template

When implementing a component from Figma:

1. **Create component file**: `packages/ui/src/components/[component-name]/[component-name].tsx`

2. **Extract and document tokens**:
   ```typescript
   // Design tokens from Figma
   // - Primary color: #007AFF
   // - Height: 44px
   // - Padding: 16px horizontal
   // - Border radius: 10px
   ```

3. **Implement base structure**:
   ```tsx
   export const ComponentName = ({ ...props }) => {
     // Implementation
   }
   ```

4. **Add variants and states**:
   ```tsx
   // Variants: size, variant, state
   ```

5. **Create Storybook story**:
   ```tsx
   // Show all variants and states
   ```

## Best Practices

1. **Always verify**: Compare implemented component with Figma design
2. **Document deviations**: Note any necessary changes from design
3. **Maintain consistency**: Use design tokens, not hardcoded values
4. **Test responsiveness**: Ensure components work at all breakpoints
5. **Accessibility first**: Verify keyboard navigation and screen readers

## Troubleshooting

### MCP Server Not Responding
- Check server connection
- Verify Figma file access
- Check node-id format

### Design Tokens Mismatch
- Verify token extraction
- Check Tailwind configuration
- Compare with design system documentation

### Component Not Matching Design
- Review all states and variants
- Check spacing and typography
- Verify color values and opacity

## Resources

- [Figma API Documentation](https://www.figma.com/developers/api)
- [MCP Protocol Documentation](https://modelcontextprotocol.io)
- [Design System Documentation](./DESIGN_SYSTEM.md)
- [Component Guidelines](./COMPONENT_GUIDELINES.md)

