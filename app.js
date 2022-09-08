"use strict";
(() => {
    // Tipos
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    // Arreglos
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    //Enumeraciones
    let fuerza;
    (function (fuerza) {
        fuerza[fuerza["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        fuerza[fuerza["fuerzaBatman"] = 1] = "fuerzaBatman";
        fuerza[fuerza["fuerzaFlash"] = 5] = "fuerzaFlash";
        fuerza[fuerza["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(fuerza || (fuerza = {}));
    const fuerzaFlash = fuerza.fuerzaFlash;
    const fuerzaSuperman = fuerza.fuerzaSuperman;
    const fuerzaBatman = fuerza.fuerzaBatman;
    const fuerzaAcuaman = fuerza.fuerzaAcuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    // Aserciones de Tipo
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
