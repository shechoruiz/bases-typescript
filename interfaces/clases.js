"use strict";
(() => {
    class Mutant {
        // public age: number;
        // public name: string;
        // public realName: string;
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return `${this.name} ${this.realName}`;
        }
    }
})();
