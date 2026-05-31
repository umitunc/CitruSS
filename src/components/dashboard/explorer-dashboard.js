import { getSidebarHTML } from './sidebar.js';
import { getNavbarHTML } from './navbar.js';
import { initDashboardInteractions } from './interactions.js';

export const renderCloudExplorer = (useEffect) => {
  useEffect(() => {
    initDashboardInteractions();
  }, []);

  return `
    <div class="citruss-dashboard-shell">
      ${getSidebarHTML('explorer')}
      
      <div class="citruss-dashboard-main">
        ${getNavbarHTML('Cloud Explorer')}

        <div class="citruss-dashboard-content">
          <div class="citruss-row">
            <div class="citruss-col-12 citruss-col-lg-8 citruss-mb-lg">
              <div class="citruss-card" style="padding: 24px;">
                <div class="card-content">
                  <div class="citruss-d-flex citruss-justify-content-between citruss-align-items-center citruss-mb-lg" style="flex-wrap:wrap; gap:12px;">
                    <h3 style="font-weight: 800; font-size: 1.2rem; color: var(--citruss-text-main); display:flex; align-items:center; gap:8px;">
                      <span class="citruss-icon icon-orange">folder</span> Repositories & Folders
                    </h3>
                    <button class="citruss-btn btn-sm btn-primary">
                      <span class="citruss-icon icon-sm icon-rounded" style="margin-right: 4px;">upload_file</span> Upload New File
                    </button>
                  </div>

                  <div class="citruss-row citruss-mb-lg">
                    <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
                      <div class="citruss-card card-lime" style="cursor: pointer;">
                        <div class="card-content" style="padding: 16px; display:flex; align-items:center; gap:12px;">
                          <span class="citruss-icon-badge badge-sm badge-lime" style="margin:0;"><span class="citruss-icon">source</span></span>
                          <div>
                            <div style="font-weight:700; font-size:0.9rem;">Source Assets</div>
                            <div style="font-size:0.75rem; opacity:0.8;">182 items • 1.4 GB</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
                      <div class="citruss-card" style="cursor: pointer;">
                        <div class="card-content" style="padding: 16px; display:flex; align-items:center; gap:12px;">
                          <span class="citruss-icon-badge badge-sm badge-orange" style="margin:0;"><span class="citruss-icon">video_library</span></span>
                          <div>
                            <div style="font-weight:700; font-size:0.9rem;">Media Assets</div>
                            <div style="font-size:0.75rem; color:var(--citruss-text-muted);">24 items • 8.4 GB</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
                      <div class="citruss-card" style="cursor: pointer;">
                        <div class="card-content" style="padding: 16px; display:flex; align-items:center; gap:12px;">
                          <span class="citruss-icon-badge badge-sm badge-lemon" style="margin:0;"><span class="citruss-icon">folder_zip</span></span>
                          <div>
                            <div style="font-weight:700; font-size:0.9rem;">Backup Archives</div>
                            <div style="font-size:0.75rem; color:var(--citruss-text-muted);">8 items • 14.8 GB</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h4 style="font-weight: 800; font-size: 1.05rem; margin-bottom:16px;">Files in Source Assets</h4>
                  <div class="citruss-table-container">
                    <table class="citruss-table table-hover">
                      <thead>
                        <tr>
                          <th>File Name</th>
                          <th>Modified</th>
                          <th>File Size</th>
                          <th>Permissions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style="cursor: pointer;">
                          <td>
                            <div style="display:flex; align-items:center; gap:8px;">
                              <span class="citruss-icon icon-orange" style="font-size:18px;">javascript</span>
                              <span style="font-weight:600;">citruss.min.js</span>
                            </div>
                          </td>
                          <td style="font-size:0.85rem; color:var(--citruss-text-muted);">2 hours ago</td>
                          <td>45.8 KB</td>
                          <td><span class="citruss-badge badge-success">Read-Write</span></td>
                        </tr>
                        <tr style="cursor: pointer;">
                          <td>
                            <div style="display:flex; align-items:center; gap:8px;">
                              <span class="citruss-icon icon-lime" style="font-size:18px;">image</span>
                              <span style="font-weight:600;">hero_mockup.webp</span>
                            </div>
                          </td>
                          <td style="font-size:0.85rem; color:var(--citruss-text-muted);">Yesterday</td>
                          <td>284 KB</td>
                          <td><span class="citruss-badge badge-success">Read-Write</span></td>
                        </tr>
                        <tr style="cursor: pointer;">
                          <td>
                            <div style="display:flex; align-items:center; gap:8px;">
                              <span class="citruss-icon icon-orange" style="font-size:18px;">css</span>
                              <span style="font-weight:600;">citruss.css</span>
                            </div>
                          </td>
                          <td style="font-size:0.85rem; color:var(--citruss-text-muted);">May 28, 2026</td>
                          <td>114 KB</td>
                          <td><span class="citruss-badge badge-neutral">Read Only</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>
            </div>

            <div class="citruss-col-12 citruss-col-lg-4 citruss-mb-lg">
              <div class="citruss-card">
                <div class="card-content" style="padding:24px;">
                  <h3 style="font-weight:800; font-size:1.2rem; margin-bottom:20px;">Storage Allocation</h3>
                  
                  <div style="text-align:center; margin-bottom:24px;">
                    <div style="font-size:2rem; font-weight:900; color:var(--citruss-orange);">24.6 GB</div>
                    <div style="font-size:0.8rem; color:var(--citruss-text-muted);">Used of 100 GB Cloud Limit</div>
                  </div>

                  <div class="citruss-progress-bar progress-orange citruss-mb-lg">
                    <div class="progress-fill" style="width: 24.6%;"></div>
                  </div>

                  <div style="display:flex; flex-direction:column; gap:16px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.85rem;">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span class="citruss-icon icon-orange" style="font-size:16px;">description</span>
                        <span style="color:var(--citruss-text-main);">Documents & Source</span>
                      </div>
                      <span style="font-weight:700;">1.4 GB</span>
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.85rem;">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span class="citruss-icon icon-lime" style="font-size:16px;">image</span>
                        <span style="color:var(--citruss-text-main);">Graphics & Media</span>
                      </div>
                      <span style="font-weight:700;">8.4 GB</span>
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.85rem;">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span class="citruss-icon icon-orange" style="font-size:16px;">settings_system_daydream</span>
                        <span style="color:var(--citruss-text-main);">Sync Archives</span>
                      </div>
                      <span style="font-weight:700;">14.8 GB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  `;
};
