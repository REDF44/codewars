/*Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.*/
function inverso(lista){
    for (c = 0; c < lista.length; c++){
        lista[c] = lista[c]*-1;
    }
    return lista;
}
pope=[5,-5,-8,8,6,-99]
console.log(inverso(pope))