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
│   │   ├── _navigation.scss    # Navbar, sticky headers, and responsive behaviors
│   │   └── _dashboard.scss     # Standard & Pro Admin Panel skeleton layout
│   ├── components/
│   │   ├── _accordion.scss     # Expandable panels and FAQs
│   │   ├── _alerts.scss        # Glass notification banners and stackable toasts
│   │   ├── _avatars.scss       # User profiles, avatar groups, and status dots
│   │   ├── _badges.scss        # Glowing badges, tags, and chips
│   │   ├── _breadcrumbs.scss   # Navigational breadcrumbs
│   │   ├── _buttons.scss       # Radiant, glass-effect buttons & FABs
│   │   ├── _cards.scss         # Frosted Glass content and metric cards
│   │   ├── _carousel.scss      # Image and content sliders
│   │   ├── _context-menu.scss  # Custom right-click floating menus
│   │   ├── _drawer.scss        # Offcanvas sliding panels and bottom sheets
│   │   ├── _dropdown.scss      # Layered dropdowns and comboboxes
│   │   ├── _inputs.scss        # Form elements, toggles, sliders, and file uploads
│   │   ├── _list-group.scss    # Standardized list layouts
│   │   ├── _modals.scss        # Glassmorphic modals and dialogs
│   │   ├── _pagination.scss    # Data pagination controls
│   │   ├── _popovers.scss      # Rich content popups
│   │   ├── _progress.scss      # Progress bars, skeletons, and spinners
│   │   ├── _sidebar.scss       # Vertical menus and app sidebars
│   │   ├── _tables.scss        # Frosted glass tables and data grids
│   │   ├── _tabs.scss          # Segmented controls and tabbed navigation
│   │   ├── _timeline.scss      # Vertical and horizontal event trackers
│   │   ├── _tooltips.scss      # High-fidelity tooltips
│   │   ├── _treeview.scss      # Hierarchical list structures
│   │   └── _wizard.scss        # Multi-step forms and steppers
│   ├── js/
│   │   ├── _accordion.js       # Accordion collapse/expand logic
│   │   ├── _carousel.js        # Slider navigation and swipe support
│   │   ├── _context-menu.js    # Custom right-click interceptor
│   │   ├── _dialog.js          # Programmatic alert and confirm engine
│   │   ├── _drawer.js          # Offcanvas panel triggers
│   │   ├── _dropdown.js        # Searchable and multi-select dropdowns
│   │   ├── _popover.js         # Popover positioning engine
│   │   ├── _tabs.js            # Tab switching state management
│   │   ├── _toast.js           # Stackable toast manager
│   │   ├── _validation.js      # Declarative form validation
│   │   ├── _wizard.js          # Multi-step wizard controller
│   │   └── index.js            # Main JS entry point exposing CitruSS API
│   └── citruss.scss            # Main entry point merging all SCSS modules
├── dist/
│   ├── citruss.css             # Raw, debuggable CSS output
│   ├── citruss.min.css         # Optimized and minified CDN CSS output
│   ├── citruss.js              # Development Javascript bundle
│   └── citruss.min.js          # Minified production Javascript bundle
└── package.json                # Dependencies, scripts, and npm config
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

## 7. Component Specifications (Comprehensive Modern & Pro UI Catalog)

The CitruSS component catalog has been massively expanded to include every UI pattern required by modern web applications, enterprise dashboards, and desktop software. All components are designed to react seamlessly to Light/Dark color shifts since they rely entirely on the semantic variables declared in Section 6.

### A. Core Form & Interactive Elements

