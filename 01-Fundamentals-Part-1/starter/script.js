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

// const markHeight1 = 1.69
// const johnHeight1 = 1.95
// const markWeight1 = 78
// const johnWeight1 = 92

// const markHeight2 = 1.88
// const johnHeight2 = 1.76
// const markWeight2 = 95
// const johnWeight2 = 85


// function bmi (height, weight){
//     return weight/(height * height)
// }

// const markHigherBMI1 = bmi(markHeight1, markWeight1) > bmi(johnHeight1, johnWeight1)
// const markHigherBMI2 = bmi(markHeight2, markWeight2) > bmi(johnHeight2, johnWeight2)

// console.log(`Mark's BMI is higher than John's for data set one: ${markHigherBMI1}`)
// console.log(`Mark's BMI is higher than John's for data set two: ${markHigherBMI2}`)

// /* Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �
// GOOD LUCK � */

// if (markHigherBMI1 === true){
//     console.log(`Mark's BMI (${bmi(markHeight1, markWeight1)}) is higher than John's (${bmi(johnHeight1, johnWeight1)}) for data set one.`)
// } else {
//     console.log(`John's BMI (${bmi(johnHeight1, johnWeight1)}) is higher than Mark's (${bmi(markHeight1, markWeight1)}) for data set one.`)
// }

// if (markHigherBMI2 === true){
//     console.log(`Mark's BMI (${bmi(markHeight2, markWeight2)}) is higher than John's (${bmi(johnHeight2, johnWeight2)}) for data set two.`)
// } else {
//     console.log(`John's BMI (${bmi(johnHeight2, johnWeight2)}) is higher than Mark's (${bmi(markHeight2, markWeight2)}) for data set two.`)
// }

// Coding challenge 3

// There are two gymnastics teams, Dolphins and koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const dolphins = {
    'game1': 96,
    'game2': 108,
    'game3': 89
}

const koalas = {
    'game1': 88,
    'game2': 91,
    'game3': 110
}

const koalaAvg = (koalas.game1 + koalas.game2 + koalas.game3)/3
const dolphinsAvg = (dolphins.game1 + dolphins.game2 + dolphins.game3)/3

if (koalaAvg > dolphinsAvg){
    console.log('Koalas win')
} else if (koalaAvg === dolphinsAvg){
    console.log('Draw')
} else {
    console.log('Dolphins Win')
}