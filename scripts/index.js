import elements from './partials/elements.js';
import { toggleMenu } from './partials/ui.js';

toggleMenu(elements.burger, elements.nav);

const rellax = new Rellax('.hero__image');

document.querySelector('#test-button').addEventListener('click', () => {
  axios.get('https://us-central1-nail-bar-56.cloudfunctions.net/helloWorld')
  .then((res) => {
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err)
  })
})

document.querySelector('#email-button').addEventListener('click', () => {  
  axios.get('https://us-central1-nail-bar-56.cloudfunctions.net/testEmail')
  .then((res) => {
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err)
  }) 

})