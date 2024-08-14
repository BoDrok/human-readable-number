module.exports = function toReadable (number) {

    const units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (number < 10) {
        return units[number];
    } 
    else if (number < 20) {
        return teen[number - 10];
    } 
    else if (number < 100) {
        const unitsNumber = number % 10;
        return tens[Math.floor(number / 10)] + (unitsNumber ? " " + units[unitsNumber] : "");
    } 
    else if (number < 1000) {
        const unitsNumber = number % 100;
        return (units[Math.floor(number / 100)] + " hundred" + (unitsNumber ? " " + toReadable(unitsNumber): "") );
    }

}
