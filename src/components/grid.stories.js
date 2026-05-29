export default {
  title: 'Layout/Grid & Responsive',
};

// 12-Column Responsive Grid example
const flexGridHTML = `
<div class="citruss-container" style="background: rgba(var(--citruss-bg-surface-rgb), 0.3); border: 1px dashed var(--citruss-glass-border); border-radius: 12px; padding: 20px;">
  <p style="color: var(--citruss-text-muted); font-size: 0.85rem; margin-bottom: 15px;">Resize your screen or viewport to see the columns adjust dynamically.</p>
  
  <div class="citruss-row">
    <!-- 12 Columns -->
    <div class="citruss-col-12" style="margin-bottom: 12px;">
      <div style="background: linear-gradient(135deg, rgba(255, 126, 41, 0.2), rgba(255, 90, 95, 0.2)); border: 1px solid var(--citruss-orange); border-radius: 8px; padding: 12px; text-align: center; color: var(--citruss-text-main); font-weight: 600;">
        citruss-col-12 (Full Width)
      </div>
    </div>
    
    <!-- 6 Columns on Medium & Up, Full on Mobile -->
    <div class="citruss-col-12 citruss-col-md-6" style="margin-bottom: 12px;">
      <div style="background: linear-gradient(135deg, rgba(58, 123, 213, 0.2), rgba(0, 210, 255, 0.2)); border: 1px solid #3a7bd5; border-radius: 8px; padding: 12px; text-align: center; color: var(--citruss-text-main);">
        col-12 col-md-6 (50% on Tablet/Desktop)
      </div>
    </div>
    <div class="citruss-col-12 citruss-col-md-6" style="margin-bottom: 12px;">
      <div style="background: linear-gradient(135deg, rgba(58, 123, 213, 0.2), rgba(0, 210, 255, 0.2)); border: 1px solid #3a7bd5; border-radius: 8px; padding: 12px; text-align: center; color: var(--citruss-text-main);">
        col-12 col-md-6 (50% on Tablet/Desktop)
      </div>
    </div>
    
    <!-- 4 Columns on Large & Up, 6 on Medium, Full on Mobile -->
    <div class="citruss-col-12 citruss-col-md-6 citruss-col-lg-4" style="margin-bottom: 12px;">
      <div style="background: linear-gradient(135deg, rgba(17, 153, 142, 0.2), rgba(56, 239, 125, 0.2)); border: 1px solid #11998e; border-radius: 8px; padding: 12px; text-align: center; color: var(--citruss-text-main);">
        col-12 col-md-6 col-lg-4
      </div>
    </div>
    <div class="citruss-col-12 citruss-col-md-6 citruss-col-lg-4" style="margin-bottom: 12px;">
      <div style="background: linear-gradient(135deg, rgba(17, 153, 142, 0.2), rgba(56, 239, 125, 0.2)); border: 1px solid #11998e; border-radius: 8px; padding: 12px; text-align: center; color: var(--citruss-text-main);">
        col-12 col-md-6 col-lg-4
      </div>
    </div>
    <div class="citruss-col-12 citruss-col-md-12 citruss-col-lg-4" style="margin-bottom: 12px;">
      <div style="background: linear-gradient(135deg, rgba(17, 153, 142, 0.2), rgba(56, 239, 125, 0.2)); border: 1px solid #11998e; border-radius: 8px; padding: 12px; text-align: center; color: var(--citruss-text-main);">
        col-12 col-md-12 col-lg-4 (Full on Tablet, 33.3% on Desktop)
      </div>
    </div>
  </div>
</div>
`.trim();

