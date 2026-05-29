# CitruSS — UI CSS Kit: Implementation Plan
### Glassmorphism Dashboard & Web App (including Electron.js) Architecture

This document contains the comprehensive coding, architecture, and integration strategies for the **CitruSS** CSS UI Kit project, planned to be developed under **Trunçgil Teknoloji**. CitruSS brings the freshness and aesthetics of citrus fruits into modern digital interfaces. This document serves as a guide for implementing a premium, *Glassmorphism* design system inspired by Tailwind CSS, Bootstrap, and premium enterprise UI kits, optimized for standalone web applications, enterprise admin panels, and **Electron.js**-based desktop software.

---

## 1. Project Vision and Design Philosophy

**CitruSS**, taking its name and spirit from the vibrancy of citrus fruits, is an interface library aiming for the highest level of visual performance. Going beyond traditional flat or material designs, it standardizes the **Frosted Glass** effect, which features layered structure, light transmittance, and a sense of depth, combining the utility-first structural power of Tailwind with the robust pre-built component patterns of Bootstrap.

### Core Architectural Principles
*   **Lightweight and Fast (Zero-Dependency):** It operates purely using raw CSS/SCSS and HTML, without depending on any JavaScript library (React, Vue, etc.) or external design engines. The targeted CDN size after Gzip compression is **< 20KB**.
*   **Runtime Flexibility:** All colors, blur values, border opacities, and spacing metrics are managed via CSS Custom Properties (Variables). This allows Light/Dark Mode, theme switching, or brand color changes to be triggered instantly without requiring DOM manipulation.
*   **Desktop (Electron.js) Native Experience:** By leveraging the hardware-accelerated (GPU-accelerated) layer creation capabilities of the Chromium rendering engine, it delivers an OS-level transparency feel in desktop applications without lag or stuttering.
*   **Premium Component Universe:** Includes not only basic elements but also enterprise-grade, "Pro" component layouts (glowing metrical charts, floating glass modals, interactive glass drawers, and nested dropdown dashboards).

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

To support a massive catalog of premium components while maintaining a clean, modular structure, the 7-1 architectural model has been tailored:

```
citruss/
├── src/
│   ├── core/
│   │   ├── _reset.scss         # Element resets (Modern Reset / Normalize)
│   │   ├── _variables.scss     # Core CSS variables, spacing, and color palette
│   │   └── _mixins.scss        # Glass effect, glowing effects, and responsive utilities
│   ├── layout/
│   │   ├── _grid.scss          # Flexible grid and flexbox-based layout engine (Tailwind-like)
│   │   ├── _navigation.scss    # Navbar, sticky headers, and breadcrumbs
│   │   └── _dashboard.scss     # Standard & Pro Admin Panel skeleton layout (Layout Wrapper)
│   ├── components/
│   │   ├── _buttons.scss       # Radiant, semi-transparent, and glass-effect buttons & groups
│   │   ├── _cards.scss         # Frosted Glass content, statistic, and premium metric cards
│   │   ├── _sidebar.scss       # Left navigation, vertical menu, and profile area components
│   │   ├── _inputs.scss        # Form elements, floating labels, selects, toggles, and sliders
│   │   ├── _dropdown.scss      # Layered, high z-index dropdown panels
│   │   ├── _modals.scss        # Glassmorphic modals, dialogs, and slide-over drawers (Pro)
│   │   ├── _tables.scss        # Frosted glass tables with responsive data cards
│   │   ├── _badges.scss        # Glowing badges, tags, and status indicator dots
│   │   ├── _alerts.scss        # Glass notification banners, toasts, and alerts
│   │   ├── _progress.scss      # Translucent progress bars and glowing radial trackers
│   │   └── _tooltips.scss      # High-fidelity tooltip and popover overlays
│   └── citruss.scss            # Main entry point merging all sub-modules
├── dist/
│   ├── citruss.css             # Raw, debuggable output for development
│   └── citruss.min.css         # Optimized and minified CDN output for production
└── package.json                # Dependencies, scripts, and npm publishing configuration
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
    --citruss-orange-glow: rgba(255, 107, 0, 0.15);
    --citruss-tangerine: #ff9f43;
    --citruss-tangerine-glow: rgba(255, 159, 67, 0.15);
    --citruss-lemon: #feca57;
    --citruss-lime: #1dd1a1;
    --citruss-lime-glow: rgba(29, 209, 161, 0.15);
    
    /* Deep Dark Mode Backgrounds (Dashboard Core) */
    --citruss-bg-main: #0a0c12;
    --citruss-bg-surface: #111420;
    
    /* Glassmorphism Core Variables */
    --citruss-glass-bg: rgba(255, 255, 255, 0.03);
    --citruss-glass-border: rgba(255, 255, 255, 0.07);
    --citruss-glass-blur: 14px;
    --citruss-glass-shadow: rgba(0, 0, 0, 0.4);
    --citruss-glass-glow: 0 0 15px 0 rgba(255, 255, 255, 0.02);
    
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
    --citruss-glass-glow: 0 0 15px 0 rgba(0, 0, 0, 0.01);
    --citruss-text-main: #0f172a;
    --citruss-text-muted: #64748b;
}
```

