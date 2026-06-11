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
console.log(view[0], view[1], view[2]);//10 128 255

const buffer = new ArrayBuffer(16);
const view2 = new DataView(buffer, 4, 8);
let len1 =  buffer.byteLength;
let len2 = view.byteLength;
let off1 = view.byteOffset;
console.log(len1, len2, off1);//16 8 0

const buffer2 = new ArrayBuffer(8);
const view3 = new DataView(buffer2);
view3.setInt32(0, 123456);
const value = view3.getInt32(0);
console.log(value);//123456

var buffer3 = new SharedArrayBuffer(4 * Int32Array.BYTES_PER_ELEMENT);
var sharedArray = new Int32Array(buffer3);
Atomics.store(sharedArray, 0, 123);
var value2 = Atomics.load(sharedArray, 0);
console.log("Value", value2);//Value 123

let i = 0;
function timedCount() {
  i ++;
  postMessage(i);
  setTimeout("timedCount()", 500);
}
timedCount();