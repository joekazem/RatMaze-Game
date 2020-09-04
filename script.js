var container = document.getElementById("container");
function menu() {
var welcomeGame = `
<h1 id="Welcome to the Rat Maze Game"</h1>
<button onclick="startRat()">Start Rat Game</button>
<button>Load Game</button>
<button onclick="settings()">Settings</button>
`
container.innerHTML = welcomeGame

}
menu();