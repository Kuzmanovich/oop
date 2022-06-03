var Korisnik = {
    ime: "Darko",
    prezime: "Kuzmanović",
    novac: "1200 RSD",
    printKorisnik: function () {
        return console.log(Korisnik);
    }
}

Korisnik.printKorisnik();


function myTest() {
    console.log("Testiram x = " + x);
    console.log("Testiram x = ${x}");

    console.log("Novac: ${Korisnik.novac}");

}

var div = document.createElement("div");
div.id = "div_id";
div.className = "div_class";
div.style = "background-color: green; ";
div.style.width = "100px";
div.style.height = "100px";
div.innerHTML = Korisnik.ime + " " + Korisnik.prezime;

var profileDiv = document.getElementById("profile");

profileDiv.appendChild(div);
