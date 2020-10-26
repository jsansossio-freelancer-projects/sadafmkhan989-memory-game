for (let i = 0; i < pairs.length; i++) {
  // Get card parent id (matrix 4x4)
  let id = Math.floor(i / 4)
  // Add image to dom
  putCard(i, id)
}
