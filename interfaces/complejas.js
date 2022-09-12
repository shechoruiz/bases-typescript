"use strict";
(() => {
    const cliente = {
        name: "Sergio",
        age: 25,
        address: {
            id: 125,
            zip: "KYP235",
            city: "Ottawa",
        },
        getFullAddress(id) {
            var _a;
            return (_a = this.address) === null || _a === void 0 ? void 0 : _a.city;
        },
    };
    const cliente2 = {
        name: "Maria",
        age: 30,
        getFullAddress(id) {
            var _a;
            return (_a = this.address) === null || _a === void 0 ? void 0 : _a.city;
        },
    };
})();
