# CitruSS — UI CSS Kit: Implementation Plan
### Glassmorphism Dashboard & Web App (including Electron.js) Architecture

This document contains the comprehensive coding, architecture, and integration strategies for the **CitruSS** CSS UI Kit project, planned to be developed under **Trunçgil Teknoloji**. CitruSS brings the freshness and aesthetics of citrus fruits into modern digital interfaces. This document serves as a guide for implementing a *Glassmorphism* design system optimized for standalone web applications, enterprise admin panels, and **Electron.js**-based desktop software.

---

## 1. Project Vision and Design Philosophy

**CitruSS**, taking its name and spirit from the vibrancy of citrus fruits, is an interface library aiming for the highest level of visual performance. Going beyond traditional flat or material designs, it standardizes the **Frosted Glass** effect, which features layered structure, light transmittance, and a sense of depth.

### Core Architectural Principles
*   **Lightweight and Fast (Zero-Dependency):** It operates purely using raw CSS and HTML, without depending on any JavaScript library (React, Vue, etc.) or external design engines. The targeted CDN size after Gzip compression is **< 15KB**.
*   **Runtime Flexibility:** All colors, blur values, and border opacities are managed via CSS Custom Properties (Variables). This allows Light/Dark Mode or brand color changes to be triggered instantly without requiring DOM manipulation.
*   **Desktop (Electron.js) Native Experience:** By leveraging the hardware-accelerated (GPU-accelerated) layer creation capabilities of the Chromium rendering engine, it delivers an OS-level transparency feel in desktop applications without lag or stuttering.

---

## 2. Technical Stack and Build Pipeline

The compilation, compression, and distribution processes of the project will be fully automated in compliance with modern web standards:

```
+------------------+      +-------------------+      +--------------------+      +------------------+
|  Sass (SCSS)     | ---> | PostCSS           | ---> | Lightning CSS      | ---> | Distribution     |
|  Source Code     |      | Autoprefixer / v4 |      | Minify & Optimize  |      | NPM / jsDelivr   |
+------------------+      +-------------------+      +--------------------+      +------------------+
```

*   **Sass (SCSS):** The codebase is managed with modular structures (`@use`, `@forward`) using the `Dart-Sass` library.
*   **PostCSS & Autoprefixer:** Automatically adds browser and engine compatibility prefixes (such as `-webkit-backdrop-filter`) to modern CSS rules.
*   **Lightning CSS:** Minifies the CSS file, removes unused rules, and reduces color definitions to their most optimized format (e.g., using oklch or rgba instead of hex).

---

## 3. Folder and File Structure (SCSS Architecture)

To ensure the project remains sustainable, extensible, and modular, a simplified version of the 7-1 architectural model will be used:

```
citruss/
├── src/
│   ├── core/
│   │   ├── _reset.scss       # Element resets (Modern Reset / Normalize)
│   │   ├── _variables.scss   # Core CSS variables and color palette
│   │   └── _mixins.scss      # Glass effect, responsive structures, and animation functions
│   ├── components/
│   │   ├── _buttons.scss     # Radiant, semi-transparent, and glass-effect button designs
│   │   ├── _cards.scss       # Frosted Glass content, statistic, and metric cards
│   │   ├── _sidebar.scss     # Left navigation, vertical menu, and profile area components
│   │   ├── _inputs.scss      # Form elements, focus states, and error states
│   │   └── _dropdown.scss    # Layered, high z-index dropdown panels
│   ├── layout/
│   │   ├── _grid.scss        # Flexible grid and flexbox-based layout engine
│   │   └── _dashboard.scss   # Standard Admin Panel skeleton layout (Layout Wrapper)
│   └── citruss.scss          # Main entry point merging all sub-modules
├── dist/
│   ├── citruss.css           # Raw, debuggable output for development
│   └── citruss.min.css       # Optimized and minified CDN output for production
└── package.json              # Dependencies, scripts, and npm publishing configuration
```

---

## 4. Core Design System and Mathematical Modeling

The aesthetic success of the Glassmorphism effect relies on the mathematical balance between background transparency (Alpha channel), layer shadow (Box Shadow), and blur radius (Blur Radius).

Glass effect transmittance function:
$$G(c) = rgba(c_{red}, c_{green}, c_{blue}, \alpha) + \text{blur}(\beta\text{px})$$

*   The $\alpha$ (opacity) value should be kept between **0.03 and 0.20**. In overlapping layers, this accumulation increases contrast.
*   The $\beta$ (blur radius) value is optimized between **10px and 16px**. Values below 10px cause visual clutter by making background objects too clear; values above 16px increase GPU rendering costs.

### Core Variables File (`src/core/_variables.scss`)

```scss
:root {
    /* CitruSS Citrus Color Palette (Company Heritage) */
    --citruss-orange: #ff6b00;
    --citruss-tangerine: #ff9f43;
    --citruss-lemon: #feca57;
    --citruss-lime: #1dd1a1;
    
    /* Deep Dark Mode Backgrounds (Dashboard Core) */
    --citruss-bg-main: #0a0c12;
    --citruss-bg-surface: #111420;
    
    /* Glassmorphism Core Variables */
    --citruss-glass-bg: rgba(255, 255, 255, 0.03);
    --citruss-glass-border: rgba(255, 255, 255, 0.07);
    --citruss-glass-blur: 14px;
    --citruss-glass-shadow: rgba(0, 0, 0, 0.4);
    
    /* Typography and Text Colors */
    --citruss-text-main: #f8fafc;
    --citruss-text-muted: #94a3b8;
    --citruss-font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
}

/* Light Mode Alternative (Triggered at runtime with [data-theme="light"]) */
[data-theme="light"] {
    --citruss-bg-main: #f4f6fa;
    --citruss-bg-surface: #ffffff;
    --citruss-glass-bg: rgba(0, 0, 0, 0.02);
    --citruss-glass-border: rgba(0, 0, 0, 0.06);
    --citruss-glass-blur: 12px;
    --citruss-glass-shadow: rgba(0, 0, 0, 0.05);
    --citruss-text-main: #0f172a;
    --citruss-text-muted: #64748b;
}
```

