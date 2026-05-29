export class CitruSSTabs {
  constructor(containerElement) {
    this.container = containerElement;
    if (!this.container) return;
    this.links = Array.from(this.container.querySelectorAll('.citruss-tab-link'));
    this.init();
  }
  
  init() {
    this.links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.activate(link);
      });
    });
  }
  
  activate(selectedLink) {
    const targetId = selectedLink.getAttribute('data-target');
    if (!targetId) return;
    
    // Deactivate all links & panes in context
    const tabWrapper = selectedLink.closest('.citruss-tabs-wrapper');
    if (!tabWrapper) return;
    
    tabWrapper.querySelectorAll('.citruss-tab-link').forEach(l => l.classList.remove('active'));
    
    // Find parent panel container to limit query scope
    const parentContainer = tabWrapper.parentElement;
    parentContainer.querySelectorAll('.citruss-tab-pane').forEach(p => p.classList.remove('active'));
    
    // Activate selected
    selectedLink.classList.add('active');
    const activePane = parentContainer.querySelector(targetId);
    if (activePane) activePane.classList.add('active');
  }
}
