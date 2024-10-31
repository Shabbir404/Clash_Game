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

// set color to the keybord
function setColor(elementId) {
    const getId = document.getElementById(elementId);
    getId.classList.add('bg-orange-400')

}

function removeColor(e) {
    const getId = document.getElementById(e);
    getId.classList.remove('bg-orange-400')
}