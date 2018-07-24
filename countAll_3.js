const chalk = require('chalk')

const countAllPaarl = require("./countAllPaarl");
// console.log(countAllPaarl("CJ 31643, CBD 41248, CJ 45158"))

const styledMessage = chalk.bgRed.black(countAllPaarl('CJ 31643, CBD 41248, CJ 45158'))
console.log(styledMessage)
var figlet = require('figlet');

figlet.text('Done', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});
