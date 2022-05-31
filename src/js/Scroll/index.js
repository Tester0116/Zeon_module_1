import { animateScroll } from './animateScroll.js'

const logError = () => console.error(`Invalid element!`)

const getElementPosition = (element) => element.offsetTop

export const scrollToElement = ({ id, ref = null, duration = 3000 }) => {
  const initialPosition = window.scrollY

  if (id) {
    const element = document.getElementById(id)

    if (!element) {
      logError()
      return
    }

    animateScroll({
      targetPosition: getElementPosition(element),
      initialPosition,
      duration,
    })
  }
}
