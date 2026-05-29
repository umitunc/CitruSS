export default {
  title: 'Data Display/Tables',
};

export const TableShowcase = () => {
  return `
    <div style="padding: 30px; max-width: 800px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Tables (Veri Tabloları)
      </h3>
      
      <div class="citruss-table-container">
        <table class="citruss-table table-striped">
          <thead>
            <tr>
              <th>Cluster Operator</th>
              <th>Node Region</th>
              <th>Bandwidth</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div class="citruss-avatar status-online avatar-sm" style="width: 32px; height: 32px;">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" alt="Defne Profile">
                  </div>
                  <span style="font-weight: 600; color: var(--citruss-text-main);">Defne Trunçgil</span>
                </div>
              </td>
              <td>🇹🇷 TR-Istanbul</td>
              <td>4.2 GB/s</td>
              <td><span class="citruss-badge badge-success">Online</span></td>
            </tr>
            <tr>
              <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div class="citruss-avatar status-online avatar-sm" style="width: 32px; height: 32px;">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Yigit Profile">
                  </div>
                  <span style="font-weight: 600; color: var(--citruss-text-main);">Yiğit Trunçgil</span>
                </div>
              </td>
              <td>🇩🇪 DE-Frankfurt</td>
              <td>3.8 GB/s</td>
              <td><span class="citruss-badge badge-success">Online</span></td>
            </tr>
            <tr>
              <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div class="citruss-avatar status-offline avatar-sm" style="width: 32px; height: 32px;">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" alt="Okan Profile">
                  </div>
                  <span style="font-weight: 600; color: var(--citruss-text-main);">Okan Trunçgil</span>
                </div>
              </td>
              <td>🇬🇧 UK-London</td>
              <td>0.0 GB/s</td>
              <td><span class="citruss-badge badge-danger">Offline</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
};
