const{useEffect:n}=__STORYBOOK_MODULE_PREVIEW_API__,a={title:"Interactive/Tooltips & Popovers"},s=`
<!-- CSS-Only Tooltips (Positioned via data attributes) -->
<button class="citruss-btn" data-citruss-tooltip="Top Tooltip Content" data-citruss-tooltip-pos="top">
  Top Tooltip
</button>
<button class="citruss-btn" data-citruss-tooltip="Bottom Tooltip Content" data-citruss-tooltip-pos="bottom">
  Bottom Tooltip
</button>
<button class="citruss-btn" data-citruss-tooltip="Left Tooltip Content" data-citruss-tooltip-pos="left">
  Left Tooltip
</button>
<button class="citruss-btn" data-citruss-tooltip="Right Tooltip Content" data-citruss-tooltip-pos="right">
  Right Tooltip
</button>

<!-- JS-Controlled Rich Popover (Example Trigger & Panel) -->
<button class="citruss-btn btn-primary" id="popover-trigger-right" data-citruss-popover-pos="right">
  Click Right Popover
</button>

<div id="popover-panel-right" class="citruss-popover" style="position: fixed; z-index: 9999;">
  <div class="popover-title" style="color: var(--citruss-tangerine);">Right Panel</div>
  <div class="popover-body">Interactive content aligned to the right.</div>
</div>
`.trim(),p=`
// Bind popover with directional control
if (window.CitruSS?.Popovers) {
  // Option A: Automatically reads data-citruss-popover-pos from the elements
  window.CitruSS.Popovers.bind('#popover-trigger-right', 'popover-panel-right');

  // Option B: Explicitly pass direction as the third parameter
  window.CitruSS.Popovers.bind('#popover-trigger-top', 'popover-panel-top', 'top');
}
`.trim(),o=()=>(n(()=>{var t;(t=window.CitruSS)!=null&&t.Popovers&&(window.CitruSS.Popovers.bind("#popover-trigger-top","popover-panel-top"),window.CitruSS.Popovers.bind("#popover-trigger-bottom","popover-panel-bottom"),window.CitruSS.Popovers.bind("#popover-trigger-left","popover-panel-left"),window.CitruSS.Popovers.bind("#popover-trigger-right","popover-panel-right"))},[]),`
    <div style="padding: 40px; font-family: 'Outfit', sans-serif;">
      <h3 style="color: var(--citruss-text-main); font-weight: 800; margin-bottom: 8px; font-size: 1.8rem; letter-spacing: -0.02em;">
        Tooltips & Popovers
      </h3>
      
      <p style="color: var(--citruss-text-muted); font-size: 0.95rem; margin-bottom: 36px; max-width: 650px; line-height: 1.6;">
        CitruSS supports high-performance CSS-based glassmorphic tooltips and interactive JavaScript-controlled popovers with full support for <strong>Top</strong>, <strong>Bottom</strong>, <strong>Left</strong>, and <strong>Right</strong> alignments.
      </p>

      <!-- CSS TOOLTIPS SECTION -->
      <div style="margin-bottom: 48px;">
        <h4 style="color: var(--citruss-orange); font-weight: 700; font-size: 1.1rem; margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
          <span class="material-symbols-rounded" style="font-size: 20px;">info</span>
          CSS-Only Hover Tooltips
        </h4>
        
        <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center; padding: 24px; border: 1px solid var(--citruss-glass-border); border-radius: 16px; background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(10px);">
          <!-- Top Tooltip -->
          <button class="citruss-btn" data-citruss-tooltip="Vibrant glass top tooltip!" data-citruss-tooltip-pos="top">
            Top Tooltip
          </button>
          
          <!-- Bottom Tooltip -->
          <button class="citruss-btn" data-citruss-tooltip="Vibrant glass bottom tooltip!" data-citruss-tooltip-pos="bottom">
            Bottom Tooltip
          </button>
          
          <!-- Left Tooltip -->
          <button class="citruss-btn" data-citruss-tooltip="Vibrant glass left tooltip!" data-citruss-tooltip-pos="left">
            Left Tooltip
          </button>
          
          <!-- Right Tooltip -->
          <button class="citruss-btn" data-citruss-tooltip="Vibrant glass right tooltip!" data-citruss-tooltip-pos="right">
            Right Tooltip
          </button>
        </div>
      </div>

      <!-- CLICK POPOVERS SECTION -->
      <div style="margin-bottom: 48px;">
        <h4 style="color: var(--citruss-lime); font-weight: 700; font-size: 1.1rem; margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
          <span class="material-symbols-rounded" style="font-size: 20px;">ads_click</span>
          JS-Controlled Rich Popovers
        </h4>
        
        <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center; padding: 24px; border: 1px solid var(--citruss-glass-border); border-radius: 16px; background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(10px);">
          <!-- Top Popover Trigger -->
          <button class="citruss-btn btn-primary" id="popover-trigger-top" data-citruss-popover-pos="top">
            Click - Top Popover
          </button>
          
          <!-- Bottom Popover Trigger -->
          <button class="citruss-btn btn-primary" id="popover-trigger-bottom" data-citruss-popover-pos="bottom">
            Click - Bottom Popover
          </button>
          
          <!-- Left Popover Trigger -->
          <button class="citruss-btn btn-primary" id="popover-trigger-left" data-citruss-popover-pos="left">
            Click - Left Popover
          </button>
          
          <!-- Right Popover Trigger -->
          <button class="citruss-btn btn-primary" id="popover-trigger-right" data-citruss-popover-pos="right">
            Click - Right Popover
          </button>
        </div>
      </div>

      <!-- Popover Box Panels (Markup initialized by JS position logic) -->
      
      <!-- Top Popover -->
      <div id="popover-panel-top" class="citruss-popover" style="position: fixed; z-index: 9999;">
        <div class="popover-title" style="color: var(--citruss-orange);">Top Cluster</div>
        <div class="popover-body">
          Server nodes are online. Active connections: 1,429. Average query load is healthy.
        </div>
      </div>
      
      <!-- Bottom Popover -->
      <div id="popover-panel-bottom" class="citruss-popover" style="position: fixed; z-index: 9999;">
        <div class="popover-title" style="color: var(--citruss-lime);">Bottom Analytics</div>
        <div class="popover-body">
          Monthly conversions increased by 14.8%. Customer satisfaction rate is 98.2%.
        </div>
      </div>
      
      <!-- Left Popover -->
      <div id="popover-panel-left" class="citruss-popover" style="position: fixed; z-index: 9999;">
        <div class="popover-title" style="color: #38bdf8;">Left Activity</div>
        <div class="popover-body">
          New system patch deployed at 04:12 UTC. No anomalies or resource leaks detected.
        </div>
      </div>
      
      <!-- Right Popover -->
      <div id="popover-panel-right" class="citruss-popover" style="position: fixed; z-index: 9999;">
        <div class="popover-title" style="color: #fbbf24;">Right Info</div>
        <div class="popover-body">
          Frankfurt region database backup complete. Size: 412 GB. Compression ratio: 4.2x.
        </div>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML & JS Code Examples
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto; display: flex; flex-direction: column; gap: 16px;">
          <div>
            <h5 style="color: var(--citruss-lime); margin: 0 0 8px 0; font-size: 0.85rem;">HTML Markup:</h5>
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">${s.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
          </div>
          <div>
            <h5 style="color: var(--citruss-orange); margin: 0 0 8px 0; font-size: 0.85rem;">Initialization JS:</h5>
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">${p.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
          </div>
        </div>
      </details>
    </div>
  `);o.parameters={docs:{source:{code:`${s}

/* Javascript */
${p}`}}};var i,r,e;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  useEffect(() => {
    if (window.CitruSS?.Popovers) {
      window.CitruSS.Popovers.bind('#popover-trigger-top', 'popover-panel-top');
      window.CitruSS.Popovers.bind('#popover-trigger-bottom', 'popover-panel-bottom');
      window.CitruSS.Popovers.bind('#popover-trigger-left', 'popover-panel-left');
      window.CitruSS.Popovers.bind('#popover-trigger-right', 'popover-panel-right');
    }
  }, []);
  return \`
    <div style="padding: 40px; font-family: 'Outfit', sans-serif;">
      <h3 style="color: var(--citruss-text-main); font-weight: 800; margin-bottom: 8px; font-size: 1.8rem; letter-spacing: -0.02em;">
        Tooltips & Popovers
      </h3>
      
      <p style="color: var(--citruss-text-muted); font-size: 0.95rem; margin-bottom: 36px; max-width: 650px; line-height: 1.6;">
        CitruSS supports high-performance CSS-based glassmorphic tooltips and interactive JavaScript-controlled popovers with full support for <strong>Top</strong>, <strong>Bottom</strong>, <strong>Left</strong>, and <strong>Right</strong> alignments.
      </p>

      <!-- CSS TOOLTIPS SECTION -->
      <div style="margin-bottom: 48px;">
        <h4 style="color: var(--citruss-orange); font-weight: 700; font-size: 1.1rem; margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
          <span class="material-symbols-rounded" style="font-size: 20px;">info</span>
          CSS-Only Hover Tooltips
        </h4>
        
        <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center; padding: 24px; border: 1px solid var(--citruss-glass-border); border-radius: 16px; background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(10px);">
          <!-- Top Tooltip -->
          <button class="citruss-btn" data-citruss-tooltip="Vibrant glass top tooltip!" data-citruss-tooltip-pos="top">
            Top Tooltip
          </button>
          
          <!-- Bottom Tooltip -->
          <button class="citruss-btn" data-citruss-tooltip="Vibrant glass bottom tooltip!" data-citruss-tooltip-pos="bottom">
            Bottom Tooltip
          </button>
          
          <!-- Left Tooltip -->
          <button class="citruss-btn" data-citruss-tooltip="Vibrant glass left tooltip!" data-citruss-tooltip-pos="left">
            Left Tooltip
          </button>
          
          <!-- Right Tooltip -->
          <button class="citruss-btn" data-citruss-tooltip="Vibrant glass right tooltip!" data-citruss-tooltip-pos="right">
            Right Tooltip
          </button>
        </div>
      </div>

      <!-- CLICK POPOVERS SECTION -->
      <div style="margin-bottom: 48px;">
        <h4 style="color: var(--citruss-lime); font-weight: 700; font-size: 1.1rem; margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
          <span class="material-symbols-rounded" style="font-size: 20px;">ads_click</span>
          JS-Controlled Rich Popovers
        </h4>
        
        <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center; padding: 24px; border: 1px solid var(--citruss-glass-border); border-radius: 16px; background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(10px);">
          <!-- Top Popover Trigger -->
          <button class="citruss-btn btn-primary" id="popover-trigger-top" data-citruss-popover-pos="top">
            Click - Top Popover
          </button>
          
          <!-- Bottom Popover Trigger -->
          <button class="citruss-btn btn-primary" id="popover-trigger-bottom" data-citruss-popover-pos="bottom">
            Click - Bottom Popover
          </button>
          
          <!-- Left Popover Trigger -->
          <button class="citruss-btn btn-primary" id="popover-trigger-left" data-citruss-popover-pos="left">
            Click - Left Popover
          </button>
          
          <!-- Right Popover Trigger -->
          <button class="citruss-btn btn-primary" id="popover-trigger-right" data-citruss-popover-pos="right">
            Click - Right Popover
          </button>
        </div>
      </div>

      <!-- Popover Box Panels (Markup initialized by JS position logic) -->
      
      <!-- Top Popover -->
      <div id="popover-panel-top" class="citruss-popover" style="position: fixed; z-index: 9999;">
        <div class="popover-title" style="color: var(--citruss-orange);">Top Cluster</div>
        <div class="popover-body">
          Server nodes are online. Active connections: 1,429. Average query load is healthy.
        </div>
      </div>
      
      <!-- Bottom Popover -->
      <div id="popover-panel-bottom" class="citruss-popover" style="position: fixed; z-index: 9999;">
        <div class="popover-title" style="color: var(--citruss-lime);">Bottom Analytics</div>
        <div class="popover-body">
          Monthly conversions increased by 14.8%. Customer satisfaction rate is 98.2%.
        </div>
      </div>
      
      <!-- Left Popover -->
      <div id="popover-panel-left" class="citruss-popover" style="position: fixed; z-index: 9999;">
        <div class="popover-title" style="color: #38bdf8;">Left Activity</div>
        <div class="popover-body">
          New system patch deployed at 04:12 UTC. No anomalies or resource leaks detected.
        </div>
      </div>
      
      <!-- Right Popover -->
      <div id="popover-panel-right" class="citruss-popover" style="position: fixed; z-index: 9999;">
        <div class="popover-title" style="color: #fbbf24;">Right Info</div>
        <div class="popover-body">
          Frankfurt region database backup complete. Size: 412 GB. Compression ratio: 4.2x.
        </div>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML & JS Code Examples
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto; display: flex; flex-direction: column; gap: 16px;">
          <div>
            <h5 style="color: var(--citruss-lime); margin: 0 0 8px 0; font-size: 0.85rem;">HTML Markup:</h5>
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">\${tooltipHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
          <div>
            <h5 style="color: var(--citruss-orange); margin: 0 0 8px 0; font-size: 0.85rem;">Initialization JS:</h5>
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">\${tooltipJS.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
        </div>
      </details>
    </div>
  \`;
}`,...(e=(r=o.parameters)==null?void 0:r.docs)==null?void 0:e.source}}};const l=["TooltipsAndPopovers"];export{o as TooltipsAndPopovers,l as __namedExportsOrder,a as default};
