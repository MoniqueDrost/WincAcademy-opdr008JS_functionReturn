/* Checking if a number is big part 1

 const checkNumber = function(number) {
    if (number > 100) {
    return console.log("true");
}
return console.log("false");
};

checkNumber(5);
checkNumber(150);
*/

/* Checking if a number is big part 2: console.log inside of the function

const checkNumber = function(number) {
    if (number > 100) {
    return result = 'true';}

return result= 'false';
};
// const check = checkNumber(150);
// console.log(check);
const check = checkNumber(5);
console.log(check);
*/

/* Bouncer at a club
const bouncer = function(maxNumber, currentNumber, age) {
    if (currentNumber >= maxNumber) {
        return result = "it's too busy now, come back later"
    }
    else if (age >=18) { 
        return result = "come in"
    }
    return result = "this is a club for adults"   
}

// const check = bouncer(100, 150, 25);
// const check = bouncer(150,100,17);
const check = bouncer(150,100,19);
console.log(check);
*/

// Calculating the average


function arrayAverage(arr) {

    let sum = 0;
    for (let i in arr) {
        sum += arr[i];
    }

    return (Math.round(sum / 5));
}
let arr = new Array(1, 2, 5, 20, 25);
let avg = arrayAverage(arr);
console.log(avg);