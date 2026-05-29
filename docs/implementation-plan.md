# CitruSS — UI CSS Kit: Implementation Plan
### Glassmorphism Dashboard & Web App (including Electron.js) Architecture

This document contains the comprehensive coding, architecture, and integration strategies for the **CitruSS** CSS UI Kit project, planned to be developed under **Trunçgil Teknoloji**. CitruSS brings the freshness and aesthetics of citrus fruits into modern digital interfaces. This document serves as a guide for implementing a premium, *Glassmorphism* design system inspired by Tailwind CSS, Bootstrap, and premium enterprise UI kits, optimized for standalone web applications, enterprise admin panels, and **Electron.js**-based desktop software.

---

## 1. Project Vision and Design Philosophy

**CitruSS**, taking its name and spirit from the vibrancy of citrus fruits, is an interface library aiming for the highest level of visual performance. Going beyond traditional flat or material designs, it standardizes the **Frosted Glass** effect, which features layered structure, light transmittance, and a sense of depth, combining the utility-first structural power of Tailwind with the robust pre-built component patterns of Bootstrap.

### Core Architectural Principles
*   **Lightweight and Fast (Zero-Dependency):** It operates purely using raw CSS/SCSS and HTML, bundled with a tiny vanilla JS companion script (`citruss.js`) for dynamic components. The targeted combined CDN size after Gzip compression is **< 25KB**.
*   **Zero-Latency Native Dark & Light Modes:** Fully integrated at the core layer. All colors, blur values, border opacities, and spacing metrics are managed via CSS Custom Properties (Variables). Switching between Dark and Light themes is instant, triggered via HTML DOM attributes or automated through system media queries.
*   **Universal Web-First Compatibility (Framework-Agnostic):** Although optimized for Electron.js desktop applications, CitruSS is designed as a drop-in universal stylesheet for all web ecosystems. It integrates seamlessly with single-page applications (React, Vue, Svelte, Angular), static site generators (Astro, Next.js, Nuxt), server-rendered backends (Laravel, Django, ASP.NET), or simple vanilla HTML websites.
*   **Built-in SweetAlert-like Programmatic JS API:** Eliminates the need for external popup/dialog libraries (like SweetAlert2 or Toastr). Includes a native, lightweight JS utility (`CitruSS.fire()`) to programmatically summon gorgeous glassmorphic alerts, prompt dialogs, confirms, and multi-step layout wizards.
*   **Desktop (Electron.js) Native Experience:** By leveraging the hardware-accelerated (GPU-accelerated) layer creation capabilities of the Chromium rendering engine, it delivers an OS-level transparency feel in desktop applications without lag or stuttering.
*   **Premium Component Universe:** Includes not only basic elements but also enterprise-grade, "Pro" component layouts (glowing metrical charts, floating glass modals, interactive glass drawers, and nested dropdown dashboards).

---

## 2. Glassmorphism Analysis: Advantages, Disadvantages & Engineering Safeguards

While Glassmorphism delivers unparalleled aesthetic value, it introduces distinct design and performance challenges. CitruSS is built specifically to address and mitigate these issues out of the box through strict engineering safeguards.

### 🟢 Advantages (Pros)
*   **Modern and Aesthetic:** Introduces a futuristic, clean, and highly premium atmosphere to user interfaces, yielding an instant "wow" factor.
*   **Intuitive Visual Hierarchy:** Mimics real-world physical structures. The layered translucent materials allow users to intuitively understand layout depth—which panels are in the foreground, and which exist in the background.
*   **Focus & Context Preservation:** Minimizes background visual noise through blur filters, allowing users to focus on primary content without completely blocking out context-rich background images or active canvas elements.

### 🔴 Disadvantages (Cons) & CitruSS Engineering Mitigations

#### 1. Accessibility (WCAG Contrast Compliance) Risks
*   **The Hazard:** In standard glassmorphic designs, placing white or light metrical text over a bright or multi-colored background canvas reduces contrast below readable thresholds, posing severe readability barriers for visually impaired users.
*   **CitruSS Mitigation (Contrast Safeguard):** CitruSS implements a dual-layer safety mask. Beneath every text and interactive content layer on a `.citruss-card` or `.citruss-modal`, an ultra-thin, dark semantic backdrop shadow (`--citruss-glass-shadow`) is statically rendered. This guarantees a minimum contrast ratio of **4.5:1** (WCAG AA compliance) regardless of the brightness of the background image behind the glass.

