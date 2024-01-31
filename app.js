const rows = 5;
const cols = 5;

const nonogram = [
    [2,1],
    [1,2],
    [3],
    [1,2],
    [2,1]
];

let grid = [];
for (let i = 0; i < rows; i++) {
  grid.push([]);
  for (let j = 0; j < cols; j++) {
    grid[i].push(0);
  }
}

// Отображение сетки и нонограммы в HTML
function renderGrid() {
  let gridContainer = document.createElement('div');
  gridContainer.classList.add('grid-container');
  for (let i = 0; i < rows; i++) {
    let rowHints = nonogram[i];
    let rowContainer = document.createElement('div');
    rowContainer.classList.add('row-container');
    
    for (let j = 0; j < cols; j++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.addEventListener('click', toggleCell);
      rowContainer.appendChild(cell);
    }
    for (let k = 0; k < rowHints.length; k++) {
      let hint = document.createElement('div');
      hint.classList.add('hint');
      hint.textContent = rowHints[k];
      rowContainer.appendChild(hint);
    }
    gridContainer.appendChild(rowContainer);
  }
  document.body.appendChild(gridContainer);
}

// Функция для переключения состояния клетки (закрашена/не закрашена)
function toggleCell(event) {
  let row = event.target.dataset.row;
  let col = event.target.dataset.col;
  if (grid[row][col] === 0) {
    grid[row][col] = 1;
    event.target.classList.add('filled');
  } else {
    grid[row][col] = 0;
    event.target.classList.remove('filled');
  }
  checkSolution();
}

// Функция для проверки правильности заполнения сетки
function checkSolution() {
  // Логика проверки правильности заполнения сетки
}

// Инициализация игры
renderGrid();