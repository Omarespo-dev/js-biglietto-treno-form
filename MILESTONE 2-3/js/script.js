// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

// Dom accesso element input
const form = document.getElementById("set-form")


// Posso usare una funzione dove ogni volta potrei invocarla, con all'interno la funzione di mathrandom
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; 
}





// evento al form per non far ricarica la pagina
form.addEventListener("submit", function(event){
    
    // Dom accesso element input Devo usarli nel form se devo dare un value altrimenti no
    
    const km = document.getElementById("input1")
    const nomeCognome = document.getElementById("input3")
    const passegero = document.getElementById("passegero")
    const fasciaEta = document.getElementById("fasciaEta")
    const kmSet = document.getElementById("kmSet")
    const cpCode = document.getElementById("cp-code")
    const costoBiglietto = document.getElementById("costoBiglietto")
    const eta = document.getElementById("input2")

    // Nome e cognome PRENDI SELETTOREE DI OUTPUT E SCRIVI DENTRO I VALORI DI INPUT
    passegero.innerHTML = nomeCognome.value

    // PRENDI SELETTOREE DI OUTPUT E SCRIVI DENTRO I VALORI DI INPUT
    kmSet.innerHTML = km.value

    // PRENDI SELETTOREE DI OUTPUT E SCRIVI DENTRO I VALORI DI INPUT
    cpCode.innerHTML = (getRandomInt(1433,6483))

    // 
    // fasciaEta.innerHTML = eta.options[eta.selectedIndex].text;
    fasciaEta.innerHTML = eta.options[eta.selectedIndex].text;


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
    if(eta.value  === "opt1" ){
        // PRENDI SELETTOREE DI OUTPUT E SCRIVI DENTRO I VALORI DI INPUT
        costoBiglietto.innerHTML =  risultatoSconto1.toFixed(2) + " €"
    }else if(eta.value === "opt3"){
        costoBiglietto.innerHTML =  risultatoSconto2.toFixed(2) + " €"
    } else {
        costoBiglietto.innerHTML = prezzoBiglietto.toFixed(2) + " €"
    }

    
})


