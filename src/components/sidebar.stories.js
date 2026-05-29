export default {
  title: 'Layout/Sidebar',
};

export const SidebarShowcase = () => {
  return `
    <div style="padding: 20px; display: flex; justify-content: center; background: #060913; min-height: 500px;">
      <aside class="citruss-sidebar" style="position: relative; height: 500px; width: 260px; left: 0; box-shadow: none;">
        <div class="sidebar-header">
          <div class="citruss-logo-area" style="display: flex; align-items: center; gap: 8px;">
            <img src="./logos/citruss_logo_transparent.png" alt="CitruSS Logo" style="height: 32px; width: auto; object-fit: contain;">
            <span style="font-size: 1.25rem; font-weight: 800; color: var(--citruss-tangerine); margin-left: 2px;">Pro</span>
          </div>
        </div>
        <div class="sidebar-nav">
          <a href="#" class="sidebar-link active">
            <span class="sidebar-icon">📊</span>
            <span>Kontrol Paneli</span>
          </a>
          <a href="#" class="sidebar-link">
            <span class="sidebar-icon">🛡️</span>
            <span>Güvenlik Günlükleri</span>
          </a>
          <a href="#" class="sidebar-link">
            <span class="sidebar-icon">⚙️</span>
            <span>Sistem Ayarları</span>
          </a>
          <a href="#" class="sidebar-link">
            <span class="sidebar-icon">💡</span>
            <span>Entegrasyonlar</span>
          </a>
        </div>
        <div class="sidebar-footer">
          <div class="citruss-avatar status-online avatar-sm">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="User Profile">
          </div>
          <div class="user-details" style="font-size: 0.8rem; overflow: hidden; white-space: nowrap;">
            <div style="font-weight: 700; color: var(--citruss-text-main);">Ecem Trunçgil</div>
            <div style="color: var(--citruss-text-muted); font-size: 0.7rem;">ecem@truncgil.com</div>
          </div>
        </div>
      </aside>
    </div>
  `;
};
