const toggleMenu = (burger, nav) => {
  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active')
    nav.classList.toggle('is-active')
  })
}

export {
  toggleMenu
}