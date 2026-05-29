import { useEffect } from 'storybook/preview-api';

export default {
  title: 'Interactive/Carousel',
};

const carouselHTML = `
<div class="citruss-carousel" id="demo-carousel-component">
  <div class="carousel-inner">
    
    <!-- Slide 1 -->
    <div class="carousel-item active" style="background: linear-gradient(135deg, rgba(255, 107, 0, 0.4) 0%, rgba(255, 159, 67, 0.4) 100%);">
      <div style="padding: 40px; text-align: center; height: 200px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h3 style="margin: 0 0 10px; color: var(--citruss-text-main); font-size: 1.6rem; font-weight: 800;">Fluid Glass Interface</h3>
        <p style="margin: 0; color: rgba(255,255,255,0.8); font-size: 0.95rem;">CitruSS UI offers modern and eye-catching glassmorphic designs.</p>
      </div>
    </div>
    
    <!-- Slide 2 -->
    <div class="carousel-item" style="background: linear-gradient(135deg, rgba(132, 204, 22, 0.4) 0%, rgba(163, 230, 53, 0.4) 100%);">
      <div style="padding: 40px; text-align: center; height: 200px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h3 style="margin: 0 0 10px; color: var(--citruss-text-main); font-size: 1.6rem; font-weight: 800;">Zero Dependency</h3>
        <p style="margin: 0; color: rgba(255,255,255,0.8); font-size: 0.95rem;">Runs performantly without depending on any external libraries.</p>
      </div>
    </div>
    
    <!-- Slide 3 -->
    <div class="carousel-item" style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.4) 0%, rgba(14, 165, 233, 0.4) 100%);">
      <div style="padding: 40px; text-align: center; height: 200px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h3 style="margin: 0 0 10px; color: var(--citruss-text-main); font-size: 1.6rem; font-weight: 800;">Electron & Web Ready</h3>
        <p style="margin: 0; color: rgba(255,255,255,0.8); font-size: 0.95rem;">Provides the best performance for desktop and web applications.</p>
      </div>
    </div>

  </div>
  
  <!-- Controls -->
  <button class="control-prev">◀</button>
  <button class="control-next">▶</button>
  
  <!-- Indicators -->
  <div class="carousel-indicators">
    <span class="indicator-dot active"></span>
    <span class="indicator-dot"></span>
    <span class="indicator-dot"></span>
  </div>
</div>
`.trim();

const carouselJS = `
// Initialize the Carousel component
const el = document.getElementById('demo-carousel-component');
if (el && window.CitruSS?.Carousel) {
  new window.CitruSS.Carousel(el, { interval: 4000 });
}
`.trim();

export const StandardCarousel = () => {
  useEffect(() => {
    const el = document.getElementById('demo-carousel-component');
    if (el && window.CitruSS?.Carousel) {
      new window.CitruSS.Carousel(el, { interval: 4000 });
    }
  }, []);

  return `
    <div style="padding: 30px; max-width: 600px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Carousel
      </h3>
      
      ${carouselHTML}

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML & JS Code Examples
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto; display: flex; flex-direction: column; gap: 16px;">
          <div>
            <h5 style="color: var(--citruss-lime); margin: 0 0 8px 0; font-size: 0.85rem;">Carousel HTML:</h5>
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">${carouselHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
          <div>
            <h5 style="color: var(--citruss-orange); margin: 0 0 8px 0; font-size: 0.85rem;">Initialization JS:</h5>
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">${carouselJS.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
        </div>
      </details>
    </div>
  `;
};

StandardCarousel.parameters = {
  docs: {
    source: {
      code: `${carouselHTML}\n\n/* Javascript */\n${carouselJS}`,
    },
  },
};

