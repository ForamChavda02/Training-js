const buf = Buffer.from("hii i am foram");

console.log(buf.toString());

console.log(buf[0]);

console.log(buf.length);

const buff1 = Buffer.alloc(10);
console.log(buff1);

const buff2 = Buffer.allocUnsafe(10);
console.log(buff2);

const buff3 = Buffer.from("hello world");
console.log(buff3);

const buff4 = Buffer.from([65, 66, 70, 56]);
console.log(buff4);

console.log(buff4.toString());

const buff5 = Buffer.from(buff4);
console.log(buff5);