# Mr Phoenix Preloader - Integration Guide

## How to Add the Preloader to Your Portfolio

### Method 1: Copy the Preloader Code (Recommended)

1. **Copy the CSS** from `preloader.html` and paste it at the TOP of the `<style>` section in your `portfolio.html` (after the `:root` variables)

2. **Copy the HTML** from `preloader.html` and paste it RIGHT AFTER the `<body>` tag in your `portfolio.html` (before the navigation)

3. **Copy the JavaScript** from `preloader.html` and paste it at the END of the `<script>` section in your `portfolio.html` (before the closing `</script>` tag)

### Method 2: Quick Integration Code

Add this RIGHT AFTER `<body>` tag in portfolio.html:

```html
<!-- Preloader -->
<div id="preloader">
    <!-- Floating particles -->
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    
    <!-- Phoenix Logo -->
    <div class="phoenix-container">
        <div class="phoenix-glow"></div>
        <div class="phoenix-icon">🔥</div>
    </div>
    
    <!-- Name -->
    <div class="name-container">
        <div class="name-text">Mr Phoenix</div>
        <div class="name-subtitle">PORTFOLIO</div>
    </div>
    
    <!-- Loading Bar -->
    <div class="loading-container">
        <div class="loading-bar-bg">
            <div class="loading-bar"></div>
        </div>
        <div class="loading-percentage">
            <span id="percentage">0</span>%<span class="loading-dots"></span>
        </div>
    </div>
</div>
```

### Customization Options

**Change the name:**
- Replace "Mr Phoenix" with your preferred name in the HTML

**Adjust loading speed:**
- Change the interval value (currently 80ms) in the JavaScript
- Change the loadingProgress animation duration (currently 2.5s) in CSS

**Change colors:**
- Modify the CSS variables in the preloader styles:
  - `--accent-violet: #8b5cf6;`
  - `--accent-cyan: #06b6d4;`
  - `--accent-orange: #f97316;`

**Change the icon:**
- Replace 🔥 with any emoji or text in the `.phoenix-icon` div
- Examples: ⚡, 🚀, 💫, 🦅, or your initials

### Features Included

✅ Animated gradient background matching your portfolio
✅ Floating phoenix icon with glow effect
✅ Smooth loading bar with gradient colors
✅ Percentage counter with dots animation
✅ Floating particles for extra flair
✅ Automatic fade-out when loading completes
✅ Fully responsive design
✅ Matches your portfolio's glassmorphism aesthetic

### Preview

The preloader will:
1. Show immediately when the page loads
2. Display the floating phoenix icon with glow
3. Show "Mr Phoenix" with loading bar
4. Count from 0% to 100%
5. Fade out smoothly
6. Reveal your portfolio

Enjoy your stunning preloader! 🔥
