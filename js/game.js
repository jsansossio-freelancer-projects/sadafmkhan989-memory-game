let gameBlock = false

function printLifes () {
  const parent = document.getElementById('lifes')
  // Remove previous images
  parent.innerHTML = ''

  let totalInvisibles = config.initialLifes - config.lifes
  // Print images
  for (let i = 0; i < config.initialLifes; i++) {
    // Create image
    const img = document.createElement('img')
    img.src = 'images/heart.png'

    // Set invisible
    if (totalInvisibles > 0) {
      img.style.opacity = 0
      totalInvisibles--
    }

    parent.appendChild(img)
  }
}

printLifes()

function cardClickHandler (position) {
  // If the game is block or you lost, ignore user click
  if (gameBlock || config.finish) {
    return
  }

  const card = pairs[position]

  // If the card is visible ignore user click
  if (card.visible) {
    return
  }

  // Set card as visible
  updateCardImage(position, card.name)
  card.visible = true

  checkResponse()
}

function subtractLife () {
  config.lifes -= 1
  // If your lifes is equal to 0, you list
  if (config.lifes === 0) {
    lost()
  }
  printLifes()
}

function addPoints () {
  config.score += 50
  document.getElementById('score').textContent = config.score
}

function checkResponse () {
  // If the user does not have two open cards, return
  const cardsOpen = pairs.filter(val => val.visible)
  if (cardsOpen.length !== 2) {
    return
  }

  const delay = config.delay * 1000

  // Get both cards values
  const [ card1, card2 ] = cardsOpen

  // If the cards aren't equal, update image and remove one chance
  if (card1.name !== card2.name) {
    for (let i = 0; i < cardsOpen.length; i++) {
      const card = cardsOpen[i]
      card.visible = false
      setTimeout(function () {
        updateCardImage(card.id, 'back')
      }, delay)
    }
    subtractLife()
    return
  }

  // Disappear cards
  removeCard(card1)
  removeCard(card2)

  // Add points to score
  addPoints()

  // Check if the user wins
  if (pairs.every(val => val.resolved)) {
    win()
  }
}
