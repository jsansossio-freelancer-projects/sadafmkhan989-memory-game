for (let i = 0; i < pairs.length; i++) {
  // Get card parent id (matrix 4x4)
  const id = i < config.pairs / 2 ? 0 : 1
  // Add image to dom
  putCard(i, id)
}
