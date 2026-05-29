export default {
  title: 'Data Display/List Group',
};

const listHTML = `
<!-- Standard List Group -->
<ul class="citruss-list-group">
  <li class="list-group-item active">
    <span>🔥</span>
    <span>Active Cluster Server (Istanbul)</span>
  </li>
  <li class="list-group-item">
    <span>🔋</span>
    <span>Replication Mode: Active</span>
  </li>
  <li class="list-group-item">
    <span>⚡</span>
    <span>Compression Ratio: 98.4%</span>
  </li>
  <li class="list-group-item">
    <span>💤</span>
    <span>Backup Server (Frankfurt)</span>
  </li>
</ul>
`.trim();

export const ListGroupShowcase = () => {
  return `
    <div style="padding: 30px; max-width: 450px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        List Group
      </h3>
      
      <div style="display: flex; flex-direction: column; gap: 24px;">
        
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Classic List Group:</h4>
          ${listHTML}
        </div>

      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${listHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
  `;
};

ListGroupShowcase.parameters = {
  docs: {
    source: {
      code: listHTML,
    },
  },
};

