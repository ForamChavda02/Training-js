/*Generate Random 6 Digit OTP
Create a reusable utility function for generating secure random 6-digit OTPs.

Example Output
482931
*/
//17:00 - 17:12
function OTP() {
    let otp = [];
    for(let i = 0; i < 6; i++) {
        otp.push(Math.floor(Math.random() * 10));
    }
    return otp.toString().split(",").join("");
}
console.log(OTP());//061569

/*Add isAdult Field
Add a new boolean field based on age validation.

Input
[
{ name: "A", age: 16 },
{ name: "B", age: 22 }
]
Expected Output
[
{ name: "A", age: 16, isAdult: false },
{ name: "B", age: 22, isAdult: true }
]
*/
//17:13 - 17:22
function isAdultField(array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i].age >= 18) {
            array[i].isadult = true;
        }
        else {
            array[i].isadult = false;
        }
    }
    return array;
}
console.log(isAdultField([
{ name: "A", age: 16 },
{ name: "B", age: 22 }
]));
/*[
  { name: 'A', age: 16, isadult: false },
  { name: 'B', age: 22, isadult: true }
]
*/

/*Replace Duplicate Names With Boolean Flag
Detect duplicate names and append a duplicate field.

Input
[
{ name: "John" },
{ name: "Sam" },
{ name: "John" }
]
Expected Output
[
{ name: "John", duplicate: true },
{ name: "Sam", duplicate: false },
{ name: "John", duplicate: true }
]
*/
//17:23 - 17:43
function replaceDuplicate(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = i; j < array.length; j++) {
            if(array[i].name == array[j].name) {
                array[i].duplicate = true;
            }
            else {
                array[i].duplicate = false;
            }
        }
    }
    return array;
}
console.log(replaceDuplicate([{ name: "John" }, { name: "Sam" }, { name: "John" }]));
/*[
  { name: 'John', duplicate: true },
  { name: 'Sam', duplicate: false },
  { name: 'John', duplicate: true }
]
*/