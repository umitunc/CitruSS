import { useEffect } from '@storybook/preview-api';

export default {
  title: 'Interactive/Context Menu',
};

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

      {/* Target trigger area */}
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
      ">
        Right-click here!
      </div>

      {/* Context Menu Panel */}
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
    </div>
  `;
};
