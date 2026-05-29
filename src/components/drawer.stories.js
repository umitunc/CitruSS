import { useEffect } from '@storybook/preview-api';

export default {
  title: 'Interactive/Drawer',
};

const drawerHTML = `
<!-- Trigger Button -->
<button class="citruss-btn btn-primary" data-citruss-toggle="drawer" data-target="drawer-left-demo">
  Open Left Drawer
</button>

<!-- Left Sliding Drawer -->
<div id="drawer-left-demo" class="citruss-drawer drawer-left">
  <div class="drawer-header" style="display: flex; justify-content: space-between; align-items: center; padding: 20px; border-bottom: 1px solid var(--citruss-glass-border);">
    <h4 style="margin: 0; color: var(--citruss-text-main); font-weight: 800;">Left Drawer</h4>
    <button class="drawer-close" style="background: none; border: none; color: var(--citruss-text-main); font-size: 1.25rem; cursor: pointer;">✕</button>
  </div>
  <div class="drawer-content" style="padding: 20px; color: var(--citruss-text-muted);">
    <p>This panel slides in from the left edge of the screen with a smooth animation.</p>
  </div>
</div>
`.trim();

const drawerJS = `
// Initialize drawers
if (window.CitruSS?.Drawers) {
  window.CitruSS.Drawers.init();
}
`.trim();

export const StandardDrawer = () => {
  useEffect(() => {
    if (window.CitruSS?.Drawers) {
      window.CitruSS.Drawers.init();
    }
  }, []);

  return `
    <div style="padding: 30px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Drawer
      </h3>
      
      <p style="color: var(--citruss-text-muted); font-size: 0.95rem; margin-bottom: 24px;">
        Use the buttons below to trigger glass drawers that smoothly slide in from the left or right side of the screen.
      </p>

      <div style="display: flex; gap: 16px; margin-bottom: 24px;">
        <button class="citruss-btn btn-primary" data-citruss-toggle="drawer" data-target="drawer-left-demo">
          ⬅ Open Left Drawer
        </button>
        <button class="citruss-btn btn-success" data-citruss-toggle="drawer" data-target="drawer-right-demo">
          ➡ Open Right Drawer
        </button>
      </div>

      <!-- LEFT DRAWER -->
      <div id="drawer-left-demo" class="citruss-drawer drawer-left">
        <div class="drawer-header" style="display: flex; justify-content: space-between; align-items: center; padding: 20px; border-bottom: 1px solid var(--citruss-glass-border);">
          <h4 style="margin: 0; color: var(--citruss-text-main); font-weight: 800;">Left Drawer</h4>
          <button class="drawer-close" style="background: none; border: none; color: var(--citruss-text-main); font-size: 1.25rem; cursor: pointer;">✕</button>
        </div>
        <div class="drawer-content" style="padding: 20px; color: var(--citruss-text-muted);">
          <p>This panel slides in from the left edge of the screen with a smooth animation.</p>
          <p>You can click outside the panel, press the ESC key, or use the X button in the top right to close it.</p>
        </div>
      </div>

      <!-- RIGHT DRAWER -->
      <div id="drawer-right-demo" class="citruss-drawer drawer-right">
        <div class="drawer-header" style="display: flex; justify-content: space-between; align-items: center; padding: 20px; border-bottom: 1px solid var(--citruss-glass-border);">
          <h4 style="margin: 0; color: var(--citruss-text-main); font-weight: 800;">Right Drawer</h4>
          <button class="drawer-close" style="background: none; border: none; color: var(--citruss-text-main); font-size: 1.25rem; cursor: pointer;">✕</button>
        </div>
        <div class="drawer-content" style="padding: 20px; color: var(--citruss-text-muted);">
          <p>This panel comes from the right edge of the screen. Perfect for navigation menus, cart details, or side settings windows!</p>
          <button class="citruss-btn btn-danger drawer-close" style="width: 100%; margin-top: 20px;">Close Drawer</button>
        </div>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML & JS Code Examples
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto; display: flex; flex-direction: column; gap: 16px;">
          <div>
            <h5 style="color: var(--citruss-lime); margin: 0 0 8px 0; font-size: 0.85rem;">Drawer HTML:</h5>
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">${drawerHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
          <div>
            <h5 style="color: var(--citruss-orange); margin: 0 0 8px 0; font-size: 0.85rem;">Initialization JS:</h5>
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">${drawerJS.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
        </div>
      </details>
    </div>
  `;
};

StandardDrawer.parameters = {
  docs: {
    source: {
      code: `${drawerHTML}\n\n/* Javascript */\n${drawerJS}`,
    },
  },
};

