export class CitruSSAccordion {
  constructor(containerElement) {
    this.container = containerElement;
    if (!this.container) return;
    this.headers = Array.from(this.container.querySelectorAll('.accordion-header'));
    this.init();
  }
  
  init() {
    this.headers.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.closest('.citruss-accordion');
        const isActive = item.classList.contains('active');
        
        // Collapse all others
        this.container.querySelectorAll('.citruss-accordion').forEach(acc => {
          acc.classList.remove('active');
          const body = acc.querySelector('.accordion-body');
          if (body) body.style.maxHeight = '0';
        });
        
        if (!isActive) {
          item.classList.add('active');
          const body = item.querySelector('.accordion-body');
          if (body) {
            body.style.maxHeight = body.scrollHeight + 'px';
          }
        }
      });
    });
  }
}