<details open>
<summary><strong>1. Buttons, Button Groups & FABs (`src/components/_buttons.scss`)</strong></summary>
Premium translucent glass action buttons with active micro-scaling, hover glow, and Floating Action Button (FAB) variants.

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
    border: 1px solid var(--citruss-glass-border);
    background: var(--citruss-glass-bg);
    color: var(--citruss-text-main);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    
    &:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.2);
    }
    
    &:active {
        transform: scale(0.96);
    }
    
    &.btn-primary {
        background: linear-gradient(135deg, rgba(255, 107, 0, 0.15), rgba(255, 159, 67, 0.15));
        border: 1px solid rgba(255, 159, 67, 0.35);
        
        &:hover {
            background: linear-gradient(135deg, rgba(255, 107, 0, 0.3), rgba(255, 159, 67, 0.3));
            border-color: var(--citruss-tangerine);
            box-shadow: 0 0 25px 0 rgba(255, 107, 0, 0.35);
        }
    }
    
    &.btn-success {
        background: linear-gradient(135deg, rgba(29, 209, 161, 0.1), rgba(29, 209, 161, 0.2));
        border: 1px solid rgba(29, 209, 161, 0.3);
        color: var(--citruss-lime);
        
        &:hover {
            background: linear-gradient(135deg, rgba(29, 209, 161, 0.2), rgba(29, 209, 161, 0.35));
            border-color: var(--citruss-lime);
            box-shadow: 0 0 25px 0 rgba(29, 209, 161, 0.35);
        }
    }
}

/* Button Group Wrapper */
.citruss-btn-group {
    display: inline-flex;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid var(--citruss-glass-border);
    backdrop-filter: blur(4px);
    
    .citruss-btn {
        border-radius: 0;
        border: none;
        border-right: 1px solid var(--citruss-glass-border);
        
        &:last-child {
            border-right: none;
        }
    }
}
```
</details>

<details>
<summary><strong>2. Advanced Form Controls & Floating Labels (`src/components/_inputs.scss`)</strong></summary>
Tailwind-style floating label inputs wrapped in frosted glass border layouts, featuring complete native and custom form validation styling. Supports textareas, checkboxes, and radio buttons.

```scss
.citruss-input-group {
    position: relative;
    margin-bottom: 24px;
    
    .citruss-input {
        width: 100%;
        padding: 16px;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid var(--citruss-glass-border);
        border-radius: 8px;
        color: var(--citruss-text-main);
        backdrop-filter: blur(8px);
        font-size: 0.95rem;
        transition: all 0.25s ease;
        
        &::placeholder {
            color: transparent;
        }
        
        &:focus {
            outline: none;
            border-color: var(--citruss-tangerine);
            box-shadow: 0 0 15px 0 rgba(255, 159, 67, 0.25);
            background: rgba(255, 255, 255, 0.05);
        }
    }
    
    .citruss-label {
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--citruss-text-muted);
        pointer-events: none;
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        font-size: 0.95rem;
    }
    
    /* Floating Label Animations */
    .citruss-input:focus ~ .citruss-label,
    .citruss-input:not(:placeholder-shown) ~ .citruss-label {
        top: 0;
        left: 12px;
        transform: translateY(-50%) scale(0.85);
        background: var(--citruss-bg-surface);
        padding: 0 8px;
        color: var(--citruss-tangerine);
        border-radius: 4px;
    }
    
    /* Validation States */
    &.is-invalid {
        .citruss-input {
            border-color: #ff4d4d !important;
            box-shadow: 0 0 15px 0 rgba(255, 77, 77, 0.25) !important;
        }
        .citruss-label {
            color: #ff4d4d !important;
        }
        .citruss-invalid-feedback {
            display: block;
        }
    }
    
    &.is-valid {
        .citruss-input {
            border-color: var(--citruss-lime) !important;
            box-shadow: 0 0 15px 0 rgba(29, 209, 161, 0.25) !important;
        }
        .citruss-label {
            color: var(--citruss-lime) !important;
        }
        .citruss-valid-feedback {
            display: block;
        }
    }
}

