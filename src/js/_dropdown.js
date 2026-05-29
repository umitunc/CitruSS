export class CitruSSDropdown {
  constructor(element, options = {}) {
    this.element = element;
    this.options = options;
    this.isMulti = options.multiple || false;
    this.searchable = options.searchable || false;
    this.selectedValues = new Set();
    this.highlightedIndex = -1;
    
    this.init();
  }
  
  init() {
    this.trigger = this.element.querySelector('.citruss-select-trigger');
    this.menu = this.element.querySelector('.citruss-dropdown-menu');
    this.searchField = this.element.querySelector('.dropdown-search-box input');
    this.items = Array.from(this.element.querySelectorAll('.dropdown-item'));
    
    // Toggle active state
    this.trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggle();
    });
    
    if (this.searchField) {
      this.searchField.addEventListener('click', (e) => e.stopPropagation());
      this.searchField.addEventListener('input', (e) => this.filterOptions(e.target.value));
    }
    
    this.items.forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        this.selectItem(item);
      });
    });
    
    // Keyboard events
    this.element.addEventListener('keydown', (e) => this.handleKeydown(e));
    
    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!this.element.contains(e.target)) {
        this.close();
      }
    });
  }
  
  toggle() {
    const isActive = this.menu.classList.contains('active');
    // Close other dropdowns
    document.querySelectorAll('.citruss-dropdown-menu').forEach(m => m.classList.remove('active'));
    
    if (!isActive) {
      this.menu.classList.add('active');
      if (this.searchField) {
        this.searchField.value = '';
        this.filterOptions('');
        setTimeout(() => this.searchField.focus(), 50);
      }
    } else {
      this.close();
    }
  }
  
  close() {
    this.menu.classList.remove('active');
    this.highlightedIndex = -1;
    this.items.forEach(i => i.classList.remove('highlighted'));
  }
  
  selectItem(item) {
    const val = item.getAttribute('data-value');
    const label = item.textContent.trim().replace('✓', '').trim();
    
    if (this.isMulti) {
      if (this.selectedValues.has(val)) {
        this.selectedValues.delete(val);
        item.classList.remove('selected');
      } else {
        this.selectedValues.add(val);
        item.classList.add('selected');
      }
      this.updateTriggerMulti();
    } else {
      this.selectedValues.clear();
      this.selectedValues.add(val);
      this.items.forEach(i => i.classList.remove('selected'));
      item.classList.add('selected');
      this.trigger.querySelector('.trigger-text').textContent = label;
      this.close();
    }
    
    if (this.options.onChange) {
      this.options.onChange(Array.from(this.selectedValues));
    }
  }
  
  updateTriggerMulti() {
    const container = this.trigger.querySelector('.chips-container');
    container.innerHTML = '';
    
    if (this.selectedValues.size === 0) {
      container.innerHTML = `<span class="trigger-text">${this.options.placeholder || 'Select options'}</span>`;
      return;
    }
    
    this.selectedValues.forEach(val => {
      const item = this.items.find(i => i.getAttribute('data-value') === val);
      const label = item.textContent.trim().replace('✓', '').trim();
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.innerHTML = `${label} <span class="remove-btn" data-val="${val}">×</span>`;
      
      chip.querySelector('.remove-btn').onclick = (e) => {
        e.stopPropagation();
        this.selectedValues.delete(val);
        item.classList.remove('selected');
        this.updateTriggerMulti();
        if (this.options.onChange) {
          this.options.onChange(Array.from(this.selectedValues));
        }
      };
      container.appendChild(chip);
    });
  }
  
  filterOptions(query) {
    this.items.forEach(item => {
      const txt = item.textContent.toLowerCase();
      if (txt.includes(query.toLowerCase())) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }
  
  handleKeydown(e) {
    if (!this.menu.classList.contains('active')) return;
    const visibleItems = this.items.filter(i => i.style.display !== 'none');
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.highlightedIndex = (this.highlightedIndex + 1) % visibleItems.length;
      this.updateHighlight(visibleItems);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.highlightedIndex = (this.highlightedIndex - 1 + visibleItems.length) % visibleItems.length;
      this.updateHighlight(visibleItems);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (this.highlightedIndex >= 0 && this.highlightedIndex < visibleItems.length) {
        this.selectItem(visibleItems[this.highlightedIndex]);
      }
    } else if (e.key === 'Escape') {
      this.close();
    }
  }
  
  updateHighlight(visibleItems) {
    this.items.forEach(i => i.classList.remove('highlighted'));
    if (visibleItems[this.highlightedIndex]) {
      visibleItems[this.highlightedIndex].classList.add('highlighted');
      visibleItems[this.highlightedIndex].scrollIntoView({ block: 'nearest' });
    }
  }
}
