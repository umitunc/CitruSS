export default {
  title: 'Core/Cards',
};

export const MetricCards = () => {
  return `
    <div style="padding: 40px; max-width: 1000px; margin: 0 auto; background: #060913; min-height: 100vh;">
      <div class="citruss-row">
        <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
          <div class="citruss-card">
            <div class="card-content">
              <div class="metric-title">Monthly Revenue</div>
              <div class="metric-value">$48,256.00</div>
              <div class="metric-trend trend-up">
                <span>▲</span> 12.5% vs last month
              </div>
            </div>
          </div>
        </div>
        
        <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
          <div class="citruss-card card-lime">
            <div class="card-content">
              <div class="metric-title">Active Customers</div>
              <div class="metric-value">12,482</div>
              <div class="metric-trend trend-up">
                <span>▲</span> 8.2% vs last week
              </div>
            </div>
          </div>
        </div>
        
        <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
          <div class="citruss-card">
            <div class="card-content">
              <div class="metric-title">Conversion Rate</div>
              <div class="metric-value">3.24%</div>
              <div class="metric-trend trend-down">
                <span>▼</span> 1.5% vs yesterday
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};
