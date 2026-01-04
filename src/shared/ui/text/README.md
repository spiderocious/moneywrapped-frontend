# Text Component

A flexible typography component for consistent text styling across the application.

## Usage

```tsx
import { Text } from "@shared/ui";

// Basic usage
<Text>Hello World</Text>

// With variant
<Text variant="heading-1">Page Title</Text>

// With color
<Text color="primary">Primary colored text</Text>

// Combined props
<Text variant="heading-2" color="error" weight="bold">
  Error Heading
</Text>

// Custom element
<Text variant="body" as="div">
  Body text as div
</Text>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `TextVariant` | `"body"` | Typography variant (heading-1, heading-2, heading-3, body, caption) |
| `weight` | `TextWeight` | variant default | Font weight (regular, medium, semibold, bold) |
| `color` | `TextColor` | `"neutral"` | Text color (primary, secondary, success, error, warning, neutral) |
| `as` | `HTMLElement` | variant default | HTML element to render as |
| `className` | `string` | `""` | Additional CSS classes |
| `children` | `ReactNode` | required | Content to display |

## Typography Scale

- **Heading 1**: Inter Bold 36px - For page titles
- **Heading 2**: Inter Bold 24px - For section headings
- **Heading 3**: Inter Semibold 20px - For subsection headings
- **Body**: Inter Regular 16px - For main content
- **Caption**: Inter Medium 14px - For captions and helper text

## Examples

See the [Component Showcase](/components/showcase) for live examples of all variants and combinations.
