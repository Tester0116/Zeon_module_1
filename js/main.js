import DATA from './config.json' assert { type: 'json' }
import { initializeTimer } from './timer.js'

import { scrollToElement } from './Scroll/index.js'

// adding listener for get app button
document.getElementById('getApp').href = DATA.appStoreLink

initializeTimer(DATA.timerEndDate)
// smooth scrolls
// --- first load, scroll to top ---
// document.addEventListener('DOMContentLoaded', () =>
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   })
// )

// ###
const features = document.getElementById('features-btn')
// ---
features.addEventListener('click', () => scrollToElement({ id: 'features' }))
// ###

// $$$$$ DARK MODE START $$$$$
const light = document.getElementById('dark-mode_change-light')
const lightIcon = document.getElementById('light-icon')
const dark = document.getElementById('dark-mode_change-dark')
const darkIcon = document.getElementById('dark-icon')
const darkText = document.getElementById('dark-mode_text')
const html = document.querySelector('html')

html.dataset.theme = 'theme-dark'
light.addEventListener('click', () => {
  html.dataset.theme = 'theme-light'
  lightIcon.style.fill = '#FF9209'
  lightIcon.nextElementSibling.style.color = '#FF9209'
  darkText.textContent = 'Light mode'

  darkIcon.style.fill = '#000'
  darkIcon.nextElementSibling.style.color = '#000'
})

// --- dark toggle
dark.addEventListener('click', () => {
  html.dataset.theme = 'theme-dark'
  lightIcon.style.fill = '#fff'
  lightIcon.nextElementSibling.style.color = '#FFF'

  darkText.textContent = 'Dark mode'
  darkIcon.nextElementSibling.style.color = '#FF9209'
  darkIcon.style.fill = '#FF9209'
})
// $$$$$ DARK MODE END $$$$$
