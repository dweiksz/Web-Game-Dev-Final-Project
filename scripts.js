const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");

function jump() {
  if (player.classList != "jump") {
    player.classList.add("jump");

    setTimeout(function () {
        player.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));

  let obstacleLeft = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("left")
  );

  if (obstacleLeft < 50 && obstacleLeft > 0 && playerTop >= 140) {
    alert("Game Over!");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});