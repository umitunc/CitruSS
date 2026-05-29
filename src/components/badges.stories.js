export default {
  title: 'Data Display/Badges',
};

export const BadgeShowcase = () => {
  return `
    <div style="padding: 30px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Badge (Rozetler)
      </h3>
      
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <!-- Renk/Tema Çeşitleri -->
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Tema Çeşitleri (Badge Themes):</h4>
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <span class="citruss-badge">Default Glass</span>
            <span class="citruss-badge badge-primary">Tangerine Primary</span>
            <span class="citruss-badge badge-success">Lime Success</span>
            <span class="citruss-badge badge-danger">Danger Alert</span>
          </div>
        </div>

        <!-- Kullanım Örnekleri (Grup ve Başlıklarda) -->
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Metinlerle Birlikte Kullanım (Inline Badges):</h4>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <h2 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; margin: 0; font-size: 1.8rem; display: flex; align-items: center; gap: 10px;">
              Admin Kontrol Paneli <span class="citruss-badge badge-primary" style="font-size: 0.8rem; vertical-align: middle;">PRO</span>
            </h2>
            <p style="color: var(--citruss-text-muted); margin: 0;">
              Sunucu durumu şu anda: <span class="citruss-badge badge-success">Çevrimiçi (Online)</span>
            </p>
            <p style="color: var(--citruss-text-muted); margin: 0;">
              Sistem Güvenlik Uyarıları: <span class="citruss-badge badge-danger">3 Kritik Hata</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
};
