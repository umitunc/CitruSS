# <img src="./docs/logos/citruss_logo_transparent.png" alt="CitruSS UI Logo" height="60" align="middle" style="vertical-align: middle; margin-right: 10px;"> CitruSS UI

> **Vibrant Frosted Glassmorphic UI Kit inspired by citrus fruits.**  
> A modern, high-performance, and zero-dependency glassmorphic (frosted glass) UI library inspired by the colors and freshness of citrus fruits.

---

## 🌟 Key Features

- **✨ High-Fidelity Frosted Glassmorphism:** Eye-catching, modern, and premium designs using carefully curated HSL color palettes and harmonious gradients.
- **🧱 20+ Ready-to-Use Components:** Includes Accordion, Alerts, Avatars, Badges, Buttons, Cards, Carousel, Context Menu, Drawer, Dropdown, Modals, Wizard, and many more.
- **⚡ Zero-Dependency Interactive JS:** Lightweight, vanilla JavaScript logic for interactive components. Works framework-agnostically (suitable for Electron, React, Vue, or vanilla HTML projects).
- **🎨 Modular Sass Architecture:** Fully customizable variables (`_variables.scss`), robust mixins, and clean reset styles.
- **📚 Storybook Integration:** An integrated Storybook environment to preview, test, and document HTML/CSS components in real-time.
- **👁️ BackstopJS Visual Regression Testing:** Automated visual testing framework to catch unexpected UI and layout regressions.
- **🛡️ Stylelint Standards:** Enforces CSS/SCSS coding quality using Recess CSS property sorting and modern Sass standards.

---

## 📂 Project Structure

```text
CitruSS/
├── .storybook/            # Storybook configuration files
├── backstop_data/         # BackstopJS visual regression test references and reports
├── docs/                  # Project documentation and planning assets
├── src/                   # Main source code
│   ├── citruss.scss       # Main stylesheet combining all Sass modules
│   ├── core/              # Core Sass files (Variables, Mixins, Reset)
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   └── _reset.scss
│   ├── components/        # SCSS component styles and Storybook stories
│   │   ├── _buttons.scss
│   │   ├── _cards.scss
│   │   ├── _modals.scss
│   │   ├── *.stories.js   # Storybook documentation stories
│   │   └── ...
│   └── js/                # Interactive Vanilla JS logic
│       ├── _dropdown.js
│       ├── _dialog.js
│       ├── index.js       # Main JS entry point exporting all components
│       └── ...
├── backstop.json          # BackstopJS configuration
├── package.json           # Package dependencies and npm scripts
├── stylelintrc.json       # SCSS/CSS linting rules
└── vite.config.js         # Vite bundler configuration
```

---

## 🚀 Getting Started

### Prerequisites

You need **Node.js** (v18 or higher) installed on your system to run the development environment.

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd CitruSS
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### 🌐 Direct Integration & CDN

If you prefer to use the library instantly without installing any local packages, you can load CitruSS directly from the jsDelivr CDN:

```html
<!-- CitruSS Vibrant Frosted Glassmorphism Stylesheet -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/umitunc/CitruSS@1.0.0/dist/citruss.css" />

<!-- CitruSS Interactive Vanilla JS Companion Script -->
<script src="https://cdn.jsdelivr.net/gh/umitunc/CitruSS@1.0.0/dist/citruss.min.js"></script>

```


---

## 🛠️ Available Scripts

Here are the standard npm scripts provided in this repository to accelerate your workflow:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Boots up the local Vite development server. |
| `npm run build` | Builds and bundles production-ready CSS and JS assets inside `dist/`. |
| `npm run storybook` | Starts the Storybook documentation server (Default port: `6006`). |
| `npm run build-storybook`| Exports the Storybook documentation as a static site. |
| `npm run lint:css` | Lints the SCSS code and automatically fixes styling issues using `stylelint`. |
| `npm run test:ref` | Generates visual regression references (base screenshots) for testing. |
| `npm run test:test` | Runs automated visual tests against the generated reference screenshots. |

---

## 🎨 Design System Philosophy

