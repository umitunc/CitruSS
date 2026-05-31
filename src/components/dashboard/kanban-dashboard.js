import { getSidebarHTML } from './sidebar.js';
import { getNavbarHTML } from './navbar.js';
import { initDashboardInteractions } from './interactions.js';

export const renderKanbanProjectManagement = (useEffect) => {
  useEffect(() => {
    initDashboardInteractions();

    const tasks = document.querySelectorAll('.kanban-task-card');
    const lists = document.querySelectorAll('.kanban-tasks-list');
    let draggedTask = null;

    tasks.forEach(task => {
      task.addEventListener('dragstart', (e) => {
        draggedTask = task;
        task.classList.add('dragging');
        e.dataTransfer.setData('text/plain', ''); // Necessary for Firefox support
      });

      task.addEventListener('dragend', () => {
        draggedTask = null;
        task.classList.remove('dragging');
        
        // Recalculate dynamic badges count
        lists.forEach(list => {
          const badge = list.closest('.card-content').querySelector('.card-count');
          if (badge) {
            badge.textContent = list.querySelectorAll('.kanban-task-card').length;
          }
        });
      });
    });

    lists.forEach(list => {
      list.addEventListener('dragover', (e) => {
        e.preventDefault();
        list.style.background = 'rgba(255, 107, 0, 0.04)';
        list.style.borderRadius = '8px';
      });

      list.addEventListener('dragleave', () => {
        list.style.background = 'transparent';
      });

      list.addEventListener('drop', (e) => {
        e.preventDefault();
        list.style.background = 'transparent';
        if (draggedTask) {
          list.appendChild(draggedTask);
          
          window.CitruSS.toast({
            title: 'Task Relocated',
            message: `"${draggedTask.querySelector('h5').textContent}" has been successfully moved.`,
            type: 'success'
          });
        }
      });
    });
  }, []);

  return `
    <div class="citruss-dashboard-shell">
      ${getSidebarHTML('kanban')}
      
      <div class="citruss-dashboard-main">
        ${getNavbarHTML('Sprint Kanban Board')}

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
  `;
};
