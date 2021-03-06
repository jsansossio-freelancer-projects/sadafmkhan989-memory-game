let current = config.time

// Convert seconds to
// mm:ss
function timeFormat () {
  const minutes = Math.floor(current / 60)
  let seconds = current - minutes * 60
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  return minutes + ':' + seconds
}

// Game timer
function timer () {
  if (config.finish) {
    lost()
    return
  }

  // Subtract 1 to the current timer
  current--

  // Update interface timer
  document.getElementById('timer').textContent = timeFormat()

  // Lost
  if (current === 0) {
    lost()
    return
  }
}

// Run timer every second
timer()

const timerInterval = setInterval(function () {
  timer()
}, 1000)