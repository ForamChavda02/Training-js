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
    for(let i = 0; i < strArr.length; i++) {
        if(strArr[i] == strArr[i + 1]) {
          count ++; 
        } 
        else if(!resultArr.includes(strArr[i])) {
            resultArr.push(strArr[i] + count);
            count = 1;
        }
    }                                                                                                                           
    return resultArr;
}
console.log(countCharacter(strArr));                                                            
/*
[
  'a2', 'b1', 'c2',
  'd2', 'e1', 'a3',
  'f3', 'b2', 'z1'
]
*/