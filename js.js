let blue = false;
let red = false;
let selectedColor = undefined;
let grid = document.querySelector('.grid');
console.log(grid);


//select all squares in grid
let canvas = document.querySelectorAll('.canvas');
//a callback function that makes squares red
function redBack(event) {

    event.target.style.backgroundColor = selectedColor;

}
//add callback function to all squares with event listener

canvas.forEach(function(element){
  element.addEventListener('click', redBack);
})

//add event listeners to palette divs

let palette = document.querySelectorAll('.color');



function selectColor(event) {
  palette.forEach(function(element){
    element.classList.remove('selected');
  })
  selectedColor = event.target.id;
  console.log(selectedColor)
  event.target.classList.add('selected');
}


palette.forEach(function(element){
  element.addEventListener('click', selectColor);
})

//Custom Color Selection
let custom = document.querySelector('.custom');
custom.addEventListener('click', customColor);

function customColor() {
  let colorChoice = prompt('Please enter a valid color name');
  selectedColor = colorChoice;
  custom.style.backgroundColor = colorChoice;

}

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

  }



function stopDrag() {
  drag = false;
  console.log(drag);
  grid.removeEventListener('mouseover', tester);

}

function tester() {
  console.log('weeeee');
  event.target.style.backgroundColor = selectedColor;
}
