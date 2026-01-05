# Logo Component

The MoneyWrapped logo component with support for light and dark modes.

## Features

- **Bar chart with trend arrow** design
- **Light and dark mode** variants
- **4 size options**: small (32px), medium (48px), large (64px), xlarge (96px)
- **Rounded corners** that scale with size
- **Border in dark mode** for visibility on dark backgrounds
- Pure SVG, scalable and crisp at any resolution

## Usage

```tsx
import { Logo } from "@shared/ui";

// Light mode (default)
<Logo />

// Dark mode
<Logo mode="dark" />

// Different sizes
<Logo size="small" />
<Logo size="medium" /> // default
<Logo size="large" />
<Logo size="xlarge" />

// Combined
<Logo mode="dark" size="large" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | `"light" \| "dark"` | `"light"` | Color scheme of the logo |
| `size` | `"small" \| "medium" \| "large" \| "xlarge"` | `"medium"` | Size of the logo |
| `className` | `string` | `""` | Additional CSS classes |

## Design

The logo represents financial growth and analysis:
- **Bar chart**: Represents financial data and tracking
- **Trend line**: Shows the pattern in spending/saving
- **Upward arrow**: Symbolizes growth and positive financial trajectory

### Light Mode
- White background (#FFFFFF)
- Primary blue icon (#3C83F6)
- No border

### Dark Mode
- Dark background (#1F2937)
- White icon (#FFFFFF)
- Subtle border (#374151) for definition

## Examples

See the [Component Showcase](/components/showcase) for live examples of all sizes and modes.
