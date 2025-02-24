import { incrementGenerator } from "./generators/incrementGenerator.js";
const generator = incrementGenerator(0);
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)