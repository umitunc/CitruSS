import { useEffect } from '@storybook/preview-api';

export default {
  title: 'Interactive/Wizard (Multi-Step Form)',
};

export const WizardShowcase = () => {
  useEffect(() => {
    if (window.CitruSS?.Wizard) {
      new window.CitruSS.Wizard('demo-wizard-standalone');
    }
  }, []);

  return `
    <div style="padding: 30px; max-width: 600px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Wizard (Multi-Step Installation Wizard)
      </h3>
      
      <div class="citruss-card" id="demo-wizard-standalone" style="padding: 24px;">
        <div class="card-content">
          
          <!-- Progressive linear progress bar -->
          <div class="citruss-progress-bar progress-lime" style="margin-bottom: 24px;">
            <div class="progress-fill" style="width: 0%;"></div>
          </div>
          
          <div class="citruss-wizard-steps-header" style="margin-bottom: 24px; display: flex; justify-content: space-between;">
            <div class="wizard-step-node active">1</div>
            <div class="wizard-step-node">2</div>
            <div class="wizard-step-node">3</div>
          </div>
          
          <!-- Step 1 -->
          <div class="citruss-wizard-step">
            <h4 style="color: var(--citruss-text-main); font-weight:700; margin-bottom: 8px;">Step 1: User Registration</h4>
            <p style="color:var(--citruss-text-muted); font-size: 0.88rem; margin-bottom:16px;">
              To join the CitruSS world, please create a user profile first.
            </p>
            <input type="text" placeholder="Full Name" class="citruss-input" style="width:100%; box-sizing:border-box; margin-bottom:16px;" />
          </div>
          
          <!-- Step 2 -->
          <div class="citruss-wizard-step" style="display: none;">
            <h4 style="color: var(--citruss-text-main); font-weight:700; margin-bottom: 8px;">Step 2: Theme Selection</h4>
            <p style="color:var(--citruss-text-muted); font-size: 0.88rem; margin-bottom:16px;">
              Choose how your interface looks. CitruSS recommends dark theme by default.
            </p>
            <div style="display:flex; gap:12px; margin-bottom:16px;">
              <button class="citruss-btn btn-primary btn-sm">🌙 Tangerine Dark</button>
              <button class="citruss-btn btn-success btn-sm">☀️ Lime Light</button>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="citruss-wizard-step" style="display: none;">
            <h4 style="color: var(--citruss-text-main); font-weight:700; margin-bottom: 8px;">Step 3: Congratulations!</h4>
            <p style="color:var(--citruss-text-muted); font-size: 0.88rem; margin-bottom:16px;">
              You have successfully completed the installation steps. Now explore the glass interface world!
            </p>
          </div>
          
          <!-- Navigation buttons -->
          <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 24px;">
            <button class="citruss-btn btn-sm wizard-prev" style="display: none;">Back</button>
            <button class="citruss-btn btn-sm btn-primary wizard-next">Next Step</button>
            <button class="citruss-btn btn-sm btn-success wizard-submit" style="display: none;">Finish</button>
          </div>

        </div>
      </div>
    </div>
  `;
};
