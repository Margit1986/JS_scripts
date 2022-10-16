/*Magic Eight Ball - Codecademy homework (sept 2022):
The user will be able to input a question, then our program will output a random fortune.*/
let userName = 'Iku'; 
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
let UserQuestion = 'Am I surrounded by idiots?';
UserQuestion ? console.log(`${userName} asked: ${UserQuestion}`) : console.log('No question asked!');
let randomNumber = Math.floor(Math.random() * 8); /*generate a random number between 0 and 7. Math.random() returns a value between 0 (inclusive) and 1 (exclusive). Multiple the returned value by 8 to make this set of numbers range from 0 to 8 (exclusive) . Rounding down using Math.floor() to ensure whole numbers from 0 to 7*/
let eigthBall = ''; /*will save a value to this variable in the next steps, depending on the value of randomNumber*/
switch (randomNumber) {
  case 0:
    console.log('It is certain!')
  break;
  case 1:
    console.log('It is decidedly so!')
  break;
  case 2:
    console.log('Reply hazy try again!')
  break;
  case 3:
    console.log('Cannot predict now!')
  break;
  case 4:
    console.log('Do not count on it!')
  break;
  case 5:
    console.log('My sources say no!')
  break;
  case 6:
    console.log('Outlook not so good!')
  break;
    case 7:
    console.log('Signs point to yes!')
    break;
 default:
    console.log('Error! Try again!')
  break;
}
