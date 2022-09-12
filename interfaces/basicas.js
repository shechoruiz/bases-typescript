"use strict";
// Los types y las interfaces son muy similares y, en muchos casos, puede elegir entre ellos libremente. Casi todas las funciones de una interfaz están disponibles en types, la distinción clave es que un type no se puede volver a abrir para agregar nuevas propiedades frente a una interfaz que siempre es extensible.
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: [1, 2],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        },
    };
})();
