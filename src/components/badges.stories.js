export default {
  title: 'Data Display/Badges',
};

const badgesHTML = `
<!-- Standard Badge Themes -->
<span class="citruss-badge">Default Glass</span>
<span class="citruss-badge badge-primary">Tangerine Primary</span>
<span class="citruss-badge badge-success">Lime Success</span>
<span class="citruss-badge badge-danger">Danger Alert</span>

<!-- Inline Badge inside Headers -->
<h2 style="display: flex; align-items: center; gap: 10px;">
  Admin Dashboard <span class="citruss-badge badge-primary" style="font-size: 0.8rem;">PRO</span>
</h2>
`.trim();

export const BadgeShowcase = () => {
  return `
    <div style="padding: 30px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Badges
      </h3>
      
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <!-- Theme Varieties -->
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Badge Themes:</h4>
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <span class="citruss-badge">Default Glass</span>
            <span class="citruss-badge badge-primary">Tangerine Primary</span>
            <span class="citruss-badge badge-success">Lime Success</span>
            <span class="citruss-badge badge-danger">Danger Alert</span>
          </div>
        </div>

        <!-- Inline Usage Examples -->
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Inline Badges:</h4>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <h2 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; margin: 0; font-size: 1.8rem; display: flex; align-items: center; gap: 10px;">
              Admin Dashboard <span class="citruss-badge badge-primary" style="font-size: 0.8rem; vertical-align: middle;">PRO</span>
            </h2>
            <p style="color: var(--citruss-text-muted); margin: 0;">
              Server status currently: <span class="citruss-badge badge-success">Online</span>
            </p>
            <p style="color: var(--citruss-text-muted); margin: 0;">
              System Security Alerts: <span class="citruss-badge badge-danger">3 Critical Errors</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${badgesHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
  `;
};

BadgeShowcase.parameters = {
  docs: {
    source: {
      code: badgesHTML,
    },
  },
};

