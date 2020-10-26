let gameBlock = false

function cardClickHandler (position) {
  // If the game is block or you lost, ignore user click
  if (gameBlock || config.lost) {
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
  const text = 'You have ' + config.lifes + ' chances remaining'
  document.getElementById('lifes').textContent = text
}

function checkResponse () {
  // If the user does not have two open cards, return
  const cardOpens = pairs.filter(val => val.visible)
  if (cardOpens.length !== 2) {
    return
  }

  const delay = config.delay * 1000

  // Get both cards values
  const [ card1, card2 ] = cardOpens

  // If the cards aren't equal, update image and remove one chance
  if (card1.name !== card2.name) {
    for (let i = 0; i < cardOpens.length; i++) {
      const card = cardOpens[i]
      card.visible = false
      setTimeout(function () {
        updateCardImage(card.id, 'back')
      }, delay)
    }
    subtractLife()
    return
  }

  setTimeout(function () {
    // Disappear cards
    removeCard(card1)
    removeCard(card2)
  }, delay)
}
