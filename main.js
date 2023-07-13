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


// Simplificacion de funcion.

// function getRandonNumber() {
//   const random = Math.random();
//   const multiplied = random * 10;
//   const rounded = Math.floor(multiplied);
//   const result = rounded + 1;
//   return result;
// }
// let number = getRandonNumber();
// console.log(number);

// SIMPLIFICACION OK --

// const getRandonNumber = () => {
//   const result = Math.floor(Math.random() * 10 + 1);
//   return result;
// }

// let number = getRandonNumber();
// console.log(number);



// Creando mi priemr carrito de compras.

let usuario = '';

let producto = '';
let codigoProducto = 0;
let nombreProducto = '';
let cantidadProducto = 0;
let precioProducto = 0;
let listaProductos = [];

let subTotal = 0;
let cantidadTotal = 0;
let precioFinal = 0;

let metodoPago = '';
let descuento = 0.85;
let cantidadCuotas = 0;

let seguirComprando = true;

// Para comenzar le damos la bienvenida al usuario y le pedimos que ingrese su nombre para identificarlo.
usuario = prompt(`- ¡Bienvenido/a! Para comenzar por favor ingrese un nombre de usuario:`);

do {
    // Le pido al usuario que ingrese le producto deseado por medio de un numero de codigo.
    producto = parseInt(prompt(`
    - ¡Perfecto ${usuario}! Para agregar algun producto, seleccionelo en base a su numero de codigo.
    1 - Arroz.
    2 - Leche.
    3 - Azucar.
    4 - Huevos.
    5 - Dulce de Leche.`));

    // Switch para guardar un valor en la variable "producto"
    switch (producto) {
        case 1:
            // Codigo: 1 (Arroz) - $450
            nombreProducto = 'Arroz';
            precioProducto = 450;
            break;

        case 2:
            // Codigo: 2 (Leche) - $390
            nombreProducto = 'Leche';
            precioProducto = 390;
            break;

        case 3:
            // Codigo 3: (Azucar) - $520
            nombreProducto = 'Azucar';
            precioProducto = 520;
            break;

        case 4:
            // Codigo 4: (Huevos) - $1400
            nombreProducto = 'Huevos';
            precioProducto = 1400;
            break;

        case 5:
            // Codigo 5: (Dulce de Leche) - $630
            nombreProducto = 'Dulce de Leche';
            precioProducto = 630;
            break;

        default:
            alert(`- El codigo ingresado no es valido, por favor ingresar nuevamente.`);
            continue;
    };

    // Pedimos al usuario que ingrese la cantidad del producto requerido y validamos dicho valor.
    cantidadProducto = parseInt(prompt(`- Ingrese la cantidad de ${nombreProducto} que desea:`));

    while (isNaN(cantidadProducto) || cantidadProducto <= 0) {
        alert(`- Por favor ingrese una cantidad valida.`);
        cantidadProducto = parseInt(prompt(`- Ingrese la cantidad de ${nombreProducto} que desea:`));
    };

    // Le informamos al usuario el valor del producto agregado al carrito y a su vez el precio total actual de su compra.
    subTotal = precioProducto * cantidadProducto;
    cantidadTotal += cantidadProducto;
    precioFinal += subTotal;

    seguirComprando = confirm(`
    - Has agregado ${cantidadProducto} unidades de ${nombreProducto} por $${subTotal}.
    - Total actual: $${precioFinal}


    - ¿Desea seguir comprando?
    `);

    if (!seguirComprando) {
        metodoPago = prompt(`
        - Has comprado una cantidad total de ${cantidadTotal} productos
        - Tu subtotal es de $${precioFinal}.
        
        - A continuacion elija el metodo de pago.
        - Escriba "efectivo" para abonar con un 15% de descuento.
        - Escriba "tdebito" para abonar el precio actual.
        - Escriba "tcredito" para abonar hasta en 3 cuotas con un 10% de recargo. 
        `).toUpperCase();

        while (metodoPago !== 'EFECTIVO' && metodoPago !== 'TDEBITO' && metodoPago !== 'TCREDITO') {

            metodoPago = prompt(`
            - Por favor ingresar un metodo de pago valido.
            
            - Escriba "efectivo" para abonar con un 15% de descuento.
            - Escriba "tdebito" para abonar el precio actual.
            - Escriba "tcredito" para abonar hasta en 3 cuotas con un 10% de recargo.
            `).toUpperCase();
        }

        if (metodoPago === 'EFECTIVO') {
            precioFinal = `$${precioFinal * descuento}`;
        } else if (metodoPago === 'TDEBITO') {
            precioFinal = precioFinal;
        } else if (metodoPago === 'TCREDITO') {
            cantidadCuotas = parseInt(prompt(`
            - Seleccione la cantidad de cuotas: 

            - 1 Cuota = 1 pago de $${precioFinal * 1.10}.
            - 2 Cuotas = 2 pagos de $${(precioFinal * 1.10) / 2}.
            - 3 Cuotas = 3 pagos de $${(precioFinal * 1.10) / 3}.
            `));

            while (isNaN(cantidadCuotas) || cantidadCuotas < 1 || cantidadCuotas > 3) {
                alert(`- El nro de cuota/s es incorrecto. Ingreselo nuevamente: `);
                cantidadCuotas = parseInt(prompt(`
                - Seleccione la cantidad de cuotas: 

                - 1 Cuota = 1 pago de $${precioFinal * 1.10}.
                - 2 Cuotas = 2 pagos de $${(precioFinal * 1.10) / 2}.
                - 3 Cuotas = 3 pagos de $${(precioFinal * 1.10) / 3}.
                `));
            }

            if (cantidadCuotas === 1) {
                precioFinal = `$ ${precioFinal * 1.10}`;
            } else if (cantidadCuotas === 2) {
                precioFinal = `2 pagos de $${(precioFinal * 1.10) / 2}`;
            } else if (cantidadCuotas === 3) {
                precioFinal = `3 pagos de $${(precioFinal * 1.10) / 3}`;
            }
            
        }

        alert(`
        - Bueno ${usuario}, ¡Hasta aqui hemos llegado!
        - Ya puedes dirigirte a la caja para completar tu compra.
        - El monto total a abonar es de ${precioFinal}.

        - ¡Muchas gracias por confiar en nosotros!
        - ¡Aguardamos con ansias tu regreso!
        `)
    }    
} while (seguirComprando);