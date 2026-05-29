import { useEffect } from 'storybook/preview-api';

export default {
  title: 'Interactive/Tooltips & Popovers',
};

const tooltipHTML = `
<!-- Pure CSS Tooltip (Triggered by data attribute) -->
<button class="citruss-btn" data-citruss-tooltip="CitruSS Glass Tooltip Active!">
  Hover - Tooltip
</button>

<!-- Click Popover Trigger Button -->
<button class="citruss-btn btn-primary" id="demo-popover-trigger">
  Click - Popover
</button>

<!-- Popover Panel (Positioned via JS) -->
<div id="demo-rich-popover" class="citruss-popover" style="position: fixed; z-index: 9999;">
  <div class="popover-title" style="color: var(--citruss-tangerine);">Server Cluster Info</div>
  <div class="popover-body">
    There are 3 active nodes in the Frankfurt cluster. Replication status is stable and latency is below 12ms.
  </div>
</div>
`.trim();

const tooltipJS = `
// Bind rich click popover to trigger element
if (window.CitruSS?.Popovers) {
  window.CitruSS.Popovers.bind('#demo-popover-trigger', 'demo-rich-popover');
}
`.trim();

export const TooltipsAndPopovers = () => {
  useEffect(() => {
    if (window.CitruSS?.Popovers) {
      window.CitruSS.Popovers.bind('#demo-popover-trigger', 'demo-rich-popover');
    }
  }, []);

  return `
    <div style="padding: 30px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Tooltips & Popovers
      </h3>
      
      <p style="color: var(--citruss-text-muted); font-size: 0.95rem; margin-bottom: 24px;">
        CitruSS supports both high-performance CSS-based tooltips and interactive JavaScript-controlled rich information popovers.
      </p>

      <div style="display: flex; gap: 24px; align-items: center; margin-bottom: 32px;">
        <!-- Hover Tooltip -->
        <button class="citruss-btn" data-citruss-tooltip="CitruSS Glass Tooltip Active!">
          Hover - Tooltip
        </button>
        
        <!-- Click Popover Trigger -->
        <button class="citruss-btn btn-primary" id="demo-popover-trigger">
          Click - Popover
        </button>
      </div>

      <!-- Popover Box Markup -->
      <div id="demo-rich-popover" class="citruss-popover" style="position: fixed; z-index: 9999;">
        <div class="popover-title" style="color: var(--citruss-tangerine);">Server Cluster Info</div>
        <div class="popover-body">
          There are 3 active nodes in the Frankfurt cluster. Replication status is stable and latency is below 12ms.
        </div>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML & JS Code Examples
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto; display: flex; flex-direction: column; gap: 16px;">
          <div>
            <h5 style="color: var(--citruss-lime); margin: 0 0 8px 0; font-size: 0.85rem;">Tooltip & Popover HTML:</h5>
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">${tooltipHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
          <div>
            <h5 style="color: var(--citruss-orange); margin: 0 0 8px 0; font-size: 0.85rem;">Initialization JS:</h5>
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">${tooltipJS.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
        </div>
      </details>
    </div>
  `;
};

TooltipsAndPopovers.parameters = {
  docs: {
    source: {
      code: `${tooltipHTML}\n\n/* Javascript */\n${tooltipJS}`,
    },
  },
};

