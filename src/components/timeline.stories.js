export default {
  title: 'Data Display/Timeline',
};

export const TimelineShowcase = () => {
  return `
    <div style="padding: 30px; max-width: 500px;">
      <h3 style="color: var(--citruss-text-main); font-family: 'Outfit', sans-serif; font-weight: 800; margin-bottom: 20px; font-size: 1.5rem;">
        Timeline
      </h3>
      
      <div class="citruss-timeline">
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
    </div>
  `;
};
