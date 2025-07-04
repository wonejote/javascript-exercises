const fibonacci = function(num) {
    
   let next = 1;
   let prev = 0;
   let act = 0;
  if(num == 0){return 0;}

  if(num < 0){return "OOPS";}

    for(let i = 1; i < num; i++)
    {   act = next;
        next += prev;
        prev = act;
        console.log(next);
    }
    return next;
};



// Do not edit below this line
module.exports = fibonacci;
