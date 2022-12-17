// const canvas = document.querySelector('cvs');
// const ctx = canvas.getContext('2d');

// canvas.width = 288
// canvas.height = 512 

// ctx.fillRect(0, 0, canvas.width, canvas.height)

// const bird = new Image() ; 
// const bg = new Image(); 
// const fg = new Image(); 
// const pipeNorth = new Image();  
// const pipeSouth = new Image(); 

// bird.src = "images/bird.png";
// bg.src = "images/bg.png";
// fg.src = "images/fg.png";
// pipeNorth.src = "images/pipeNorth.png";
// pipeSouth.src = "images/pipeSouth.png"; 


ctx = cvs.getContext("2d"); // canvas gets placed a variable ctx // 
const bird = new Image(); // DOM selecting the node bird.png // 
bird.src = "images/bird.png"
birdX = birDY = 0;
interval = birdSize = pipeWidth = topPipeBottomY = 24;
birdY = pipeGap = 200;
canvasSize = pipeX = 400;
cvs.onclick = () => (birDY = 9) // the onclick method to fly 9 // 

setInterval(() => {
    ctx.fillStyle = "skyblue"
    ctx.fillRect(0, 0, canvasSize, canvasSize) // draw sky // 
    birdY -= birDY -= 0.5;   // gravity is set to 0.5 // 
    ctx.drawImage(bird, birdX, birdY, birdSize * (524 / 374), birdSize); //draw bird // 
    ctx.fillStyle = "green";
    pipeX -= 5; // left to right speed set to 5 // 
    pipeX < -pipeWidth && ((pipeX = canvasSize), (topPipeBottomY = pipeGap * Math.random())); 
    ctx.fillRect(pipeX, 0, pipeWidth, topPipeBottomY); // draw top pipe // 
    ctx.fillRect(pipeX, topPipeBottomY + pipeGap, pipeWidth, canvasSize); // draw bottom pipe // 

    (birdY > canvasSize) && ((birDY = 0), (birdY = 200)); // bird dies past the canvas screen //
}, interval)