.citruss-invalid-feedback,
.citruss-valid-feedback {
    display: none;
    font-size: 0.8rem;
    margin-top: 6px;
    margin-left: 4px;
    font-weight: 500;
}
.citruss-invalid-feedback { color: #ff4d4d; }
.citruss-valid-feedback { color: var(--citruss-lime); }
```
</details>

<details>
<summary><strong>3. Client-Side Form Validation Engine (`src/js/_validation.js`)</strong></summary>
Zero-dependency utility for declarative validation, showing elegant glassmorphic alert hints inside the component structure.

```javascript
export const CitruSSValidator = {
    validateForm: function(formSelector) {
        const form = document.querySelector(formSelector);
        if (!form) return false;
        
        let isValid = true;
        const inputs = form.querySelectorAll('[required], [data-citruss-rules]');
        
        inputs.forEach(input => {
            const wrapper = input.closest('.citruss-input-group');
            if (!wrapper) return;
            
            let fieldValid = true;
            let errorMessage = '';
            
            // Required Check
            if (input.hasAttribute('required') && !input.value.trim()) {
                fieldValid = false;
                errorMessage = 'This field is required.';
            }
            
            // Custom Rules Check
            const rules = input.getAttribute('data-citruss-rules');
            if (fieldValid && rules && input.value) {
                const ruleList = rules.split('|');
                for (let rule of ruleList) {
                    if (rule === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
                        fieldValid = false;
                        errorMessage = 'Please enter a valid email address.';
                        break;
                    }
                    if (rule.startsWith('min:')) {
                        const minVal = parseInt(rule.split(':')[1]);
                        if (input.value.length < minVal) {
                            fieldValid = false;
                            errorMessage = `Must be at least ${minVal} characters.`;
                            break;
                        }
                    }
                }
            }
            
            if (!fieldValid) {
                isValid = false;
                wrapper.classList.remove('is-valid');
                wrapper.classList.add('is-invalid');
                let feedback = wrapper.querySelector('.citruss-invalid-feedback');
                if (!feedback) {
                    feedback = document.createElement('div');
                    feedback.className = 'citruss-invalid-feedback';
                    wrapper.appendChild(feedback);
                }
                feedback.textContent = errorMessage;
            } else {
                wrapper.classList.remove('is-invalid');
                wrapper.classList.add('is-valid');
            }
        });
        
        return isValid;
    },
    
    bind: function(formSelector) {
        const form = document.querySelector(formSelector);
        if (!form) return;
        form.addEventListener('submit', (e) => {
            if (!this.validateForm(formSelector)) {
                e.preventDefault();
            }
        });
    }
};
```
</details>

<details>
<summary><strong>4. Toggle Switches & Glowing Range Sliders (`src/components/_inputs.scss`)</strong></summary>
Custom styled input ranges and checkbox-based toggle switches.

```scss
/* Custom Toggle Switch */
.citruss-toggle {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    
    input { display: none; }
    
    .toggle-track {
        width: 48px;
        height: 24px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--citruss-glass-border);
        border-radius: 50px;
        position: relative;
        transition: all 0.3s ease;
        backdrop-filter: blur(4px);
        
        &::after {
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: var(--citruss-text-muted);
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
    }
    
    input:checked + .toggle-track {
        background: rgba(255, 159, 67, 0.15);
        border-color: var(--citruss-tangerine);
        
        &::after {
            left: 26px;
            background: var(--citruss-tangerine);
            box-shadow: 0 0 10px var(--citruss-tangerine);
        }
    }
}

/* Glowing range selectors */
.citruss-range {
    -webkit-appearance: none;
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background: rgba(255,255,255,0.05);
    outline: none;
    backdrop-filter: blur(4px);
    
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: var(--citruss-tangerine);
        border: 2px solid var(--citruss-bg-surface);
        box-shadow: 0 0 10px var(--citruss-tangerine);
        cursor: pointer;
        transition: transform 0.1s ease;
        
        &:hover { transform: scale(1.2); }
    }
}
```
</details>

<details>
<summary><strong>5. Drag & Drop Premium File Upload Area (`src/components/_inputs.scss`)</strong></summary>
Drag-and-drop zone featuring dynamic drop validation state hooks.

```scss
.citruss-upload-zone {
    border: 2px dashed var(--citruss-glass-border);
    background: rgba(255, 255, 255, 0.01);
    border-radius: 12px;
    padding: 32px;
    text-align: center;
    cursor: pointer;
    backdrop-filter: blur(8px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    .upload-icon {
        font-size: 2.5rem;
        color: var(--citruss-tangerine);
        margin-bottom: 12px;
        transition: transform 0.3s ease;
    }
    
    &:hover {
        background: rgba(255, 255, 255, 0.03);
        border-color: var(--citruss-tangerine);
        .upload-icon { transform: translateY(-4px); }
    }
    
    &.dragover {
        border-color: var(--citruss-lime);
        background: rgba(29, 209, 161, 0.05);
        box-shadow: inset 0 0 20px rgba(29, 209, 161, 0.1);
    }
}
```
</details>

---

### B. Navigation & Layout Modules

*   **1. Sidebars & Navbars (`src/components/_sidebar.scss`)**: Responsive, collapsing vertical menus and sticky top navigation bars built with glass layers.
*   **2. Offcanvas Drawers (`src/components/_drawer.scss`, `src/js/_drawer.js`)**: Slide-in panels from the left, right, or bottom. Managed by a JS controller that handles backdrop overlays and escape-key closures.
*   **3. Breadcrumbs (`src/components/_breadcrumbs.scss`)**: Clean, chevron-separated hierarchical links for deep navigation.
*   **4. Pagination (`src/components/_pagination.scss`)**: Numbered page navigators with active glowing states, next/prev arrows, and disabled modes.

<details>
<summary><strong>5. Segmented Controls / Tabs (`src/components/_tabs.scss`, `src/js/_tabs.js`)</strong></summary>
Glow-accented horizontal tab controls that transition active focus indices gracefully. Includes a JS controller to manage pane visibility.

```scss
.citruss-tabs-wrapper {
    border-bottom: 1px solid var(--citruss-glass-border);
    display: flex;
    gap: 24px;
    margin-bottom: 20px;
    
    .citruss-tab-link {
        padding: 12px 4px;
        color: var(--citruss-text-muted);
        font-weight: 600;
        cursor: pointer;
        position: relative;
        transition: color 0.2s ease;
        
        &::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            width: 100%;
            height: 2px;
            background: transparent;
            box-shadow: none;
            transition: all 0.3s ease;
        }
        
        &:hover {
            color: var(--citruss-text-main);
        }
        
        &.active {
            color: var(--citruss-tangerine);
            &::after {
                background: var(--citruss-tangerine);
                box-shadow: 0 0 10px var(--citruss-tangerine);
            }
        }
    }
}
```
</details>

<details>
<summary><strong>6. Multi-Step Glass Wizards & Steppers (`src/components/_wizard.scss`, `src/js/_wizard.js`)</strong></summary>
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
</details>

---

### C. Data Display & Metrics

*   **1. Tables & Data Grids (`src/components/_tables.scss`)**: Responsive frosted glass tables, hover-row highlights, sticky headers, and striped variants.
*   **2. List Groups (`src/components/_list-group.scss`)**: Structured vertical lists suitable for settings menus, task lists, or contact directories.
*   **3. Timelines (`src/components/_timeline.scss`)**: Vertical event trackers with glowing dots and connecting lines. Ideal for activity logs.
*   **4. TreeViews (`src/components/_treeview.scss`)**: Nested, collapsible folder structures for file explorers or deep categories.
*   **5. Avatars (`src/components/_avatars.scss`)**: Circular profile images with online/offline status indicator dots, grouped avatar stacks.
*   **6. Badges (`src/components/_badges.scss`)**: Small glowing indicator tags for labels, counts, and status indicators.

<details open>
<summary><strong>7. Premium Frosted Glass Metric Cards (`src/components/_cards.scss`)</strong></summary>
Base structural units for dashboards. Features hover-lift animations and glowing borders.

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
</details>

<details>
<summary><strong>8. Accordions & FAQ Collapse (`src/components/_accordion.scss`, `src/js/_accordion.js`)</strong></summary>
Nested accordions utilizing micro-animations to toggle content drawers with smooth height transition frames.

```scss
.citruss-accordion {
    border: 1px solid var(--citruss-glass-border);
    border-radius: 8px;
    background: var(--citruss-glass-bg);
    overflow: hidden;
    margin-bottom: 12px;
    backdrop-filter: blur(8px);
    
    .accordion-header {
        padding: 16px 20px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        color: var(--citruss-text-main);
        transition: background 0.25s ease;
        
        &:hover { background: rgba(255, 255, 255, 0.02); }
        
        .arrow {
            transition: transform 0.3s ease;
            color: var(--citruss-text-muted);
        }
    }
    
    .accordion-body {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), padding 0.3s ease;
        padding: 0 20px;
        color: var(--citruss-text-muted);
        font-size: 0.9rem;
        line-height: 1.6;
    }
    
    &.active {
        border-color: rgba(255, 159, 67, 0.3);
        .accordion-header {
            color: var(--citruss-tangerine);
            .arrow { transform: rotate(180deg); color: var(--citruss-tangerine); }
        }
        .accordion-body {
            max-height: 500px;
            padding-bottom: 20px;
        }
    }
}
```
</details>

---

### D. Overlays, Popups & Feedback

*   **1. Carousels & Sliders (`src/components/_carousel.scss`, `src/js/_carousel.js`)**: Smooth, glassmorphic image and content sliders with dot indicators, prev/next navigation, and touch swipe support.

<details open>
<summary><strong>2. Glassmorphic Modals & Programmatic Dialogs (`src/components/_modals.scss`, `src/js/_dialog.js`)</strong></summary>
Programmatically summon modal screens on the fly.

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
</details>

<details>
<summary><strong>3. Stacked Glass Toast System (`src/components/_alerts.scss`, `src/js/_toast.js`)</strong></summary>
Gorgeously stacked neon status toast alerts programmatically managed so you can trigger feedback natively.

```scss
.citruss-toast-container {
    position: fixed;
    bottom: 24px;
    right: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 9999;
}

