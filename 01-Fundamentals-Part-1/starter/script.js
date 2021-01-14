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

console.log(`This is Mark's BMI for data set one: ${Math.floor(bmi(markHeight1, markWeight1))}`)
console.log(`This is John's BMI for data set one: ${Math.floor(bmi(johnHeight1, johnWeight1))}`)
console.log(`This is Mark's BMI for data set two: ${Math.floor(bmi(markHeight2, markWeight2))}`)
console.log(`This is John's BMI for data set two: ${Math.floor(bmi(johnHeight2, johnWeight2))}`)