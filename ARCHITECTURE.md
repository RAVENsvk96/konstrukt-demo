# Starter Kit Architecture

> Version: 1.0  
> Status: Living document

---

# Vision

The goal of this project is not to build a single website.

The goal is to build a reusable system that allows creating high-quality websites for local businesses with minimal duplicated code while preserving a unique identity for every client.

Each website should primarily require changing:

- content
- images
- theme
- variant-specific sections

Everything else should already exist inside the Starter Kit.

---

# Core Principles

## 1. Variants over templates

A Barber website should not be a Beauty website with different colors.

Each variant may have its own:

- Hero
- Services
- Why Us
- Gallery
- Reviews
- Contact

if necessary.

---

## 2. Share behavior, not appearance

Good shared components encapsulate behavior:

- Button
- Container
- FadeIn
- SectionHeading

They should not force a specific visual identity.

---

## 3. Strong typing

Adding a new variant should produce TypeScript errors until:

- theme exists
- registry is updated
- required components exist

This guarantees consistency.

---

# Project Structure

```text
app/
components/
content/
styles/
public/
```

## components

```text
layout/
motion/
seo/
sections/
ui/
variants/
```

### layout

Contains layout primitives.

- Container
- Section
- SectionHeading

Container is responsible only for width and horizontal spacing.

### motion

Reusable animation primitives.

- FadeIn
- Stagger
- StaggerItem

Complex Hero animations can remain inside variant components.

### ui

Reusable UI primitives.

Current components:

- Button
- Card
- Logo

Button supports:

- primary
- secondary
- ghost

Future additions:

- loading
- iconOnly
- size variants

### variants

Every visual identity lives here.

```text
variants/
    beauty/
    barber/
    clinic/
    classic/
```

Variants are selected from a central registry.

---

# Variant System

Active variant:

```ts
content/site.ts
```

Registry:

```text
components/variants/index.ts
```

Pattern:

```text
site.variant
        ↓
registry
        ↓
React component
```

No component should contain dozens of:

```ts
if (variant === ...)
```

Separate files are preferred.

---

# Theme System

Themes live in:

```text
styles/themes/
```

Every variant owns exactly one theme.

Theme registry uses:

```ts
Record<SiteVariant, Theme>
```

This guarantees compile-time completeness.

Theme flow:

```text
site.variant
    ↓
theme registry
    ↓
themeToCssVariables()
    ↓
CSS variables
    ↓
Tailwind
    ↓
React components
```

---

# Design Tokens

Current tokens

## Colors

- background
- foreground
- surface
- surfaceForeground
- muted
- border
- primary
- primaryHover
- primaryForeground

## Radius

- button
- card

Future candidates:

- shadow
- typography
- spacing

Tokens are introduced only after repeated usage.

---

# Content Architecture

```text
content/
    company.ts
    site.ts

    variants/
        beauty/
        barber/
        clinic/
        classic/
```

Variant content should contain only data.

Business logic belongs in components.

---

# Rules for Shared Components

Move a component into shared UI only if:

1. Used by multiple variants.
2. Same responsibility.
3. Simpler than duplicated implementations.
4. Does not require variant-specific branching.

Avoid premature abstractions.

---

# Refactoring Rules

Every refactor should provide at least one measurable benefit:

- less duplication
- better readability
- better reuse
- better type safety
- better accessibility
- easier onboarding
- easier maintenance

If a refactor provides no measurable benefit, don't do it.

---

# Accessibility

Every interactive element should have:

- visible focus state
- keyboard support
- semantic HTML
- descriptive labels

Images should have meaningful alt text.

---

# Performance

Prefer:

- next/image
- lazy loading
- shared animation primitives
- minimal client components

Avoid unnecessary abstractions.

---

# Adding a New Variant

1. Extend SiteVariant.
2. Create theme.
3. Register theme.
4. Create variant components.
5. Add content.
6. Register components.
7. Test.
8. Run:

```bash
npm run lint
npm run build
```

---

# Checklist Before Deploy

- Build passes
- Lint passes
- Mobile checked
- Desktop checked
- Theme verified
- Metadata verified
- Images optimized
- Accessibility checked

---

# Long-term Vision

The Starter Kit should evolve into a framework for local business websites.

The desired developer workflow is:

1. Select variant.
2. Replace content.
3. Replace images.
4. Adjust theme.
5. Deploy.

No unnecessary refactoring should be required for each new project.

---

# Architecture Philosophy

Prefer simplicity over cleverness.

Prefer explicit code over configuration.

Prefer maintainability over abstraction.

Prefer reusable systems over duplicated implementations.

Every architectural decision should make the next project faster to build without making the current project harder to understand.