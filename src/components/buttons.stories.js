export default {
  title: 'Core/Buttons',
  argTypes: {
    theme: {
      control: 'select',
      options: ['default', 'primary', 'success', 'danger']
    },
    label: { control: 'text' },
    size: {
      control: 'select',
      options: ['sm', 'normal', 'lg']
    }
  }
};

export const StandardButtons = ({ theme = 'primary', label = 'Interactive Action', size = 'normal' }) => {
  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';
  const themeClass = theme !== 'default' ? `btn-${theme}` : '';
  return `
    <div style="padding: 20px; display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
      <button class="citruss-btn ${themeClass} ${sizeClass}">${label}</button>
      <button class="citruss-btn btn-primary ${sizeClass}">Orange Primary</button>
      <button class="citruss-btn btn-success ${sizeClass}">Lime Success</button>
      <button class="citruss-btn btn-danger ${sizeClass}">Danger Button</button>
      <button class="citruss-btn ${sizeClass}">Glass Neutral</button>
    </div>
  `;
};

export const ButtonGroups = () => {
  return `
    <div style="padding: 20px;">
      <div class="citruss-btn-group">
        <button class="citruss-btn active">Dashboard</button>
        <button class="citruss-btn">Analytics</button>
        <button class="citruss-btn">Settings</button>
      </div>
    </div>
  `;
};
