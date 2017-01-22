let blue = false;
let red = false;
let selectedColor = undefined;
let grid = document.querySelector('.grid');
let colors = document.querySelector('.colors');
console.log(grid);

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

setTimeout(function() {
  //select all squares in grid
  let canvas = document.querySelectorAll('.canvas');
  let palette = document.querySelectorAll('.color');

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

  //add callback function to all squares with event listener

  canvas.forEach(function(element){
    element.addEventListener('click', redBack);
  })

  //Paintbrush Dragging Functionality
  let drag = false;
  canvas.forEach(function(element){
    element.addEventListener('mousedown', startDrag);
    element.addEventListener('mouseup', stopDrag);
  })


  function startDrag() {
    drag = true;
    console.log(drag);
    event.target.style.backgroundColor = selectedColor;

    grid.addEventListener('mouseover', tester);



    //Custom Color Selection
    let custom = document.querySelector('#custom');
    custom.addEventListener('click', customColor);

    }



  function stopDrag() {
    drag = false;
    console.log(drag);
    grid.removeEventListener('mouseover', tester);

  }

  //a callback function that makes squares red
  function redBack(event) {

      event.target.style.backgroundColor = selectedColor;

  }


  //add event listeners to palette divs










  function customColor() {
    let colorChoice = prompt('Please enter a valid color name');
    selectedColor = colorChoice;
    custom.style.backgroundColor = colorChoice;

  }


  function tester() {
    console.log('weeeee');
    event.target.style.backgroundColor = selectedColor;
  }


}, 0)
