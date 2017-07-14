document.addEventListener("DOMContentLoaded", () => {
  const squares = document.getElementsByClassName("square");
  const colors = ["red", "blue", "yellow", "green"]

  function populateGridColors() {
    for (var i = 0; i < squares.length; i++) {
      addColor(squares[i]);
    }
  }

  function randomlyChangeColor() {
    window.setInterval(() => {
      let square = pickRandomSquare();
      let color = pickRandom(colors);
      removeColor(square);
      addColor(square);
      square.classList.add("changed")

      setTimeout(() => {
        square.classList.remove("changed")
      }, 2000)

    }, 250);
  }

  function pickRandomSquare() {
    let square

    while (!square) {
      let tempSquare = pickRandom(squares);
      let classList = tempSquare.classList.value.split(" ")
      if (!classList.includes("changed")) {
        square = tempSquare
      }
    }

    return square
  }

  function addColor(node, color) {
    node.classList.add(pickRandom(colors));
  }

  function removeColor(node) {
    node.classList.remove("red", "green", "yellow", "blue");
  }

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  populateGridColors();
  randomlyChangeColor();
})
