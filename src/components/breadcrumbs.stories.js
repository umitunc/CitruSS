export default {
  title: 'Navigation/Breadcrumbs',
};

export const BreadcrumbShowcase = () => {
  return `
    <div style="padding: 30px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Breadcrumbs (Yol Haritası)
      </h3>
      
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <!-- Standart Kullanım -->
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Klasik Kullanım:</h4>
          <div class="citruss-breadcrumbs">
            <a href="#" class="breadcrumb-item">Console</a>
            <span class="breadcrumb-separator">/</span>
            <a href="#" class="breadcrumb-item">Settings</a>
            <span class="breadcrumb-separator">/</span>
            <a href="#" class="breadcrumb-item active">Profile Options</a>
          </div>
        </div>

        {/* Çok Katmanlı Kullanım */}
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Derin Katmanlar:</h4>
          <div class="citruss-breadcrumbs">
            <a href="#" class="breadcrumb-item">Ana Sayfa</a>
            <span class="breadcrumb-separator">/</span>
            <a href="#" class="breadcrumb-item">Projeler</a>
            <span class="breadcrumb-separator">/</span>
            <a href="#" class="breadcrumb-item">CitruSS UI</a>
            <span class="breadcrumb-separator">/</span>
            <a href="#" class="breadcrumb-item">Dökümantasyon</a>
            <span class="breadcrumb-separator">/</span>
            <a href="#" class="breadcrumb-item active">Bileşenler</a>
          </div>
        </div>
      </div>
    </div>
  `;
};
