function getChildren(array, parentId) {
    const children = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i].parentId === parentId) {
            array[i].children = getChildren(array, array[i].id);
            children.push(array[i]);
        }
    }
    return children;
}
function nestedArr(array) {
    return getChildren(array, null);
}
const data = [
    { id: 1, parentId: null, name: "Electronics" },
    { id: 2, parentId: 1, name: "Laptop" },
    { id: 3, parentId: 1, name: "Mobile" },
    { id: 4, parentId: 2, name: "Gaming Laptop" },
    { id: 5, parentId: 2, name: "Business Laptop" },
    { id: 6, parentId: 3, name: "Android" }
];
console.log(JSON.stringify(nestedArr(data), null, 4));