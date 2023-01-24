console.log("test");

/* 
Frage

toLowerCase   = alles klein geschrieben
toUpperCase     = alles groß geschrieben

const text = "Sam is going to codingschool";

in Variablen

        replace in Variable mit school anstatt codingschool
        dann wörter Suchen     
            Positionen suchen länge suchen 
            dann verändern in groß oder klein geschrieben

in html
    1. SAM IS GOING TO SCHOOL
    2. sam is going to school
    3. SAM is going to SCHOOL
    4. sam IS GOING TO school
    5. Sam Is Going To School

*/

const text = "Sam is going to codingschool";
console.log(text);

let school = "school";

let neueText = text.replace("codingschool", school);
console.log(neueText);


// ab jetzt mit       neueText      weiter
let sam = "Sam";
let is = "is";
let going = "going";
let to = "to";
//let school    is oben
let neueTextKlein = "";


// 2. 
function klein() {
    if (neueText === "Sam is going to school") {

        neueTextKlein = neueText.toLowerCase();
        console.log(neueTextKlein);
        document.write(neueTextKlein + " " + "</br>");
    }

    else {
        console.log("Fehler!!!");
        document.write("Fehler!!! " + "</br>");
    }
}

klein();
console.log(neueTextKlein);


// 1. 
let neueTextGroß = "";

function groß() {
    if (neueTextKlein != neueText) {
        console.log(neueTextKlein + " " + neueText);

        neueTextGroß = neueTextKlein.toUpperCase();
        console.log(neueTextGroß);
        document.write(neueTextGroß + " " + "</br>");

    }
}

groß();

// 3.
function samGroßMachen(x, y) {          // x = ist zustand    y = soll zustand
    let sam = x;
    let samSoll = y;

    if (sam === samSoll) {
        let samIndex = neueText.indexOf(sam);
        console.log(samIndex);          // 0

        let samLänge = sam.length;
        console.log(samLänge);          // 3

        let samGroß = sam.toUpperCase();
        console.log(samGroß);          // SAM 

        let samErsetzenMitSAM = neueText.replace(sam, samGroß);
        console.log(samErsetzenMitSAM);
    }
}

function zuPunkt3() {
samGroßMachen(sam,"Sam");
samGroßMachen(school,"school");
}

zuPunkt3();

let textZuPunkt3 = neueText.replace(sam, "SAM").replace(school, "SCHOOL");
console.log(textZuPunkt3);
document.write(textZuPunkt3 + " " + "</br>");


// 4.
let textZuPunkt4 = neueText.replace(is, "IS").replace(going, "GOING").replace(to, "TO");
console.log(textZuPunkt4);
document.write(textZuPunkt4 + " " + "</br>");


// 5. 
function zuPunkt5(){
    if (sam === "Sam" && is === "is" && going === "going" && to === "to" && school === "school" ){
        document.write("Sam Is Going To School " + "</br>");
    }
}

zuPunkt5();