const divElements = document.querySelectorAll("tr div")
const countElement = document.querySelector(".moves h2")
const startButton = document.querySelector(".start_game")
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function startGame() {
    let movesCount = 0
    numbersArray.sort(() => 0.5 - Math.random())
    let nullIndex = 0
    startButton.disabled = true;
    divElements.forEach(
        (element, index) => {
            if (numbersArray[index] == 9) {
                nullIndex = index
                element.innerHTML = `<h1></h1>`
            } else {
                element.innerHTML = `<h1>${numbersArray[index]}</h1>`
            }
            element.addEventListener("click", event => {
                if (index !== nullIndex && numbersArray[index] !== 9) {
                    movesCount += 1
                    element.innerHTML = `<h1></h1>`
                    divElements[nullIndex].innerHTML = `<h1>${numbersArray[index]}</h1>`
                    let temp = numbersArray[nullIndex]
                    numbersArray[nullIndex] = numbersArray[index]
                    numbersArray[index] = temp
                    nullIndex = index
                    countElement.innerHTML = movesCount
                    const getProcessResult = getResult(numbersArray)
                    if (getProcessResult) {
                        
                        console.log("Done");
                        alert(`Your Win Total Moves : ${movesCount}`)
                        startButton.disabled = false;
                    }
                    console.log(`last - ${index} current - ${nullIndex} array - ${numbersArray}`);
                }
            })
        }
    )
}

function getResult(numbersArray) {
    const sortedArray = sorted(numbersArray)
    for (var i = 0; i < numbersArray.length; ++i) {
        if (numbersArray[i] !== sortedArray[i]) return false;
    }
    return true;
}

function sorted(array) {
    if (array.length === 1) {
        return array // return once we hit an array with a single item
    }
    const middle = Math.floor(array.length / 2) // get the middle item of the array rounded down
    const left = array.slice(0, middle) // items on the left side
    const right = array.slice(middle)
    return merge(
        sorted(left),
        sorted(right)
    )
}

function merge(left, right) {
    let result = []
    let leftIndex = 0
    let rightIndex = 0
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

startButton.addEventListener(
    "click", event => {
        startGame()
    }
)