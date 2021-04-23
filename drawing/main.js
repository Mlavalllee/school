//main

//canvas setup

let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 800;
let x = 0;
let _y = 0;

//grid

ctx.beginPath();
ctx.moveTo(25, 0);
ctx.lineTo(25, 800);
ctx.stroke();
grid(x, _y);
 
function grid(x, _y) {
    for ( let n = 1 ; n < 36  ; n ++)  {
        ctx.beginPath();    
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 800);
        ctx.stroke();
        x = x + 25;
    } for ( let n = 1 ; n < 36  ; n ++) {
        ctx.beginPath();    
        ctx.moveTo(0, _y);
        ctx.lineTo(800, _y);
        ctx.stroke();
        _y = _y + 25;
    }

}

// Change stroke colour, line width, and fill colour.
function line(width) {
    ctx.lineWidth = width;
}
function stroke(style){
    ctx.strokeStyle = style;
}
function fill(Fill) {
    ctx.fillStyle = Fill
}

//draw star

star(100, 0, 150, 150, 25, 50, 175, 50, 50, 150, 7, "red");
star(400, 25, 450, 250, 350, 100, 450, 100, 350, 250, 3, "blue");
star(600, 125, 650, 275, 500, 175, 700, 175, 550, 275, 15, "yellow");

//draw platform
platform(0, 600 ,100 ,25, 0, 575, 100, 25, "brown","green");
platform(400, 700 ,200 ,15, 400, 688, 200, 12, "red","black");
platform(500, 500 ,300 ,50, 500, 495, 500, 5, "#FFE5B4","yellow");
