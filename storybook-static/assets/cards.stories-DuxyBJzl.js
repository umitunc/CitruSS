const x={title:"Core/Cards"},b=`
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
`.trim(),s=()=>`
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
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${b.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
        </div>
      </details>
    </div>
  `;s.parameters={docs:{source:{code:b}}};const h=`
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
`.trim(),i=()=>`
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
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${h.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
        </div>
      </details>
    </div>
  `;i.parameters={docs:{source:{code:h}}};const y=`
<!-- Pure Glass Variation -->
<div class="citruss-card glass-pure">
  <span class="citruss-icon card-top-icon">opacity</span>
  <div class="card-content">
    <div class="metric-title">Pure Glass</div>
    <div class="metric-value">Clear Specular</div>
    <p>Perfect for placing over vibrant animated backgrounds or gradients.</p>
    <div class="metric-trend trend-up">
      <span class="citruss-icon icon-sm">check_circle</span> 15px Blur / 180% Saturation
    </div>
  </div>
</div>

<!-- Dark Glass Variation -->
<div class="citruss-card glass-dark">
  <span class="citruss-icon card-top-icon">nights_stay</span>
  <div class="card-content">
    <div class="metric-title">Dark Glass</div>
    <div class="metric-value">Deep Slate</div>
    <p>Superb legibility with a high-contrast midnight foundation.</p>
    <div class="metric-trend trend-up">
      <span class="citruss-icon icon-sm">shield</span> Premium 32% Opacity Dark Gray
    </div>
  </div>
</div>

<!-- Light Glass Variation -->
<div class="citruss-card glass-light">
  <span class="citruss-icon card-top-icon">wb_sunny</span>
  <div class="card-content">
    <div class="metric-title">Light Glass</div>
    <div class="metric-value">Morning Mist</div>
    <p>Designed specifically for daylight views or light theme contexts.</p>
    <div class="metric-trend trend-down">
      <span class="citruss-icon icon-sm">visibility</span> Clean & highly legible contrast
    </div>
  </div>
</div>
`.trim(),t=()=>`
    <div style="padding: 40px; max-width: 1000px; margin: 0 auto; min-height: 100vh; font-family: 'Outfit', sans-serif;">
      <h2 style="font-weight: 800; color: var(--citruss-text-main); margin-bottom: 8px; font-size: 1.8rem;">Glassmorphism Variations</h2>
      <p style="color: var(--citruss-text-muted); margin-bottom: 32px; font-size: 1rem;">
        Explore highly detailed glass effects with precise blur, saturation, and custom background options designed to wow your users.
      </p>

      <div class="citruss-row" style="margin-bottom: 32px;">
        
        <!-- Pure Glass Card -->
        <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
          <div class="citruss-card glass-pure">
            <span class="citruss-icon card-top-icon">opacity</span>
            <div class="card-content">
              <div class="metric-title">Pure Glass</div>
              <div class="metric-value">Clear Specular</div>
              <p>
                Perfect for placing over vibrant animated backgrounds or gradients.
              </p>
              <div class="metric-trend trend-up" style="margin-top: 12px; font-size: 0.75rem;">
                <span class="citruss-icon icon-sm">check_circle</span> 15px Blur / 180% Saturation
              </div>
            </div>
          </div>
        </div>

        <!-- Dark Glass Card -->
        <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
          <div class="citruss-card glass-dark">
            <span class="citruss-icon card-top-icon">nights_stay</span>
            <div class="card-content">
              <div class="metric-title">Dark Glass</div>
              <div class="metric-value">Deep Slate</div>
              <p>
                Superb legibility with a high-contrast midnight foundation.
              </p>
              <div class="metric-trend trend-up" style="margin-top: 12px; font-size: 0.75rem;">
                <span class="citruss-icon icon-sm">shield</span> Premium 32% Opacity Dark Gray
              </div>
            </div>
          </div>
        </div>

        <!-- Light Glass Card -->
        <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
          <div class="citruss-card glass-light">
            <span class="citruss-icon card-top-icon">wb_sunny</span>
            <div class="card-content">
              <div class="metric-title">Light Glass</div>
              <div class="metric-value">Morning Mist</div>
              <p>
                Designed specifically for daylight views or light theme contexts.
              </p>
              <div class="metric-trend trend-down" style="margin-top: 12px; font-size: 0.75rem;">
                <span class="citruss-icon icon-sm">visibility</span> Clean & highly legible contrast
              </div>
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
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${y.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
        </div>
      </details>
    </div>
  `;t.parameters={docs:{source:{code:y}}};const f=`
<!-- Shifting Aurora Glass Card -->
<div class="citruss-card glass-aurora">
  <span class="citruss-icon card-top-icon">bubble_chart</span>
  <div class="card-content">
    <div class="metric-title">Aurora Flow</div>
    <div class="metric-value">Shift Glow</div>
    <p>Animate your components with a smooth organic light movement transitioning across the palette.</p>
  </div>
  <div class="card-actions">
    <button class="citruss-btn btn-sm glass-mirror">Explore Flow</button>
  </div>
</div>

<!-- Liquid Lava Card -->
<div class="citruss-card glass-liquid-lava">
  <span class="citruss-icon card-top-icon">local_fire_department</span>
  <div class="card-content">
    <div class="metric-title">Volcanic Fusion</div>
    <div class="metric-value">Lava Magma</div>
    <p>Deep glowing warm aesthetics that feel energetic, alive, and interactive.</p>
  </div>
  <div class="card-actions">
    <button class="citruss-btn btn-sm glass-mirror">Ignite Engine</button>
  </div>
</div>

<!-- Liquid Ocean Card -->
<div class="citruss-card glass-liquid-ocean">
  <span class="citruss-icon card-top-icon">water</span>
  <div class="card-content">
    <div class="metric-title">Abyssal Depth</div>
    <div class="metric-value">Deep Ocean</div>
    <p>Flowing cool wave patterns that resemble active ocean tides underneath polished ice glass.</p>
  </div>
  <div class="card-actions">
    <button class="citruss-btn btn-sm glass-mirror">Dive In</button>
  </div>
</div>
`.trim(),a=()=>`
    <div style="padding: 40px; max-width: 1100px; margin: 0 auto; min-height: 100vh; font-family: 'Outfit', sans-serif;">
      <h2 style="font-weight: 800; color: var(--citruss-text-main); margin-bottom: 8px; font-size: 1.8rem;">Liquid & Glass Cards</h2>
      <p style="color: var(--citruss-text-muted); margin-bottom: 32px; font-size: 1rem;">
        Elevate your interface with fluid animation matrices, extreme reflections, and futuristic neon border-glow dynamics.
      </p>

      <div class="citruss-row" style="margin-bottom: 32px;">
        
        <!-- Aurora Card -->
        <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
          <div class="citruss-card glass-aurora">
            <span class="citruss-icon card-top-icon">bubble_chart</span>
            <div class="card-content">
              <div class="metric-title">Aurora Flow</div>
              <div class="metric-value">Shift Glow</div>
              <p>
                Animate your components with a smooth organic light movement transitioning across the palette.
              </p>
            </div>
            <div class="card-actions">
              <button class="citruss-btn btn-sm glass-mirror">Explore Flow</button>
            </div>
          </div>
        </div>

        <!-- Lava Card -->
        <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
          <div class="citruss-card glass-liquid-lava">
            <span class="citruss-icon card-top-icon">local_fire_department</span>
            <div class="card-content">
              <div class="metric-title">Volcanic Fusion</div>
              <div class="metric-value">Lava Magma</div>
              <p>
                Deep glowing warm aesthetics that feel energetic, alive, and interactive.
              </p>
            </div>
            <div class="card-actions">
              <button class="citruss-btn btn-sm glass-mirror">Ignite Engine</button>
            </div>
          </div>
        </div>

        <!-- Ocean Card -->
        <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
          <div class="citruss-card glass-liquid-ocean">
            <span class="citruss-icon card-top-icon">water</span>
            <div class="card-content">
              <div class="metric-title">Abyssal Depth</div>
              <div class="metric-value">Deep Ocean</div>
              <p>
                Flowing cool wave patterns that resemble active ocean tides underneath polished ice glass.
              </p>
            </div>
            <div class="card-actions">
              <button class="citruss-btn btn-sm glass-mirror">Dive In</button>
            </div>
          </div>
        </div>

      </div>

      <div class="citruss-row" style="margin-bottom: 32px;">
        
        <!-- Mirror Chrome Card -->
        <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
          <div class="citruss-card glass-mirror">
            <span class="citruss-icon card-top-icon">filter_hdr</span>
            <div class="card-content">
              <div class="metric-title">Specular Contrast</div>
              <div class="metric-value">Reflective Chrome</div>
              <p>
                Advanced high-contrast frosted glass with extreme specular reflections, sharp bevels, and heavy contrast controls.
              </p>
            </div>
            <div class="card-actions">
              <button class="citruss-btn btn-sm btn-primary">Mirror View</button>
            </div>
          </div>
        </div>

        <!-- Holographic Card -->
        <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
          <div class="citruss-card glass-holographic">
            <span class="citruss-icon card-top-icon">filter_vintage</span>
            <div class="card-content">
              <div class="metric-title">Prismatic Hue</div>
              <div class="metric-value">Hologram Prism</div>
              <p>
                A shifting spectral refraction effect that moves through a dynamic color sequence to capture the viewer's eye.
              </p>
            </div>
            <div class="card-actions">
              <button class="citruss-btn btn-sm glass-mirror">Shift Color</button>
            </div>
          </div>
        </div>

        <!-- Cyber Neon Flow Card -->
        <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
          <div class="citruss-card glass-neon-flow">
            <span class="citruss-icon card-top-icon">waves</span>
            <div class="card-content">
              <div class="metric-title">Neon Cyberpunk</div>
              <div class="metric-value">Neon Flow</div>
              <p>
                Features dynamic double-layered neon flow shadows that pulse softly in the background.
              </p>
            </div>
            <div class="card-actions">
              <button class="citruss-btn btn-sm glass-mirror">Activate</button>
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
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${f.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
        </div>
      </details>
    </div>
  `;a.parameters={docs:{source:{code:f}}};var r,c,e;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  return \`
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
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">\${cardsHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
  \`;
}`,...(e=(c=s.parameters)==null?void 0:c.docs)==null?void 0:e.source}}};var n,d,o;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return \`
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
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">\${enrichedCardsHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
  \`;
}`,...(o=(d=i.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var l,v,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return \`
    <div style="padding: 40px; max-width: 1000px; margin: 0 auto; min-height: 100vh; font-family: 'Outfit', sans-serif;">
      <h2 style="font-weight: 800; color: var(--citruss-text-main); margin-bottom: 8px; font-size: 1.8rem;">Glassmorphism Variations</h2>
      <p style="color: var(--citruss-text-muted); margin-bottom: 32px; font-size: 1rem;">
        Explore highly detailed glass effects with precise blur, saturation, and custom background options designed to wow your users.
      </p>

      <div class="citruss-row" style="margin-bottom: 32px;">
        
        <!-- Pure Glass Card -->
        <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
          <div class="citruss-card glass-pure">
            <span class="citruss-icon card-top-icon">opacity</span>
            <div class="card-content">
              <div class="metric-title">Pure Glass</div>
              <div class="metric-value">Clear Specular</div>
              <p>
                Perfect for placing over vibrant animated backgrounds or gradients.
              </p>
              <div class="metric-trend trend-up" style="margin-top: 12px; font-size: 0.75rem;">
                <span class="citruss-icon icon-sm">check_circle</span> 15px Blur / 180% Saturation
              </div>
            </div>
          </div>
        </div>

        <!-- Dark Glass Card -->
        <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
          <div class="citruss-card glass-dark">
            <span class="citruss-icon card-top-icon">nights_stay</span>
            <div class="card-content">
              <div class="metric-title">Dark Glass</div>
              <div class="metric-value">Deep Slate</div>
              <p>
                Superb legibility with a high-contrast midnight foundation.
              </p>
              <div class="metric-trend trend-up" style="margin-top: 12px; font-size: 0.75rem;">
                <span class="citruss-icon icon-sm">shield</span> Premium 32% Opacity Dark Gray
              </div>
            </div>
          </div>
        </div>

        <!-- Light Glass Card -->
        <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
          <div class="citruss-card glass-light">
            <span class="citruss-icon card-top-icon">wb_sunny</span>
            <div class="card-content">
              <div class="metric-title">Light Glass</div>
              <div class="metric-value">Morning Mist</div>
              <p>
                Designed specifically for daylight views or light theme contexts.
              </p>
              <div class="metric-trend trend-down" style="margin-top: 12px; font-size: 0.75rem;">
                <span class="citruss-icon icon-sm">visibility</span> Clean & highly legible contrast
              </div>
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
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">\${glassVariationsHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
  \`;
}`,...(u=(v=t.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var p,m,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return \`
    <div style="padding: 40px; max-width: 1100px; margin: 0 auto; min-height: 100vh; font-family: 'Outfit', sans-serif;">
      <h2 style="font-weight: 800; color: var(--citruss-text-main); margin-bottom: 8px; font-size: 1.8rem;">Liquid & Glass Cards</h2>
      <p style="color: var(--citruss-text-muted); margin-bottom: 32px; font-size: 1rem;">
        Elevate your interface with fluid animation matrices, extreme reflections, and futuristic neon border-glow dynamics.
      </p>

      <div class="citruss-row" style="margin-bottom: 32px;">
        
        <!-- Aurora Card -->
        <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
          <div class="citruss-card glass-aurora">
            <span class="citruss-icon card-top-icon">bubble_chart</span>
            <div class="card-content">
              <div class="metric-title">Aurora Flow</div>
              <div class="metric-value">Shift Glow</div>
              <p>
                Animate your components with a smooth organic light movement transitioning across the palette.
              </p>
            </div>
            <div class="card-actions">
              <button class="citruss-btn btn-sm glass-mirror">Explore Flow</button>
            </div>
          </div>
        </div>

        <!-- Lava Card -->
        <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
          <div class="citruss-card glass-liquid-lava">
            <span class="citruss-icon card-top-icon">local_fire_department</span>
            <div class="card-content">
              <div class="metric-title">Volcanic Fusion</div>
              <div class="metric-value">Lava Magma</div>
              <p>
                Deep glowing warm aesthetics that feel energetic, alive, and interactive.
              </p>
            </div>
            <div class="card-actions">
              <button class="citruss-btn btn-sm glass-mirror">Ignite Engine</button>
            </div>
          </div>
        </div>

        <!-- Ocean Card -->
        <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
          <div class="citruss-card glass-liquid-ocean">
            <span class="citruss-icon card-top-icon">water</span>
            <div class="card-content">
              <div class="metric-title">Abyssal Depth</div>
              <div class="metric-value">Deep Ocean</div>
              <p>
                Flowing cool wave patterns that resemble active ocean tides underneath polished ice glass.
              </p>
            </div>
            <div class="card-actions">
              <button class="citruss-btn btn-sm glass-mirror">Dive In</button>
            </div>
          </div>
        </div>

      </div>

      <div class="citruss-row" style="margin-bottom: 32px;">
        
        <!-- Mirror Chrome Card -->
        <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
          <div class="citruss-card glass-mirror">
            <span class="citruss-icon card-top-icon">filter_hdr</span>
            <div class="card-content">
              <div class="metric-title">Specular Contrast</div>
              <div class="metric-value">Reflective Chrome</div>
              <p>
                Advanced high-contrast frosted glass with extreme specular reflections, sharp bevels, and heavy contrast controls.
              </p>
            </div>
            <div class="card-actions">
              <button class="citruss-btn btn-sm btn-primary">Mirror View</button>
            </div>
          </div>
        </div>

        <!-- Holographic Card -->
        <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
          <div class="citruss-card glass-holographic">
            <span class="citruss-icon card-top-icon">filter_vintage</span>
            <div class="card-content">
              <div class="metric-title">Prismatic Hue</div>
              <div class="metric-value">Hologram Prism</div>
              <p>
                A shifting spectral refraction effect that moves through a dynamic color sequence to capture the viewer's eye.
              </p>
            </div>
            <div class="card-actions">
              <button class="citruss-btn btn-sm glass-mirror">Shift Color</button>
            </div>
          </div>
        </div>

        <!-- Cyber Neon Flow Card -->
        <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
          <div class="citruss-card glass-neon-flow">
            <span class="citruss-icon card-top-icon">waves</span>
            <div class="card-content">
              <div class="metric-title">Neon Cyberpunk</div>
              <div class="metric-value">Neon Flow</div>
              <p>
                Features dynamic double-layered neon flow shadows that pulse softly in the background.
              </p>
            </div>
            <div class="card-actions">
              <button class="citruss-btn btn-sm glass-mirror">Activate</button>
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
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">\${liquidCardsHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
  \`;
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const w=["MetricCards","EnrichedCards","GlassmorphicVariations","LiquidAndGlassCards"];export{i as EnrichedCards,t as GlassmorphicVariations,a as LiquidAndGlassCards,s as MetricCards,w as __namedExportsOrder,x as default};
