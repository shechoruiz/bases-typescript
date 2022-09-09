"use strict";
// Una propiedad o metodo private solo puede ser usado dentro de su clase. las propiedades o metodos publicos pueden ser accedidos por fuera de esta clase.
(() => {
    class Avenger {
        // constructor(name: string, team: string, realName?: string) {
        //   this.name = name;
        //   this.team = team;
        //   this.realName = realName;
        // }
        // Forma corta para asignar propiedades
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getAvgAge() {
            return this.name;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    // Forma larga para asignar propiedades
    // private name: string;
    // private team: string;
    // public realName?: string;
    Avenger.avgAge = 35;
    const antman = new Avenger("Antman", "Captain", "Scott Lang");
    console.log(antman);
    console.log(antman.bio());
    // Para hacer uso de un elemento estatico, debo hacer referencia de la clase como tal y no mediante su instancia, como es el ejemplo de la linea anterior
    console.log(Avenger.getAvgAge());
})();
