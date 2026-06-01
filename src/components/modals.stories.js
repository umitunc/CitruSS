import { useEffect } from 'storybook/preview-api';

export default {
  title: 'Interactive/Modals & Dialogs',
};

const modalHTML = `
<!-- Static HTML Modal Panel -->
<div id="demo-static-modal" class="citruss-modal-backdrop">
  <div class="citruss-modal">
    <div class="modal-header">
      <h4 class="modal-title">Static Glass Modal</h4>
      <button class="modal-close">✕</button>
    </div>
    <div class="modal-body">
      This modal is a static modal box located directly in your HTML tree and managed via CSS classes. It features a fully customizable body structure.
    </div>
    <div class="modal-footer">
      <button class="citruss-btn modal-close">Cancel</button>
      <button class="citruss-btn btn-primary modal-close">Save Changes</button>
    </div>
  </div>
</div>
`.trim();

const modalJS = `
// Show modal
const backdrop = document.getElementById('demo-static-modal');
const modal = backdrop.querySelector('.citruss-modal');

backdrop.classList.add('active');
setTimeout(() => modal.classList.add('show'), 20);

// Close modal
modal.classList.remove('show');
setTimeout(() => backdrop.classList.remove('active'), 300);
`.trim();

export const ModalsAndDialogs = () => {
  useEffect(() => {
    // Programmatic Dialog Trigger
    const btnDialog = document.getElementById('demo-btn-dialog');
    if (btnDialog) {
      btnDialog.onclick = () => {
        if (window.CitruSS?.confirm) {
          window.CitruSS.confirm(
            'Do you confirm the action?',
            'This action will permanently copy your database backup to the Frankfurt server.'
          ).then(res => {
            if (res.isConfirmed && window.CitruSS?.toast) {
              window.CitruSS.toast({
                title: 'Success',
                message: 'Server backup started successfully!',
                type: 'success'
              });
            }
          });
        }
      };
    }

    // Static Modal Triggers
    const btnOpenModal = document.getElementById('demo-btn-modal');
    const modalEl = document.getElementById('demo-static-modal');
    if (btnOpenModal && modalEl) {
      const modalBox = modalEl.querySelector('.citruss-modal');
      const modalCloseBtns = modalEl.querySelectorAll('.modal-close');
      
      btnOpenModal.onclick = () => {
        modalEl.classList.add('active');
        if (modalBox) {
          setTimeout(() => modalBox.classList.add('show'), 20);
        }
      };
      
      modalCloseBtns.forEach(btn => {
        btn.onclick = () => {
          if (modalBox) {
            modalBox.classList.remove('show');
          }
          setTimeout(() => modalEl.classList.remove('active'), 300);
        };
      });
    }
  }, []);

  return `
    <div style="padding: 30px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Modals & Dialogs
      </h3>
      
      <p style="color: var(--citruss-text-muted); font-size: 0.95rem; margin-bottom: 24px;">
        CitruSS supports both traditional HTML-based modal structures and programatic confirmation dialogs based on JavaScript Promises.
      </p>

      <div style="display: flex; gap: 16px; margin-bottom: 24px;">
        <button class="citruss-btn btn-primary" id="demo-btn-dialog">
          💬 Trigger Programmatic Dialog (confirm)
        </button>
        <button class="citruss-btn btn-success" id="demo-btn-modal">
          📦 Open Static HTML Modal
        </button>
      </div>

      <!-- STATIC CSS MODAL PANEL -->
      <div id="demo-static-modal" class="citruss-modal-backdrop">
        <div class="citruss-modal">
          <div class="modal-header">
            <h4 class="modal-title">Static Glass Modal</h4>
            <button class="modal-close">✕</button>
          </div>
          <div class="modal-body">
            This modal is a static modal box located directly in your HTML tree and managed via CSS classes. It features a fully customizable body structure.
          </div>
          <div class="modal-footer">
            <button class="citruss-btn modal-close">Cancel</button>
            <button class="citruss-btn btn-primary modal-close">Save Changes</button>
          </div>
        </div>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML & JS Code Examples
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto; display: flex; flex-direction: column; gap: 16px;">
          <div>
            <h5 style="color: var(--citruss-lime); margin: 0 0 8px 0; font-size: 0.85rem;">Modal HTML:</h5>
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">${modalHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
          <div>
            <h5 style="color: var(--citruss-orange); margin: 0 0 8px 0; font-size: 0.85rem;">Control JS:</h5>
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">${modalJS.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
        </div>
      </details>
    </div>
  `;
};

ModalsAndDialogs.parameters = {
  docs: {
    source: {
      code: `${modalHTML}\n\n/* Javascript */\n${modalJS}`,
    },
  },
};

