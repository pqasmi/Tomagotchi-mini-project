class Player {
    constructor (name, hunger, sleepiness, boredom, age) {
        this.name = name
        this.hunger = hunger 
        this.sleepiness = sleepiness
        this.boredom = boredom
        this.age = age
    } 

}
let updateName = () => {
    let name = document.querySelector("#userName")
    insertName.innerText = name.value
}


let insertName = document.querySelector("#displayUserName")
let submit = document.querySelector("#enterName")
submit.addEventListener('click',updateName)



function moveImage () {
let toma = document.querySelector("#pic")
let position = ["left", "right", "bottom", "top"]
document.toma.style.background = postion[Math.floor(Math.random * position.length)] 
console.log(postion[Math.floor(Math.random * position.length)] )
}

let play = document.querySelector("#play")
play.addEventListener('click', moveImage)




// let toma = document.querySelector("#pic")
// console.log(toma)
// let playTom = document.querySelector("#play")
// const moveCharacter = (event) => {

//     document.toma.style.backgroundPosition = "top right"
// }

// playTom.addEventListener('click', moveCharacter)


