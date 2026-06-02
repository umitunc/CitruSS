const i={title:"Navigation/Breadcrumbs"},t=`
<!-- Standard Breadcrumbs Navigation -->
<div class="citruss-breadcrumbs">
  <a href="#" class="breadcrumb-item">Console</a>
  <span class="breadcrumb-separator">/</span>
  <a href="#" class="breadcrumb-item">Settings</a>
  <span class="breadcrumb-separator">/</span>
  <a href="#" class="breadcrumb-item active">Profile Options</a>
</div>
`.trim(),r=()=>`
    <div style="padding: 30px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Breadcrumbs
      </h3>
      
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <!-- Classic Usage -->
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Classic Usage:</h4>
          <div class="citruss-breadcrumbs">
            <a href="#" class="breadcrumb-item">Console</a>
            <span class="breadcrumb-separator">/</span>
            <a href="#" class="breadcrumb-item">Settings</a>
            <span class="breadcrumb-separator">/</span>
            <a href="#" class="breadcrumb-item active">Profile Options</a>
          </div>
        </div>

        <!-- Deep Layers -->
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Deep Layers:</h4>
          <div class="citruss-breadcrumbs">
            <a href="#" class="breadcrumb-item">Home</a>
            <span class="breadcrumb-separator">/</span>
            <a href="#" class="breadcrumb-item">Projects</a>
            <span class="breadcrumb-separator">/</span>
            <a href="#" class="breadcrumb-item">CitruSS UI</a>
            <span class="breadcrumb-separator">/</span>
            <a href="#" class="breadcrumb-item">Documentation</a>
            <span class="breadcrumb-separator">/</span>
            <a href="#" class="breadcrumb-item active">Components</a>
          </div>
        </div>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${t.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
        </div>
      </details>
    </div>
  `;r.parameters={docs:{source:{code:t}}};var a,s,e;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return \`
    <div style="padding: 30px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Breadcrumbs
      </h3>
      
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <!-- Classic Usage -->
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Classic Usage:</h4>
          <div class="citruss-breadcrumbs">
            <a href="#" class="breadcrumb-item">Console</a>
            <span class="breadcrumb-separator">/</span>
            <a href="#" class="breadcrumb-item">Settings</a>
            <span class="breadcrumb-separator">/</span>
            <a href="#" class="breadcrumb-item active">Profile Options</a>
          </div>
        </div>

        <!-- Deep Layers -->
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Deep Layers:</h4>
          <div class="citruss-breadcrumbs">
            <a href="#" class="breadcrumb-item">Home</a>
            <span class="breadcrumb-separator">/</span>
            <a href="#" class="breadcrumb-item">Projects</a>
            <span class="breadcrumb-separator">/</span>
            <a href="#" class="breadcrumb-item">CitruSS UI</a>
            <span class="breadcrumb-separator">/</span>
            <a href="#" class="breadcrumb-item">Documentation</a>
            <span class="breadcrumb-separator">/</span>
            <a href="#" class="breadcrumb-item active">Components</a>
          </div>
        </div>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">\${breadcrumbsHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
  \`;
}`,...(e=(s=r.parameters)==null?void 0:s.docs)==null?void 0:e.source}}};const c=["BreadcrumbShowcase"];export{r as BreadcrumbShowcase,c as __namedExportsOrder,i as default};
