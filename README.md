Game summary:
<br>

“Grow a Garden” is a comforting, beginner friendly web game in which players plant seeds, water them, and watch their gardens grow over time. The game is straightforward and simply designed, encouraging nurturing and creativity through interactive growth phases and mild customization. 

Players begin with a little piece of dirt and a handful of seeds. With each click, users plant, water, and care for their plants, watching them grow from tiny sprouts to beautiful blossoms. The game has simple controls, bright visuals, and a gradual advancement mechanism that rewards attention and care. 

User Stories:

-	As a user, I want to pick my own seeds to plant.
-   As a user, I want to see my seeds stats.
-	As a user, I want to water my plants.
-	As a user, I want to see growth stages.
-   As a user, I want to harvest my plants when they reach full term.
-	As a user, I want to be presented with a clear lose screen when my plants die.
-	As a user, I want to start again when I lose.

Pseudocode:

1. Define variables

2. Store cached element references

3. Seed Selection<br>
// ask user to pick seeds<br>
// store selected seeds in userInventory 

4. Planting and watering LOOP<br>
// FOR each seed in userInventory<br>
// place seed in gardenPlot<br>
// SET growthStage and waterLevel

5. Watering Plants<br>
// IF user clicks on plant <br>
// INCREASE waterLevel

6. Growth Stages<br>
// FOR each plant in gardenPlot<br>
//IF waterLevel is greater than equal to requiredWater<br>
//INCREASE growthStage

7. GameOver<br>
// FOR each plant in gardenPlot<br>
//IF waterLevel === 0<br>
//Display loseScreen

8. Restart Option<br>
//IF user clicks "restart" button on loseScreen<br>
// RESET gameEnvironment and go to landingPage


 
