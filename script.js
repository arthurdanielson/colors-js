/**
 * Changes the background color of the document body to a random color from
 * a list of predefined colors.
 */
function changeBackgroundColor() {
  // Array of predefined colors
  const backgroundColors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "brown",
    "grey",
    "black",
    "white",
    "cyan",
    "magenta",
    "coral",
    "khaki",
    "lightblue",
    "lavender",
    "lightgrey",
    "turquoise",
  ]

  // Get a random index from the array length
  const randomColorIndex = Math.floor(Math.random() * backgroundColors.length)

  // Get the color at the random index
  const randomColor = backgroundColors[randomColorIndex]

  // Set the background color of the document body to the random color
  document.body.style.backgroundColor = randomColor
}
