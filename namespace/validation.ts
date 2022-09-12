// El namespace se utiliza para la agrupación lógica de funcionalidades. Un namespace puede incluir interfaces, clases, funciones y variables para admitir una funcionalidad única o un grupo de funcionalidades relacionadas. Se puede crear un namespace utilizando la palabra clave namespace seguida del nombre a darle.

namespace Validations {
  export const validateText = (text: string): boolean => {
    return text.length > 3 ? true : false;
  };

  export const validateDate = (myDate: Date): boolean => {
    return isNaN(myDate.valueOf()) ? false : true;
  };
}

console.log(Validations.validateText("ser"));
