Game summary:
<br>

“Grow a Garden” is a comforting, beginner friendly web game in which players plant seeds, water them, and watch their gardens grow over time. The game is straightforward and simply designed, encouraging nurturing and creativity through interactive growth phases and mild customization. 

Players begin with a little piece of dirt and a handful of seeds. With each click, users plant, water, and care for their plants, watching them grow from tiny sprouts to beautiful blossoms. The game has simple controls, bright visuals, and a gradual advancement mechanism that rewards attention and care. 

User Stories:

-	As a user, I want to see a landing page when I arrive at the website.
-	As a user, I want to see a start button to start playing the game.
-	As a user, I want to pick my own seeds to plant.
-	As a user, I want to water my plants.
-	As a user, I want to see growth stages.
-	As a user, I want to be presented with a clear lose screen when my plants die.
-	As a user, I want to start again when I lose.

Pseudocode:

1. Show landing page
// wait for user to click "start game" button

2. Start Game
// IF "start game" button is clicked
// show gameEnvironment and display seedSelection

3. Seed Selection
// ask user to pick seeds
// store selected seeds in userInventory 

4. Planting and watering LOOP
// FOR each seed in userInventory
// place seed in gardenPlot
// SET growthStage and waterLevel

5.Watering Plants
// IF user clicks on plant 
// INCREASE waterLevel

6. Growth Stages
// FOR each plant in gardenPlot
//IF waterLevel is greater than equal to requiredWater
//INCREASE growthStage

7. GameOver
// FOR each plant in gardenPlot
//IF waterLEvel === 0
//Display loseScreen

8. Restart Option
//IF user clicks "restart" button on loseScreen
// RESET gameEnvironment and go to landingPage

Assets: 

https://www.freepik.com/premium-vector/vegetable-plants-pixel-art-set-growing-crops-collection-8-bit-sprite_28762536.htm
 
