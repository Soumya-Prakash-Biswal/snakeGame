import {update as updateSnake , draw as drawSnake , SNAKE_SPEED, getSnakeHead,snakeIntersection} from './snake.js';
import {update as updateFood , draw as drawFood} from './food.js';
import {outSideGrid} from './grid.js';

let lastRenderTime = 0;

const gameBoard = document.getElementById('game-board');
let gameOver=false;
 

function main(currentTime){

    if(gameOver){
        if(confirm("Do you want to play?")){
            window.location.href='./';
        }
         return 
    }

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    window.requestAnimationFrame(main);
    // console.log(currentTime);  
    // console.log(secondsSinceLastRender); 
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);


function update(){
    
    updateSnake(gameBoard);
    updateFood();
    checkDeath();

}       
function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);

}

function checkDeath(){
    gameOver = outSideGrid(getSnakeHead()) || snakeIntersection();
}
