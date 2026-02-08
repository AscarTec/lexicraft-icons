# Luxury Legal Icons Collection

A premium, cohesive set of legal-themed SVG icons designed for law firm applications.

## Overview

This icon system provides **80+ unique legal icons** across three distinct collections:

1. **Outline/Duotone** (40 icons) - Clean, elegant line icons with optional duotone fill
2. **3D Sculpted** (20 icons) - Premium pseudo-3D icons with gradients and depth
3. **Dynamic Animated** (20 icons) - Professional micro-animations for enhanced UX

## Usage

### Basic Usage

```tsx
import { LegalIcon } from '@/shared/icons/legal';

// Outline icon (default)
<LegalIcon name="gavel" size={24} />

// Duotone variant
<LegalIcon name="scales" size={32} variant="duotone" />

// 3D Sculpted icon
<LegalIcon name="gavel3d" size={32} variant="3d" />

// Animated icon with hover effect
<LegalIcon name="scalesAnim" size={24} motion="hover" />

// Animated icon with continuous loop
<LegalIcon name="shieldAnim" size={24} motion="loop" />
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | required | Icon name from the registry |
| `size` | `16 \| 20 \| 24 \| 28 \| 32 \| 48` | `24` | Icon size in pixels |
| `variant` | `'outline' \| 'duotone' \| '3d'` | `'outline'` | Visual style variant |
| `motion` | `'off' \| 'hover' \| 'loop'` | `'off'` | Animation behavior |
| `animated` | `boolean` | `false` | Shortcut to enable hover animation |
| `dir` | `'ltr' \| 'rtl'` | auto | Text direction for mirroring |
| `className` | `string` | `''` | Additional CSS classes |
| `title` | `string` | - | SVG title for accessibility |
| `ariaLabel` | `string` | - | ARIA label for accessibility |

## Icon Categories

- **Court**: gavel, scales, courthouse, pillar, verdict, hearing, appeal, courtCalendar
- **Documents**: contract, lawbook, doc, caseFile, signature, stamp, seal, notarize
- **Security**: shieldLaw, lock, key, fingerprint, privacy, compliance, idVerify
- **Finance**: invoice, payment, receipt
- **People**: judge, lawyer, client, handshake
- **Tools**: briefcase, timeline, legalChat, legalBell, gallery, archive

## Collections

### Outline Icons (40)
Standard line icons with consistent 1.75px stroke width. Support duotone variant with 20% opacity fill.

### 3D Sculpted Icons (20)
Premium icons with SVG gradients for metallic/glass effects. Uses CSS variables for theming:
- `--icon-metal-1`, `--icon-metal-2`
- `--icon-highlight`, `--icon-shadow`

### Animated Icons (20)
Micro-animations using CSS keyframes:
- `anim-balance`: Gentle scale tipping
- `anim-gavel`: Tap bounce
- `anim-glow`: Pulse effect
- `anim-flip`: Document corner flip
- `anim-shimmer`: Metallic sweep
- `anim-wiggle`: Alert shake
- `anim-scan`: Scanning line
- `anim-pulse`: Size pulse

## RTL Support

Directional icons automatically mirror when `dir="rtl"` or when the document direction is RTL.

Directional icons: `signature`, `timeline`, `appeal`, `fileSearch`, `key`

```tsx
// Auto-mirrors in RTL context
<LegalIcon name="timeline" />

// Explicit direction
<LegalIcon name="appeal" dir="rtl" />
```

## Accessibility

All icons include:
- `role="img"` attribute
- `<title>` element with icon name
- Support for custom `aria-label`

## Adding New Icons

1. Create the SVG component in the appropriate collection folder
2. Add metadata to `manifest.ts`
3. Register in `index.ts`

### Naming Convention
- Outline: `camelCase` (e.g., `legalChat`)
- 3D: `camelCase` + `3d` suffix (e.g., `gavel3d`)
- Animated: `camelCase` + `Anim` suffix (e.g., `scalesAnim`)

### Required Metadata
```ts
{
  name: 'iconName',
  displayName: 'Icon Display Name',
  tags: ['search', 'keywords'],
  category: 'court' | 'documents' | 'security' | 'finance' | 'people' | 'tools',
  collection: 'outline' | 'threeD' | 'animated',
  isDirectional: false, // true for icons that should mirror in RTL
  animationClass?: 'anim-gavel' // only for animated icons
}
```

## Theme Integration

Icons use CSS variables from your design system:
- `currentColor` for stroke/fill
- Semantic tokens for 3D effects
- Respects `prefers-reduced-motion` for animations

## License

Part of the Luxury Legal Icons Collection. Internal use only.