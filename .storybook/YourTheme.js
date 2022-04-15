// .storybook/YourTheme.js

import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: '#fafafa',
  appContentBg: '#ffffff',
  appBorderColor: '#e4e4e4',
  appBorderRadius: 6,

  // Typography
  fontBase: '"Source Sans Pro", sans-serif',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#000000',
  barSelectedColor: '#000000',
  barBg: '#ffffff',

  // Form colors
  inputBg: 'white',
  inputBorder: '#e4e4e4',
  inputTextColor: 'black',
  inputBorderRadius: 6,

  brandTitle: 'Intergrin',
  brandUrl: 'https://example.com',
  //brandImage: 'https://place-hold.it/350x150',
});