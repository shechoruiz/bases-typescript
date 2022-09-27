"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function printToConsole(constructor) {
    console.log(constructor);
}
const printToConsoleConditional = (print = false) => {
    // return () => console.log("hola mundo");
    if (print) {
        return printToConsole;
    }
    else {
        return () => { };
    }
};
// Decorador para bloquear el prototipo de un objeto, impidiendo que se pueda expandir
const bloquearPrototipo = function (constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
};
// Factory decorator de la función
function CheckValidPokemonId() {
    return function (target, propertyKey, descriptor) {
        // console.log({ target, propertyKey, descriptor });
        const originalMethod = descriptor.value;
        descriptor.value = (id) => {
            if (id < 1 || id > 800) {
                return console.error("El id del pokemon debe estar entre 1 y 800");
            }
            else {
                return originalMethod(id);
            }
        };
    };
}
// Decorador de las propiedades
function readOnly(isWritable = true) {
    // No hace uso del descriptor que es exclusivo de los metodos
    return function (target, propertyKey) {
        const descriptor = {
            get() {
                console.log(this);
                return "Sergio";
            },
            set(val) {
                // console.log(this, value);
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false,
                });
            },
        };
        return descriptor;
    };
}
// @printToConsole
let Pokemon = class Pokemon {
    constructor(name) {
        this.name = name;
        // Decorador de propiedades
        this.publicAPI = "https://pokeapi.co";
    }
    // Decorador de metodos
    savePokemonToDB(id) {
        console.log(`Pokemon ${id} guardado en BD`);
    }
};
__decorate([
    readOnly(true)
], Pokemon.prototype, "publicAPI", void 0);
__decorate([
    CheckValidPokemonId()
], Pokemon.prototype, "savePokemonToDB", null);
Pokemon = __decorate([
    bloquearPrototipo,
    printToConsoleConditional(true)
], Pokemon);
const charmander = new Pokemon("Charmander");
// Esta linea no se ejecuta dado que está bloqueado
// (Pokemon.prototype as any).customName = "Bulbasaur";
console.log(charmander);
// Llamado del metodo
console.log(charmander.savePokemonToDB(20));
