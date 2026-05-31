export default {
  title: 'Core/Buttons',
  argTypes: {
    theme: {
      control: 'select',
      options: ['default', 'primary', 'success', 'danger']
    },
    label: { control: 'text' },
    size: {
      control: 'select',
      options: ['sm', 'normal', 'lg']
    }
  }
};

const buttonsHTML = `
<!-- Button Varieties -->
<button class="citruss-btn btn-primary">Orange Primary</button>
<button class="citruss-btn btn-success">Lime Success</button>
<button class="citruss-btn btn-danger">Danger Button</button>
<button class="citruss-btn">Glass Neutral</button>

<!-- Button Sizes -->
<button class="citruss-btn btn-primary btn-sm">Small</button>
<button class="citruss-btn btn-primary">Normal</button>
<button class="citruss-btn btn-primary btn-lg">Large</button>
`.trim();

const buttonGroupHTML = `
<!-- Button Group -->
<div class="citruss-btn-group">
  <button class="citruss-btn active">Dashboard</button>
  <button class="citruss-btn">Analytics</button>
  <button class="citruss-btn">Settings</button>
</div>
`.trim();

export const StandardButtons = ({ theme = 'primary', label = 'Interactive Action', size = 'normal' }) => {
  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';
  const themeClass = theme !== 'default' ? `btn-${theme}` : '';
  return `
    <div style="padding: 20px;">
      <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Button Varieties:</h4>
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin-bottom: 24px;">
        <button class="citruss-btn ${themeClass} ${sizeClass}">${label}</button>
        <button class="citruss-btn btn-primary ${sizeClass}">Orange Primary</button>
        <button class="citruss-btn btn-success ${sizeClass}">Lime Success</button>
        <button class="citruss-btn btn-danger ${sizeClass}">Danger Button</button>
        <button class="citruss-btn ${sizeClass}">Glass Neutral</button>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${buttonsHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
  `;
};

StandardButtons.parameters = {
  docs: {
    source: {
      code: buttonsHTML,
    },
  },
};

export const ButtonGroups = () => {
  return `
    <div style="padding: 20px;">
      <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Button Group:</h4>
      <div class="citruss-btn-group" style="margin-bottom: 24px;">
        <button class="citruss-btn active">Dashboard</button>
        <button class="citruss-btn">Analytics</button>
        <button class="citruss-btn">Settings</button>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${buttonGroupHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
  `;
};

ButtonGroups.parameters = {
  docs: {
    source: {
      code: buttonGroupHTML,
    },
  },
};

const iconButtonsHTML = `
<!-- Leading Icon Buttons -->
<button class="citruss-btn btn-primary">
  <span class="citruss-icon">rocket_launch</span>
  Launch Project
</button>
<button class="citruss-btn btn-success">
  <span class="citruss-icon">check</span>
  Approve Task
</button>

<!-- Trailing Icon Buttons -->
<button class="citruss-btn">
  View Docs
  <span class="citruss-icon">arrow_forward</span>
</button>

<!-- Square Icon Buttons -->
<button class="citruss-btn btn-icon btn-primary">
  <span class="citruss-icon">settings</span>
</button>
<button class="citruss-btn btn-icon btn-sm btn-success">
  <span class="citruss-icon">add</span>
</button>

<!-- Circle Icon Buttons -->
<button class="citruss-btn btn-icon btn-circle btn-danger">
  <span class="citruss-icon">delete</span>
</button>
<button class="citruss-btn btn-icon btn-circle btn-lg btn-primary">
  <span class="citruss-icon">play_arrow</span>
</button>
`.trim();

export const IconButtons = () => {
  return `
    <div style="padding: 20px; font-family: 'Outfit', sans-serif;">
      
      <!-- Leading & Trailing -->
      <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Buttons with Leading/Trailing Icons:</h4>
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin-bottom: 24px;">
        <button class="citruss-btn btn-primary">
          <span class="citruss-icon">rocket_launch</span> Launch Project
        </button>
        <button class="citruss-btn btn-success">
          <span class="citruss-icon">check</span> Approve Task
        </button>
        <button class="citruss-btn btn-danger">
          <span class="citruss-icon">delete</span> Delete
        </button>
        <button class="citruss-btn">
          View Docs <span class="citruss-icon">arrow_forward</span>
        </button>
      </div>

      <!-- Icon-Only Sizing -->
      <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-top: 24px; margin-bottom: 12px;">Icon-Only Buttons (Square & Circle):</h4>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; margin-bottom: 24px;">
        <!-- Square -->
        <button class="citruss-btn btn-icon btn-sm">
          <span class="citruss-icon">add</span>
        </button>
        <button class="citruss-btn btn-icon btn-primary">
          <span class="citruss-icon">settings</span>
        </button>
        <button class="citruss-btn btn-icon btn-lg btn-success">
          <span class="citruss-icon">download</span>
        </button>

        <!-- Circle -->
        <button class="citruss-btn btn-icon btn-circle btn-sm btn-danger">
          <span class="citruss-icon">close</span>
        </button>
        <button class="citruss-btn btn-icon btn-circle btn-primary">
          <span class="citruss-icon">favorite</span>
        </button>
        <button class="citruss-btn btn-icon btn-circle btn-lg btn-success">
          <span class="citruss-icon">play_arrow</span>
        </button>
      </div>

      <!-- FAB Mockup (relative inside stories) -->
      <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-top: 24px; margin-bottom: 12px;">Floating Action Button (FAB) Preview:</h4>
      <div style="position: relative; height: 120px; border: 1px dashed var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.1); margin-bottom: 24px;">
        <span style="position: absolute; left: 16px; top: 16px; color: var(--citruss-text-muted); font-size: 0.85rem;">Mockup Area (Actual FAB floats bottom-right of page)</span>
        <button class="citruss-btn btn-primary citruss-btn-fab" style="position: absolute; right: 16px; bottom: 16px;">
          <span class="citruss-icon" style="font-size: 28px;">add</span>
        </button>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${iconButtonsHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
  `;
};

IconButtons.parameters = {
  docs: {
    source: {
      code: iconButtonsHTML,
    },
  },
};


