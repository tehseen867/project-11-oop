import chalk from "chalk";
import inquirer from "inquirer";
import { start } from "./main.js";
class person_data {
    Name;
    Father_name;
    Surname;
    Gender;
    Age;
    National_ID_card_number;
    Phone_number;
    Email;
    Date;
    Time;
    constructor(name, father_name, surname, gender, age, national_ID_card_number, phone_number, email, date, time) {
        this.Name = name;
        this.Father_name = father_name;
        this.Surname = surname;
        this.Gender = gender;
        this.Age = age;
        this.National_ID_card_number = national_ID_card_number;
        this.Phone_number = phone_number;
        this.Email = email;
        this.Date = date;
        this.Time = time;
    }
}
let allUsers = [];
const collectData = async () => {
    let getData = await inquirer.prompt([
        {
            name: 'getName',
            type: 'input',
            message: chalk.greenBright('enter your name:'),
            validate: (val) => {
                if (!val.trim()) {
                    return chalk.red('Name cannot be empty!');
                }
                if (!/^[a-zA-Z\s]+$/.test(val)) {
                    return chalk.red('Name must contain only letters and spaces!');
                }
                return true;
            }
        },
        {
            name: 'getFatherName',
            type: 'input',
            message: chalk.blueBright('enter your fathers name:'),
            validate: (val) => {
                if (!val.trim()) {
                    return chalk.red('Name cannot be empty!');
                }
                if (!/^[a-zA-Z\s]+$/.test(val)) {
                    return chalk.red('Name must contain only letters and spaces!');
                }
                return true;
            }
        },
        {
            name: 'getSurName',
            type: 'input',
            message: chalk.greenBright('enter you surname'),
            validate: (val) => {
                if (!val.trim()) {
                    return chalk.red('Surname cannot be empty!');
                }
                if (!/^[a-zA-Z\s]+$/.test(val)) {
                    return chalk.red('Surname must contain only letters and spaces!');
                }
                return true;
            }
        },
        {
            name: 'getGender',
            type: 'list',
            message: chalk.blueBright('select your gender:'),
            choices: ['Male', 'Female', 'Non-binary']
        },
        {
            name: 'getAge',
            type: 'input',
            message: chalk.greenBright('enter your age:'),
            validate: (val) => {
                if (!val.trim()) {
                    return chalk.red('age cannot be empty!');
                }
                if (isNaN(val)) {
                    return chalk.red('age must contain only digits!');
                }
                return true;
            }
        },
        {
            name: 'getID',
            type: 'input',
            message: chalk.blueBright('enter your national ID number:'),
            validate: (val) => {
                if (!val.trim()) {
                    return chalk.red('ID cannot be empty!');
                }
                if (isNaN(val)) {
                    return chalk.red('ID must contain only digits!');
                }
                return true;
            }
        },
        {
            name: 'getPhoneNumber',
            type: 'input',
            message: chalk.greenBright('enter your phone number with country code'),
            validate: (val) => {
                if (!val.trim()) {
                    return chalk.red('phone number cannot be empty!');
                }
                if (isNaN(val)) {
                    return chalk.red('phone number must contain only digits!');
                }
                return true;
            }
        },
        {
            name: 'getEmail',
            type: 'input',
            message: chalk.blueBright('enter your Email:'),
            validate: (val) => {
                if (!val.trim()) {
                    return chalk.red('Email cannot be empty!');
                }
                const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!emailPattern.test(val)) {
                    return chalk.red('invalid Email!');
                }
                return true;
            }
        }
    ]);
    let user_name = getData.getName;
    let user_father_name = getData.getFatherName;
    let user_surname = getData.getSurName;
    let user_gender = getData.getGender;
    let user_age = getData.getAge;
    let user_id = getData.getID;
    let user_phone_number = getData.getPhoneNumber;
    let user_email = getData.getEmail;
    let DATE = new Date().toDateString();
    let TIME = new Date().toLocaleTimeString();
    let addUser = new person_data(user_name, user_father_name, user_surname, user_gender, user_age, user_id, user_phone_number, user_email, DATE, TIME);
    allUsers.push(addUser);
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
};
export { collectData };
export { allUsers };
