// Game States
// "WIN" - Player robot has defeated all enemy robots
    // * Fight all enemy robots
    // * Defeat each enemy robot
    // * Present a robot for player to face
    // * exchange attacks until one target's hp reaches 0
// "LOSE" - Player robot's health is zero or less
    // * Player loses when too much damage is taken
// FUNCTION REQUIREMENTS - What does the function need to do in order to be functional
    // Turns have to be exchanged until one robot has 0 hp
    // Robot has to be replaced when defeated until all robots are dead
    // Victory or defeat screen has to ask if you want to play again to loop


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trubmle"];
var enemyHealth = 50;
var enemyAttack = 12;


// main code block 
var fight = function(enemyName){
    // add loop to keep game running
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    while(enemyHealth > 0 && playerHealth > 0){
        // var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "skip" || promptFight === "SKIP"){
            window.alert(playerName + " has chosen to skip the fight!");
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
            if (confirmSkip){
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = playerMoney -10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }    
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        // break out when opponent dies    
        if (enemyHealth <= 0){
            window.alert(enemyName + " has died!");
            break;
        }
        else{
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // enemy turn
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        // breakout of while loop when player dies
        if (playerHealth <= 0){
            windows.alert(playerName + " has died!");
            break;
        }
        else{
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

// runs function in a for loop to fight all enemies and resets hp
for(var i = 0; i < enemyNames.length; i++){
    var pickedEnemyName = enemyNames[i];
    enemyHealth =50;
    fight(pickedEnemyName);
}