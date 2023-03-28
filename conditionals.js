'use strict'

//declarar variables para conectar con el HTML

//una para el botón del dado
const rollDiceBtn = document.querySelector('.roll-the-dice')
//una para el botón de reset
const resetBtn = document.querySelector('.reset-the-game')
//una para el número que arroje el dado
const result = document.querySelector('.dice-number')
//una para el mensaje que se ve debajo del numero que saque el dado
const winnerMssg = document.querySelector('.winner-text')


// función para lanzar el dado con numeros de 1 al 6
function rollDice() {

    const dice = Math.trunc(Math.random() * 6) + 1

    result.textContent = `${dice}`

    if(dice === 6){
        winnerMssg.textContent = 'Has ganado el juego 🥇!'
        rollDiceBtn.classList.add('hidden')

    }else{
      winnerMssg.textContent = 'Sigue intentando 🤯'  
    }

    console.log(dice)

}


// función para que el botón pueda lamzar el dado
rollDiceBtn.addEventListener('click', rollDice)

//función para reiniciar el juego
function reset() {
    result.textContent = 0
    winnerMssg.textContent = 'Juega!👩‍💻'
    rollDiceBtn.classList.remove('hidden')
}

reset()

// Darle funcionalidad al botón de reiniciar
resetBtn.addEventListener('click', reset)


//Ejemplo de literals 
const greeting = 'Buenos días!'
const nombre = 'Santi'
const city = 'Madrid'
const job = 'Desarrollador'

console.log(greeting+ ' ' + nombre + ' que vive en ' + city + ' y que es ' + job )
console.log(`${greeting} ${nombre} que vive en ${city} y que es ${job}`)

