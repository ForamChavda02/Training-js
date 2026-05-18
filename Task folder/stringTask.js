//reverse a string
const a = "foram";
const b = a.split("").reverse().join("");
console.log(b);//marof

//find length
const c = "today is monday";
console.log(c.length);//15

//convert to Uppercase
console.log(c.toUpperCase());//TODAY IS MONDAY

//convert to lowercase
const d = "HELLO WORLD";
console.log(d.toLowerCase());//hello world

//check palindrom
const e = "madam";
for(let i = 0; i <= e.length; i++){
    for(let j = e.length; j >= 0; j--){
        if(e[i] === e[j]);{
        }
    }
}

//count character excluduing space
const f = "today is monday";
const g = f.split(" ").join("").length;
console.log(g);//13

//remove spaces
const h = "I am learing javascript";
const i = h.split(" ").join("");
console.log(i);//Iamlearingjavascript

//replace a word
const j = h.replace("javascript", "java");
console.log(j);//I am learing java

//print fisrt character
const k = h[0];
console.log(k);//I

const l = h[h.length-1];
console.log(l);