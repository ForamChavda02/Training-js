export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

import { add, subtract } from './math.mjs';
console.log(add(5, 3));