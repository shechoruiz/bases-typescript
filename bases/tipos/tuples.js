"use strict";
(() => {
    // Las tuplas permiten definir el orden en que van a estar asignados los tipos dentro de un arreglo
    const hero = ['Dr Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();