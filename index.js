ctx = cvs.getContext("2d"); // canvas gets placed a variable named  ctx //
const bird = new Image(); // DOM bird.png // 
bird.src = "images/bird.png" 
birdX = birDY = score = bestScore = 0;
interval = birdSize = pipeWidth = topPipeBottomY = 24;
birdY = pipeGap = 200;
canvasSize = pipeX = 400;
cvs.onclick = () => (birDY = 9) // onclick method fly set to 9 
setInterval(() => {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, canvasSize, canvasSize); // draw sky 
    birdY -= birDY -= 0.5;   // gravity is set to 0.5 
    ctx.drawImage(bird, birdX, birdY, birdSize * (524 / 374), birdSize); //draw bird 
    ctx.fillStyle = "seagreen";
    pipeX -= 8; // speed (left to right) set to 5 // 
    pipeX < -pipeWidth &&
    ((pipeX = canvasSize), (topPipeBottomY = pipeGap * Math.random()));
    ctx.fillRect(pipeX, 0, pipeWidth, topPipeBottomY); // draw top pipe  
    ctx.fillRect(pipeX, topPipeBottomY + pipeGap, pipeWidth, canvasSize); // draw bottom pipe 
    ctx.fillStyle = "black";
    ctx.fillText(score++, 9, 25); 
    bestScore = bestScore < score ? score : bestScore; 
    ctx.fillText(`Best Score : ${bestScore}`, 9, 50);
    console.log(bestScore); 

    (((birdY < topPipeBottomY || birdY > topPipeBottomY + pipeGap) && pipeX < birdSize * (524 / 374)) // bird hit pipe 
    || birdY > canvasSize) &&  // bird falls off screen 
    ((birDY = 0), (birdY = 200), (pipeX = canvasSize), (score =0)); // bird died  
}, interval)
