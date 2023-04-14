
const sketchboard = document.querySelector('#sketchboard') ;
const gridSize = document.querySelector('#gridSize') ;


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
    e.target.style.backgroundColor = '#000000'
}

gridCreation();
gridSize.addEventListener('input',gridCreation)




