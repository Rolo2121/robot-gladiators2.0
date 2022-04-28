
var playerName = window.prompt("What's your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Calculon";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyAttack, enemyHealth);

// Alert players that they are starting the round

var fight = function() {
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

 fight()