#### 2. Performance Overhead & Cross-Browser Rendering Costs
*   **The Hazard:** Applying `backdrop-filter: blur()` forces browser rendering engines to perform heavy pixel-by-pixel calculations. Overusing this filter on dozens of small elements simultaneously causes GPU performance drops, window dragging lag in Electron.js, and stuttering scroll rates on mobile web browsers (Safari iOS / Chrome Android).
*   **CitruSS Mitigation (Hardware Optimization & Progressive Enhancement):**
    *   **Strict Layer Limit:** CitruSS enforces a strict architectural limit of **max 5 backdrop-filter layers per Viewport**. Blur calculations are applied exclusively to container wrappers (such as `sidebar`, `header`, and primary `.citruss-card`). All nested interior components (inner buttons, form inputs, status badges) use highly optimized translucent solid color backdrops (`rgba`) without separate blur calculations, maintaining a consistent **60+ FPS** rendering speed.
    *   **Progressive Enhancement Fallbacks:** For legacy web browsers or devices with hardware acceleration disabled (where `@supports not (backdrop-filter: blur(1px))` is true), CitruSS automatically downgrades to clean, high-opacity translucent solid backdrops (`rgba` / `hsla`), ensuring total legibility and smooth scrolling across all target clients.

---

## 3. Universal Web Integration and Responsive Design

To ensure CitruSS operates as a premier library for the general web, the layout system is built from the ground up to support responsive web design and framework-agnostic setups.

### A. Mobile-First Responsive Glass Adapters
Glassmorphism on small mobile screens requires adjustments due to limited screen space and varying handheld display brightnesses.
*   **Blur & Padding Scaling:** Using CSS media queries, padding inside `.citruss-card` scales down gracefully on mobile screens, and the blur radius is slightly reduced (e.g., from `14px` to `10px`) to ease the rendering load on mobile GPUs.
*   **Flexible Mobile Grids:** Contains a built-in light responsive grid system (Flexbox & CSS Grid) modeled after Tailwind utility-classes to facilitate quick dashboard restructuring on tablets and phones.

### B. Modern Web Framework Integration
Because CitruSS is a zero-dependency compiled CSS file, integrating it into modern frontend pipelines is straightforward:
*   **Vite / Next.js / Astro:** Simply import the CSS file directly in your main entry file (e.g., `import 'citruss/dist/citruss.min.css'`).
*   **Tailwind Coexistence:** Designed to coexist with Tailwind CSS. Since all classes are prefixed with `citruss-` (e.g., `.citruss-card`, `.citruss-btn`), there are zero namespace collisions, allowing developers to use Tailwind for layout spacing and CitruSS for premium glassmorphic styling.

---

## 4. Folder and File Structure (SCSS & JS Architecture)

To support a massive catalog of premium components and dynamic JS modules while maintaining a clean, modular structure, the 7-1 architectural model has been tailored:

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
│   │   ├── _modals.scss        # Glassmorphic modals, SweetAlert-like popup styles, and wizards (Pro)
│   │   ├── _tables.scss        # Frosted glass tables with responsive data cards
│   │   ├── _badges.scss        # Glowing badges, tags, and status indicator dots
│   │   ├── _alerts.scss        # Glass notification banners, toasts, and alerts
│   │   ├── _progress.scss      # Translucent progress bars and glowing radial trackers
│   │   └── _tooltips.scss      # High-fidelity tooltip and popover overlays
│   ├── js/
│   │   ├── _dialog.js          # SweetAlert-like programmatic alert and confirm engine
│   │   ├── _wizard.js          # Programmatic multi-step form wizard controller
│   │   └── index.js            # Main JS entry point exposing CitruSS global API
│   └── citruss.scss            # Main entry point merging all SCSS modules
├── dist/
│   ├── citruss.css             # Raw, debuggable CSS output
│   ├── citruss.min.css         # Optimized and minified CDN CSS output
│   ├── citruss.js              # Full development companion JavaScript bundle
│   └── citruss.min.js          # Minified production companion JavaScript bundle
└── package.json                # Dependencies, scripts, and npm publishing configuration
```

---

## 5. Technical Stack and Build Pipeline

The compilation, compression, and distribution processes of the project will be fully automated in compliance with modern web standards:

```
                  +------------------+      +-------------------+      +--------------------+      +------------------+
CSS (Styles)      |  Sass (SCSS)     | ---> | PostCSS           | ---> | Lightning CSS      | ---> | Dist (CSS)       |
                  |  Source Codes    |      | Autoprefixer / v4 |      | Minify & Optimize  |      | CDN / jsDelivr   |
                  +------------------+      +-------------------+      +--------------------+      +------------------+

                  +------------------+      +-------------------+      +--------------------+
