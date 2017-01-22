//DECLARE VARS
let selectedColor = undefined;
let grid = document.querySelector('.grid');
let colors = document.querySelector('.colors');

//CREATE GRID AND PALETTE ON PAGE LOAD
window.onload = function() {
  createGrid();
  createPalette();
}

function createGrid() {
 for (var i = 0; i < 30; i++) {
   var row = document.createElement('div');
   row.classList.add('row');
   grid.append(row);
   for (var j = 0; j < 46; j++) {
     var square = document.createElement('div');
     square.classList.add('square', 'canvas');
     row.append(square);
   }
 }
}

function createPalette() {
  let colorArray = [
    'red',
    'firebrick',
    'crimson',
    'indianred',
    'orangered',
    'darkorange',
    'orange',
    'gold',
    'yellow',
    'khaki',
    'greenyellow',
    'green',
    'darkgreen',
    'aqua',
    'blue',
    'navy',
    'darkslateblue',
    'indigo',
    'purple',
    'mediumorchid',
    'orchid',
    'rosybrown',
    'peru',
    'sienna',
    'black',
    'grey',
    'white'
  ]
  for (var i = 0; i < colorArray.length; i++) {
    let colorDot = document.createElement('div');
    colorDot.classList.add('square', 'color');
    colorDot.id = colorArray[i];
    colorDot.style.backgroundColor = colorArray[i];
    colors.append(colorDot);
  }
  let colorDot = document.createElement('div');
  colorDot.classList.add('square', 'color');
  colorDot.id = 'custom';
  colorDot.style.backgroundColor = white;
  colorDot.innerHTML = '?';
  colors.append(colorDot);
}

//LOAD REMAINING FUNCTIONALITY AFTER GRID AND PALETTE HAVE LOADED
setTimeout(function() {
//DECLARE VARIABLES
  let canvas = document.querySelectorAll('.canvas');
  let palette = document.querySelectorAll('.color');

//PALETTE FUNCTIONALITY
  palette.forEach(function(element){
    element.addEventListener('click', selectColor);
  })

  function selectColor(event) {
    palette.forEach(function(element){
      element.classList.remove('selected');
    })
    selectedColor = event.target.id;
    console.log(selectedColor)
    event.target.classList.add('selected');
  }

//CUSTOM COLOR
      let custom = document.querySelector('#custom');
      custom.addEventListener('click', customColor);

      function customColor() {
        let colorChoice = prompt('Please enter a valid color name');
        selectedColor = colorChoice;
        custom.style.backgroundColor = colorChoice;
      }

//GRID FUNCTIONALITY
  canvas.forEach(function(element){
    element.addEventListener('click', colorBack);
  })

  function colorBack(event) {
      event.target.style.backgroundColor = selectedColor;
  }

//PAINTBRUSH DRAG FUNCTIONALITY
  canvas.forEach(function(element){
    element.addEventListener('mousedown', startDrag);
    element.addEventListener('mouseup', stopDrag);
  })

  function startDrag() {
    event.target.style.backgroundColor = selectedColor;
    grid.addEventListener('mouseover', dragColor);
  }

  function stopDrag() {
    grid.removeEventListener('mouseover', dragColor);
  }

  function dragColor() {
    event.target.style.backgroundColor = selectedColor;
  }

}, 0)
