const inquirer = require("inquirer");
const inquirer = require("fs");
let userData = {};
const inquirer = require("inquirer");
const { type } = require("os");
const arrayQuestions = [
  {
    type: "input",
    message: "What is your project's name?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What is the authors name?",
    name: " name",
  },
  {
    type: "input",
    message: "What is the users Git Hub user name?",
    name: "username",
  },
  {
    type: "input",
    message: "What is the license name?",
    name: "license ",
  },
  {
    type: "input",
    message: "What is the license url?",
    name: "link",
  },
];

function init() {
  console.log("The function has run.");
  inquirer
    .prompt(arrayQuestions)
    .then(async (Response) => {
      userData = Response;
      fs.writeFile("readme.md", userData, (err) =>
        err ? console.error : console.log("commit logged!")
      );
    })
    .catch((err) => console.error(err));
}
init();