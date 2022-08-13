
//Decimal Format till fixed places 
const decimalFormat = (n, places) => ~~(Math.pow(10, places) * n) / Math.pow(10, places);

//Celcius to Farenheit
const cToF = (celsius) => celsius * 9/5 + 32;

//Farenheit to celcius
const fToC = (fahrenheit) => (fahrenheit - 32) * 5/9;