---

## 5. Component Specifications (Modern & Pro UI Catalog)

### A. Core Interactive Elements

#### 1. Buttons & Button Groups (`src/components/_buttons.scss`)
Premium translucent glass action buttons with active micro-scaling and hover glow.
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
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    
    &.btn-primary {
        background: linear-gradient(135deg, rgba(255, 107, 0, 0.15), rgba(255, 159, 67, 0.15));
        border: 1px solid rgba(255, 159, 67, 0.35);
        color: #ffffff;
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        
        &:hover {
            background: linear-gradient(135deg, rgba(255, 107, 0, 0.3), rgba(255, 159, 67, 0.3));
            border-color: var(--citruss-tangerine);
            box-shadow: 0 0 25px 0 rgba(255, 107, 0, 0.35);
        }
        &:active {
            transform: scale(0.96);
        }
    }
}
```

#### 2. Advanced Form Controls & Floating Labels (`src/components/_inputs.scss`)
Tailwind-style floating label inputs wrapped in frosted glass border layouts.
```scss
.citruss-input-wrapper {
    position: relative;
    margin-bottom: 20px;
    
    .citruss-input {
        width: 100%;
        padding: 14px 16px;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid var(--citruss-glass-border);
        border-radius: 8px;
        color: var(--citruss-text-main);
        backdrop-filter: blur(8px);
        transition: all 0.25s ease;
        
        &:focus {
            outline: none;
            border-color: var(--citruss-tangerine);
            box-shadow: 0 0 15px 0 rgba(255, 159, 67, 0.25);
            background: rgba(255, 255, 255, 0.05);
        }
    }
}
```

---

### B. Containers & Overlay Panels (Pro Level)

#### 1. Pro Metric Cards (`src/components/_cards.scss`)
Bootstrap-style statistics cards with customizable visual hierarchy, glowing status dots, and subtle gradient shifts on hover.
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
    
    overflow: hidden; 
    
    &:hover {
        transform: translateY(-4px);
        border-color: rgba(255, 159, 67, 0.3); 
        box-shadow: 0 12px 40px 0 rgba(255, 107, 0, 0.15);
    }
}
```

#### 2. Floating Modals & Slide-Over Drawers (`src/components/_modals.scss`)
Premium overlay windows and drawers utilizing layered z-indexes and dynamic backdrop blur states for deep visual hierarchies.
```scss
.citruss-modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(10, 12, 18, 0.6);
    backdrop-filter: blur(8px);
    z-index: 1050;
    display: flex;
    align-items: center;
    justify-content: center;
}

.citruss-modal {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    max-width: 500px;
    width: 90%;
    padding: 32px;
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(20px);
}
```

