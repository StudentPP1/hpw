import { iterate } from "./iterators/iteratorFunction.js";
import { incrementGenerator } from "./generators/incrementGenerator.js";
iterate(incrementGenerator(0), 1);