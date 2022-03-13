const container = document.getElementById("container");
const userInput = document.getElementById("quantity");
const clearBtn = document.querySelector(".btn");



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

clearBtn.addEventListener("click", function() {
  container.innerHTML = "";
  userInput.value = "";
  container.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
  container.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
  makeGrid()
});


function limiter(input) {
  if (input.value < 0) input.value = 0;
  
  if (input.value > 100) input.value = 100;
}
makeGrid();