//@ts-check
'use strict';

/* Imports section */
import * as Util from './util.js';

// Checks user system theme on document load and set the max date to today on form's input
document.addEventListener('DOMContentLoaded', _ => {

  let color = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  Util.colorMode(color);

});

// Listen for changes in user system theme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {

  let color = (e.matches) ? 'dark' : 'light';
  Util.colorMode(color);

});