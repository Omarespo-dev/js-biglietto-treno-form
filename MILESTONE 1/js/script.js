// Descrizione:
// Scrivere un programma che chieda all’utente: - Il numero di chilometri da percorrere - Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.


// // chieda all’utente: - Il numero di chilometri
// const chiediKilometri=parseInt("Inserisci il numero di km")
// // console.log(chiediKilometri)



// // chiedi all'utente l'età
// const chiediEtà=parseInt("Inserisci la tua età")
// // console.log(chiediEtà)

// // - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// const prezzoAlkm= 0.21 *chiediKilometri
// // console.log(prezzoAlkm.toFixed(2) + " €")

// // Prezzo scontato 20% minorenni
// const prezzoScontato1= prezzoAlkm * 0.20;
// const risultatoSconto1=prezzoAlkm - prezzoScontato1;

// // Prezzo scontato 40% minorenni
// const prezzoScontato2= prezzoAlkm * 0.40;
// const risultatoSconto2=prezzoAlkm - prezzoScontato2;

// // Imposto condizione 

// if(chiediEtà < 18){
//     console.log("Sei minorenne hai diritto solo al 20% di sconto sul biglietto","Pagherai:", risultatoSconto1.toFixed(2) + " €")
// }else if(chiediEtà > 65){
//     console.log("Hai superato i 65 anni, hai diritto a uno sconto del 40% sul biglietto","Pagherai:", risultatoSconto2.toFixed(2) + " €")
// }else{
//     console.log(" Mi dispiace non hai diritto a nessun sconto! ")
// }





// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

// Dom accesso element input
const eta = document.getElementById("input2")
const km = document.getElementById("input1")
const form = document.getElementById("set-form")


// Output
const outputRisultato2= document.getElementById("outputRisultato2")






// evento al form per non far ricarica la pagina
form.addEventListener("submit", function(event){
    
    event.preventDefault();  //Gli diciamo di bloccare la ricarica della pagina che avviene con il form 



    // - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    let prezzoBiglietto = (0.21 * km.value)
    // console.log(prezzoBiglietto.toFixed(2) + " €")

    
    // // Prezzo scontato 20% minorenni
    const prezzoScontato1= prezzoBiglietto * 0.20;
    const risultatoSconto1=prezzoBiglietto - prezzoScontato1;

    // // Prezzo scontato 40% minorenni
    const prezzoScontato2= prezzoBiglietto * 0.40;
    const risultatoSconto2=prezzoBiglietto - prezzoScontato2;

    // Imposto condizione 

    if(eta.value <= 18){
        // console.log("Sei minorenne hai diritto solo al 20% di sconto sul biglietto, Pagherai:",risultatoSconto1.toFixed(2) + " €")
        // STAMPO A VIDEO
        outputRisultato2.innerHTML= "Sei minorenne hai diritto solo al 20% di sconto sul biglietto, Pagherai:" + risultatoSconto1.toFixed(2) + " €"
    
    }else if(eta.value >= 65){
        // console.log("Hai superato i 65 anni, hai diritto a uno sconto del 40% sul biglietto, Pagherai:",risultatoSconto2.toFixed(2) + " €")

        // STAMPO A VIDEO
        outputRisultato2.innerHTML= "Hai superato i 65 anni, hai diritto a uno sconto del 40% sul biglietto, Pagherai:" + risultatoSconto2.toFixed(2) + " €"

    } else{
        // console.log("Non hai diritto a nessuno sconto, Pagherai:",prezzoBiglietto.toFixed(2) + " €")

        // STAMPO A VIDEO
        outputRisultato2.innerHTML= "Non hai diritto a nessuno sconto, Pagherai: " + prezzoBiglietto.toFixed(2) + " €"
    }

    
})


