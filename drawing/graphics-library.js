//library

//star1

function star(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, width, colour) {
    line(width);
    stroke(colour);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x4, y4);
    ctx.lineTo(x5, y5);
    ctx.closePath();   
    ctx.stroke();
}


//platform1

function platform(_x, y ,w ,h, x_1, y_1, w_1, h_1, colour1, colour2) {
    fill(colour1)
    ctx.fillRect(_x, y ,w , h);
    fill(colour2)
    ctx.fillRect(x_1, y_1 ,w_1 , h_1);
}