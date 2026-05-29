export default {
  title: 'Data Display/Timeline',
};

const timelineHTML = `
<!-- Standard Timeline -->
<div class="citruss-timeline">
  <!-- Item 1 (Success Indicator) -->
  <div class="timeline-item timeline-success">
    <div class="timeline-time">10:48</div>
    <div class="timeline-title">Frankfurt Nodes Synchronized</div>
    <div class="timeline-content">Database servers successfully passed replication validation steps.</div>
  </div>
  
  <!-- Item 2 (Standard Indicator) -->
  <div class="timeline-item">
    <div class="timeline-time">09:15</div>
    <div class="timeline-title">Visual CSS Regression Tests</div>
    <div class="timeline-content">BackstopJS pixel comparison tests completed with 100% match.</div>
  </div>
</div>
`.trim();

export const TimelineShowcase = () => {
  return `
    <div style="padding: 30px; max-width: 500px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Timeline
      </h3>
      
      <div class="citruss-timeline" style="margin-bottom: 32px;">
        <!-- Item 1 (Active Success) -->
        <div class="timeline-item timeline-success">
          <div class="timeline-time">10:48</div>
          <div class="timeline-title">Frankfurt Nodes Synchronized</div>
          <div class="timeline-content">Database servers successfully passed replication validation steps.</div>
        </div>
        
        <!-- Item 2 -->
        <div class="timeline-item">
          <div class="timeline-time">09:15</div>
          <div class="timeline-title">Visual CSS Regression Tests</div>
          <div class="timeline-content">BackstopJS pixel comparison tests completed with 100% match.</div>
        </div>
        
        <!-- Item 3 -->
        <div class="timeline-item">
          <div class="timeline-time">08:00</div>
          <div class="timeline-title">CitruSS Engine Started</div>
          <div class="timeline-content">Vite compiler compiled glassmorphic stylesheet files in production mode.</div>
        </div>
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${timelineHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
  `;
};

TimelineShowcase.parameters = {
  docs: {
    source: {
      code: timelineHTML,
    },
  },
};

