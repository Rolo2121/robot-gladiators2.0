
var playerName = window.prompt("What's your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Calculon", "Robot Devil", "187-2"]; 
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames, enemyAttack, enemyHealth);
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + " index");
}
 
            // Game States
            // "WIN" - Player robot has defeated all enemy-robots
            //    * Fight all enemy-robots



                // Alert players that they are starting the round

var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight =  window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to chose.");
    if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth = enemyHealth - playerAttack;
       
     console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
      

                     // ENEMY STATS

enemyHealth = enemyHealth - playerAttack;
console.log(
    playerName + " attacked " + enemyName + "! " + enemyName + " now has " + enemyHealth + " health remaining!"
);
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!!!");
    }
else {
        window.alert(enemyName + "still has " + enemyHealth + " health left. ");
    }

                    // PLAYER STATS

playerHealth = playerHealth - enemyAttack;
console.log(
    enemyName + " attacked " + playerName + "! " + playerName + " now has " + playerHealth + " health remaining!"  
);
if (playerHealth <= 0) {
        window.alert(playerName + " has died!!!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left. " + playerMoney + " Dollars");
    }

                    // SKIP FIGHT

} else if (promptFight === "skip" || promptFight === "SKIP") {
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  if (confirmSkip){
      window.alert(playerName + " has decided to skip this fight.  Goodbye!");
      playerMoney = playerMoney - 2;
  }
  else {
      fight()
  }
} else {
  window.alert("You need to choose a valid option. Try again!");
}
};

for(var i =0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
} 

