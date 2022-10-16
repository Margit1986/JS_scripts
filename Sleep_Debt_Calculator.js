/*Sleep Debt Calculator. Codecademy homework (sept 2022): 
in this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator. The program will determine the actual and ideal hours of sleep for each night of the last week. Finally, it will calculate, in hours, 
how far you are from your weekly sleep goal.First of all the long way, secondly short way.*/
/*
LONG OPTION: 
//function that returns any given night’s number of hours of rest
const getSleepHours = day => {
  if (day === 'monday') {
    return 7; 
  } else if (day === 'tuesday') {
    return 6; 
  } else if (day === 'wednesday') {
    return 8;
  } else if (day === 'thursday') {
    return 7;
  } else if (day === 'friday') {
   return 6;
  } else if (day === 'saturday') {
   return 7;
  } else if (day === 'sunday') {
   return 7;
  }
}; 
// getting the total sleep hours that you actually slept: 
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'); 
// getting the preferred ideal sleep hours
const getIdealSleepHours = () => {
  const idealHours = 8; //ideal hours per night 
  return idealHours * 7; //ideal hours per week
}
//calculating sleep debt: 
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  //If actual sleep equals ideal sleep:
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount on sleep.');
  } 
  //If the actual sleep is greater than the ideal sleep:
  else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than needed.');  
  } 
  //If the actual sleep is less than the ideal sleep:
  else if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than needed, get some sleep');  
  }
}
//console.log(getSleepHours('sunday'));
//console.log(getIdealSleepHours());
calculateSleepDebt();
*/
///////////////////////////////////////////////////////////////////////////////////////////////
//SHORT OPTION: 
const getActualSleepHours = () => 6 + 7 + 8 + 7 + 7 + 6 + 7; 
//Make idealHours a parameter and multiply it by 7
const getIdealSleepHours = idealHours =>  idealHours * 7; 
//calculating sleep debt: 
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  //If actual sleep equals ideal sleep:
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount on sleep.');
  } 
  //If the actual sleep is greater than the ideal sleep:
  else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than needed.');  
  } 
  //If the actual sleep is less than the ideal sleep:
  else if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than needed, get some sleep');  
  }
}
calculateSleepDebt();
