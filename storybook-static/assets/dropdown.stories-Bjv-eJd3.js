const{useEffect:n}=__STORYBOOK_MODULE_PREVIEW_API__,l={title:"Forms/Dropdowns"},a=`
<!-- Single Select Dropdown -->
<div class="citruss-select-wrapper">
  <div class="citruss-select-trigger">
    <span class="trigger-text">Choose citrus fruit...</span>
  </div>
  <div class="citruss-dropdown-menu">
    <div class="dropdown-options">
      <div class="dropdown-item" data-value="orange">🍊 Orange (Portakal)</div>
      <div class="dropdown-item" data-value="lemon">🍋 Lemon (Limon)</div>
    </div>
  </div>
</div>

<!-- Multi-Select Dropdown with Search & Chips -->
<div class="citruss-select-wrapper" data-multiselect data-searchable>
  <div class="citruss-select-trigger">
    <div class="chips-container">
      <span class="trigger-text">Select multiple ingredients...</span>
    </div>
  </div>
  <div class="citruss-dropdown-menu">
    <div class="dropdown-search-box">
      <input type="text" placeholder="Search options...">
    </div>
    <div class="dropdown-options">
      <div class="dropdown-item" data-value="mint">🍃 Fresh Mint</div>
      <div class="dropdown-item" data-value="honey">🍯 Pure Honey</div>
    </div>
  </div>
</div>
`.trim(),o=`
// Initialize dropdowns in DOM
document.querySelectorAll('.citruss-select-wrapper').forEach(el => {
  const isMulti = el.hasAttribute('data-multiselect');
  new window.CitruSS.Dropdown(el, {
    multiple: isMulti,
    searchable: el.hasAttribute('data-searchable'),
    placeholder: 'Select items...'
  });
});
`.trim(),e=()=>(n(()=>{document.querySelectorAll(".citruss-select-wrapper").forEach(t=>{const d=t.hasAttribute("data-multiselect");new window.CitruSS.Dropdown(t,{multiple:d,searchable:t.hasAttribute("data-searchable"),placeholder:"Select items..."})})},[]),`
    <div style="padding: 40px; max-width: 500px; margin: 0 auto; min-height: 100vh;">
      <h3 style="color: var(--citruss-text-main); margin-bottom: 24px; font-weight: 800;">Custom Dropdowns</h3>
      
      <div style="margin-bottom: 32px;">
        <label style="color: var(--citruss-text-muted); font-size: 0.85rem; font-weight: 600; display:block; margin-bottom: 8px;">Single Select Dropdown</label>
        <div class="citruss-select-wrapper">
          <div class="citruss-select-trigger">
            <span class="trigger-text">Choose citrus fruit...</span>
          </div>
          <div class="citruss-dropdown-menu">
            <div class="dropdown-options">
              <div class="dropdown-item" data-value="orange">🍊 Orange (Portakal)</div>
              <div class="dropdown-item" data-value="tangerine">🍊 Tangerine (Mandalina)</div>
              <div class="dropdown-item" data-value="lemon">🍋 Lemon (Limon)</div>
              <div class="dropdown-item" data-value="lime">🍋 Lime (Misket Limonu)</div>
            </div>
          </div>
        </div>
      </div>
      
      <div style="margin-bottom: 32px;">
        <label style="color: var(--citruss-text-muted); font-size: 0.85rem; font-weight: 600; display:block; margin-bottom: 8px;">Multi-Select Dropdown with Search & Chips</label>
        <div class="citruss-select-wrapper" data-multiselect data-searchable>
          <div class="citruss-select-trigger">
            <div class="chips-container">
              <span class="trigger-text">Select multiple ingredients...</span>
            </div>
          </div>
          <div class="citruss-dropdown-menu">
            <div class="dropdown-search-box">
              <input type="text" placeholder="Search options...">
            </div>
            <div class="dropdown-options">
              <div class="dropdown-item" data-value="mint">🍃 Fresh Mint</div>
              <div class="dropdown-item" data-value="honey">🍯 Pure Honey</div>
              <div class="dropdown-item" data-value="ginger">🫚 Ginger Root</div>
              <div class="dropdown-item" data-value="ice">🧊 Crushed Ice</div>
              <div class="dropdown-item" data-value="soda">🥤 Sparkling Soda</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML & JS Code Examples
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto; display: flex; flex-direction: column; gap: 16px;">
          <div>
            <h5 style="color: var(--citruss-lime); margin: 0 0 8px 0; font-size: 0.85rem;">Dropdown HTML Structures:</h5>
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">${a.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
          </div>
          <div>
            <h5 style="color: var(--citruss-orange); margin: 0 0 8px 0; font-size: 0.85rem;">Binding JS:</h5>
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">${o.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
          </div>
        </div>
      </details>
    </div>
  `);e.parameters={docs:{source:{code:`${a}

/* Javascript */
${o}`}}};var i,s,r;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  useEffect(() => {
    // Bind dropdowns in DOM
    document.querySelectorAll('.citruss-select-wrapper').forEach(el => {
      const isMulti = el.hasAttribute('data-multiselect');
      new window.CitruSS.Dropdown(el, {
        multiple: isMulti,
        searchable: el.hasAttribute('data-searchable'),
        placeholder: 'Select items...'
      });
    });
  }, []);
  return \`
    <div style="padding: 40px; max-width: 500px; margin: 0 auto; min-height: 100vh;">
      <h3 style="color: var(--citruss-text-main); margin-bottom: 24px; font-weight: 800;">Custom Dropdowns</h3>
      
      <div style="margin-bottom: 32px;">
        <label style="color: var(--citruss-text-muted); font-size: 0.85rem; font-weight: 600; display:block; margin-bottom: 8px;">Single Select Dropdown</label>
        <div class="citruss-select-wrapper">
          <div class="citruss-select-trigger">
            <span class="trigger-text">Choose citrus fruit...</span>
          </div>
          <div class="citruss-dropdown-menu">
            <div class="dropdown-options">
              <div class="dropdown-item" data-value="orange">🍊 Orange (Portakal)</div>
              <div class="dropdown-item" data-value="tangerine">🍊 Tangerine (Mandalina)</div>
              <div class="dropdown-item" data-value="lemon">🍋 Lemon (Limon)</div>
              <div class="dropdown-item" data-value="lime">🍋 Lime (Misket Limonu)</div>
            </div>
          </div>
        </div>
      </div>
      
      <div style="margin-bottom: 32px;">
        <label style="color: var(--citruss-text-muted); font-size: 0.85rem; font-weight: 600; display:block; margin-bottom: 8px;">Multi-Select Dropdown with Search & Chips</label>
        <div class="citruss-select-wrapper" data-multiselect data-searchable>
          <div class="citruss-select-trigger">
            <div class="chips-container">
              <span class="trigger-text">Select multiple ingredients...</span>
            </div>
          </div>
          <div class="citruss-dropdown-menu">
            <div class="dropdown-search-box">
              <input type="text" placeholder="Search options...">
            </div>
            <div class="dropdown-options">
              <div class="dropdown-item" data-value="mint">🍃 Fresh Mint</div>
              <div class="dropdown-item" data-value="honey">🍯 Pure Honey</div>
              <div class="dropdown-item" data-value="ginger">🫚 Ginger Root</div>
              <div class="dropdown-item" data-value="ice">🧊 Crushed Ice</div>
              <div class="dropdown-item" data-value="soda">🥤 Sparkling Soda</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML & JS Code Examples
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto; display: flex; flex-direction: column; gap: 16px;">
          <div>
            <h5 style="color: var(--citruss-lime); margin: 0 0 8px 0; font-size: 0.85rem;">Dropdown HTML Structures:</h5>
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">\${dropdownHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
          <div>
            <h5 style="color: var(--citruss-orange); margin: 0 0 8px 0; font-size: 0.85rem;">Binding JS:</h5>
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">\${dropdownJS.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
        </div>
      </details>
    </div>
  \`;
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const c=["CustomSelect"];export{e as CustomSelect,c as __namedExportsOrder,l as default};
