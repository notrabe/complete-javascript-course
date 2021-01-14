// const js = 'amazing'
// console.log(40 + 8 + 23 - 10)

// const firstName = 'Evan'
// console.log(`My first name is ${firstName}`)

// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK �

const markHeight1 = 1.69
const johnHeight1 = 1.95
const markWeight1 = 78
const johnWeight1 = 92

const markHeight2 = 1.88
const johnHeight2 = 1.76
const markWeight2 = 95
const johnWeight2 = 85


function bmi (height, weight){
    return weight/(height * height)
}

const markHigherBMI1 = bmi(markHeight1, markWeight1) > bmi(johnHeight1, johnWeight1)
const markHigherBMI2 = bmi(markHeight2, markWeight2) > bmi(johnHeight2, johnWeight2)

console.log(`Mark's BMI is higher than John's for data set one: ${markHigherBMI1}`)
console.log(`Mark's BMI is higher than John's for data set two: ${markHigherBMI2}`)

/* Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK � */

if (markHigherBMI1 === true){
    console.log(`Mark's BMI (${bmi(markHeight1, markWeight1)}) is higher than John's (${bmi(johnHeight1, johnWeight1)}) for data set one.`)
} else {
    console.log(`John's BMI (${bmi(johnHeight1, johnWeight1)}) is higher than Mark's (${bmi(markHeight1, markWeight1)}) for data set one.`)
}

if (markHigherBMI2 === true){
    console.log(`Mark's BMI (${bmi(markHeight2, markWeight2)}) is higher than John's (${bmi(johnHeight2, johnWeight2)}) for data set two.`)
} else {
    console.log(`John's BMI (${bmi(johnHeight2, johnWeight2)}) is higher than Mark's (${bmi(markHeight2, markWeight2)}) for data set two.`)
}