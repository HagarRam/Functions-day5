//Write a JavaScript function to print (console.log()) the “Hello World” message
function helloWorld(){
    console.log("hello world");
}
//Write a function that returns the square of a number.
function square(x){
    return x*x
}
//Write a function to convert Celsius to Fahrenheit and return the conversion.
function degrees(celsius){
    let conversionToFahrenheit = (celsius * (9/5) + 32);
    return conversionToFahrenheit
}
//Write a function to print a random number.
// Check out Math.random().
function randomNum() {
    let x = Math.random();
    return x;
}
//Write a function named tellFortune that:
//takes 4 arguments: number of children, partner's name, geographic location, job title.
//Alert your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
//Call that function 3 times with 3 different values for the arguments.

function tellFortune(numberOfChildren, partnersName,gergraphicLocation, jobTitle){
    alert(`"You will be a ${jobTitle} in ${gergraphicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.
    `);
}
tellFortune("doctor", "Noa and Yahel", "Tel Aviv", "5");
tellFortune("doctor", "Gaya and Tal", "Bat Yam", "4");
tellFortune("doctor", "Tali and DAN", "Haifa", "3");
 
//Write a function that takes in a 7 digits number and returns the number as a string with commas as thousand separators.
// For example, the number 1234567 should be returned as "1,234,567".
function numberSeparators(x){
    return(x.toLocaleString());  
}
//Write a function that takes in a string and returns the string with all a,e,i,o,u removed.
// For example, the string "Hello, World!" should be returned as "Hll, Wrd!".
function removeVowels(x){
    return x.replace(/[aeiou]/gi,'');
}
console.log(removeVowels("aaedd"));
//Write a function that takes in a number and returns the number rounded to the nearest integer
//. For example, the number 4.6 should be returned as 5, and the number 4.4 should be returned as 4
//. (check out Math methods and properties).
function roundedNumber(x){
    let y = Math.round(x);
    console.log(y);
}
//Write a function that:
//Save the hostname of the current URL as a variable (check location.hostname)  
//Alert the sentence: “Hello, your hostname is _(your variable)_ . Welcome!”
function hostName(){
    let hostName = location.hostname;
    alert(`Hello, your hostname is ${hostName}. Welcome!`);
}

