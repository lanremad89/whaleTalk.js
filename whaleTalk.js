/*
Whale Talk
Take a phrase like ‘turpentine and turtles’ and translate it into its 
“whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung 
slowly, as is a custom in the ocean.

To accomplish this translation, we can use our knowledge of loops. 
Let’s get started!
 */
let input = `Look at me i'm a whale. You should be one too.`;
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for(let i = 0; i < input.length; i++){
    if(input[i] === 'e') {
      resultArray.push(input[i]);
    } if(input[i] === 'u') {
      resultArray.push(input[i]);
    } 
  for(let j = 0; j < vowels.length; j++){
    if(input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}
let resultString = resultArray.join('').toUpperCase();
console.log(resultString);