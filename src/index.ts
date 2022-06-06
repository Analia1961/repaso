// Clase 13 - Lunes 30 de mayo de 2022
//Ejercicios de Repaso (NO OBLIGATORIOS)
//Ejercicio 2:
/*Una materia de la carrera de Ingeniería de Sistemas 
tiene 30 alumnos, divididos en 3 comisiones. 
Estos arreglos contienen las notas finales de los alumnos 
en cada comisión :
comisionA = [8, 5, 7, 10, 9, 2, 4, 8, 6, 8]
comisionB = [3, 6, 8, 5, 4, 7, 7, 4, 6, 8]
comisionC = [7, 6, 9, 8, 9, 8, 5, 7, 10, 9]

1. Crear una función que devuelva el mayor promedio 
y a qué comisión corresponde.
2. Crear una función que devuelva el menor promedio 
y a qué comisión corresponde.
3. Teniendo en cuenta que la materia se aprueba con 6, 
crear una función que devuelva la cantidad de desaprobados 
en una comisión, mostrar el resultado para cada comisión
4. Crear una función que devuelva la menor nota de una 
comisión, mostrar el resultado para cada comisión.*/

//------------- ✿◕‿◕✿----------------

let comisionA: number[] = [8, 5, 7, 10, 9, 2, 4, 8, 6, 8];
let comisionB: number[] = [3, 6, 8, 5, 4, 7, 7, 4, 6, 8];
let comisionC: number[] = [7, 6, 9, 8, 9, 8, 5, 7, 10, 9];
let indice: number;

/*1. Crear una función que devuelva el mayor promedio 
y a qué comisión corresponde.*/

function obtenerPromedio(notas: number[]): number {
  let suma: number = 0;
  let promedio: number = notas.length;
  for (indice = 0; indice < notas.length; indice++) suma += notas[indice];
  return suma / promedio;
}

//------------- ✿◕‿◕✿----------------
//------------- ✿◕‿◕✿----------------

//Mañana analizaremos este código, correspondiente al 2º ejercicio de repaso:

let promedioA: number = obtenerPromedio(comisionA);
let promedioB: number = obtenerPromedio(comisionB);
let promedioC: number = obtenerPromedio(comisionC);

let texto1: string = "El Mayor Promedio es: ";
let texto2: string = " correspondiente a la comisión ";

if (promedioA === promedioB) {
  if (promedioA > promedioC) {
    console.log(texto1 + promedioA + texto2 + "A y a la comisión B");
  } else if (promedioA === promedioC) {
    console.log("Las 3 comisiones tienen el mismo promedio: " + promedioA);
  } else {
    console.log(texto1 + promedioA + texto2 + "C");
  }
} else if (promedioA > promedioB) {
  if (promedioA > promedioC) {
    console.log(texto1 + promedioA + texto2 + "A");
  } else if (promedioA === promedioC) {
    console.log(texto1 + promedioA + texto2 + "A y a la comisión C");
  } else {
    console.log(texto1 + promedioC + texto2 + "C");
  }
} else {
  if (promedioB > promedioC) {
    console.log(texto1 + promedioB + texto2 + "B");
  } else if (promedioB === promedioC) {
    console.log(texto1 + promedioB + texto2 + "B y a la comisión C");
  } else {
    console.log(texto1 + promedioC + texto2 + "C");
  }
}

/*
//------------- ✿◕‿◕✿----------------
//------------- ✿◕‿◕✿----------------
// CODIGO ENVIADO POR LA ALUMNA GISELA GENTILE - Funciona perfecto!
//------------- ✿◕‿◕✿----------------
let dimension: number = Number(prompt("Ingrese la dimension del arreglo..."));

let primerArreglo: number[] = new Array(dimension);
let segundoArreglo: number[] = new Array(dimension);
let tercerArreglo: number[] = new Array(dimension);
let indice: number;

let cargarArreglo = (
  arreglo: number[],
  cantidad: number): number[] => {
  for (indice = 0; indice < cantidad; indice++) {
    arreglo[indice] = Number(prompt("Ingrese el valor de la posición$[indice]"));
  }

  return arreglo;
};

let sumarArreglos = (
  arreglo1: number[],
  arreglo2: number[],
  arreglo3: number[],
  cantidad: number
): number[] => {
  for (indice = 0; indice < cantidad; indice++) {
    arreglo3[indice] = arreglo1[indice] + arreglo2[indice];
  }

  return arreglo3;
};

cargarArreglo(primerArreglo, dimension);
cargarArreglo(segundoArreglo, dimension);
console.log (sumarArreglos(primerArreglo, segundoArreglo, tercerArreglo, dimension));
*/

