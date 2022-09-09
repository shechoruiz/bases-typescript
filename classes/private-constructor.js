"use strict";
// El constructor privado se usa para controlar la manera en que sus instancias son ejecutadas
// Este ejemplo es un patrón singletone, que curiosamente ya no es tan visto en la comunidad y no se recomienda su uso
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("Soy Apocalipsis... El único");
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName("Fenix");
    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
