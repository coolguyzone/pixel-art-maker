let blue = false;
let red = false;
let selectedColor = undefined;


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

// function selectColor(event) {
//   if (event.target.classList.contains('red')) {
//     red = true;
//     blue = false;
//   }
//   else if (event.target.classList.contains('blue')) {
//     blue = true;
//     red = false;
//   }
// }

function selectColor(event) {
  selectedColor = event.target.id;
  console.log(selectedColor)
}


palette.forEach(function(element){
  element.addEventListener('click', selectColor);
})
