import { useEffect } from '@storybook/preview-api';

export default {
  title: 'Interactive/Accordion',
};

const accordionHTML = `
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
`.trim();

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
      
      ${accordionHTML}

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="margin-top: 32px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${accordionHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
  `;
};

StandardAccordion.parameters = {
  docs: {
    source: {
      code: accordionHTML,
    },
  },
};