---

## 5. Component Specifications

### A. Main Content Card (`src/components/_cards.scss`)

The primary container for carrying metrics, charts, and lists in admin dashboards.

```scss
.citruss-card {
    background: var(--citruss-glass-bg);
    border: 1px solid var(--citruss-glass-border);
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 8px 32px 0 var(--citruss-glass-shadow);
    color: var(--citruss-text-main);
    backdrop-filter: blur(var(--citruss-glass-blur));
    -webkit-backdrop-filter: blur(var(--citruss-glass-blur));
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), 
                border-color 0.25s ease, 
                box-shadow 0.25s ease;
    
    /* To prevent content from overflowing the glass boundaries */
    overflow: hidden; 
    
    /* Citrus glow and depth increase on hover */
    &:hover {
        transform: translateY(-4px);
        border-color: rgba(255, 159, 67, 0.3); /* Tangerine Glow */
        box-shadow: 0 12px 40px 0 rgba(255, 107, 0, 0.15);
    }
}
```

### B. Citrus Action Button (`src/components/_buttons.scss`)

A modern button integrated with glassmorphism that offers micro-interactions on click.

```scss
.citruss-btn {
    font-family: var(--citruss-font-family);
    font-weight: 600;
    font-size: 0.95rem;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s ease;
    
    &.btn-primary {
        background: linear-gradient(135deg, rgba(255, 107, 0, 0.2), rgba(255, 159, 67, 0.2));
        border: 1px solid rgba(255, 159, 67, 0.4);
        color: #ffffff;
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        
        &:hover {
            background: linear-gradient(135deg, rgba(255, 107, 0, 0.4), rgba(255, 159, 67, 0.4));
            border-color: var(--citruss-tangerine);
            box-shadow: 0 0 20px 0 rgba(255, 107, 0, 0.35);
        }
        
        &:active {
            transform: scale(0.97);
        }
    }
}
```

---

## 6. Electron.js Desktop Integration Strategy

To ensure hardware-accelerated glass effects run smoothly in desktop applications (on Chromium) and interact nicely with native OS aesthetics (Windows Acrylic/Mica or macOS Vibrancy), a specific setup is required.

### 1. Main Process Configuration (`main.js`)

When creating the Electron window, native transparency layers should be enabled and the native OS window frame (frameless) should be turned off:

```javascript
const { app, BrowserWindow } = require('electron');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1280,
        height: 800,
        frame: false,             // Frameless window for modern title bar design
        transparent: true,         // Transparency support for Windows/Linux
        vibrancy: 'under-window',  // macOS native frosted glass effect (Safari style)
        visualEffectState: 'active',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);
```

### 2. Dragging and Window Controls (CSS Layer)

In frameless windows, custom CSS rules are assigned to the left menu or top header area to allow dragging/moving the application:

```scss
.citruss-header {
    -webkit-app-region: drag; /* Enables window dragging from this region */
    height: 60px;
    background: rgba(10, 12, 18, 0.4);
    backdrop-filter: blur(10px);
    
    /* Buttons and interactive elements must be excluded from dragging */
    .citruss-btn, .search-input {
        -webkit-app-region: no-drag;
    }
}
```

---

## 7. Implementation, Testing, and Deployment Phases (Roadmap)

| Phase | Scope / Activity | Technical Output / Performance Metric |
| --- | --- | --- |
| **Phase 1: Core** | Setting up the SCSS infrastructure, defining CSS Custom Properties, modern reset rules, and the citrus color palette. | Zero external dependencies, global theme variable architecture. |
| **Phase 2: Components** | Coding the left vertical menu (Sidebar), content cards, data tables, form inputs, and chart container panels. | Hardware-accelerated layer optimizations (`will-change`). |
| **Phase 3: Desktop Integration** | Testing window dragging and analyzing performance on prototype windows (frameless and transparent) built with Electron.js. | Stable 60+ FPS performance during window moving or resizing. |
| **Phase 4: Optimization & Deployment** | Setting up build automation with PostCSS and Lightning CSS. Deployment to npm and jsDelivr networks via GitHub Actions. | Package size < 15KB after Gzip compression. |

---

## 8. Performance and Accessibility (WCAG) Standards

* **Preventing Layer Clutter (GPU Protection):** Applying `backdrop-filter: blur()` to more than 5 elements in the same Viewport can cause bottlenecks on older graphics cards. CitruSS only uses blur on main layout layers (`sidebar`, `header`, `.citruss-card`) and prefers non-effect transparent backgrounds for sub-elements inside cards.
* **WCAG Contrast Assurance (Enhancing Readability):** The biggest risk in glassmorphic designs is that white text in front of a bright background image becomes unreadable. To solve this problem, CitruSS places an invisible, very light dark shadow mask beneath the glass layer. This ensures that the text contrast ratio always stays above **4.5:1**.