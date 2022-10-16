/* Rock, Paper, or Scissors - Codecademy homework (sept 2022): 
Rock, Paper, or Scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.
The possible outcomes are:
1.Rock destroys scissors.
2. Scissors cut paper.
3. Paper covers rock.
4. If there’s a tie, then the game ends in a draw.
Our code will break the game into four parts:
1. Get the user’s choice.
2. Get the computer’s choice.
3. Compare the two choices and determine a winner.
4. Start the program and display the results.
*/

//getting the user's choice: 
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase(); //Since a user can pass in a parameter, such as ‘Rock’ or ‘rock’ with different capitalizations, utilizing toLowerCase() function to make the userInput all lowercase.
    if (userInput === 'rock' || userInput ==='paper' || userInput ==='scissors') {
      return userInput; 
    } else console.log('Error!');
  };
  //getting the computer’s choice:
  function getComputerChoice() {
    let computerInput = Math.floor(Math.random() * 3); //utilizing Math.random() and Math.floor() to get a whole number between 0 and 2. 
    // depending on the number, returning either 'rock', 'paper', or 'scissors'.
      switch (computerInput) {
        case 0:
         return 'rock';
        case 1:
         return 'paper';
        case 2:
         return 'scissors';
       default:
        console.log('Error! Try again!')
      break;
      }
  }
  //determing a winner
  function determineWinner(userChoice,computerChoice) {
    // tie condition - if the userChoice parameter equals the computerChoice
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    }
    // user's choice is rock: 
    if (userChoice === 'rock') {   
      /* when the userChoice is 'rock', computerChoice must be either 'paper' or 'scissors'. If the computerChoice is 'paper', then paper covers rock and the computer wins. If the computerChoice is not 'paper', it must be 'scissors', and then the user wins.*/
      if (computerChoice === 'paper') {
        return 'Computer won!';
      } else {
        return 'User won!';
        } // user wins when computer choice is scissors
    }
    // user's choice is paper:
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') { //computerChoice must be either 'scissors' or 'rock'. If the computerChoice is 'scissors', then computer wins. Else user wins. 
        return 'Computer won!';
      } else {
        return 'User won!';
        } // user wins when computer choice is rock
    }
      // user's choice is scissors:
    if (userChoice === 'scissors') {   
      if (computerChoice === 'rock') { //the computerChoice must either be 'rock' or 'paper'. If the computerChoice is 'rock', then computer wins. Else user wins. 
        return 'Computer won!';
      } else {
        return 'User won!';
        }  // user wins when computer choice is paper
    }  
  
  }
  // playing the game and using function returnings: 
  const playGame = () => {
    const userChoice = getUserChoice('paper'); 
    const computerChoice = getComputerChoice(); 
    console.log('You threw: ' + userChoice);
    console.log('Computer threw: ' + computerChoice);
    //determine who won: 
    console.log(determineWinner(userChoice,computerChoice));
  };
  //calling the game: 
  playGame();
  
  //testing: console.log(determineWinner('scissors', 'paper'));
  //console.log(getUserChoice ('scissors'));
  //console.log(getComputerChoice());
  