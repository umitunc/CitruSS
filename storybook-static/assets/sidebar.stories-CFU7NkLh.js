const t={title:"Layout/Sidebar"},r=`
<!-- Standard Lateral Sidebar -->
<aside class="citruss-sidebar">
  <div class="sidebar-header">
    <div class="citruss-logo-area" style="display: flex; align-items: center; gap: 8px;">
      <img src="logo.png" alt="CitruSS Logo" style="height: 32px; width: auto; object-fit: contain;">
      <span style="font-size: 1.25rem; font-weight: 800; color: var(--citruss-tangerine); margin-left: 2px;">Pro</span>
    </div>
  </div>
  <div class="sidebar-nav">
    <a href="#" class="sidebar-link active">
      <span class="sidebar-icon">📊</span>
      <span>Dashboard</span>
    </a>
    <a href="#" class="sidebar-link">
      <span class="sidebar-icon">⚙️</span>
      <span>System Settings</span>
    </a>
  </div>
  <div class="sidebar-footer">
    <div class="citruss-avatar status-online avatar-sm">
      <img src="avatar.jpg" alt="User Profile">
    </div>
    <div class="user-details" style="font-size: 0.8rem; overflow: hidden; white-space: nowrap;">
      <div style="font-weight: 700; color: var(--citruss-text-main);">Ecem Truncgil</div>
      <div style="color: var(--citruss-text-muted); font-size: 0.7rem;">ecem@truncgil.com</div>
    </div>
  </div>
</aside>
`.trim(),s=()=>`
    <div style="padding: 20px; display: flex; flex-direction: column; align-items: center; gap: 32px; min-height: 500px;">
      <aside class="citruss-sidebar" style="position: relative; height: 500px; width: 260px; left: 0; box-shadow: none;">
        <div class="sidebar-header">
          <div class="citruss-logo-area" style="display: flex; align-items: center; gap: 8px;">
            <img src="./logos/citruss_logo_transparent.png" alt="CitruSS Logo" style="height: 32px; width: auto; object-fit: contain;">
            <span style="font-size: 1.25rem; font-weight: 800; color: var(--citruss-tangerine); margin-left: 2px;">Pro</span>
          </div>
        </div>
        <div class="sidebar-nav">
          <a href="#" class="sidebar-link active">
            <span class="sidebar-icon">📊</span>
            <span>Dashboard</span>
          </a>
          <a href="#" class="sidebar-link">
            <span class="sidebar-icon">🛡️</span>
            <span>Security Logs</span>
          </a>
          <a href="#" class="sidebar-link">
            <span class="sidebar-icon">⚙️</span>
            <span>System Settings</span>
          </a>
          <a href="#" class="sidebar-link">
            <span class="sidebar-icon">💡</span>
            <span>Integrations</span>
          </a>
        </div>
        <div class="sidebar-footer">
          <div class="citruss-avatar status-online avatar-sm">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="User Profile">
          </div>
          <div class="user-details" style="font-size: 0.8rem; overflow: hidden; white-space: nowrap;">
            <div style="font-weight: 700; color: var(--citruss-text-main);">Ecem Truncgil</div>
            <div style="color: var(--citruss-text-muted); font-size: 0.7rem;">ecem@truncgil.com</div>
          </div>
        </div>
      </aside>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="width: 100%; max-width: 600px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${r.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
        </div>
      </details>
    </div>
  `;s.parameters={docs:{source:{code:r}}};var a,e,i;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return \`
    <div style="padding: 20px; display: flex; flex-direction: column; align-items: center; gap: 32px; min-height: 500px;">
      <aside class="citruss-sidebar" style="position: relative; height: 500px; width: 260px; left: 0; box-shadow: none;">
        <div class="sidebar-header">
          <div class="citruss-logo-area" style="display: flex; align-items: center; gap: 8px;">
            <img src="./logos/citruss_logo_transparent.png" alt="CitruSS Logo" style="height: 32px; width: auto; object-fit: contain;">
            <span style="font-size: 1.25rem; font-weight: 800; color: var(--citruss-tangerine); margin-left: 2px;">Pro</span>
          </div>
        </div>
        <div class="sidebar-nav">
          <a href="#" class="sidebar-link active">
            <span class="sidebar-icon">📊</span>
            <span>Dashboard</span>
          </a>
          <a href="#" class="sidebar-link">
            <span class="sidebar-icon">🛡️</span>
            <span>Security Logs</span>
          </a>
          <a href="#" class="sidebar-link">
            <span class="sidebar-icon">⚙️</span>
            <span>System Settings</span>
          </a>
          <a href="#" class="sidebar-link">
            <span class="sidebar-icon">💡</span>
            <span>Integrations</span>
          </a>
        </div>
        <div class="sidebar-footer">
          <div class="citruss-avatar status-online avatar-sm">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="User Profile">
          </div>
          <div class="user-details" style="font-size: 0.8rem; overflow: hidden; white-space: nowrap;">
            <div style="font-weight: 700; color: var(--citruss-text-main);">Ecem Truncgil</div>
            <div style="color: var(--citruss-text-muted); font-size: 0.7rem;">ecem@truncgil.com</div>
          </div>
        </div>
      </aside>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="width: 100%; max-width: 600px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">\${sidebarHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
  \`;
}`,...(i=(e=s.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const n=["SidebarShowcase"];export{s as SidebarShowcase,n as __namedExportsOrder,t as default};
