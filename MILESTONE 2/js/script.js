// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

// Dom accesso element input
const form = document.getElementById("set-form")

// Output
const outputRisultato1= document.getElementById("outputRisultato1")






// evento al form per non far ricarica la pagina
form.addEventListener("submit", function(event){
    
    // Dom accesso element input Devo usarli nel form se devo dare un value altrimenti no
    const eta = document.getElementById("input2").value
    const km = document.getElementById("input1").value
    const nomeCognome = document.getElementById("input3").value
    
    
    event.preventDefault();  //Gli diciamo di bloccare la ricarica della pagina che avviene con il form 



    // - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    let prezzoBiglietto = (0.21 * km)
    // console.log(prezzoBiglietto.toFixed(2) + " €")

    
    // // Prezzo scontato 20% minorenni
    const prezzoScontato1= prezzoBiglietto * 0.20;
    const risultatoSconto1=prezzoBiglietto - prezzoScontato1;

    // // Prezzo scontato 40% minorenni
    const prezzoScontato2= prezzoBiglietto * 0.40;
    const risultatoSconto2=prezzoBiglietto - prezzoScontato2;

    
    // Imposto condizione 
    if(eta <= 18){
        // console.log("Sei minorenne hai diritto solo al 20% di sconto sul biglietto, Pagherai:",risultatoSconto1.toFixed(2) + " €")
        // STAMPO A VIDEO
        outputRisultato1.innerHTML= "Sei minorenne hai diritto solo al 20% di sconto sul biglietto, Pagherai:" + risultatoSconto1.toFixed(2) + " €"
    
    }else if(eta >= 65){
        // console.log("Hai superato i 65 anni, hai diritto a uno sconto del 40% sul biglietto, Pagherai:",risultatoSconto2.toFixed(2) + " €")

        // STAMPO A VIDEO
        outputRisultato1.innerHTML= "Hai superato i 65 anni, hai diritto a uno sconto del 40% sul biglietto, Pagherai:" + risultatoSconto2.toFixed(2) + " €"

    } else{
        // console.log("Non hai diritto a nessuno sconto, Pagherai:",prezzoBiglietto.toFixed(2) + " €")

        // STAMPO A VIDEO
        outputRisultato1.innerHTML= "Non hai diritto a nessuno sconto, Pagherai: " + prezzoBiglietto.toFixed(2) + " €"
    }

    
})


