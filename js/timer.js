let current = config.time

function timeFormat () {
  const minutes = Math.floor(current / 60)
  let seconds = current - minutes * 60
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  return 'Time left: ' + minutes + ':' + seconds
}

function timer () {
  if (config.lost) {
    lost()
    return
  }
  current--
  // Lost
  if (current === 0) {
    lost()
    return
  }
  // Update timer
  document.getElementById('timer').textContent = timeFormat()
}

timer()

const timerInterval = setInterval(function () {
  timer()
}, 1000)