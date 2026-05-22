/*If character repeats more than 1 time → store count
If single character → store only character
Keep sequence same

Input: "aabccddeaaafffbbz"

Output:
[
"a2",
"b",
"c2",
"d2",
"e",
"f3",
"z"
]*/
//time: 12:10 to 13:21
let str = "aabccddeaaafffbbz";
let strArr = str.split("");
let count = 1;
let resultArr = [];
function countCharacter(strArr) {
    for(let i = 1; i < strArr.length; i++) {
        if(strArr[i - 1] == strArr[i]) {
          count ++;
          resultArr.push(strArr[i] + count);  
          count = 1; 
        }
        else if(! resultArr.includes(strArr[i])){
            resultArr.push(strArr[i]);
        }
    }
    return resultArr;
}
console.log(countCharacter(strArr));
/*[
  'a2', 'b',  'c', 'c2',
  'd',  'd2', 'e', 'a',
  'a2', 'a2', 'f', 'f2',
  'f2', 'b2', 'z'
]*/
