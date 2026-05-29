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
        Accordion (Akordeon) Bileşeni
      </h3>
      
      <div id="accordion-group-demo">
        <div class="citruss-accordion active">
          <div class="accordion-header">
            <span>CitruSS Ne Anlama Geliyor?</span>
            <span class="arrow">▼</span>
          </div>
          <div class="accordion-body">
            CitruSS, narenciye meyvelerinin (Citrus) taze, enerjik renklerinden ilham alan ve tamamen CSS/Sass tabanlı ultra hızlı bir "Frosted Glassmorphic" arayüz kütüphanesidir.
          </div>
        </div>
        
        <div class="citruss-accordion">
          <div class="accordion-header">
            <span>Sıfır Bağımlılık (Zero-Dependency) Nedir?</span>
            <span class="arrow">▼</span>
          </div>
          <div class="accordion-body">
            Hiçbir React, Vue, jQuery veya Bootstrap kütüphanesine ihtiyaç duymadan, saf vanilya HTML/CSS/JS ile çalışarak projelerinizi hafif ve bağımsız tutar.
          </div>
        </div>

        <div class="citruss-accordion">
          <div class="accordion-header">
            <span>Performans Optimizasyonu Nasıl Sağlanır?</span>
            <span class="arrow">▼</span>
          </div>
          <div class="accordion-body">
            Gelişmiş CSS filtreleri ('backdrop-filter') seçici olarak kullanılır. Birden çok iç içe katmanın aynı anda blur yapması önlenerek GPU yükü en aza indirilir ve 60+ FPS hedeflenir.
          </div>
        </div>
      </div>
    </div>
  `;
};
