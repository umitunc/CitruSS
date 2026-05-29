export default {
  title: 'Data Display/List Group',
};

export const ListGroupShowcase = () => {
  return `
    <div style="padding: 30px; max-width: 450px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        List Group (Liste Grupları)
      </h3>
      
      <div style="display: flex; flex-direction: column; gap: 24px;">
        
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Klasik Liste Grubu:</h4>
          <ul class="citruss-list-group">
            <li class="list-group-item active">
              <span>🔥</span>
              <span>Aktif Küme Sunucusu (Istanbul)</span>
            </li>
            <li class="list-group-item">
              <span>🔋</span>
              <span>Replikasyon Modu: Aktif</span>
            </li>
            <li class="list-group-item">
              <span>⚡</span>
              <span>Sıkıştırma Oranı: %98.4</span>
            </li>
            <li class="list-group-item">
              <span>💤</span>
              <span>Yedekleme Sunucusu (Frankfurt)</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  `;
};
