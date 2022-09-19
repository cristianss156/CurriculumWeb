//@ts-check
'use strict';

// Adds or remove the CSS rule for dark theme on HTML
export const colorMode = ( /** @type {string} */ _type) => {

  if (_type === 'dark') {
    let dark = document.createElement('link');
    dark.id = 'dark';
    dark.rel = 'stylesheet';
    dark.type = 'text/css';
    dark.href = 'public/css/colorsDark.css';
    document.getElementsByTagName('head')[0].appendChild(dark);
  } else {
    if (document.getElementById('dark')) document.getElementById('dark')?.remove();
  }

}