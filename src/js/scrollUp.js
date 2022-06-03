export const scrollUp = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0)
  }
  const icons = document.querySelectorAll('.to-header')
  icons.forEach((icon) => icon.addEventListener('click', scrollTop))
}
