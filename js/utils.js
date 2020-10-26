// Get a random number
function getRandomNumber (length) {
  return Math.floor(Math.random() * length)
}

// Randomize array in-place using Durstenfeld shuffle algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array
}

// Put a new card
function putCard (position, id) {
  const container = document.getElementById('cards' + id)

  const img = document.createElement('img')
  img.src = 'images/cards/back.png'
  img.id = 'card' + position
  img.width = 200
  img.height = 400

  img.onclick = function () {
    cardClickHandler(position)
  }

  container.appendChild(img)
}

function updateCardImage (id, image) {
  document.getElementById('card' + id).src = 'images/cards/' + image + '.png'
}

function removeCard (card) {
  const { id } = card

  document.getElementById('card' + id)
    .style.opacity = 0

  card.resolved = true
  card.visible = false
}