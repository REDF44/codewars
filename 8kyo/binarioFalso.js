/*Given a string of digits, you should replace any digit below 5 with '0' and any 
digit 5 and above with '1'. Return the resulting string.
Note: input will never be an empty string*/
function binario(numero){
    numero_transformado = ""
    for (i = 0; i <numero.length; i++){
        if (parseInt(numero[i]) < 5){
            numero_transformado += 0
        }else if(parseInt(numero[i]) >= 5){
            numero_transformado += 1
        }
    }
    return numero_transformado
}

console.log(binario("84562359"))