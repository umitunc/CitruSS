import { getSidebarHTML } from './sidebar.js';
import { getNavbarHTML } from './navbar.js';
import { initDashboardInteractions } from './interactions.js';

export const renderAnalyticsDashboard = (useEffect) => {
  useEffect(() => {
    initDashboardInteractions();
    
    // Simulate real-time data ticks
    const memoryUsageVal = document.getElementById('telemetry-memory-usage');
    const cpuLoadVal = document.getElementById('telemetry-cpu-load');
    const networkRateVal = document.getElementById('telemetry-network-rate');
    
    const interval = setInterval(() => {
      if (memoryUsageVal) {
        const currentVal = parseFloat(memoryUsageVal.textContent);
        const nextVal = (currentVal + (Math.random() * 0.4 - 0.2)).toFixed(1);
        memoryUsageVal.textContent = `${Math.max(10, Math.min(99, nextVal))}%`;
      }
      if (cpuLoadVal) {
        const nextCpu = Math.floor(Math.random() * 15 + 45);
        cpuLoadVal.textContent = `${nextCpu}%`;
        const bar = document.getElementById('cpu-progress-fill');
        if (bar) bar.style.width = `${nextCpu}%`;
      }
      if (networkRateVal) {
        const nextNet = (Math.random() * 4 + 18).toFixed(2);
        networkRateVal.textContent = `${nextNet} MB/s`;
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return `
    <div class="citruss-dashboard-shell">
      ${getSidebarHTML('analytics')}
      
      <div class="citruss-dashboard-main">
        ${getNavbarHTML('Telemetry & Analytics')}

        <div class="citruss-dashboard-content">
          <!-- Live Telemetry KPI Metrics -->
          <div class="citruss-row">
            <div class="citruss-col-12 citruss-col-md-3 citruss-mb-md">
              <div class="citruss-card card-orange" style="background: linear-gradient(135deg, rgba(255, 107, 0, 0.15) 0%, rgba(255, 107, 0, 0.03) 100%);">
                <div class="card-content">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <div class="metric-title" style="color: var(--citruss-tangerine); font-weight:700;">Avg CPU Load</div>
                    <span class="citruss-icon-badge badge-sm badge-orange" style="margin: 0;"><span class="citruss-icon">troubleshoot</span></span>
                  </div>
                  <div class="metric-value" id="telemetry-cpu-load">52%</div>
                  <div style="margin-top: 12px;">
                    <div class="citruss-progress-bar progress-orange">
                      <div class="progress-fill" id="cpu-progress-fill" style="width: 52%; transition: width 0.5s ease;"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="citruss-col-12 citruss-col-md-3 citruss-mb-md">
              <div class="citruss-card card-lime" style="background: linear-gradient(135deg, rgba(163, 230, 53, 0.15) 0%, rgba(163, 230, 53, 0.03) 100%);">
                <div class="card-content">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <div class="metric-title" style="color: var(--citruss-lime); font-weight:700;">Memory Occupancy</div>
                    <span class="citruss-icon-badge badge-sm badge-lime" style="margin: 0;"><span class="citruss-icon">analytics</span></span>
                  </div>
                  <div class="metric-value" id="telemetry-memory-usage">34.2%</div>
                  <div style="font-size: 0.8rem; color: var(--citruss-lime); font-weight: 600; display: flex; align-items: center; gap: 4px; margin-top: 8px;">
                    <span class="citruss-icon icon-sm">check_circle</span> Heap limit well within limits
                  </div>
                </div>
              </div>
            </div>

            <div class="citruss-col-12 citruss-col-md-3 citruss-mb-md">
              <div class="citruss-card card-lemon" style="background: linear-gradient(135deg, rgba(234, 179, 8, 0.15) 0%, rgba(234, 179, 8, 0.03) 100%);">
                <div class="card-content">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <div class="metric-title" style="color: var(--citruss-lemon); font-weight:700;">Ingress Traffic</div>
                    <span class="citruss-icon-badge badge-sm badge-lemon" style="margin: 0;"><span class="citruss-icon">swap_vert</span></span>
                  </div>
                  <div class="metric-value" id="telemetry-network-rate">21.84 MB/s</div>
                  <div style="font-size: 0.8rem; color: var(--citruss-text-muted); display: flex; align-items: center; gap: 4px; margin-top: 8px;">
                    <span class="citruss-icon icon-sm">trending_up</span> Peak ingress at 44.1 MB/s
                  </div>
                </div>
              </div>
            </div>

            <div class="citruss-col-12 citruss-col-md-3 citruss-mb-md">
              <div class="citruss-card" style="background: rgba(255,255,255,0.02);">
                <div class="card-content">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <div class="metric-title">Active Consumers</div>
                    <span class="citruss-icon-badge badge-sm badge-neutral" style="margin: 0;"><span class="citruss-icon">groups</span></span>
                  </div>
                  <div class="metric-value">4,912</div>
                  <div style="color: var(--citruss-lime); font-size: 0.8rem; font-weight:600; display:flex; align-items:center; gap:4px; margin-top: 8px;">
                    <span class="citruss-icon icon-sm">trending_up</span> +842 new sessions
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Main Analytics Visualization -->
          <div class="citruss-row">
            <div class="citruss-col-12 citruss-col-lg-8 citruss-mb-lg">
              <div class="citruss-card" style="padding: 24px;">
                <div class="card-content">
                  <h3 style="font-weight: 800; font-size: 1.2rem; margin-bottom: 24px; display: flex; align-items: center; gap: 8px;">
                    <span class="citruss-icon icon-orange">stacked_bar_chart</span> Ingress Telemetry Breakdown (Last 6 Hours)
                  </h3>

                  <!-- Mock Bar Visuals using flex and glass blocks -->
                  <div style="display: flex; align-items: flex-end; justify-content: space-between; height: 260px; padding: 20px 10px; background: rgba(0, 0, 0, 0.2); border-radius: 12px; border: 1px solid var(--citruss-glass-border); margin-bottom: 20px;">
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1;">
                      <div style="width: 24px; height: 120px; background: linear-gradient(to top, var(--citruss-tangerine) 30%, var(--citruss-lime) 100%); border-radius: 6px; box-shadow: 0 4px 12px rgba(255, 107, 0, 0.3);"></div>
                      <span style="font-size: 0.75rem; color: var(--citruss-text-muted);">12:00</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1;">
                      <div style="width: 24px; height: 160px; background: linear-gradient(to top, var(--citruss-tangerine) 30%, var(--citruss-lime) 100%); border-radius: 6px; box-shadow: 0 4px 12px rgba(255, 107, 0, 0.3);"></div>
                      <span style="font-size: 0.75rem; color: var(--citruss-text-muted);">13:00</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1;">
                      <div style="width: 24px; height: 90px; background: linear-gradient(to top, var(--citruss-tangerine) 30%, var(--citruss-lime) 100%); border-radius: 6px; box-shadow: 0 4px 12px rgba(255, 107, 0, 0.3);"></div>
                      <span style="font-size: 0.75rem; color: var(--citruss-text-muted);">14:00</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1;">
                      <div style="width: 24px; height: 210px; background: linear-gradient(to top, var(--citruss-tangerine) 30%, var(--citruss-lime) 100%); border-radius: 6px; box-shadow: 0 4px 12px rgba(255, 107, 0, 0.3);"></div>
                      <span style="font-size: 0.75rem; color: var(--citruss-text-muted);">15:00</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1;">
                      <div style="width: 24px; height: 180px; background: linear-gradient(to top, var(--citruss-tangerine) 30%, var(--citruss-lime) 100%); border-radius: 6px; box-shadow: 0 4px 12px rgba(255, 107, 0, 0.3);"></div>
                      <span style="font-size: 0.75rem; color: var(--citruss-text-muted);">16:00</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1;">
                      <div style="width: 24px; height: 230px; background: linear-gradient(to top, var(--citruss-tangerine) 30%, var(--citruss-lime) 100%); border-radius: 6px; box-shadow: 0 4px 12px rgba(255, 107, 0, 0.4);"></div>
                      <span style="font-size: 0.75rem; color: var(--citruss-text-main); font-weight:700;">17:00</span>
                    </div>
                  </div>

                  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                    <div style="font-size:0.8rem; color:var(--citruss-text-muted);">
                      Note: Values reflect aggregate requests processed per minute across TR and DE nodes.
                    </div>
                    <button class="citruss-btn btn-sm btn-primary">
                      <span class="citruss-icon icon-sm" style="margin-right:4px;">download</span> Export CSV Report
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Side Segment: Telemetry Alerts -->
            <div class="citruss-col-12 citruss-col-lg-4 citruss-mb-lg">
              <div class="citruss-card citruss-h-100" style="padding: 24px;">
                <div class="card-content">
                  <h3 style="font-weight: 800; font-size: 1.2rem; margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
                    <span class="citruss-icon icon-orange">notifications_active</span> Live Telemetry Alerts
                  </h3>

                  <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div style="padding: 12px; border-radius: 8px; border-left: 4px solid var(--citruss-danger); background: rgba(239, 68, 68, 0.08); font-size: 0.85rem;">
                      <div style="font-weight:700; color:var(--citruss-text-main); display:flex; align-items:center; justify-content:space-between; margin-bottom:4px;">
                        <span>High Latency Spike</span>
                        <span style="font-size:0.75rem; opacity:0.7;">1 min ago</span>
                      </div>
                      <div style="color:var(--citruss-text-muted);">TR-Istanbul gateway exceeded standard 15ms threshhold (22ms recorded).</div>
                    </div>

                    <div style="padding: 12px; border-radius: 8px; border-left: 4px solid var(--citruss-lime); background: rgba(163, 230, 53, 0.08); font-size: 0.85rem;">
                      <div style="font-weight:700; color:var(--citruss-text-main); display:flex; align-items:center; justify-content:space-between; margin-bottom:4px;">
                        <span>Replication Sync Done</span>
                        <span style="font-size:0.75rem; opacity:0.7;">15 mins ago</span>
                      </div>
                      <div style="color:var(--citruss-text-muted);">DE-Frankfurt backup replication completed in 1.4 seconds.</div>
                    </div>

                    <div style="padding: 12px; border-radius: 8px; border-left: 4px solid var(--citruss-tangerine); background: rgba(255, 107, 0, 0.08); font-size: 0.85rem;">
                      <div style="font-weight:700; color:var(--citruss-text-main); display:flex; align-items:center; justify-content:space-between; margin-bottom:4px;">
                        <span>Compression Active</span>
                        <span style="font-size:0.75rem; opacity:0.7;">1 hour ago</span>
                      </div>
                      <div style="color:var(--citruss-text-muted);">99.8% static asset compression ratio triggered on build asset bundlers.</div>
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
