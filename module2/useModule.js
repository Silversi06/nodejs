const {text_odd, text_even} = require('./moduleText');

function checkStringOddOrEven(str){
    if(str.length % 2){
        return text_odd;
    }
    return text_even;
}
console.log("3: "+checkStringOddOrEven(3));
console.log("4: "+checkStringOddOrEven(4));