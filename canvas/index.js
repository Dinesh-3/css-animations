let colorArray = ["pink", "blue", "pink", "blue", "pink", "blue", "pink", "blue", "pink"]
let index=1;
let userInput = document.querySelector("#input")
let submitButton = document.querySelector("#submitButton")
let numbers = ''

let count = 0
let interval = setInterval(() => {
   
    index = Math.floor(Math.random() * 9) +1 
    console.log(index); 
    let divElement = document.querySelector(`#div${index}`)

    divElement.style.backgroundColor = colorArray[index];
    if(colorArray[index] == "blue"){
        numbers += "" + index
    }
    setTimeout(()=> {
        divElement.style.backgroundColor = 'white'
    },500)
    if(count == 10){
        document.getElementById("submitButton").disabled = false;
        clearInterval(interval)
    }
    count += 1

}, 1000)

function getScoreBoolean(){
    if (userInput.value == numbers){
        return true
    }
    return false
}
submitButton.addEventListener(
    "click", event => {
        document.querySelector("h2").innerHTML = getScoreBoolean()? "Your Win" : "Your Lose"
        document.querySelector("h3").innerHTML = numbers
        event.target.elements.userInput.value = '';
        event.target.elements.userInput.focus();
    }
)