The CitruSS design system is tailored around vibrant citrus themes:
- 🍊 **Orange:** Warm, energetic, and engaging calls to action.
- 🍋 **Lemon:** Sharp, bright alerts and highlights.
- 🍏 **Lime:** Refreshing success cues and confirmations.
- 🧊 **Frosted Glass:** Soft backdrop filters (`backdrop-filter: blur()`), ultra-thin white borders, and smooth ambient shadows creating three-dimensional depth.

### Quick Example

To use the glassmorphic card component in your markup:

```html
<!-- HTML Structure -->
<div class="citruss-card glass">
  <div class="citruss-card-header">
    <h3>🍋 Welcome to CitruSS!</h3>
  </div>
  <div class="citruss-card-body">
    <p>A fresh take on web aesthetics with high-quality frosted glass elements.</p>
    <button class="citruss-btn btn-orange">Explore More</button>
  </div>
</div>
```

---

## 📱 App Screen Layout (Optional)

For web applications and desktop shells (such as those built with **Electron.js**), maintaining a window-bound layout is a core UX best practice. 

The `.citruss-app-layout` classes provide an **optional, opt-in layout structure** that locks the viewport height (`100vh`), prevents document body-level scrolling, and delegates independent scrolling to inner content areas:

```html
<div class="citruss-app-layout">
  <!-- Fixed Header -->
  <header class="layout-header">
    <div class="citruss-navbar">...</div>
  </header>

  <!-- Content Wrapper -->
  <div class="layout-content-wrapper">
    <!-- Optional Sidebar -->
    <aside class="layout-sidebar">...</aside>

    <!-- Main Scrollable Content -->
    <main class="layout-content">
      <!-- Your scrollable view/cards here -->
    </main>
  </div>

  <!-- Fixed Footer -->
  <footer class="layout-footer">...</footer>
</div>
```

*Note: This layout is completely optional and customizable. Use it if your application demands viewport optimization and window-level scroll suppression.*

---

## 🌉 Bootstrap 4 & Admin Theme Bridge

If you are migrating or styling an existing Bootstrap 4 app (including custom admin dashboards, datagrids, and select2 structures), you can load the built-in Bootstrap bridge. It maps original classes (`.card`, `.btn`, `.form-control`, `.dropdown-menu`, `.modal-content`, `.table-sm`, etc.) directly to CitruSS variables and styles.

To load the bridge, load the core CitruSS styles first, then configure your stylesheets:
```html
<!-- Load CitruSS System Assets -->
<link rel="stylesheet" href="path/to/dist/citruss.css" />

<!-- All Bootstrap 4 elements (.btn, .card, etc.) will automatically adopt the Citrus aesthetic -->
```

---

## 🎛️ Customizing Glassmorphic Transparency (CSS Variable Overrides)

You can easily adjust the intensity of the frosted glass blur, transparency, saturation, and contrast. Simply override the following CSS variables at the `:root` level or within a custom scope (such as inside a specific selector or theme definition):

```css
:root {
  /* Transparency value of the background glass layer (Default: 3.5% for Dark mode) */
  --citruss-glass-opacity: 5%;
  
  /* Background blur radius (Default: 24px) */
  --citruss-glass-blur: 30px;
  
  /* Glass Saturation (Default: 180%) */
  --citruss-glass-saturate: 200%;
  
  /* Glass Contrast (Default: 100%) */
  --citruss-glass-contrast: 105%;
  
  /* Glass Border Color (Default: rgba(255, 255, 255, 0.08)) */
  --citruss-glass-border: rgba(255, 255, 255, 0.12);
  
  /* Glass Hover Border Color (Default: rgba(255, 255, 255, 0.2)) */
  --citruss-glass-border-hover: rgba(255, 255, 255, 0.25);
}

/* Light mode overrides */
[data-theme="light"] {
  /* Default light opacity is 45% for high readability */
  --citruss-glass-opacity: 35%;
  --citruss-glass-blur: 20px;
}
```

### Component-Specific Override Example
If you only want a specific card to be highly transparent:
```css
.my-custom-card {
  --citruss-glass-opacity: 1%; /* Extremely transparent */
  --citruss-glass-blur: 10px;  /* Minimal blur */
}
```

---

## 📝 License

This project is licensed under the **MIT** License. See the `package.json` file for more details.

---
*Crafted with love and fresh citrus vibes by Truncgil Technology.* 🍊🍋
