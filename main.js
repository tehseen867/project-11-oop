#! /usr/bin/env node
import { displayWelcomeMessage } from "./welcome.js";
import { collectData } from "./getData.js";
import { allUsers } from "./getData.js";
import inquirer from "inquirer";
import chalk from "chalk";
displayWelcomeMessage();
async function start() {
    let performAction = await inquirer.prompt([{
            name: 'selectOption',
            type: 'list',
            message: chalk.magentaBright('what do you want to do ?'),
            choices: ['Add user', 'check user info', 'exit']
        }]);
    if (performAction.selectOption === 'Add user') {
        collectData();
    }
    else if (performAction.selectOption === 'check user info') {
        if (allUsers.length > 0) {
            let userNames = allUsers.map(user => `${user.Name}`);
            let slectUser = await inquirer.prompt([{
                    name: 'select',
                    type: 'list',
                    message: chalk.yellow('select user to see its info:'),
                    choices: userNames
                }]);
            let selected_user = allUsers.find(user => `${user.Name}` === slectUser.select);
            if (selected_user) {
                console.log(chalk.green("\n_____________________________________________"));
                console.log(selected_user);
                console.log(chalk.green("\n_____________________________________________"));
            }
        }
        else {
            console.log(chalk.red('\nOops!!! the list is empty\n'));
        }
        let again = await inquirer.prompt([{
                name: 'addNew',
                type: 'list',
                message: chalk.redBright('select an action:'),
                choices: ['Continue', 'Exit']
            }]);
        if (again.addNew === 'Continue') {
            start();
        }
        else {
            process.exit();
        }
    }
    else {
        process.exit();
    }
}
async function run() {
    await displayWelcomeMessage();
    await start();
}
run();
export { start };
