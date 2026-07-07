function add(a, b, callback) {
    const result = a + b;
    callback(result);
}

add(10, 20, (answer) => {
    console.log(answer);
})