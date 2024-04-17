#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        message: "ENTER YOUR SENTENCE TO COUNT THE WORDS!",
        name: "sentence",
        type: "input",
    },
]);
let words = answer.sentence.trim().split(" ");
console.log(words);
console.log(`It is "${words.length}" words in your sentence!`);
