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

function text(){
    document.getElementById("paragraf").innerHTML = `${citati.dt.map(function(citat){return citat.quote })}`;
}

function createElements(citati){
    var DrugiDiv = document.getElementById("drugi");
    var div1 = document.createElement("div");
    div1.style = "display: inline";
    div1.innerHTML = `${citati.dt.map(function(citat){return ` <p> ${citat.id + " " + citat.quote + " " + citat.author} </p> <br>` }).join('')}`;
    DrugiDiv.appendChild(div1);
}

function addProduct(string){

    var div = document.getElementById("main");
    div.innerHTML += `<div class="proizvod"> <p>${string}</p> <img src="fish_product.jpg" width="100px" height="100px"></img> </div>`;
}
var citati = {list: "quotes", dt: [
    {
        "id": 1,
        "quote": "Life isn’t about getting and having, it’s about giving and being.",
        "author": "Kevin Kruse"
    },
    {
        "id": 2,
        "quote": "Whatever the mind of man can conceive and believe, it can achieve.",
        "author": "Napoleon Hill"
    },
    {
        "id": 3,
        "quote": "Strive not to be a success, but rather to be of value.",
        "author": "Albert Einstein"
    },
    {
        "id": 4,
        "quote": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
        "author": "Robert Frost"
    },
    {
        "id": 5,
        "quote": "I attribute my success to this: I never gave or took any excuse.",
        "author": "Florence Nightingale"
    },
    {
        "id": 6,
        "quote": "You miss 100% of the shots you don’t take.",
        "author": "Wayne Gretzky"
    },
    {
        "id": 7,
        "quote": "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
        "author": "Michael Jordan"
    },
    {
        "id": 8,
        "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.",
        "author": "Amelia Earhart"
    }
]
}

createElements(citati);