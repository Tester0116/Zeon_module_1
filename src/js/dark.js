export const renderDark = () => {
  const light = document.getElementById('dark-mode_change-light')
  const lightIcon = document.getElementById('light-icon')
  const dark = document.getElementById('dark-mode_change-dark')
  const darkIcon = document.getElementById('dark-icon')
  const darkText = document.getElementById('dark-mode_text')
  const html = document.querySelector('html')

  const darkOn = () => {
    html.dataset.theme = 'theme-dark'
    lightIcon.style.fill = '#fff'
    lightIcon.nextElementSibling.style.color = '#FFF'

    darkText.textContent = 'Dark mode'
    darkIcon.nextElementSibling.style.color = '#FF9209'
    darkIcon.style.fill = '#FF9209'
  }
  const lightOn = () => {
    html.dataset.theme = 'theme-light'
    lightIcon.style.fill = '#FF9209'
    lightIcon.nextElementSibling.style.color = '#FF9209'
    darkText.textContent = 'Light mode'

    darkIcon.style.fill = '#000'
    darkIcon.nextElementSibling.style.color = '#000'
  }

  light.addEventListener('click', lightOn)
  dark.addEventListener('click', darkOn)
}
