export default {
  title: 'Data Display/Avatars',
  argTypes: {
    shape: {
      control: 'select',
      options: ['circle', 'rounded', 'square']
    },
    status: {
      control: 'select',
      options: ['none', 'online', 'offline']
    }
  }
};

export const AvatarShowcase = ({ shape = 'circle', status = 'online' }) => {
  const shapeStyle = shape === 'square' ? 'border-radius: 0px;' : shape === 'rounded' ? 'border-radius: 8px;' : '';
  const statusClass = status !== 'none' ? `status-${status}` : '';

  return `
    <div style="padding: 30px;">
      <h3 style="color: #ffffff; font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Avatar (Kullanıcı Resimleri)
      </h3>
      
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <!-- Dinamik Alan -->
        <div>
          <h4 style="color: #a3a9b6; font-size: 0.9rem; margin-bottom: 12px;">Dinamik Kontrollerle Değişen Avatar:</h4>
          <div class="citruss-avatar ${statusClass}" style="${shapeStyle} width: 64px; height: 64px;">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Avatar">
          </div>
        </div>

        <!-- Boyut Çeşitleri -->
        <div>
          <h4 style="color: #a3a9b6; font-size: 0.9rem; margin-bottom: 12px;">Boyut Çeşitleri (Avatar Sizes):</h4>
          <div style="display: flex; align-items: flex-end; gap: 16px;">
            <div class="citruss-avatar status-online avatar-sm">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Small Avatar">
            </div>
            <div class="citruss-avatar status-online">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Medium Avatar">
            </div>
            <div class="citruss-avatar status-online avatar-lg" style="width: 80px; height: 80px;">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Large Avatar">
            </div>
          </div>
        </div>

        <!-- Durum Göstergeleri -->
        <div>
          <h4 style="color: #a3a9b6; font-size: 0.9rem; margin-bottom: 12px;">Durum Göstergeleri (Presence Indicators):</h4>
          <div style="display: flex; gap: 16px;">
            <div class="citruss-avatar status-online">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Online User">
            </div>
            <div class="citruss-avatar status-offline">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" alt="Offline User">
            </div>
            <div class="citruss-avatar">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" alt="No Indicator">
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
};
