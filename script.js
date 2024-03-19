let num = Math.ceil(Math.random()*100)
let count = 0
let displayGuess = document.getElementById("display-guess")
function GuessNumber() {
    count+=1
    let guess = document.getElementById("user-input").value;
    guess = parseInt(guess)
    let result = document.getElementById("result");

    if (guess===num) {
        result.innerText = `Congratulations you guessed in ${count} chances`
    }
    else if(guess>num){
        result.innerText = "Try Again by guessing lower number"
    }
    else{
        result.innerText = "Try Again by guessing higher number"
    }
    displayGuess.innerText = `Number of Guesses : ${count}`
}