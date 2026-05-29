import { useEffect } from '@storybook/preview-api';

export default {
  title: 'Forms/Inputs & Validation',
};

export const FormsAndInputs = () => {
  useEffect(() => {
    if (window.CitruSS?.Validator) {
      window.CitruSS.Validator.bind('#demo-validation-form', (form) => {
        if (window.CitruSS?.toast) {
          window.CitruSS.toast({
            title: 'Başarılı!',
            message: 'Form doğrulaması başarıyla tamamlandı.',
            type: 'success'
          });
        } else {
          alert('Form validated!');
        }
      });
    }
  }, []);

  return `
    <div style="padding: 30px; max-width: 600px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Forms, Inputs & Validation (Form Elemanları ve Doğrulama)
      </h3>
      
      <form id="demo-validation-form" style="display: flex; flex-direction: column; gap: 20px;">
        
        <!-- Standart Input -->
        <div class="citruss-input-group">
          <label style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 0.9rem; display: block; margin-bottom: 8px;">
            Kullanıcı Adı (Zorunlu)
          </label>
          <input type="text" placeholder="Orn: okantruncgil" required class="citruss-input" style="width: 100%; box-sizing: border-box;" />
        </div>

        <!-- E-posta Input ve Özel Doğrulama Kuralları -->
        <div class="citruss-input-group">
          <label style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 0.9rem; display: block; margin-bottom: 8px;">
            E-posta Adresi (Doğru Format & Zorunlu)
          </label>
          <input type="email" placeholder="Orn: user@citruss.com" required data-citruss-rules="email" class="citruss-input" style="width: 100%; box-sizing: border-box;" />
        </div>

        <!-- Şifre Input (Min Karakter) -->
        <div class="citruss-input-group">
          <label style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 0.9rem; display: block; margin-bottom: 8px;">
            Şifre (En az 6 Karakter)
          </label>
          <input type="password" placeholder="••••••••" required data-citruss-rules="min:6" class="citruss-input" style="width: 100%; box-sizing: border-box;" />
        </div>

        <!-- Select Seçim Elemanı -->
        <div class="citruss-input-group">
          <label style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 0.9rem; display: block; margin-bottom: 8px;">
            Sunucu Bölgesi Seçin
          </label>
          <select class="citruss-input" style="width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.2);">
            <option value="istanbul">Istanbul (TR)</option>
            <option value="frankfurt">Frankfurt (DE)</option>
            <option value="london">London (UK)</option>
          </select>
        </div>

        <button type="submit" class="citruss-btn btn-primary" style="margin-top: 10px; width: 100%;">
          Hesap Oluştur ve Doğrula
        </button>

      </form>
    </div>
  `;
};
