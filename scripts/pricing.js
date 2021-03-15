import elements from './partials/elements.js'
import { toggleMenu } from './partials/ui.js'
import { pricing, renderService } from './partials/services.js'

toggleMenu(elements.burger, elements.nav);

pricing.forEach(treatment => {
  const selector = document.querySelector(`.${treatment.key}`)
  treatment.services.forEach(service => renderService(selector, service));
});
