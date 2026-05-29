export default {
  title: 'Core/Cards',
};

const cardsHTML = `
<!-- Standard Glassmorphic Metric Card -->
<div class="citruss-card">
  <div class="card-content">
    <div class="metric-title">Monthly Revenue</div>
    <div class="metric-value">$48,256.00</div>
    <div class="metric-trend trend-up">
      <span>▲</span> 12.5% vs last month
    </div>
  </div>
</div>

<!-- Glassmorphic Lime Accent Metric Card -->
<div class="citruss-card card-lime">
  <div class="card-content">
    <div class="metric-title">Active Customers</div>
    <div class="metric-value">12,482</div>
    <div class="metric-trend trend-up">
      <span>▲</span> 8.2% vs last week
    </div>
  </div>
</div>
`.trim();

export const MetricCards = () => {
  return `
    <div style="padding: 40px; max-width: 1000px; margin: 0 auto; min-height: 100vh;">
      <div class="citruss-row" style="margin-bottom: 32px;">
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

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${cardsHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
  `;
};

MetricCards.parameters = {
  docs: {
    source: {
      code: cardsHTML,
    },
  },
};

