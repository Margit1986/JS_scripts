/*Race Day - Codecademy homework (sept 2022):
You have been hired to write a program that will register runners for the race and give them instructions on race day. As a timeline, registration would look like this:
  9:30 - adult and registred early
  11:00 - Adult and registred late
  12:30 - All youth
There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.
Race number: 
  Early adults receive a race number at or above 1000.
  All others receive a number below 1000.
Start time:
  Adult registrants run at 9:30 am or 11:00 am.
    Early adults run at 9:30 am.
    Late adults run at 11:00 am.
  Youth registrants run at 12:30 pm (regardless of registration).
But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.
*/

let raceNumber = Math.floor(Math.random() * 1000); /*Math.random() returns a value between 0 (inclusive) and 1 (exclusive). In order to make this set of numbers range from 0 (inclusive) to 1000 (exclusive) we can multiply the returned value by 1000. Finally, to ensure we only have whole numbers from 0 to 999 we can round down using Math.floor().*/ 

let runnerRegistratedEarly = false; //boolean variable that indicates whether a runner registered early or not
let runnerAge=19; //a variable for the runner’s age and set it equal to a number.

//Create a control flow statement that checks whether the runner is an adult AND registered early. Add 1000 to their raceNumber if this is true.
if (runnerRegistratedEarly  && runnerAge>18) {
  raceNumber += 1000; //Adding 1000 to their raceNumber if this statement is true. If not, then raceNumber will be given above.
 // console.log(raceNumber);
} 

/*Create a separate control flow statement below the first (starting with if again). This statement will check age and registration time to determine race time. For runners over 18 who registered early, log a statement to the console telling them that they will race at 9:30 am. Include their raceNumber.*/
if (runnerRegistratedEarly  && runnerAge>18) {
  //raceNumber += 1000;
 console.log(`You will race at 9:30 am and your race number is ${raceNumber}.`);
//Late adults run at 11:00 am - else if runner is over 18 AND did not register early they will race at 11:00am
}  else if (!runnerRegistratedEarly && runnerAge> 18) {
  console.log(`You will race at 11:00 am and your race number is ${raceNumber}.`);
 //Youth registrants run at 12:30 pm (regardless of registration)
 } else if (runnerAge< 18) {
  console.log(`You will race at 12:30 am and your race number is ${raceNumber}.`); 
 } 
 // exactly 18 years old - the console telling the runner to see the registration desk.
  else {
  console.log('See the registration desk'); 
 }
