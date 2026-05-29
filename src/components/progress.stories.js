export default {
  title: 'Feedback/Progress Indicators',
};

export const ProgressShowcase = () => {
  return `
    <div style="padding: 30px; max-width: 500px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Progress Indicators (İlerleme Çubukları & Yükleniyor Göstergeleri)
      </h3>
      
      <div style="display: flex; flex-direction: column; gap: 24px;">
        
        <!-- Standart Tangerine Progress -->
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 8px;">Standart Tangerine (%45):</h4>
          <div class="citruss-progress-bar">
            <div class="progress-fill" style="width: 45%;"></div>
          </div>
        </div>

        <!-- Lime Progress -->
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 8px;">Lime Success (%80):</h4>
          <div class="citruss-progress-bar progress-lime">
            <div class="progress-fill" style="width: 80%;"></div>
          </div>
        </div>

        <!-- Yükleniyor Dönen Çember (Spinner) / Animasyonlar -->
        <div>
          <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 12px;">Yükleme Çemberleri (Spinning Loaders):</h4>
          <div style="display: flex; gap: 20px; align-items: center;">
            <div class="citruss-spinner" style="
              width: 32px; 
              height: 32px; 
              border: 3px solid rgba(255,255,255,0.1); 
              border-top-color: var(--citruss-tangerine); 
              border-radius: 50%; 
              animation: spin 1s linear infinite;
            "></div>
            
            <div class="citruss-spinner" style="
              width: 32px; 
              height: 32px; 
              border: 3px solid rgba(255,255,255,0.1); 
              border-top-color: var(--citruss-lime); 
              border-radius: 50%; 
              animation: spin 1s linear infinite;
            "></div>

            <span style="color: var(--citruss-text-muted); font-size: 0.9rem;">Sunucu verileri analiz ediliyor...</span>
          </div>
        </div>

      </div>
    </div>
    
    <style>
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
  `;
};
