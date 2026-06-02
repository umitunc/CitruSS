const n={title:"Feedback/Progress Indicators"},t=`
<!-- Standard Progress Bar (45%) -->
<div class="citruss-progress-bar">
  <div class="progress-fill" style="width: 45%;"></div>
</div>

<!-- Lime Progress Bar (80%) -->
<div class="citruss-progress-bar progress-lime">
  <div class="progress-fill" style="width: 80%;"></div>
</div>

<!-- Glassmorphic Spinning Loader -->
<div class="citruss-spinner" style="
  width: 32px; 
  height: 32px; 
  border: 3px solid rgba(255,255,255,0.1); 
  border-top-color: var(--citruss-tangerine); 
  border-radius: 50%; 
  animation: spin 1s linear infinite;
"></div>
`.trim(),r=()=>`
    <div style="padding: 30px; max-width: 500px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Progress Indicators
      </h3>
      
      <div style="display: flex; flex-direction: column; gap: 24px;">
        
        <!-- Standard Tangerine Progress -->
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 8px;">Standard Tangerine (45%):</h4>
          <div class="citruss-progress-bar">
            <div class="progress-fill" style="width: 45%;"></div>
          </div>
        </div>

        <!-- Lime Progress -->
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 8px;">Lime Success (80%):</h4>
          <div class="citruss-progress-bar progress-lime">
            <div class="progress-fill" style="width: 80%;"></div>
          </div>
        </div>

        <!-- Spinning Loaders / Animations -->
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Spinning Loaders:</h4>
          <div style="display: flex; gap: 20px; align-items: center;">
            <div class="citruss-spinner" style="
              width: 32px; 
              height: 32px; 
              border: 3px solid rgba(255,255,255,0.1); 
              border-top-color: var(--citruss-tangerine); 
              border-radius: 50%; 
              animation: spin 1s linear infinite;
            "></div>
            
            <div class="citruss-spinner" style="
              width: 32px; 
              height: 32px; 
              border: 3px solid rgba(255,255,255,0.1); 
              border-top-color: var(--citruss-lime); 
              border-radius: 50%; 
              animation: spin 1s linear infinite;
            "></div>

            <span style="color: var(--citruss-text-muted); font-size: 0.9rem;">Analyzing server data...</span>
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
    
    <style>
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
  `;r.parameters={docs:{source:{code:t}}};var s,e,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return \`
    <div style="padding: 30px; max-width: 500px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Progress Indicators
      </h3>
      
      <div style="display: flex; flex-direction: column; gap: 24px;">
        
        <!-- Standard Tangerine Progress -->
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 8px;">Standard Tangerine (45%):</h4>
          <div class="citruss-progress-bar">
            <div class="progress-fill" style="width: 45%;"></div>
          </div>
        </div>

        <!-- Lime Progress -->
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 8px;">Lime Success (80%):</h4>
          <div class="citruss-progress-bar progress-lime">
            <div class="progress-fill" style="width: 80%;"></div>
          </div>
        </div>

        <!-- Spinning Loaders / Animations -->
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Spinning Loaders:</h4>
          <div style="display: flex; gap: 20px; align-items: center;">
            <div class="citruss-spinner" style="
              width: 32px; 
              height: 32px; 
              border: 3px solid rgba(255,255,255,0.1); 
              border-top-color: var(--citruss-tangerine); 
              border-radius: 50%; 
              animation: spin 1s linear infinite;
            "></div>
            
            <div class="citruss-spinner" style="
              width: 32px; 
              height: 32px; 
              border: 3px solid rgba(255,255,255,0.1); 
              border-top-color: var(--citruss-lime); 
              border-radius: 50%; 
              animation: spin 1s linear infinite;
            "></div>

            <span style="color: var(--citruss-text-muted); font-size: 0.9rem;">Analyzing server data...</span>
          </div>
        </div>

      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">\${progressHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
    
    <style>
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
  \`;
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const o=["ProgressShowcase"];export{r as ProgressShowcase,o as __namedExportsOrder,n as default};
