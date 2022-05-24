import DATA from './config.json' assert { type: 'json' }

import { initializeTimer } from './timer.js'
import { scrollToElement } from './Scroll/index.js'

initializeTimer(DATA.timerEndDate) // starting timer

// adding listener for get app button
const appLinks = document.querySelectorAll('.get-app_link')
for (let i = 0; i < appLinks.length; i++) appLinks[i].href = DATA.appStoreLink

// $$$$$ SCROLLS START $$$$$

// ###
const features = document.getElementById('features-btn')
// ---
features.addEventListener('click', () => scrollToElement({ id: 'features' }))
// ###

// ###
const pricing = document.getElementById('pricing-btn')
// ---
pricing.addEventListener('click', () => scrollToElement({ id: 'pricing' }))
// ###

// ###
const testimonials = document.getElementById('testimonials-btn')
// ---
testimonials.addEventListener('click', () =>
  scrollToElement({ id: 'testimonials' })
)
// ###
const faq = document.getElementById('faq-btn')
// ---
faq.addEventListener('click', () => scrollToElement({ id: 'faq' }))
// ###

// ###
const logo = document.getElementById('to-header')
// ---
logo.addEventListener('click', () =>
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
)
// ###
// $$$$$ SCROLLS END $$$$$

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

// $$$$$ PRIICING START $$$$$
const price_name = document.querySelectorAll('.price_name')
const price_price = document.querySelectorAll('.price_price')
const price_text = document.querySelectorAll('.price_text')

for (let i = 0; i < price_name.length; i++)
  price_name[i].textContent = DATA.plans[i].name // setting name from json

for (let i = 0; i < price_price.length; i++)
  price_price[i].textContent = '$' + DATA.plans[i].price // setting price from json

for (let i = 0; i < price_text.length; i++)
  price_text[i].textContent = DATA.plans[i].text // setting text from json
// $$$$$ PRIICING END $$$$$

// $$$$$ TESTMONIALS START $$$$$
const testimonialsName = document.querySelectorAll('.testimonials-name')
const testimonialsText = document.querySelectorAll('.testimonials-text')
const testimonialsJob = document.querySelectorAll('.testimonials-job')

for (let i = 0; i < testimonialsName.length; i++)
  testimonialsName[i].textContent = DATA.testimonials[i].name // setting name from json

for (let i = 0; i < testimonialsText.length; i++)
  testimonialsText[i].textContent = DATA.testimonials[i].text // setting text from json

for (let i = 0; i < testimonialsJob.length; i++)
  testimonialsJob[i].textContent = DATA.testimonials[i].job // setting job from json
// $$$$$ PRIICING END $$$$$

// $$$$$ MODAL START $$$$$

const modal = document.getElementById('modal') // Get the modal

const btn = document.querySelectorAll('.buy-now') // open modal button

// When the user clicks on the button =>
const openModal = () => (modal.style.display = 'flex')
const closeModal = () => (modal.style.display = 'none')

document.querySelector('.close-icon').addEventListener('click', closeModal)
for (let i = 0; i < btn.length; i++) btn[i].addEventListener('click', openModal)

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}

// start plans
const plans = document.querySelectorAll('.modal-block__plan')

const addCurrentValue = (plan, index) => {
  console.log(plan.children)
}

for (let i = 0; i < plans.length; i++) {
  const element = plans[i]
  plans[i].addEventListener('click', () => addCurrentValue(element, i))
}

// $$$$$ MODAL END $$$$$
