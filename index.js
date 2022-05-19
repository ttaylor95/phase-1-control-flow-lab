function scuberGreetingForFeet(someValue){
  // Write your code here!
let results

if (someValue <= 400) {
  results = 'This one is on me!';

} 
else if (someValue <= 2000) {

  results = 'That will be twenty bucks.'
  
}

else if (someValue > 2500) {

  results = 'No can do.'
}

else if (someValue > 2000) {

  results = 'I will gladly take your thirty bucks.'
}

return results;

  
}

function ternaryCheckCity(city){
  // Write your code here!

let NYC = ternaryCheckCity
 
return (city === 'NYC' ? 'Ok, sounds good.' : 'No go.');
 // need to add return in order to complete ternary expression

}

function switchOnCharmFromTip(tip){
  // Write your code here!
switch (tip) {
  case 'generous':
    return 'Thank you so much.';

    break;

  case 'not as generous':
    return 'Thank you.';
    break;

    default:
   return 'Bye.';

}
}