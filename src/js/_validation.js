export const CitruSSValidator = {
  validateForm: function(formSelector) {
    const form = document.querySelector(formSelector);
    if (!form) return false;
    
    let isValid = true;
    const inputs = form.querySelectorAll('[required], [data-citruss-rules]');
    
    inputs.forEach(input => {
      const wrapper = input.closest('.citruss-input-group');
      if (!wrapper) return;
      
      let fieldValid = true;
      let errorMessage = '';
      
      // Required check
      if (input.hasAttribute('required') && !input.value.trim()) {
        fieldValid = false;
        errorMessage = 'This field is required.';
      }
      
      // Custom Rules check
      const rules = input.getAttribute('data-citruss-rules');
      if (fieldValid && rules && input.value) {
        const ruleList = rules.split('|');
        for (let rule of ruleList) {
          if (rule === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
            fieldValid = false;
            errorMessage = 'Please enter a valid email address.';
            break;
          }
          if (rule.startsWith('min:')) {
            const minVal = parseInt(rule.split(':')[1]);
            if (input.value.length < minVal) {
              fieldValid = false;
              errorMessage = `Must be at least ${minVal} characters.`;
              break;
            }
          }
        }
      }
      
      if (!fieldValid) {
        isValid = false;
        wrapper.classList.remove('is-valid');
        wrapper.classList.add('is-invalid');
        let feedback = wrapper.querySelector('.citruss-invalid-feedback');
        if (!feedback) {
          feedback = document.createElement('div');
          feedback.className = 'citruss-invalid-feedback';
          wrapper.appendChild(feedback);
        }
        feedback.textContent = errorMessage;
      } else {
        wrapper.classList.remove('is-invalid');
        wrapper.classList.add('is-valid');
        let feedback = wrapper.querySelector('.citruss-valid-feedback');
        if (!feedback) {
          feedback = document.createElement('div');
          feedback.className = 'citruss-valid-feedback';
          feedback.textContent = 'Looks good!';
          wrapper.appendChild(feedback);
        }
      }
    });
    
    return isValid;
  },
  
  bind: function(formSelector, onSuccess) {
    const form = document.querySelector(formSelector);
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (this.validateForm(formSelector)) {
        if (onSuccess) onSuccess(form);
      }
    });
  }
};
