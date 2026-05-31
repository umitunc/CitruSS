import { getSidebarHTML } from './sidebar.js';
import { getNavbarHTML } from './navbar.js';
import { initDashboardInteractions } from './interactions.js';

export const renderECommerceStorefront = (useEffect) => {
  useEffect(() => {
    initDashboardInteractions();
  }, []);

  return `
    <div class="citruss-dashboard-shell">
      ${getSidebarHTML('ecommerce')}
      
      <div class="citruss-dashboard-main">
        ${getNavbarHTML('E-Commerce Operations')}

        <div class="citruss-dashboard-content">
          <div class="citruss-row">
            <div class="citruss-col-12 citruss-col-md-3 citruss-mb-md">
              <div class="citruss-card">
                <div class="card-content">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <div class="metric-title">Gross Revenue</div>
                    <span class="citruss-icon-badge badge-sm badge-orange" style="margin: 0;"><span class="citruss-icon">attach_money</span></span>
                  </div>
                  <div class="metric-value">$84,240</div>
                  <div style="color: var(--citruss-lime); font-size: 0.8rem; font-weight:600; display:flex; align-items:center; gap:4px; margin-top: 8px;">
                    <span class="citruss-icon icon-sm">trending_up</span> +14.2% from last week
                  </div>
                </div>
              </div>
            </div>
            
            <div class="citruss-col-12 citruss-col-md-3 citruss-mb-md">
              <div class="citruss-card">
                <div class="card-content">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <div class="metric-title">Active Orders</div>
                    <span class="citruss-icon-badge badge-sm badge-lime" style="margin: 0;"><span class="citruss-icon">shopping_bag</span></span>
                  </div>
                  <div class="metric-value">1,482</div>
                  <div style="color: var(--citruss-lime); font-size: 0.8rem; font-weight:600; display:flex; align-items:center; gap:4px; margin-top: 8px;">
                    <span class="citruss-icon icon-sm">shopping_cart</span> 94 pending dispatch
                  </div>
                </div>
              </div>
            </div>
            
            <div class="citruss-col-12 citruss-col-md-3 citruss-mb-md">
              <div class="citruss-card">
                <div class="card-content">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <div class="metric-title">Conversion Rate</div>
                    <span class="citruss-icon-badge badge-sm badge-lemon" style="margin: 0;"><span class="citruss-icon">insights</span></span>
                  </div>
                  <div class="metric-value">3.64%</div>
                  <div style="color: var(--citruss-tangerine); font-size: 0.8rem; font-weight:600; display:flex; align-items:center; gap:4px; margin-top: 8px;">
                    <span class="citruss-icon icon-sm">bolt</span> Industry avg: 2.10%
                  </div>
                </div>
              </div>
            </div>

            <div class="citruss-col-12 citruss-col-md-3 citruss-mb-md">
              <div class="citruss-card card-lime">
                <div class="card-content">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <div class="metric-title">Server Sales Sync</div>
                    <span class="citruss-icon-badge badge-sm badge-lime" style="margin: 0;"><span class="citruss-icon">sync</span></span>
                  </div>
                  <div class="metric-value">100%</div>
                  <div style="color: var(--citruss-text-main); font-size: 0.8rem; display:flex; align-items:center; gap:4px; margin-top: 8px;">
                    <span class="citruss-icon icon-sm">check_circle</span> Real-time active pipelines
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="citruss-row">
            <div class="citruss-col-12 citruss-col-lg-8 citruss-mb-lg">
              <div class="citruss-card" style="padding: 24px;">
                <div class="card-content">
                  <h3 style="font-weight: 800; font-size: 1.2rem; color: var(--citruss-text-main); margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
                    <span class="citruss-icon icon-orange">list_alt</span> Recent Operations
                  </h3>
                  
                  <div class="citruss-table-container">
                    <table class="citruss-table table-hover">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Purchaser</th>
                          <th>Product Segment</th>
                          <th>Total Paid</th>
                          <th>Fulfillment</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>#CTR-9841</strong></td>
                          <td>
                            <div class="citruss-d-flex citruss-align-items-center citruss-gap-sm">
                              <div class="citruss-avatar avatar-sm"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"></div>
                              <span>Melis Eren</span>
                            </div>
                          </td>
                          <td>Enterprise Dev Suite</td>
                          <td><strong>$499.00</strong></td>
                          <td><span class="citruss-badge badge-success">Completed</span></td>
                        </tr>
                        <tr>
                          <td><strong>#CTR-9840</strong></td>
                          <td>
                            <div class="citruss-d-flex citruss-align-items-center citruss-gap-sm">
                              <div class="citruss-avatar avatar-sm"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"></div>
                              <span>Kerem Tuncgil</span>
                            </div>
                          </td>
                          <td>Consultancy Pack</td>
                          <td><strong>$1,200.00</strong></td>
                          <td><span class="citruss-badge badge-warning">Processing</span></td>
                        </tr>
                        <tr>
                          <td><strong>#CTR-9839</strong></td>
                          <td>
                            <div class="citruss-d-flex citruss-align-items-center citruss-gap-sm">
                              <div class="citruss-avatar avatar-sm"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"></div>
                              <span>Selim Aksoy</span>
                            </div>
                          </td>
                          <td>Custom Glass Theme</td>
                          <td><strong>$89.00</strong></td>
                          <td><span class="citruss-badge badge-danger">Refunded</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div class="citruss-col-12 citruss-col-lg-4 citruss-mb-lg">
              <div class="citruss-card">
                <div class="card-content">
                  <h3 style="font-weight: 800; font-size: 1.2rem; color: var(--citruss-text-main); margin-bottom: 24px; display: flex; align-items: center; gap: 8px;">
                    <span class="citruss-icon icon-orange">donut_large</span> Target Milestones
                  </h3>
                  
                  <div style="margin-bottom: 20px;">
                    <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 6px;">
                      <span style="color: var(--citruss-text-main); font-weight:600;">Monthly Sales Target</span>
                      <span style="color: var(--citruss-tangerine); font-weight:700;">84%</span>
                    </div>
                    <div class="citruss-progress-bar progress-orange">
                      <div class="progress-fill" style="width: 84%;"></div>
                    </div>
                  </div>

                  <div style="margin-bottom: 20px;">
                    <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 6px;">
                      <span style="color: var(--citruss-text-main); font-weight:600;">Server Resource Allocation</span>
                      <span style="color: var(--citruss-lime); font-weight:700;">62%</span>
                    </div>
                    <div class="citruss-progress-bar progress-lime">
                      <div class="progress-fill" style="width: 62%;"></div>
                    </div>
                  </div>

                  <div style="margin-bottom: 12px;">
                    <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 6px;">
                      <span style="color: var(--citruss-text-main); font-weight:600;">Security Integrity Audit</span>
                      <span style="color: var(--citruss-lemon); font-weight:700;">95%</span>
                    </div>
                    <div class="citruss-progress-bar progress-lemon">
                      <div class="progress-fill" style="width: 95%;"></div>
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
