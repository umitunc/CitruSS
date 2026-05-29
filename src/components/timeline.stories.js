export default {
  title: 'Data Display/Timeline',
};

export const TimelineShowcase = () => {
  return `
    <div style="padding: 30px; max-width: 500px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Timeline (Zaman Çizelgesi)
      </h3>
      
      <div class="citruss-timeline">
        <!-- Item 1 (Active Success) -->
        <div class="timeline-item timeline-success">
          <div class="timeline-time">10:48</div>
          <div class="timeline-title">Frankfurt Düğümleri Senkronize Edildi</div>
          <div class="timeline-content">Veritabanı sunucuları replikasyon doğrulama adımlarını başarıyla geçti.</div>
        </div>
        
        <!-- Item 2 -->
        <div class="timeline-item">
          <div class="timeline-time">09:15</div>
          <div class="timeline-title">Görsel CSS Regresyon Testleri</div>
          <div class="timeline-content">BackstopJS piksel karşılaştırma testleri %100 eşleşme ile tamamlandı.</div>
        </div>
        
        <!-- Item 3 -->
        <div class="timeline-item">
          <div class="timeline-time">08:00</div>
          <div class="timeline-title">CitruSS Motoru Başlatıldı</div>
          <div class="timeline-content">Vite derleyicisi üretim modunda cam tasarımlı stil dosyalarını oluşturdu.</div>
        </div>
      </div>
    </div>
  `;
};
