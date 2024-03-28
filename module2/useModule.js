const {text_odd, text_even} = require('./moduleText');

function checkStringOddOrEven(str){
    if(str.length % 2){
        return text_even;
    }
    return text_odd;
}
console.log("3: "+checkStringOddOrEven("안녕"));
console.log("4: "+checkStringOddOrEven("dkdsd"));

module.exports = [checkStringOddOrEven, text_even, text_odd];