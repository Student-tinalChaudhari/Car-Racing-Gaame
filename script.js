let player = document.getElementById("player");
let enemy = document.getElementById("enemy");
let scoreDisplay = document.getElementById("score");

let playerPosition = 175;
let enemyPosition = -100;
let enemyLeft = 100;
let score = 0;
let gameRunning = false;

document.addEventListener("keydown", function(event) {

    if (!gameRunning) return;

    if (event.key === "ArrowLeft" && playerPosition > 10) {
        playerPosition -= 20;
    }

    if (event.key === "ArrowRight" && playerPosition < 340) {
        playerPosition += 20;
    }

    player.style.left = playerPosition + "px";
});

function startGame() {

    if (gameRunning) return;

    gameRunning = true;
    score = 0;
    enemyPosition = -100;

    enemyLeft = Math.floor(Math.random() * 340);

    enemy.style.left = enemyLeft + "px";

    gameLoop();
}

function gameLoop() {

    if (!gameRunning) return;

    enemyPosition += 5;

    enemy.style.top = enemyPosition + "px";

    // Collision detection
    if (
        enemyPosition > 480 &&
        enemyPosition < 590 &&
        enemyLeft < playerPosition + 50 &&
        enemyLeft + 50 > playerPosition
    ) {
        gameRunning = false;
        alert("Game Over! Your Score: " + score);
        return;
    }

    // Enemy passed player
    if (enemyPosition > 600) {

        score++;
        scoreDisplay.textContent = score;

        enemyPosition = -100;
        enemyLeft = Math.floor(Math.random() * 340);

        enemy.style.left = enemyLeft + "px";
    }

    requestAnimationFrame(gameLoop);
}
