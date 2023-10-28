const km = Number(prompt("Quanti chilometri?"));
if (! isNaN(km)){
    let prezzo_biglietto = 0.21*km;

    const eta = Number(prompt("Quanti anni hai?"));
    if (! isNaN(eta)){

        let messaggio_sconto = "";
        if (eta<18) {
            prezzo_biglietto = prezzo_biglietto*0.8;
            messaggio_sconto = "Sconto minorenni."
        } else if (eta>65) {
            prezzo_biglietto = prezzo_biglietto*0.6;
            messaggio_sconto = "Sconto anziani."
        }
        
        prezzo_biglietto = prezzo_biglietto.toFixed(2);
        
        document.getElementById("prezzo").innerHTML= messaggio_sconto + "Il prezzo del biglietto è €" + prezzo_biglietto;
    } else {
        console.log("Non hai inserito un'età corretta");
    }
    
} else {
    console.log("Non hai inserito un numero di chilometri valido");
}
