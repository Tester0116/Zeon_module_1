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
const price_value = document.querySelectorAll('.price_value')

// setting name from json
price_name.forEach((item, index) => (item.textContent = DATA.plans[index].name))

price_price.forEach((item, index) => {
  item.textContent = '$' + DATA.plans[index].price // setting price from json
  price_value.value = DATA.plans[index].name // setting value for modal active plan
})

// setting text from json
price_text.forEach((item, index) => (item.textContent = DATA.plans[index].text))
// $$$$$ PRIICING END $$$$$

// $$$$$ TESTMONIALS START $$$$$
const testimonialsName = document.querySelectorAll('.testimonials-name')
const testimonialsText = document.querySelectorAll('.testimonials-text')
const testimonialsJob = document.querySelectorAll('.testimonials-job')

// setting name from json
testimonialsName.forEach(
  (item, index) => (item.textContent = DATA.testimonials[index].name)
)

// setting text from json
testimonialsText.forEach(
  (item, index) => (item.textContent = DATA.testimonials[index].text)
)

// setting job from json
testimonialsJob.forEach(
  (item, index) => (item.textContent = DATA.testimonials[index].job)
)
// $$$$$ PRIICING END $$$$$

// $$$$$ MODAL START $$$$$

const modal = document.getElementById('modal') // Get the modal

const btn = document.querySelectorAll('.buy-now') // open modal button

// When the user clicks on the button =>
const radioInputs = document.getElementsByName('radio-inputs')

const setActiveRadio = (element) => {
  radioInputs.forEach((a) => {
    if (a.dataset.radio == element.dataset.btnRadio) a.checked = true
  })
}
const openModal = (element) => {
  setActiveRadio(element)
  modal.style.display = 'flex'
}
const closeModal = () => (modal.style.display = 'none')

document.querySelector('.close-icon').addEventListener('click', closeModal)

btn.forEach((item) => item.addEventListener('click', () => openModal(item)))

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target == modal) modal.style.display = 'none'
}

// start plans

const addCurrentValue = (radioInput) => {
  console.log(radioInput.textContent)
}

// adding action for send button
const sendBtn = document.querySelector('.modal-block__send-btn')
const form = document.getElementById('form')
const userName = document.querySelector('.user-name')
const email = document.querySelector('.email')

const sendToBack = (e) => {
  e.preventDefault()
  validateInputs()
  // textInputs.forEach((inp  ut) => {
  //   if (input.value.length <= 0) {
  //     let error = document.createElement('span')
  //     document.body.textInputs.appendChild(error)
  //     console.log('empty')
  //   } else {
  //     console.log('not empty')
  //   }
  // })
}

const validateInputs = () => {
  const userNameValue = userName.value.trim()
  const emailValue = email.value.trim()
  if (userNameValue === '') setError(userName, 'userName is required')
  else setSuccess(userName)

  if (emailValue === '') setError(email, 'email is required')
  else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address')
  } else {
    setSuccess(email)
  }
}

const setSuccess = (element) => {
  const inputControl = element.parentElement
  const errorDisplay = inputControl.querySelector('.error')

  errorDisplay.textContent = ''
  inputControl.classList.remove('error')
}

const setError = (element, message) => {
  const inputControl = element.parentElement
  const errorDisplay = inputControl.querySelector('.error')

  errorDisplay.textContent = message
  inputControl.classList.add('error')
}

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

form.addEventListener('submit', sendToBack)
sendBtn.addEventListener('click', sendToBack)

// $$$$$ MODAL END $$$$$
