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

// genaretting a game loop for desplaying a random alphabet to the screen
function gameLoop (){

}