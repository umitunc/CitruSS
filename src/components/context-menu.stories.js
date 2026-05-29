import { useEffect } from '@storybook/preview-api';

export default {
  title: 'Interactive/Context Menu',
};

const menuHTML = `
<!-- Trigger Element -->
<div id="context-menu-trigger-zone">
  Right-click here!
</div>

<!-- Context Menu Panel (Positioned absolutely via JS on click) -->
<div id="demo-context-menu" class="citruss-context-menu" style="display: none; position: fixed; z-index: 9999;">
  <div class="context-item">
    <span>📂</span> File Details
  </div>
  <div class="context-item">
    <span>✏️</span> Rename
  </div>
  <div class="context-item">
    <span>🔗</span> Copy Link
  </div>
  <hr style="border: none; height: 1px; background: rgba(255,255,255,0.08); margin: 6px 0;" />
  <div class="context-item" style="color: var(--citruss-danger);">
    <span>🗑️</span> Delete
  </div>
</div>
`.trim();

const menuJS = `
// Bind the Context Menu component
if (window.CitruSS?.ContextMenu) {
  window.CitruSS.ContextMenu.bind('#context-menu-trigger-zone', 'demo-context-menu');
}
`.trim();

export const StandardContextMenu = () => {
  useEffect(() => {
    if (window.CitruSS?.ContextMenu) {
      window.CitruSS.ContextMenu.bind('#context-menu-trigger-zone', 'demo-context-menu');
    }
  }, []);

  return `
    <div style="padding: 30px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Context Menu
      </h3>
      
      <p style="color: var(--citruss-text-muted); font-size: 0.95rem; margin-bottom: 20px;">
        You can trigger the custom glassmorphic menu by <strong>right-clicking</strong> anywhere inside the area below.
      </p>

      <!-- Target trigger area -->
      <div id="context-menu-trigger-zone" style="
        height: 250px; 
        max-width: 500px;
        background: rgba(255, 255, 255, 0.02);
        border: 2px dashed rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ff9f43;
        font-weight: 600;
        cursor: context-menu;
        user-select: none;
        margin-bottom: 24px;
      ">
        Right-click here!
      </div>

      <!-- Context Menu Panel -->
      <div id="demo-context-menu" class="citruss-context-menu" style="display: none; position: fixed; z-index: 9999;">
        <div class="context-item">
          <span>📂</span> File Details
        </div>
        <div class="context-item">
          <span>✏️</span> Rename
        </div>
        <div class="context-item">
          <span>🔗</span> Copy Link
        </div>
        <hr style="border: none; height: 1px; background: rgba(255,255,255,0.08); margin: 6px 0;" />
        <div class="context-item" style="color: var(--citruss-danger);">
          <span>🗑️</span> Delete
        </div>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML & JS Code Examples
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto; display: flex; flex-direction: column; gap: 16px;">
          <div>
            <h5 style="color: var(--citruss-lime); margin: 0 0 8px 0; font-size: 0.85rem;">Menu HTML Structure:</h5>
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">${menuHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
          <div>
            <h5 style="color: var(--citruss-orange); margin: 0 0 8px 0; font-size: 0.85rem;">Binding JS:</h5>
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">${menuJS.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
        </div>
      </details>
    </div>
  `;
};

StandardContextMenu.parameters = {
  docs: {
    source: {
      code: `${menuHTML}\n\n/* Javascript */\n${menuJS}`,
    },
  },
};