#### 3. High z-index Dropdowns & Popovers (`src/components/_dropdown.scss`)
Tailwind UI-inspired popovers that contextually align and overlap content gracefully.

```scss
.citruss-dropdown-menu {
    position: absolute;
    z-index: 1000;
    min-width: 240px;
    background: rgba(17, 20, 32, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 8px;
    backdrop-filter: blur(16px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}
```

---

### C. Data & Feedback Components

#### 1. Responsive Frosted Glass Tables (`src/components/_tables.scss`)
A premium, scroll-friendly glass table design styled with thin borders and micro-interactions on rows.
```scss
.citruss-table-container {
    background: var(--citruss-glass-bg);
    border: 1px solid var(--citruss-glass-border);
    border-radius: 12px;
    overflow: hidden;
    backdrop-filter: blur(var(--citruss-glass-blur));
    
    .citruss-table {
        width: 100%;
        border-collapse: collapse;
        
        th {
            background: rgba(255, 255, 255, 0.02);
            color: var(--citruss-text-muted);
            padding: 16px;
            font-size: 0.85rem;
            text-transform: uppercase;
        }
        
        td {
            padding: 16px;
            border-top: 1px solid var(--citruss-glass-border);
            color: var(--citruss-text-main);
            transition: background 0.2s ease;
        }
        
        tr:hover td {
            background: rgba(255, 255, 255, 0.015);
        }
    }
}
```

#### 2. Glowing Status Badges & Indicators (`src/components/_badges.scss`)
Vibrant status indicators styling glowing dots and neon glass backgrounds for system feeds.
```scss
.citruss-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 12px;
    border-radius: 50px;
    font-size: 0.8rem;
    font-weight: 600;
    
    &.badge-success {
        background: rgba(29, 209, 161, 0.1);
        border: 1px solid rgba(29, 209, 161, 0.3);
        color: var(--citruss-lime);
        box-shadow: 0 0 10px rgba(29, 209, 161, 0.15);
    }
}
```

#### 3. Glowing Progress Tracks & Loading Skeletons (`src/components/_progress.scss`)
Pro-level loaders with subtle neon animations that bring apps to life.
```scss
.citruss-progress-bar {
    height: 8px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
    overflow: hidden;
    
    .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, var(--citruss-orange), var(--citruss-tangerine));
        box-shadow: 0 0 10px rgba(255, 107, 0, 0.5);
        border-radius: 4px;
        transition: width 0.4s ease;
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
| **Phase 2: Components** | Coding the full catalog of components (Buttons, Inputs, Cards, Sidebar, Modals, Tables, Badges, Progress Bars). | Hardware-accelerated layer optimizations (`will-change`). |
| **Phase 3: Desktop Integration** | Testing window dragging and analyzing performance on prototype windows (frameless and transparent) built with Electron.js. | Stable 60+ FPS performance during window moving or resizing. |
| **Phase 4: Optimization & Deployment** | Setting up build automation with PostCSS and Lightning CSS. Deployment to npm and jsDelivr networks via GitHub Actions. | Package size < 20KB after Gzip compression. |

---

## 8. Performance and Accessibility (WCAG) Standards

* **Preventing Layer Clutter (GPU Protection):** Applying `backdrop-filter: blur()` to more than 5 elements in the same Viewport can cause bottlenecks on older graphics cards. CitruSS only uses blur on main layout layers (`sidebar`, `header`, `.citruss-card`) and prefers non-effect transparent backgrounds for sub-elements inside cards.
* **WCAG Contrast Assurance (Enhancing Readability):** The biggest risk in glassmorphic designs is that white text in front of a bright background image becomes unreadable. To solve this problem, CitruSS places an invisible, very light dark shadow mask beneath the glass layer. This ensures that the text contrast ratio always stays above **4.5:1**.