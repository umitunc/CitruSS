import { useEffect } from '@storybook/preview-api';

export default {
  title: 'Forms/Inputs & Form Controls',
};

// Inline SVG icons for pure, zero-dependency visual excellence
const icons = {
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  lock: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  upload: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: block; margin: 0 auto;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>`
};

export const CompleteFormGallery = () => {
  useEffect(() => {
    // Enable simple dragover visuals for upload zone
    const zone = document.querySelector('.citruss-upload-zone');
    if (zone) {
      zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        zone.classList.add('dragover');
      });
      zone.addEventListener('dragleave', () => {
        zone.classList.remove('dragover');
      });
      zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('dragover');
      });
    }

    // Initialize custom validation binding if CitruSS Validator is present
    if (window.CitruSS?.Validator) {
      window.CitruSS.Validator.bind('#demo-validation-form', (form) => {
        if (window.CitruSS?.toast) {
          window.CitruSS.toast({
            title: 'Form Validated!',
            message: 'Your registration data complies with all requirements.',
            type: 'success'
          });
        } else {
          alert('Success! Form details are valid.');
        }
      });
    }
  }, []);

  return `
    <div style="padding: 40px; max-width: 1000px; margin: 0 auto; display: flex; flex-direction: column; gap: 40px; font-family: var(--citruss-font-body);">
      
      <!-- HEADER -->
      <div>
        <h2 style="color: var(--citruss-text-main); font-family: var(--citruss-font-display); font-weight: 800; font-size: 2.2rem; margin: 0 0 8px 0; letter-spacing: -0.02em;">
          Form Controls & Input Systems
        </h2>
        <p style="color: var(--citruss-text-muted); font-size: 1rem; margin: 0; max-width: 700px; line-height: 1.5;">
          A premium suite of interactive glassmorphic form elements supporting validation, icons, floating labels, custom checkboxes, select controls, sliders, and upload interfaces.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
        
        <!-- COLUMN 1: Basic Form Elements & Inputs -->
        <div style="display: flex; flex-direction: column; gap: 28px;">
          
          <!-- Section: Standard & Custom Elements -->
          <div style="background: rgb(255 255 255 / 1%); border: 1px solid var(--citruss-glass-border); padding: 24px; border-radius: 12px;">
            <h3 style="color: var(--citruss-text-main); font-family: var(--citruss-font-display); font-size: 1.1rem; font-weight: 700; margin: 0 0 20px 0;">
              1. Basic Fields & Custom Dropdowns
            </h3>
            
            <div class="citruss-form-group">
              <label class="citruss-form-label">Full Name</label>
              <input type="text" class="citruss-input" placeholder="e.g. Jane Doe" />
              <div class="citruss-helper-text">Enter your legal name as it appears on documents.</div>
            </div>

            <div class="citruss-form-group">
              <label class="citruss-form-label">Biography / Description</label>
              <textarea class="citruss-textarea" placeholder="Tell us about yourself..."></textarea>
            </div>

            <div class="citruss-form-group">
              <label class="citruss-form-label">Select Country</label>
              <div class="citruss-select-wrapper">
                <select class="citruss-select">
                  <option value="tr">Turkey (TR)</option>
                  <option value="de">Germany (DE)</option>
                  <option value="us">United States (US)</option>
                  <option value="uk">United Kingdom (UK)</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Section: Floating Labels -->
          <div style="background: rgb(255 255 255 / 1%); border: 1px solid var(--citruss-glass-border); padding: 24px; border-radius: 12px;">
            <h3 style="color: var(--citruss-text-main); font-family: var(--citruss-font-display); font-size: 1.1rem; font-weight: 700; margin: 0 0 20px 0;">
              2. Floating Labels
            </h3>
            
            <div class="citruss-input-floating">
              <input type="text" class="citruss-input" id="float-user" placeholder=" " />
              <label class="citruss-label" for="float-user">Floating Username</label>
            </div>

            <div class="citruss-input-floating" style="margin-bottom: 0;">
              <input type="email" class="citruss-input" id="float-email" placeholder=" " />
              <label class="citruss-label" for="float-email">Floating Email Address</label>
            </div>
          </div>

          <!-- Section: Selection Controls -->
          <div style="background: rgb(255 255 255 / 1%); border: 1px solid var(--citruss-glass-border); padding: 24px; border-radius: 12px;">
            <h3 style="color: var(--citruss-text-main); font-family: var(--citruss-font-display); font-size: 1.1rem; font-weight: 700; margin: 0 0 20px 0;">
              3. Checkboxes, Radios & Switches
            </h3>
            
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <!-- Checkboxes -->
              <div style="display: flex; flex-wrap: wrap; gap: 12px;">
                <label class="citruss-checkbox">
                  <input type="checkbox" checked />
                  <span class="control-indicator"></span>
                  Option One
                </label>
                <label class="citruss-checkbox">
                  <input type="checkbox" />
                  <span class="control-indicator"></span>
                  Option Two
                </label>
                <label class="citruss-checkbox">
                  <input type="checkbox" disabled checked />
                  <span class="control-indicator"></span>
                  Disabled
                </label>
              </div>

              <!-- Radios -->
              <div style="display: flex; flex-wrap: wrap; gap: 12px; border-top: 1px solid var(--citruss-glass-border); padding-top: 16px;">
                <label class="citruss-radio">
                  <input type="radio" name="radio-demo" checked />
                  <span class="control-indicator"></span>
                  First Selection
                </label>
                <label class="citruss-radio">
                  <input type="radio" name="radio-demo" />
                  <span class="control-indicator"></span>
                  Second Selection
                </label>
              </div>

              <!-- Switches -->
              <div style="display: flex; flex-direction: column; gap: 12px; border-top: 1px solid var(--citruss-glass-border); padding-top: 16px;">
                <label class="citruss-toggle">
                  <input type="checkbox" checked />
                  <span class="toggle-track"></span>
                  Enable background notifications
                </label>
                <label class="citruss-toggle">
                  <input type="checkbox" />
                  <span class="toggle-track"></span>
                  Dark mode default
                </label>
              </div>
            </div>
          </div>

        </div>

        <!-- COLUMN 2: Input Enhancements & Live Validator -->
        <div style="display: flex; flex-direction: column; gap: 28px;">

          <!-- Section: Prepend, Append, Icons -->
          <div style="background: rgb(255 255 255 / 1%); border: 1px solid var(--citruss-glass-border); padding: 24px; border-radius: 12px;">
            <h3 style="color: var(--citruss-text-main); font-family: var(--citruss-font-display); font-size: 1.1rem; font-weight: 700; margin: 0 0 20px 0;">
              4. Icons & Input Addons
            </h3>

            <div style="display: flex; flex-direction: column; gap: 20px;">
              <!-- Icon Input Left -->
              <div class="citruss-form-group">
                <label class="citruss-form-label">Search Workspace</label>
                <div class="citruss-input-icon-wrapper icon-left">
                  <input type="text" class="citruss-input" placeholder="Type to search..." />
                  <div class="citruss-icon">${icons.search}</div>
                </div>
              </div>

              <!-- Icon Input Right -->
              <div class="citruss-form-group">
                <label class="citruss-form-label">Email Subscription</label>
                <div class="citruss-input-icon-wrapper icon-right">
                  <input type="email" class="citruss-input" placeholder="enter@email.com" />
                  <div class="citruss-icon">${icons.mail}</div>
                </div>
              </div>

              <!-- Input Group (Prepend) -->
              <div class="citruss-form-group">
                <label class="citruss-form-label">CitruSS Handle</label>
                <div class="citruss-input-group">
                  <span class="citruss-input-group-text">@</span>
                  <input type="text" class="citruss-input" placeholder="username" />
                </div>
              </div>

              <!-- Input Group (Append) -->
              <div class="citruss-form-group">
                <label class="citruss-form-label">Storage Capacity</label>
                <div class="citruss-input-group">
                  <input type="number" class="citruss-input" placeholder="250" />
                  <span class="citruss-input-group-text">GB</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Section: Ranges & File Upload -->
          <div style="background: rgb(255 255 255 / 1%); border: 1px solid var(--citruss-glass-border); padding: 24px; border-radius: 12px;">
            <h3 style="color: var(--citruss-text-main); font-family: var(--citruss-font-display); font-size: 1.1rem; font-weight: 700; margin: 0 0 20px 0;">
              5. Sliders & File Upload Zone
            </h3>

            <div style="display: flex; flex-direction: column; gap: 24px;">
              <div class="citruss-range-group">
                <label class="citruss-form-label">Volume Level</label>
                <input type="range" class="citruss-range" min="0" max="100" value="70" />
              </div>

              <div class="citruss-upload-zone">
                <div class="upload-icon">${icons.upload}</div>
                <div class="upload-text">Drag & drop files here</div>
                <div class="upload-sub">Supports JPG, PNG, PDF (Max. 10MB)</div>
              </div>
            </div>
          </div>

          <!-- Section: Live Validation Demo -->
          <div style="background: rgb(255 255 255 / 1.5%); border: 1px solid var(--citruss-tangerine); box-shadow: 0 0 15px var(--citruss-tangerine-glow); padding: 24px; border-radius: 12px;">
            <h3 style="color: var(--citruss-tangerine); font-family: var(--citruss-font-display); font-size: 1.1rem; font-weight: 800; margin: 0 0 20px 0;">
              6. Interactive Validation Form
            </h3>

            <form id="demo-validation-form" style="display: flex; flex-direction: column; gap: 16px;">
              
              <!-- Required Text Field -->
              <div class="citruss-validation-group">
                <div class="citruss-form-group" style="margin-bottom: 0;">
                  <label class="citruss-form-label">Developer ID (Required)</label>
                  <input type="text" class="citruss-input" placeholder="e.g. dev_citruss" required />
                </div>
              </div>

              <!-- Rule-Based Email Field -->
              <div class="citruss-validation-group">
                <div class="citruss-form-group" style="margin-bottom: 0;">
                  <label class="citruss-form-label">Recovery Email (Email Rule)</label>
                  <div class="citruss-input-icon-wrapper icon-left">
                    <input type="email" class="citruss-input" placeholder="dev@citruss.io" required data-citruss-rules="email" />
                    <div class="citruss-icon">${icons.mail}</div>
                  </div>
                </div>
              </div>

              <!-- Min-Length Password Field -->
              <div class="citruss-validation-group">
                <div class="citruss-form-group" style="margin-bottom: 0;">
                  <label class="citruss-form-label">Access Token (Min: 6 characters)</label>
                  <div class="citruss-input-icon-wrapper icon-left">
                    <input type="password" class="citruss-input" placeholder="••••••••" required data-citruss-rules="min:6" />
                    <div class="citruss-icon">${icons.lock}</div>
                  </div>
                </div>
              </div>

              <button type="submit" class="citruss-btn btn-primary" style="width: 100%; border-radius: 8px; font-weight: 700; padding: 12px; margin-top: 10px;">
                Validate & Register Account
              </button>
            </form>
          </div>

        </div>

      </div>

    </div>
  `;
};
