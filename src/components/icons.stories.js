import iconsList from './material_symbols_icons.json';

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

export const IconGallery = () => {
  const container = document.createElement('div');
  container.style.padding = '40px';
  container.style.maxWidth = '1200px';
  container.style.margin = '0 auto';
  container.style.fontFamily = "'Outfit', sans-serif";

  // State
  let searchQuery = '';
  let currentPage = 1;
  const itemsPerPage = 120;
  let selectedSize = 'lg';
  let selectedColor = 'default';
  let selectedAnimation = 'none';
  let badgeMode = false;
  let selectedBadgeColor = 'orange';

  // Render Toast CSS & element
  const toastStyle = document.createElement('style');
  toastStyle.innerHTML = `
    .citruss-toast {
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%) translateY(100px);
      background: rgba(15, 15, 25, 0.85);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid var(--citruss-glass-border);
      padding: 12px 24px;
      border-radius: 12px;
      color: #fff;
      font-size: 0.95rem;
      z-index: 9999;
      opacity: 0;
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease;
      display: flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
    }
    .citruss-toast.show {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
    .gallery-icon-card {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(14px) saturate(180%);
      -webkit-backdrop-filter: blur(14px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.09);
      border-radius: 16px;
      padding: 20px 12px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      user-select: none;
      min-height: 120px;
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
    }
    .gallery-icon-card:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.12);
      border-color: rgba(253, 150, 68, 0.5);
      box-shadow: 0 12px 40px 0 rgba(253, 150, 68, 0.25), inset 0 1px 0 0 rgba(255, 255, 255, 0.3);
    }
    .gallery-icon-card:active {
      transform: translateY(-2px);
    }
    .gallery-icon-name {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.75rem;
      font-family: monospace;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `;
  document.head.appendChild(toastStyle);

  const showToast = (message) => {
    let toast = document.getElementById('citruss-gallery-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'citruss-gallery-toast';
      toast.className = 'citruss-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span class="citruss-icon" style="color: var(--citruss-orange)">check_circle</span> ${message}`;
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  };

  const render = () => {
    // Filter matching icons
    const filteredIcons = iconsList.filter(icon => 
      icon.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Paginate
    const totalItems = filteredIcons.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
    if (currentPage > totalPages) currentPage = totalPages;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const visibleIcons = filteredIcons.slice(startIndex, endIndex);

    container.innerHTML = `
      <div style="margin-bottom: 32px; display: flex; flex-direction: column; gap: 16px;">
        <div>
          <h2 style="color: #fff; margin-bottom: 6px; font-weight: 700; background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Material Symbols Icon Gallery</h2>
          <p style="color: var(--citruss-text-muted); font-size: 0.95rem;">Browse and search through all <strong>${iconsList.length.toLocaleString()}</strong> material symbols icons. Click to copy name, double-click to copy HTML code.</p>
        </div>

        <!-- Control Bar & Search -->
        <div style="display: flex; gap: 16px; flex-wrap: wrap; background: var(--citruss-glass-bg); padding: 20px; border-radius: 20px; border: 1px solid var(--citruss-glass-border); align-items: center; justify-content: space-between;">
          <!-- Search input -->
          <div style="position: relative; flex: 1; min-width: 280px;">
            <span class="citruss-icon" style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: var(--citruss-text-muted);">search</span>
            <input type="text" id="icon-search" placeholder="Search icons..." value="${searchQuery}" style="width: 100%; padding: 12px 16px 12px 48px; border-radius: 12px; background: rgba(0, 0, 0, 0.2); border: 1px solid var(--citruss-glass-border); color: #fff; outline: none; font-size: 0.95rem; font-family: 'Outfit', sans-serif; transition: all 0.3s;" />
          </div>

          <!-- Filters -->
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <!-- Size selector -->
            <div style="display: flex; flex-direction: column; gap: 4px;">
              <label style="font-size: 0.75rem; color: var(--citruss-text-muted); font-weight: 600;">SIZE</label>
              <select id="gallery-size" style="padding: 8px 12px; border-radius: 8px; background: rgba(0,0,0,0.3); border: 1px solid var(--citruss-glass-border); color: #fff; font-family: inherit; font-size: 0.85rem; outline: none; cursor: pointer;">
                <option value="sm" ${selectedSize === 'sm' ? 'selected' : ''}>Small (16px)</option>
                <option value="md" ${selectedSize === 'md' ? 'selected' : ''}>Medium (24px)</option>
                <option value="lg" ${selectedSize === 'lg' ? 'selected' : ''}>Large (32px)</option>
                <option value="xl" ${selectedSize === 'xl' ? 'selected' : ''}>Extra Large (48px)</option>
              </select>
            </div>

            <!-- Color selector -->
            <div style="display: flex; flex-direction: column; gap: 4px;">
              <label style="font-size: 0.75rem; color: var(--citruss-text-muted); font-weight: 600;">COLOR</label>
              <select id="gallery-color" style="padding: 8px 12px; border-radius: 8px; background: rgba(0,0,0,0.3); border: 1px solid var(--citruss-glass-border); color: #fff; font-family: inherit; font-size: 0.85rem; outline: none; cursor: pointer;">
                <option value="default" ${selectedColor === 'default' ? 'selected' : ''}>Default</option>
                <option value="orange" ${selectedColor === 'orange' ? 'selected' : ''}>Orange</option>
                <option value="lime" ${selectedColor === 'lime' ? 'selected' : ''}>Lime</option>
                <option value="lemon" ${selectedColor === 'lemon' ? 'selected' : ''}>Lemon</option>
                <option value="danger" ${selectedColor === 'danger' ? 'selected' : ''}>Danger</option>
                <option value="info" ${selectedColor === 'info' ? 'selected' : ''}>Info</option>
                <option value="gradient-orange" ${selectedColor === 'gradient-orange' ? 'selected' : ''}>Grad. Orange</option>
                <option value="gradient-lime" ${selectedColor === 'gradient-lime' ? 'selected' : ''}>Grad. Lime</option>
                <option value="gradient-lemon" ${selectedColor === 'gradient-lemon' ? 'selected' : ''}>Grad. Lemon</option>
              </select>
            </div>

            <!-- Animation selector -->
            <div style="display: flex; flex-direction: column; gap: 4px;">
              <label style="font-size: 0.75rem; color: var(--citruss-text-muted); font-weight: 600;">ANIMATION</label>
              <select id="gallery-anim" style="padding: 8px 12px; border-radius: 8px; background: rgba(0,0,0,0.3); border: 1px solid var(--citruss-glass-border); color: #fff; font-family: inherit; font-size: 0.85rem; outline: none; cursor: pointer;">
                <option value="none" ${selectedAnimation === 'none' ? 'selected' : ''}>None</option>
                <option value="spin" ${selectedAnimation === 'spin' ? 'selected' : ''}>Spin</option>
                <option value="pulse" ${selectedAnimation === 'pulse' ? 'selected' : ''}>Pulse</option>
                <option value="float" ${selectedAnimation === 'float' ? 'selected' : ''}>Float</option>
              </select>
            </div>

            <!-- Badge Mode toggle -->
            <div style="display: flex; flex-direction: column; gap: 4px;">
              <label style="font-size: 0.75rem; color: var(--citruss-text-muted); font-weight: 600;">BADGE WRAPPER</label>
              <div style="display: flex; gap: 8px; align-items: center;">
                <input type="checkbox" id="gallery-badge-toggle" ${badgeMode ? 'checked' : ''} style="cursor: pointer; width: 16px; height: 16px;" />
                <select id="gallery-badge-color" style="padding: 6px 8px; border-radius: 6px; background: rgba(0,0,0,0.3); border: 1px solid var(--citruss-glass-border); color: #fff; font-family: inherit; font-size: 0.75rem; outline: none; cursor: pointer; ${badgeMode ? '' : 'opacity: 0.5; pointer-events: none;'}">
                  <option value="neutral" ${selectedBadgeColor === 'neutral' ? 'selected' : ''}>Neutral</option>
                  <option value="orange" ${selectedBadgeColor === 'orange' ? 'selected' : ''}>Orange</option>
                  <option value="lime" ${selectedBadgeColor === 'lime' ? 'selected' : ''}>Lime</option>
                  <option value="lemon" ${selectedBadgeColor === 'lemon' ? 'selected' : ''}>Lemon</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Icon Count info -->
      <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; color: var(--citruss-text-muted); font-size: 0.9rem;">
        <span>Found <strong>${totalItems.toLocaleString()}</strong> matching icons</span>
        <span>Page <strong>${currentPage}</strong> of <strong>${totalPages}</strong></span>
      </div>

      <!-- Grid of Icons -->
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 16px; margin-bottom: 32px;">
        ${visibleIcons.map(icon => {
          // generate HTML for icon markup dynamically
          const sizeClass = selectedSize !== 'md' ? `icon-${selectedSize}` : '';
          const colorClass = selectedColor !== 'default' ? `icon-${selectedColor}` : '';
          const animClass = selectedAnimation !== 'none' ? `icon-${selectedAnimation}` : '';
          const iconClasses = `citruss-icon ${sizeClass} ${colorClass} ${animClass}`.replace(/\s+/g, ' ').trim();

          let iconHTML = `<span class="${iconClasses}">${icon}</span>`;
          if (badgeMode) {
            const badgeClass = selectedBadgeColor === 'neutral' ? '' : `badge-${selectedBadgeColor}`;
            const badgeSize = selectedSize === 'xl' ? 'badge-xl' : selectedSize === 'lg' ? 'badge-lg' : selectedSize === 'sm' ? 'badge-sm' : '';
            iconHTML = `<div class="citruss-icon-badge ${badgeClass} ${badgeSize}">\n  <span class="${iconClasses}">${icon}</span>\n</div>`;
          }

          return `
            <div class="gallery-icon-card" data-icon-name="${icon}" data-html-copy="${iconHTML.replace(/"/g, '&quot;')}">
              <div style="flex: 1; display: flex; align-items: center; justify-content: center; min-height: 50px;">
                ${iconHTML}
              </div>
              <div class="gallery-icon-name" title="${icon}">${icon}</div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Pagination controls -->
      ${totalPages > 1 ? `
        <div style="display: flex; justify-content: center; align-items: center; gap: 16px; margin-top: 40px; background: var(--citruss-glass-bg); padding: 16px; border-radius: 16px; border: 1px solid var(--citruss-glass-border); max-width: 400px; margin-left: auto; margin-right: auto;">
          <button id="prev-page" class="citruss-btn btn-sm" ${currentPage === 1 ? 'disabled style="opacity: 0.4; cursor: not-allowed; pointer-events: none;"' : ''}>
            <span class="citruss-icon" style="font-size: 18px;">chevron_left</span> Prev
          </button>
          <span style="color: #fff; font-size: 0.9rem; font-weight: 600;">${currentPage} / ${totalPages}</span>
          <button id="next-page" class="citruss-btn btn-sm" ${currentPage === totalPages ? 'disabled style="opacity: 0.4; cursor: not-allowed; pointer-events: none;"' : ''}>
            Next <span class="citruss-icon" style="font-size: 18px;">chevron_right</span>
          </button>
        </div>
      ` : ''}
    `;

    // Hook up elements & events after render
    const searchInput = container.querySelector('#icon-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        currentPage = 1;
        render();
        const input = container.querySelector('#icon-search');
        input.focus();
        input.setSelectionRange(searchQuery.length, searchQuery.length);
      });
    }

    // Size Select
    const sizeSelect = container.querySelector('#gallery-size');
    if (sizeSelect) {
      sizeSelect.addEventListener('change', (e) => {
        selectedSize = e.target.value;
        render();
      });
    }

    // Color Select
    const colorSelect = container.querySelector('#gallery-color');
    if (colorSelect) {
      colorSelect.addEventListener('change', (e) => {
        selectedColor = e.target.value;
        render();
      });
    }

    // Animation Select
    const animSelect = container.querySelector('#gallery-anim');
    if (animSelect) {
      animSelect.addEventListener('change', (e) => {
        selectedAnimation = e.target.value;
        render();
      });
    }

    // Badge toggle
    const badgeToggle = container.querySelector('#gallery-badge-toggle');
    if (badgeToggle) {
      badgeToggle.addEventListener('change', (e) => {
        badgeMode = e.target.checked;
        render();
      });
    }

    // Badge Color select
    const badgeColorSelect = container.querySelector('#gallery-badge-color');
    if (badgeColorSelect) {
      badgeColorSelect.addEventListener('change', (e) => {
        selectedBadgeColor = e.target.value;
        render();
      });
    }

    // Copy event listeners on cards
    const cards = container.querySelectorAll('.gallery-icon-card');
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        const iconName = card.getAttribute('data-icon-name');
        navigator.clipboard.writeText(iconName)
          .then(() => showToast(`Copied name "${iconName}" to clipboard!`))
          .catch(err => console.error('Failed to copy', err));
      });

      card.addEventListener('dblclick', (e) => {
        e.stopPropagation(); // prevent single click duplicate trigger
        const htmlCode = card.getAttribute('data-html-copy');
        navigator.clipboard.writeText(htmlCode)
          .then(() => showToast(`Copied HTML markup for "${card.getAttribute('data-icon-name')}"!`))
          .catch(err => console.error('Failed to copy', err));
      });
    });

    // Pagination events
    const prevBtn = container.querySelector('#prev-page');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          render();
        }
      });
    }

    const nextBtn = container.querySelector('#next-page');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
          currentPage++;
          render();
        }
      });
    }
  };

  render();
  return container;
};

