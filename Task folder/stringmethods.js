//create a username validator: remove spaces, convert to lowercase, replace psace with _
let name = "Foram Chavda";
let a = name.toLowerCase();
let b = a.replace(" ", "_");
console.log(b);//foram_chavda

//build a sentece analyzer: count characters, find first and last character
let name2 = "hello @ world";
let c = name2.split(" ").join("").length;
console.log("length of character is :", c);//length of character is : 11
console.log("first character is:", name2.at(0));//first character is: h
console.log("last character is:", name2[name2.length - 1]);//last character is: d

//create a product code formatter: pad number with two zeros, convert codes to uppercase
let code = "hello123";
let d = code.toUpperCase();
let e = d.padEnd(10, "0");
console.log(e);//HELLO12300

//create an email formatter: trim spaces, lower case everything, extract domain name
let email = "F or am @yaho.com";
let f = email.toLowerCase();
let g = f.split(" ").join("");
let h = g.split("@").pop();
console.log(g);//foram@yaho.com
console.log(h);//yaho.com

//create a password strength checker using string methods 
let password = "hello123";
if(password.length >= 8 && password.match(/[0-9]/ && password.match(/[a-z]/))){
    console.log("strong password");//strong password
}
else {
    console.log("weak password");
}

//create a sentence revesre without using array reverse
let str1 = "this is javascript";
let answer = "";
for(let i = str1.length - 1; i >= 0; i--){
    answer += str1[i];
}
console.log(answer);//tpircsavaj si siht

//create URL validator: checks if URL starts with https, search for ://, verify if URL ends with /
let url = "https://www.google.com/";
if(url.startsWith("https") && url.includes("://") && url.endsWith("/")) {
    console.log("valid url");
}
else {
    console.log("not valid url");//valid url
}

//reverse a string hello world like olleh dlrow
const str2 = "hello world";
let reverseString = str2.split(" ").map((v, i) => v.split("").reverse().join("")).join(" ");
console.log(reverseString);//olleh dlrow