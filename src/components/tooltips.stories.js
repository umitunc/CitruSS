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
      <h3 style="color: #ffffff; font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Tooltips & Popovers (İpuçları ve Zengin İçerik Kutuları)
      </h3>
      
      <p style="color: #a3a9b6; font-size: 0.95rem; margin-bottom: 24px;">
        CitruSS, CSS tabanlı hızlı ipuçlarını (Tooltips) ve JavaScript kontrollü zengin içerikli bilgi kutularını (Popovers) destekler.
      </p>

      <div style="display: flex; gap: 24px; align-items: center;">
        <!-- Hover Tooltip -->
        <button class="citruss-btn" data-citruss-tooltip="CitruSS Cam İpucu Aktif!">
          Hover (Üzerine Gel) - Tooltip
        </button>
        
        <!-- Click Popover Trigger -->
        <button class="citruss-btn btn-primary" id="demo-popover-trigger">
          Click (Tıkla) - Popover
        </button>
      </div>

      <!-- Popover Box Markup -->
      <div id="demo-rich-popover" class="citruss-popover" style="position: fixed; z-index: 9999;">
        <div class="popover-title" style="color: var(--citruss-tangerine);">Sunucu Küme Bilgisi</div>
        <div class="popover-body">
          Frankfurt kümesinde 3 aktif node bulunuyor. Replikasyon durumu kararlı ve gecikme 12ms altında.
        </div>
      </div>

    </div>
  `;
};
