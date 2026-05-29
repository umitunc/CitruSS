import { useEffect } from '@storybook/preview-api';

export default {
  title: 'Interactive/Tabs',
};

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
        <div style="padding-top: 20px;">
          
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
    </div>
  `;
};
