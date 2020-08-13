// Math.random returns value between 0 and 1 but never 1
    // *Math.random * 21 gives a random number between 0 and 20.xx
    // * Math.floor rounds the number down so it will be between 0 and 20
    // * add 40 so the number is always at least 40
var enemyHealth = Math.floor(Math.random() * 21) + 40;
var enemyAttack = 12;

// adds a variable to give random number between two values
var randomNumber = function(min, max){
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
}


// game states and major functions
var fight = function(enemy){
    // add loop to keep game running
    while(enemy.health > 0 && playerInfo.health > 0){
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "skip" || promptFight === "SKIP"){
            window.alert(playerInfo.name + " has chosen to skip the fight!");
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
            if (confirmSkip){
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                // subtracts money for being a coward
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);
                break;
            }
        }    
        // adds a randomness element to playerInfo.attack || Math.max prevents overkills
        var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage)

        console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
        // break out when opponent dies    
        if (enemy.health <= 0){
            window.alert(enemy.name + " has died!");
            // awards money for winning
            playerInfo.money += 20;
            break;
        }
        else{
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        // enemy turn. adds randomness element to enemyAttack || Math.max prevents overkills
        var damage = randomNumber(enemyAttack -3, enemyAttack)
        playerInfo.health = Math.max(0, playerInfo.health - damage);

        console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
        // breakout of while loop when player dies
        if (playerInfo.health <= 0){
            window.alert(playerInfo.name + " has died!");
            break;
        }
        else{
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
};


// start game function
var startGame = function(){

    // resets player stats at start of game
    playerInfo.reset();

    // loop to go through all items in enemyInfo.length
    for(var i = 0; i < enemyInfo.length; i++){
        // checks if playerInfo.health is above 0 and displays a round counter. Remember that indexing starts at 0 so you must add a number
        if (playerInfo.health > 0){
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));
        }
        // lets player know if they've lost
        else{
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
        // assigns variable to indexed enemy and pipes for loop variable
        var pickedEnemyObj = enemyInfo[i];
        // resets health pool
        pickedEnemyObj.health = randomNumber(40, 60);
        fight(pickedEnemyObj);

        if (playerInfo.health >0 && i < enemyInfo.length -1){
            shop();
        }
    }
    endGame();
};

// end game function
var endGame = function(){

    // congratulates if still alive
    if (playerInfo.health > 0){
        window.alert("Great job, you've survived the game! You now have a score")
    }
    else{
        window.alert("You've lost your robot in battle.");
    }

    // asks if they want to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm){
        startGame();
    }
    else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function(){
    // ask player what to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    )

    // use a switch to control flow of game
    switch(shopOptionPrompt){
        case "REFILL":
        case "refill":
            playerInfo.refillHealth();
            break;

        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;

        case "LEAVE":
        case "leave":
            window.alert("Leaving the store");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
}

// store object for player info
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function(){
        if (this.money >= 7){
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else{
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function(){
        if (this.money >=7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -=7;
        }
        else{
            window.alert("You don't have enough money!");
        }
    }
};

// store object arrary for enemy info
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name:"Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
];

startGame();
