#! /usr/bin/env node

import inquirer from "inquirer";

async function start_func() {
  const syste_mnum = Math.random() * 10;
  const user_num = await inquirer.prompt([
    {
      type: "number",
      name: "user_Guess",
      message: "Enter your name between 1-10 :",
    },
  ]);
  const { user_Guess } = user_num;
  console.log(`Your Guess: `, user_Guess, `\n system's guess`, syste_mnum);

  if (user_Guess == syste_mnum) {
    console.log("your guess is correct.");
  } else {
    console.log("better luck next time.");
  }
}

async function sartAgain() {
  do {
    await start_func();
    var again = await inquirer.prompt({
      type: "input",
      name: "restart",
      message: "do you want to continue press Y or N",
    });
  } while (
    again.restart === "Y" ||
    again.restart === "y" ||
    again.restart === "Yes" ||
    again.restart === "yes"
  );
}
sartAgain();
