export default {
  title: 'Navigation/Pagination',
};

const paginationHTML = `
<!-- Standard Pagination -->
<div class="citruss-pagination">
  <a href="#" class="page-link disabled">◀ Prev</a>
  <a href="#" class="page-link active">1</a>
  <a href="#" class="page-link">2</a>
  <a href="#" class="page-link">3</a>
  <span class="page-dots">...</span>
  <a href="#" class="page-link">12</a>
  <a href="#" class="page-link">Next ▶</a>
</div>
`.trim();

export const PaginationShowcase = () => {
  return `
    <div style="padding: 30px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Pagination
      </h3>
      
      <div style="display: flex; flex-direction: column; gap: 24px;">
        
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Classic Pagination Controls:</h4>
          ${paginationHTML}
        </div>

      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${paginationHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
  `;
};

PaginationShowcase.parameters = {
  docs: {
    source: {
      code: paginationHTML,
    },
  },
};

