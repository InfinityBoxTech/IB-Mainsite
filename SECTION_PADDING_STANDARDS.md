# Section Padding Standards

This document defines the standard padding values for all sections across the InfinityBox website. All sections should follow these padding guidelines to maintain visual consistency.

## Standard Section Padding

All sections should use the `.section-padding` utility class for horizontal padding (px). For home page sections, vertical padding (pt and pb) should be applied separately to the parent section container using the standard pattern: `pt-12 xl:pt-16 pb-12 xl:pb-16`.

### Horizontal Padding (px)

| Breakpoint | Min Width | Padding Left/Right | Value |
|------------|-----------|-------------------|-------|
| Mobile (default) | < 640px | `1rem` | 16px |
| Small (sm) | ≥ 640px | `1.5rem` | 24px |
| Medium (md) | ≥ 768px | `2rem` | 32px |
| Large (lg) | ≥ 1024px | `2.5rem` | 40px |
| Extra Large (xl) | ≥ 1280px | `3rem` | 48px |
| 2XL | ≥ 1536px | `3.5rem` | 56px |

### Vertical Padding (pt & pb)

**Note**: For home page sections, use `pt` and `pb` separately on the parent section container.

| Breakpoint | Min Width | Padding Top | Padding Bottom | Value |
|------------|-----------|-------------|----------------|-------|
| Mobile (default) | < 1280px | `3rem` | `3rem` | 48px |
| Extra Large (xl) | ≥ 1280px | `4rem` | `4rem` | 64px |

**Standard Pattern**: `pt-12 xl:pt-16 pb-12 xl:pb-16`

> **Legacy Note**: The `.section-padding` class includes vertical padding values, but for home page sections, these should be overridden with the standard pattern above.

## Implementation

### Standard Usage Pattern

For all sections on the home page, use this pattern:

```tsx
<section className="section-padding pt-12 xl:pt-16 pb-12 xl:pb-16 bg-white">
  <div className="container mx-auto">
    {/* Section content - no py padding on child components */}
  </div>
</section>
```

**Breakdown**:
- `section-padding`: Provides horizontal padding (px) for all breakpoints
- `pt-12 xl:pt-16`: Vertical top padding (48px mobile, 64px xl+)
- `pb-12 xl:pb-16`: Vertical bottom padding (48px mobile, 64px xl+)

### CSS Definition

The `.section-padding` class is defined in `app/globals.css`:

```css
.section-padding {
  padding-top: 4rem;    /* 64px */
  padding-bottom: 4rem; /* 64px */
  padding-left: 1rem;   /* 16px */
  padding-right: 1rem;  /* 16px */
}

@media (min-width: 640px) {
  .section-padding {
    padding-top: 5rem;    /* 80px */
    padding-bottom: 5rem; /* 80px */
    padding-left: 1.5rem; /* 24px */
    padding-right: 1.5rem; /* 24px */
  }
}

@media (min-width: 768px) {
  .section-padding {
    padding-top: 6rem;    /* 96px */
    padding-bottom: 6rem; /* 96px */
    padding-left: 2rem;   /* 32px */
    padding-right: 2rem;  /* 32px */
  }
}

@media (min-width: 1024px) {
  .section-padding {
    padding-top: 7.5rem;  /* 120px */
    padding-bottom: 7.5rem; /* 120px */
    padding-left: 2.5rem;  /* 40px */
    padding-right: 2.5rem; /* 40px */
  }
}

@media (min-width: 1280px) {
  .section-padding {
    padding-top: 8rem;    /* 128px */
    padding-bottom: 8rem; /* 128px */
    padding-left: 3rem;   /* 48px */
    padding-right: 3rem;  /* 48px */
  }
}

@media (min-width: 1536px) {
  .section-padding {
    padding-top: 9rem;    /* 144px */
    padding-bottom: 9rem; /* 144px */
    padding-left: 3.5rem; /* 56px */
    padding-right: 3.5rem; /* 56px */
  }
}
```

## Implementation Pattern for Home Page Sections

### Vertical Padding Pattern

**Important**: Vertical padding (`pt` and `pb`) should be applied to the **parent section container**, not to child components.

1. **Use `pt` and `pb` separately** instead of `py` (which sets both top and bottom)
2. **Apply padding to the section element**, not to internal components
3. **Standard vertical padding values**:
   - Mobile: `pt-12 pb-12` (48px top, 48px bottom)
   - Extra Large: `xl:pt-16 xl:pb-16` (64px top, 64px bottom)

### Reference Implementation

The "Who We Serve" section (`components/sections/who-we-serve/index.tsx`) serves as the reference implementation:

```tsx
<section className='relative bg-white section-padding pt-12 xl:pt-16 pb-12 xl:pb-16 overflow-hidden'>
  {/* Section content - no py padding on child components */}
</section>
```

**Key Points**:
- `section-padding` provides horizontal padding (px) only
- `pt-12 xl:pt-16` provides vertical top padding
- `pb-12 xl:pb-16` provides vertical bottom padding
- Child components (like SectionHeader) should **not** have `py` classes

### Example: Correct vs Incorrect

**✅ Correct** - Padding on section:
```tsx
<section className="section-padding pt-12 xl:pt-16 pb-12 xl:pb-16 bg-white">
  <div className="container mx-auto">
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      {/* Content without py padding */}
    </div>
  </div>
</section>
```

**❌ Incorrect** - Padding on child component:
```tsx
<section className="section-padding bg-white">
  <div className="py-12 xl:py-16"> {/* Don't do this */}
    {/* Content */}
  </div>
</section>
```

## Important Notes

1. **Vertical Padding Location**: Always apply `pt` and `pb` to the parent `<section>` element, never to child components.

2. **Use `pt` and `pb` separately**: Use `pt-12 xl:pt-16 pb-12 xl:pb-16` instead of `py-12 xl:py-16` to have independent control over top and bottom padding.

3. **Horizontal Padding**: The `.section-padding` class handles horizontal padding (px) automatically. You can override it if needed, but the standard approach is to use `section-padding` for px.

4. **Consistency**: All sections on the home page should follow this pattern for consistent vertical spacing.

5. **Padding Bottom = Padding Top**: By default, set `pb` to match `pt` unless design requirements specify otherwise.

## Tailwind Classes Reference

For home page sections, use these Tailwind classes:

- **Horizontal padding (px)**: Handled by `section-padding` class
- **Vertical padding**: `pt-12 xl:pt-16 pb-12 xl:pb-16` (standard pattern)

**Complete Pattern**: `section-padding pt-12 xl:pt-16 pb-12 xl:pb-16`

## Last Updated

Updated based on "Who We Serve" section implementation - January 2025
- Vertical padding now applied to parent section container
- Using `pt` and `pb` separately instead of `py`

