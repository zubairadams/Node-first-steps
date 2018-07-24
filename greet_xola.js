const chalk = require("chalk")

const greet = require("./greet");
console.log(greet("xola"))

const styledMessage = chalk.bgGreen.black(greet("xola"));
console.log(styledMessage)

var figlet = require('figlet');

figlet('hello ,' , function(err, data) {
   if (err) {
       console.log('Something went wrong...');
       console.dir(err);
       return;
   }
   console.log(data)
});
