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

// function for score page

function scoreShow(e) {
    const getForScorePage = document.getElementById(e);
    getForScorePage.classList.remove('hidden');
    const getIdForPlayGround = document.getElementById('play-ground');
    getIdForPlayGround.classList.add('hidden');
}


// restert game funtion
function restartGame() {
    const getForScorePage = document.getElementById('score-page');
    getForScorePage.classList.add('hidden');
    const getIdForPlayGround = document.getElementById('play-ground');
    getIdForPlayGround.classList.remove('hidden');
    document.getElementById('life-id').innerText = 5;
    document.getElementById('score-id').innerText =0;
};

