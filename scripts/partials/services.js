const renderService = (selector, data) => {
  const html = `
  <tbody>
      <td>${data.name}</td>
      <td>${data.price}</td>
  </tbody>
  `
  selector.insertAdjacentHTML('afterbegin', html);
}

export {
  renderService
}