// Modern CSS Grid example
const cssGridHTML = `
<div class="citruss-grid citruss-grid-cols-1 citruss-grid-cols-2-md citruss-grid-cols-4-lg citruss-gap-md" style="background: rgba(var(--citruss-bg-surface-rgb), 0.3); border: 1px dashed var(--citruss-glass-border); border-radius: 12px; padding: 20px;">
  <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid var(--citruss-glass-border); backdrop-filter: blur(10px); border-radius: 12px; padding: 16px; text-align: center; min-height: 100px; display: flex; flex-direction: column; justify-content: center;">
    <span style="font-size: 1.5rem; margin-bottom: 8px;">🎨</span>
    <h5 style="color: var(--citruss-text-main); margin: 0; font-size: 0.95rem;">Responsive Column 1</h5>
    <span style="color: var(--citruss-text-muted); font-size: 0.75rem; margin-top: 4px;">Grid Item</span>
  </div>
  
  <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid var(--citruss-glass-border); backdrop-filter: blur(10px); border-radius: 12px; padding: 16px; text-align: center; min-height: 100px; display: flex; flex-direction: column; justify-content: center;">
    <span style="font-size: 1.5rem; margin-bottom: 8px;">🚀</span>
    <h5 style="color: var(--citruss-text-main); margin: 0; font-size: 0.95rem;">Responsive Column 2</h5>
    <span style="color: var(--citruss-text-muted); font-size: 0.75rem; margin-top: 4px;">Grid Item</span>
  </div>
  
  <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid var(--citruss-glass-border); backdrop-filter: blur(10px); border-radius: 12px; padding: 16px; text-align: center; min-height: 100px; display: flex; flex-direction: column; justify-content: center;">
    <span style="font-size: 1.5rem; margin-bottom: 8px;">🔮</span>
    <h5 style="color: var(--citruss-text-main); margin: 0; font-size: 0.95rem;">Responsive Column 3</h5>
    <span style="color: var(--citruss-text-muted); font-size: 0.75rem; margin-top: 4px;">Grid Item</span>
  </div>
  
  <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid var(--citruss-glass-border); backdrop-filter: blur(10px); border-radius: 12px; padding: 16px; text-align: center; min-height: 100px; display: flex; flex-direction: column; justify-content: center;">
    <span style="font-size: 1.5rem; margin-bottom: 8px;">⚡</span>
    <h5 style="color: var(--citruss-text-main); margin: 0; font-size: 0.95rem;">Responsive Column 4</h5>
    <span style="color: var(--citruss-text-muted); font-size: 0.75rem; margin-top: 4px;">Grid Item</span>
  </div>
</div>
`.trim();

// Showcase of Margin & Padding Spacings
const spacingHTML = `
<div style="background: rgba(var(--citruss-bg-surface-rgb), 0.3); border: 1px solid var(--citruss-glass-border); border-radius: 12px; padding: 20px; color: var(--citruss-text-main);">
  <div class="citruss-mb-lg" style="border-bottom: 1px solid var(--citruss-glass-border); padding-bottom: 10px;">
    <strong style="color: var(--citruss-orange);">citruss-mb-lg</strong> (Large Margin Bottom spacing)
  </div>
  <div class="citruss-p-md" style="background: rgba(255,255,255,0.05); border: 1px solid var(--citruss-glass-border); border-radius: 8px;">
    <strong style="color: var(--citruss-tangerine);">citruss-p-md</strong> (Medium padding all around)
    <div class="citruss-mt-sm citruss-pt-sm" style="border-top: 1px solid rgba(255,255,255,0.1);">
      <span style="color: #00d2ff;">citruss-mt-sm citruss-pt-sm</span> (Small margin top + Small padding top)
    </div>
  </div>
</div>
`.trim();

