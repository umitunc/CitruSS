export class CitruSSWizard {
  constructor(elementId, options = {}) {
    this.container = document.getElementById(elementId);
    if (!this.container) return;
    this.steps = Array.from(this.container.querySelectorAll('.citruss-wizard-step'));
    this.nodes = Array.from(this.container.querySelectorAll('.wizard-step-node'));
    this.currentStep = 0;
    this.progressBar = this.container.querySelector('.citruss-progress-bar .progress-fill');
    this.init();
  }
  
  init() {
    this.showStep(0);
    const nextBtn = this.container.querySelector('.wizard-next');
    const prevBtn = this.container.querySelector('.wizard-prev');
    
    if (nextBtn) nextBtn.addEventListener('click', () => this.next());
    if (prevBtn) prevBtn.addEventListener('click', () => this.prev());
  }
  
  showStep(index) {
    this.steps.forEach((step, i) => {
      step.style.display = i === index ? 'block' : 'none';
    });
    
    this.nodes.forEach((node, i) => {
      node.classList.remove('active', 'completed');
      if (i < index) {
        node.classList.add('completed');
      } else if (i === index) {
        node.classList.add('active');
      }
    });
    
    this.currentStep = index;
    
    const progressPercentage = ((index) / (this.steps.length - 1)) * 100;
    if (this.progressBar) {
      this.progressBar.style.width = `${progressPercentage}%`;
    }
  }
  
  next() {
    if (this.currentStep < this.steps.length - 1) {
      this.showStep(this.currentStep + 1);
    }
  }
  
  prev() {
    if (this.currentStep > 0) {
      this.showStep(this.currentStep - 1);
    }
  }
}
