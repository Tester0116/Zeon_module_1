import DATA from './config.json' assert { type: 'json' }

import { initializeTimer } from './timer.js'
import { scrollToElement } from './Scroll/index.js'

initializeTimer(DATA.timerEndDate) // starting timer

// adding listener for get app button
const appLinks = document.querySelectorAll('.get-app_link')

appLinks.forEach((app) => (app.href = DATA.appStoreLink))

// $$$$$ SCROLLS START $$$$$

// ###
const features = document.querySelector('.features-btn')
// ---
features.addEventListener('click', () => scrollToElement({ id: 'features' }))
// ###

// ###
const pricing = document.querySelector('.pricing-btn')
// ---
pricing.addEventListener('click', () => scrollToElement({ id: 'pricing' }))
// ###

// ###
const testimonials = document.querySelector('.testimonials-btn')
// ---
testimonials.addEventListener('click', () =>
  scrollToElement({ id: 'testimonials' })
)
// ###
const faq = document.querySelector('.faq-btn')
// ---
faq.addEventListener('click', () => scrollToElement({ id: 'faq' }))
// ###

// ###
const logo = document.querySelector('.to-header')
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
const radio = document.querySelectorAll('.modal-block__plan')

let activeRadioLabels = ''
const setActiveRadio = (element) => {
  radioInputs.forEach((a) => {
    activeRadioLabels = a.nextElementSibling.textContent
    if (a.dataset.radio == element.dataset.btnRadio) {
      a.checked = true
    }
  })
}

const openModal = (element) => {
  setActiveRadio(element)

  modal.style.display = 'flex'
  document.body.style.overflow = 'hidden'
}
const closeModal = () => (modal.style.display = 'none')

document.querySelector('.close-icon').addEventListener('click', closeModal)

btn.forEach((item) => item.addEventListener('click', () => openModal(item)))

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target == modal) modal.style.display = 'none'
}

// adding action for send button
const sendBtn = document.querySelector('.modal-block__send-btn')
const form = document.getElementById('form')
const inputs = document.querySelectorAll('.modal-block__inputs')
const userName = document.querySelector('.user-name')
const email = document.querySelector('.email')
const loading = document.querySelector('.loading-block')
const checkboxes = document.querySelectorAll('.input-checkboxes')
const checkboxesName = document.querySelectorAll('.input-checkboxes__name')
const checkboxesError = document.querySelector('.checkbox')

radio.forEach((item) =>
  item.addEventListener('click', () => (activeRadioLabels = item.textContent))
)

const activeCheckboxesText = () => {
  let texts = []
  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked === true) {
      texts.push(checkboxesName[index].textContent)
    }
  })
  return texts
}

const sendToBack = (e) => {
  e.preventDefault()
  const formData = validateInputs()
  if (formData) {
    console.log(formData)
    loading.classList.remove('dn')
    setTimeout(() => loading.classList.add('dn'), 2000)
  }
}

const validateInputs = () => {
  const userNameValue = userName.value.trim()
  const emailValue = email.value.trim()
  const checkboxText = activeCheckboxesText()
  // check up for name
  if (userNameValue === '') setError(userName, 'required field')
  else if (userNameValue.length < 3)
    setError(userName, 'should be more then 3 symbols')
  else setSuccess(userName)

  // check up for email
  if (emailValue === '') return setError(email, 'required field')
  else if (!isValidEmail(emailValue))
    return setError(email, 'Provide a valid email')
  else setSuccess(email)

  // check up for checkboxes
  if (checkboxText.length === 0)
    return setError(checkboxesError, 'required field')
  else setSuccess(checkboxesError)

  return {
    name: userNameValue,
    email: emailValue,
    plan: activeRadioLabels.trim(),
    social: checkboxText,
  }
}

const setSuccess = (element) => {
  const inputParent = element.parentElement
  const errorDisplay = inputParent.querySelector('.error')
  const errorInput = inputParent.querySelector('.modal-block__inputs')

  errorDisplay.textContent = ''
  inputParent.classList.remove('error')
  if (errorInput !== null) errorInput.style.background = '#f2f2f2'
}

const setError = (element, message) => {
  const inputParent = element.parentElement
  const errorDisplay = inputParent.querySelector('.error')
  const errorInput = inputParent.querySelector('.modal-block__inputs')

  errorDisplay.textContent = message
  inputParent.classList.add('error')
  if (errorInput !== null) errorInput.style.background = '#ffeeee'
}

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

form.addEventListener('submit', sendToBack)
sendBtn.addEventListener('click', sendToBack)
userName.addEventListener('input', validateInputs)
email.addEventListener('input', validateInputs)
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener('input', validateInputs)
)

// $$$$$ MODAL END $$$$$
