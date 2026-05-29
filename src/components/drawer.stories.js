import { useEffect } from '@storybook/preview-api';

export default {
  title: 'Interactive/Drawer',
};

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

      <div style="display: flex; gap: 16px;">
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

    </div>
  `;
};
