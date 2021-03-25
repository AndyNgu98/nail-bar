const renderService = (selector, data) => {
  const html = `
  <tbody>
    <td class="pricing__name">${data.name}</td>
    <td align="right" class="pricing__price">${data.price}</td>
  </tbody>
  `
  selector.insertAdjacentHTML('afterbegin', html);
}

export {
  renderService
}