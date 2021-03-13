import elements from './partials/elements.js'
import { toggleMenu } from './partials/ui.js'

toggleMenu(elements.burger, elements.nav);

// Tab Content
elements.tabs.forEach(tab => {
    tab.addEventListener('click', () => {
       elements.tabs.forEach(item => item.classList.remove('is-active'))
       tab.classList.add('is-active')
 
       const target = tab.dataset.target;
       elements.tabContentBoxes.forEach(box => {
          if (box.getAttribute('id') === target) {
             box.classList.remove('is-hidden')
          } else {
             box.classList.add('is-hidden')
          }
       })
    })
 });