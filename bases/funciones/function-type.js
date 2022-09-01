"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const savetheWorld = () => `El mundo esta salvado`;
    // let myFunction: Function; // Con este defino que solo acepto funciones
    // let myFunction: (x: number, y: number) => number; // Con este defino que acepte funciones con x argumentos y que retorne un numero
    // let myFunction: (z: string) => string; // Con este defino que acepte funciones con x argumentos y que retorne un string
    let myFunction; // Con este defino que acepte funciones con x argumentos y que retorne un string
    // myFunction = 10;
    // console.log(myFunction);
    // myFunction = addNumbers;
    // console.log(myFunction(1, 2));
    // myFunction = greet;
    // console.log(myFunction("Sergio"));
    myFunction = savetheWorld;
    console.log(myFunction());
})();