// High fidelity premium Layout Showcase
const dynamicShowcaseHTML = `
<div class="citruss-container">
  <div class="citruss-row">
    <!-- Main Left Column (75% on Desktop, 100% on Tablet/Mobile) -->
    <div class="citruss-col-12 citruss-col-lg-8 citruss-mb-md">
      <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--citruss-glass-border); border-radius: 16px; padding: 24px; min-height: 380px; position: relative; overflow: hidden; backdrop-filter: blur(20px);">
        <div style="position: absolute; top: -100px; right: -100px; width: 250px; height: 250px; background: radial-gradient(circle, rgba(255, 126, 41, 0.15) 0%, transparent 70%); pointer-events: none;"></div>
        
        <div class="citruss-d-flex citruss-justify-content-between citruss-align-items-center citruss-mb-lg citruss-flex-wrap citruss-gap-sm">
          <div>
            <span style="background: rgba(255, 126, 41, 0.15); color: var(--citruss-orange); padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; border: 1px solid rgba(255, 126, 41, 0.3);">ANALYTICS ENGINE</span>
            <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-size: 1.6rem; font-weight: 800; margin-top: 8px; margin-bottom: 0;">Live Cluster Monitoring</h3>
          </div>
          <button class="citruss-btn citruss-btn-primary" style="padding: 8px 16px; font-size: 0.85rem; border-radius: 8px;">Trigger Force Re-sync</button>
        </div>

        <!-- Metric Cards Grid inside Layout -->
        <div class="citruss-grid citruss-grid-cols-1 citruss-grid-cols-3-lg citruss-gap-md citruss-mb-lg">
          <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid var(--citruss-glass-border); border-radius: 12px; padding: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="color: var(--citruss-text-muted); font-size: 0.8rem; font-weight: 600;">ACTIVE CORE TEMPERATURE</span>
              <span style="color: #ff5a5f;">🔥</span>
            </div>
            <div style="color: var(--citruss-text-main); font-size: 1.5rem; font-weight: 800; font-family: 'Outfit', sans-serif;">42.8 °C</div>
            <div style="color: #38ef7d; font-size: 0.75rem; margin-top: 4px; font-weight: 600;">↓ 1.2% cooling state</div>
          </div>
          
          <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid var(--citruss-glass-border); border-radius: 12px; padding: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="color: var(--citruss-text-muted); font-size: 0.8rem; font-weight: 600;">NETWORK THROUGHPUT</span>
              <span style="color: #00d2ff;">⚡</span>
            </div>
            <div style="color: var(--citruss-text-main); font-size: 1.5rem; font-weight: 800; font-family: 'Outfit', sans-serif;">842 MB/s</div>
            <div style="color: #38ef7d; font-size: 0.75rem; margin-top: 4px; font-weight: 600;">↑ 14.3% load dynamic</div>
          </div>
          
          <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid var(--citruss-glass-border); border-radius: 12px; padding: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="color: var(--citruss-text-muted); font-size: 0.8rem; font-weight: 600;">OVERALL MEMORY LOAD</span>
              <span style="color: var(--citruss-orange);">🔋</span>
            </div>
            <div style="color: var(--citruss-text-main); font-size: 1.5rem; font-weight: 800; font-family: 'Outfit', sans-serif;">67.4%</div>
            <div style="color: var(--citruss-orange); font-size: 0.75rem; margin-top: 4px; font-weight: 600;">Stable baseline threshold</div>
          </div>
        </div>

        <div style="background: rgba(0, 0, 0, 0.15); border: 1px solid var(--citruss-glass-border); border-radius: 12px; padding: 16px; font-family: monospace; color: #38ef7d; font-size: 0.8rem; overflow-x: auto; line-height: 1.5;">
          [OK] system-heartbeat check successful. Response time 4ms.<br>
          [INFO] replication buffer cleared for node cluster: #IST-04<br>
          [SUCCESS] dynamic responsive layouts adapted perfectly to viewport sizes.
        </div>
      </div>
    </div>
    
    <!-- Sidebar Column (25% on Desktop, 100% on Tablet/Mobile) -->
    <div class="citruss-col-12 citruss-col-lg-4 citruss-mb-md">
      <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--citruss-glass-border); border-radius: 16px; padding: 24px; height: calc(100% - 48px); min-height: 380px; backdrop-filter: blur(20px);">
        <h4 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-size: 1.2rem; font-weight: 800; margin-top: 0; margin-bottom: 16px;">Cluster Health Status</h4>
        
        <div class="citruss-d-flex citruss-flex-column citruss-gap-sm">
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--citruss-glass-border); border-radius: 10px; padding: 12px; display: flex; align-items: center; gap: 12px;">
            <div style="width: 10px; height: 10px; border-radius: 50%; background: #38ef7d; box-shadow: 0 0 8px #38ef7d;"></div>
            <div style="flex-grow: 1;">
              <div style="color: var(--citruss-text-main); font-size: 0.85rem; font-weight: 600;">Node Istanbul (Primary)</div>
              <div style="color: var(--citruss-text-muted); font-size: 0.75rem;">Fully online and replicating</div>
            </div>
          </div>
          
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--citruss-glass-border); border-radius: 10px; padding: 12px; display: flex; align-items: center; gap: 12px;">
            <div style="width: 10px; height: 10px; border-radius: 50%; background: #38ef7d; box-shadow: 0 0 8px #38ef7d;"></div>
            <div style="flex-grow: 1;">
              <div style="color: var(--citruss-text-main); font-size: 0.85rem; font-weight: 600;">Node Frankfurt (Replica)</div>
              <div style="color: var(--citruss-text-muted); font-size: 0.75rem;">Fully online and replicating</div>
            </div>
          </div>
          
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--citruss-glass-border); border-radius: 10px; padding: 12px; display: flex; align-items: center; gap: 12px;">
            <div style="width: 10px; height: 10px; border-radius: 50%; background: var(--citruss-orange); box-shadow: 0 0 8px var(--citruss-orange);"></div>
            <div style="flex-grow: 1;">
              <div style="color: var(--citruss-text-main); font-size: 0.85rem; font-weight: 600;">Node London (Cold Backup)</div>
              <div style="color: var(--citruss-text-muted); font-size: 0.75rem;">Syncing delay detected (0.8s)</div>
            </div>
          </div>
        </div>
        
        <div style="margin-top: 24px; padding: 16px; border-radius: 12px; background: linear-gradient(135deg, rgba(255, 126, 41, 0.1), rgba(255, 90, 95, 0.1)); border: 1px solid rgba(255, 126, 41, 0.2);">
          <h5 style="margin: 0 0 6px 0; color: var(--citruss-orange); font-size: 0.85rem; font-weight: 700;">PRO-TIP FOR RESPONSIVE DESIGN</h5>
          <p style="margin: 0; font-size: 0.75rem; color: var(--citruss-text-muted); line-height: 1.4;">
            Combine <strong style="color: var(--citruss-text-main);">citruss-col-12</strong> with media break selectors like <strong style="color: var(--citruss-text-main);">citruss-col-lg-8</strong> to effortlessly achieve responsive layouts.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
`.trim();