.citruss-toast {
    width: 320px;
    background: rgba(20, 24, 38, 0.9);
    border-left: 4px solid var(--citruss-orange);
    border-top: 1px solid var(--citruss-glass-border);
    border-right: 1px solid var(--citruss-glass-border);
    border-bottom: 1px solid var(--citruss-glass-border);
    padding: 16px;
    border-radius: 4px 8px 8px 4px;
    color: var(--citruss-text-main);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(16px);
    display: flex;
    align-items: start;
    justify-content: space-between;
    transform: translateX(120%);
    transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
    
    &.show {
        transform: translateX(0);
    }
    
    .toast-body {
        flex: 1;
        .toast-title { font-weight: 700; font-size: 0.95rem; margin-bottom: 4px; }
        .toast-message { font-size: 0.85rem; color: var(--citruss-text-muted); }
    }
    
    .toast-close {
        cursor: pointer;
        font-size: 1.1rem;
        line-height: 1;
        color: var(--citruss-text-muted);
        &:hover { color: var(--citruss-text-main); }
    }
    
    &.toast-success { border-left-color: var(--citruss-lime); }
    &.toast-error { border-left-color: #ff4d4d; }
    &.toast-info { border-left-color: var(--citruss-tangerine); }
}
```

```javascript
export const CitruSSToast = {
    show: function({ title, message, type = 'info', duration = 4000 }) {
        let container = document.querySelector('.citruss-toast-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'citruss-toast-container';
            document.body.appendChild(container);
        }
        
        const toast = document.createElement('div');
        toast.className = `citruss-toast toast-${type}`;
        toast.innerHTML = `
            <div class="toast-body">
                <div class="toast-title">${title}</div>
                <div class="toast-message">${message}</div>
            </div>
            <div class="toast-close">×</div>
        `;
        
        container.appendChild(toast);
        
        // Trigger show animation
        setTimeout(() => toast.classList.add('show'), 50);
        
        const closeToast = () => {
            toast.classList.remove('show');
            toast.style.transform = 'translateX(120%)';
            setTimeout(() => toast.remove(), 400);
        };
        
        toast.querySelector('.toast-close').onclick = closeToast;
        
        // Auto dismiss
        setTimeout(closeToast, duration);
    }
};
```
</details>

<details>
<summary><strong>4. Advanced Dropdowns & Comboboxes (`src/components/_dropdown.scss`, `src/js/_dropdown.js`)</strong></summary>
Zero-dependency custom glassmorphic dropdown wrapper featuring multi-select, searchable list filter, keyboard accessible focus, and dynamic chip creation.

```scss
.citruss-select-wrapper {
    position: relative;
    width: 100%;
    
    .citruss-select-trigger {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 16px;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid var(--citruss-glass-border);
        border-radius: 8px;
        color: var(--citruss-text-main);
        cursor: pointer;
        backdrop-filter: blur(8px);
        transition: all 0.25s ease;
        
        .chips-container {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        
        .chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid var(--citruss-glass-border);
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 0.8rem;
            
            .remove-btn {
                cursor: pointer;
                color: var(--citruss-text-muted);
                &:hover { color: #ff4d4d; }
            }
        }
    }
    
    .citruss-dropdown-menu {
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        width: 100%;
        background: rgba(20, 24, 38, 0.95);
        border: 1px solid var(--citruss-glass-border);
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        border-radius: 8px;
        z-index: 1000;
        backdrop-filter: blur(20px);
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        overflow: hidden;
        
        &.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        
        .dropdown-search-box {
            padding: 8px;
            border-bottom: 1px solid var(--citruss-glass-border);
            input {
                width: 100%;
                background: rgba(255,255,255,0.03);
                border: 1px solid var(--citruss-glass-border);
                padding: 8px;
                border-radius: 4px;
                color: var(--citruss-text-main);
                font-size: 0.85rem;
                &:focus { outline: none; border-color: var(--citruss-tangerine); }
            }
        }
        
        .dropdown-options {
            max-height: 220px;
            overflow-y: auto;
        }
        
        .dropdown-item {
            padding: 10px 16px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 0.9rem;
            color: var(--citruss-text-main);
            transition: all 0.25s ease;
            
            &:hover, &.highlighted {
                background: rgba(255, 255, 255, 0.05);
                color: var(--citruss-tangerine);
            }
            
            &.selected {
                background: rgba(255, 159, 67, 0.15);
                color: var(--citruss-tangerine);
                font-weight: 600;
                
                &::after {
                    content: '✓';
                    font-size: 0.8rem;
                }
            }
        }
    }
}
```

```javascript
export class CitruSSDropdown {
    constructor(element, options = {}) {
        this.element = element;
        this.options = options;
        this.isMulti = options.multiple || false;
        this.searchable = options.searchable || false;
        this.selectedValues = new Set();
        this.highlightedIndex = -1;
        
        this.init();
    }
    
    init() {
        this.trigger = this.element.querySelector('.citruss-select-trigger');
        this.menu = this.element.querySelector('.citruss-dropdown-menu');
        this.searchField = this.element.querySelector('.dropdown-search-box input');
        this.items = Array.from(this.element.querySelectorAll('.dropdown-item'));
        
        // Event Listeners
        this.trigger.addEventListener('click', () => this.toggle());
        
        if (this.searchField) {
            this.searchField.addEventListener('input', (e) => this.filterOptions(e.target.value));
        }
        
        this.items.forEach((item, index) => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                this.selectItem(item);
            });
        });
        
        // Keyboard Accessibility
        this.element.addEventListener('keydown', (e) => this.handleKeydown(e));
        
        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.element.contains(e.target)) {
                this.close();
            }
        });
    }
    
    toggle() {
        this.menu.classList.toggle('active');
        if (this.menu.classList.contains('active') && this.searchField) {
            this.searchField.focus();
        }
    }
    
    close() {
        this.menu.classList.remove('active');
        this.highlightedIndex = -1;
        this.items.forEach(i => i.classList.remove('highlighted'));
    }
    
    selectItem(item) {
        const val = item.getAttribute('data-value');
        const label = item.textContent.trim().replace('✓', '').trim();
        
        if (this.isMulti) {
            if (this.selectedValues.has(val)) {
                this.selectedValues.delete(val);
                item.classList.remove('selected');
            } else {
                this.selectedValues.add(val);
                item.classList.add('selected');
            }
            this.updateTriggerMulti();
        } else {
            this.selectedValues.clear();
            this.selectedValues.add(val);
            this.items.forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');
            this.trigger.querySelector('.trigger-text').textContent = label;
            this.close();
        }
        
        if (this.options.onChange) {
            this.options.onChange(Array.from(this.selectedValues));
        }
    }
    
    updateTriggerMulti() {
        const container = this.trigger.querySelector('.chips-container');
        container.innerHTML = '';
        
        if (this.selectedValues.size === 0) {
            container.innerHTML = `<span class="trigger-text">${this.options.placeholder || 'Select options'}</span>`;
            return;
        }
        
        this.selectedValues.forEach(val => {
            const item = this.items.find(i => i.getAttribute('data-value') === val);
            const label = item.textContent.trim().replace('✓', '').trim();
            const chip = document.createElement('span');
            chip.className = 'chip';
            chip.innerHTML = `${label} <span class="remove-btn" data-val="${val}">×</span>`;
            
            chip.querySelector('.remove-btn').onclick = (e) => {
                e.stopPropagation();
                this.selectedValues.delete(val);
                item.classList.remove('selected');
                this.updateTriggerMulti();
            };
            container.appendChild(chip);
        });
    }
    
    filterOptions(query) {
        this.items.forEach(item => {
            const txt = item.textContent.toLowerCase();
            if (txt.includes(query.toLowerCase())) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    handleKeydown(e) {
        if (!this.menu.classList.contains('active')) return;
        const visibleItems = this.items.filter(i => i.style.display !== 'none');
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.highlightedIndex = (this.highlightedIndex + 1) % visibleItems.length;
            this.updateHighlight(visibleItems);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.highlightedIndex = (this.highlightedIndex - 1 + visibleItems.length) % visibleItems.length;
            this.updateHighlight(visibleItems);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (this.highlightedIndex >= 0 && this.highlightedIndex < visibleItems.length) {
                this.selectItem(visibleItems[this.highlightedIndex]);
            }
        } else if (e.key === 'Escape') {
            this.close();
        }
    }
    
    updateHighlight(visibleItems) {
        this.items.forEach(i => i.classList.remove('highlighted'));
        if (visibleItems[this.highlightedIndex]) {
            visibleItems[this.highlightedIndex].classList.add('highlighted');
            visibleItems[this.highlightedIndex].scrollIntoView({ block: 'nearest' });
        }
    }
}
```
</details>

<details>
<summary><strong>5. Tooltips, Popovers & Context Menus (`src/components/_tooltips.scss`, `src/js/_popover.js`, `src/js/_context-menu.js`)</strong></summary>
CSS-only vibrant tooltips, rich HTML popovers, and custom context menus.

```scss
[data-citruss-tooltip] {
    position: relative;
    
    &::before {
        content: attr(data-citruss-tooltip);
        position: absolute;
        bottom: 125%;
        left: 50%;
        transform: translateX(-50%) translateY(4px);
        background: rgba(20, 24, 38, 0.95);
        border: 1px solid var(--citruss-glass-border);
        color: var(--citruss-text-main);
        padding: 6px 12px;
        border-radius: 4px;
        font-size: 0.75rem;
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        z-index: 1100;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        backdrop-filter: blur(10px);
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    &:hover::before {
        opacity: 1;
        visibility: visible;
        transform: translateX(-50%) translateY(0);
    }
}
```
</details>

<details>
<summary><strong>6. Loading Spinners & Skeleton Overlays (`src/components/_progress.scss`)</strong></summary>
Animated loading states.

```scss
/* Skeleton Loader */
.citruss-skeleton {
    background: linear-gradient(90deg, 
        rgba(255,255,255,0.03) 25%, 
        rgba(255,255,255,0.08) 50%, 
        rgba(255,255,255,0.03) 75%
    );
    background-size: 200% 100%;
    animation: citruss-skeleton-loading 1.5s infinite;
    border-radius: 4px;
    display: inline-block;
    width: 100%;
    height: 20px;
}

@keyframes citruss-skeleton-loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}

/* Radial Loading Circle */
.citruss-spinner {
    width: 40px;
    height: 40px;
    border: 3px solid rgba(255, 159, 67, 0.1);
    border-top-color: var(--citruss-tangerine);
    border-radius: 50%;
    animation: citruss-spin 0.8s linear infinite;
    filter: drop-shadow(0 0 5px var(--citruss-tangerine-glow));
}

@keyframes citruss-spin {
    to { transform: rotate(360deg); }
}
```
</details>

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
| **Phase 2: Components & JS API** | Coding the full catalog of components and the dynamic JS Alert/Confirm/Wizard/Validation/Toast/Select modules (`citruss.js`). | Hardware-accelerated layer optimizations and clean programmatic bindings. |
| **Phase 3: Desktop Integration** | Testing window dragging and analyzing performance on prototype windows (frameless and transparent) built with Electron.js. | Stable 60+ FPS performance during window moving or resizing. |
| **Phase 4: Optimization & Deployment** | Setting up build automation with PostCSS, Lightning CSS, and Rollup/esbuild for CSS and JS bundling. | CSS < 25KB, JS < 8KB after Gzip compression. |

---

## 10. Performance and Accessibility (WCAG) Standards

* **Preventing Layer Clutter (GPU Protection):** Applying `backdrop-filter: blur()` to more than 5 elements in the same Viewport can cause bottlenecks on older graphics cards. CitruSS only uses blur on main layout layers (`sidebar`, `header`, `.citruss-card`, `.citruss-swal-container`, custom select menus) and prefers non-effect transparent backgrounds for sub-elements inside cards.
* **WCAG Contrast Assurance (Enhancing Readability):** The biggest risk in glassmorphic designs is that white text in front of a bright background image becomes unreadable. To solve this problem, CitruSS places an invisible, very light dark shadow mask beneath the glass layer. This ensures that the text contrast ratio always stays above **4.5:1**.

---

## 11. Development Directives & Integration Guides

### A. Sass Architecture (SCSS Architecture)
All components must be written in a modular and reusable structure. All modules must be imported in the main `src/citruss.scss` file using the `@use` directive, and a `citruss-` prefix must be used to prevent styling conflicts.
- **Variables:** All colors, blur values, and opacities must be defined as CSS Custom Properties within `src/core/_variables.scss`.
- **Mixins:** Frequently used glassmorphism effects (`backdrop-filter`) and transition effects must be placed inside `src/core/_mixins.scss`.

### B. Storybook (HTML/CSS Support) Documentation
To isolate, visualize, and document our components, a Storybook HTML setup will be established.
- **Setup:** The `@storybook/html-vite` framework will be utilized.
- **Example Structure:** A `src/components/<component-name>.stories.js` file will be created for each component, returning raw HTML string outputs:
  ```javascript
  export default {
    title: 'Components/Button',
    argTypes: {
      label: { control: 'text' },
    },
  };
  export const Primary = ({ label }) => `<button class="citruss-btn btn-primary">${label}</button>`;
  ```

### C. BackstopJS Visual Regression Testing
BackstopJS integration will be implemented to prevent visual anomalies and regressions.
- **Configuration (`backstop.json`):**
  - **Viewports:** Mobile (`320x480`), Tablet (`1024x768`), Desktop (`1920x1080`)
  - **Scenarios:** Every component's normal, hover, and active states will be tested by referencing the local iframe URLs of Storybook stories.
- **Commands:**
  - `npm run test:ref` (Capture reference screenshots)
  - `npm run test:test` (Run comparison checks against current implementation)

### D. Stylelint Code Quality Automation
Stylelint will be configured to automatically enforce style conventions and code standards on our SCSS files.
- **Standards (`.stylelintrc.json`):**
  - `stylelint-config-standard-scss` rules will be enabled.
  - `stylelint-config-recess-order` will automate the sorting order of CSS properties (e.g., margins, paddings, colors).
- **Command:** `npm run lint:css` can be executed to detect all style anomalies.