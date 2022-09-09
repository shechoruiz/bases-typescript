"use strict";
// si la clase que extiende no tiene un constructor, typescript usa el constructor de la clase padre para iniciarlo
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Constructor Avenger llamado!");
        }
        // Protected permite acceder a metodos y propiedades dentro de clases que extienden de otras superiores
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor Xmen llamado"');
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
        // Getters y Setters desde afuera parecen propiedades normales, pero internamente son como un metodo. Adicional, permiten la definición de una lógica previa dependiendo de la necesidad
        get fullName() {
            // siempre retornan algo
            return `${this.name} - ${this.realName}`;
        }
        // Un setter es lo mismo: Un metodo que recibe un UNICO valor y establece algo, pero no retorna nada
        set value(name) {
            if (name.length < 3) {
                throw new Error("El nombre debe ser mayor de 3 letras");
            }
            this.name = name;
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan", true);
    console.log(wolverine);
    wolverine.getFullNameDesdeXmen();
    // Este getter no hace falta ejecutarlo (Escribir los parentesis). Simplemente se mandan a llamar
    console.log(wolverine.fullName);
    // Sucede lo mismo con el setter
    wolverine.name = "Sergio";
    console.log(wolverine.fullName);
})();
