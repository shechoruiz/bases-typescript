// Una función generica es una función que recibe cualquier tipo de argumento

import { Villain } from "./interfaces";

const printObject = (argument: any) => {
  console.log(argument);
};

printObject(123);
printObject(new Date());
printObject({ a: 1, b: 2, c: 3 });
printObject([1, 2, 3, 4, 5, 6, 7, 8, 9]);
printObject("Hola mundo");

function genericFunction(argument: any) {
  return argument;
}

// console.log(genericFunction(3.1416).toFixed(2));
// console.log(genericFunction("Hola mundo").toFixed(2));

// Hasta este momento, la función inmediatamente declarada arroja error dado que al ser de tipo any y alterar su salida, typescript no infiere correctamente el tipo de datos que sale y los metodos asociados a este. Siendo así,la manera correcta de trabajar con un generico es la siguente:

function trueGenericFunction<T>(argument: T): T {
  return argument;
}

// Se declaran la combinación mayor menor y una letra/palabra respetando las palabras reservadas del lenguaje. Normalmente, se ve la letra T, pero acepta cualquiera. Adicional, se pueden tener varios tipos genericos: <T,Y,Z>

const saludo: string = "Hola Sergio";

console.log(trueGenericFunction(3.1416).toFixed(2));
console.log(trueGenericFunction(saludo).toUpperCase());
console.log(trueGenericFunction(new Date()).getDate());

// Ejemplo con una función flecha

const genericFunctionArrow = <T>(argument: T) => argument;

// #######################################
// ejemplo de función generica

const deadpool = {
  name: "Deadpool",
  realName: "Wade Wilson",
  dangerLevel: 130,
};

console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);