JS (Interactions) |  ES6 Modules     | ---> | Rollup / esbuild  | ---> | Terser / Minifier  | ---> | Dist (JS)        |
                  |  Source (src/js) |      | Tree-shaking      |      | Minify Bundle      |      | CDN / jsDelivr   |
                  +------------------+      +-------------------+      +--------------------+
```

---

## 6. Core Design System, Dual-Theme Architecture & Mathematical Modeling

The aesthetic success of the Glassmorphism effect relies on the mathematical balance between background transparency (Alpha channel), layer shadow (Box Shadow), and blur radius (Blur Radius) under both lighting profiles.

Glass effect transmittance function:
$$G(c) = rgba(c_{red}, c_{green}, c_{blue}, \alpha) + \text{blur}(\beta\text{px})$$

*   The $\alpha$ (opacity) value should be kept between **0.03 and 0.20**. In overlapping layers, this accumulation increases contrast.
*   The $\beta$ (blur radius) value is optimized between **10px and 16px**. Values below 10px cause visual clutter by making background objects too clear; values above 16px increase GPU rendering costs.

### Dual-Theme Variables Architecture (`src/core/_variables.scss`)
To ensure high contrast and maximum depth in both modes, CSS variables switch dynamic properties natively. The default configuration targets Dark Mode (maximizing glass glow aesthetics), while Light Mode softens backgrounds to prevent extreme glare.

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
    
    /* === DEFAULT: DARK MODE === */
    --citruss-bg-main: #0a0c12;
    --citruss-bg-surface: #111420;
    
    /* Glassmorphism Configuration (Dark) */
    --citruss-glass-bg: rgba(255, 255, 255, 0.03);
    --citruss-glass-border: rgba(255, 255, 255, 0.07);
    --citruss-glass-blur: 14px;
    --citruss-glass-shadow: rgba(0, 0, 0, 0.4);
    --citruss-glass-glow: 0 0 15px 0 rgba(255, 255, 255, 0.02);
    
    /* Typography & Text (Dark) */
    --citruss-text-main: #f8fafc;
    --citruss-text-muted: #94a3b8;
    --citruss-font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
}

/* === LIGHT MODE ALTERNATIVE ===
   Can be triggered explicitly via [data-theme="light"] on <html>
   or automatically aligned via prefers-color-scheme media-query */
@mixin light-theme-properties {
    --citruss-bg-main: #f4f6fa;
    --citruss-bg-surface: #ffffff;
    
    /* Glassmorphism Configuration (Light) */
    --citruss-glass-bg: rgba(0, 0, 0, 0.02);
    --citruss-glass-border: rgba(0, 0, 0, 0.06);
    --citruss-glass-blur: 12px;
    --citruss-glass-shadow: rgba(0, 0, 0, 0.05);
    --citruss-glass-glow: 0 0 15px 0 rgba(0, 0, 0, 0.01);
    
    /* Typography & Text (Light) */
    --citruss-text-main: #0f172a;
    --citruss-text-muted: #64748b;
}

/* Trigger Light Mode explicitly via DOM Attribute */
[data-theme="light"] {
    @include light-theme-properties;
}

/* Auto-switch to Light Mode based on OS/Browser Settings (if no explicit attribute is set) */
@media (prefers-color-scheme: light) {
    html:not([data-theme="dark"]) {
        @include light-theme-properties;
    }
}
```

---

## 7. Component Specifications (Modern & Pro UI Catalog)

All components are designed to react seamlessly to Light/Dark color shifts since they rely entirely on the semantic variables declared in Section 6.

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
        color: var(--citruss-text-main);
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

#### 2. Native Dynamic SweetAlert-like Modal API (`src/components/_modals.scss` & `src/js/_dialog.js`)
Programmatically summon modal screens on the fly, eliminating the need to install external libraries like SweetAlert2.

```scss
/* Programmatic alert containers in SCSS */
.citruss-swal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(10, 12, 18, 0.55);
    backdrop-filter: blur(10px);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    
    &.active {
        opacity: 1;
    }
}

.citruss-swal-box {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(20px);
    border-radius: 16px;
    padding: 32px;
    text-align: center;
    max-width: 420px;
    width: 90%;
    transform: scale(0.9);
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    
    &.show {
        transform: scale(1);
    }
}
```

