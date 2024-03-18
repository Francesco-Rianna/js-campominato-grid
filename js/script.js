// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// Consigli del giorno:  :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.

// prendo elemento del dom che genera la griglia
const buttonPlay = document.querySelector('.btn');
// prendo elemento del dom in cui devo inserire i quadrati
const gridContainer = document.querySelector('.ms-grid');
// inizio un ciclo for per prendermi 100 quadrati
buttonPlay.addEventListener('click', function () {
    // Rimuovi eventuali quadrati già presenti nel contenitore
    gridContainer.innerHTML = '';

    // Genera 100 quadrati e li aggiunge al contenitore
    for (let i = 1; i <= 100; i++) {
        const newSquare = generateSquare(i);
        gridContainer.append(newSquare);
    }
});

function generateSquare(number) {
    // creo l'elemento del dom
    const newSquare = document.createElement('div')
    // gli do una classe 
    newSquare.classList.add('ms-square')
    // inserisco il numero all'interno del div
    newSquare.innerHTML = `<span>${number} </span>`

    newSquare.addEventListener('click', function () {

        newSquare.classList.toggle('ms-bg-square')
        console.log(number)


    })


    return newSquare




}

