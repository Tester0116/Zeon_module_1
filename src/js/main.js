import DATA from '../../config.json' assert { type: 'json' }
import '../styles/style.css'
import { initializeTimer } from './timer.js'
import { renderBurger } from './burger.js'
import { renderDark } from './dark.js'
import { renderPrice } from './price.js'
import { renderTestimonials } from './testimonials.js'
import { modalHandler } from './modal.js'
import { appStoreLinks } from './appstoreLinks.js'
import { scrollUp } from './scrollUp.js'

initializeTimer(DATA.timerEndDate)

// adding listener for get app button
appStoreLinks(DATA)

renderBurger()

renderDark()

renderPrice(DATA)

renderTestimonials(DATA)

modalHandler(DATA)
// renderModal(DATA)

scrollUp()
