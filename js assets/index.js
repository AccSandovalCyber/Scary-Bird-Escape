const canvas = document.getElementById ("cvs");
const ctx = canvas.getContext("2d"); // id cvs / canvas gets placed into variable named ctx

const bird = new Image(); // assigning  bird to recieve a new image 

bird.src = "images/bird.png"; // sourcing my bird sprite 


birdX = birDY = score = bestScore = 0; // assigning restart values 
interval = birdSize = pipeWidth = topPipeBottomY = 24;

birdY = pipeGap = 150; // 
canvasSize = pipeX = 400;
canvas.onclick = () => (birDY = 9); // onclick method fly set to 9 

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

    ctx.fillStyle = "black"; // score count collor 
    bestScore = bestScore < score ? score : bestScore;
    ctx.fillText(score++, 9, 25); // score count & x y positions 
    ctx.fillStyle = "blue";
    ctx.fillText(`Best Score : ${bestScore}`, 9, 50); //bestScore x y positions 
    console.log(bestScore);
   
    (((birdY < topPipeBottomY || birdY > topPipeBottomY + pipeGap) && pipeX < birdSize * (524 / 374)) // bird hit pipe 
        || birdY > canvasSize) &&  // bird falls off screen 
        ((birDY = 0), (birdY = 200), (pipeX = canvasSize), (score = 0)); // bird dies score restarts to 0 
}, interval);




// function startGame() {
//     let startDiv = document.getElementById("start");
//     let gameCanvas = document.getElementById("cvs");
//     let gameOver = document.getElementById("game-over");

//     startDiv.style.display = "none";
//     gameCanvas.style.display = "block";
//     gameOver.style.display = "none";
//     start();
// }

// function gameOver() {
//     let startDiv = document.getElementById("start");
//     let gameCanvas = document.getElementById("cvs");
//     let gameOver = document.getElementById("game-over");

//     startDiv.style.display = "none";
//     gameCanvas.style.display = "none";
//     gameOver.style.display = "block";

//     ball.reset();
//     player1.reset();
//     player2.reset();
// }

// const bird = new Image();
// var bg = new Image(); 
// var fg = new Image(); 
// var pipeNorth = new Image(); 
// var pipeSouth = new Image(); 


// bird.src = "images/bird.png"; 
// bg.src = "images/bg.png"; 
// fg.src = "images/fg.png"; 
// pipeNorth.src = "images/pipeNorth.png"; 
// pipeSouth.src = "images/pipeSouth.png"; 

// var gap = 75; 
// var constant = pipeNorth.height + gap; 

// function draw() { 
//     ctx.drawImage(bg, 0, 0);

//     ctx.drawImage(pipeNorth, 100, 0)
//     ctx.drawImage(pipeSouth, 100, 0 + constant); 
    
//     ctx.drawImage(fg, 0, cvs.height - fg.height); 

// }  
// draw(); 

// ctx.drawImage(bg, 0, 0); 