//------------- ✿◕‿◕✿----------------
// EL MÍO EMPIEZA ACÁ Y NO ME SALE :-(
//------------- ✿◕‿◕✿----------------

// CLASE 9 - Lunes 16 de mayo de 2022
// Estructuras de Datos y Métodos
// Ejercicio: Sumar Arreglos (con Métodos)

/*
• Sumar los elementos de cada una de las posiciones
de dos vectores y guardar el resultado en otro vector
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario

Ejemplo:
v1 = 1, 3, 7, 9, 9, 5
v2 = 6, 9, 2, 5, 9, 4
vSuma = 7, 12, 9, 14, 18, 9
*/

/*

let v1: number[] = new Array(6);
let v2: number[] = new Array(6);
let vSuma: number[] = new Array(6);
let indice: number;

//funcion cargar vector v1 y vector v2
function cargarVector = (v: number[], cantidad: number): number[] => {
  for (indice = 0; indice < 6; indice++) {
    v[indice] = Number(prompt("Ingrese el valor de la posición " + indice + ":"));
  }
  return cargarVector
}

//funcion mostrar vector
function mostrarVector(v: number[], cantidad: number): number[] => {
  for (indice = 0; indice < 6; indice++) {
    console.log(v[indice] + "");
  }
  return mostrarVector
}

// funcion sumar vector v1 y vector v2
function sumarVector(v1: number[], v2: number[], vSuma: number[], 
  cantidad:number): number[] => {
  for (indice = 0; indice < 6; indice++) {
    vSuma[indice] = v1[indice] + v2[indice];
  }
  return sumarVector
}
console.log("Cargar v1");
cargarVector(v1, 6);
console.log("Cargar v2");
cargarVector(v2, 6);
sumarVector(v1, v2, vSuma, 6);
console.log("Valores de v1");
mostrarVector(v1, 6);
console.log("Valores de v2");
mostrarVector(v2, 6);
console.log("Valores de vSuma");
mostrarVector(vSuma, 6);

*/

//------------- ✿◕‿◕✿----------------
//HASTA ACÁ
//------------- ✿◕‿◕✿----------------

//CLASE 7 - Lunes 9 de mayo de 2022
//Estructura de Datos - Arreglos

// Ejercicio 1: Sumar Dos Arreglos

/* • Sumar los elementos de cada una de las posiciones de dos arreglos y guardar el resultado en otro arreglo.
• El arreglo tiene dimensión 6 y los números de los dos vectores los carga el usuario. */

/*  Ejemplo:
v1 = 1, 3, 7, 9, 9, 5
v2 = 6, 9, 2, 5, 9, 4
vSuma = 7, 12, 9, 14, 18, 9
*/
/*
let v1: number[] = new Array(6);
let v2: number[] = new Array(6);
let vSuma: number[] = new Array(6);
let indice: number;
//Cargo el vector v1
for (indice = 0; indice < 6; indice++) {
  v1[indice] = Number(prompt("Ingrese el valor de v1[" + indice + "]"));
}
//Cargo el vector v2
for (indice = 0; indice < 6; indice++) {
  v2[indice] = Number(prompt("Ingrese el valor de v2[" + indice + "]"));
}
//Sumo los valores y muestro
for (indice = 0; indice < 6; indice++) {
  vSuma[indice] = v1[indice] + v2[indice];
  console.log("vSuma[ " + indice + "]= " + vSuma[indice]);
}
*/

//------------- ✿◕‿◕✿----------------

//------------- ✿◕‿◕✿----------------

/*Hoy comenzaremos con el ejercicio práctico de la diapositiva Nº52 
(de PROG - 7. Repaso.pdf) con una sutil diferencia en el enunciado; 
es decir, cambiaremos levemente el requerimiento 
y adaptaremos el código al cambio solicitado.

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
*/

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
