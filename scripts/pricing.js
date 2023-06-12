import elements from './partials/elements.js'
import { toggleMenu } from './partials/ui.js'
import { renderService } from './partials/services.js'

toggleMenu(elements.burger, elements.nav);

axios.get('https://nail-bar-56-default-rtdb.europe-west1.firebasedatabase.app/pricing/.json')
.then((res) => {
  console.log(res.data)
  res.data['-MW02tFnNhIHr1Wh566-'].map((treatment) => {
    const selector = document.querySelector(`.${treatment.key}`)
    for (let index = treatment.services.length - 1; index >= 0; index--) {
      const service = treatment.services[index];
      renderService(selector, service)
    }
  })
  
})
.catch((err) => {
  console.log(err)
})

