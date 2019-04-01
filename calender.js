
const chalk = require('chalk');
const Moment = require('moment');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);

var map = require('lodash.map');
console.log("\t----------------");
console.log(chalk.bold("\tCALENDER OF 2019"));
console.log("\t----------------");

console.log("")
printMonth("January", 2019, 0, 1, 31);

console.log("")
printMonth("February", 2019, 1, 1, 28);

console.log("")
printMonth("March", 2019, 2, 1, 31);

console.log("")
printMonth("April", 2019, 3, 1, 30);

console.log("")
printMonth("May", 2019, 4, 1, 31);

console.log("")
printMonth("June", 2019, 5, 1, 30);

console.log("")
printMonth("July", 2019, 6, 1, 31);

console.log("")
printMonth("August", 2019, 7, 1, 31);

console.log("")
printMonth("September", 2019, 8, 1, 30);

console.log("")
printMonth("October", 2019, 9, 1, 31);

console.log("")
printMonth("November", 2019, 10, 1, 30);

console.log("")
printMonth("December", 2019, 11, 1, 31);




function printMonth(monthName, year, monthNum, startDay, endDay){
    console.log(chalk.italic(`\t${monthName}`));
    const start = new Date(year, monthNum, startDay);
    const end = new Date(year, monthNum, endDay);
    const range = moment.range(start, end);
    const space = moment(start).day()
    var monthArray = [[],[],[],[],[],[]];
    var countW = 0;
    var countD = 0;

    console.log(chalk.bold(chalk.gray(" SU  MO  TU  WE  TH  FR  SA ")));

    if(space != 0){
            
        for(var i = 0; i < space; i++){
            countD++;

            monthArray[0][i] = "  ";
        }
    }
    for (let day of range.by('days')) {
        
        if (monthArray[countW].length == 7){
            countW++;
            
        }
        if(countD > 6){
            countD = 0;
        }
    
        monthArray[countW][countD] = day.format('DD');
        
        countD++;
    }


    for(var row = 0; row < monthArray.length; row++){
        
        for(var col = 0; col < monthArray[row].length; col++){
            if (monthArray[row][col] == 11 && monthNum == 7) {
                process.stdout.write(" " + chalk.red(monthArray[row][col]) + " ");
            }
            else if(monthArray[row][col] == 25 && monthNum == 11){
                process.stdout.write(" " + chalk.blue(monthArray[row][col]) + " ");
            }
            else if(monthArray[row][col] == 6 && monthNum == 1){
                process.stdout.write(" " + chalk.magenta(monthArray[row][col]) + " ");
            }
            else if(monthArray[row][col] == 31 && monthNum == 9){
                process.stdout.write(" " + chalk.yellow(monthArray[row][col]) + " ");
            }
            else{
            process.stdout.write(" " + monthArray[row][col] + " ");
            }
        }
        console.log("")
    }

}








