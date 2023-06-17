// const choiceBtn = document.querySelectorAll(".choiceBtn");
// const choiceDiv = document.querySelector(".choices");
// const multi = document.querySelector(".multi");
// const solo = document.querySelector(".solo");
// const intructions = document.querySelector(".instruction");
// const symbolBtns = document.querySelectorAll(".symbols");

// const cross = document.createElement("img");
// const eclipse = document.createElement("img");
// const crossDiv = document.createElement("div");
// const eclipseDiv = document.createElement("div");

// crossDiv.className = "symbols cross";
// eclipseDiv.className = "symbols eclipse";

// cross.src = " svgs/cross.svg";
// eclipse.src = "svgs/eclipse.svg";

// choiceBtn.forEach((btn) => btn.addEventListener("click", playModeChoice(btn)));
// symbolBtns.forEach((btn) => btn.addEventListener("click", symbolChoice(btn)));

// // choose between solo and multiplayer modes
// function playModeChoice(btn) {
//   return (btn) => {
//     intructions.innerHTML = "Choose side.";
//     // delete cmulti div and solo div
//     choiceDiv.removeChild(multi);
//     choiceDiv.removeChild(solo);
//     // add symbol divs
//     choiceDiv.appendChild(eclipseDiv);
//     choiceDiv.appendChild(crossDiv);

//     eclipseDiv.appendChild(eclipse);
//     crossDiv.appendChild(cross);
//     // const choiceID = btn.target.getAttribute("class");
//     // if (choiceID === "choiceBtn multi") {
//     //   console.log("multi");
//     // } else {
//     //   console.log("single");
//     // }
//   };

//   function symbolChoice(btn) {
//     return (btn) => {
//       choiceDiv.removeChild(symbolBtns);
//     };
//   }
// }

const cells = document.querySelectorAll(".cells");

let counter = 1;

cells.forEach((cell) =>
  cell.addEventListener("click", (e) => {
    e.stopPropagation();

    if (counter % 2 === 0) {
      const eclipse = document.createElement("img");
      eclipse.src = "svgs/eclipse.svg";
      eclipse.className = "symbols eclipse";
      cell.appendChild(eclipse);
      counter++;
    } else {
      const cross = document.createElement("img");
      cross.src = " svgs/cross.svg";
      cross.className = "symbols cross";
      cell.appendChild(cross);
      counter++;
    }
  })
);

const gameBoard = (() => {
  const cellValues = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
  ];
  return { cellValues };
})();

const Players = (name, symbol) => ({ name, symbol });

const Player1 = Players("Player one", "X");
const Player2 = Players("Player two", "O");
console.log(Player1.name, Player1.symbol);

console.log(gameBoard.cellValues[0][1]);
