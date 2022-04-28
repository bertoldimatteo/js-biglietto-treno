// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

const pathKm = Number(prompt("Quanti km vuoi percorrere?"));
const ageUser = Number(prompt("Quanti anni hai?"));

let firstPrice = Number(pathKm * 0.21);

if (ageUser <= 17) {
    document.getElementById("finalPrice").innerHTML =
    Number(firstPrice - (firstPrice * 20) / 100);
} else if (ageUser >= 65) {
    document.getElementById("finalPrice").innerHTML =
    Number(firstPrice - (firstPrice * 40) / 100);
}