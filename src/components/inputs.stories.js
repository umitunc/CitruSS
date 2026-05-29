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
            title: 'Success!',
            message: 'Form validation completed successfully.',
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
        Forms, Inputs & Validation
      </h3>
      
      <form id="demo-validation-form" style="display: flex; flex-direction: column; gap: 20px;">
        
        <!-- Standard Input -->
        <div class="citruss-input-group">
          <label style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 0.9rem; display: block; margin-bottom: 8px;">
            Username (Required)
          </label>
          <input type="text" placeholder="e.g. okantruncgil" required class="citruss-input" style="width: 100%; box-sizing: border-box;" />
        </div>

        <!-- Email Input and Rules -->
        <div class="citruss-input-group">
          <label style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 0.9rem; display: block; margin-bottom: 8px;">
            Email Address (Valid Format & Required)
          </label>
          <input type="email" placeholder="e.g. user@citruss.com" required data-citruss-rules="email" class="citruss-input" style="width: 100%; box-sizing: border-box;" />
        </div>

        <!-- Password Input -->
        <div class="citruss-input-group">
          <label style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 0.9rem; display: block; margin-bottom: 8px;">
            Password (At least 6 Characters)
          </label>
          <input type="password" placeholder="••••••••" required data-citruss-rules="min:6" class="citruss-input" style="width: 100%; box-sizing: border-box;" />
        </div>

        <!-- Select Element -->
        <div class="citruss-input-group">
          <label style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 0.9rem; display: block; margin-bottom: 8px;">
            Select Server Region
          </label>
          <select class="citruss-input" style="width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.2);">
            <option value="istanbul">Istanbul (TR)</option>
            <option value="frankfurt">Frankfurt (DE)</option>
            <option value="london">London (UK)</option>
          </select>
        </div>

        <button type="submit" class="citruss-btn btn-primary" style="margin-top: 10px; width: 100%;">
          Create Account and Validate
        </button>

      </form>
    </div>
  `;
};
