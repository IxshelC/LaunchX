
console.log("\n************* Variables *************\n")
var numero1;
numero1 = 2;

var numero2;
numero2 = 4;

console.log("Numero 1:" + numero1 + "Numero 2:" + numero2);

console.log("\n *********** Cadenas ************ \n")
var frase1;
frase1 = "Ejemplo Comillas Dobles";
var frase2;
frase2 = 'Ejemplo Comillas Simples';
var frase3;
frase3 =  `Ejemplo Comillas ${frase1} Invertidas`
console.log(frase1 + "\n" + frase2 + "\n" + frase3)


console.log("\n ************* OPERADORES LÓGICOS ************* \n");
console.log(numero1 != numero2);

console.log("\n ************* OPERADOR AND ******************\n");
console.log(true && true);

console.log("\n ************* OPERADOR OR *******************\n");
console.log(false || false);



console.log("\n ************* ARREGLOS *******************\n");
let listaDeNumeros = [2, 3, 4, 5, 6, 7];

console.log(listaDeNumeros[0]);

/*Se agregaron esos dos números con PUSH */
listaDeNumeros.push(16);
listaDeNumeros.push(03);

console.log(listaDeNumeros);
console.log(listaDeNumeros.length);

let listaDePalabras = ["Explorer", "Nave", "Planeta", "Galaxia","Calamar"];
console.log(listaDePalabras);
console.log(listaDePalabras.length);



let palabra = "Explorer";
console.log(palabra[2]);
console.log(palabra.length);


console.log("\n ~~~~~~~~~~~~ OBJETOS ~~~~~~~~~~~~~~~~~~\n");

let explorer = {
    nombre: "Nombre:",
    email: "email@innova.com",
    numR: 121312,
    mision: "katas",
    proyectos: ["ProyectoIntro", "HTML", "CSS", "JS"],
    proper: {
        escolar: "tareas",
        profesional: "trabajo",
        personal: "negocio",
    }

};

console.log(explorer);

console.log(explorer.email);
console.log(explorer.proper);
console.log(explorer.proper.personal);