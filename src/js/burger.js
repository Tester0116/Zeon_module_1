export const renderBurger = () => {
  const menuOpenIcon = document.getElementById('js-burger-menu__icon')
  const menuCloseIson = document.querySelectorAll('.js-burger-menu__icon-close')

  const menuToggle = () => {
    menuOpenIcon.classList.toggle('active')
    document.body.classList.toggle('scroll-none')
  }

  menuCloseIson.forEach((el) => el.addEventListener('click', menuToggle))

  menuOpenIcon.addEventListener('click', menuToggle)
}
