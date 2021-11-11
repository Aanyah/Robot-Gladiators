var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
// check to see if the value of the playerHealth variable is greater than 0
	if (playerHealth > 0) {
		console.log("Your player is still alive!");
	}
var playerAttack = 50;

	if (playerHealth === 0) {
		console.log("This will not run.");
	}
	else {
		console.log("This will run instead.");
	}
var playerMoney = 10;

// you can also log mulyiple vaules at once like this [console.log(playerName, playerAttack, playerHealth);]

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
	//Alert players that they are starting the round
	window.alert(" Welcome to Robot Gladiators");
	var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
	//if player choses to fight, then fight
	if (promptFight === "fight" || promptFight === "FIGHT") {
		// remove enemy's health by subtracting the amount set in the playerAttack variable
		console.log(
			playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
		);

		//check enemy's health
		if (enemyHealth <= 0) {
			window.alert(enemyName = " has died");
		} 
		else {window.alert(enemyName + " still has " + enemyHealth + " health left.");
		}
		// remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

	 // check player's health
	 if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
  // if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
	//confirm player wants to skip
	var confirmSkip = window.confirm("Are you sure you'd like to quit");

	//if yes (true), leave fight
	if (confirmSkip) {
		window.alert(playerName + " has decided to skip this fight. Goodbye!");
		// subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
	}
	// if no (false), ask question again by running fight() again
  else {
    fight();
	}
}

	//Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result the value in the 'enemyHealth' variable
	enemyHealth = enemyHealth - playerAttack;
	// Log a resulting message to the console so we know that it worked.
	console.log(
		playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
	// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
	playerHealth = playerHealth - enemyAttack;
	// Log a resulting message to the console so we know that it worked.
	console.log(
		enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
	//check player health
  if (playerHealth <= 0) {
		window.alert(playerHealth + " has died");
	}
	else {
		window.alert(playerName + " still has " + playerHealth + " health left.");
	}

	//check enemy's health
	if (enemyHealth <= 0) {
		window.alert(enemyName + " has died!");
	}
	else {
		window.alert(enemyName + " still has " + enemyHealth + " health left.");
	}
};

fight();