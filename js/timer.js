const ValidDate = (dateString) => {
  let totalTime = []
  const parts = dateString.split(' ').join('.').split('.')

  // validating year
  if (parts[2].length !== 4) return false
  // validating month
  if (parts[1] > 12) return false
  // validating day
  if (parts[0] > 31) return false
  totalTime.push(parts[2], parts[1], parts[0], parts[3])

  return totalTime
}

const getTimeRemaining = (endtime) => {
  const vd = ValidDate(endtime)
  const t = Date.parse(vd) - Date.parse(new Date())
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

    if (t.total <= 0 || ValidDate(endtime) === false) {
      document.getElementById('timer-block').className = 'hidden'
      clearInterval(timeinterval)
      return true
    }
    daysSpan.textContent = t.days
    hoursSpan.textContent = ('0' + t.hours).slice(-2)
    minutesSpan.textContent = ('0' + t.minutes).slice(-2)
    secondsSpan.textContent = ('0' + t.seconds).slice(-2)
  }
  updateTimer()
}
