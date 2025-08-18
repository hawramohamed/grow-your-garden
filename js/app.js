/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
let stat = {
    water: 0,
};

let harvestedPlants = [];

let timer = 0;
let gameOver;
let waterClickCount = 0;
let seedsClickCount = 0;
let harvestClickCount = 0;
let seedChosen = false;

/*------------------------ Cached Element References ------------------------*/

const seedsBtnEl = document.querySelector('#seeds-btn');
const waterBtnEl = document.querySelector('#water-btn');
const harvestBtnEl = document.querySelector('#harvest-btn');

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

    //if statement for images    
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

    //if statement to disable harvest button
    if(waterBtnClick < 10){
        harvestBtnEl.disabled = true;
    } else {
        harvestBtnEl.disabled = false;
    }
};

const harvestBtnClick = () => {
    if (waterClickCount >= 10){
        const harvestedSeed = seedDropdownEl.value;
        harvestedPlants.push(harvestedSeed);

        harvestClickCount ++;
        harvestStatEl.textContent = harvestClickCount;

        //reset progress for new plant
        waterClickCount = 0;
        stat.water = 0;
        waterStatEl.textContent = stat.water;
        harvestBtnEl.disabled = true;

        //stop water thirst 
        clearInterval(timer);
        timer = 0;

        console.log("hiding")
        //remove plants after harvest
        seedImage.classList.add("hidden");
        growthImage.classList.add("hidden");
        sunflowerImage.classList.add("hidden");
        strawberryImage.classList.add("hidden");
        lettuceImage.classList.add("hidden");

        //choose new plant
        seedChosen = false;
        seedDropdownEl.classList.remove("hidden");  
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
    harvestClickCount = 0;
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
    harvestStatEl.textContent = harvestClickCount;
};

inital();

/*----------------------------- Event Listeners -----------------------------*/

seedsBtnEl.addEventListener('click', dropdownDisplay);
seedDropdownEl.addEventListener('change', dropdownChosen);

waterBtnEl.addEventListener('click', waterBtnClick);

harvestBtnEl.addEventListener('click', harvestBtnClick);

resetBtnEl.addEventListener('click', inital);