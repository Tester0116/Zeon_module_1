import { animateScroll } from './animateScroll.js'

const logError = () =>
  console.error(
    `Invalid element, are you sure you've provided element id or react ref?`
  )

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
