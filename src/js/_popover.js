export const CitruSSPopovers = {
  bind: function(triggerSelector, popoverId) {
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
        this.position(trigger, popover);
      }
    });
    
    document.addEventListener('click', (e) => {
      if (!popover.contains(e.target)) {
        popover.classList.remove('active');
      }
    });
  },
  
  position: function(trigger, popover) {
    const rect = trigger.getBoundingClientRect();
    const x = rect.left + (rect.width / 2) - (popover.offsetWidth / 2);
    const y = rect.top - popover.offsetHeight - 8;
    
    popover.style.left = `${Math.max(8, x)}px`;
    popover.style.top = `${Math.max(8, y)}px`;
  }
};
