// Game config
const config = {
  delay: 1, // time in seconds
  pairs: 8,
  time: 90, // time in seconds
  lost: false,
  lifes: 3
}

// Define card names
const cards = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K'
]

// Define card variantes (colors)
const cardsVariants = [
  'C'
]

// Format a random card from "cards" and "cardsVariants"
function getCard () {
  // Get random card and card variant
  const variant = cardsVariants[getRandomNumber(cardsVariants.length)]
  const card = cards[getRandomNumber(cards.length)]

  return card + variant
}

// Get pairs
function getPairs () {
  const response = []
  // Run while total cards are less than config.pairs
  while (response.length < config.pairs) {
    const card = getCard()
    // If this card does not exists in response, put it
    if (response.indexOf(card) === -1) {
      response.push(card, card)
    }
  }

  // Randomize array and convert into a javascript object
  return shuffleArray(response).map(function (name, id) {
    return {
      id,
      name,
      visible: false
    }
  }) 
}

// Lost
function lost () {
  config.lost = true
  // Stop timer interval
  clearInterval(timerInterval)

  // Write lost message
  const message = document.createElement('h1')
  message.textContent = 'You lost!'
  document.getElementById('lost').appendChild(message)
}

// Globa variable
var pairs = getPairs()
