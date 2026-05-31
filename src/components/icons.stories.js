export default {
  title: 'Core/Icons',
  argTypes: {
    iconName: { control: 'text' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl']
    },
    color: {
      control: 'select',
      options: ['default', 'orange', 'lime', 'lemon', 'danger', 'info', 'gradient-orange', 'gradient-lime', 'gradient-lemon']
    },
    badge: {
      control: 'select',
      options: ['none', 'neutral', 'orange', 'lime', 'lemon']
    },
    animation: {
      control: 'select',
      options: ['none', 'spin', 'pulse', 'float']
    }
  }
};

const makeIconHTML = (name, size, color, badge, animation) => {
  const sizeClass = size && size !== 'md' ? `icon-${size}` : '';
  const colorClass = color && color !== 'default' ? `icon-${color}` : '';
  const animClass = animation && animation !== 'none' ? `icon-${animation}` : '';
  const fullClasses = `citruss-icon ${sizeClass} ${colorClass} ${animClass}`.replace(/\s+/g, ' ').trim();

  if (badge && badge !== 'none') {
    const badgeClass = badge === 'neutral' ? '' : `badge-${badge}`;
    const badgeSize = size === 'xl' ? 'badge-xl' : size === 'lg' ? 'badge-lg' : size === 'sm' ? 'badge-sm' : '';
    return `<div class="citruss-icon-badge ${badgeClass} ${badgeSize}">\n  <span class="${fullClasses}">${name}</span>\n</div>`;
  }
  return `<span class="${fullClasses}">${name}</span>`;
};

export const InteractiveIcon = ({ iconName = 'settings', size = 'md', color = 'default', badge = 'none', animation = 'none' }) => {
  const renderedHTML = makeIconHTML(iconName, size, color, badge, animation);
  return `
    <div style="padding: 30px; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 250px;">
      <h4 style="color: var(--citruss-text-muted); font-size: 0.9rem; margin-bottom: 24px;">Your Interactive Icon Component:</h4>
      
      <div style="margin-bottom: 32px; display: flex; align-items: center; justify-content: center; min-height: 100px;">
        ${renderedHTML}
      </div>

      <!-- Code Example Block -->
      <details class="citruss-code-wrapper" style="width: 100%; max-width: 600px; border: 1px solid var(--citruss-glass-border); border-radius: 12px; background: rgba(0,0,0,0.2); overflow: hidden; font-family: 'Outfit', sans-serif;">
        <summary style="padding: 12px 16px; cursor: pointer; color: var(--citruss-orange); font-weight: 600; font-size: 0.9rem; user-select: none; outline: none;">
          💻 View HTML Code Example
        </summary>
        <div style="padding: 16px; border-top: 1px solid var(--citruss-glass-border); background: var(--citruss-bg-surface); overflow-x: auto;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="font-family: monospace; color: var(--citruss-text-main); font-size: 0.85rem; line-height: 1.5;">${renderedHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      </details>
    </div>
  `;
};

InteractiveIcon.args = {
  iconName: 'settings',
  size: 'lg',
  color: 'gradient-orange',
  badge: 'orange',
  animation: 'none'
};

