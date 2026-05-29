export const CitruSSDialog = {
  fire: function({ title, text, icon = 'info', showCancelButton = false, confirmButtonText = 'OK', cancelButtonText = 'Cancel' }) {
    return new Promise((resolve) => {
      const container = document.createElement('div');
      container.className = 'citruss-swal-container';
      
      container.innerHTML = `
        <div class="citruss-swal-box">
          <div class="citruss-swal-icon citruss-swal-icon-${icon}"></div>
          <h3 style="color: var(--citruss-text-main); margin-bottom: 8px; font-weight: 800;">${title}</h3>
          <p style="color: var(--citruss-text-muted); margin-bottom: 24px; font-size: 0.9rem;">${text}</p>
          <div style="display:flex; gap:12px; justify-content:center;">
            ${showCancelButton ? `<button class="citruss-btn" id="citruss-swal-cancel">${cancelButtonText}</button>` : ''}
            <button class="citruss-btn btn-primary" id="citruss-swal-confirm">${confirmButtonText}</button>
          </div>
        </div>
      `;
      
      document.body.appendChild(container);
      
      // Animate in
      setTimeout(() => {
        container.classList.add('active');
        container.querySelector('.citruss-swal-box').classList.add('show');
      }, 10);
      
      const close = (isConfirmed) => {
        container.classList.remove('active');
        container.querySelector('.citruss-swal-box').classList.remove('show');
        setTimeout(() => {
          container.remove();
          resolve({ isConfirmed });
        }, 300);
      };
      
      container.querySelector('#citruss-swal-confirm').onclick = () => close(true);
      if (showCancelButton) {
        container.querySelector('#citruss-swal-cancel').onclick = () => close(false);
      }
    });
  },
  
  confirm: function(title, text) {
    return this.fire({
      title,
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel'
    });
  }
};
