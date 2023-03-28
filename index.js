'use strict';

// declarar variable usando el DOM para conectar con el html

//uno para el modal
const modal = document.querySelector('.modal')
console.log(modal)
//uno para el overlay
const overlay = document.querySelector('.overlay')
console.log(overlay)
//uno para el botón que abre el modal
const openModalBtn = document.getElementById('show-modal')
console.log(openModalBtn)
//uno para el botón que cierra el modal
const closeModalBtn = document.querySelector('#close-modal')
console.log(closeModalBtn)


// crear una función que abra el modal
function openModal() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

//crear una función que cierre el modal
function closeModal() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

//Pueden cambiar los add y remove por toggle

// Usar escuchadores (evenrListeners) para que los botones funcionen
openModalBtn.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)

