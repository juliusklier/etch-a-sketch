const container = document.getElementById("container");
const userInput = document.getElementById("quantity");
const clearBtn = document.querySelector("#clear");
const randomBtn = document.querySelector("#random");
const eraseBtn = document.querySelector("#erase")



makeGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    div.setAttribute("onmouseover", "changeColor(this)");
    container.appendChild(div)
  }
};


function changeColor(e) {
  // e.classList.toggle("hover")
  e.classList.add("hover")
}


changeGrid = () => {
    container.innerHTML = "";
    container.style.setProperty(
      "grid-template-columns",
      `repeat(${userInput.value}, 2fr)`
    );
    container.style.setProperty(
      "grid-template-rows",
      `repeat(${userInput.value}, 2fr)`
    );
    for (let i = 0; i < userInput.value * userInput.value; i++) {
      const div = document.createElement("div");
      div.classList.add("grid-item");
      div.setAttribute("onmouseover", "changeColor(this)");
      container.appendChild(div);
    }
    console.log(userInput.value);
  };


userInput.addEventListener("change", changeGrid);

// clear the grid 
clearBtn.addEventListener("click", function() {
  container.innerHTML = "";
  userInput.value = "";
  container.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
  container.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
  makeGrid()
});


// limit the input, so that only positive numbers under 100 are allowed
function limiter(input) {
  if (input.value < 0) input.value = 0;
  
  if (input.value > 100) input.value = 100;
}


randomBtn.addEventListener("click", randomise);
eraseBtn.addEventListener("click", erase);
// changes the background with a random rgb color
function randomBackground(e) {
  let randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  e.style.backgroundColor = randomColor;
}

function whiteBackground(e) {
  let white = "white";
  e.style.backgroundColor = white;
}

// adds eventListener for random rgb color
function randomise() {
  document.querySelectorAll(".grid-item").forEach(e => {
    e.setAttribute("onmouseover", "randomBackground(this)");
  })
}

function erase() {
  document.querySelectorAll(".grid-item").forEach(e => {
    e.setAttribute("onmouseover","whiteBackground(this)" )
  })
}
makeGrid();