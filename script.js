//Snack 1 inserisci 2 numeri e puoi compara con if
document.writeln("----------Snack 1-----------");
document.write("<br>");
let num1 = parseInt(prompt("Inserisci numero 1: "));
let num2 = parseInt(prompt("Inserisci numero 2: "));
let numck1 = isNaN(num1);
let numck2 = isNaN(num2);
if (!numck1 && !numck2) {

    if (num1 < num2) {
        document.writeln("Secondo numero e piu grande: " + num2);
        document.write("<br>");
    }
    if (num2 < num1) {
        document.writeln("Primo numero e piu grande: " + num1);
        document.write("<br>");
    }
    else {
        if (num1 == num2)
            document.writeln("Sonno iguali numeri: " + num1 + "=" + num2);
        document.write("<br>");
    }
} else {
    document.writeln("Non hai inscerito numero!");
    document.write("<br>");
}

//Snack 2 insericsi 2 parole stampa prima la corta puoi altra piu lunga
document.write("<br>");
document.writeln("----------Snack 2-----------");
document.write("<br>");
document.write("<br>");
let parola1 = prompt("Inserisci parola 1:");
let parola2 = prompt("Inserisci parola 2:");
if (parola1.length > parola2.length) { //se prima parola e pui lunga stampa primo secodna parola poi prima se no contrario
    document.writeln(parola2 + " " + parola1);
    document.write("<br>");
} else {
    document.writeln(parola1 + " " + parola2);
}
document.write("<br>");

//Snack 3 Creo una lista con 10 numeri inseriti trovo za somma min max e media
document.writeln("----------Snack 3-----------");
document.write("<br>");
document.write("<br>");
let arraynum = new Array(10);
let sum = 0;
let min = Number.MAX_VALUE;
let max = Number.MIN_VALUE;
let media = 0.0;
for (let i = 0; i < 10; i++) {
    arraynum[i] = parseInt(prompt("Inserisci lista numero : "));  //inserisci numero e converta in int
    let numcheck = isNaN(arraynum[i]);                           //controla se e numero
    if (numcheck) {                                              // se non e numero stampa che non inserito numero
        document.writeln("Non inserito numero !!! elemento: " + i);
    } else {                                                    //se e numero  trova quello che se chiede
        sum += arraynum[i];                                      //somma
        if (arraynum[i] < min) {                                      //se elemento e piu picolo di minimale quello elemento e minimale
            min = arraynum[i];
        }
        if (arraynum[i] > max) {                                //se elemento e piu grande di massimale quello elemento e massimale
            max = arraynum[i];
        }
    }
}

media = sum / arraynum.length;                     //media la somma devisa con numero di element
document.writeln("Somma: " + sum + "\n Media: " + media + "\n Min :" + min + "\n Max :" + max);
document.write("<br>");
document.write("<br>");

//Snack 4 Festa di gatsbi cerca il nome  se che nella lista e stampa se poi entrare o no;
document.writeln("----------Snack 4-----------");
document.write("<br>");
document.write("<br>");

let arrayguests = ["chester", "leeches", "webster", "hornbeams", "ismays", "chrysties", "brayan", "monica", "giovanni"];
let nameguest = prompt("Il vostro nome: ");
let nome = nameguest.toLowerCase();        // fai lo nome minusculo e puoi controla della lista
let flag = false;
for (let i = 0; i < arrayguests.length; i++) {
    if (nome == arrayguests[i]) {                //se che il nome dentro la lista stampa che se po entrare se no non si po !
        flag = true;
    }
}
if (flag) {
    document.writeln("Prego " + nameguest + " puoi entrare.");
    document.write("<br>");
} else {
    document.writeln("Scusate " + nameguest + " non potete entrare.");
    document.write("<br>");
}
document.write("<br>");
document.write("<br>");
//Snack 5 Crea lista e riempi solo con numeri dispari chi le da utente 6 volte bonus: riempi un altra lista con pari numeri
document.writeln("----------Snack 5-----------");
document.write("<br>");

let arraydispari = new Array();
let arraypari = new Array();
let j = 0;
let k = 0;
for (let i = 0; i < 6; i++) {
    let numeroutente = parseInt(prompt("Inscerisci numero:" + (i + 1) + "volta :"));
    if (isNaN(numeroutente)) {
        document.writeln("Non inserito numero !!!");
        document.write("<br>");
    } else {

        if (numeroutente % 2 == 1) {
            arraydispari[j++] = numeroutente;
        } else {
            arraypari[k++] = numeroutente;
        }
    }
}
document.write("<br>");
if(arraypari.length>0){
document.writeln("Lista pari e: ");
document.write("<br>");
for (let i = 0; i < arraypari.length; i++) {
    document.writeln(arraypari[i] + " ");
}
document.write("<br>");
}
if(arraydispari.length>0){
document.writeln("Lista dispari e: ");
document.write("<br>");
for (let i = 0; i < arraydispari.length; i++) {
    document.writeln(arraydispari[i] + " ");
}
}
document.write("<br>");
document.write("<br>");

//Snack 6  inserisci 2 numeri uno per max random che po creare computer altro il numero che vuoi giocare con computer
document.writeln("----------Snack 6-----------");
document.write("<br>");
let maxrandom = parseInt(prompt("Inserisci numero massimo che po creare computer: "));
let numutente = parseInt(prompt("Inserisci numero per giocare con computer: "));

if(isNaN(maxrandom) && isNaN(numutente)){
    document.writeln("Non inserito numero !!!");
}

let x = Math.floor((Math.random() * maxrandom) + 0); // numero random

if(x == numutente){
    document.writeln("Hai Vinto !!!");
    document.write("<br>");
}else{
    document.writeln("Hai Perso !!!");
    document.write("<br>");
}