export const ShowcaseDemos = () => {
  return `
    <div style="padding: 40px; max-width: 1000px; margin: 0 auto; font-family: 'Outfit', sans-serif;">
      
      <!-- Icon Sizes -->
      <section style="margin-bottom: 48px;">
        <h3 style="color: var(--citruss-orange); margin-bottom: 8px;">1. Icon Sizes</h3>
        <p style="color: var(--citruss-text-muted); font-size: 0.95rem; margin-bottom: 20px;">Use sizing utility classes to match any content dimension.</p>
        <div style="display: flex; gap: 32px; align-items: center; background: var(--citruss-glass-bg); padding: 24px; border-radius: 16px; border: 1px solid var(--citruss-glass-border);">
          <div style="text-align: center;">
            <span class="citruss-icon icon-sm">home</span>
            <div style="color: var(--citruss-text-muted); font-size: 0.75rem; margin-top: 8px;">Small (16px)</div>
          </div>
          <div style="text-align: center;">
            <span class="citruss-icon icon-md">home</span>
            <div style="color: var(--citruss-text-muted); font-size: 0.75rem; margin-top: 8px;">Medium (24px)</div>
          </div>
          <div style="text-align: center;">
            <span class="citruss-icon icon-lg">home</span>
            <div style="color: var(--citruss-text-muted); font-size: 0.75rem; margin-top: 8px;">Large (32px)</div>
          </div>
          <div style="text-align: center;">
            <span class="citruss-icon icon-xl">home</span>
            <div style="color: var(--citruss-text-muted); font-size: 0.75rem; margin-top: 8px;">Extra Large (48px)</div>
          </div>
        </div>
      </section>

      <!-- Glassmorphic Icon Badges -->
      <section style="margin-bottom: 48px;">
        <h3 style="color: var(--citruss-orange); margin-bottom: 8px;">2. Premium Glassmorphic Badges</h3>
        <p style="color: var(--citruss-text-muted); font-size: 0.95rem; margin-bottom: 20px;">Wrap icons inside rounded glass bubbles with vibrant glow backlights.</p>
        <div style="display: flex; gap: 24px; align-items: center; background: var(--citruss-glass-bg); padding: 24px; border-radius: 16px; border: 1px solid var(--citruss-glass-border); flex-wrap: wrap;">
          
          <div class="citruss-icon-badge">
            <span class="citruss-icon">star</span>
          </div>

          <div class="citruss-icon-badge badge-orange">
            <span class="citruss-icon">bolt</span>
          </div>

          <div class="citruss-icon-badge badge-lime">
            <span class="citruss-icon">check_circle</span>
          </div>

          <div class="citruss-icon-badge badge-lemon">
            <span class="citruss-icon">emoji_events</span>
          </div>

          <!-- Sized Badges -->
          <div style="border-left: 1px solid var(--citruss-glass-border); padding-left: 24px; display: flex; gap: 16px; align-items: center;">
            <div class="citruss-icon-badge badge-lime badge-sm">
              <span class="citruss-icon">done</span>
            </div>
            <div class="citruss-icon-badge badge-orange badge-lg">
              <span class="citruss-icon">favorite</span>
            </div>
            <div class="citruss-icon-badge badge-lemon badge-xl">
              <span class="citruss-icon">rocket_launch</span>
            </div>
          </div>

        </div>
      </section>

      <!-- Gradient & Colors -->
      <section style="margin-bottom: 48px;">
        <h3 style="color: var(--citruss-orange); margin-bottom: 8px;">3. Vibrant Colors & Gradients</h3>
        <p style="color: var(--citruss-text-muted); font-size: 0.95rem; margin-bottom: 20px;">Leverage our signature brand colors and high-end gradients.</p>
        <div style="display: flex; gap: 24px; align-items: center; background: var(--citruss-glass-bg); padding: 24px; border-radius: 16px; border: 1px solid var(--citruss-glass-border); flex-wrap: wrap;">
          <span class="citruss-icon icon-lg icon-orange">local_fire_department</span>
          <span class="citruss-icon icon-lg icon-lime">eco</span>
          <span class="citruss-icon icon-lg icon-lemon">wb_sunny</span>
          <span class="citruss-icon icon-lg icon-danger">dangerous</span>
          <span class="citruss-icon icon-lg icon-info">info</span>
          
          <div style="border-left: 1px solid var(--citruss-glass-border); padding-left: 24px; display: flex; gap: 24px; align-items: center;">
            <span class="citruss-icon icon-xl icon-gradient-orange">token</span>
            <span class="citruss-icon icon-xl icon-gradient-lime">forest</span>
            <span class="citruss-icon icon-xl icon-gradient-lemon">diamond</span>
          </div>
        </div>
      </section>

      <!-- Micro-Animations -->
      <section style="margin-bottom: 48px;">
        <h3 style="color: var(--citruss-orange); margin-bottom: 8px;">4. Micro-Animations</h3>
        <p style="color: var(--citruss-text-muted); font-size: 0.95rem; margin-bottom: 20px;">Use animations to command attention or denote loading/active states.</p>
        <div style="display: flex; gap: 32px; align-items: center; background: var(--citruss-glass-bg); padding: 24px; border-radius: 16px; border: 1px solid var(--citruss-glass-border);">
          <div style="text-align: center;">
            <span class="citruss-icon icon-lg icon-spin" style="color: var(--citruss-info);">autorenew</span>
            <div style="color: var(--citruss-text-muted); font-size: 0.75rem; margin-top: 8px;">Spin (.icon-spin)</div>
          </div>
          <div style="text-align: center;">
            <span class="citruss-icon icon-lg icon-pulse" style="color: var(--citruss-danger);">favorite</span>
            <div style="color: var(--citruss-text-muted); font-size: 0.75rem; margin-top: 8px;">Pulse (.icon-pulse)</div>
          </div>
          <div style="text-align: center;">
            <div class="citruss-icon-badge badge-orange icon-float">
              <span class="citruss-icon">flight_takeoff</span>
            </div>
            <div style="color: var(--citruss-text-muted); font-size: 0.75rem; margin-top: 8px;">Float (.icon-float)</div>
          </div>
        </div>
      </section>

    </div>
  `;
};
