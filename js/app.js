/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
let stat = {
    water: 0,
};

let timer;
let gameOver;

/*------------------------ Cached Element References ------------------------*/

const seedsBtnEl = document.querySelector('#seeds-btn');
const waterBtnEl = document.querySelector('#water-btn');

const seedDropdownEl = document.getElementById('seed-dropdown');

const waterStatEl = document.querySelector('#water-stat');

const gameLoseMsgEl = document.querySelector('#message');

const resetBtnEl = document.querySelector('#restart');

/*-------------------------------- Functions --------------------------------*/
const gameStart = () => {
    waterStatUpdate();
    checkWaterLevel();
    render();
};

const waterStatUpdate = () => {
    stat.water += Math.floor(Math.random()*3);
};

const checkWaterLevel = () => {
    if(stat.water >= 10){
        gameOver = true;
    };
};

const render = () => {
    waterStatEl.textContent = stat.water;

    if(gameOver){
        resetBtnEl.classList.remove("hidden");
        gameLoseMsgEl.classList.remove("hidden");
        clearInterval(timer);
    }
};

const waterBtnClick = () => {
    stat.water = 0;
    render();
};

const inital = () => {
    resetBtnEl.classList.add("hidden");
    gameLoseMsgEl.classList.add("hidden");
    stat.water = 0;
    gameOver = false;
    timer = setInterval(gameStart, 2000);
}

inital();

/*----------------------------- Event Listeners -----------------------------*/

seedsBtnEl.addEventListener('click', () => {
    if (seedDropdownEl.style.display === 'none'){
        seedDropdownEl.style.display = 'block';
    } else{
        seedDropdownEl.style.display = 'none';
    }
});

waterBtnEl.addEventListener('click', waterBtnClick);

resetBtnEl.addEventListener('click', inital);