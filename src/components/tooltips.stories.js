import { useEffect } from '@storybook/preview-api';

export default {
  title: 'Interactive/Tooltips & Popovers',
};

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

      <div style="display: flex; gap: 24px; align-items: center;">
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

    </div>
  `;
};
