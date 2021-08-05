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
class Toma {
    constructor(name){
        this.name = name
        this.hunger = 0
        this.sleepiness = 0
        this.boredom = 0
        this.age = 0
    }

gameStart = () => {
        if (this.age < 20) {  
            if (this.hunger > 10 || this.sleepiness > 10){
                this.gameLost()
                clearInterval(this.age = 20)
                this.clearScores()
            } else {
                this.playToma()
                this.age++
                ageId.innerText = `Age: ${this.age}`
                if(this.age > 5) {
                    toma.style.height = "60px"
                    toma.style.width = "60px"
    
                } if (this.age > 10) {
                    toma.style.height = "75px"
                    toma.style.width = "75px"
                } if (this.age > 15) {
                    toma.style.height = "90px"
                    toma.style.width = "90px"
                }
            }
        } else {
            if (this.hunger < 10 && this.sleepiness < 10) {
                this.gameWon()
                clearInterval(this.age = 20)
                this.clearScores()
            } else {
                this.gameLost()
                clearInterval(this.age = 20)
                this.clearScores()
            }
        }
    }



    playToma = () => {
        if (this.age < 20 && this.hunger < 10 && this.sleepiness < 10 && this.boredom < 10) {
        gameContainer.style.background = "pink"
        toma.src= "https://static.wikia.nocookie.net/tamagotchi/images/2/2b/Kuchipatchi_anime.PNG/revision/latest?cb=20110918052545"
        // const flexProperties = ["flex-start", "flex-end", "start", "end", "left", "right", "center"]
        let randomN = Math.floor(Math.random()*300)
        toma.style.margin =  randomN + 'px'  
        // toma.style.flex.justifyContent = randomN
        console.log(randomN)
        this.addHunger()
        this.sleepToma()
        this.havingFun()
        }  else {
            clearInterval(this.age = 20)
            clearInterval(this.hunger = 10)
            clearInterval(this.sleepiness = 10)
        }
    }

    sleepOffLights = () => {
        gameContainer.style.background = "black"
        toma.style.margin = "350px 267px 0 0"
        toma.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Tlo6VmDP84ofhHEEh3JOK7ERp4jK-5-mZg&usqp=CAU"
        this.reduceSleepiness()
        this.getBored()
    }


    getBored = () => {
        if (this.boredom >= 0) {
        this.boredom++
        boreId.innerText = `Boredom: ${this.boredom}`
        }
    }
    
    havingFun = () => {
        if (this.boredom > 0) {
            this.boredom--
            boreId.innerText = `Boredom: ${this.boredom}`
        }
    }

    sleepToma = () => {
        this.sleepiness++
        sleepId.innerText = `Sleepiness: ${this.sleepiness}`
    }
    
    reduceSleepiness = () => {
        if (this.sleepiness > 1) {
            this.sleepiness--
            sleepId.innerText = `Sleepiness: ${this.sleepiness}`
        }
    }


    feeding = () => {
        if (this.hunger > 0)  {
        this.hunger--
        // let hungerId = document.querySelector("#hunger")
        hungerId.innerText = `Hunger: ${this.hunger}`}
        this.sleepToma()
    }
        
    addHunger = () => {
        this.hunger++
        hungerId.innerText = `Hunger: ${this.hunger}`   
    }

    gameWon = () => {
        let overGame = document.querySelector("#gameOver")
        overGame.innerText = "You Won!!!"
        overGame.style.color = "red"
        overGame.style.fontSize = "50px"
        overGame.style.background = "black"
        overGame.style.margin = "25px 50px 25px 50px"
        document.getElementById("play").disabled = true
        document.getElementById("sleepButton").disabled = true
        document.getElementById("feedPet").disabled = true
    }
    gameLost = () => {
        let overGame = document.querySelector("#gameOver")
        overGame.innerText = "GAME LOST !!!"
        overGame.style.color = "red"
        overGame.style.fontSize = "50px"
        overGame.style.background = "black"
        overGame.style.margin = "25px 50px 25px 50px "
    }

// Function clears the score when refresh button is hit
    clearScores = () => {
        hungerId.innerText = `Hunger: ${0}` 
        sleepId.innerText = `Sleepiness: ${0}`
        boreId.innerText = `Boredom: ${0}`
        ageId.innerText = `Age: ${0}`
        clearInterval(this.age = 20)
        let overGame = document.querySelector("#gameOver")
        
    }

    screenReLoad = () => {
        window.location.reload()
    }

//Code to update userName when playing
    updateName = () => {
        let name = document.querySelector("#userName")
        insertName.innerText = `Player Name: ${name.value}`
        setInterval (gotchi.gameStart, 2000)  
        document.getElementById("play").disabled = false
        document.getElementById("sleepButton").disabled = false
        document.getElementById("feedPet").disabled = false
    
    }

}
// Initiating the gotchi class
const gotchi = new Toma("Tomagotchi")    
// Select h1 so when "Submit is clicked it replace the UserName with user input"

    let insertName = document.querySelector("#displayUserName")
    let submit = document.querySelector("#submit")
    submit.addEventListener('click',gotchi.updateName)

// Adding event Listeners

    let play = document.querySelector("#play")
    play.addEventListener('click', gotchi.playToma )

    let turnOff = document.querySelector("#sleepButton")
    turnOff.addEventListener('click', gotchi.sleepOffLights)

    let feedYourPet = document.querySelector("#feedPet")
    feedYourPet.addEventListener('click', gotchi.feeding)

    let clearScore = document.querySelector("#refresh")
    clearScore.addEventListener('click', gotchi.screenReLoad)

