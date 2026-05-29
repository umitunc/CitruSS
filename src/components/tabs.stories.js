import { useEffect } from '@storybook/preview-api';

export default {
  title: 'Interactive/Tabs',
};

const tabsHTML = `
<div class="citruss-tabs-container">
  <!-- Tab Navigation Buttons -->
  <div class="citruss-tabs-wrapper" id="demo-tabs-nav">
    <button class="citruss-tab-link active" data-target="#tab-general">General Info</button>
    <button class="citruss-tab-link" data-target="#tab-security">Security Settings</button>
  </div>
  
  <!-- Tab Content Panes -->
  <div style="padding-top: 20px;">
    <div class="citruss-tab-pane active" id="tab-general">
      <h4>General Server Configuration</h4>
      <p>Content for general info...</p>
    </div>
    
    <div class="citruss-tab-pane" id="tab-security">
      <h4>Security & Authorization</h4>
      <p>Content for security settings...</p>
    </div>
  </div>
</div>
`.trim();

const tabsJS = `
// Initialize Tabs component
const tabsWrapper = document.getElementById('demo-tabs-nav');
if (tabsWrapper && window.CitruSS?.Tabs) {
  new window.CitruSS.Tabs(tabsWrapper);
}
`.trim();

export const TabSwitching = () => {
  useEffect(() => {
    const tabsWrapper = document.getElementById('demo-tabs-nav');
    if (tabsWrapper && window.CitruSS?.Tabs) {
      new window.CitruSS.Tabs(tabsWrapper);
    }
  }, []);

  return `
    <div style="padding: 30px; max-width: 600px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Tabs
      </h3>
      
      <div class="citruss-tabs-container">
        <!-- Tab Navigation Buttons -->
        <div class="citruss-tabs-wrapper" id="demo-tabs-nav">
          <button class="citruss-tab-link active" data-target="#tab-general">General Info</button>
          <button class="citruss-tab-link" data-target="#tab-security">Security Settings</button>
          <button class="citruss-tab-link" data-target="#tab-logs">System Logs</button>
        </div>
        
        <!-- Tab Content Panes -->
        <div style="padding-top: 20px; margin-bottom: 32px;">
          
          <div class="citruss-tab-pane active" id="tab-general">
            <h4 style="color: var(--citruss-text-main); margin: 0 0 10px; font-weight: 700;">General Server Configuration</h4>
            <p style="color: var(--citruss-text-muted); font-size: 0.92rem; line-height: 1.6; margin: 0;">
              CitruSS is perfect for server management dashboards thanks to its minimal design and high performance. This panel allows you to monitor general server data.
            </p>
          </div>
          
          <div class="citruss-tab-pane" id="tab-security">
            <h4 style="color: var(--citruss-text-main); margin: 0 0 10px; font-weight: 700;">Security & Authorization</h4>
            <p style="color: var(--citruss-text-muted); font-size: 0.92rem; line-height: 1.6; margin: 0;">
              Two-factor authentication (2FA) is active. The security layer is encrypted with hardware locks and is protected at the highest level.
            </p>
          </div>
          
          <div class="citruss-tab-pane" id="tab-logs">
            <h4 style="color: var(--citruss-text-main); margin: 0 0 10px; font-weight: 700;">System Operation Logs</h4>
            <p style="color: var(--citruss-text-muted); font-size: 0.92rem; line-height: 1.6; margin: 0;">
              Frankfurt data center connection: Successful (12ms)<br>
              Replication check: Completed with 0 errors<br>
              Vite CSS module: Loaded in 0.04s
            </p>
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
            <h5 style="color: var(--citruss-lime); margin: 0 0 8px 0; font-size: 0.85rem;">Tabs HTML Structure:</h5>
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">${tabsHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
          <div>
            <h5 style="color: var(--citruss-orange); margin: 0 0 8px 0; font-size: 0.85rem;">Initialization JS:</h5>
            <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.8rem; line-height: 1.5;">${tabsJS.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
        </div>
      </details>
    </div>
  `;
};

TabSwitching.parameters = {
  docs: {
    source: {
      code: `${tabsHTML}\n\n/* Javascript */\n${tabsJS}`,
    },
  },
};

