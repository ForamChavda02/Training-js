const myArr = new Uint8Array(5);
console.log(myArr);//Uint8Array(5) [ 0, 0, 0, 0, 0 ]

const myArr2 = new Uint8Array([0, 1, 2, 3, 4]);
console.log(myArr2);//Uint8Array(5) [ 0, 1, 2, 3, 4 ]

const myArr3 = Uint8Array.of(0, 1, 2, 3, 4);
console.log(myArr3);//Uint8Array(5) [ 0, 1, 2, 3, 4 ]

const myArr4 = Uint8Array.from([0, 1, 2, 3, 4]);
console.log(myArr4);//Uint8Array(5) [ 0, 1, 2, 3, 4 ]

const myArr5 = Int16Array.from("123456789");
console.log(myArr5);
/*
Int16Array(9) [
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
*/

const myArr6 = Int16Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(myArr6);
/*
Int16Array(10) [
  0, 1, 2, 3, 4,
  5, 6, 7, 8, 9
]
*/

const myArr7 = Int16Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(myArr7);
/*
Int16Array(9) [
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
*/

console.log(myArr7.constructor.name);//Int16Array

console.log(myArr6.BYTES_PER_ELEMENT);//2

console.log(myArr4.fill(200, 0, 3));//Uint8Array(5) [ 200, 200, 200, 3, 4 ]

console.log(myArr4.find((x) => x > 180));//200

console.log(myArr4.some((x) => x > 180));//true

const myBuf = new ArrayBuffer(16);//create a 16-byte ArrayBuffer. 
console.log(myBuf);
/*
ArrayBuffer {
  [Uint8Contents]: <00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>,
  [byteLength]: 16
}
*/

const myBuf2 = new ArrayBuffer(8);
const view = new Uint8Array(myBuf2);
view[0] = 10;
view[1] = 128;
view[2] = 255;
console.log(view[0], view[1], view[2]);