export default {
  title: 'Data Display/List Group',
};

export const ListGroupShowcase = () => {
  return `
    <div style="padding: 30px; max-width: 450px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        List Group
      </h3>
      
      <div style="display: flex; flex-direction: column; gap: 24px;">
        
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Classic List Group:</h4>
          <ul class="citruss-list-group">
            <li class="list-group-item active">
              <span>🔥</span>
              <span>Active Cluster Server (Istanbul)</span>
            </li>
            <li class="list-group-item">
              <span>🔋</span>
              <span>Replication Mode: Active</span>
            </li>
            <li class="list-group-item">
              <span>⚡</span>
              <span>Compression Ratio: 98.4%</span>
            </li>
            <li class="list-group-item">
              <span>💤</span>
              <span>Backup Server (Frankfurt)</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  `;
};
