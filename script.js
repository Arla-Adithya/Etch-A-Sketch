const container = document.getElementById('container');
const color = document.getElementById('favcolor');





function gird(rows, columns) {
    
    container.style.setProperty('--var-row', rows);
    container.style.setProperty('--var-col', columns);
    
    
    for (let i = 0; i < (rows * columns); i++) {
        let div = document.createElement('div');
        div.classList.add('content');
        container.appendChild(div);
    }
    Start_Sketch();
    Eraser();
    Reset();
    addRGB();
    
}

function Start_Sketch() {
    const start = document.querySelector("#start")
    start.onclick = () => {
        addColor();
    }
    // start.addEventListener('click',addColor());
}
function Eraser() {
    const eraser = document.querySelector("#Eraser");
    eraser.onclick = () => {
        removeColor();
    }
}

function addColor() {
    const con = document.querySelectorAll('.content');
    con.forEach(subCon => {
        subCon.addEventListener('mouseover', () =>{
            subCon.style.backgroundColor = defaultColor;
        });
    });
}

function removeColor() {
    const con = document.querySelectorAll('.content');
    con.forEach(subCon => {
        subCon.addEventListener('mouseover', () =>{
            subCon.style.backgroundColor = "#FFFFFF";
        });
    });
}
function Reset() {
    const reset = document.querySelector('#reset');
    reset.onclick = () => {
        color.value ="#ff0000";
        setNewColor(color.value);
        const con = document.querySelectorAll('.content');
        con.forEach(scon => {
            scon.style.backgroundColor = "#FFFFFF";
        })
        
    }
}
function RandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
}

let defaultColor = "#ff0000";
function setNewColor(newColor) {
    defaultColor = newColor;
}
// color.oninput = (e) => setNewColor(e.target.value);
color.addEventListener('input', (e) => {
    console.log(e);
    setNewColor(e.target.value);
})

function addRGB() {
    const  rgb =document.querySelector('#rgb');
    rgb.addEventListener('click', ()=> {
        const con = document.querySelectorAll('.content');
        con.forEach(subCon => {
            subCon.addEventListener('mouseover', () =>{
                const color = RandomColor();
                subCon.style.backgroundColor = color;
            });
        });
    })
}
gird(32,32);
const slider = document.querySelector("#slider");
slider.addEventListener('input', (e) => {
    container.innerHTML = '';
    const output = document.querySelector('#output');
    const rows = slider.value;
    const columns = slider.value;
    output.value = `${rows}x${columns}`;
    gird(rows,columns);
});