import { useEffect } from 'storybook/preview-api';

export default {
  title: 'Interactive/Liquid Glass Slider',
};

export const LiquidGlassSlider = () => {
  useEffect(() => {
    const track = document.querySelector('.slider-track-wrapper');
    const thumb = document.querySelector('.slider-thumb-glass');
    const progress = document.querySelector('.slider-progress');
    const valBadge = document.querySelector('.slider-value-badge');
    
    if (!track || !thumb || !progress) return;
    
    let isDragging = false;
    
    const updateSlider = (clientX) => {
      const rect = track.getBoundingClientRect();
      let percentage = ((clientX - rect.left) / rect.width) * 100;
      percentage = Math.max(0, Math.min(100, percentage));
      
      progress.style.width = `${percentage}%`;
      thumb.style.left = `${percentage}%`;
      
      if (valBadge) {
        valBadge.textContent = `${Math.round(percentage)}%`;
      }
    };
    
    const onMouseDown = (e) => {
      isDragging = true;
      thumb.classList.add('active');
      updateSlider(e.clientX);
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };
    
    const onMouseMove = (e) => {
      if (!isDragging) return;
      updateSlider(e.clientX);
    };
    
    const onMouseUp = () => {
      isDragging = false;
      thumb.classList.remove('active');
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    
    // Touch support
    const onTouchStart = (e) => {
      isDragging = true;
      thumb.classList.add('active');
      updateSlider(e.touches[0].clientX);
      document.addEventListener('touchmove', onTouchMove);
      document.addEventListener('touchend', onTouchEnd);
    };
    
    const onTouchMove = (e) => {
      if (!isDragging) return;
      updateSlider(e.touches[0].clientX);
    };
    
    const onTouchEnd = () => {
      isDragging = false;
      thumb.classList.remove('active');
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    };
    
    track.addEventListener('mousedown', onMouseDown);
    track.addEventListener('touchstart', onTouchStart);
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

      <!-- Apple Design Aesthetic - Solid in rest, Glass on sliding -->
      <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
        <div class="citruss-liquid-slider-wrapper">
          <div class="slider-track-wrapper">
            <div class="slider-container">
              <div class="slider-progress" style="width: 50%;"></div>
              <div class="slider-thumb-glass" style="left: 50%;">
                <div class="slider-thumb-glass-filter"></div>
                <div class="slider-thumb-glass-overlay"></div>
                <div class="slider-thumb-glass-specular"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="slider-value-badge" style="font-size: 0.95rem; font-weight: 700; color: var(--citruss-text-main); text-shadow: 0 2px 4px rgba(0,0,0,0.25); font-family: 'Inter', sans-serif;">50%</div>
      </div>
      
    </div>
  `;
};

LiquidGlassSlider.parameters = {
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

<!-- Slider Markup -->
<div class="citruss-liquid-slider-wrapper">
  <div class="slider-track-wrapper">
    <div class="slider-container">
      <div class="slider-progress" style="width: 50%;"></div>
      <div class="slider-thumb-glass" style="left: 50%;">
        <div class="slider-thumb-glass-filter"></div>
        <div class="slider-thumb-glass-overlay"></div>
        <div class="slider-thumb-glass-specular"></div>
      </div>
    </div>
  </div>
</div>
      `.trim(),
    },
  },
};
