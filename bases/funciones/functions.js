"use strict";
(() => {
    const hero = "Flash";
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return "Batiselan activada";
    };
    console.log(typeof activateBatisignal);
    const heroName = returnName();
})();
