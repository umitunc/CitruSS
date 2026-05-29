export class CitruSSDrawer {
  constructor(drawerElement) {
    this.drawer = drawerElement;
    if (!this.drawer) return;
    this.id = this.drawer.id;
    this.backdrop = null;
    this.init();
  }
  
  init() {
    // Look for close triggers inside drawer
    this.drawer.querySelectorAll('.drawer-close, [data-citruss-close]').forEach(btn => {
      btn.addEventListener('click', () => this.hide());
    });
  }
  
  show() {
    // Create Backdrop
    this.backdrop = document.createElement('div');
    this.backdrop.className = 'citruss-drawer-backdrop';
    document.body.appendChild(this.backdrop);
    
    // Toggle displays
    setTimeout(() => {
      this.backdrop.classList.add('active');
      this.drawer.classList.add('show');
    }, 20);
    
    // Escape-key closure
    this.escapeHandler = (e) => {
      if (e.key === 'Escape') this.hide();
    };
    document.addEventListener('keydown', this.escapeHandler);
    
    // Click outside overlay to close
    this.backdrop.onclick = () => this.hide();
  }
  
  hide() {
    this.drawer.classList.remove('show');
    if (this.backdrop) {
      this.backdrop.classList.remove('active');
      setTimeout(() => {
        if (this.backdrop) this.backdrop.remove();
        this.backdrop = null;
      }, 300);
    }
    document.removeEventListener('keydown', this.escapeHandler);
  }
}
export const CitruSSDrawers = {
  drawersMap: new Map(),
  
  init: function() {
    document.querySelectorAll('.citruss-drawer').forEach(el => {
      this.drawersMap.set(el.id, new CitruSSDrawer(el));
    });
    
    // Bind buttons having [data-citruss-toggle="drawer"]
    document.querySelectorAll('[data-citruss-toggle="drawer"]').forEach(btn => {
      const targetId = btn.getAttribute('data-target');
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const drawerInstance = this.drawersMap.get(targetId);
        if (drawerInstance) drawerInstance.show();
      });
    });
  }
};
