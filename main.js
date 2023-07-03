/* PRACTICA 1 -
Escribe una función que tome una cadena como parámetro y devuelva la longitud de la cadena.
*/

// let leerCaracteres = (texto) => {
//     for (let i = 1; i <= texto.length; i++){
//         if (i === texto.length){
//             alert(`El texto indicado,"${texto}" tiene ${i} caracteres.`);
//         }
//     }  
// }

// let texto = prompt(`Ingrese el texto a verificar:`);
// leerCaracteres(texto);
// ----





/* PRACTICA 2 -
Escribe una función que tome un número como parámetro y devuelva "par" si el número es par, o "impar" si es impar.
*/

// const esPar = (n) => {
//     if (n % 2 === 0) {
//         alert(`El nùmero ${n} es PAR`)
//     } else {
//         alert(`El nùmero ${n} es IMPAR`)
//     }
// }

// let n = parseInt(prompt(`Ingrese el nùmero a evaluar:`));
// esPar(n);
// ----





/* PRACTICA 3 -
Escribe una función que tome un arreglo de números como parámetro y devuelva el número más grande en el arreglo.
*/

// let obtenerNumeroMasGrande = (numeros) => {
//     let numeroMasGrande = numeros[0];

//     for (let i = 1; i < numeros.length; i++){

//         if (numeros[i] > numeroMasGrande){
//             numeroMasGrande = numeros[i];            
//         }
//     }
//     return numeroMasGrande;
// }

// let numeros = [5, 10, 1, 8, 30, 24];
// console.log(obtenerNumeroMasGrande(numeros));




// PRACTICA ? - AGENDA DE CONTACTOS.






// PRACTICA ? - CARTERA VIRTUAL (PONELE xD)
// Quedo basica, asique la modifique antes de entregarla. 
// Funciona, no lo puedo creer c':

// let saldo = Number(prompt('Para comenzar, ingrese su saldo: \nPara finalizar, escriba "exit".'));
// let valorProducto = 0;


// while (saldo >= 0) {
//     if (saldo == 0) {
//         alert(`¡Se ha agotado su saldo! Cargue mas para continuar.`);
//         break;
//     }

//     valorProducto = prompt(`Su saldo es de $${saldo}.\nIngrese el valor del producto:`);
//     if (valorProducto === 'exit') {
//         break;
//     }

//     if (valorProducto <= saldo) {
//         saldo = saldo - valorProducto;
//         alert(`Saldo restante: $${saldo}`);
//     } else if (valorProducto > saldo) {
//         alert(`¡Saldo insuficiente! Su saldo restante es de: $${saldo}`);
//     }    
// }



