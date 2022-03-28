

// CICLO WHILE //

console.log("++++++++++ Ciclo WHILE +++++++++++")

let numberWhile = 5;
while (numberWhile <= 20) {
    console.log(numberWhile);
    numberWhile = numberWhile + 2;
}

console.log("Aqui ya salió del while: " + numberWhile);

// CICLO DO WHILE //

console.log("++++++++++++ Ciclo DO WHILE +++++++++")

let numDoWhile = 10;
do {
    numDoWhile = numDoWhile + 2;
    console.log(numDoWhile);

} while (numDoWhile < 30);
console.log("Aqui ya salió del do while: " + numDoWhile);

// CICLO FLOR //


console.log("+++++++++++ Ciclo FOR +++++++++++++");

for (let numFor = 0; numFor <= 20; numFor = numFor + 5){
    console.log(numFor);
}
console.log("Aquí salimos del for " );