import { useEffect } from '@storybook/preview-api';

export default {
  title: 'Interactive/Wizard (Multi-Step Form)',
};

const wizardHTML = `
<!-- Wizard Shell Container -->
<div class="citruss-card" id="demo-wizard-standalone">
  <div class="card-content">
    
    <!-- Linear Progress Bar -->
    <div class="citruss-progress-bar progress-lime">
      <div class="progress-fill" style="width: 0%;"></div>
    </div>
    
    <!-- Step Node Headers -->
    <div class="citruss-wizard-steps-header">
      <div class="wizard-step-node active">1</div>
      <div class="wizard-step-node">2</div>
    </div>
    
    <!-- Step 1 Content -->
    <div class="citruss-wizard-step">
      <h4>Step 1: User Registration</h4>
      <input type="text" placeholder="Full Name" class="citruss-input" />
    </div>
    
    <!-- Navigation Buttons -->
    <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 24px;">
      <button class="citruss-btn btn-sm wizard-prev" style="display: none;">Back</button>
      <button class="citruss-btn btn-sm btn-primary wizard-next">Next Step</button>
      <button class="citruss-btn btn-sm btn-success wizard-submit" style="display: none;">Finish</button>
    </div>

  </div>
</div>
`.trim();

const wizardJS = `
// Instantiate multi-step wizard transition logic
if (window.CitruSS?.Wizard) {
  new window.CitruSS.Wizard('demo-wizard-standalone');
}
`.trim();

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
      
      <div class="citruss-card" id="demo-wizard-standalone" style="padding: 24px; margin-bottom: 32px;">
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

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML & JS Code Examples
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto; display: flex; flex-direction: column; gap: 16px;">
          <div>
            <h5 style="color: var(--citruss-lime); margin: 0 0 8px 0; font-size: 0.85rem;">Wizard HTML Structure:</h5>
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">${wizardHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
          <div>
            <h5 style="color: var(--citruss-orange); margin: 0 0 8px 0; font-size: 0.85rem;">Initialization JS:</h5>
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">${wizardJS.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
        </div>
      </details>
    </div>
  `;
};

WizardShowcase.parameters = {
  docs: {
    source: {
      code: `${wizardHTML}\n\n/* Javascript */\n${wizardJS}`,
    },
  },
};

