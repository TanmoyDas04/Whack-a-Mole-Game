let currMoleTile;
let currPlantTile;
let score=0;
const clickSound = new Audio('click.mp3');
const gameoverSound = new Audio('gameover.mp3');

window.onload=function(){
    setGame();
}

function setGame() {
    // set up the grid for the game bord in html
    for (let i = 0; i < 9; i++) {
        let title = document.createElement("div");
        title.id=i.toString();
        title.addEventListener("click",selectTile)
        document.getElementById("bord").appendChild(title);
    }
    setInterval(() => {
        setMole();
    }, 1000);

    setInterval(() => {
        setPlant();
    }, 1500);
}

function setMole() {

    if ((currMoleTile)) {
        currMoleTile.innerHTML="";
    }

    let mole=document.createElement("img");
    mole.src="monty-mole.png";

    let ranNum=Math.floor(Math.random()*(8-0)+0).toString();
    // console.log(ranNum);
    if (currPlantTile && currPlantTile.id == ranNum) {
        return;
    }
    currMoleTile=document.getElementById(ranNum);
    currMoleTile.appendChild(mole);
}

function setPlant() {

    if ((currPlantTile)) {
        currPlantTile.innerHTML="";
    }

    let plant=document.createElement("img");
    plant.src="piranha-plant.png";

    let ranNum=Math.floor(Math.random()*(8-0)+0).toString();
    // console.log(ranNum);
    if (currMoleTile && currMoleTile.id == ranNum) {
        return;
    }
    currPlantTile=document.getElementById(ranNum);
    currPlantTile.appendChild(plant);
}

function selectTile() {
    clickSound.play();
    if (this == currMoleTile) {
        score+=10;
        document.getElementById('score').innerHTML="Score: "+score;
    }
    else if(this == currPlantTile){
        // Game Over
        gameoverSound.play();
        alert(`Game Over !!\nYou scored ${score}`);
        score=0;
        document.getElementById('score').innerHTML="Score: "+score;
    }
}