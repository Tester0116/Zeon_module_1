const fetchData = async () => {
  const response = await fetch('config.json').then((res) => res.json())
  return response
}
const time = fetchData()

console.log(time.then((res) => res.timerEndDate))

const getTimeRemaining = (endtime) => {
  const t = Date.parse(endtime) - Date.parse(new Date())
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

    if (t.total <= 0) {
      document.getElementById('timer-block').className = 'hidden'
      return true
    }

    daysSpan.textContent = t.days
    hoursSpan.textContent = ('0' + t.hours).slice(-2)
    minutesSpan.textContent = ('0' + t.minutes).slice(-2)
    secondsSpan.textContent = ('0' + t.seconds).slice(-2)
  }

  updateTimer()
  setInterval(updateTimer, 1000)
}
