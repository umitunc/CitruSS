import { useEffect } from '@storybook/preview-api';

export default {
  title: 'Feedback/Alerts & Dialogs',
};

export const DialogsAndToasts = () => {
  useEffect(() => {
    // Bind buttons to programmatic APIs
    const btnSuccessAlert = document.getElementById('btn-success-alert');
    const btnWarningConfirm = document.getElementById('btn-warning-confirm');
    const btnTriggerToast = document.getElementById('btn-trigger-toast');
    
    if (btnSuccessAlert) {
      btnSuccessAlert.onclick = () => {
        window.CitruSS.fire({
          title: 'Operation Successful',
          text: 'The glassmorphic container compiled successfully without any visual degradation.',
          icon: 'success'
        });
      };
    }
    
    if (btnWarningConfirm) {
      btnWarningConfirm.onclick = () => {
        window.CitruSS.confirm(
          'Delete System Logs',
          'Are you absolutely sure you want to purge the database logs?'
        ).then(res => {
          if (res.isConfirmed) {
            window.CitruSS.toast({
              title: 'Purged',
              message: 'Database logs purged successfully.',
              type: 'success'
            });
          }
        });
      };
    }
    
    if (btnTriggerToast) {
      btnTriggerToast.onclick = () => {
        window.CitruSS.toast({
          title: 'System Alert',
          message: 'A micro-animation took place inside the GPU cache layer.',
          type: 'info'
        });
      };
    }
  }, []);

  return `
    <div style="padding: 40px; max-width: 600px; margin: 0 auto; min-height: 100vh;">
      <h3 style="color: var(--citruss-text-main); margin-bottom: 24px; font-weight: 800;">Glass Dialogs & Toasts</h3>
      
      <div style="display:flex; gap:16px; margin-bottom: 40px; flex-wrap:wrap;">
        <button class="citruss-btn btn-success" id="btn-success-alert">Programmatic Success Alert</button>
        <button class="citruss-btn btn-danger" id="btn-warning-confirm">Programmatic Confirm</button>
        <button class="citruss-btn btn-primary" id="btn-trigger-toast">Trigger Stacked Toast</button>
      </div>
      
      <h4 style="color: var(--citruss-text-main); margin-bottom: 16px; font-weight: 700;">Static Alert Banners</h4>
      
      <div class="citruss-alert alert-info">
        <span>🍊</span>
        <div><strong>CitruSS Notice:</strong> The light and dark system switches automatically via system metrics.</div>
      </div>
      
      <div class="citruss-alert alert-success">
        <span>🍃</span>
        <div><strong>Freshness Lock:</strong> Hardware acceleration locks views at stable 60+ FPS.</div>
      </div>
      
      <div class="citruss-alert alert-danger">
        <span>🔴</span>
        <div><strong>Hardware Limit Warning:</strong> Enforced strict rendering of max 5 blur layers.</div>
      </div>
    </div>
  `;
};
