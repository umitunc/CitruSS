export class CitruSSCarousel {
  constructor(element, options = {}) {
    this.carousel = element;
    if (!this.carousel) return;
    this.inner = this.carousel.querySelector('.carousel-inner');
    this.items = Array.from(this.carousel.querySelectorAll('.carousel-item'));
    this.dots = Array.from(this.carousel.querySelectorAll('.indicator-dot'));
    this.currentIndex = 0;
    this.interval = options.interval || 5000;
    this.autoPlayTimer = null;
    
    this.init();
  }
  
  init() {
    const prevBtn = this.carousel.querySelector('.control-prev');
    const nextBtn = this.carousel.querySelector('.control-next');
    
    if (prevBtn) prevBtn.addEventListener('click', () => { this.prev(); this.resetTimer(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { this.next(); this.resetTimer(); });
    
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.goTo(index);
        this.resetTimer();
      });
    });
    
    this.startTimer();
  }
  
  goTo(index) {
    if (index < 0) index = this.items.length - 1;
    if (index >= this.items.length) index = 0;
    
    this.currentIndex = index;
    if (this.inner) {
      this.inner.style.transform = `translateX(-${index * 100}%)`;
    }
    
    this.dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }
  
  next() {
    this.goTo(this.currentIndex + 1);
  }
  
  prev() {
    this.goTo(this.currentIndex - 1);
  }
  
  startTimer() {
    if (this.interval > 0) {
      this.autoPlayTimer = setInterval(() => this.next(), this.interval);
    }
  }
  
  resetTimer() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.startTimer();
    }
  }
}
