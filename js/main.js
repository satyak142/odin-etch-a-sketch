
const sketchboard = document.querySelector('#sketchboard') ;

function gridCreation () {
    for (let i = 0 ; i < 16*16 ; i++){
        const newDiv = document.createElement('div') ;
        sketchboard.appendChild(newDiv);
    }
}
gridCreation()
const allDivs = document.querySelectorAll('#sketchboard div') ;
allDivs.forEach(div => div.addEventListener('mouseover',draw));
function draw(e){
    e.target.style.backgroundColor = '#000000'
}

