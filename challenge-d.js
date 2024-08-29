import company from './configuration.js' // changed form to from
import year from './configuration.js' // changed form to from

const message = '© ' + company + ' (' + year + ')'; 
document.querySelector('footer').innerText = message;
