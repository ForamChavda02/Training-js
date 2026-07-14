console.log("Info message");
console.error("error message");
console.warn("Warning message");
console.debug("Debug message");

const user = { id: 1, name: "John", roles: ["admin", "user"] };
console.log("user object:", user);

console.table([
    { name: "John", age: 30, role: "admin"},
    { name: "Jane", age: 25, role: "user"},
    { name: "Bob", age: 40, role: "guest"}
]);

console.time("operation");
for(let i = 0; i < 10; i++) {
    console.log("hii", i);
}
console.timeEnd("operation");

console.group("User Processing");
console.log("loading user data");
console.log("validate user");
console.log("updating user profile");
console.groupEnd();

console.trace("trace message");