const cells = document.querySelectorAll('.cell');
const reset = document.querySelector('.reset');
const m = 3; // rows
const  n = 3; // column
let count = 1;

const gameBoard = (() => {
   const arr = new Array(m); // create an empty array of length n
  for (let i = 0; i < m; i++) {
    arr[i] = new Array(n); // make each element an array
  }
  return { arr };
})();

 // Function to create the grid in HTML
 function createGrid() {
  const gridContainer = document.querySelector('.board');
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('cell');
      gridItem.addEventListener('click', () => handleGridItemClick(i, j));
      gridContainer.appendChild(gridItem);
      count++;
      
    }
  }
}


 // Function to handle the click event on a grid item
 function handleGridItemClick(row, col) {
  const gridItem = document.querySelector(`.cell:nth-child(${row * n + col + 1})`);
  
  // // Toggle the color and update the array value
  // if (gridArray[row][col] === 0) {
  //   gridArray[row][col] = 1;
  //   gridItem.style.backgroundColor = 'blue'; // Set your desired color
  // } else {
  //   gridArray[row][col] = 0;
  //   gridItem.style.backgroundColor = ''; // Reset to default color
  // }
  // Toggle x or o and update values in array
  if (count % 2 === 0 && gridItem.innerHTML === ""){
    const eclipse = document.createElement('img');
    eclipse.src = 'svgs/eclipse.svg';
    eclipse.className = 'symbols eclipse';
    gridItem.appendChild(eclipse);
  }else if (count % 2 !== 0 && gridItem.innerHTML === "") {
    const cross = document.createElement('img');
    cross.src = ' svgs/cross.svg';
    cross.className = 'symbols cross';
    gridItem.appendChild(cross);
  }
}
document.addEventListener('DOMContentLoaded', createGrid);




// // FUNCTION TO CREATE BOARD*****************************************************************************************
// function boardInputs(){
//   let counter = 1;

// cells.forEach((cell) => cell.addEventListener('click', (e) => {
//   e.stopPropagation();

//   if (counter % 2 === 0 && cell.innerHTML === "") {// check  for even or odd div cell to identify whose turn it is
//     const eclipse = document.createElement('img');
//     eclipse.src = 'svgs/eclipse.svg';
//     eclipse.className = 'symbols eclipse';
//     cell.appendChild(eclipse);

    
//   } else if(counter % 2 !== 0 && cell.innerHTML === ""){
//     const cross = document.createElement('img');
//     cross.src = ' svgs/cross.svg';
//     cross.className = 'symbols cross';
//     cell.appendChild(cross);
//     counter++;
//   }

//   for (let index = 0; index < cells.length; index++) {
//       for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//           if (counter % 2 === 0 && cell.innerHTML === "") {
//             gameBoard.cellValues[i][j]= 1
//             console.log(gameBoard.cellValues[i][j])

//           }
//           else if(counter % 2 !== 0 && cell.innerHTML === ""){
//             gameBoard.cellValues[i][j]= 0
//             console.log(gameBoard.cellValues[i][j])
//           }         
//         }
//     }
    
//   }
// }));

// }


// FUNCTION TO CLEAR BOARD *****************************************************************************************
function resetboard(){
  for (let index = 0; index < cells.length; index++) {
    if (cells[index].innerHTML !== "") {
      const img = document.querySelector('img')
      cells[index].removeChild(img)
    }}
}

// RESET THE BOARD IF RESET IS CLICKED******************************************************************************
reset.addEventListener('click', () => {
  resetboard()
  });
