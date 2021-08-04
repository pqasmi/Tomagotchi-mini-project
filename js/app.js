// Scoreboard
let hungerId = document.querySelector("#hunger")
hungerId.innerText = `Hunger: ${0}`
let sleepId = document.querySelector("#sleep")
sleepId.innerText = `Sleepiness: ${0}`
let boreId = document.querySelector("#bore")
boreId.innerText = `Boredom: ${0}`
let ageId = document.querySelector("#age")
ageId.innerText = `Age: ${0}`
let toma = document.querySelector("#pic")
let gameContainer = document.querySelector("#game")

//Disabled game buttons
document.getElementById("play").disabled = true
document.getElementById("sleepButton").disabled = true
document.getElementById("feedPet").disabled = true

//Game Class
class Game {
    constructor(name){
        this.name = name
        this.hunger = 0
        this.sleepiness = 0
        this.boredom = 0
        this.age = 0
    }
}
// Initiating the gotchi class
const gotchi = new Game("Tomagotchi")    

const ageUp = () => {
    if (gotchi.age > 20 || gotchi.hunger >20) {
        clearInterval(gotchi.age = 20)
        // clearInterval(gotchi.hunger = 20)
    } else {
        gotchi.age++
        ageId.innerText = `Age: ${gotchi.age}`
        gameEnd()
        playToma()}
        
    }


const playToma = () => {
    if (gotchi.age <20) {
    gameContainer.style.background = "pink"
    toma.src= "https://static.wikia.nocookie.net/tamagotchi/images/2/2b/Kuchipatchi_anime.PNG/revision/latest?cb=20110918052545"
    let randomN = Math.floor(Math.random()*300)
    toma.style.margin =  randomN + 'px'  
    addHunger()
    sleepToma()
    havingFun()
    }  
}

const sleepOffLights = () => {
    gameContainer.style.background = "black"
    toma.style.margin = "350px 267px 0 0"
    toma.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Tlo6VmDP84ofhHEEh3JOK7ERp4jK-5-mZg&usqp=CAU"
    sleepToma()
    getBored()
}

const getBored = () => {
    if (gotchi.boredom >= 0) {
    gotchi.boredom++
    boreId.innerText = `Boredom: ${gotchi.boredom}`
    }
}

const havingFun = () => {
    if (gotchi.boredom > 0) {
        gotchi.boredom--
    boreId.innerText = `Boredom: ${gotchi.boredom}`
    }
}

const sleepToma = () => {
    gotchi.sleepiness++
    sleepId.innerText = `Sleepiness: ${gotchi.sleepiness}`
}

const reduceSleep = () => {
    if (gotchi.sleepiness > 1) {
        gotchi.sleepiness--
        sleepId.innerText = `Sleepiness: ${gotchi.sleepiness}`
    }}

const feeding = () => {
        if (gotchi.hunger > 0)  {
        gotchi.hunger--
        // let hungerId = document.querySelector("#hunger")
        hungerId.innerText = `Hunger: ${gotchi.hunger}`}
        sleepToma()
    }
    
const addHunger = () => {
        gotchi.hunger++
        hungerId.innerText = `Hunger: ${gotchi.hunger}`   
    }

const gameEnd = () => {
    if (gotchi.hunger > 20 || gotchi.sleepiness > 20 || gotchi.age >20) {
        clearInterval(gotchi.hunger = 20)
        clearInterval(gotchi.sleepiness = 20)
        let overGame = document.querySelector("#gameOver")
        overGame.innerText = "GAME OVER"
        overGame.style.color = "red"
        overGame.style.fontSize = "100px"
        overGame.style.background = "black"
        overGame.style.margin = "25px 50px 25px 50px "
        gotchi.hunger = 20
        gotchi.sleepiness = 20
        gotchi.boredom = 20
        gotchi.age = 20
        hungerId.innerText = `Hunger: ${gotchi.hunger}` 
        sleepId.innerText = `Sleepiness: ${gotchi.sleepiness}`
        boreId.innerText = `Boredom: ${gotchi.boredom}`
        ageId.innerText = `Age: ${gotchi.age}`
        document.getElementById("play").disabled = true
        document.getElementById("sleepButton").disabled = true
        document.getElementById("feedPet").disabled = true
}
}
// Function clears the score when refresh button is hit
const clearScores = () => {
    hungerId.innerText = `Hunger: ${0}` 
    sleepId.innerText = `Sleepiness: ${0}`
    boreId.innerText = `Boredom: ${0}`
    ageId.innerText = `Age: ${0}`
}

//Code to update userName when playing

const updateName = () => {
    let name = document.querySelector("#userName")
    insertName.innerText = `Player Name: ${name.value}`
    setInterval (ageUp, 1000)  
    document.getElementById("play").disabled = false
    document.getElementById("sleepButton").disabled = false
    document.getElementById("feedPet").disabled = false

}

// Select h1 so when "Submit is clicked it replace the UserName with user input"
let insertName = document.querySelector("#displayUserName")
let submit = document.querySelector("#submit")
submit.addEventListener('click',updateName)

let play = document.querySelector("#play")
play.addEventListener('click', playToma )

let turnOff = document.querySelector("#sleepButton")
turnOff.addEventListener('click', sleepOffLights)

let feedYourPet = document.querySelector("#feedPet")
feedYourPet.addEventListener('click', feeding)

let clearScore = document.querySelector("#refresh")
clearScore.addEventListener('click', clearScores)