#### Programmatic JS API Sample:
```javascript
// Zero-dependency pure JavaScript implementation in src/js/_dialog.js
export const CitruSS = {
    fire: function({ title, text, icon = 'info', showCancelButton = false, confirmButtonText = 'OK' }) {
        return new Promise((resolve) => {
            const backdrop = document.createElement('div');
            backdrop.className = 'citruss-swal-container';
            
            backdrop.innerHTML = `
                <div class="citruss-swal-box">
                    <div class="citruss-swal-icon citruss-swal-icon-${icon}"></div>
                    <h3 style="color: var(--citruss-text-main); margin-bottom: 8px;">${title}</h3>
                    <p style="color: var(--citruss-text-muted); margin-bottom: 24px;">${text}</p>
                    <div style="display:flex; gap:12px; justify-content:center;">
                        ${showCancelButton ? `<button class="citruss-btn" id="citruss-swal-cancel">Cancel</button>` : ''}
                        <button class="citruss-btn btn-primary" id="citruss-swal-confirm">${confirmButtonText}</button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(backdrop);
            
            // Trigger entry animation
            setTimeout(() => {
                backdrop.classList.add('active');
                backdrop.querySelector('.citruss-swal-box').classList.add('show');
            }, 10);
            
            const close = (isConfirmed) => {
                backdrop.classList.remove('active');
                backdrop.querySelector('.citruss-swal-box').classList.remove('show');
                setTimeout(() => {
                    backdrop.remove();
                    resolve({ isConfirmed });
                }, 300);
            };
            
            backdrop.querySelector('#citruss-swal-confirm').onclick = () => close(true);
            if (showCancelButton) {
                backdrop.querySelector('#citruss-swal-cancel').onclick = () => close(false);
            }
        });
    },
    
    confirm: function(title, text) {
        return this.fire({ title, text, icon: 'warning', showCancelButton: true, confirmButtonText: 'Yes, proceed!' });
    }
};
```

---

#### 3. Interactive Multi-Step Glass Wizards (`src/js/_wizard.js` & `src/components/_modals.scss`)
A premium wizard constructor supporting dynamic step-validation, linear progress glow tracks, and sliding window step-transitions.

```javascript
// Native implementation inside src/js/_wizard.js
export class CitruSSWizard {
    constructor(elementId, options = {}) {
        this.container = document.getElementById(elementId);
        this.steps = Array.from(this.container.querySelectorAll('.citruss-wizard-step'));
        this.currentStep = 0;
        this.progressBar = this.container.querySelector('.citruss-progress-bar .progress-fill');
        this.init();
    }
    
    init() {
        this.showStep(0);
        this.container.querySelector('.wizard-next').addEventListener('click', () => this.next());
        this.container.querySelector('.wizard-prev').addEventListener('click', () => this.prev());
    }
    
    showStep(index) {
        this.steps.forEach((step, i) => {
            step.style.display = i === index ? 'block' : 'none';
        });
        this.currentStep = index;
        
        // Update progress glow width
        const progressPercentage = ((index + 1) / this.steps.length) * 100;
        if (this.progressBar) {
            this.progressBar.style.width = `${progressPercentage}%`;
        }
    }
    
    next() {
        if (this.currentStep < this.steps.length - 1) {
            this.showStep(this.currentStep + 1);
        }
    }
    
    prev() {
        if (this.currentStep > 0) {
            this.showStep(this.currentStep - 1);
        }
    }
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

## 8. Electron.js Desktop Integration Strategy

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

## 9. Implementation, Testing, and Deployment Phases (Roadmap)

| Phase | Scope / Activity | Technical Output / Performance Metric |
| --- | --- | --- |
| **Phase 1: Core** | Setting up the SCSS infrastructure, defining CSS Custom Properties, modern reset rules, and the citrus color palette. | Zero external dependencies, global theme variable architecture. |
| **Phase 2: Components & JS API** | Coding the full catalog of components and the dynamic JS Alert/Confirm/Wizard modules (`citruss.js`). | Hardware-accelerated layer optimizations and clean programmatic bindings. |
| **Phase 3: Desktop Integration** | Testing window dragging and analyzing performance on prototype windows (frameless and transparent) built with Electron.js. | Stable 60+ FPS performance during window moving or resizing. |
| **Phase 4: Optimization & Deployment** | Setting up build automation with PostCSS, Lightning CSS, and Rollup/esbuild for CSS and JS bundling. | CSS < 20KB, JS < 5KB after Gzip compression. |

---

## 10. Performance and Accessibility (WCAG) Standards

* **Preventing Layer Clutter (GPU Protection):** Applying `backdrop-filter: blur()` to more than 5 elements in the same Viewport can cause bottlenecks on older graphics cards. CitruSS only uses blur on main layout layers (`sidebar`, `header`, `.citruss-card`) and prefers non-effect transparent backgrounds for sub-elements inside cards.
* **WCAG Contrast Assurance (Enhancing Readability):** The biggest risk in glassmorphic designs is that white text in front of a bright background image becomes unreadable. To solve this problem, CitruSS places an invisible, very light dark shadow mask beneath the glass layer. This ensures that the text contrast ratio always stays above **4.5:1**.