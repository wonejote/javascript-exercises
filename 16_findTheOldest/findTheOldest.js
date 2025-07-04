const findTheOldest = function(arr) {

let newa = arr.sort(Oldest);
return newa[newa.length - 1];
};


function Oldest(a,b)
{   
    
 let act = new Date().getFullYear();
 

                  
    return ((a.yearOfDeath ?? act) - a.yearOfBirth) - ((b.yearOfDeath ?? act) - b.yearOfBirth); 
}
 


// Do not edit below this line
module.exports = findTheOldest;
