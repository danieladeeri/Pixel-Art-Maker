// Select color input
const color = document.querySelector('#colorPicker');

// Select size input
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');
const table = document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
document.addEventListener('submit', makeGrid);

// Your code goes here!
function makeGrid(event) {
    event.preventDefault();
    table.innerHTML = ''

    for (var i=0; i<height.value; i++) {
        var row = document.createElement('tr');
           for (var j=0; j<width.value; j++){
               var column = document.createElement('td');
               row.appendChild(column)

           }
           table.appendChild(row)
    }
        
}
// When the user click the table, it should shade the colour 
function gridColor(event){
    event.target.style.background = color.value   
}
table.addEventListener('click', gridColor);
    