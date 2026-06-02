const n={title:"Data Display/Tables"},r=`
<!-- Responsive Glassmorphic Table Container -->
<div class="citruss-table-container">
  <table class="citruss-table table-striped">
    <thead>
      <tr>
        <th>Cluster Operator</th>
        <th>Node Region</th>
        <th>Bandwidth</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Defne Truncgil</td>
        <td>🇹🇷 TR-Istanbul</td>
        <td>4.2 GB/s</td>
        <td><span class="citruss-badge badge-success">Online</span></td>
      </tr>
    </tbody>
  </table>
</div>
`.trim(),t=()=>`
    <div style="padding: 30px; max-width: 800px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Tables
      </h3>
      
      <div class="citruss-table-container" style="margin-bottom: 24px;">
        <table class="citruss-table table-striped">
          <thead>
            <tr>
              <th>Cluster Operator</th>
              <th>Node Region</th>
              <th>Bandwidth</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div class="citruss-avatar status-online avatar-sm" style="width: 32px; height: 32px;">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" alt="Defne Profile">
                  </div>
                  <span style="font-weight: 600; color: var(--citruss-text-main);">Defne Truncgil</span>
                </div>
              </td>
              <td>🇹🇷 TR-Istanbul</td>
              <td>4.2 GB/s</td>
              <td><span class="citruss-badge badge-success">Online</span></td>
            </tr>
            <tr>
              <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div class="citruss-avatar status-online avatar-sm" style="width: 32px; height: 32px;">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Yigit Profile">
                  </div>
                  <span style="font-weight: 600; color: var(--citruss-text-main);">Reva Truncgil</span>
                </div>
              </td>
              <td>🇩🇪 DE-Frankfurt</td>
              <td>3.8 GB/s</td>
              <td><span class="citruss-badge badge-success">Online</span></td>
            </tr>
            <tr>
              <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div class="citruss-avatar status-offline avatar-sm" style="width: 32px; height: 32px;">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" alt="Okan Profile">
                  </div>
                  <span style="font-weight: 600; color: var(--citruss-text-main);">Ümit Tuncgil</span>
                </div>
              </td>
              <td>🇬🇧 UK-London</td>
              <td>0.0 GB/s</td>
              <td><span class="citruss-badge badge-danger">Offline</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${r.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>
        </div>
      </details>
    </div>
  `;t.parameters={docs:{source:{code:r}}};var s,a,e;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return \`
    <div style="padding: 30px; max-width: 800px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Tables
      </h3>
      
      <div class="citruss-table-container" style="margin-bottom: 24px;">
        <table class="citruss-table table-striped">
          <thead>
            <tr>
              <th>Cluster Operator</th>
              <th>Node Region</th>
              <th>Bandwidth</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div class="citruss-avatar status-online avatar-sm" style="width: 32px; height: 32px;">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" alt="Defne Profile">
                  </div>
                  <span style="font-weight: 600; color: var(--citruss-text-main);">Defne Truncgil</span>
                </div>
              </td>
              <td>🇹🇷 TR-Istanbul</td>
              <td>4.2 GB/s</td>
              <td><span class="citruss-badge badge-success">Online</span></td>
            </tr>
            <tr>
              <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div class="citruss-avatar status-online avatar-sm" style="width: 32px; height: 32px;">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Yigit Profile">
                  </div>
                  <span style="font-weight: 600; color: var(--citruss-text-main);">Reva Truncgil</span>
                </div>
              </td>
              <td>🇩🇪 DE-Frankfurt</td>
              <td>3.8 GB/s</td>
              <td><span class="citruss-badge badge-success">Online</span></td>
            </tr>
            <tr>
              <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div class="citruss-avatar status-offline avatar-sm" style="width: 32px; height: 32px;">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" alt="Okan Profile">
                  </div>
                  <span style="font-weight: 600; color: var(--citruss-text-main);">Ümit Tuncgil</span>
                </div>
              </td>
              <td>🇬🇧 UK-London</td>
              <td>0.0 GB/s</td>
              <td><span class="citruss-badge badge-danger">Offline</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">\${tablesHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
  \`;
}`,...(e=(a=t.parameters)==null?void 0:a.docs)==null?void 0:e.source}}};const i=["TableShowcase"];export{t as TableShowcase,i as __namedExportsOrder,n as default};
