var Korisnik = {
    ime: "Darko",
    prezime: "Kuzmanović",
    novac: "1200 RSD",
    printKorisnik: function () {
        return console.log("Ime: ${ime} Prezime: ${prezime} Novac: ${novac}");
    }
}

Korisnik.printKorisnik();


function myTest() {
    console.log("Testiram x = " + x);
    console.log("Testiram x = ${x}");
  
    console.log("Novac: ${Korisnik.novac}");
  
  }
  