const isValid = (date) => {
  const [d, m, y, h] = date.split(' ').join('.').split('.')
  if (d > 31 || d < 0) return false // valid date
  if (m > 12 || m < 0) return false // valid month
  if (y.length > 4 || y.length < 4) return false // valid year
}

const parseDate = (dateString) => {
  const isValidDate = isValid(dateString)
  if (isValidDate === false) return false

  let totalTime = []
  const [d, m, y, h] = dateString.split(' ').join('.').split('.')

  totalTime.push(y, m, d, h)

  return totalTime
}

const getTimeRemaining = (endtime) => {
  const vd = parseDate(endtime)
  const t = Date.parse(vd) - new Date()
  const seconds = Math.floor((t / 1000) % 60)
  const minutes = Math.floor((t / 1000 / 60) % 60)
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24)
  const days = Math.floor(t / (1000 * 60 * 60 * 24))
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  }
}

export const initializeTimer = (endtime) => {
  const timer = document.getElementById('timer')
  const daysSpan = timer.querySelector('.days')
  const hoursSpan = timer.querySelector('.hours')
  const minutesSpan = timer.querySelector('.minutes')
  const secondsSpan = timer.querySelector('.seconds')

  const updateTimer = () => {
    const t = getTimeRemaining(endtime)
    let timeinterval = setInterval(updateTimer, 1000)

    if (t.total <= 0 || parseDate(endtime) === false) {
      document.getElementById('timer-block').className = 'hidden'
      clearInterval(timeinterval)
      return true
    }
    daysSpan.textContent = t.days
    daysSpan.textContent = ('0' + t.days).slice(-2)
    hoursSpan.textContent = ('0' + t.hours).slice(-2)
    minutesSpan.textContent = ('0' + t.minutes).slice(-2)
    secondsSpan.textContent = ('0' + t.seconds).slice(-2)
  }
  updateTimer()
}
