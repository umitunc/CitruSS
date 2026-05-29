import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  brandTitle: 'CitruSS UI',
  brandUrl: 'https://github.com/umitunc/CitruSS',
  brandImage: '/logos/citruss_logo_transparent.png',
  brandTarget: '_self',

  // UI styling matching our gorgeous dark theme
  appBg: '#060913',
  appContentBg: '#0b0f19',
  appBorderColor: 'rgba(255, 255, 255, 0.08)',
  appBorderRadius: 12,

  // Text colors
  textColor: '#f4f6fa',
  textInverseColor: '#060913',

  // Toolbar default and active colors
  barTextColor: '#a3a9b6',
  barSelectedColor: '#ff9800',
  barBg: '#060913',
});
