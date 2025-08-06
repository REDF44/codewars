const { error } = require("console")
const { platform } = require("os")

/*Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.

Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.*/
function sacarPrimerYultimo(palabra){
    nueva_palabra = ""
    if (palabra.length >= 2){
        if(palabra.length == 2){
            return nueva_palabra
        }
        else{
            nueva_palabra = palabra.slice(0,palabra.length-2)
            nueva_palabra = palabra.slice(1,palabra.length-1)  
        }
    }else {
        return "error"
    }    
    return nueva_palabra
}