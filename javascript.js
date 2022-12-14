const flexContainer = document.querySelector(".flexContainer");

const container = document.querySelector(".container");
container.style.display = "grid";
container.style.width = "600px";
container.style.height = "600px";
container.style.background = "#e8a87c";
container.style.border = "6px solid #E27D60";
container.style.marginBottom = "15px";

function makeGrid() {
  let count = 0;

  do {
    count = prompt("Enter grid size");
    count = parseInt(count);
  } while (isNaN(count) || count > 100 || count === 0);

  count = Math.floor(Math.abs(count));

  container.style.gridTemplateColumns = "repeat(" + count + ",1fr";

  for (let i = 0; i < count * count; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.style.textAlign = "center";
    gridSquare.style.height = "((1/count)*100)%";
    gridSquare.style.width = "((1/count)*100)%";
    gridSquare.style.border = "1px solid #E27D60";
    gridSquare.classList.add("square");
    container.appendChild(gridSquare);

    gridSquare.addEventListener("mouseover", () => {
      gridSquare.style.background = "#E27D60";
    });

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        if (button.id === "rgb") {
          gridSquare.addEventListener("mouseover", () => {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            gridSquare.style.background = "rgb(" + r + "," + g + "," + b + ")";
          });
        } else if (button.id === "original") {
          gridSquare.addEventListener("mouseover", () => {
            gridSquare.style.background = "#E27D60";
          });
        }
      });
    });
  }
}

makeGrid();

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "changeGrid") {
      container.innerHTML = "";
      makeGrid();
    } else if (button.id === "reset") {
      const divs = document.querySelectorAll(".square");
      for (let i = 0; i < divs.length; i++) {
        divs[i].style.background = "rgb(232, 168, 124)";
      }
    }
  });
});
