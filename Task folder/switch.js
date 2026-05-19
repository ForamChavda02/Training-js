//calculator
let a = "division";
let b = 10;
let c = 5;

switch(a) {
    case "multiplication":
        console.log(b * c);
        break;
    case "division":
        console.log(b / c);//2
        break;
    case "subtraction":
        console.log(b - c);
        break;
    case "sum":
        console.log(b + c);
        break;
    default:
        console.log("not a valid operator");    
}

//character type check
let d = "$";

switch(d) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log("vowel");
        break;
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
        console.log("digit");
        break;  
    default:
        console.log("special character");//special character
        break;
}

//pizza size pricing system
let e = 12;

switch(e) {
    case 8:
        console.log("8inch pizza serve only one human");
        break;
    case 10:
        console.log("10 inch pizza a regular size");
        break;
    case 12:
        console.log("12 inch pizza a large size pizza");//12 inch pizza a large size pizza
        break;
    default:
        console.log("there is no size of pizza that exists");
        break;
}

