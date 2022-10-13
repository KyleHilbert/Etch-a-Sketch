const flexContainer = document.querySelector(".flexContainer");

const container = document.querySelector(".container");
container.style.display = "grid";
container.style.width = "640px";
container.style.background = "#e8a87c";
container.style.border = "6px solid #E27D60";

function makeGrid() {
  //Ask for grid size, one number EX: 16 would 16x16
  //for loop making divs for grid

  //let count = prompt("Enter grid size");
  let count = 16;

  container.style.gridTemplateColumns = "repeat(" + count + ",40px)";

  for (let i = 0; i < count * count; i++) {
    const gridSquare = document.createElement("div");
    container.appendChild(gridSquare);
    gridSquare.style.textAlign = "center";
    gridSquare.style.height = "40px";
    gridSquare.style.width = "40px";
    gridSquare.style.border = "1px solid #E27D60";

    gridSquare.addEventListener("mouseover", () => {
      gridSquare.style.background = "#E27D60";
    });
  }
}

makeGrid();
