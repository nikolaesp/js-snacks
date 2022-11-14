//Snack 1 inserisci 2 numeri e puoi compara con if
let num1 = parseInt(prompt(`Inserisci numero 1: `));
let num2 = parseInt(prompt(`Inserisci numero 2: `));
if (num1 < num2) {
    document.write(`Primo numero e piu grande: ${num2}`);
}
if (num2 < num1) {
    document.write(`Secondo numero e piu grande: ${num1}`);
}
else {
    if(num1==num2)
    document.write(`Sonno iguali numeri: ${num1}=${num2}`);
}