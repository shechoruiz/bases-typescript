// La principal caracteristica de una clase abstracta es servir de plantilla para otras clases, lo que hace que no se puedan crear instancias de la clase padre. Adicional, las clases extendidas de las abstractas pueden tener propiedades y metodos especializados para ellas solas

(() => {
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutante {
    salvarMundo() {
      return "Mundo a salvo!";
    }
  }
  class Villain extends Mutante {
    conquistarMundo() {
      return "Mundo conquistado!";
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan");
  const magneto = new Villain("Magneto", "Erik");
  console.log(wolverine);
  console.log(magneto);

  // Tambien ayuda a que un argumento pueda ser de cualquier otro tipo, pero siempre y cuando implemente las caracterisiticas de su clase abstracta
  const printName = (character: Mutante) => {
    console.log(character.realName);
  };

  printName(magneto);
})();
