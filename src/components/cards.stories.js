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
            <span class="citruss-icon card-top-icon">payments</span>
            <div class="card-content">
              <div class="metric-title">Monthly Revenue</div>
              <div class="metric-value">$48,256.00</div>
              <div class="metric-trend trend-up">
                <span class="citruss-icon icon-sm" style="font-size: 14px;">trending_up</span> 12.5% vs last month
              </div>
            </div>
          </div>
        </div>
        
        <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
          <div class="citruss-card card-lime">
            <span class="citruss-icon card-top-icon">group</span>
            <div class="card-content">
              <div class="metric-title">Active Customers</div>
              <div class="metric-value">12,482</div>
              <div class="metric-trend trend-up">
                <span class="citruss-icon icon-sm" style="font-size: 14px;">trending_up</span> 8.2% vs last week
              </div>
            </div>
          </div>
        </div>
        
        <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
          <div class="citruss-card">
            <span class="citruss-icon card-top-icon">percent</span>
            <div class="card-content">
              <div class="metric-title">Conversion Rate</div>
              <div class="metric-value">3.24%</div>
              <div class="metric-trend trend-down">
                <span class="citruss-icon icon-sm" style="font-size: 14px;">trending_down</span> 1.5% vs yesterday
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

const enrichedCardsHTML = `
<!-- Card with Header Icon Badge and Actions -->
<div class="citruss-card">
  <div class="card-header">
    <div class="citruss-icon-badge badge-orange">
      <span class="citruss-icon">shield_lock</span>
    </div>
    <div class="card-title">Security Settings</div>
  </div>
  <div class="card-content">
    <p style="color: var(--citruss-text-muted); font-size: 0.9rem; line-height: 1.6;">
      Manage password credentials, configure two-factor authentication, and monitor connected user sessions on your account.
    </p>
  </div>
  <div class="card-actions">
    <button class="citruss-btn btn-sm">Configure</button>
    <button class="citruss-btn btn-sm btn-primary">Enable 2FA</button>
  </div>
</div>
`.trim();

export const EnrichedCards = () => {
  return `
    <div style="padding: 40px; max-width: 1000px; margin: 0 auto; min-height: 100vh; font-family: 'Outfit', sans-serif;">
      <div class="citruss-row" style="margin-bottom: 32px;">
        
        <!-- Security Card -->
        <div class="citruss-col-12 citruss-col-md-6 citruss-mb-md">
          <div class="citruss-card">
            <div class="card-header">
              <div class="citruss-icon-badge badge-orange">
                <span class="citruss-icon">shield_lock</span>
              </div>
              <div class="card-title">Security & API Keys</div>
            </div>
            <div class="card-content">
              <p style="color: var(--citruss-text-muted); font-size: 0.9rem; line-height: 1.6; margin-bottom: 16px;">
                Manage production credentials, secure your integration webhooks, and audit active token sessions.
              </p>
            </div>
            <div class="card-actions">
              <button class="citruss-btn btn-sm">Manage</button>
              <button class="citruss-btn btn-sm btn-primary">
                <span class="citruss-icon">vpn_key</span> Generate Key
              </button>
            </div>
          </div>
        </div>

        <!-- Performance Card -->
        <div class="citruss-col-12 citruss-col-md-6 citruss-mb-md">
          <div class="citruss-card card-lime">
            <div class="card-header">
              <div class="citruss-icon-badge badge-lime">
                <span class="citruss-icon icon-spin">settings</span>
              </div>
              <div class="card-title">System Performance</div>
            </div>
            <div class="card-content">
              <p style="color: var(--citruss-text-muted); font-size: 0.9rem; line-height: 1.6; margin-bottom: 16px;">
                Real-time CDN edge network rendering status is fully operational. Server load is stable at 24% capacity.
              </p>
            </div>
            <div class="card-actions">
              <button class="citruss-btn btn-sm btn-success">
                <span class="citruss-icon">monitoring</span> View Metrics
              </button>
            </div>
          </div>
        </div>

      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${enrichedCardsHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
  `;
};

EnrichedCards.parameters = {
  docs: {
    source: {
      code: enrichedCardsHTML,
    },
  },
};

