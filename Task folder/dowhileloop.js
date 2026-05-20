//print numbers from 1 to 10
let a = 1;
do {
    console.log(a);
    a ++;
}
while(a <= 10);
/*
1
2
3
4
5
6
7
8
9
10
*/

//print even numbers from 1 to 50
let b = 1;
do {
    if(b % 2 == 0) {
        console.log(b);
    }
    b ++;
}
while(b <= 50);
/*2
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
50
*/

//print odd numbers between 1 to 50
let c = 1;
do {
    if(c % 2 != 0){
        console.log(c);
    }
    c ++;
}
while(c <= 50);
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
49*/

//calculate the sum of numbers from 1 to 100
let d = 1;
let sum = 0;
do {
    sum += d;
    d ++;
}
while(d <= 100);
console.log(sum);//5050

//reverse print number from 20 to 1 
let e = 20;
do {
    console.log(e);
    e --;
}
while(e >= 1);
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
1
*/
//print the multiplication table on a given numbers
let f = 4;
let table = 1;
do {
   console.log(f * table);
   table ++;
}
while(table <= 10);
/*4
8
12
16
20
24
28
32
36
40
*/
//reverse a number using while loop
let g = 32001;
let reverseNum = 0;
do {
    let x = g % 10;
    reverseNum = reverseNum * 10 + x;
    g = Math.floor(g / 10);
}
while(g > 0);
console.log(reverseNum);//10023

//find the sum of digits of a number
let h = 12097;
let digitSum = 0;
do {
    let x = h % 10;
    digitSum += x;
    h = Math.floor(h / 10);
}
while(h > 0);
console.log(digitSum);//19

//check wehter a number is palindrome
let j = 12321;
let actual = j;
let palindrom = 0;
do {
    let x = j % 10;
    palindrom = palindrom * 10 + x;
    j = Math.floor(j / 10);
    }
while(j > 0);
    if(actual == palindrom) {
        console.log("it is palindrome");//it is palindrome
    }
    else {
        console.log("not a palindrome");
    }