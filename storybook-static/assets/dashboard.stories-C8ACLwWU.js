const c=()=>{const t=document.getElementById("theme-toggle-btn");if(t){const s=document.documentElement.getAttribute("data-theme")||"dark";t.textContent=s==="light"?"🌙 Dark Mode":"☀️ Light Mode",t.onclick=()=>{const n=document.documentElement.getAttribute("data-theme")==="light"?"dark":"light";document.documentElement.setAttribute("data-theme",n),t.textContent=n==="light"?"🌙 Dark Mode":"☀️ Light Mode",window.CitruSS.toast({title:"Theme Switched",message:`Interface successfully updated to ${n} mode.`,type:"info"})}}const e=document.getElementById("dashboard-sidebar"),i=document.getElementById("toggle-sidebar-mobile");if(i&&e){i.onclick=a=>{a.stopPropagation(),e.classList.toggle("open")};const s=document.querySelector(".citruss-dashboard-main");s&&(s.onclick=()=>{window.innerWidth<768&&e.classList.remove("open")})}const r=document.getElementById("btn-deploy-production");r&&(r.onclick=()=>{window.CitruSS.confirm("Deploy Current Build?","This will bundle assets and push to the live staging gateway.").then(s=>{s.isConfirmed&&window.CitruSS.toast({title:"Success",message:"Production deployment initiated successfully!",type:"success"})})})},H=()=>{typeof window<"u"&&!window.__citruss_nav_bound&&(window.__citruss_nav_bound=!0,document.addEventListener("click",t=>{const e=t.target.closest("[data-nav-target]");if(!e)return;t.preventDefault();const i=e.getAttribute("data-nav-target");window.CitruSS.toast({title:"Routing Action",message:`Loading workspace segment: ${i.toUpperCase()}`,type:"info"}),document.querySelectorAll("[data-nav-target]").forEach(h=>h.classList.remove("active")),document.querySelectorAll(`[data-nav-target="${i}"]`).forEach(h=>h.classList.add("active"));const n={admin:"showcase-pro-dashboard--admin-panel-dashboard",analytics:"showcase-pro-dashboard--analytics-dashboard",ecommerce:"showcase-pro-dashboard--e-commerce-storefront",kanban:"showcase-pro-dashboard--kanban-project-management",explorer:"showcase-pro-dashboard--cloud-explorer",login:"showcase-pro-dashboard--login-page",register:"showcase-pro-dashboard--register-page",settings:"showcase-pro-dashboard--user-settings","tabbed-settings":"showcase-pro-dashboard--tabbed-settings"}[i];n&&(window.__STORYBOOK_ADDONS_CHANNEL__&&window.__STORYBOOK_ADDONS_CHANNEL__.emit("setCurrentStory",{storyId:n}),window.parent&&window.parent.postMessage({type:"storybook-channel",event:{type:"setCurrentStory",args:[{storyId:n}]}},"*"))}))},o=t=>`
    <aside class="citruss-sidebar" id="dashboard-sidebar">
      <div class="sidebar-header">
        <div class="citruss-logo-area" style="display: flex; align-items: center; gap: 8px;">
          <img src="./logos/citruss_logo_transparent.png" alt="CitruSS Logo" style="height: 32px; width: auto; object-fit: contain;">
          <span style="font-size: 1.25rem; font-weight: 800; color: var(--citruss-tangerine); margin-left: 2px;">Pro</span>
        </div>
      </div>
      <div class="sidebar-nav">
        ${[{title:"Dashboards",links:[{id:"admin",label:"System Overview",icon:"dashboard"},{id:"analytics",label:"Telemetry & Analytics",icon:"bar_chart"},{id:"ecommerce",label:"E-Commerce Ops",icon:"payments"}]},{title:"App Templates",links:[{id:"kanban",label:"Kanban Board",icon:"view_kanban"},{id:"explorer",label:"Cloud Explorer",icon:"folder_open"}]},{title:"Authentication",links:[{id:"login",label:"Sign In Page",icon:"login"},{id:"register",label:"Sign Up Page",icon:"person_add"}]},{title:"Configuration",links:[{id:"settings",label:"Standard Settings",icon:"settings"},{id:"tabbed-settings",label:"Tabbed Settings",icon:"tab"}]}].map(r=>`
    <div class="sidebar-category" style="margin-top: 16px; margin-bottom: 6px; padding: 0 16px;">
      <span style="font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: var(--citruss-tangerine); opacity: 0.9;">${r.title}</span>
    </div>
    ${r.links.map(s=>`
      <a href="#" class="sidebar-link ${t===s.id?"active":""}" data-nav-target="${s.id}">
        <span class="citruss-icon icon-rounded">${s.icon}</span>
        <span>${s.label}</span>
      </a>
    `).join("")}
  `).join("")}
      </div>
      <div class="sidebar-footer">
        <div class="citruss-avatar status-online avatar-sm">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="User Profile">
        </div>
        <div class="user-details" style="font-size: 0.8rem; overflow: hidden; white-space: nowrap; flex: 1;">
          <div style="font-weight: 700; color: var(--citruss-text-main);">Ecem Tuncgil</div>
          <div style="color: var(--citruss-text-muted); font-size: 0.7rem;">ecem@truncgil.com</div>
        </div>
      </div>
    </aside>
  `,l=t=>`
    <nav class="citruss-navbar">
      <div class="citruss-d-flex citruss-align-items-center citruss-gap-sm">
        <button class="citruss-btn btn-sm" id="toggle-sidebar-mobile" style="display: none; @media(max-width: 768px) { display: flex; }">
          <span class="citruss-icon icon-rounded">menu</span>
        </button>
        <div class="citruss-breadcrumbs">
          <a href="#" class="breadcrumb-item">Console</a>
          <span class="breadcrumb-separator">/</span>
          <a href="#" class="breadcrumb-item active">${t}</a>
        </div>
      </div>
      
      <div class="citruss-d-flex citruss-align-items-center citruss-gap-md">
        <button class="citruss-btn btn-sm" id="theme-toggle-btn">☀️ Light Mode</button>
        <button class="citruss-btn btn-sm btn-primary" id="btn-deploy-production">
          <span class="citruss-icon icon-rounded icon-sm" style="margin-right: 4px;">rocket_launch</span>
          <span>Deploy Build</span>
        </button>
      </div>
    </nav>
  `,Y=t=>(t(()=>{var r,s,a;c();const e=document.getElementById("dashboard-multiselect");e&&((r=window.CitruSS)!=null&&r.Dropdown)&&new window.CitruSS.Dropdown(e,{multiple:!0,searchable:!0,placeholder:"Filter by server tags..."});const i=document.getElementById("faq-accordion-group");i&&((s=window.CitruSS)!=null&&s.Accordion)&&new window.CitruSS.Accordion(i),(a=window.CitruSS)!=null&&a.Wizard&&document.getElementById("dashboard-setup-wizard")&&new window.CitruSS.Wizard("dashboard-setup-wizard")},[]),`
    <div class="citruss-dashboard-shell">
      ${o("admin")}
      
      <div class="citruss-dashboard-main">
        ${l("System Dashboard")}

        <div class="citruss-dashboard-content">
          <!-- 3 Columns Metrics Grid -->
          <div class="citruss-row">
            <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
              <div class="citruss-card animate-fade-in" style="animation-delay: 0.1s;">
                <div class="card-content">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                    <div class="metric-title">GPU Performance</div>
                    <span class="citruss-icon-badge badge-sm badge-orange" style="margin: 0;"><span class="citruss-icon">developer_board</span></span>
                  </div>
                  <div class="metric-value">62.8 FPS</div>
                  <div class="metric-trend trend-up" style="display: flex; align-items: center; gap: 4px; color: var(--citruss-lime); font-size: 0.8rem; margin-top: 8px;">
                    <span class="citruss-icon icon-sm">trending_up</span> Hardware acceleration active
                  </div>
                </div>
              </div>
            </div>
            
            <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
              <div class="citruss-card card-lime animate-fade-in" style="animation-delay: 0.2s;">
                <div class="card-content">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                    <div class="metric-title">Memory Allocation</div>
                    <span class="citruss-icon-badge badge-sm badge-lime" style="margin: 0;"><span class="citruss-icon">memory</span></span>
                  </div>
                  <div class="metric-value">14.8 MB</div>
                  <div class="metric-trend trend-up" style="display: flex; align-items: center; gap: 4px; color: var(--citruss-lime); font-size: 0.8rem; margin-top: 8px;">
                    <span class="citruss-icon icon-sm">compress</span> 99.8% compression ratio
                  </div>
                </div>
              </div>
            </div>
            
            <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
              <div class="citruss-card animate-fade-in" style="animation-delay: 0.3s;">
                <div class="card-content">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                    <div class="metric-title">Response Latency</div>
                    <span class="citruss-icon-badge badge-sm badge-lemon" style="margin: 0;"><span class="citruss-icon">speed</span></span>
                  </div>
                  <div class="metric-value">12 ms</div>
                  <div class="metric-trend trend-down" style="display: flex; align-items: center; gap: 4px; color: var(--citruss-danger); font-size: 0.8rem; margin-top: 8px;">
                    <span class="citruss-icon icon-sm">bolt</span> Zero-delay bypass mode
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Main Grid Row -->
          <div class="citruss-row">
            <!-- Left Side: Table & Active Nodes -->
            <div class="citruss-col-12 citruss-col-lg-8 citruss-mb-lg">
              <div class="citruss-card citruss-h-100" style="padding: 24px;">
                <div class="card-content">
                  <div class="citruss-d-flex citruss-justify-content-between citruss-align-items-center citruss-mb-lg" style="flex-wrap: wrap; gap: 12px;">
                    <h3 style="font-weight: 800; font-size: 1.2rem; color: var(--citruss-text-main); display: flex; align-items: center; gap: 8px;">
                      <span class="citruss-icon icon-orange">lan</span> Cluster Active Instances
                    </h3>
                    <div style="width: 240px;">
                      <div class="citruss-select-wrapper" id="dashboard-multiselect" data-multiselect data-searchable>
                        <div class="citruss-select-trigger" style="min-height: 38px; padding: 6px 12px;">
                          <div class="chips-container"><span class="trigger-text" style="font-size: 0.8rem;">Filter nodes...</span></div>
                        </div>
                        <div class="citruss-dropdown-menu">
                          <div class="dropdown-search-box"><input type="text" placeholder="Search clusters..."></div>
                          <div class="dropdown-options">
                            <div class="dropdown-item" data-value="istanbul">🇹🇷 TR-Istanbul</div>
                            <div class="dropdown-item" data-value="frankfurt">🇩🇪 DE-Frankfurt</div>
                            <div class="dropdown-item" data-value="london">🇬🇧 UK-London</div>
                            <div class="dropdown-item" data-value="newyork">🇺🇸 US-NewYork</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="citruss-table-container">
                    <table class="citruss-table table-striped">
                      <thead>
                        <tr>
                          <th>Operator</th>
                          <th>Node Status</th>
                          <th>Bandwidth</th>
                          <th>Activity Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="citruss-d-flex citruss-align-items-center citruss-gap-sm">
                              <div class="citruss-avatar status-online avatar-sm">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" alt="Av">
                              </div>
                              <span style="font-weight: 600;">Defne Tuncgil</span>
                            </div>
                          </td>
                          <td><span class="citruss-badge badge-success">Online</span></td>
                          <td>4.2 GB/s</td>
                          <td><div style="font-size: 0.8rem; color:var(--citruss-text-muted);">Active queries routing</div></td>
                        </tr>
                        <tr>
                          <td>
                            <div class="citruss-d-flex citruss-align-items-center citruss-gap-sm">
                              <div class="citruss-avatar status-online avatar-sm">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Av">
                              </div>
                              <span style="font-weight: 600;">Reva Tuncgil</span>
                            </div>
                          </td>
                          <td><span class="citruss-badge badge-success">Online</span></td>
                          <td>3.8 GB/s</td>
                          <td><div style="font-size: 0.8rem; color:var(--citruss-text-muted);">Idle monitoring connection</div></td>
                        </tr>
                        <tr>
                          <td>
                            <div class="citruss-d-flex citruss-align-items-center citruss-gap-sm">
                              <div class="citruss-avatar status-offline avatar-sm">
                                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" alt="Av">
                              </div>
                              <span style="font-weight: 600;">Ümit Tuncgil</span>
                            </div>
                          </td>
                          <td><span class="citruss-badge badge-danger">Offline</span></td>
                          <td>0.0 GB/s</td>
                          <td><div style="font-size: 0.8rem; color:var(--citruss-text-muted);">Sync backup pending</div></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Side: Activity Log Timeline -->
            <div class="citruss-col-12 citruss-col-lg-4 citruss-mb-lg">
              <div class="citruss-card citruss-h-100">
                <div class="card-content">
                  <h3 style="font-weight: 800; font-size: 1.2rem; color: var(--citruss-text-main); margin-bottom: 24px; display: flex; align-items: center; gap: 8px;">
                    <span class="citruss-icon icon-orange">history</span> Active Event Logs
                  </h3>
                  
                  <div class="citruss-timeline">
                    <div class="timeline-item timeline-success">
                      <div class="timeline-time">10:48 AM</div>
                      <div class="timeline-title">Sync Cluster Frankfurt</div>
                      <div class="timeline-content">Database nodes successfully completed replication checks.</div>
                    </div>
                    <div class="timeline-item timeline-warning">
                      <div class="timeline-time">09:15 AM</div>
                      <div class="timeline-title">Visual CSS regression tests</div>
                      <div class="timeline-content">BackstopJS regression validated with 100% match.</div>
                    </div>
                    <div class="timeline-item timeline-info">
                      <div class="timeline-time">08:00 AM</div>
                      <div class="timeline-title">Engine Initialization</div>
                      <div class="timeline-content">Vite bundler generated production ready glassmorphic css files.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Grid Row: Wizard & Accordion -->
          <div class="citruss-row">
            <div class="citruss-col-12 citruss-col-md-6 citruss-mb-lg">
              <div class="citruss-card">
                <div class="card-content">
                  <h3 style="font-weight: 800; font-size: 1.2rem; color: var(--citruss-text-main); margin-bottom: 24px; display: flex; align-items: center; gap: 8px;">
                    <span class="citruss-icon icon-orange">help_outline</span> Core Engine FAQs
                  </h3>
                  
                  <div id="faq-accordion-group">
                    <div class="citruss-accordion active">
                      <div class="accordion-header">
                        <span>How are 60+ FPS glass shadows protected?</span>
                        <span class="arrow">▼</span>
                      </div>
                      <div class="accordion-body">
                        CitruSS enforces a viewport restriction of max 5 simultaneous blur layers. Inner children do not double-render filters, saving massive graphics card cycle overhead.
                      </div>
                    </div>
                    
                    <div class="citruss-accordion">
                      <div class="accordion-header">
                        <span>Is WCAG Contrast standard compliant?</span>
                        <span class="arrow">▼</span>
                      </div>
                      <div class="accordion-body">
                        Yes, a dark shadow mask sits statically under primary cards ensuring a minimum ratio of 4.5:1 on any visual backing.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="citruss-col-12 citruss-col-md-6 citruss-mb-lg">
              <div class="citruss-card" id="dashboard-setup-wizard">
                <div class="card-content">
                  <h3 style="font-weight: 800; font-size: 1.2rem; color: var(--citruss-text-main); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                    <span class="citruss-icon icon-orange">auto_awesome</span> Integration Wizard
                  </h3>
                  
                  <div class="citruss-progress-bar progress-lime citruss-mb-lg">
                    <div class="progress-fill" style="width: 0%;"></div>
                  </div>
                  
                  <div class="citruss-wizard-steps-header citruss-mb-lg">
                    <div class="wizard-step-node active">1</div>
                    <div class="wizard-step-node">2</div>
                    <div class="wizard-step-node">3</div>
                  </div>
                  
                  <div class="citruss-wizard-step">
                    <h4 style="color:var(--citruss-text-main); font-weight:700; margin-bottom: 8px;">Step 1: Install Package</h4>
                    <p style="color:var(--citruss-text-muted); font-size: 0.85rem; margin-bottom:16px;">
                      Run npm command inside terminal to install our zero-dependency glassmorphism engine:
                    </p>
                    <code style="display:block; padding:12px; background:rgba(0,0,0,0.2); border-radius:6px; border:1px solid var(--citruss-glass-border); color:var(--citruss-tangerine); font-size: 0.8rem; margin-bottom:16px;">
                      npm install citruss-ui
                    </code>
                  </div>
                  
                  <div class="citruss-wizard-step" style="display: none;">
                    <h4 style="color:var(--citruss-text-main); font-weight:700; margin-bottom: 8px;">Step 2: Import stylesheet</h4>
                    <p style="color:var(--citruss-text-muted); font-size: 0.85rem; margin-bottom:16px;">
                      Directly import compiled library CSS at top of your primary module entrypoint:
                    </p>
                    <code style="display:block; padding:12px; background:rgba(0,0,0,0.2); border-radius:6px; border:1px solid var(--citruss-glass-border); color:var(--citruss-tangerine); font-size: 0.8rem; margin-bottom:16px;">
                      import 'citruss-ui/dist/citruss.css';
                    </code>
                  </div>

                  <div class="citruss-wizard-step" style="display: none;">
                    <h4 style="color:var(--citruss-text-main); font-weight:700; margin-bottom: 8px;">Step 3: Setup verified!</h4>
                    <p style="color:var(--citruss-text-muted); font-size: 0.85rem; margin-bottom:16px;">
                      Perfect! Standard templates and vibrant custom widgets are fully accessible in your project codebase.
                    </p>
                  </div>
                  
                  <div class="citruss-d-flex citruss-gap-md" style="justify-content: flex-end;">
                    <button class="citruss-btn btn-sm wizard-prev">Previous</button>
                    <button class="citruss-btn btn-sm btn-primary wizard-next">Next step</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `),J=t=>(t(()=>{c();const e=document.getElementById("telemetry-memory-usage"),i=document.getElementById("telemetry-cpu-load"),r=document.getElementById("telemetry-network-rate"),s=setInterval(()=>{if(e){const n=(parseFloat(e.textContent)+(Math.random()*.4-.2)).toFixed(1);e.textContent=`${Math.max(10,Math.min(99,n))}%`}if(i){const a=Math.floor(Math.random()*15+45);i.textContent=`${a}%`;const n=document.getElementById("cpu-progress-fill");n&&(n.style.width=`${a}%`)}if(r){const a=(Math.random()*4+18).toFixed(2);r.textContent=`${a} MB/s`}},2500);return()=>clearInterval(s)},[]),`
    <div class="citruss-dashboard-shell">
      ${o("analytics")}
      
      <div class="citruss-dashboard-main">
        ${l("Telemetry & Analytics")}

        <div class="citruss-dashboard-content">
          <!-- Live Telemetry KPI Metrics -->
          <div class="citruss-row">
            <div class="citruss-col-12 citruss-col-md-3 citruss-mb-md">
              <div class="citruss-card card-orange" style="background: linear-gradient(135deg, rgba(255, 107, 0, 0.15) 0%, rgba(255, 107, 0, 0.03) 100%);">
                <div class="card-content">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <div class="metric-title" style="color: var(--citruss-tangerine); font-weight:700;">Avg CPU Load</div>
                    <span class="citruss-icon-badge badge-sm badge-orange" style="margin: 0;"><span class="citruss-icon">troubleshoot</span></span>
                  </div>
                  <div class="metric-value" id="telemetry-cpu-load">52%</div>
                  <div style="margin-top: 12px;">
                    <div class="citruss-progress-bar progress-orange">
                      <div class="progress-fill" id="cpu-progress-fill" style="width: 52%; transition: width 0.5s ease;"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="citruss-col-12 citruss-col-md-3 citruss-mb-md">
              <div class="citruss-card card-lime" style="background: linear-gradient(135deg, rgba(163, 230, 53, 0.15) 0%, rgba(163, 230, 53, 0.03) 100%);">
                <div class="card-content">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <div class="metric-title" style="color: var(--citruss-lime); font-weight:700;">Memory Occupancy</div>
                    <span class="citruss-icon-badge badge-sm badge-lime" style="margin: 0;"><span class="citruss-icon">analytics</span></span>
                  </div>
                  <div class="metric-value" id="telemetry-memory-usage">34.2%</div>
                  <div style="font-size: 0.8rem; color: var(--citruss-lime); font-weight: 600; display: flex; align-items: center; gap: 4px; margin-top: 8px;">
                    <span class="citruss-icon icon-sm">check_circle</span> Heap limit well within limits
                  </div>
                </div>
              </div>
            </div>

            <div class="citruss-col-12 citruss-col-md-3 citruss-mb-md">
              <div class="citruss-card card-lemon" style="background: linear-gradient(135deg, rgba(234, 179, 8, 0.15) 0%, rgba(234, 179, 8, 0.03) 100%);">
                <div class="card-content">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <div class="metric-title" style="color: var(--citruss-lemon); font-weight:700;">Ingress Traffic</div>
                    <span class="citruss-icon-badge badge-sm badge-lemon" style="margin: 0;"><span class="citruss-icon">swap_vert</span></span>
                  </div>
                  <div class="metric-value" id="telemetry-network-rate">21.84 MB/s</div>
                  <div style="font-size: 0.8rem; color: var(--citruss-text-muted); display: flex; align-items: center; gap: 4px; margin-top: 8px;">
                    <span class="citruss-icon icon-sm">trending_up</span> Peak ingress at 44.1 MB/s
                  </div>
                </div>
              </div>
            </div>

            <div class="citruss-col-12 citruss-col-md-3 citruss-mb-md">
              <div class="citruss-card" style="background: rgba(255,255,255,0.02);">
                <div class="card-content">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <div class="metric-title">Active Consumers</div>
                    <span class="citruss-icon-badge badge-sm badge-neutral" style="margin: 0;"><span class="citruss-icon">groups</span></span>
                  </div>
                  <div class="metric-value">4,912</div>
                  <div style="color: var(--citruss-lime); font-size: 0.8rem; font-weight:600; display:flex; align-items:center; gap:4px; margin-top: 8px;">
                    <span class="citruss-icon icon-sm">trending_up</span> +842 new sessions
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Main Analytics Visualization -->
          <div class="citruss-row">
            <div class="citruss-col-12 citruss-col-lg-8 citruss-mb-lg">
              <div class="citruss-card" style="padding: 24px;">
                <div class="card-content">
                  <h3 style="font-weight: 800; font-size: 1.2rem; margin-bottom: 24px; display: flex; align-items: center; gap: 8px;">
                    <span class="citruss-icon icon-orange">stacked_bar_chart</span> Ingress Telemetry Breakdown (Last 6 Hours)
                  </h3>

                  <!-- Mock Bar Visuals using flex and glass blocks -->
                  <div style="display: flex; align-items: flex-end; justify-content: space-between; height: 260px; padding: 20px 10px; background: rgba(0, 0, 0, 0.2); border-radius: 12px; border: 1px solid var(--citruss-glass-border); margin-bottom: 20px;">
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1;">
                      <div style="width: 24px; height: 120px; background: linear-gradient(to top, var(--citruss-tangerine) 30%, var(--citruss-lime) 100%); border-radius: 6px; box-shadow: 0 4px 12px rgba(255, 107, 0, 0.3);"></div>
                      <span style="font-size: 0.75rem; color: var(--citruss-text-muted);">12:00</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1;">
                      <div style="width: 24px; height: 160px; background: linear-gradient(to top, var(--citruss-tangerine) 30%, var(--citruss-lime) 100%); border-radius: 6px; box-shadow: 0 4px 12px rgba(255, 107, 0, 0.3);"></div>
                      <span style="font-size: 0.75rem; color: var(--citruss-text-muted);">13:00</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1;">
                      <div style="width: 24px; height: 90px; background: linear-gradient(to top, var(--citruss-tangerine) 30%, var(--citruss-lime) 100%); border-radius: 6px; box-shadow: 0 4px 12px rgba(255, 107, 0, 0.3);"></div>
                      <span style="font-size: 0.75rem; color: var(--citruss-text-muted);">14:00</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1;">
                      <div style="width: 24px; height: 210px; background: linear-gradient(to top, var(--citruss-tangerine) 30%, var(--citruss-lime) 100%); border-radius: 6px; box-shadow: 0 4px 12px rgba(255, 107, 0, 0.3);"></div>
                      <span style="font-size: 0.75rem; color: var(--citruss-text-muted);">15:00</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1;">
                      <div style="width: 24px; height: 180px; background: linear-gradient(to top, var(--citruss-tangerine) 30%, var(--citruss-lime) 100%); border-radius: 6px; box-shadow: 0 4px 12px rgba(255, 107, 0, 0.3);"></div>
                      <span style="font-size: 0.75rem; color: var(--citruss-text-muted);">16:00</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1;">
                      <div style="width: 24px; height: 230px; background: linear-gradient(to top, var(--citruss-tangerine) 30%, var(--citruss-lime) 100%); border-radius: 6px; box-shadow: 0 4px 12px rgba(255, 107, 0, 0.4);"></div>
                      <span style="font-size: 0.75rem; color: var(--citruss-text-main); font-weight:700;">17:00</span>
                    </div>
                  </div>

                  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                    <div style="font-size:0.8rem; color:var(--citruss-text-muted);">
                      Note: Values reflect aggregate requests processed per minute across TR and DE nodes.
                    </div>
                    <button class="citruss-btn btn-sm btn-primary">
                      <span class="citruss-icon icon-sm" style="margin-right:4px;">download</span> Export CSV Report
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Side Segment: Telemetry Alerts -->
            <div class="citruss-col-12 citruss-col-lg-4 citruss-mb-lg">
              <div class="citruss-card citruss-h-100" style="padding: 24px;">
                <div class="card-content">
                  <h3 style="font-weight: 800; font-size: 1.2rem; margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
                    <span class="citruss-icon icon-orange">notifications_active</span> Live Telemetry Alerts
                  </h3>

                  <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div style="padding: 12px; border-radius: 8px; border-left: 4px solid var(--citruss-danger); background: rgba(239, 68, 68, 0.08); font-size: 0.85rem;">
                      <div style="font-weight:700; color:var(--citruss-text-main); display:flex; align-items:center; justify-content:space-between; margin-bottom:4px;">
                        <span>High Latency Spike</span>
                        <span style="font-size:0.75rem; opacity:0.7;">1 min ago</span>
                      </div>
                      <div style="color:var(--citruss-text-muted);">TR-Istanbul gateway exceeded standard 15ms threshhold (22ms recorded).</div>
                    </div>

                    <div style="padding: 12px; border-radius: 8px; border-left: 4px solid var(--citruss-lime); background: rgba(163, 230, 53, 0.08); font-size: 0.85rem;">
                      <div style="font-weight:700; color:var(--citruss-text-main); display:flex; align-items:center; justify-content:space-between; margin-bottom:4px;">
                        <span>Replication Sync Done</span>
                        <span style="font-size:0.75rem; opacity:0.7;">15 mins ago</span>
                      </div>
                      <div style="color:var(--citruss-text-muted);">DE-Frankfurt backup replication completed in 1.4 seconds.</div>
                    </div>

                    <div style="padding: 12px; border-radius: 8px; border-left: 4px solid var(--citruss-tangerine); background: rgba(255, 107, 0, 0.08); font-size: 0.85rem;">
                      <div style="font-weight:700; color:var(--citruss-text-main); display:flex; align-items:center; justify-content:space-between; margin-bottom:4px;">
                        <span>Compression Active</span>
                        <span style="font-size:0.75rem; opacity:0.7;">1 hour ago</span>
                      </div>
                      <div style="color:var(--citruss-text-muted);">99.8% static asset compression ratio triggered on build asset bundlers.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `),Q=t=>(t(()=>{c()},[]),`
    <div class="citruss-dashboard-shell">
      ${o("ecommerce")}
      
      <div class="citruss-dashboard-main">
        ${l("E-Commerce Operations")}

        <div class="citruss-dashboard-content">
          <div class="citruss-row">
            <div class="citruss-col-12 citruss-col-md-3 citruss-mb-md">
              <div class="citruss-card">
                <div class="card-content">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <div class="metric-title">Gross Revenue</div>
                    <span class="citruss-icon-badge badge-sm badge-orange" style="margin: 0;"><span class="citruss-icon">attach_money</span></span>
                  </div>
                  <div class="metric-value">$84,240</div>
                  <div style="color: var(--citruss-lime); font-size: 0.8rem; font-weight:600; display:flex; align-items:center; gap:4px; margin-top: 8px;">
                    <span class="citruss-icon icon-sm">trending_up</span> +14.2% from last week
                  </div>
                </div>
              </div>
            </div>
            
            <div class="citruss-col-12 citruss-col-md-3 citruss-mb-md">
              <div class="citruss-card">
                <div class="card-content">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <div class="metric-title">Active Orders</div>
                    <span class="citruss-icon-badge badge-sm badge-lime" style="margin: 0;"><span class="citruss-icon">shopping_bag</span></span>
                  </div>
                  <div class="metric-value">1,482</div>
                  <div style="color: var(--citruss-lime); font-size: 0.8rem; font-weight:600; display:flex; align-items:center; gap:4px; margin-top: 8px;">
                    <span class="citruss-icon icon-sm">shopping_cart</span> 94 pending dispatch
                  </div>
                </div>
              </div>
            </div>
            
            <div class="citruss-col-12 citruss-col-md-3 citruss-mb-md">
              <div class="citruss-card">
                <div class="card-content">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <div class="metric-title">Conversion Rate</div>
                    <span class="citruss-icon-badge badge-sm badge-lemon" style="margin: 0;"><span class="citruss-icon">insights</span></span>
                  </div>
                  <div class="metric-value">3.64%</div>
                  <div style="color: var(--citruss-tangerine); font-size: 0.8rem; font-weight:600; display:flex; align-items:center; gap:4px; margin-top: 8px;">
                    <span class="citruss-icon icon-sm">bolt</span> Industry avg: 2.10%
                  </div>
                </div>
              </div>
            </div>

            <div class="citruss-col-12 citruss-col-md-3 citruss-mb-md">
              <div class="citruss-card card-lime">
                <div class="card-content">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <div class="metric-title">Server Sales Sync</div>
                    <span class="citruss-icon-badge badge-sm badge-lime" style="margin: 0;"><span class="citruss-icon">sync</span></span>
                  </div>
                  <div class="metric-value">100%</div>
                  <div style="color: var(--citruss-text-main); font-size: 0.8rem; display:flex; align-items:center; gap:4px; margin-top: 8px;">
                    <span class="citruss-icon icon-sm">check_circle</span> Real-time active pipelines
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="citruss-row">
            <div class="citruss-col-12 citruss-col-lg-8 citruss-mb-lg">
              <div class="citruss-card" style="padding: 24px;">
                <div class="card-content">
                  <h3 style="font-weight: 800; font-size: 1.2rem; color: var(--citruss-text-main); margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
                    <span class="citruss-icon icon-orange">list_alt</span> Recent Operations
                  </h3>
                  
                  <div class="citruss-table-container">
                    <table class="citruss-table table-hover">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Purchaser</th>
                          <th>Product Segment</th>
                          <th>Total Paid</th>
                          <th>Fulfillment</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>#CTR-9841</strong></td>
                          <td>
                            <div class="citruss-d-flex citruss-align-items-center citruss-gap-sm">
                              <div class="citruss-avatar avatar-sm"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"></div>
                              <span>Melis Eren</span>
                            </div>
                          </td>
                          <td>Enterprise Dev Suite</td>
                          <td><strong>$499.00</strong></td>
                          <td><span class="citruss-badge badge-success">Completed</span></td>
                        </tr>
                        <tr>
                          <td><strong>#CTR-9840</strong></td>
                          <td>
                            <div class="citruss-d-flex citruss-align-items-center citruss-gap-sm">
                              <div class="citruss-avatar avatar-sm"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"></div>
                              <span>Kerem Tuncgil</span>
                            </div>
                          </td>
                          <td>Consultancy Pack</td>
                          <td><strong>$1,200.00</strong></td>
                          <td><span class="citruss-badge badge-warning">Processing</span></td>
                        </tr>
                        <tr>
                          <td><strong>#CTR-9839</strong></td>
                          <td>
                            <div class="citruss-d-flex citruss-align-items-center citruss-gap-sm">
                              <div class="citruss-avatar avatar-sm"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"></div>
                              <span>Selim Aksoy</span>
                            </div>
                          </td>
                          <td>Custom Glass Theme</td>
                          <td><strong>$89.00</strong></td>
                          <td><span class="citruss-badge badge-danger">Refunded</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div class="citruss-col-12 citruss-col-lg-4 citruss-mb-lg">
              <div class="citruss-card">
                <div class="card-content">
                  <h3 style="font-weight: 800; font-size: 1.2rem; color: var(--citruss-text-main); margin-bottom: 24px; display: flex; align-items: center; gap: 8px;">
                    <span class="citruss-icon icon-orange">donut_large</span> Target Milestones
                  </h3>
                  
                  <div style="margin-bottom: 20px;">
                    <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 6px;">
                      <span style="color: var(--citruss-text-main); font-weight:600;">Monthly Sales Target</span>
                      <span style="color: var(--citruss-tangerine); font-weight:700;">84%</span>
                    </div>
                    <div class="citruss-progress-bar progress-orange">
                      <div class="progress-fill" style="width: 84%;"></div>
                    </div>
                  </div>

                  <div style="margin-bottom: 20px;">
                    <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 6px;">
                      <span style="color: var(--citruss-text-main); font-weight:600;">Server Resource Allocation</span>
                      <span style="color: var(--citruss-lime); font-weight:700;">62%</span>
                    </div>
                    <div class="citruss-progress-bar progress-lime">
                      <div class="progress-fill" style="width: 62%;"></div>
                    </div>
                  </div>

                  <div style="margin-bottom: 12px;">
                    <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 6px;">
                      <span style="color: var(--citruss-text-main); font-weight:600;">Security Integrity Audit</span>
                      <span style="color: var(--citruss-lemon); font-weight:700;">95%</span>
                    </div>
                    <div class="citruss-progress-bar progress-lemon">
                      <div class="progress-fill" style="width: 95%;"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `),Z=t=>(t(()=>{c();const e=document.querySelectorAll(".kanban-task-card"),i=document.querySelectorAll(".kanban-tasks-list");let r=null;e.forEach(s=>{s.addEventListener("dragstart",a=>{r=s,s.classList.add("dragging"),a.dataTransfer.setData("text/plain","")}),s.addEventListener("dragend",()=>{r=null,s.classList.remove("dragging"),i.forEach(a=>{const n=a.closest(".card-content").querySelector(".card-count");n&&(n.textContent=a.querySelectorAll(".kanban-task-card").length)})})}),i.forEach(s=>{s.addEventListener("dragover",a=>{a.preventDefault(),s.style.background="rgba(255, 107, 0, 0.04)",s.style.borderRadius="8px"}),s.addEventListener("dragleave",()=>{s.style.background="transparent"}),s.addEventListener("drop",a=>{a.preventDefault(),s.style.background="transparent",r&&(s.appendChild(r),window.CitruSS.toast({title:"Task Relocated",message:`"${r.querySelector("h5").textContent}" has been successfully moved.`,type:"success"}))})})},[]),`
    <div class="citruss-dashboard-shell">
      ${o("kanban")}
      
      <div class="citruss-dashboard-main">
        ${l("Sprint Kanban Board")}

        <div class="citruss-dashboard-content">
          <div class="citruss-row">
            
            <!-- Column 1: Backlog -->
            <div class="citruss-col-12 citruss-col-lg-4 citruss-mb-lg">
              <div class="citruss-card" style="background: rgba(255,255,255,0.02); border: 1px dashed var(--citruss-glass-border); min-height: 480px;">
                <div class="card-content" style="padding: 16px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 16px;">
                    <h4 style="font-weight:800; font-size:1.05rem; display:flex; align-items:center; gap:8px;">
                      <span style="width:8px; height:8px; border-radius:50%; background:var(--citruss-tangerine);"></span> Backlog
                    </h4>
                    <span class="citruss-badge badge-neutral card-count">2</span>
                  </div>

                  <div class="kanban-tasks-list" style="min-height: 380px; display: flex; flex-direction: column; gap: 12px; transition: background 0.2s;">
                    <div class="citruss-card kanban-task-card" draggable="true" style="cursor: grab; transition: transform 0.2s, opacity 0.2s;">
                      <div class="card-content" style="padding: 16px;">
                        <span class="citruss-badge badge-warning" style="margin-bottom:8px;">Bugfix</span>
                        <h5 style="font-weight:700; margin-bottom:8px; font-size:0.9rem;">Solve 60+ FPS Glass Blur Lag</h5>
                        <p style="color:var(--citruss-text-muted); font-size:0.8rem; margin-bottom:12px;">Enforce absolute viewport bounds constraints.</p>
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                          <div class="citruss-avatar avatar-xs"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"></div>
                          <span style="font-size:0.75rem; color:var(--citruss-danger); font-weight:600; display:flex; align-items:center; gap:2px;">
                            <span class="citruss-icon icon-sm">alarm</span> May 31
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="citruss-card kanban-task-card" draggable="true" style="cursor: grab; transition: transform 0.2s, opacity 0.2s;">
                      <div class="card-content" style="padding: 16px;">
                        <span class="citruss-badge badge-success" style="margin-bottom:8px;">Feature</span>
                        <h5 style="font-weight:700; margin-bottom:8px; font-size:0.9rem;">Integrate Material Symbols</h5>
                        <p style="color:var(--citruss-text-muted); font-size:0.8rem; margin-bottom:12px;">Map modern Google Font symbols universally.</p>
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                          <div class="citruss-avatar avatar-xs"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"></div>
                          <span style="font-size:0.75rem; color:var(--citruss-text-muted);">No deadline</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Column 2: In Progress -->
            <div class="citruss-col-12 citruss-col-lg-4 citruss-mb-lg">
              <div class="citruss-card" style="background: rgba(255,255,255,0.02); border: 1px dashed var(--citruss-glass-border); min-height: 480px;">
                <div class="card-content" style="padding: 16px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 16px;">
                    <h4 style="font-weight:800; font-size:1.05rem; display:flex; align-items:center; gap:8px;">
                      <span style="width:8px; height:8px; border-radius:50%; background:var(--citruss-lime);"></span> In Progress
                    </h4>
                    <span class="citruss-badge badge-neutral card-count">1</span>
                  </div>

                  <div class="kanban-tasks-list" style="min-height: 380px; display: flex; flex-direction: column; gap: 12px; transition: background 0.2s;">
                    <div class="citruss-card kanban-task-card" draggable="true" style="cursor: grab; border-left: 3px solid var(--citruss-lime); transition: transform 0.2s, opacity 0.2s;">
                      <div class="card-content" style="padding: 16px;">
                        <span class="citruss-badge badge-success" style="margin-bottom:8px;">Core Refactor</span>
                        <h5 style="font-weight:700; margin-bottom:8px; font-size:0.9rem;">Complete Pro Dashboard Views</h5>
                        <p style="color:var(--citruss-text-muted); font-size:0.8rem; margin-bottom:12px;">Deliver highly customizable web/desktop layouts.</p>
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                          <div class="citruss-avatar-group">
                            <div class="citruss-avatar avatar-xs"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"></div>
                            <div class="citruss-avatar avatar-xs"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"></div>
                          </div>
                          <span style="font-size:0.75rem; color:var(--citruss-lime); font-weight:600; display:flex; align-items:center; gap:2px;">
                            <span class="citruss-icon icon-sm icon-spin">sync</span> Active
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Column 3: Done -->
            <div class="citruss-col-12 citruss-col-lg-4 citruss-mb-lg">
              <div class="citruss-card" style="background: rgba(255,255,255,0.02); border: 1px dashed var(--citruss-glass-border); min-height: 480px;">
                <div class="card-content" style="padding: 16px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 16px;">
                    <h4 style="font-weight:800; font-size:1.05rem; display:flex; align-items:center; gap:8px;">
                      <span style="width:8px; height:8px; border-radius:50%; background:var(--citruss-lemon);"></span> Verification Completed
                    </h4>
                    <span class="citruss-badge badge-neutral card-count">1</span>
                  </div>

                  <div class="kanban-tasks-list" style="min-height: 380px; display: flex; flex-direction: column; gap: 12px; transition: background 0.2s;">
                    <div class="citruss-card kanban-task-card" draggable="true" style="opacity: 0.75; cursor: grab; transition: transform 0.2s, opacity 0.2s;">
                      <div class="card-content" style="padding: 16px;">
                        <span class="citruss-badge badge-neutral" style="margin-bottom:8px;">Docs</span>
                        <h5 style="font-weight:700; margin-bottom:8px; font-size:0.9rem; text-decoration: line-through;">Write API Documentation</h5>
                        <p style="color:var(--citruss-text-muted); font-size:0.8rem; margin-bottom:12px;">Draft and export detailed component interaction protocols.</p>
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                          <div class="citruss-avatar avatar-xs"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"></div>
                          <span class="citruss-badge badge-success">Verified</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  `),X=t=>(t(()=>{c()},[]),`
    <div class="citruss-dashboard-shell">
      ${o("explorer")}
      
      <div class="citruss-dashboard-main">
        ${l("Cloud Explorer")}

        <div class="citruss-dashboard-content">
          <div class="citruss-row">
            <div class="citruss-col-12 citruss-col-lg-8 citruss-mb-lg">
              <div class="citruss-card" style="padding: 24px;">
                <div class="card-content">
                  <div class="citruss-d-flex citruss-justify-content-between citruss-align-items-center citruss-mb-lg" style="flex-wrap:wrap; gap:12px;">
                    <h3 style="font-weight: 800; font-size: 1.2rem; color: var(--citruss-text-main); display:flex; align-items:center; gap:8px;">
                      <span class="citruss-icon icon-orange">folder</span> Repositories & Folders
                    </h3>
                    <button class="citruss-btn btn-sm btn-primary">
                      <span class="citruss-icon icon-sm icon-rounded" style="margin-right: 4px;">upload_file</span> Upload New File
                    </button>
                  </div>

                  <div class="citruss-row citruss-mb-lg">
                    <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
                      <div class="citruss-card card-lime" style="cursor: pointer;">
                        <div class="card-content" style="padding: 16px; display:flex; align-items:center; gap:12px;">
                          <span class="citruss-icon-badge badge-sm badge-lime" style="margin:0;"><span class="citruss-icon">source</span></span>
                          <div>
                            <div style="font-weight:700; font-size:0.9rem;">Source Assets</div>
                            <div style="font-size:0.75rem; opacity:0.8;">182 items • 1.4 GB</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
                      <div class="citruss-card" style="cursor: pointer;">
                        <div class="card-content" style="padding: 16px; display:flex; align-items:center; gap:12px;">
                          <span class="citruss-icon-badge badge-sm badge-orange" style="margin:0;"><span class="citruss-icon">video_library</span></span>
                          <div>
                            <div style="font-weight:700; font-size:0.9rem;">Media Assets</div>
                            <div style="font-size:0.75rem; color:var(--citruss-text-muted);">24 items • 8.4 GB</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="citruss-col-12 citruss-col-md-4 citruss-mb-md">
                      <div class="citruss-card" style="cursor: pointer;">
                        <div class="card-content" style="padding: 16px; display:flex; align-items:center; gap:12px;">
                          <span class="citruss-icon-badge badge-sm badge-lemon" style="margin:0;"><span class="citruss-icon">folder_zip</span></span>
                          <div>
                            <div style="font-weight:700; font-size:0.9rem;">Backup Archives</div>
                            <div style="font-size:0.75rem; color:var(--citruss-text-muted);">8 items • 14.8 GB</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h4 style="font-weight: 800; font-size: 1.05rem; margin-bottom:16px;">Files in Source Assets</h4>
                  <div class="citruss-table-container">
                    <table class="citruss-table table-hover">
                      <thead>
                        <tr>
                          <th>File Name</th>
                          <th>Modified</th>
                          <th>File Size</th>
                          <th>Permissions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style="cursor: pointer;">
                          <td>
                            <div style="display:flex; align-items:center; gap:8px;">
                              <span class="citruss-icon icon-orange" style="font-size:18px;">javascript</span>
                              <span style="font-weight:600;">citruss.min.js</span>
                            </div>
                          </td>
                          <td style="font-size:0.85rem; color:var(--citruss-text-muted);">2 hours ago</td>
                          <td>45.8 KB</td>
                          <td><span class="citruss-badge badge-success">Read-Write</span></td>
                        </tr>
                        <tr style="cursor: pointer;">
                          <td>
                            <div style="display:flex; align-items:center; gap:8px;">
                              <span class="citruss-icon icon-lime" style="font-size:18px;">image</span>
                              <span style="font-weight:600;">hero_mockup.webp</span>
                            </div>
                          </td>
                          <td style="font-size:0.85rem; color:var(--citruss-text-muted);">Yesterday</td>
                          <td>284 KB</td>
                          <td><span class="citruss-badge badge-success">Read-Write</span></td>
                        </tr>
                        <tr style="cursor: pointer;">
                          <td>
                            <div style="display:flex; align-items:center; gap:8px;">
                              <span class="citruss-icon icon-orange" style="font-size:18px;">css</span>
                              <span style="font-weight:600;">citruss.css</span>
                            </div>
                          </td>
                          <td style="font-size:0.85rem; color:var(--citruss-text-muted);">May 28, 2026</td>
                          <td>114 KB</td>
                          <td><span class="citruss-badge badge-neutral">Read Only</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>
            </div>

            <div class="citruss-col-12 citruss-col-lg-4 citruss-mb-lg">
              <div class="citruss-card">
                <div class="card-content" style="padding:24px;">
                  <h3 style="font-weight:800; font-size:1.2rem; margin-bottom:20px;">Storage Allocation</h3>
                  
                  <div style="text-align:center; margin-bottom:24px;">
                    <div style="font-size:2rem; font-weight:900; color:var(--citruss-orange);">24.6 GB</div>
                    <div style="font-size:0.8rem; color:var(--citruss-text-muted);">Used of 100 GB Cloud Limit</div>
                  </div>

                  <div class="citruss-progress-bar progress-orange citruss-mb-lg">
                    <div class="progress-fill" style="width: 24.6%;"></div>
                  </div>

                  <div style="display:flex; flex-direction:column; gap:16px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.85rem;">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span class="citruss-icon icon-orange" style="font-size:16px;">description</span>
                        <span style="color:var(--citruss-text-main);">Documents & Source</span>
                      </div>
                      <span style="font-weight:700;">1.4 GB</span>
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.85rem;">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span class="citruss-icon icon-lime" style="font-size:16px;">image</span>
                        <span style="color:var(--citruss-text-main);">Graphics & Media</span>
                      </div>
                      <span style="font-weight:700;">8.4 GB</span>
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.85rem;">
                      <div style="display:flex; align-items:center; gap:8px;">
                        <span class="citruss-icon icon-orange" style="font-size:16px;">settings_system_daydream</span>
                        <span style="color:var(--citruss-text-main);">Sync Archives</span>
                      </div>
                      <span style="font-weight:700;">14.8 GB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  `),ss=t=>(t(()=>{c()},[]),`
    <div class="citruss-dashboard-shell">
      ${o("settings")}
      
      <div class="citruss-dashboard-main">
        ${l("User Preferences")}

        <div class="citruss-dashboard-content">
          <div class="citruss-row">
            
            <div class="citruss-col-12 citruss-col-lg-8 citruss-mb-lg">
              <div class="citruss-card" style="padding: 24px;">
                <div class="card-content">
                  <h3 style="font-weight:800; font-size:1.2rem; margin-bottom:20px; display:flex; align-items:center; gap:8px;">
                    <span class="citruss-icon icon-orange">manage_accounts</span> Account Configuration
                  </h3>

                  <div class="citruss-row">
                    <div class="citruss-col-12 citruss-col-md-6 citruss-mb-md">
                      <div class="citruss-input-wrapper">
                        <label class="citruss-label">First Name</label>
                        <input type="text" class="citruss-input" value="Ecem">
                      </div>
                    </div>
                    <div class="citruss-col-12 citruss-col-md-6 citruss-mb-md">
                      <div class="citruss-input-wrapper">
                        <label class="citruss-label">Last Name</label>
                        <input type="text" class="citruss-input" value="Tuncgil">
                      </div>
                    </div>
                  </div>

                  <div class="citruss-row citruss-mb-lg">
                    <div class="citruss-col-12">
                      <div class="citruss-input-wrapper">
                        <label class="citruss-label">Registered E-mail Address</label>
                        <input type="email" class="citruss-input" value="ecem@truncgil.com" readonly style="opacity: 0.7; cursor: not-allowed;">
                      </div>
                    </div>
                  </div>

                  <hr style="border: 0; border-top: 1px solid var(--citruss-glass-border); margin: 24px 0;">

                  <h4 style="font-weight:800; font-size:1.05rem; margin-bottom:16px; display:flex; align-items:center; gap:8px;">
                    <span class="citruss-icon icon-lime">security</span> Privacy & Core Security
                  </h4>

                  <div style="display:flex; flex-direction:column; gap:16px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <div>
                        <div style="font-weight:700; font-size:0.9rem; color:var(--citruss-text-main);">Two-Factor Authentication</div>
                        <div style="font-size:0.8rem; color:var(--citruss-text-muted);">Enforce modern auth challenge on startup</div>
                      </div>
                      <label style="position:relative; display:inline-block; width:50px; height:26px;">
                        <input type="checkbox" checked style="opacity:0; width:0; height:0;">
                        <span style="position:absolute; cursor:pointer; top:0; left:0; right:0; bottom:0; background:var(--citruss-lime); border-radius:34px; transition:0.4s;">
                          <span style="position:absolute; content:''; height:18px; width:18px; left:28px; bottom:4px; background:white; border-radius:50%; transition:0.4s;"></span>
                        </span>
                      </label>
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <div>
                        <div style="font-weight:700; font-size:0.9rem; color:var(--citruss-text-main);">Real-time Activity Logs</div>
                        <div style="font-size:0.8rem; color:var(--citruss-text-muted);">Publish synchronization status to public event streams</div>
                      </div>
                      <label style="position:relative; display:inline-block; width:50px; height:26px;">
                        <input type="checkbox" style="opacity:0; width:0; height:0;">
                        <span style="position:absolute; cursor:pointer; top:0; left:0; right:0; bottom:0; background:#ccc; border-radius:34px; transition:0.4s;">
                          <span style="position:absolute; content:''; height:18px; width:18px; left:4px; bottom:4px; background:white; border-radius:50%; transition:0.4s;"></span>
                        </span>
                      </label>
                    </div>
                  </div>

                  <div class="citruss-d-flex citruss-gap-md" style="justify-content: flex-end; margin-top:32px;">
                    <button class="citruss-btn">Discard Changes</button>
                    <button class="citruss-btn btn-primary">Save Preference</button>
                  </div>

                </div>
              </div>
            </div>

            <div class="citruss-col-12 citruss-col-lg-4 citruss-mb-lg">
              <div class="citruss-card">
                <div class="card-content" style="padding:24px;">
                  <h3 style="font-weight:800; font-size:1.2rem; margin-bottom:20px; display:flex; align-items:center; gap:8px;">
                    <span class="citruss-icon icon-orange">devices</span> Active Login Sessions
                  </h3>

                  <div style="display:flex; flex-direction:column; gap:16px;">
                    <div style="display:flex; align-items:center; gap:12px;">
                      <span class="citruss-icon icon-lime" style="font-size:28px;">desktop_windows</span>
                      <div>
                        <div style="font-weight:700; font-size:0.9rem;">Windows 11 PC</div>
                        <div style="font-size:0.75rem; color:var(--citruss-text-muted);">Chrome • Istanbul, TR • <span style="color:var(--citruss-lime); font-weight:600;">Current Session</span></div>
                      </div>
                    </div>

                    <div style="display:flex; align-items:center; gap:12px;">
                      <span class="citruss-icon icon-orange" style="font-size:28px;">phone_iphone</span>
                      <div>
                        <div style="font-weight:700; font-size:0.9rem;">iPhone 15 Pro Max</div>
                        <div style="font-size:0.75rem; color:var(--citruss-text-muted);">Safari App • Frankfurt, DE • 2 days ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  `),ts=t=>(t(()=>{var i;c();const e=document.getElementById("settings-tabs-nav");e&&((i=window.CitruSS)!=null&&i.Tabs)&&new window.CitruSS.Tabs(e)},[]),`
    <div class="citruss-dashboard-shell">
      ${o("tabbed-settings")}
      
      <div class="citruss-dashboard-main">
        ${l("Tabbed Config Center")}

        <div class="citruss-dashboard-content">
          <div class="citruss-tabs-container">
            
            <!-- Standard CitruSS Tab Navigation Buttons -->
            <div class="citruss-tabs-wrapper" id="settings-tabs-nav" style="margin-bottom: 24px;">
              <button class="citruss-tab-link active" data-target="#tab-account" style="display: flex; align-items: center; gap: 8px;">
                <span class="citruss-icon" style="font-size: 18px;">person</span>
                <span>Account Details</span>
              </button>
              <button class="citruss-tab-link" data-target="#tab-security" style="display: flex; align-items: center; gap: 8px;">
                <span class="citruss-icon" style="font-size: 18px;">lock</span>
                <span>Security Guard</span>
              </button>
              <button class="citruss-tab-link" data-target="#tab-integrations" style="display: flex; align-items: center; gap: 8px;">
                <span class="citruss-icon" style="font-size: 18px;">api</span>
                <span>Integrations & Tokens</span>
              </button>
            </div>

            <!-- Standard CitruSS Tab Content Panes -->
            <div style="padding-top: 8px;">
              <!-- Tab 1: Account -->
              <div class="citruss-tab-pane active" id="tab-account">
                <div class="citruss-card" style="padding: 24px;">
                  <div class="card-content">
                    <h3 style="font-weight:800; font-size:1.2rem; margin-bottom:20px; display:flex; align-items:center; gap:8px;">
                      <span class="citruss-icon icon-orange">manage_accounts</span> Public Profile
                    </h3>
                    <div class="citruss-row">
                      <div class="citruss-col-12 citruss-col-md-6 citruss-mb-md">
                        <div class="citruss-input-wrapper">
                          <label class="citruss-label">Display Name</label>
                          <input type="text" class="citruss-input" value="Ecem Tuncgil">
                        </div>
                      </div>
                      <div class="citruss-col-12 citruss-col-md-6 citruss-mb-md">
                        <div class="citruss-input-wrapper">
                          <label class="citruss-label">Developer Role</label>
                          <input type="text" class="citruss-input" value="Principal Glassmorphic Architect">
                        </div>
                      </div>
                    </div>
                    <div class="citruss-input-wrapper citruss-mb-lg">
                      <label class="citruss-label">Bio Details</label>
                      <textarea class="citruss-input" style="min-height: 80px; resize: vertical;">Building zero-dependency fluid glass UI systems for web and electron desktop applications.</textarea>
                    </div>
                    <button class="citruss-btn btn-primary btn-sm">Save Profile</button>
                  </div>
                </div>
              </div>

              <!-- Tab 2: Security -->
              <div class="citruss-tab-pane" id="tab-security">
                <div class="citruss-card" style="padding: 24px;">
                  <div class="card-content">
                    <h3 style="font-weight:800; font-size:1.2rem; margin-bottom:20px; display:flex; align-items:center; gap:8px;">
                      <span class="citruss-icon icon-orange">lock</span> Credential Upgrades
                    </h3>
                    <div class="citruss-input-wrapper citruss-mb-md">
                      <label class="citruss-label">Current Authentication Key</label>
                      <input type="password" class="citruss-input" value="********">
                    </div>
                    <div class="citruss-input-wrapper citruss-mb-lg">
                      <label class="citruss-label">New Password Generation</label>
                      <input type="password" class="citruss-input" placeholder="Type secure passphrase...">
                    </div>
                    <button class="citruss-btn btn-primary btn-sm">Update Password</button>
                  </div>
                </div>
              </div>

              <!-- Tab 3: Integrations -->
              <div class="citruss-tab-pane" id="tab-integrations">
                <div class="citruss-card" style="padding: 24px;">
                  <div class="card-content">
                    <h3 style="font-weight:800; font-size:1.2rem; margin-bottom:20px; display:flex; align-items:center; gap:8px;">
                      <span class="citruss-icon icon-orange">api</span> API Gateway Configurations
                    </h3>
                    <div style="display:flex; flex-direction:column; gap:16px; margin-bottom:24px;">
                      <div style="display:flex; justify-content:space-between; align-items:center; padding:12px; background:rgba(255,255,255,0.02); border-radius:8px; border:1px solid var(--citruss-glass-border);">
                        <div>
                          <div style="font-weight:700;">GitHub Gateway Connection</div>
                          <div style="font-size:0.8rem; color:var(--citruss-text-muted);">Deploy directly to staging pages repository</div>
                        </div>
                        <span class="citruss-badge badge-success">Active</span>
                      </div>

                      <div style="display:flex; justify-content:space-between; align-items:center; padding:12px; background:rgba(255,255,255,0.02); border-radius:8px; border:1px solid var(--citruss-glass-border);">
                        <div>
                          <div style="font-weight:700;">NPM Package Auto-Sync</div>
                          <div style="font-size:0.8rem; color:var(--citruss-text-muted);">Sync tags upon new releases bundles</div>
                        </div>
                        <span class="citruss-badge badge-danger">Not Hooked</span>
                      </div>
                    </div>
                    <button class="citruss-btn btn-primary btn-sm">Add Connection</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  `),es=t=>(t(()=>{c();const e=document.getElementById("citruss-login-form");e&&(e.onsubmit=i=>{i.preventDefault(),window.CitruSS.toast({title:"Sign In Granted",message:"Welcome back to CitruSS Pro Terminal!",type:"success"})})},[]),`
    <div class="citruss-dashboard-shell" style="min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px; font-family: 'Outfit', sans-serif;">
      
      <!-- Center Login Card -->
      <div class="citruss-card animate-fade-in" style="width: 100%; max-width: 420px; padding: 32px; box-shadow: 0 24px 64px var(--citruss-glass-shadow); border: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); backdrop-filter: blur(var(--citruss-glass-blur));">
        <div class="card-content">
          <div style="text-align: center; margin-bottom: 32px;">
            <img src="./logos/citruss_logo_transparent.png" alt="CitruSS Logo" style="height: 54px; margin-bottom: 12px;">
            <h2 style="font-weight:900; font-size:1.75rem; color: var(--citruss-text-main); margin-bottom: 6px;">Sign In</h2>
            <p style="color:var(--citruss-text-muted); font-size:0.85rem;">Access your Pro dashboard configuration panels</p>
          </div>

          <form id="citruss-login-form">
            <div class="citruss-input-wrapper citruss-mb-md">
              <label class="citruss-label">Developer Email</label>
              <input type="email" class="citruss-input" placeholder="you@domain.com" required>
            </div>

            <div class="citruss-input-wrapper citruss-mb-lg">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <label class="citruss-label" style="margin-bottom:0;">Passphrase</label>
                <a href="#" style="font-size:0.75rem; color:var(--citruss-tangerine); font-weight:600; text-decoration:none;">Reset Key?</a>
              </div>
              <input type="password" class="citruss-input" placeholder="••••••••" required>
            </div>

            <button type="submit" class="citruss-btn btn-primary" style="width: 100%; padding: 12px; font-weight: 800; margin-bottom: 24px;">
              Verify Credentials
            </button>
          </form>

          <div style="text-align: center; font-size: 0.85rem; color:var(--citruss-text-muted);">
            Need a secure workspace? 
            <a href="#" class="sidebar-link" data-nav-target="register" style="display:inline; color:var(--citruss-lime); font-weight:700; text-decoration:none; padding:0;">Create Account</a>
          </div>
        </div>
      </div>

    </div>
  `),is=t=>(t(()=>{c();const e=document.getElementById("citruss-register-form");e&&(e.onsubmit=i=>{i.preventDefault(),window.CitruSS.toast({title:"Account Provisioned",message:"Your Pro workspace has been initiated successfully.",type:"success"})})},[]),`
    <div class="citruss-dashboard-shell" style="min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px; font-family: 'Outfit', sans-serif;">
      
      <!-- Center Register Card -->
      <div class="citruss-card animate-fade-in" style="width: 100%; max-width: 460px; padding: 32px; box-shadow: 0 24px 64px var(--citruss-glass-shadow); border: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); backdrop-filter: blur(var(--citruss-glass-blur));">
        <div class="card-content">
          <div style="text-align: center; margin-bottom: 28px;">
            <img src="./logos/citruss_logo_transparent.png" alt="CitruSS Logo" style="height: 54px; margin-bottom: 12px;">
            <h2 style="font-weight:900; font-size:1.75rem; color: var(--citruss-text-main); margin-bottom: 6px;">Initiate Pro Account</h2>
            <p style="color:var(--citruss-text-muted); font-size:0.85rem;">Provision your zero-dependency workspace in seconds</p>
          </div>

          <form id="citruss-register-form">
            <div class="citruss-row">
              <div class="citruss-col-12 citruss-col-md-6 citruss-mb-md">
                <div class="citruss-input-wrapper">
                  <label class="citruss-label">First Name</label>
                  <input type="text" class="citruss-input" placeholder="Ecem" required>
                </div>
              </div>
              <div class="citruss-col-12 citruss-col-md-6 citruss-mb-md">
                <div class="citruss-input-wrapper">
                  <label class="citruss-label">Last Name</label>
                  <input type="text" class="citruss-input" placeholder="Tuncgil" required>
                </div>
              </div>
            </div>

            <div class="citruss-input-wrapper citruss-mb-md">
              <label class="citruss-label">Developer Email</label>
              <input type="email" class="citruss-input" placeholder="you@domain.com" required>
            </div>

            <div class="citruss-input-wrapper citruss-mb-lg">
              <label class="citruss-label">Create Secure Key</label>
              <input type="password" class="citruss-input" placeholder="Choose strong passphrase..." required>
            </div>

            <button type="submit" class="citruss-btn btn-primary" style="width: 100%; padding: 12px; font-weight: 800; margin-bottom: 24px;">
              Deploy My Space
            </button>
          </form>

          <div style="text-align: center; font-size: 0.85rem; color:var(--citruss-text-muted);">
            Existing workspace? 
            <a href="#" class="sidebar-link" data-nav-target="login" style="display:inline; color:var(--citruss-lime); font-weight:700; text-decoration:none; padding:0;">Sign In</a>
          </div>
        </div>
      </div>

    </div>
  `),{useEffect:d}=__STORYBOOK_MODULE_PREVIEW_API__,as={title:"Showcase/Pro Dashboard",parameters:{layout:"fullscreen"}};H();const p=()=>Y(d),u=()=>J(d),m=()=>Q(d),v=()=>Z(d),g=()=>X(d),b=()=>ss(d),y=()=>ts(d),f=()=>es(d),x=()=>is(d);var w,S,k;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:"() => renderAdminPanelDashboard(useEffect)",...(k=(S=p.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var z,C,A;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:"() => renderAnalyticsDashboard(useEffect)",...(A=(C=u.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var E,P,_;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:"() => renderECommerceStorefront(useEffect)",...(_=(P=m.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var T,D,B;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:"() => renderKanbanProjectManagement(useEffect)",...(B=(D=v.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var j,I,L;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:"() => renderCloudExplorer(useEffect)",...(L=(I=g.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var M,R,$;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:"() => renderUserSettings(useEffect)",...($=(R=b.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var q,G,N;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:"() => renderTabbedSettings(useEffect)",...(N=(G=y.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var O,F,U;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:"() => renderLoginPage(useEffect)",...(U=(F=f.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var K,V,W;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:"() => renderRegisterPage(useEffect)",...(W=(V=x.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const rs=["AdminPanelDashboard","AnalyticsDashboard","ECommerceStorefront","KanbanProjectManagement","CloudExplorer","UserSettings","TabbedSettings","LoginPage","RegisterPage"];export{p as AdminPanelDashboard,u as AnalyticsDashboard,g as CloudExplorer,m as ECommerceStorefront,v as KanbanProjectManagement,f as LoginPage,x as RegisterPage,y as TabbedSettings,b as UserSettings,rs as __namedExportsOrder,as as default};
