class PlayerData {
    constructor (name, hunger, sleepiness, boredom, age) {
        this.name = name
        this.hunger = 0
        this.sleepiness = 0
        this.boredom = 0
        this.age = 0
    }

    reduceHunger () {
        this.hunger--
    }
    addHunger () {
        this.hunger++
    }
    age () {
        setInterval(this.ageUp, 1000)
        
    }
    ageUp () {
        this.age++
    }

    playToma () {
        let toma = document.querySelector("#pic")
        let gameContainer = document.querySelector("#game")
        gameContainer.style.background = "pink"
        toma.src= "https://static.wikia.nocookie.net/tamagotchi/images/2/2b/Kuchipatchi_anime.PNG/revision/latest?cb=20110918052545"
        let randomN = Math.floor(Math.random()*300)
        toma.style.margin =  randomN + 'px'
        
      
    }

    sleepOffLights () {
        let toma = document.querySelector("#pic")
        let gameContainer = document.querySelector("#game")
        gameContainer.style.background = "black"
        toma.style.margin = "350px 267px 0 0"
        toma.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Tlo6VmDP84ofhHEEh3JOK7ERp4jK-5-mZg&usqp=CAU"
    
    }
}

let gotchi = new PlayerData("tomagotchi", 0, 0, 0, 0)

console.log(gotchi.hunger)

//Code to update userName when playing
let updateName = () => {
    let name = document.querySelector("#userName")
    insertName.innerText = `Player: ${name.value}`}

// Select h1 so when "Submit is clicked it replace the UserName with user input"
let insertName = document.querySelector("#displayUserName")
let submit = document.querySelector("#enterName")
submit.addEventListener('click',updateName)


let play = document.querySelector("#play")
play.addEventListener('click', gotchi.playToma)

let turnOff = document.querySelector("#sleepButton")
turnOff.addEventListener('click', gotchi.sleepOffLights)

let feedYourPet = document.querySelector("#feedPet")
feedYourPet.addEventListener('click', gotchi.reduceHunger)

let hungerId = document.querySelector("#hunger")
hunger.innerText = `Hunger: ${gotchi.hunger}`

let sleepId = document.querySelector("#sleep")
sleep.innerText = `Sleep: ${gotchi.sleepiness}`

let boreId = document.querySelector("#bore")
bore.innerText = `Boredom: ${gotchi.boredom}`

let ageId = document.querySelector("#age")
sleep.innerText = `Sleep: ${gotchi.age}`



