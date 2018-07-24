// function countAllPaarl(regNum) {
//   //console.log(regNum);
//   var number = regNum.split(', ');
//
//   var paarl = [];
//
//   for (var i = 0; i < number.length; i++) {
//     if (number[i].startsWith('CJ')) {
//       paarl.push(number[i]);
//     }
//   }
//   return paarl.length;
// }
// var num = countAllPaarl('CJ7, CD58, CJ9')
// console.log(num)

module.exports = function(regNum){
  var number = regNum.split(', ');

  var paarl = [];

  for (var i = 0; i < number.length; i++) {
    if (number[i].startsWith('CJ')) {
      paarl.push(number[i]);
    }
  }
  return paarl.length;
}
