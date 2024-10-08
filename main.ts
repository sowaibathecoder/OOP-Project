#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.blueBright("\n\t\t\t\t\t ****OBJECT ORIENTED PROGRAMMING**** \n\t\t\t\t\t")
);

console.log(chalk.greenBright.bold("\t\tWelcome!"));
console.log(chalk.yellow("\n\tYou are using an OOP program\n"));
  

// Class representing a student with a name property
class Student {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// Class representing a person with a list of students
class Person {
  students: Student[] = [];

  // Method to add a student to the list
  addStudent(obj: Student) {
    this.students.push(obj);
  }
}

// Creating an instance of the Person class
const person = new Person();

// Function to start the program
const programStart = async (person: Person) => {
  console.log(
    chalk.bold.rgb(
      204,
      204,
      204
    )(`* * * * * * * * * * * * * * * * * * * * * * *\n`)
  );
  
  do {
    // Asking user which person to talk to
    const { select } = await inquirer.prompt({
      type: "list",
      name: "select",
      message: chalk.yellowBright("Select a person to talk, or you can exit."),
      choices: ["Teacher", "Student", "Exit"]
    });

    if (select === "Teacher") {
      console.log(chalk.magentaBright.bold(`\n You are chatting with Teacher\n`));

      console.log(chalk.cyanBright("Hope you're doing well!"));

      console.log(chalk.cyanBright("Teacher: How can I assist you today?"));
      console.log(
        chalk.cyanBright("Teacher: Remember to submit your assignments on time.")
      );
      console.log(
        chalk.cyanBright("Teacher: If you have any questions, feel free to ask.")
      );
      console.log(chalk.cyanBright("Teacher: Let's have a productive day!\n"));
    }

    // If user chooses Student
    if (select === "Student") {
      const { student } = await inquirer.prompt({
        type: "input",
        name: "student",
        message: chalk.yellowBright("Which student do you want to talk?")
      });

      // Finding the student
      let selectedStudent = person.students.find(
        (value) => value.name === student
      );

      // If student not found, add new student to the list
      if (!selectedStudent) {
        selectedStudent = new Student(student);
        person.addStudent(selectedStudent);
        console.log(
          chalk.redBright(
            `\nI'm ${chalk.bold.cyan(selectedStudent.name)}, and I'm good.`
          )
        );
      } else {
        console.log(
          chalk.redBright(
            `I'm ${chalk.bold.green(selectedStudent.name)}, and I'm doing well.`
          )
        );
      }

      console.log(chalk.redBright(`${selectedStudent.name}: How was your day?`));
      console.log(
        chalk.redBright(`${selectedStudent.name}: I finished my homework.`)
      );
      console.log(
        chalk.redBright(
          `${selectedStudent.name}: I'm excited about the upcoming project.`
        )
      );
      console.log(
        chalk.redBright(`${selectedStudent.name}: Let's study together soon!\n`)
      );
    }

    // If user chooses Exit
    if (select === "Exit") {
      console.log(chalk.bold.magenta("\nGoodbye!"));
      process.exit();
    }
  } while (true);
};

programStart(person);
