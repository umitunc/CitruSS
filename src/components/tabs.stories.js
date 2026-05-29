import { useEffect } from '@storybook/preview-api';

export default {
  title: 'Interactive/Tabs',
};

export const TabSwitching = () => {
  useEffect(() => {
    const tabsWrapper = document.getElementById('demo-tabs-nav');
    if (tabsWrapper && window.CitruSS?.Tabs) {
      new window.CitruSS.Tabs(tabsWrapper);
    }
  }, []);

  return `
    <div style="padding: 30px; max-width: 600px;">
      <h3 style="color: #ffffff; font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Tabs (Tab Panelleri)
      </h3>
      
      <div class="citruss-tabs-container">
        <!-- Tab Navigation Buttons -->
        <div class="citruss-tabs-wrapper" id="demo-tabs-nav">
          <button class="citruss-tab-link active" data-target="#tab-general">Genel Bilgiler</button>
          <button class="citruss-tab-link" data-target="#tab-security">Güvenlik Ayarları</button>
          <button class="citruss-tab-link" data-target="#tab-logs">Sistem Logları</button>
        </div>
        
        <!-- Tab Content Panes -->
        <div style="padding-top: 20px;">
          
          <div class="citruss-tab-pane active" id="tab-general">
            <h4 style="color: #fff; margin: 0 0 10px; font-weight: 700;">Genel Sunucu Yapılandırması</h4>
            <p style="color: var(--citruss-text-muted); font-size: 0.92rem; line-height: 1.6; margin: 0;">
              CitruSS, minimal tasarımı ve yüksek performansı sayesinde sunucu yönetim panelleri için biçilmiş kaftandır. Bu panel genel verileri izlemenizi sağlar.
            </p>
          </div>
          
          <div class="citruss-tab-pane" id="tab-security">
            <h4 style="color: #fff; margin: 0 0 10px; font-weight: 700;">Güvenlik & Yetkilendirme</h4>
            <p style="color: var(--citruss-text-muted); font-size: 0.92rem; line-height: 1.6; margin: 0;">
              İki aşamalı doğrulama (2FA) aktif. Güvenlik katmanı donanım kilitleriyle şifrelenmiştir ve en yüksek seviyede koruma altındadır.
            </p>
          </div>
          
          <div class="citruss-tab-pane" id="tab-logs">
            <h4 style="color: #fff; margin: 0 0 10px; font-weight: 700;">Sistem Çalışma Günlükleri</h4>
            <p style="color: var(--citruss-text-muted); font-size: 0.92rem; line-height: 1.6; margin: 0;">
              Frankfurt veri merkezi bağlantısı: Başarılı (12ms)<br>
              Replikasyon denetimi: 0 Hata ile tamamlandı<br>
              Vite CSS modülü: 0.04s içinde yüklendi
            </p>
          </div>
          
        </div>
      </div>
    </div>
  `;
};
