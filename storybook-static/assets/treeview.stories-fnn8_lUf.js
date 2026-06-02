const{useEffect:d}=__STORYBOOK_MODULE_PREVIEW_API__,p={title:"Navigation/Treeview"},r=`
<!-- Standard Treeview Navigation -->
<div class="citruss-treeview">
  <!-- Folder Node -->
  <div class="tree-node">
    <span class="node-toggle expanded">▶</span>
    <span class="node-icon">📁</span>
    <span>src</span>
  </div>
  
  <!-- Nested List -->
  <ul>
    <div class="tree-node">
      <span class="node-toggle expanded">▶</span>
      <span class="node-icon">📁</span>
      <span>components</span>
    </div>
    <ul>
      <li class="tree-node">
        <span class="node-icon" style="color:var(--citruss-lime);">📄</span>
        <span>_accordion.scss</span>
      </li>
    </ul>
  </ul>
</div>
`.trim(),c=`
// Initialize Treeview toggle logic
document.querySelectorAll('.citruss-treeview .tree-node').forEach(node => {
  node.onclick = () => {
    const siblingList = node.nextElementSibling;
    const toggleIcon = node.querySelector('.node-toggle');
    if (siblingList && siblingList.tagName === 'UL') {
      const isCollapsed = siblingList.style.display === 'none';
      siblingList.style.display = isCollapsed ? 'flex' : 'none';
      if (toggleIcon) {
        toggleIcon.classList.toggle('expanded', isCollapsed);
      }
    }
  };
});
`.trim(),e=()=>(d(()=>{document.querySelectorAll(".citruss-treeview .tree-node").forEach(n=>{n.onclick=()=>{const s=n.nextElementSibling,o=n.querySelector(".node-toggle");if(s&&s.tagName==="UL"){const i=s.style.display==="none";s.style.display=i?"flex":"none",o&&o.classList.toggle("expanded",i)}}})},[]),`
    <div style="padding: 30px; max-width: 450px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Treeview Component
      </h3>
      
      <div class="citruss-treeview" style="margin-bottom: 32px;">
        <!-- Folder Node -->
        <div class="tree-node">
          <span class="node-toggle expanded">▶</span>
          <span class="node-icon">📁</span>
          <span>src</span>
        </div>
        
        <!-- Nested List -->
        <ul>
          <div class="tree-node">
            <span class="node-toggle expanded">▶</span>
            <span class="node-icon">📁</span>
            <span>components</span>
          </div>
          
          <ul>
            <li class="tree-node">
              <span class="node-icon" style="color:var(--citruss-lime);">📄</span>
              <span>_accordion.scss</span>
            </li>
            <li class="tree-node">
              <span class="node-icon" style="color:var(--citruss-lime);">📄</span>
              <span>_buttons.scss</span>
            </li>
            <li class="tree-node">
              <span class="node-icon" style="color:var(--citruss-lime);">📄</span>
              <span>_sidebar.scss</span>
            </li>
          </ul>

          <div class="tree-node">
            <span class="node-toggle">▶</span>
            <span class="node-icon">📁</span>
            <span>js</span>
          </div>
          
          <ul style="display: none;">
            <li class="tree-node">
              <span class="node-icon" style="color:#38bdf8;">📄</span>
              <span>index.js</span>
            </li>
          </ul>
        </ul>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML & JS Code Examples
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto; display: flex; flex-direction: column; gap: 16px;">
          <div>
            <h5 style="color: var(--citruss-lime); margin: 0 0 8px 0; font-size: 0.85rem;">Treeview HTML:</h5>
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">${r.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
          </div>
          <div>
            <h5 style="color: var(--citruss-orange); margin: 0 0 8px 0; font-size: 0.85rem;">Toggle Logic JS:</h5>
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">${c.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
          </div>
        </div>
      </details>
    </div>
  `);e.parameters={docs:{source:{code:`${r}

/* Javascript */
${c}`}}};var a,l,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  useEffect(() => {
    document.querySelectorAll('.citruss-treeview .tree-node').forEach(node => {
      node.onclick = () => {
        const siblingList = node.nextElementSibling;
        const toggleIcon = node.querySelector('.node-toggle');
        if (siblingList && siblingList.tagName === 'UL') {
          const isCollapsed = siblingList.style.display === 'none';
          siblingList.style.display = isCollapsed ? 'flex' : 'none';
          if (toggleIcon) {
            toggleIcon.classList.toggle('expanded', isCollapsed);
          }
        }
      };
    });
  }, []);
  return \`
    <div style="padding: 30px; max-width: 450px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Treeview Component
      </h3>
      
      <div class="citruss-treeview" style="margin-bottom: 32px;">
        <!-- Folder Node -->
        <div class="tree-node">
          <span class="node-toggle expanded">▶</span>
          <span class="node-icon">📁</span>
          <span>src</span>
        </div>
        
        <!-- Nested List -->
        <ul>
          <div class="tree-node">
            <span class="node-toggle expanded">▶</span>
            <span class="node-icon">📁</span>
            <span>components</span>
          </div>
          
          <ul>
            <li class="tree-node">
              <span class="node-icon" style="color:var(--citruss-lime);">📄</span>
              <span>_accordion.scss</span>
            </li>
            <li class="tree-node">
              <span class="node-icon" style="color:var(--citruss-lime);">📄</span>
              <span>_buttons.scss</span>
            </li>
            <li class="tree-node">
              <span class="node-icon" style="color:var(--citruss-lime);">📄</span>
              <span>_sidebar.scss</span>
            </li>
          </ul>

          <div class="tree-node">
            <span class="node-toggle">▶</span>
            <span class="node-icon">📁</span>
            <span>js</span>
          </div>
          
          <ul style="display: none;">
            <li class="tree-node">
              <span class="node-icon" style="color:#38bdf8;">📄</span>
              <span>index.js</span>
            </li>
          </ul>
        </ul>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML & JS Code Examples
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto; display: flex; flex-direction: column; gap: 16px;">
          <div>
            <h5 style="color: var(--citruss-lime); margin: 0 0 8px 0; font-size: 0.85rem;">Treeview HTML:</h5>
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">\${treeviewHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
          <div>
            <h5 style="color: var(--citruss-orange); margin: 0 0 8px 0; font-size: 0.85rem;">Toggle Logic JS:</h5>
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">\${treeviewJS.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
        </div>
      </details>
    </div>
  \`;
}`,...(t=(l=e.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};const g=["TreeviewShowcase"];export{e as TreeviewShowcase,g as __namedExportsOrder,p as default};
