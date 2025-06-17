


const reverseString = function(var_string) {
    let respuesta = "";
for (let i = var_string.length  - 1; i >= 0; i--){
    respuesta = respuesta + var_string[i];
    console.log(i);
}
return respuesta;
};



// Do not edit below this line
module.exports = reverseString;
