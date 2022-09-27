function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  // return () => console.log("hola mundo");
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

// Decorador para bloquear el prototipo de un objeto, impidiendo que se pueda expandir
const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

// Factory decorator de la función
function CheckValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    // console.log({ target, propertyKey, descriptor });
    const originalMethod = descriptor.value;
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error("El id del pokemon debe estar entre 1 y 800");
      } else {
        return originalMethod(id);
      }
    };
  };
}

// Decorador de las propiedades
function readOnly(isWritable: boolean = true): Function {
  // No hace uso del descriptor que es exclusivo de los metodos
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this);
        return "Sergio";
      },
      set(this, val) {
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
@bloquearPrototipo
@printToConsoleConditional(true)
class Pokemon {
  // Decorador de propiedades
  @readOnly(true)
  public publicAPI: string = "https://pokeapi.co";

  constructor(public name: string) {}

  // Decorador de metodos
  @CheckValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Pokemon ${id} guardado en BD`);
  }
}

const charmander = new Pokemon("Charmander");
// Esta linea no se ejecuta dado que está bloqueado
// (Pokemon.prototype as any).customName = "Bulbasaur";
console.log(charmander);
// Llamado del metodo
console.log(charmander.savePokemonToDB(20));
