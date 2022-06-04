/*Hoy comenzaremos con el ejercicio práctico de la diapositiva Nº52 
(de PROG - 7. Repaso.pdf) con una sutil diferencia en el enunciado; 
es decir, cambiaremos levemente el requerimiento 
y adaptaremos el código al cambio solicitado.*/

// 2-Recibe un texto y lo convierte en un nombre de variable estilo CamelCase
function convertirACamelCase(texto: string): string {
  let textoLocal: string = texto.toLowerCase().trim();
  let vbleCamelCase: string = "";
  let indice: number = 0;
  while (indice < textoLocal.length) {
    if (textoLocal[indice] === " ") {
      vbleCamelCase += textoLocal[indice + 1].toUpperCase();
      indice += 2;
    } else {
      vbleCamelCase += textoLocal[indice];
      indice++;
    }
  }
  return vbleCamelCase;
}
let texto: string = prompt("Ingrese el texto a convertir");
console.log("Texto original: " + texto);
console.log("Texto camelCase: " + convertirACamelCase(texto));

//------------- ✿◕‿◕✿----------------

/* • Modifique el código del Ejercicio Identificación mes 
utilizando arreglos
Longitud = Length= 12 

let miArreglo: string[] = new Array(12);

miArreglo[0] = "Enero";
miArreglo[1] = "Febrero";
miArreglo[2] = "Marzo";
miArreglo[3] = "Abril";
miArreglo[4] = "Mayo";
miArreglo[5] = "Junio";
miArreglo[6] = "Julio";
miArreglo[7] = "Agosto";
miArreglo[8] = "Septiembre";
miArreglo[9] = "Octubre";
miArreglo[10] = "Noviembre";
miArreglo[11] = "Diciembre";

console.log(miArreglo);*/

/*--------------------------
Estructuras de Datos – Arreglos
//Ejercicio – Arreglo de Números - Código
// Algoritmo ArregloNumeros
let num: number[] = new Array(7);
let indice: number = 0;
num[0] = 20;
num[1] = 14;
num[2] = 8;
num[3] = 0;
num[4] = 5;
num[5] = 19;
num[6] = 24;
while (indice < 7) {
  console.log("El número en la posición ", indice, " es ", num[indice]);
  indice++;
}*/

/*----------------------------ejemplo 2

let mensaje: string = "Hola lGloba!!";
ambitoVariables();

//ambitoVariables();

function ambitoVariables() {
  leeVariable();
}
function leeVariable() {
  let mensaje: string;
  mensaje = "Hola Mundo!!";
  console.log(mensaje);
}*/

/*----------------------------ejemplo 1

let mensaje: string = "Hola Global!!";
ambitoVariables();

//Ámbito de las Variables - Ejemplos
function ambitoVariables() {
  let mensaje: string;
  mensaje = "Hola Mundo!!";
  console.log(mensaje);
}*/

//------------- ✿◕‿◕✿----------------fin
