import { useEffect } from 'storybook/preview-api';

export default {
  title: 'Interactive/Segmented Control',
};

export const LiquidGlassSegmented = () => {
  useEffect(() => {
    const segmented = document.querySelector('.citruss-segmented-control');
    if (!segmented) return;

    const items = segmented.querySelectorAll('.segmented-item');
    const indicator = segmented.querySelector('.segmented-indicator-glass');

    items.forEach((item, index) => {
      item.addEventListener('click', () => {
        // Toggle text active colors
        items.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        // Toggle glass active and morphing styles
        indicator.classList.add('active');
        indicator.classList.add('morphing');

        // Dynamic coordinate calculation
        const percentLeft = index * 50; // Dynamic calculations for 2 segments
        indicator.style.left = `calc(${percentLeft}% + 4px)`;

        // Reset morphing/glass state back to solid after transition complete
        setTimeout(() => {
          indicator.classList.remove('active');
          indicator.classList.remove('morphing');
        }, 350); // Matches the 0.35s transition duration defined in CSS
      });
    });
  }, []);

  return `
    <div style="padding: 80px 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 300px; gap: 24px; font-family: 'Inter', sans-serif; position: relative;">
      
      <!-- SVG LIQUID FILTER DEFINITION -->
      <svg style="position: absolute; width: 0; height: 0; pointer-events: none;" width="0" height="0">
        <defs>
          <filter id="mini-liquid-lens">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <!-- Apple Design Aesthetic Segmented Control -->
      <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
        <div class="citruss-segmented-control-wrapper">
          <div class="citruss-segmented-control">
            <!-- Items -->
            <button class="segmented-item active">For You</button>
            <button class="segmented-item">Library</button>
            
            <!-- Sliding Indicator -->
            <div class="segmented-indicator-glass">
              <div class="segmented-indicator-filter"></div>
              <div class="segmented-indicator-overlay"></div>
              <div class="segmented-indicator-specular"></div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  `;
};

LiquidGlassSegmented.parameters = {
  docs: {
    source: {
      code: `
<!-- SVG Liquid Lens Filter -->
<svg style="position: absolute; width: 0; height: 0;" width="0" height="0">
  <defs>
    <filter id="mini-liquid-lens">
      <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
      <feComposite in="SourceGraphic" in2="goo" operator="atop" />
    </filter>
  </defs>
</svg>

<!-- Segmented Control Markup -->
<div class="citruss-segmented-control">
  <button class="segmented-item active">For You</button>
  <button class="segmented-item">Library</button>
  
  <div class="segmented-indicator-glass">
    <div class="segmented-indicator-filter"></div>
    <div class="segmented-indicator-overlay"></div>
    <div class="segmented-indicator-specular"></div>
  </div>
</div>
      `.trim(),
    },
  },
};
