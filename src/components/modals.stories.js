import { useEffect } from '@storybook/preview-api';

export default {
  title: 'Interactive/Modals & Dialogs',
};

export const ModalsAndDialogs = () => {
  useEffect(() => {
    // Programmatic Dialog Trigger
    const btnDialog = document.getElementById('demo-btn-dialog');
    if (btnDialog) {
      btnDialog.onclick = () => {
        if (window.CitruSS?.confirm) {
          window.CitruSS.confirm(
            'İşlemi Onaylıyor musunuz?',
            'Bu işlem veritabanı yedeğinizi kalıcı olarak Frankfurt sunucusuna kopyalayacaktır.'
          ).then(res => {
            if (res.isConfirmed && window.CitruSS?.toast) {
              window.CitruSS.toast({
                title: 'Başarılı',
                message: 'Sunucu yedeği başarıyla başlatıldı!',
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
      const modalCloseBtns = modalEl.querySelectorAll('.modal-close');
      
      btnOpenModal.onclick = () => {
        modalEl.style.display = 'flex';
        setTimeout(() => modalEl.classList.add('show'), 20);
      };
      
      modalCloseBtns.forEach(btn => {
        btn.onclick = () => {
          modalEl.classList.remove('show');
          setTimeout(() => modalEl.style.display = 'none', 300);
        };
      });
    }
  }, []);

  return `
    <div style="padding: 30px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Modals & Dialogs (İletişim Kutuları & Programatik Diyaloglar)
      </h3>
      
      <p style="color: var(--citruss-text-muted); font-size: 0.95rem; margin-bottom: 24px;">
        CitruSS, hem geleneksel HTML tabanlı modal yapılarını hem de pratik JavaScript vaatlerine (promises) dayanan programatik onay kutularını tam olarak destekler.
      </p>

      <div style="display: flex; gap: 16px;">
        <button class="citruss-btn btn-primary" id="demo-btn-dialog">
          💬 Programatik Diyalog Tetikle (confirm)
        </button>
        <button class="citruss-btn btn-success" id="demo-btn-modal">
          📦 Statik HTML Modal Aç
        </button>
      </div>

      <!-- STATIC CSS MODAL PANEL -->
      <div id="demo-static-modal" class="citruss-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.5); justify-content: center; align-items: center; z-index: 99999;">
        <div class="modal-box" style="background: var(--citruss-app-content-bg, #0b0f19); border: 1px solid var(--citruss-glass-border); border-radius: 16px; width: 450px; padding: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
          <div class="modal-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <h4 style="margin: 0; color: var(--citruss-text-main); font-weight: 800; font-size: 1.2rem;">Statik Cam Modal</h4>
            <button class="modal-close" style="background: none; border: none; color: var(--citruss-text-main); font-size: 1.2rem; cursor: pointer;">✕</button>
          </div>
          <div class="modal-body" style="color: var(--citruss-text-muted); font-size: 0.92rem; line-height: 1.6; margin-bottom: 24px;">
            Bu modal, doğrudan HTML ağacınızda bulunan ve CSS sınıflarıyla yönetilen statik bir modal kutusudur. Tamamen özelleştirilebilir gövde yapısı içerir.
          </div>
          <div class="modal-footer" style="display: flex; gap: 12px; justify-content: flex-end;">
            <button class="citruss-btn modal-close">Vazgeç</button>
            <button class="citruss-btn btn-primary modal-close">Değişiklikleri Kaydet</button>
          </div>
        </div>
      </div>

    </div>
  `;
};