export const ResponsiveGridSystem = () => {
  return `
    <div style="padding: 40px; font-family: 'Outfit', sans-serif; max-width: 1200px; margin: 0 auto;">
      <div style="margin-bottom: 32px;">
        <span style="font-size: 0.85rem; font-weight: 700; color: var(--citruss-orange); letter-spacing: 2px; text-transform: uppercase;">Core Layout System</span>
        <h2 style="color: var(--citruss-text-main); font-size: 2.2rem; font-weight: 900; margin-top: 8px; margin-bottom: 12px; letter-spacing: -0.5px;">Responsive Layout & Flex/CSS Grid</h2>
        <p style="color: var(--citruss-text-muted); max-width: 700px; font-size: 1.05rem; line-height: 1.6;">
          CitruSS features a high-performance grid layout ecosystem combining a traditional 12-column flexbox grid system, a utility-driven modern CSS Grid system, and semantic spacing helpers.
        </p>
      </div>

      <!-- Section 1: 12-Column Responsive Grid -->
      <section style="margin-bottom: 48px;">
        <h3 style="color: var(--citruss-text-main); font-size: 1.35rem; font-weight: 800; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
          <span>📏</span> Traditional 12-Column Flexbox Grid
        </h3>
        <p style="color: var(--citruss-text-muted); font-size: 0.95rem; margin-bottom: 20px; line-height: 1.5;">
          Built using <code>.citruss-row</code> and <code>.citruss-col-{1-12}</code> with breakpoint prefix classes (e.g., <code>citruss-col-md-6</code>, <code>citruss-col-lg-4</code>).
        </p>
        ${flexGridHTML}
        
        <details class="citruss-code-wrapper" style="margin-top: 16px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden;">
          <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
            💻 View Flexbox Grid HTML Code
          </summary>
          <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${flexGridHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
        </details>
      </section>

      <!-- Section 2: CSS Grid Layouts -->
      <section style="margin-bottom: 48px;">
        <h3 style="color: var(--citruss-text-main); font-size: 1.35rem; font-weight: 800; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
          <span>⚡</span> Modern CSS Grid Utilities
        </h3>
        <p style="color: var(--citruss-text-muted); font-size: 0.95rem; margin-bottom: 20px; line-height: 1.5;">
          Quick grid generation using <code>.citruss-grid</code> along with col-counts (e.g. <code>.citruss-grid-cols-4-lg</code>) and gap utilities.
        </p>
        ${cssGridHTML}
        
        <details class="citruss-code-wrapper" style="margin-top: 16px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden;">
          <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
            💻 View CSS Grid HTML Code
          </summary>
          <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${cssGridHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
        </details>
      </section>

      <!-- Section 3: Margin & Padding Spacings -->
      <section style="margin-bottom: 48px;">
        <h3 style="color: var(--citruss-text-main); font-size: 1.35rem; font-weight: 800; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
          <span>📦</span> Spacing Helpers (Margins & Paddings)
        </h3>
        <p style="color: var(--citruss-text-muted); font-size: 0.95rem; margin-bottom: 20px; line-height: 1.5;">
          Easily apply standardized space variables using <code>.citruss-m-{size}</code> or <code>.citruss-p-{size}</code> (available sizes: <code>0</code>, <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>).
        </p>
        ${spacingHTML}
        
        <details class="citruss-code-wrapper" style="margin-top: 16px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden;">
          <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
            💻 View Spacings HTML Code
          </summary>
          <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${spacingHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
        </details>
      </section>

      <!-- Section 4: Premium Layout Demo -->
      <section style="margin-bottom: 20px;">
        <h3 style="color: var(--citruss-text-main); font-size: 1.35rem; font-weight: 800; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
          <span>👑</span> High Fidelity Responsive Layout
        </h3>
        <p style="color: var(--citruss-text-muted); font-size: 0.95rem; margin-bottom: 20px; line-height: 1.5;">
          A fully immersive, responsive, and glassmorphic layout preview showcasing all grid, spacing, and flex utility classes working harmoniously.
        </p>
        ${dynamicShowcaseHTML}
        
        <details class="citruss-code-wrapper" style="margin-top: 24px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden;">
          <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
            💻 View Layout Showcase HTML Code
          </summary>
          <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${dynamicShowcaseHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
        </details>
      </section>
    </div>
  `;
};

ResponsiveGridSystem.storyName = 'Grid & Responsive Showcase';
