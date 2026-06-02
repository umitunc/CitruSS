# 🍊 CitruSS UI Kit: AI Agent Context & Reference Guide

This file acts as a high-density reference guide for AI Coding Agents building applications with the **CitruSS UI Kit** library. Feed this file directly into the AI's context or system instructions to guarantee extremely low token consumption, zero-defect CSS/JS implementation, and premium, visually consistent frosted glassmorphic designs.

---

## 🎨 1. Core Design System & Tokens

Instead of writing custom layout values, colors, or transitions, strictly use the pre-defined CSS variables:

### Color Palette (Vibrant Citrus)
* **Orange (Primary Actions):** `--citruss-orange: #ff6b00;` (Glow: `--citruss-orange-glow`)
* **Tangerine (Secondary / Active Highlights):** `--citruss-tangerine: #ff9f43;`
* **Lemon (Alerts / Vibe Highlights):** `--citruss-lemon: #feca57;`
* **Lime (Success / Approvals):** `--citruss-lime: #1dd1a1;` (Light mode variant: `#0d9488`)

### System Colors
* **Success:** `--citruss-success` (Green/Lime)
* **Warning:** `--citruss-warning` (Yellow/Lemon)
* **Danger:** `--citruss-danger` (Red)
* **Info:** `--citruss-info` (Blue)

### Typography & Spacing
* **Fonts:** Display headers use `--citruss-font-display` (Outfit), bodies use `--citruss-font-body` (Inter).
* **Spacing:** `--citruss-spacing-xs` (4px), `-sm` (8px), `-md` (16px), `-lg` (24px), `-xl` (32px).
* **Radii (Squircle):** `--citruss-radius-sm` (10px), `-md` (18px), `-lg` (26px), `-xl` (36px).
* **Anim Easing (Organic Spring):** `--citruss-spring-bezier` (`cubic-bezier(0.34, 1.56, 0.64, 1)`).

---

## 🧱 2. Core Components & HTML structures

Always use these structural markup templates. **Never write raw custom glassmorphic styling.**

### 🏷️ Buttons (`.citruss-btn`)
Use `.citruss-btn` in combination with citrus theme class triggers:
```html
<!-- Primary / Action (Orange-glow) -->
<button class="citruss-btn btn-primary">
  <span class="citruss-icon">🍊</span> Explore CitruSS
</button>

<!-- Success / Action (Lime) -->
<button class="citruss-btn btn-success">Save Changes</button>

<!-- Danger / Destructive (Red) -->
<button class="citruss-btn btn-danger">Delete Account</button>

<!-- Sizing & Shapes -->
<button class="citruss-btn btn-sm">Small</button>
<button class="citruss-btn btn-lg">Large</button>
<button class="citruss-btn btn-icon btn-circle"><span class="citruss-icon">🍋</span></button>

<!-- Button Group -->
<div class="citruss-btn-group">
  <button class="citruss-btn active">Tab 1</button>
  <button class="citruss-btn">Tab 2</button>
</div>
```

### 🎴 Cards (`.citruss-card`)
A three-dimensional frosted glass container with smooth spring micro-interactions:
```html
<div class="citruss-card">
  <!-- Top Right Absolute Icon (will hover-spin automatically) -->
  <div class="card-top-icon">🍊</div>
  
  <div class="card-header">
    <h3 class="card-title">Glassmorphism Card</h3>
  </div>
  
  <div class="card-content">
    <p>Elegant design with a safety background mask for absolute readability.</p>
  </div>
  
  <div class="card-actions">
    <button class="citruss-btn btn-sm btn-primary">Action</button>
  </div>
</div>
```

**Metric/Dashboard Card Variant:**
```html
<div class="citruss-card">
  <div class="metric-title">Monthly Revenue</div>
  <div class="metric-value">$48,256.00</div>
  <div class="metric-trend trend-up">
    <span>▲</span> +14.2% since last month
  </div>
</div>
```

### ⚡ Automatic Interactive DOM Binding
Certain interactive components initialize automatically if the correct markup metadata exists:

#### 1. Accordion (`data-citruss-accordion`)
```html
<div class="citruss-accordion" data-citruss-accordion>
  <div class="accordion-item">
    <button class="accordion-header">
      <span>How does it work?</span>
      <span class="accordion-icon">▼</span>
    </button>
    <div class="accordion-body">
      <p>Answers are wrapped inside glassmorphic transition containers.</p>
    </div>
  </div>
</div>
```

#### 2. Tabs (`.citruss-tabs-wrapper`)
```html
<div class="citruss-tabs-wrapper">
  <div class="citruss-tabs-nav">
    <button class="tab-link active" data-tab="tab-home">Home</button>
    <button class="tab-link" data-tab="tab-profile">Profile</button>
  </div>
  <div class="citruss-tabs-content">
    <div id="tab-home" class="tab-panel active">Home Content...</div>
    <div id="tab-profile" class="tab-panel">Profile Content...</div>
  </div>
</div>
```

---

## ⚡ 3. Companion Vanilla JS API Reference

Interactive UI elements are exposed globally under `window.CitruSS`. Use the following API methods inside scripts:

### 💬 Dialogs & Modals
```javascript
// Beautiful glassmorphic modal alert
CitruSS.fire({
  title: 'Success!',
  text: 'Action completed successfully.',
  icon: 'success', // 'success', 'warning', 'danger', 'info'
  confirmButtonText: 'Great!'
});

// Interactive glassmorphic confirmation modal
CitruSS.confirm({
  title: 'Are you absolutely sure?',
  text: 'You cannot revert this operation.',
  confirmButtonText: 'Yes, Delete',
  cancelButtonText: 'Cancel'
}).then((confirmed) => {
  if (confirmed) {
    // Action approved
  }
});
```

### 🔔 Toast Notifications
```javascript
// Show non-blocking light glass-toast notification
CitruSS.toast('Profile updated successfully!', 'success'); // Types: 'success', 'danger', 'warning', 'info'
```

### 🌓 Theme Management (Dark/Light Mode Toggle)
The theme configuration is auto-detected via OS settings. To toggle theme states programmatically:
```javascript
// Exposes the ThemeToggle component controls
CitruSS.ThemeToggle.toggle(); // Alternates between 'dark' and 'light' modes
```


### 📱 App Screen Layout (Optional / Window-Bound Frame)
To build a viewport-optimized UI (100vh height, fixed header/footer, and independent content scrolling without global window scroll), use the optional layout frame:
```html
<div class="citruss-app-layout">
  <!-- Fixed Header -->
  <header class="layout-header">
    <div class="citruss-navbar">...</div>
  </header>
  
  <div class="layout-content-wrapper">
    <!-- Optional Sidebar -->
    <aside class="layout-sidebar">...</aside>
    <!-- Independent Scrollable Main Content -->
    <main class="layout-content">...</main>
  </div>
  
  <!-- Fixed Footer -->
  <footer class="layout-footer">...</footer>
</div>
```

---

## 🚀 4. Golden Rules for AI-Assisted Writing
1. **Never write inline custom glassmorphic rules** like `backdrop-filter: blur(10px)`. Just write `.glass` or `.citruss-card`.
2. **Never install custom modal/toast libraries** (like SweetAlert or Toastify). `CitruSS.fire()` and `CitruSS.toast()` are built-in, lightweight, and match the design aesthetic perfectly.
3. Always check if the active page has `dist/citruss.css` and `dist/citruss.min.js` linked properly.
