export const CitruSSToast = {
  show: function({ title, message, type = 'info', duration = 4000 }) {
    let container = document.querySelector('.citruss-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'citruss-toast-container';
      document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.className = `citruss-toast toast-${type}`;
    toast.innerHTML = `
      <div class="toast-body">
        <div class="toast-title">${title}</div>
        <div class="toast-message">${message}</div>
      </div>
      <div class="toast-close">×</div>
    `;
    
    container.appendChild(toast);
    
    // Animate Show
    setTimeout(() => toast.classList.add('show'), 50);
    
    const closeToast = () => {
      toast.classList.remove('show');
      toast.style.transform = 'translateX(120%)';
      setTimeout(() => toast.remove(), 400);
    };
    
    toast.querySelector('.toast-close').onclick = closeToast;
    
    setTimeout(closeToast, duration);
  }
};
