import { useEffect } from '@storybook/preview-api';

export default {
  title: 'Interactive/Drawer',
};

export const StandardDrawer = () => {
  useEffect(() => {
    if (window.CitruSS?.Drawers) {
      window.CitruSS.Drawers.init();
    }
  }, []);

  return `
    <div style="padding: 30px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Drawer (Sürgülü Yan Panel)
      </h3>
      
      <p style="color: var(--citruss-text-muted); font-size: 0.95rem; margin-bottom: 24px;">
        Aşağıdaki butonları kullanarak ekranın solundan veya sağından akıcı bir şekilde kayarak açılan cam çekmeceleri tetikleyin.
      </p>

      <div style="display: flex; gap: 16px;">
        <button class="citruss-btn btn-primary" data-citruss-toggle="drawer" data-target="drawer-left-demo">
          ⬅ Soldan Açılan Çekmece
        </button>
        <button class="citruss-btn btn-success" data-citruss-toggle="drawer" data-target="drawer-right-demo">
          ➡ Sağdan Açılan Çekmece
        </button>
      </div>

      <!-- LEFT DRAWER -->
      <div id="drawer-left-demo" class="citruss-drawer drawer-left">
        <div class="drawer-header" style="display: flex; justify-content: space-between; align-items: center; padding: 20px; border-bottom: 1px solid var(--citruss-glass-border);">
          <h4 style="margin: 0; color: var(--citruss-text-main); font-weight: 800;">Sol Çekmece</h4>
          <button class="drawer-close" style="background: none; border: none; color: var(--citruss-text-main); font-size: 1.25rem; cursor: pointer;">✕</button>
        </div>
        <div class="drawer-content" style="padding: 20px; color: var(--citruss-text-muted);">
          <p>Bu panel ekranın sol kenarından akıcı bir animasyonla kayarak gelir.</p>
          <p>Kapatmak için dış alana tıklayabilir, ESC tuşuna basabilir veya sağ üstteki X butonunu kullanabilirsiniz.</p>
        </div>
      </div>

      <!-- RIGHT DRAWER -->
      <div id="drawer-right-demo" class="citruss-drawer drawer-right">
        <div class="drawer-header" style="display: flex; justify-content: space-between; align-items: center; padding: 20px; border-bottom: 1px solid var(--citruss-glass-border);">
          <h4 style="margin: 0; color: var(--citruss-text-main); font-weight: 800;">Sağ Çekmece</h4>
          <button class="drawer-close" style="background: none; border: none; color: var(--citruss-text-main); font-size: 1.25rem; cursor: pointer;">✕</button>
        </div>
        <div class="drawer-content" style="padding: 20px; color: var(--citruss-text-muted);">
          <p>Bu panel ekranın sağ kenarından gelir. Menüler, sepet detayları veya yan ayar pencereleri için mükemmeldir!</p>
          <button class="citruss-btn btn-danger drawer-close" style="width: 100%; margin-top: 20px;">Paneli Kapat</button>
        </div>
      </div>

    </div>
  `;
};
