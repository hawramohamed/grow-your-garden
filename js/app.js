/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
let stat = {
    water: 0,
};

let timer = 0;
let gameOver;
let waterClickCount = 0;
let seedChosen = false;
let seedsClickCount = 0;
/*------------------------ Cached Element References ------------------------*/

const seedsBtnEl = document.querySelector('#seeds-btn');
const waterBtnEl = document.querySelector('#water-btn');

const seedDropdownEl = document.querySelector('#seed-dropdown');

const seedStatEl = document.querySelector('#seeds-stat');
const waterStatEl = document.querySelector('#water-stat');
const harvestStatEl = document.querySelector('#harvest-stat');

const gameLoseMsgEl = document.querySelector('#message');
const resetBtnEl = document.querySelector('#restart');

const seedImage = document.querySelector('#seed-image');
const growthImage = document.querySelector('#growth-image');
const sunflowerImage = document.querySelector('#sunflower-image');
const strawberryImage = document.querySelector('#strawberry-image');
const lettuceImage = document.querySelector('#lettuce-image');

const seedType = {
    Sunflower: sunflowerImage,
    Strawberry: strawberryImage, 
    Lettuce: lettuceImage,
};
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

const growthUpdate = () => {
    seedImage.classList.add("hidden");
    growthImage.classList.add("hidden");
    sunflowerImage.classList.add("hidden");
    strawberryImage.classList.add("hidden");
    lettuceImage.classList.add("hidden");

    if(waterClickCount < 5){
        seedImage.classList.remove("hidden");
    } else if (waterClickCount < 8){
        growthImage.classList.remove("hidden");
    } else{
        const selectedSeed = seedDropdownEl.value;
        const finalImage = seedType[selectedSeed];
        if (finalImage){
            finalImage.classList.remove("hidden");
        };

    };
};

const render = () => {
    waterStatEl.textContent = stat.water;
    growthUpdate ();

    if(gameOver){
        resetBtnEl.classList.remove("hidden");
        gameLoseMsgEl.classList.remove("hidden");
        clearInterval(timer);
    }
};

const dropdownDisplay = () => {
    if (seedDropdownEl.classList.contains("hidden")){
        seedDropdownEl.classList.remove("hidden");
    } else{
        seedDropdownEl.classList.add("hidden");
    }
};

const dropdownChosen = () => {
    seedChosen = true;
    seedsClickCount++;
    seedStatEl.textContent = seedsClickCount;
    if (!timer) {
        timer = setInterval(gameStart, 2000)
    }
};

const waterBtnClick = () => {
    stat.water = 0;
    waterClickCount++;
    render();
};

const inital = () => {
    

    stat.water = 0;
    waterClickCount = 0;
    seedsClickCount = 0;
    gameOver = false;

    clearInterval(timer);
    timer = 0;

    // reset UI
    seedImage.classList.add("hidden");
    growthImage.classList.add("hidden");
    sunflowerImage.classList.add("hidden");
    strawberryImage.classList.add("hidden");
    lettuceImage.classList.add("hidden");

    resetBtnEl.classList.add("hidden");
    gameLoseMsgEl.classList.add("hidden");

    waterStatEl.textContent = stat.water;
    seedStatEl.textContent = seedsClickCount;
};

inital();

/*----------------------------- Event Listeners -----------------------------*/

seedsBtnEl.addEventListener('click', dropdownDisplay);
seedDropdownEl.addEventListener('change', dropdownChosen);

waterBtnEl.addEventListener('click', waterBtnClick);

resetBtnEl.addEventListener('click', inital);