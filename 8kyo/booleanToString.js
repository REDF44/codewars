
function escribirBooleanos(booleano){
    switch(booleano){
        case true :
            return("true");
            break;
        case false :
            return("false");
            break;
        default :
            return("Valor booleano invalido")
    }
}
console.log(escribirBooleanos(true))