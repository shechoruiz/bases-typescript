"use strict";
(() => {
    let avenger;
    let exists;
    let power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 150.456789;
    console.log(avenger.toFixed(2));
    // Dado que se pueden presentar estas asignaciones de tipo any, podemos hacer uso de ayudas llamadas casteos que buscan que tratemos una valor con tu tipo particular
    avenger = 'Hulk';
    console.log(avenger.charAt(0));
    avenger = 150.876543;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
