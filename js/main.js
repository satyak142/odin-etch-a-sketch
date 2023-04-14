
const sketchboard = document.querySelector('#sketchboard') ;
const gridSize = document.querySelector('#gridSize') ;

let drawColor = '#000';
let randomColor = false;
document.querySelector('#selectColor').addEventListener('change',(e)=>{
    randomColor = false;
    drawColor = e.target.value;
})
document.querySelector('#randomColor').addEventListener('click',()=>{
    randomColor = true ;
})
document.querySelector('#eraser').addEventListener('click',()=>{
    randomColor = false;
    drawColor ='#FFF'
})
document.querySelector('#clear').addEventListener('click',gridCreation)

gridCreation();
gridSize.addEventListener('input',gridCreation)

function gridCreation () {
    const size = gridSize.value;
    gridSize.parentElement.firstElementChild.textContent = `Size(${size}x${size})`;
    sketchboard.innerHTML = '';
    for (let i = 0 ; i < size*size ; i++){
        const newDiv = document.createElement('div') ;
        sketchboard.appendChild(newDiv);
    }
    sketchboard.style.setProperty('--size',size);
    const allDivs = document.querySelectorAll('#sketchboard div') ;
    allDivs.forEach(div => div.addEventListener('mouseover',draw));
}


function draw(e){
    if(randomColor === true){
        drawColor = getRandomHexColor();
    }
    e.target.style.backgroundColor = drawColor;
}


function getRandomHexColor() {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  
    const hexColor = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  
    return hexColor;
  }

  
  
  
  
  
  




