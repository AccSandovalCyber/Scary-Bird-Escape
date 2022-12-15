



// rectangle function 
function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

// cirlce function 
function drawCircle(x, y, r, color) {
    ctxfillStyle = color;
    ctx.beginPatch();
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
}

// text function 
function drawText() {
    ctx.fillStyle = color;
    ctx.font = "75px fantasy";
    ctx.fillText(text, x, y);
}


let rectX = 0; 

function render() {
    drawRect(0, 0, 600, 400, "black");
    drawRect(0, 100, 100, 100, "red");
    rectx = rectX + 100; 
}

setInterval(render, 1000);

drawRect(x, y, w, h, color)
drawRect(100, 1000, 100, 100, "red"); 
drawRect(0, 0, 600, 400, "black");
drawRect(300, 100, 100, 100, "red");
drawRect(0, 0, 600, 400, "black"); 
drawRect(500, 100, 100, 100, "red");
drawRect ()



