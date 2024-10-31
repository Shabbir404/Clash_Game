
  // add keybord funciton
  function keybordEvent (e){
    const playerPressed = e.key;
    console.log('player pressed ', playerPressed);

    // expected key press

    const currentAlphaEliment = document.getElementById('current-alphabet');
    const innerTextGet = currentAlphaEliment.innerText;
    const expectedWordCase = innerTextGet.toLowerCase();

    // cheeking macthed or not

    if (expectedWordCase === playerPressed) {
        console.log('you did it');
        
    }
    else{
       console.log('try again! ')
    }
  console.log(expectedWordCase, playerPressed);
      

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
    console.log('your random number is :'+ randomNumberFunctionCalled)
    

    // setting the random alphabet to the screen
    const alphabetSet = document.getElementById('current-alphabet');
    alphabetSet.innerText = randomNumberFunctionCalled;
 
    // setting alphabet color in keybord
    setColor(randomNumberFunctionCalled);

}


