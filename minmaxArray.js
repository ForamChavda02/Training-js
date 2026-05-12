function arrayMin(array){
    return Math.min.apply(null, array);
}
console.log(arrayMin([77, 85,25,63,44,56]));


function arrayMax(array){
    return Math.max.apply(null, array);
}
console.log(arrayMax([69,54,88,99,12]));


function myArrMin(array){
    let l = array.length;
    let min = Infinity;
    while( l-- ) {
        if(array[l] < min){
            min = array[l];
        }
    }
    return min;
}

console.log(myArrMin([56, 89, 52, 41, 66, 99]));


function myArrMax(array){
    let l = array.length;
    let max = -Infinity;
    while(l--){
        if(array[l] > max){
            max = array[l];
        }
    }
    return max;
}
console.log(myArrMax([52, 61, 67, 25, 74, 66]));

