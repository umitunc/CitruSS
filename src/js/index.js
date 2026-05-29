import { CitruSSDialog } from './_dialog';
import { CitruSSToast } from './_toast';
import { CitruSSDropdown } from './_dropdown';
import { CitruSSValidator } from './_validation';
import { CitruSSWizard } from './_wizard';
import { CitruSSTabs } from './_tabs';
import { CitruSSAccordion } from './_accordion';
import { CitruSSCarousel } from './_carousel';
import { CitruSSDrawers } from './_drawer';
import { CitruSSContextMenu } from './_context-menu';
import { CitruSSPopovers } from './_popover';
import { CitruSSThemeToggle } from './_theme-toggle';

// Bundle styles by importing them so Vite includes styles in compiled assets automatically
import '../citruss.scss';

// Expose standard namespace
const CitruSS = {
  fire: CitruSSDialog.fire.bind(CitruSSDialog),
  confirm: CitruSSDialog.confirm.bind(CitruSSDialog),
  toast: CitruSSToast.show.bind(CitruSSToast),
  Dropdown: CitruSSDropdown,
  Validator: CitruSSValidator,
  Wizard: CitruSSWizard,
  Tabs: CitruSSTabs,
  Accordion: CitruSSAccordion,
  Carousel: CitruSSCarousel,
  Drawers: CitruSSDrawers,
  ContextMenu: CitruSSContextMenu,
  Popovers: CitruSSPopovers,
  ThemeToggle: CitruSSThemeToggle
};

// Mount in browser environments
if (typeof window !== 'undefined') {
  window.CitruSS = CitruSS;
  
  // Auto initialize component selectors having specific custom attributes once DOM loads
  document.addEventListener('DOMContentLoaded', () => {
    // Accordions auto binding
    document.querySelectorAll('[data-citruss-accordion]').forEach(el => {
      new CitruSSAccordion(el);
    });
    
    // Tabs auto binding
    document.querySelectorAll('.citruss-tabs-wrapper').forEach(el => {
      new CitruSSTabs(el);
    });
    
    // Drawers auto binding
    CitruSSDrawers.init();
  });
}

export default CitruSS;
export {
  CitruSSDialog,
  CitruSSToast,
  CitruSSDropdown,
  CitruSSValidator,
  CitruSSWizard,
  CitruSSTabs,
  CitruSSAccordion,
  CitruSSCarousel,
  CitruSSDrawers,
  CitruSSContextMenu,
  CitruSSPopovers,
  CitruSSThemeToggle
};
