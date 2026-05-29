import { useEffect } from '@storybook/preview-api';

export default {
  title: 'Interactive/Carousel',
};

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
        Carousel (Slider / Atlıkarınca)
      </h3>
      
      <div class="citruss-carousel" id="demo-carousel-component">
        <div class="carousel-inner">
          
          <!-- Slide 1 -->
          <div class="carousel-item active" style="background: linear-gradient(135deg, rgba(255, 107, 0, 0.4) 0%, rgba(255, 159, 67, 0.4) 100%);">
            <div style="padding: 40px; text-align: center; height: 200px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
              <h3 style="margin: 0 0 10px; color: var(--citruss-text-main); font-size: 1.6rem; font-weight: 800;">Akıcı Cam Arayüzü</h3>
              <p style="margin: 0; color: rgba(255,255,255,0.8); font-size: 0.95rem;">CitruSS UI modern ve göz alıcı cam tasarımları sunar.</p>
            </div>
          </div>
          
          <!-- Slide 2 -->
          <div class="carousel-item" style="background: linear-gradient(135deg, rgba(132, 204, 22, 0.4) 0%, rgba(163, 230, 53, 0.4) 100%);">
            <div style="padding: 40px; text-align: center; height: 200px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
              <h3 style="margin: 0 0 10px; color: var(--citruss-text-main); font-size: 1.6rem; font-weight: 800;">Sıfır Bağımlılık</h3>
              <p style="margin: 0; color: rgba(255,255,255,0.8); font-size: 0.95rem;">Hiçbir ek kütüphaneye bağımlı olmadan performanslı çalışır.</p>
            </div>
          </div>

          <!-- Slide 3 -->
          <div class="carousel-item" style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.4) 0%, rgba(14, 165, 233, 0.4) 100%);">
            <div style="padding: 40px; text-align: center; height: 200px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
              <h3 style="margin: 0 0 10px; color: var(--citruss-text-main); font-size: 1.6rem; font-weight: 800;">Electron & Web Hazır</h3>
              <p style="margin: 0; color: rgba(255,255,255,0.8); font-size: 0.95rem;">Masaüstü ve web uygulamaları için en iyi performansı verir.</p>
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
    </div>
  `;
};
