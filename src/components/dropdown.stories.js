import { useEffect } from '@storybook/preview-api';

export default {
  title: 'Forms/Dropdowns',
};

export const CustomSelect = () => {
  useEffect(() => {
    // Bind dropdowns in DOM
    document.querySelectorAll('.citruss-select-wrapper').forEach(el => {
      const isMulti = el.hasAttribute('data-multiselect');
      new window.CitruSS.Dropdown(el, {
        multiple: isMulti,
        searchable: el.hasAttribute('data-searchable'),
        placeholder: 'Select items...'
      });
    });
  }, []);

  return `
    <div style="padding: 40px; max-width: 500px; margin: 0 auto; min-height: 100vh;">
      <h3 style="color: var(--citruss-text-main); margin-bottom: 24px; font-weight: 800;">Custom Dropdowns</h3>
      
      <div style="margin-bottom: 32px;">
        <label style="color: var(--citruss-text-muted); font-size: 0.85rem; font-weight: 600; display:block; margin-bottom: 8px;">Single Select Dropdown</label>
        <div class="citruss-select-wrapper">
          <div class="citruss-select-trigger">
            <span class="trigger-text">Choose citrus fruit...</span>
          </div>
          <div class="citruss-dropdown-menu">
            <div class="dropdown-options">
              <div class="dropdown-item" data-value="orange">🍊 Orange (Portakal)</div>
              <div class="dropdown-item" data-value="tangerine">🍊 Tangerine (Mandalina)</div>
              <div class="dropdown-item" data-value="lemon">🍋 Lemon (Limon)</div>
              <div class="dropdown-item" data-value="lime">🍋 Lime (Misket Limonu)</div>
            </div>
          </div>
        </div>
      </div>
      
      <div style="margin-bottom: 32px;">
        <label style="color: var(--citruss-text-muted); font-size: 0.85rem; font-weight: 600; display:block; margin-bottom: 8px;">Multi-Select Dropdown with Search & Chips</label>
        <div class="citruss-select-wrapper" data-multiselect data-searchable>
          <div class="citruss-select-trigger">
            <div class="chips-container">
              <span class="trigger-text">Select multiple ingredients...</span>
            </div>
          </div>
          <div class="citruss-dropdown-menu">
            <div class="dropdown-search-box">
              <input type="text" placeholder="Search options...">
            </div>
            <div class="dropdown-options">
              <div class="dropdown-item" data-value="mint">🍃 Fresh Mint</div>
              <div class="dropdown-item" data-value="honey">🍯 Pure Honey</div>
              <div class="dropdown-item" data-value="ginger">🫚 Ginger Root</div>
              <div class="dropdown-item" data-value="ice">🧊 Crushed Ice</div>
              <div class="dropdown-item" data-value="soda">🥤 Sparkling Soda</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};
