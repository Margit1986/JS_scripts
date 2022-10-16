/*Team Stats - Codecademy homeword (okt 2022):
We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects. */

//making a data structure to store the information about our team. Adding two properties with arrays to the team object: _players property and _games property. Populating _players and _games arrays with data.
const team = {
    _players: [
      {firstName: 'Michael', lastName: 'Jordan', age: 59}, 
      {firstName: 'LeBron', lastName: 'James', age: 37}, 
      {firstName: 'Kevin', lastName: 'Durant', age: 34}
      ],
    _games: [
      {opponent: 'San Antonio Spurs', teamPoints: 78, opponentPoints: 77}, 
      {opponent: 'Houston Rockets', teamPoints: 90, opponentPoints: 101}, 
      {opponent: 'Chicago Bulls', teamPoints: 85, opponentPoints: 89}
    ], 
    //Creating a getter method called players to retrieve the _players property:
    get players() {
      return this._players; 
    }, 
    //Creating getter method called games to retrieve the _games property:
    get games() {
      return this._games; 
    }, 
    //Method that adds players data to our team:
    addPlayer(newFirstName, newLastName, newAge) {
        let player = {firstName: newFirstName, lastName: newLastName, age: newAge}
         this._players.push(player);
    },
     //Method that adds games data to our team:
     addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        let game = {opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints}
         this._games.push(game);
    }
  };
  //using .addPlayer() method to add a new player: Shaquilee O'Neal, age 50.
  team.addPlayer('Shaquille', "O'Neal", 50);
  //loging the _players property: 
  console.log(team.players);
  //using the .addGame() method to add a record of a new game.
  team.addGame('Los Angeles Lakers', 100, 98);
  //loging the _games property: 
  console.log(team.games);
  
  //iterating through each element of the team._players object. In each iteration, the variable stars is set to one of team._players‘s keys, enabling to log a list of players’ name and age:
  for (let stars in team._players) {
    console.log(`${team._players[stars].firstName} ${team._players[stars].lastName}, age: ${team._players[stars].age}`);
  }; 
  
  //iterating through each element of the team._games object. In each iteration, the variable scores is set to one of team._games‘s keys, enabling to log a list of games statistics:
  for (let scores in team._games) {
    console.log(`Opponent: ${team._games[scores].opponent}, teamPoints: ${team._games[scores].teamPoints}, OppomentPoints: ${team._games[scores].opponentPoints}`);
  }; 
  
  