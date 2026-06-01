export const CitruSSPopovers = {
  bind: function(triggerSelector, popoverId, preferredPosition) {
    const trigger = document.querySelector(triggerSelector);
    const popover = document.getElementById(popoverId);
    if (!trigger || !popover) return;
    
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = popover.classList.contains('active');
      
      // Close all others
      document.querySelectorAll('.citruss-popover').forEach(p => p.classList.remove('active'));
      
      if (!isActive) {
        popover.classList.add('active');
        const pos = preferredPosition || trigger.getAttribute('data-citruss-popover-pos') || popover.getAttribute('data-citruss-popover-pos') || 'top';
        this.position(trigger, popover, pos);
      }
    });
    
    document.addEventListener('click', (e) => {
      if (!popover.contains(e.target)) {
        popover.classList.remove('active');
      }
    });
  },
  
  position: function(trigger, popover, position = 'top') {
    const rect = trigger.getBoundingClientRect();
    let x = 0;
    let y = 0;
    
    if (position === 'bottom') {
      x = rect.left + (rect.width / 2) - (popover.offsetWidth / 2);
      y = rect.bottom + 8;
    } else if (position === 'left') {
      x = rect.left - popover.offsetWidth - 8;
      y = rect.top + (rect.height / 2) - (popover.offsetHeight / 2);
    } else if (position === 'right') {
      x = rect.right + 8;
      y = rect.top + (rect.height / 2) - (popover.offsetHeight / 2);
    } else {
      // Default: top
      x = rect.left + (rect.width / 2) - (popover.offsetWidth / 2);
      y = rect.top - popover.offsetHeight - 8;
    }
    
    // Ensure popover stays on screen
    x = Math.max(8, Math.min(x, window.innerWidth - popover.offsetWidth - 8));
    y = Math.max(8, Math.min(y, window.innerHeight - popover.offsetHeight - 8));
    
    popover.style.left = `${x}px`;
    popover.style.top = `${y}px`;
  }
};
