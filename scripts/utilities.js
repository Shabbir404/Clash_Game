// getting a random number function

function getRandomNumber() {
// creating alphabets array
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    const makeStringsArray= alphabets.split('');
       
// get a random number 
    const randomNumber= Math.random()*25;
    const index = Math.round(randomNumber); 
   
// set alphabets to index
    const setAlphabetsToIndex = makeStringsArray[index];

    // console.log(index, setAlphabetsToIndex)
     return setAlphabetsToIndex;
}