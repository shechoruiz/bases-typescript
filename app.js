"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_pokemon_1 = __importDefault(require("./genericos/get-pokemon"));
(0, get_pokemon_1.default)(1)
    .then((pokemon) => console.log(pokemon.sprites.front_default))
    .catch((error) => console.error(error));
