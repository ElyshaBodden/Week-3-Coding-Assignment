/*1.    Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93*/

let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log(ages)

/*1a.   Programmatically subtract the value of the first element in the array from the value in the last element of the array 
•	    Do not use numbers to reference the last element, find it programmatically, 
•	    ages[7] – ages[0] is not allowed!*/

let first = ages[ages.length-ages.length]
let last = ages[ages.length-1]
console.log(last-first)


/*1b.   Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).*/

ages.splice(7, 0, 55)
console.log(ages)


/*1c.	Use a loop to iterate through the array and calculate the average age. */
var sumAges = ages.reduce(
    function sum(ages, currentValue){ 
        return ages + currentValue
     })  
console.log(sumAges)

var agesLengthAverage = sumAges/ages.length
console.log(agesLengthAverage)


/* 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.*/

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
console.log(names)

/*2a.	Use a loop to iterate through the array and calculate the average number of letters per name.*/

var namesLength = names.map(
    function(element){
        return element.length
})
console.log(namesLength)

var sumNamesLength = namesLength.reduce(
    function sum(namesLength, currentValue){ 
        return namesLength + currentValue
     })  
console.log(sumNamesLength)

var namesLengthAverage = sumNamesLength / names.length
console.log(namesLengthAverage)

//2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.*/

const nameConcat = names.join(' ');
console.log(nameConcat)

//3.	How do you access the last element of any array?//
                /* The last element of any array is the index of one less than the total length of the array. You can access it using splice*/


//4.	How do you access the first element of any array?//
            /* The first element of any array is the index of 0. You can access it using splice*/


/*5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array//*/
let nameLengths = names.map(
    function (e){
        return e.length
    }
)
console.log(nameLengths)


/*6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. */

let sumNameLengths = nameLengths.reduce(
    function sum(nameLengths, currentValue){ 
        return nameLengths + currentValue
     }
) 
console.log(sumNameLengths)

/*7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.
 (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).*/


 function repeat(word, n){
    for (let i=0; i<n; i++){
        console.log(word.repeat(n))
    }
}
repeat("Hello", 3)

/*8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.
•	The full name should be the first and the last name separated by a space.*/

function fullName(firstName, lastName){
    console.log(firstName+' '+ lastName)
}
fullName("Elysha", "Bodden")

/*9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.*/


let arrayOfNumbers = [2, 3, 66, 44]
let  arrayONLength = arrayOfNumbers.reduce(
        function(arrayONLength, currentValue){
            return arrayONLength + currentValue > 100
        })
console.log(arrayONLength)


/*10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.*/

let arrayTwo = [3, 6, 33, 22, 10]
var sumArrayTwo = arrayTwo.reduce(
    function sum(arrayTwo, currentValue){ 
        return arrayTwo + currentValue
     })  
var arrayTwoLengthAverage = sumArrayTwo/arrayTwo.length
console.log(arrayTwoLengthAverage)



/*11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array 
is greater than the average of the elements in the second array.*/

    function greaterThanAvg (a1, a2){
        console.log(a1 > a2)
        return 'true'}
greaterThanAvg(arrayTwoLengthAverage, agesLengthAverage)

console.log(arrayTwoLengthAverage, agesLengthAverage)
/* 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, 
and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.*/


function willBuyDrink(isHotOutside, moneyInPocket){
    console.log((isHotOutside = "it is hot outside") && (moneyInPocket > 10.50))
    return "true"
}
willBuyDrink("it is hot outside", 8.50)



//13.	Create a function of your own that solves a problem. //
//•	In comments, write what the function does and why you created it.//

/*Write a function that inputs the color of a piece of clothing and returns "Okay, that's a serve! We love to see it." 
if it is 'blue' or 'green' and "It's not giving what it's supposed to give...but go off, babe. 
I wrote this problem because when I am shopping, I like to filters clothes by color. And if it doesn't match the color 
I want, then I talk to myself/my computer and these two lines are what I say.*/

function itsGiving(a){
    if (a == 'blue' || a == 'green'){
   console.log("Okay, that's a serve! We love to see it.")
} else {
    console.log ("It's not giving what it's supposed to give... but go off, babe.")
}
}
itsGiving('green')
itsGiving('turqouise')
