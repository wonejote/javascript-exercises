const sumAll = function(a,b) {
   if (a < 0 || b < 0 || Math.floor(a) != a || typeof b != "number") {return "ERROR"}

   else
   return a < b  ? (a + b)*((b - a + 1)/2) : (a + b)*((a - b + 1)/2);

};
let j = 2;
console.log(typeof j);

// Do not edit below this line
module.exports = sumAll;
