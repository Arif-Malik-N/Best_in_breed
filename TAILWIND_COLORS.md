# Tailwind CSS Custom Colors & Utilities

This project includes a comprehensive custom color palette and utility classes built on top of Tailwind CSS v3.

## Setup

The project uses Tailwind CSS v3 with the following configuration:

- **Tailwind CSS**: v3.4.0+
- **PostCSS**: v8.5.6+
- **Configuration**: `tailwind.config.js`
- **CSS Entry**: `src/index.css`

## Color Palette

### Primary Colors
- **primary-50** to **primary-950**: Blue-based primary colors
- Usage: `bg-primary-500`, `text-primary-600`, `border-primary-300`

### Secondary Colors
- **secondary-50** to **secondary-950**: Gray-based secondary colors
- Usage: `bg-secondary-500`, `text-secondary-600`, `border-secondary-300`

### Semantic Colors

#### Success Colors
- **success-50** to **success-950**: Green-based success colors
- Usage: `bg-success-500`, `text-success-600`, `border-success-300`

#### Warning Colors
- **warning-50** to **warning-950**: Orange-based warning colors
- Usage: `bg-warning-500`, `text-warning-600`, `border-warning-300`

#### Error Colors
- **error-50** to **error-950**: Red-based error colors
- Usage: `bg-error-500`, `text-error-600`, `border-error-300`

#### Accent Colors
- **accent-50** to **accent-950**: Purple-based accent colors
- Usage: `bg-accent-500`, `text-accent-600`, `border-accent-300`

### Neutral Colors
- **neutral-50** to **neutral-950**: Gray-based neutral colors
- Usage: `bg-neutral-500`, `text-neutral-600`, `border-neutral-300`

### Brand Colors
- **brand-blue**: `#0052FF`
- **brand-purple**: `#6366f1`
- **brand-green**: `#10b981`
- **brand-orange**: `#f97316`
- **brand-pink**: `#ec4899`

## Component Classes

### Buttons
```html
<button class="btn-primary">Primary Button</button>
<button class="btn-secondary">Secondary Button</button>
<button class="btn-success">Success Button</button>
<button class="btn-warning">Warning Button</button>
<button class="btn-error">Error Button</button>
<button class="btn-outline">Outline Button</button>
```

### Cards
```html
<div class="card">Basic Card</div>
<div class="card-hover">Hover Card</div>
```

### Inputs
```html
<input class="input-primary" placeholder="Primary input" />
<input class="input-error" placeholder="Error input" />
```

### Badges
```html
<span class="badge-primary">Primary Badge</span>
<span class="badge-success">Success Badge</span>
<span class="badge-warning">Warning Badge</span>
<span class="badge-error">Error Badge</span>
```

### Gradients
```html
<div class="gradient-primary">Primary Gradient</div>
<div class="gradient-secondary">Secondary Gradient</div>
<div class="gradient-accent">Accent Gradient</div>
```

### Text Gradients
```html
<h1 class="text-gradient-primary">Primary Text Gradient</h1>
<h1 class="text-gradient-accent">Accent Text Gradient</h1>
```

## Animation Classes

### Fade In
```html
<div class="animate-fade-in">Fades in on load</div>
```

### Slide Up
```html
<div class="animate-slide-up">Slides up on load</div>
```

### Gentle Bounce
```html
<div class="animate-bounce-gentle">Continuously bounces</div>
```

## Custom Utilities

### Text Wrapping
```html
<p class="text-balance">Balanced text wrapping</p>
<p class="text-pretty">Pretty text wrapping</p>
```

### Custom Shadows
```html
<div class="shadow-soft">Soft shadow</div>
<div class="shadow-medium">Medium shadow</div>
<div class="shadow-strong">Strong shadow</div>
```

### Custom Spacing
```html
<div class="p-18">Custom padding (4.5rem)</div>
<div class="w-88">Custom width (22rem)</div>
<div class="h-128">Custom height (32rem)</div>
```

### Custom Border Radius
```html
<div class="rounded-4xl">Extra large border radius</div>
<div class="rounded-5xl">Huge border radius</div>
```

## Usage Examples

### Color Combinations
```html
<!-- Primary with neutral text -->
<div class="bg-primary-600 text-white">Primary background</div>

<!-- Success with dark text -->
<div class="bg-success-100 text-success-800">Success background</div>

<!-- Warning with white text -->
<div class="bg-warning-500 text-white">Warning background</div>
```

### Gradient Combinations
```html
<!-- Primary gradient with white text -->
<div class="gradient-primary text-white">Primary gradient</div>

<!-- Text gradient -->
<h1 class="text-gradient-primary">Gradient text</h1>
```

### Component Combinations
```html
<!-- Card with hover effect and primary border -->
<div class="card-hover border-primary-200">
  <h3 class="text-primary-800">Card Title</h3>
  <p class="text-neutral-600">Card content</p>
</div>

<!-- Button with custom spacing -->
<button class="btn-primary px-6 py-3">Custom Button</button>
```

## Customization

To modify colors, edit the `tailwind.config.js` file:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-custom-blue',
        // ... other shades
      },
      // ... other color palettes
    },
  },
}
```

To add new component classes, edit `src/index.css`:

```css
@layer components {
  .your-custom-class {
    @apply bg-primary-500 text-white px-4 py-2 rounded-lg;
  }
}
```

## Demo Component

Check out `src/components/TailwindTest.tsx` for a comprehensive demonstration of all available colors and utilities.

## Development

To start the development server:

```bash
npm run dev
```

To build for production:

```bash
npm run build
```

## File Structure

```
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── src/
│   ├── index.css              # Main CSS file with Tailwind imports
│   └── components/
│       └── TailwindTest.tsx   # Demo component
└── TAILWIND_COLORS.md         # This documentation
``` 