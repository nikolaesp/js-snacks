//Snack 1 inserisci 2 numeri e puoi compara con if
document.writeln("----------Snack 1-----------");
let num1 = parseInt(prompt("Inserisci numero 1: "));
let num2 = parseInt(prompt("Inserisci numero 2: "));
let numck1 = isNaN(num1);
let numck2 = isNaN(num2);
if(!numck1 && !numck2){

if (num1 < num2) {
    document.writeln("Primo numero e piu grande: "+num2);
}
if (num2 < num1) {
    document.writeln("Secondo numero e piu grande: "+num1);
}
else {
    if(num1==num2)
    document.writeln("Sonno iguali numeri: "+num1+"="+num2);
}
}else{
    document.writeln("Non hai inscerito numero!");
}

//Snack 2 insericsi 2 parole stampa prima la corta puoi altra piu lunga
document.writeln("----------Snack 2-----------");
let parola1 = prompt("Inserisci parola 1:");
let parola2 = prompt("Inserisci parola 2:");
if(parola1.length > parola2.length){ //se prima parola e pui lunga stampa primo secodna parola poi prima se no contrario
    document.write(parola2+" "+parola1);
}else{
    document.write(parola1+" "+parola2);
}



document.writeln("----------Snack 3-----------");