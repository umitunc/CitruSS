import { useEffect } from '@storybook/preview-api';

export default {
  title: 'Interactive/Accordion',
};

export const StandardAccordion = () => {
  useEffect(() => {
    const accContainer = document.getElementById('accordion-group-demo');
    if (accContainer && window.CitruSS?.Accordion) {
      new window.CitruSS.Accordion(accContainer);
    }
  }, []);

  return `
    <div style="padding: 30px; max-width: 650px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Accordion Component
      </h3>
      
      <div id="accordion-group-demo">
        <div class="citruss-accordion active">
          <div class="accordion-header">
            <span>What Does CitruSS Mean?</span>
            <span class="arrow">▼</span>
          </div>
          <div class="accordion-body">
            CitruSS is an ultra-fast, Sass-based "Frosted Glassmorphic" interface library inspired by the fresh, energetic colors of citrus fruits.
          </div>
        </div>
        
        <div class="citruss-accordion">
          <div class="accordion-header">
            <span>What is Zero-Dependency?</span>
            <span class="arrow">▼</span>
          </div>
          <div class="accordion-body">
            It works with pure vanilla HTML/CSS/JS without requiring any React, Vue, jQuery, or Bootstrap libraries, keeping your projects lightweight and independent.
          </div>
        </div>

        <div class="citruss-accordion">
          <div class="accordion-header">
            <span>How is Performance Optimization Achieved?</span>
            <span class="arrow">▼</span>
          </div>
          <div class="accordion-body">
            Advanced CSS filters ("backdrop-filter") are used selectively. By preventing multiple nested layers from blurring simultaneously, GPU load is minimized, targeting 60+ FPS.
          </div>
        </div>
      </div>
    </div>
  `;
};
