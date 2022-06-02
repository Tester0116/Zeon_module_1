import DATA from '../../config.json' assert { type: 'json' }
import '../styles/style.css'
import { initializeTimer } from './timer.js'
import { renderBurger } from './burger.js'
import { renderDark } from './dark.js'
import { renderPrice } from './price.js'
import { renderTestimonials } from './testimonials.js'
import { renderModal } from './modal.js'

initializeTimer(DATA.timerEndDate)

// adding listener for get app button
const getAppLinks = document.querySelectorAll('.get-app_link')
getAppLinks.forEach((app) => (app.href = DATA.appStoreLink))

renderBurger()

renderDark()

renderPrice(DATA)

renderTestimonials(DATA)

renderModal(DATA)
