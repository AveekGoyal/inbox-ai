# Hero Section Design System

## Overview
The hero section is designed to create a modern, immersive, and technologically advanced visual experience that reflects our AI-powered email assistant's innovative nature.

## Color Palette
- **Background**: Deep black (`#030303`)
- **Gradient**: 
  - From: Soft Blue (`blue-500/[0.05]`)
  - To: Soft Purple (`purple-500/[0.05]`)
- **Text Colors**:
  - Primary: White (`text-white`)
  - Secondary: Translucent White (`text-white/80`)
  - Tertiary: Muted White (`text-white/40`)

## Typography
### Badge
- Style: Uppercase, bold
- Color: White with slight transparency
- Purpose: Highlight the product category

### Main Title
- Style: Large, bold, centered
- Color: Solid white
- Layout: Split into two lines for visual impact
- Animation: Fade-up with staggered delay
from-indigo-300 via-white/90 to-rose-300

### Subtitle
- Style: Light, centered
- Size: `text-xl`
- Color: Translucent white (`text-white/80`)
- Purpose: Explain core value proposition

## Geometric Shapes
### Key Characteristics
- Animated background shapes
- Subtle floating motion
- Blurred gradient overlay
- Rounded corners
- Translucent borders

### Animation Principles
- Entrance Animation:
  - Fade-in
  - Vertical translation
  - Rotation
- Continuous Motion:
  - Subtle vertical floating
  - Infinite loop
  - Ease-in-out timing

## Responsive Considerations
- Maximum width: `max-w-4xl`
- Centered content
- Responsive text sizing
- Maintains visual hierarchy across devices

## Interaction and Accessibility
- Framer Motion for smooth animations
- Consistent motion duration (1-2 seconds)
- Accessibility-friendly transitions

## Design Tokens
```typescript
const heroDesignTokens = {
  backgroundColor: '#030303',
  gradientColors: {
    from: 'blue-500/[0.05]',
    to: 'purple-500/[0.05]'
  },
  textColors: {
    primary: 'text-white',
    secondary: 'text-white/80',
    tertiary: 'text-white/40'
  },
  animation: {
    duration: 1,
    delay: 0.5,
    ease: [0.25, 0.4, 0.25, 1]
  }
}
```

## Usage Guidelines
1. Maintain consistent color scheme
2. Preserve animation principles
3. Keep content concise and impactful
4. Ensure readability across devices

## Future Iterations
- Dark/Light mode adaptations
- More interactive geometric shapes
- Performance optimization for animations
