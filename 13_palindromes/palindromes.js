const palindromes = function (str) 
{   
    function isLetter(char)
    {
        
      return /[a-zA-Z0-9]/.test(char);
    }

    
    str = str.toUpperCase();
    let newarr = str.split(" ").join("").split("").filter(isLetter);
    let invertArr = []
    for (let i = newarr.length;i>0; i--)
    {
        invertArr.push(newarr[i - 1]);
    }
    let finalstr = invertArr.join("");
    let initialstr = newarr.join("");
    console.log(finalstr);
    console.log(initialstr);
    return finalstr === initialstr;
};
console.log(palindromes("r3ace3car"));

// Do not edit below this line
module.exports = palindromes;
