
/*Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive 
a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number*/
function max(lista){
    largo = lista.length;
    mayor = lista[0];
    
    for (k = 0; k < largo ; k++){
        if (lista[k] > mayor){
            mayor = lista[k];
        }
    }    
    return mayor
}

function min(lista){
    largo = lista.length;
    menor = lista[0];
    for (j = 0; j < largo ; j++){
        if (lista[j] < menor){
            menor = lista[j];
        }
    }
    return menor
}

porta = [4,6,2,1,9,63,-134,566];
console.log(max(porta));
console.log(min(porta));