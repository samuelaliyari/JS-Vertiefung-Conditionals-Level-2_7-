const auswahl = document.body.querySelector("#mylist");
const outputBoxProdukt = document.body.querySelector(".boxMasse td:nth-of-type(1) b");
const outputBoxMasse = document.body.querySelector("#masse");
console.log(outputBoxProdukt)
function showtxt() {
    event.preventDefault();

    switch (auswahl.value) {
        case "0":
            outputBoxProdukt.innerHTML = "<b>Brief und Postkarte</b> <br>"
            outputBoxMasse.innerHTML ="L: 10 - 23,5 cm <br> B: 7 - 12,5 cm  H: bis 1 cm" ;
            break;
        case "1":
            outputBoxProdukt.innerHTML = "<b>DHL Paket 2 kg</b> <br>"
            outputBoxMasse.innerHTML =" bis 60 x 30 x 15 cm" ;
            break;
        case "2":
            outputBoxProdukt.innerHTML = "<b>DHL Paket 5 kg</b> <br>"
            outputBoxMasse.innerHTML =" bis 120 x 60 x 60 cm" ;
            break;
        case "3":
            outputBoxProdukt.innerHTML = "<b>DHL Paket 10 kg</b> <br>"
            outputBoxMasse.innerHTML =" bis 120 x 60 x 60 cm" ;
            break;
    
        default:
            outputBoxProdukt.innerHTML = "<b>Wähle bitte einen Produkt!</b>"
            break;
    }
}