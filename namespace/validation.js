"use strict";
// El namespace se utiliza para la agrupación lógica de funcionalidades. Un namespace puede incluir interfaces, clases, funciones y variables para admitir una funcionalidad única o un grupo de funcionalidades relacionadas. Se puede crear un namespace utilizando la palabra clave namespace seguida del nombre a darle.
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return text.length > 3 ? true : false;
    };
    Validations.validateDate = (myDate) => {
        return isNaN(myDate.valueOf()) ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText("ser"));
