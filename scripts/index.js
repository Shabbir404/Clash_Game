  // add keybord funciton
  function keybordEvent (e){
    const playerPressed = e.key;
    console.log('player pressed ', playerPressed);
    if (playerPressed === '!') {
      location.reload();
    }
   

    // expected key press
    const currentAlphaEliment = document.getElementById('current-alphabet');
    const innerTextGet = currentAlphaEliment.innerText;
    const expectedWordCase = innerTextGet.toLowerCase();

     // cheeking macthed or not
    if (expectedWordCase === playerPressed) {
        // console.log('you did it');

     //setting score update mathod and logic
       const scoreIdFinder = document.getElementById('score-id');
       const getScoreInNmber = parseInt(scoreIdFinder.innerText);
       const scoreUpdate = getScoreInNmber+1;
       scoreIdFinder.innerText = scoreUpdate;
        Play();
        removeColor(playerPressed);
    }
    else{
       const lifeIdFinder = document.getElementById('life-id');
       const getLifeInNmber = parseInt(lifeIdFinder.innerText);
       const lifeCut = getLifeInNmber- 1;
       lifeIdFinder.innerText = lifeCut;
       console.log('try again! ')
       }

       const restertScore = document.getElementById('life-id');
       const getLifeInNmber = parseInt(restertScore.innerText);
    // set the score in the result page.
       if (getLifeInNmber === 0) {
          scoreShow('score-page');
          const finnalScoreSet = document.getElementById('result-score');        
          const scoreIdFinder = document.getElementById('score-id');
          const getScoreInNmber = parseInt(scoreIdFinder.innerText);
          finnalScoreSet.innerText = getScoreInNmber;
          
         }
      
 }



document.addEventListener('keyup', keybordEvent);

function Play() {
    // getting home and add class 'hidden'
    const idFinderHome = document.getElementById('home');
    idFinderHome.classList.add('hidden');

     // getting play-ground and remove class'hidden'
    const idFinderPlayGround = document.getElementById('play-ground');
    idFinderPlayGround.classList.remove('hidden');
    const randomNumberFunctionCalled = getRandomNumber()
    // console.log('your random number is :'+ randomNumberFunctionCalled)
    
    // setting the random alphabet to the screen
    const alphabetSet = document.getElementById('current-alphabet');
    alphabetSet.innerText = randomNumberFunctionCalled;
 
    // setting alphabet color in keybord
    setColor(randomNumberFunctionCalled);
}