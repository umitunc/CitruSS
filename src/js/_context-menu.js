export const CitruSSContextMenu = {
  bind: function(targetSelector, menuId) {
    const target = document.querySelector(targetSelector);
    const menu = document.getElementById(menuId);
    if (!target || !menu) return;
    
    target.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      
      menu.style.display = 'block';
      
      // Keep menu in boundary
      const x = Math.min(e.clientX, window.innerWidth - menu.offsetWidth - 10);
      const y = Math.min(e.clientY, window.innerHeight - menu.offsetHeight - 10);
      
      menu.style.left = `${x}px`;
      menu.style.top = `${y}px`;
    });
    
    document.addEventListener('click', () => {
      menu.style.display = 'none';
    });
  }
};
