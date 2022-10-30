// 1. Create an array called 'ages' that the following values: 3, 9, 23, 64, 2, 8, 28, 93

let ages = [];

ages.push(3, 9, 23, 64, 2, 8, 28, 93);

ages.push(37);

// subtract the value of the first element in the array from the value in the last element of the array 

let lastAge = ages[ages.length - 1];

let firstAgeMinusLast = lastAge - ages[0];


// 1b.  Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths)

firstAgeMinusLast = lastAge - ages[0];

console.log(firstAgeMinusLast);

// 1c.	Use a loop to iterate through the array and calculate the average age

let sum = 0; 

for (let i = 0; i < ages.length; i++){
    sum += ages[i];
}


let averageAge = sum / ages.length;


// 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’

let names = [];

names.push('Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob');

// 2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 

let nameLength = names.reduce(function (sum, names) {
    return sum + names.length;
}, 0);


let avgNameLength = (nameLength / names.length);

// 2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 

let namesPrinted = names.join(' ');

// 3.	How do you access the last element of any array?
// You access an element from an array by arrayName[i] with 'i' being the index of the array.

//4.	How do you access the first element of any array?
// You access the first element of an array with arrayName[0]

// 5.Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths = names.map(function(element){
    return element.length;
});



// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

let nameLengthSum = 0;

for (let i = 0; i < nameLengths[i]; i++){
    nameLengthSum += nameLengths[i];
}


// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 

let multiplyBy = 0;

function wordTimesNumer(word, n){
    for (let i = 0; i < n; i++){
        multiplyBy += i;
        while (multiplyBy < 1){
            return word;
        }multiplyBy++;
    }
}



// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.

let fullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(fullName('Brian', 'Rapsey'));

// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let myArray = [1, 2, 100];


let sumOfArray = 0;

for (const value of myArray) {
  sumOfArray += value;
}

let arrayFunction = (array, sumOfArray) => {
    if (sumOfArray > 100);
    return true;
}

// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.


let arryAverage = myArray.reduce((a, b) => a + b, 0) / myArray.length;



// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

let willBuyDring = (isHotOutside, moneyInPocket) => {
    if((isHotOutside == true) && (moneyInPocket > 10.50));{
        return true;
    }
}

console.log(willBuyDring(true, 11));