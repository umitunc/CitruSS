const A={title:"Core/Buttons",argTypes:{theme:{control:"select",options:["default","primary","success","danger"]},label:{control:"text"},size:{control:"select",options:["sm","normal","lg"]}}},D=`
<!-- Button Varieties -->
<button class="citruss-btn btn-primary">Orange Primary</button>
<button class="citruss-btn btn-success">Lime Success</button>
<button class="citruss-btn btn-danger">Danger Button</button>
<button class="citruss-btn">Glass Neutral</button>

<!-- Button Sizes -->
<button class="citruss-btn btn-primary btn-sm">Small</button>
<button class="citruss-btn btn-primary">Normal</button>
<button class="citruss-btn btn-primary btn-lg">Large</button>
`.trim(),S=`
<!-- Button Group -->
<div class="citruss-btn-group">
  <button class="citruss-btn active">Dashboard</button>
  <button class="citruss-btn">Analytics</button>
  <button class="citruss-btn">Settings</button>
</div>
`.trim(),t=({theme:i="primary",label:T="Interactive Action",size:c="normal"})=>{const s=c==="sm"?"btn-sm":c==="lg"?"btn-lg":"";return`
    <div style="padding: 20px; font-family: 'Outfit', sans-serif;">
      <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Interactive Preview (Use Controls):</h4>
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin-bottom: 24px;">
        <button class="citruss-btn ${i!=="default"?`btn-${i}`:""} ${s}">${T}</button>
      </div>

      <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-top: 24px; margin-bottom: 12px;">Button Varieties:</h4>
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin-bottom: 24px;">
        <button class="citruss-btn btn-primary ${s}">Orange Primary</button>
        <button class="citruss-btn btn-success ${s}">Lime Success</button>
        <button class="citruss-btn btn-danger ${s}">Danger Button</button>
        <button class="citruss-btn ${s}">Glass Neutral</button>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${D.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
        </div>
      </details>
    </div>
  `};t.parameters={docs:{source:{code:D}}};const n=()=>`
    <div style="padding: 20px; font-family: 'Outfit', sans-serif;">
      <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Standard Button Group:</h4>
      <div class="citruss-btn-group" style="margin-bottom: 24px;">
        <button class="citruss-btn active">Dashboard</button>
        <button class="citruss-btn">Analytics</button>
        <button class="citruss-btn">Settings</button>
      </div>

      <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-top: 24px; margin-bottom: 12px;">Icon Button Group:</h4>
      <div class="citruss-btn-group" style="margin-bottom: 24px;">
        <button class="citruss-btn active" title="Grid View">
          <span class="citruss-icon">grid_view</span>
        </button>
        <button class="citruss-btn" title="List View">
          <span class="citruss-icon">list</span>
        </button>
        <button class="citruss-btn" title="Map View">
          <span class="citruss-icon">map</span>
        </button>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${S.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
        </div>
      </details>
    </div>
  `;n.parameters={docs:{source:{code:S}}};const G=`
<!-- Leading Icon Buttons -->
<button class="citruss-btn btn-primary">
  <span class="citruss-icon">rocket_launch</span>
  Launch Project
</button>
<button class="citruss-btn btn-success">
  <span class="citruss-icon">check</span>
  Approve Task
</button>

<!-- Trailing Icon Buttons -->
<button class="citruss-btn">
  View Docs
  <span class="citruss-icon">arrow_forward</span>
</button>

<!-- Square Icon Buttons -->
<button class="citruss-btn btn-icon btn-primary">
  <span class="citruss-icon">settings</span>
</button>
<button class="citruss-btn btn-icon btn-sm btn-success">
  <span class="citruss-icon">add</span>
</button>

<!-- Circle Icon Buttons -->
<button class="citruss-btn btn-icon btn-circle btn-danger">
  <span class="citruss-icon">delete</span>
</button>
<button class="citruss-btn btn-icon btn-circle btn-lg btn-primary">
  <span class="citruss-icon">play_arrow</span>
</button>
`.trim(),r=()=>`
    <div style="padding: 20px; font-family: 'Outfit', sans-serif;">
      
      <!-- Leading & Trailing -->
      <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Buttons with Leading/Trailing Icons:</h4>
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin-bottom: 24px;">
        <button class="citruss-btn btn-primary">
          <span class="citruss-icon">rocket_launch</span> Launch Project
        </button>
        <button class="citruss-btn btn-success">
          <span class="citruss-icon">check</span> Approve Task
        </button>
        <button class="citruss-btn btn-danger">
          <span class="citruss-icon">delete</span> Delete
        </button>
        <button class="citruss-btn">
          View Docs <span class="citruss-icon">arrow_forward</span>
        </button>
      </div>

      <!-- Icon-Only Sizing -->
      <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-top: 24px; margin-bottom: 12px;">Icon-Only Buttons (Square & Circle):</h4>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; margin-bottom: 24px;">
        <!-- Square -->
        <button class="citruss-btn btn-icon btn-sm">
          <span class="citruss-icon">add</span>
        </button>
        <button class="citruss-btn btn-icon btn-primary">
          <span class="citruss-icon">settings</span>
        </button>
        <button class="citruss-btn btn-icon btn-lg btn-success">
          <span class="citruss-icon">download</span>
        </button>

        <!-- Circle -->
        <button class="citruss-btn btn-icon btn-circle btn-sm btn-danger">
          <span class="citruss-icon">close</span>
        </button>
        <button class="citruss-btn btn-icon btn-circle btn-primary">
          <span class="citruss-icon">favorite</span>
        </button>
        <button class="citruss-btn btn-icon btn-circle btn-lg btn-success">
          <span class="citruss-icon">play_arrow</span>
        </button>
      </div>

      <!-- FAB Mockup (relative inside stories) -->
      <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-top: 24px; margin-bottom: 12px;">Floating Action Button (FAB) Preview:</h4>
      <div style="position: relative; height: 120px; border: 1px dashed var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.1); margin-bottom: 24px;">
        <span style="position: absolute; left: 16px; top: 16px; color: var(--citruss-text-muted); font-size: 0.85rem;">Mockup Area (Actual FAB floats bottom-right of page)</span>
        <button class="citruss-btn btn-primary citruss-btn-fab" style="position: absolute; right: 16px; bottom: 16px;">
          <span class="citruss-icon" style="font-size: 28px;">add</span>
        </button>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${G.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
        </div>
      </details>
    </div>
  `;r.parameters={docs:{source:{code:G}}};const M=`
<!-- Disabled State -->
<button class="citruss-btn btn-primary" disabled style="opacity: 0.5; cursor: not-allowed; pointer-events: none;">Disabled Primary</button>
<button class="citruss-btn" disabled style="opacity: 0.5; cursor: not-allowed; pointer-events: none;">Disabled Neutral</button>

<!-- Loading State with Glass Spinner -->
<button class="citruss-btn btn-primary" style="position: relative; pointer-events: none;">
  <span class="citruss-spinner"></span>
  Processing...
</button>
<button class="citruss-btn btn-success" style="position: relative; pointer-events: none;">
  <span class="citruss-spinner"></span>
  Uploading...
</button>
`.trim(),e=()=>`
    <div style="padding: 20px; font-family: 'Outfit', sans-serif;">
      <style>
        .citruss-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-top-color: #fff;
          border-radius: 50%;
          animation: citruss-spin 0.8s linear infinite;
          display: inline-block;
        }
        @keyframes citruss-spin {
          to { transform: rotate(360deg); }
        }
      </style>

      <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Disabled Buttons:</h4>
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin-bottom: 24px;">
        <button class="citruss-btn btn-primary" disabled style="opacity: 0.5; cursor: not-allowed; pointer-events: none;">Disabled Primary</button>
        <button class="citruss-btn btn-success" disabled style="opacity: 0.5; cursor: not-allowed; pointer-events: none;">Disabled Success</button>
        <button class="citruss-btn btn-danger" disabled style="opacity: 0.5; cursor: not-allowed; pointer-events: none;">Disabled Danger</button>
        <button class="citruss-btn" disabled style="opacity: 0.5; cursor: not-allowed; pointer-events: none;">Disabled Glass</button>
      </div>

      <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-top: 24px; margin-bottom: 12px;">Loading States:</h4>
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin-bottom: 24px;">
        <button class="citruss-btn btn-primary" style="position: relative; pointer-events: none; gap: 8px;">
          <span class="citruss-spinner"></span> Processing...
        </button>
        <button class="citruss-btn btn-success" style="position: relative; pointer-events: none; gap: 8px;">
          <span class="citruss-spinner"></span> Saving Details...
        </button>
        <button class="citruss-btn btn-danger" style="position: relative; pointer-events: none; gap: 8px;">
          <span class="citruss-spinner"></span> Deleting...
        </button>
        <button class="citruss-btn" style="position: relative; pointer-events: none; gap: 8px;">
          <span class="citruss-spinner" style="border-top-color: var(--citruss-orange)"></span> Loading...
        </button>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${M.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
        </div>
      </details>
    </div>
  `;e.parameters={docs:{source:{code:M}}};const _=`
<!-- Neon Glow Accented Glass Buttons -->
<button class="citruss-btn" style="border-color: rgba(0, 242, 254, 0.4); text-shadow: 0 0 10px rgba(0, 242, 254, 0.5); box-shadow: 0 0 15px rgba(0, 242, 254, 0.2);">
  <span class="citruss-icon" style="color: #00f2fe;">electric_bolt</span>
  Cyan Neon Glow
</button>

<button class="citruss-btn" style="border-color: rgba(224, 86, 253, 0.4); text-shadow: 0 0 10px rgba(224, 86, 253, 0.5); box-shadow: 0 0 15px rgba(224, 86, 253, 0.2);">
  <span class="citruss-icon" style="color: #e056fd;">magic_button</span>
  Purple Velvet Glow
</button>
`.trim(),o=()=>`
    <div style="padding: 20px; font-family: 'Outfit', sans-serif;">
      <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Neon Glow & Premium Custom Accent Glass:</h4>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; margin-bottom: 24px;">
        
        <!-- Cyan Glow -->
        <button class="citruss-btn" style="border-color: rgba(0, 242, 254, 0.45); text-shadow: 0 0 8px rgba(0, 242, 254, 0.6); box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 0 15px rgba(0, 242, 254, 0.15); transition: all 0.3s ease;">
          <span class="citruss-icon" style="color: #00f2fe;">electric_bolt</span> Cyan Pulse
        </button>

        <!-- Purple Glow -->
        <button class="citruss-btn" style="border-color: rgba(224, 86, 253, 0.45); text-shadow: 0 0 8px rgba(224, 86, 253, 0.6); box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 0 15px rgba(224, 86, 253, 0.15); transition: all 0.3s ease;">
          <span class="citruss-icon" style="color: #e056fd;">magic_button</span> Purple Magic
        </button>

        <!-- Pink Glow -->
        <button class="citruss-btn" style="border-color: rgba(255, 75, 75, 0.45); text-shadow: 0 0 8px rgba(255, 75, 75, 0.6); box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 0 15px rgba(255, 75, 75, 0.15); transition: all 0.3s ease;">
          <span class="citruss-icon" style="color: #ff4757;">favorite</span> Heartbeat
        </button>

        <!-- Golden Glow -->
        <button class="citruss-btn" style="border-color: rgba(255, 218, 121, 0.45); text-shadow: 0 0 8px rgba(255, 218, 121, 0.6); box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 0 15px rgba(255, 218, 121, 0.15); transition: all 0.3s ease;">
          <span class="citruss-icon" style="color: #ffda79;">star</span> Legendary Star
        </button>

      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${_.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
        </div>
      </details>
    </div>
  `;o.parameters={docs:{source:{code:_}}};const H=`
<!-- Liquid & Advanced Glass Button Variations -->
<button class="citruss-btn glass-aurora">
  <span class="citruss-icon">ac_unit</span> Shifting Aurora
</button>

<button class="citruss-btn glass-liquid-lava">
  <span class="citruss-icon">local_fire_department</span> Liquid Lava
</button>

<button class="citruss-btn glass-liquid-ocean">
  <span class="citruss-icon">water</span> Liquid Ocean
</button>

<button class="citruss-btn glass-mirror">
  <span class="citruss-icon">brightness_high</span> Specular Mirror
</button>

<button class="citruss-btn glass-holographic">
  <span class="citruss-icon">filter_vintage</span> Holographic Prism
</button>

<button class="citruss-btn glass-neon-flow">
  <span class="citruss-icon">waves</span> Cyber Neon Flow
</button>
`.trim(),a=()=>`
    <div style="padding: 20px; font-family: 'Outfit', sans-serif;">
      <h3 style="font-weight: 800; color: var(--citruss-text-main); margin-bottom: 8px; font-size: 1.6rem;">Liquid & Glass Button Effects</h3>
      <p style="color: var(--citruss-text-muted); margin-bottom: 24px; font-size: 0.95rem;">
        Highly immersive fluid animations and high-gloss specular glass styling that responds organically on interactives.
      </p>
      
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; margin-bottom: 32px;">
        
        <!-- Aurora -->
        <button class="citruss-btn glass-aurora" style="font-weight: 700; letter-spacing: 0.02em;">
          <span class="citruss-icon">ac_unit</span> Shifting Aurora
        </button>

        <!-- Lava -->
        <button class="citruss-btn glass-liquid-lava" style="font-weight: 700; letter-spacing: 0.02em;">
          <span class="citruss-icon">local_fire_department</span> Liquid Lava
        </button>

        <!-- Ocean -->
        <button class="citruss-btn glass-liquid-ocean" style="font-weight: 700; letter-spacing: 0.02em;">
          <span class="citruss-icon">water</span> Liquid Ocean
        </button>

        <!-- Chrome Mirror -->
        <button class="citruss-btn glass-mirror" style="font-weight: 700; letter-spacing: 0.02em;">
          <span class="citruss-icon">brightness_high</span> Chrome Mirror
        </button>

        <!-- Holographic -->
        <button class="citruss-btn glass-holographic" style="font-weight: 700; letter-spacing: 0.02em;">
          <span class="citruss-icon">filter_vintage</span> Holographic Prism
        </button>

        <!-- Cyber Neon Flow -->
        <button class="citruss-btn glass-neon-flow" style="font-weight: 700; letter-spacing: 0.02em;">
          <span class="citruss-icon">waves</span> Cyber Neon Flow
        </button>

      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${H.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
        </div>
      </details>
    </div>
  `;a.parameters={docs:{source:{code:H}}};var l,u,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`({
  theme = 'primary',
  label = 'Interactive Action',
  size = 'normal'
}) => {
  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';
  const themeClass = theme !== 'default' ? \`btn-\${theme}\` : '';
  return \`
    <div style="padding: 20px; font-family: 'Outfit', sans-serif;">
      <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Interactive Preview (Use Controls):</h4>
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin-bottom: 24px;">
        <button class="citruss-btn \${themeClass} \${sizeClass}">\${label}</button>
      </div>

      <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-top: 24px; margin-bottom: 12px;">Button Varieties:</h4>
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin-bottom: 24px;">
        <button class="citruss-btn btn-primary \${sizeClass}">Orange Primary</button>
        <button class="citruss-btn btn-success \${sizeClass}">Lime Success</button>
        <button class="citruss-btn btn-danger \${sizeClass}">Danger Button</button>
        <button class="citruss-btn \${sizeClass}">Glass Neutral</button>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">\${buttonsHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
  \`;
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var b,d,g;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return \`
    <div style="padding: 20px; font-family: 'Outfit', sans-serif;">
      <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Standard Button Group:</h4>
      <div class="citruss-btn-group" style="margin-bottom: 24px;">
        <button class="citruss-btn active">Dashboard</button>
        <button class="citruss-btn">Analytics</button>
        <button class="citruss-btn">Settings</button>
      </div>

      <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-top: 24px; margin-bottom: 12px;">Icon Button Group:</h4>
      <div class="citruss-btn-group" style="margin-bottom: 24px;">
        <button class="citruss-btn active" title="Grid View">
          <span class="citruss-icon">grid_view</span>
        </button>
        <button class="citruss-btn" title="List View">
          <span class="citruss-icon">list</span>
        </button>
        <button class="citruss-btn" title="Map View">
          <span class="citruss-icon">map</span>
        </button>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">\${buttonGroupHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
  \`;
}`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var m,x,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return \`
    <div style="padding: 20px; font-family: 'Outfit', sans-serif;">
      
      <!-- Leading & Trailing -->
      <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Buttons with Leading/Trailing Icons:</h4>
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin-bottom: 24px;">
        <button class="citruss-btn btn-primary">
          <span class="citruss-icon">rocket_launch</span> Launch Project
        </button>
        <button class="citruss-btn btn-success">
          <span class="citruss-icon">check</span> Approve Task
        </button>
        <button class="citruss-btn btn-danger">
          <span class="citruss-icon">delete</span> Delete
        </button>
        <button class="citruss-btn">
          View Docs <span class="citruss-icon">arrow_forward</span>
        </button>
      </div>

      <!-- Icon-Only Sizing -->
      <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-top: 24px; margin-bottom: 12px;">Icon-Only Buttons (Square & Circle):</h4>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; margin-bottom: 24px;">
        <!-- Square -->
        <button class="citruss-btn btn-icon btn-sm">
          <span class="citruss-icon">add</span>
        </button>
        <button class="citruss-btn btn-icon btn-primary">
          <span class="citruss-icon">settings</span>
        </button>
        <button class="citruss-btn btn-icon btn-lg btn-success">
          <span class="citruss-icon">download</span>
        </button>

        <!-- Circle -->
        <button class="citruss-btn btn-icon btn-circle btn-sm btn-danger">
          <span class="citruss-icon">close</span>
        </button>
        <button class="citruss-btn btn-icon btn-circle btn-primary">
          <span class="citruss-icon">favorite</span>
        </button>
        <button class="citruss-btn btn-icon btn-circle btn-lg btn-success">
          <span class="citruss-icon">play_arrow</span>
        </button>
      </div>

      <!-- FAB Mockup (relative inside stories) -->
      <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-top: 24px; margin-bottom: 12px;">Floating Action Button (FAB) Preview:</h4>
      <div style="position: relative; height: 120px; border: 1px dashed var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.1); margin-bottom: 24px;">
        <span style="position: absolute; left: 16px; top: 16px; color: var(--citruss-text-muted); font-size: 0.85rem;">Mockup Area (Actual FAB floats bottom-right of page)</span>
        <button class="citruss-btn btn-primary citruss-btn-fab" style="position: absolute; right: 16px; bottom: 16px;">
          <span class="citruss-icon" style="font-size: 28px;">add</span>
        </button>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">\${iconButtonsHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
  \`;
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,v,w;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return \`
    <div style="padding: 20px; font-family: 'Outfit', sans-serif;">
      <style>
        .citruss-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-top-color: #fff;
          border-radius: 50%;
          animation: citruss-spin 0.8s linear infinite;
          display: inline-block;
        }
        @keyframes citruss-spin {
          to { transform: rotate(360deg); }
        }
      </style>

      <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Disabled Buttons:</h4>
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin-bottom: 24px;">
        <button class="citruss-btn btn-primary" disabled style="opacity: 0.5; cursor: not-allowed; pointer-events: none;">Disabled Primary</button>
        <button class="citruss-btn btn-success" disabled style="opacity: 0.5; cursor: not-allowed; pointer-events: none;">Disabled Success</button>
        <button class="citruss-btn btn-danger" disabled style="opacity: 0.5; cursor: not-allowed; pointer-events: none;">Disabled Danger</button>
        <button class="citruss-btn" disabled style="opacity: 0.5; cursor: not-allowed; pointer-events: none;">Disabled Glass</button>
      </div>

      <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-top: 24px; margin-bottom: 12px;">Loading States:</h4>
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin-bottom: 24px;">
        <button class="citruss-btn btn-primary" style="position: relative; pointer-events: none; gap: 8px;">
          <span class="citruss-spinner"></span> Processing...
        </button>
        <button class="citruss-btn btn-success" style="position: relative; pointer-events: none; gap: 8px;">
          <span class="citruss-spinner"></span> Saving Details...
        </button>
        <button class="citruss-btn btn-danger" style="position: relative; pointer-events: none; gap: 8px;">
          <span class="citruss-spinner"></span> Deleting...
        </button>
        <button class="citruss-btn" style="position: relative; pointer-events: none; gap: 8px;">
          <span class="citruss-spinner" style="border-top-color: var(--citruss-orange)"></span> Loading...
        </button>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">\${stateButtonsHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
  \`;
}`,...(w=(v=e.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var h,B,z;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return \`
    <div style="padding: 20px; font-family: 'Outfit', sans-serif;">
      <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Neon Glow & Premium Custom Accent Glass:</h4>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; margin-bottom: 24px;">
        
        <!-- Cyan Glow -->
        <button class="citruss-btn" style="border-color: rgba(0, 242, 254, 0.45); text-shadow: 0 0 8px rgba(0, 242, 254, 0.6); box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 0 15px rgba(0, 242, 254, 0.15); transition: all 0.3s ease;">
          <span class="citruss-icon" style="color: #00f2fe;">electric_bolt</span> Cyan Pulse
        </button>

        <!-- Purple Glow -->
        <button class="citruss-btn" style="border-color: rgba(224, 86, 253, 0.45); text-shadow: 0 0 8px rgba(224, 86, 253, 0.6); box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 0 15px rgba(224, 86, 253, 0.15); transition: all 0.3s ease;">
          <span class="citruss-icon" style="color: #e056fd;">magic_button</span> Purple Magic
        </button>

        <!-- Pink Glow -->
        <button class="citruss-btn" style="border-color: rgba(255, 75, 75, 0.45); text-shadow: 0 0 8px rgba(255, 75, 75, 0.6); box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 0 15px rgba(255, 75, 75, 0.15); transition: all 0.3s ease;">
          <span class="citruss-icon" style="color: #ff4757;">favorite</span> Heartbeat
        </button>

        <!-- Golden Glow -->
        <button class="citruss-btn" style="border-color: rgba(255, 218, 121, 0.45); text-shadow: 0 0 8px rgba(255, 218, 121, 0.6); box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 0 15px rgba(255, 218, 121, 0.15); transition: all 0.3s ease;">
          <span class="citruss-icon" style="color: #ffda79;">star</span> Legendary Star
        </button>

      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">\${customButtonsHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
  \`;
}`,...(z=(B=o.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var C,L,k;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return \`
    <div style="padding: 20px; font-family: 'Outfit', sans-serif;">
      <h3 style="font-weight: 800; color: var(--citruss-text-main); margin-bottom: 8px; font-size: 1.6rem;">Liquid & Glass Button Effects</h3>
      <p style="color: var(--citruss-text-muted); margin-bottom: 24px; font-size: 0.95rem;">
        Highly immersive fluid animations and high-gloss specular glass styling that responds organically on interactives.
      </p>
      
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; margin-bottom: 32px;">
        
        <!-- Aurora -->
        <button class="citruss-btn glass-aurora" style="font-weight: 700; letter-spacing: 0.02em;">
          <span class="citruss-icon">ac_unit</span> Shifting Aurora
        </button>

        <!-- Lava -->
        <button class="citruss-btn glass-liquid-lava" style="font-weight: 700; letter-spacing: 0.02em;">
          <span class="citruss-icon">local_fire_department</span> Liquid Lava
        </button>

        <!-- Ocean -->
        <button class="citruss-btn glass-liquid-ocean" style="font-weight: 700; letter-spacing: 0.02em;">
          <span class="citruss-icon">water</span> Liquid Ocean
        </button>

        <!-- Chrome Mirror -->
        <button class="citruss-btn glass-mirror" style="font-weight: 700; letter-spacing: 0.02em;">
          <span class="citruss-icon">brightness_high</span> Chrome Mirror
        </button>

        <!-- Holographic -->
        <button class="citruss-btn glass-holographic" style="font-weight: 700; letter-spacing: 0.02em;">
          <span class="citruss-icon">filter_vintage</span> Holographic Prism
        </button>

        <!-- Cyber Neon Flow -->
        <button class="citruss-btn glass-neon-flow" style="font-weight: 700; letter-spacing: 0.02em;">
          <span class="citruss-icon">waves</span> Cyber Neon Flow
        </button>

      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">\${liquidButtonsHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
  \`;
}`,...(k=(L=a.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};const E=["StandardButtons","ButtonGroups","IconButtons","ButtonStates","PremiumStyles","LiquidAndGlassEffects"];export{n as ButtonGroups,e as ButtonStates,r as IconButtons,a as LiquidAndGlassEffects,o as PremiumStyles,t as StandardButtons,E as __namedExportsOrder,A as default};
