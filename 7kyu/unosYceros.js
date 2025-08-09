/*Given an array of ones and zeroes, convert the equivalent binary value to an integer.
Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.*/
function binarioLista(lista){
    binario = '';
    for (numero = 0; numero <= lista.length-1; numero++){
        binario += lista[numero];
    }
    decimal = 0;
    exponente = 0;
    for (caracter = binario.length-1; caracter >= 0; caracter--){
        decimal += binario[caracter]*(2**exponente);
        exponente +=1; 
    }
    return decimal;
}

es = [1, 1, 1, 1]
console.log(binarioLista(es))