//print even numbers from 1 to 50
//for(let i = 0; i <= 50; i++) {
  //  if(i % 2 == 0){
    //    console.log(i);
    //}
//}
/*0
2
4
6
8
10
12
14
16
18
20
22
24
26
28
30
32
34
36
38
40
42
44
46
48
50*/

//print odd number between 1 to 50
//for(let i = 0; i <= 50; i++) {
  //  if(i % 2 != 0) {
    //    console.log(i);
    //}
//}
/*1
3
5
7
9
11
13
15
17
19
21
23
25
27
29
31
33
35
37
39
41
43
45
47
49
*/

//calculate the sum of numbers from 1 to 100
//let sum = 0;
//for(let i = 0; i <= 100; i++) {
  //  sum += i;
//}
//console.log(sum);//5050

//print the multiplication table of a given number
//let num = 3;
//let table = 1;
//for(let i = 1; i <= 10; i++) {
    //table = num * i;
  //  console.log(table);
//}
/*3
6
9
12
15
18
21
24
27
30*/

//reverse print numbers from 20 to 1
//for(let i = 20; i >= 1; i--){
  //  console.log(i);
//}
/*20
19
18
17
16
15
14
13
12
11
10
9
8
7
6
5
4
3
2
1 */

//print all elements of an array using loop
//let array = ["foram", "aryan", "mayur", "bhavya"];
//let txt = "";
//for(let i of array) {
  //  txt += i;
//}
//console.log(txt);//foramaryanmayurbhavya

//find the largest number in array
//let arr2 = [6, 3, 8, 10, 78];
//let max = arr2[0];
//for(let i = 0; i <= arr2.length; i++){
    //if(arr2[i] > max){
    //    max = arr2[i];
  //  }
//}
//console.log(max);//78

//find the smallest number in array
//let arr3 = [1, 7, 5, 6, 8];
//let min = arr3[0];
//for(let i = 0; i <= arr3.length; i++) {
    //if(arr3[i] < min) {
    //    min = arr3[i];
  //  }
//}
//console.log(min);//1

//count vowels in a string
//let str1 = "hello this is for loop";
//let vowels = "aeiou";
//let count = 0;
//for(let i = 0; i <= str1.length; i++) {
    //if(vowels.includes(str1[i])) {
    //    count ++;
  //  }
//}
//console.log(count);//7

//print each character of a string separately
//let str2 = "this is javascript code";
//for(let i = 0; i <= str2.length; i++) {
  //  console.log(str2[i]);   
//}
/*t
h
i
s
 
i
s
 
j
a
v
a
s
c
r
i
p
t
 
c
o
d
e*/

//calculate the factorial of a number
//let num1 = 5;
//let mul = 1;
//for(let i = 1; i <= num1; i++) {
  //  mul *= i;
//}
//console.log(mul);//120

//generate fibonacci series 
//let num2 = 10;
//let arr4 = [0, 1];
//for(let i = 2; i <= num2; i++) {
  //  arr4.push(arr4[i - 1] + arr4[i - 2]);
//}
//console.log(arr4);
/*[
   0, 1,  1,  2,  3,
   5, 8, 13, 21, 34,
  55
]*/

//find the sum of all even numbers in array
//let arr5 = [1, 2, 4, 5, 8, 6];
//let sum2 = 0;
//for(let i = 0; i < arr5.length; i++) {
    //if(arr5[i] % 2 == 0) {
    //    sum2 += arr5[i];
  //  }
//}
//console.log(sum2);//20

//print a star pattern triangel using loop
//for(let i = 1; i <= 5; i++) {
    //let pattern = "";
    //for(let j = 1; j <= i; j++){
    //    pattern += "*";
  //  }
    //console.log(pattern);
//}
/**
**
***
****
*****
*/
//count how many times a specific element appears in an array
let arr6 = [1, 2, 4, 6, 1, 1];
let specificEle = 1;
let count2 = 0;
for(let i = 0; i <= arr6.length; i++) {
    if(arr6[i] == specificEle) {
        count2 ++;
    }
}
console.log(count2);//3

//reverse an array using loop
let arr7 = [9, 8 , 7, 6, 5];
for(let i = arr7.length; i > 0; i--) {
    console.log(arr7[i]);
}
/*5
6
7
8
9*/