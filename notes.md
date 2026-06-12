Numeric Sort :
-the sort() function sort values by string so if numbers are sorted like a string "2 is bigger than 10" cause in oredr 2 comes first and 10 comes later 
-so because of this sort() function will produce an error while sorting numbers.
-this error can simply be sloved by providing a compare function.
-the compare function return a negative, zero, postive value depending on the arguments.
-when the sort() function compares two values, it sends the values to the compare function, and sorts the value according to the returned value.

Finding the Lowest and Highest Array Value :
-there is no built in method to directly find lowest and highest value in array,
-we can use sort method then first and last element we can get OR we can use Math.min() or Math.max() or we can also define our function.

Array forEach():
-The forEach() method runs a function once for every item in the array.

Array map():
-the map() method ctreates a new array by performing a function on each array element.
-the map() method does not change the original array.

Array flatMap():
-the flatMap() method fisrt maps all elements of an array and then creates a new array by flattening the array.

Array filter():
-the array filter() method creates a new array with array elements that pass a test(like condition).

Array reduce():
-the reduce() method runs a function on each array element to produce a single value.
-the reduce() method works from left-right in array and it does not reduce the original array.
-the reduceRight() method works from right-left in array and it does not reduce the original array.

Array every():
-the every() method checks if all array values passes a test(like a condition).
-it gives true and false as result.

Array some():
-the some() method checks if some array value pass a test
-it also give true and false as result.

Array.from():
-the Array.from() method returns an array object from:
 -any iterable object
 -any object with a lenght property.
-Array.from() has an optional parameter which allows you to execute a function on each element of the new array.

Array keys():
-the Array.keys() method returns an array iterator object with the keys of an array.

Array entries():
-the entries method returns an array iterator object with key/value pairs

Array with():
-the Array with() method a safe way to update the elements in an array without altering the original array.

-in javascript , a data type tells what kind of value a variable stores.
-javascript data type mainly divided into 2 categories:1.primitive data types , 2. Non-primptive data types
-1.primitive data types:these are simple basic values.
  -javascript has 7 primitive datatypes:string, number, boolean, undefined, null, bigint, symbol
-2.non-primptive data types:these are more complex values like objects and arrays.
-primptive is a single simple value that is not made for other values.
-an object in javascript is non-primptive datatype used to store multiple related values as key-value.

Array Spread(...):
-the ... operator expends an array into individual elements.this can be used to join arrays
-the ... operator can be used to pass arguments to a function.

Array rest(...):
-the rest operator allows us to destruct an array and collect the leftovers.
-the rest operator in javascript collects multiple values into a single variable.
-it is called rest because it stores the rest of the values.

Array const:
-the keyword const is little misleading.
-it does not define a constant array . it defines a constant reference to an array. because of this we can still change the elements of a constant array.
-redclaring an array with const, in another scope, or in another block, is allowed.

*---Sets---:
-a javascript set is a collection of unique values.Each value can olny occur once in a Set.The values can be of anytype, primptive values or objects.

Set creation:
-we can create a javascript set by:
 -parsing an array to new Set().
 -create an empty set and use add() to add values.
 -pass an array to the new Set() constructure.
 -if you add equal elements, only the first will be saved.
 -sets are objects
 -the primary feature of Set object is that they only store unqiue values.
 -if an attempt is made to add an element that already exists in the set, the add() method will have no effect, and the set will remain unchnged.
- the has() method returns true if a specified value exists in a set.
-the forEach() method invokes a function for each Set element.basically this method loop through elements one by one when used with set it runs a function for every value inside the set.
-the values() method returns an iterator object with the values in a set.an iterator is an object used to access value one by one
-the key() method returns an iterator object with the values in a set. a set has no keys so keys() returns the same as values().this makes sets compatible with maps.
-the entries() method returns an iterator with [value, value] pairs from a Set.the entries() method is supposed to return a [key, value] pair from an object . a set has no keys , so the entries() method returns [value, value] . this makes set compatible with Maps
-the union() method returns the union of two sets
-the intersection() method returns the intersection of two sets.
-the difference() method returns the diff between two sets.
-the symmetricDifference() method returns the symmetric diff between two sets.
-the isSubsetOf() method returns true if all elements in this set is also elements in the argument set.
-the isSupersetOf() method returns true if all elements in the argument set are also in this set.
-the isDisjointFrom() method returns true if this set has no elements in common with argument set.

WeakSet:
-the WeakSet Object is a collection of values where the values must be objects.
-a WeakSet holds weak references to its values.
-a WeakSet only stores objects not primptive values 

Garbage collection:
-javascript employs a memory management mechanism known as garbage collection.
 -ensuring efficient use of memory resources 
 -reclaim memory occupied by variables that are no longer in use.
 -preventing memory leaks

Weak References:
-unlike a regular set a weak set does not prevent its values from being garbage collected.
-if a value(object) has no references in a program, it becomes eligible for garbage collection.
-when a value is garbage collected it is removed from the WeakSet.

Values Must Be Objects:
-Primptive values can not be values in WeakSet.
-the values must be objects 
-the restriction is tied to the garbage collection mechanism, primptives are not garbage collected in the same way as objects.

Tracking Objects:
-A WeakSet is similar to a set, but it only stores the object, and holds them weekly. if there are no references to an object, it gets garbage collected automatically.
-this makes it handy for tracking objects without storing extra data(like counts).
-WeakSets are not enumerable, you cannot iterate over the values with for loops , forEach(), or values(), you cannot access the size WeakSet has no size property.

The Map Object:
-A javascript map is an object that can store collection of key-value pairs, similar to a dictionary in the other programing languages.
-Maps differ from standard objects in that keys can be any data type.

Map Characteristics:
key types-map keys can b any type (strings, numbers, objects, etc).
insertion order- the map remembers the original insertion order of the keys 
size-the number of iteams in a map is easily retrived using the size property
performance-maps are optimized for frequent addition and removal of key-value pairs.
iteration - Maps are iterable,allowing for direct use of for...of loops or methods like forEach()
iteration order- the original order is preserved during iteration.
-maps are similar to both objects(unique key/value collection) and Array(ordered values collection). but if you look close , Maps are most similar to objects.

How to create a Map:
-creat a new Map and add elements with Map.set()
-passing an exsiting Array to the new Map() constructor.
-you can add elements to a Map with the set() method.
-the set() method can also be used to change existing Map values.
-the get() method gets the value of a key in a Map.
-the size property returns the number of elements in a map.
-the delete() method removes a map element
-the cleare() method removes all the elements from a map.
-the has() method returns true if a key exists in a map.
-the forEach() method invokes a callback for each key/value pair in a map
-the entries() method returns an iterator object with the [key,values] in a map
-the keys() method returns an iterator object with the keys in a map
-the value() method returns an iterator object with the values in a map
-being able to use objects as keys is an important Map feature.
-the Map.groupBy() method groups elements of an object according to string values returned from a callback function.and it does not change the original object.
-the difference between Object.groupBy() and Map.groupBy()
  -Object.groupBy() groups elements into javascript object.
  -Map.groupBy() groups elemenst into a Map object.

Difference between forEach() and entries():
-forEach : "do something for every item"
-entries : "give me all items so i can loop myself"

The WeakMap object:
-a javascript WeakMap is a collection of key/value pairs where the keys must be objects.
-A WeakMap holds weak reference to its keys.

JavaScript Loops:
-loops repeat execution a block of code a number of times.
-loops are fundamental for tasks involving:
   -iteration over values
   -iteration over data strucure
   -performing an action multiple times
   foor loop : iterates over values and expressions
   while : iterates over a condition
   do...while : iterates over a condition
   for...in : iterates over the properties of an object
   for...of : iterates over array like objects
    forEach(): Iterates over each element in an array.

For loop:
-the for loop is used when the number of iteration is known.
-it consists of an initialization(exp 1),a condition (exp 2) and an increment expression(exp3).

The while loop:
-the while loop executes a block of code as long as a specified condition evaluates to true.

The do...while loop:
-the do...while loop is similar to while loop, but guarantees that the code block will be executed at least once, before the condition is checked

The for...in loop:
-the for...in loop iterates over the enumerable properties of an object. it is typically used for iterating over object keys.

The for...of loop:
-the for...of loop iterates over the values of iterable objects such as arrays, strings, maps, sets, and NodeLists

next():
-the Symbol.iterator is a function that returns a next() function.
-the next() method returns an object with two properties:
  -the value property holds the next value in the iteration sequence.
  -the done property returns false if there are more elements to iterate over, otherwise it will return true

Iterators:
-an iterators is an object that provides a standard way to access elements sequentially 
-an iterator must have a next() method.

Iterator.from():
-the Iterator.from() creates an iterator object from an existing iterable.

drop():
-the drop() method returns a new iterator that skips a specified number of elements before yielding the rest.

every():
-the every(fn) method returns true is all elements in the iterator satisfy the provided test function.

filter():
-the filter() method returns a new iterator containing elements that satisfy a filter function.

find():
-the find(fn) method returns the first element that satisfies a test function.

flatMap():
-the flatMap() method returns a new iterator by mapping each element and then flattening the results into a single iterator.

forEach():
-the forEach() method executes a provided function once for each element in the iterator.

map():
-The map() method returns a new iterator with all elements transformed by a map function.

reduce():
-the reduce() method applies a reducer function against an accumulator and each element to reduce it to a single value.

some():
-the some() method returns true if at least one element in the iterator satisfies the provided test function.

take():
-the take() method returns a new iterator that yields at most a specified number of elements.

Generators:
-a javascript function can only return one value
-a javascript generator can return multiple values, one by one.
-a javascript generator can yield a stream of data. and a generator can be paused and resumed.
-a generator function is defined using the function* syntax , when called a generator function returns a Generator object, not a direct value.

Generator Objects:
-a generator object is returned by the generator function.
-it conforms to both the iterabale and iterator protocol, meaning it can be iterated over using for...of loops

The yield keyword:
-the yield keyword pasues execution and yield a value back to the caller.
-the generator state is preserved, and can be resumed from the point of the yiled when next() is called.
-generator maintain their internal state between yield calls, allowing them to continue execution from where they left off.
-before, async/await, generators were used with promises, to manage asynchronous operations in a more sequential-looking manner.

Math object:
-the javascript math object allows you to perform mathemetical tasks.
-The Math object is static.
-all methods and properties can be used without creating a Math object first.
-the syntax for any Math property is : Math.property.
-javascript provides 8 mathemetical constants that can be accessed as Math properties:
  -Math.E : returns Euler's number.
  -Math.PI : returns PI.
  -Math.SQRT2: returns the square root of 2
  -Math.SQRT1_2: returns the Square root of 1/2.
  -Math.LN2: returns the nautral logerithm of 2.
  -Math.LN10: returns the natural logerithm of 10.
  -Math.LOG2E: returns base 2 logerithm of E.
  -Math.LOG10E: returns base 10 logerithm of E.
-the synatx for Math any method is: Math.method(number).

Number to Integer:
-there are 4 common methods to round a number to an ineteger:
 -Math.round(x): returns x rounded to its nearest integer
 -Math.ceil(x): returns x rounded up to its nearest integer.
 -Math.floor(x): returns x rounded down to its nearest integer.
 -Math.trunc(x): returns the ineteger part of x.
 -Math.sign(x): returns : if x is positive then 1.
                        : if x is negative then -1.
                        : if x is zero then 0
  -Math.pow(x,y): returns the value of x to the power of y:
  -Math.sqrt(x); returns the square root of x.
  -Math.abs(x): returns the absolute(postive) value of x.
  -Math.sin(x): returns the sine(a value between -1 and 1) of the angle x (given in the radians).
                if you want to use degrees instead of radians, you have to convert degrees to radians.
                Angle in radians = Angle in degrees xPI/180.
  -Math.cos(x): returns the cosine(a value between -1 and 1) of the angle x (given in the radians).
                if you want to use degrees instead of radians, you have to convert degrees to radians.
                Angle in radians = Angle in degrees xPI/180.
  -Math.min() and Math.max(): can be used to find the lowest or highest value oin a list of arguments.
  -Math.random(): returns a random number between 0(inclusive) and 1(exclusive)
  -Math.log(x): returns the natural logerithm of x.
  -Math.log2(x): returns the base 2 logerithm of x.

RegX Metacharacters:
-Metacharacters are characters with a special meaning.they can be used to match digits, words, spaces, and more.
-There are most common: 
    -\d : matches digits
    -\w : matches words
    -\s : matches spaces 

RegExp Quantifiers:
-Quantifiers define the number of characters or expression to match.
    -x*: matches zero or more occurrences of x
    -x?: matches zero or one occurrences of x
    -x{n}: matches n occurrences of x

RegExp Assertion:
-assertion matches boundaries and lookarounds:
  -string boundaries and word boundaries.
  -lookarounds: lookaheads and lookbehinds.
  -the common ones:
     -^ string boundary - matches the beginning of a string
     -$ string boundary - matches the end of string.
     -\b word boundary - matches the beginning or end of the word.
     -(?=...) lookahead - matches the subsequent string
     -(?<=...) lookbehind - matches the previous string
-the /s flag allows the .(dot) metacharacter to match newline character(\n) in addition to any character.
-the /y flag performs a "sticky search from the lastindex property of the RegExp object. this flag lets match start at the exact position where the last match ended.

-the /u flag enables full unicode support in a regular expression 
-character classes are characters enclosed in square brackets
-in javascript RegExp is a regular expression objcet with predefined properties and methods.
-test() method : it seaches for a pattern and returns true and false depending on the result.
-exec() method : it searches for a specified pattern, and returns the found text as an object.if no result is found then it returns null empty object.
-RegExp.escape() : method returns a string where character that belongs to the regular expression syntax are escaped.

Data Types :
-javascript have 8 data type in total 7 Primptive data type and 1 object data type
  -Primptive Data types :
    -Numeric type : number, bigint
    -Non-Numeric type : string, boolean, null, undefined, symbol.
  Objects :
    -Object, array, function, date, regexp, set, map.
-Javascript numbers are always double (64-bit floating point).
-in javascript a variable without value has the value undefined, the type is also undefined.any variable can be emptied by setting the value to undefined and then type will also be undefined.
-in javascript a variable or an expression can obtain the datatype null in several ways. a function can return null or a variable can be assigned the null value.

Javascript Object :
-javascript object repersent complex data structure and functionality beyond the primitive data types.
-javascript objects are written with { }.
-javascript objects contains a collection of different properties.
-object properties are written as name:value pairs, seprated by commas.
-if we want to know that a variable is array so we have method Array.isArray(arr).
-the instanceof operator returns true if an objcet is an instance of a specified object type
-the typeof variable with no value is undefined. the value is also undefined.
-an empty value has nothing to do with undefined.
-an empty string has both a legal values and a type.
-in javascript null is "nothing" . it is supposed to be something that does'n exist.you can also empty an objcet by setting it to null.
-undefined and null are equal in value but different in type.
-the constructor property returns the constructure function for all javascript variables.
-with constructor you can check if an objcet is array and date.
-the datatype of NaN is number.
-the void operator evaluates an expression and returns undefined.
-when toString() is used on function it returns the source code of the function as a string.

Number Method : 
-Number() : returns a number, converted from its argument.
-pasreFloat() : parse a string and return a floating point number.
-parseInt() : parse a string and returns an integer.

-the unary + operator can be used to convert a variable to number.If a variable cannot be converted it will still become a number, but with the value NaN.
-the global method String() can convert numbers to strings.
-toExponential() : returns a string with a number rounded and written using exponential notation.
-toFixed() : returns a string with a number rounded and written with a specific number of decimals.
-toPrecision() : returns a string with a number written with a specified length.
-the global method String() can convert date to strings
-the global method Number() can also convert booleans to numbers.
-the global method String() can convert boolean to strings.

Destructuring :
-the destructuring assignment syntax can unpack objects to variables.
-destructuring does not change the original object.

Array Destructuring : 
-We can pick up array variables into our own variables.
-we can skip array values using two or more commas.

Rest property : 
-you can end a destructuring syntax with a rest property.
-this synatx will store all remaining values into a new array.

Swapping variables :
-you can swap the values of two variables using destructuring assignment.

Error :
-the try statement allows you to define a block of code to be tested for errors while it is being executed.
-the catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

The try statement : 
-in javascript, the try statement is used to handle errors(also called exceptions) that may occur during code execution-without stopping the entire program. 
-try statement works together with catch.
-sometimes it works with finally.
-and sometimes it works with throw.

The try block : 
-the try block contains the code that might throw an error.
-if no error occurs, the catch block is skipped.

The catch block :
-the catch block executes only if an error occurs in the try block.
-the error objcet provides details about what went wrong.

The finally block : 
-the finally block executes after the try and catch blocks, whether an error occured or not.
-it is commonly used for cleanup tasks(e.g., closing files, stopping loaders, etc.).

The throw statement :
-the throw statement allows you to create a custom error.
-technically you can throw an error.
-the exception can be Javascript String, Number, a Boolean or an object.
-if you use throw together with try and catch, you can control program flow and generate custom error messages.

The Error Object : 
-javascript has a built in error object that provides error information when an error occurs.
-the error object provides two useful properties: name and message.
   -name : sets or returns an error name.
   -message : sets or return an error message(a string).

Debugging : 
-ReferenceError - Means: this name does not exist. often a misspelling or variable not declared.
-TypeError - Means: you tried to use a value in an impossible way. often undefined or null.
-use console.warn() to display warnings.
-use console.error() to display error messages.
-use console.table() to display data in table format.

Breakpoint :
-a breakpoint pauses code execution on a specific line.
-when the code stops you can inspect variables and step through the code line by line.

-an error message has three important parts.
  -the error type.
  -a short explanation.
  -a line number.

-A syntax error means javascript cannot understand your code.
-this is often caused by missing brackets or parentheses.

Commom error meanings :
-ReferenceError means a name is not defined.
-TypeError means a value is used incorrectly.
-SyntaxError means broken code structure.
-NaN means invalid math.

Debugging fetch() :
-the fetch() function is asynchronous.
-it does not return data immediately.
-async and await make async code easier to read.
-you can set breakpionts on await lines
-async and await are used to handle asynchronous code(code that takes time like API calls, timers, file loading)in a clean way.
-await is used inside async functions only.it means "wait here until the promise is finished, then continue.

Conventions :                     
-Always put spaces around operators(= + - * /), and after commas.
-Alwasy use 2 spaces for indentation of code blocks.do not use tabs for indentation, different editors interpret tabs differently.
-put the opening bracket at the end of the first line.
-use one space before the opening bracket.
-put the closing bracket on a new line without leading spaces.
-do not end a complex statement with a semicolon.

Object rules : 
-place the opening bracket on the same line as the object name.
-use colon plus one space between each property and its value.
-use quotes around string values, not around numeric values.
-do not add comma after the last property-value pair.
-place the closing bracket on a new line, without leading spaces.
-always end an object definition with a semicolon.

Naming Convention :
-variable and function name written as camleCase.
-global variable written in UPPERCASE.
-constants (like PI) written in UPPERCASE.
-if you move from case insensitive to a case sensitive server, even small errors can break your website.
-to avoid these problems, always use lower case file names.
-declaring objects with const will prevent any accidental change of type.
-declare array with const will prevent any accidental change of type.

Dont use new Object() :
-use "" instead of new String()
-use 0 insetad of new Nuber()
-use false instead of new Boolean()
-use {} instead of new Object()
-use [] instead of new Array()
-use /()/ instead of new RegExp()
-use function (){} instead of new Function()

-Always treat numbers, strings, or boolean as primitive values not as objects.
-declaring these type as objects, slows down execution speed and produce nasty side effects
-switch statements use strict comparison
-closing(ending) statement with semicolon in optional in javascript.
-javascript will close the return statement at the end of the line, becasue it is a complete statement.
-never break a return statement.

Reduce activity in loop:
-loops are often used in programing.
-each statement in a loop including for statement, is executed for each iteration of the loop.
-statements or assignments that can be placed outside of the loop will make the loop run faster.
-avoid using with keyword. it has a negative effect on speed.

Async await : 
-Sync :
  -synchronous: synchronous means the code runs in the perticular sequence of instructions given in the program. each instruction waits for the previous instruction to complete its execution.
-asynchronous: due to synchronous programming, sometimes imp instruction get blocked due to some previous instructions, which causes a delay in the UI.
              asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

Callback: a callback is a function passed as an argument to another function.

Async-await : 
-async function always returns a promise.
-async function myFunc(){...}
-await pauses the execution of its surrounding async function until the promise is settled.

Modal popup : 
-a modal is a popup window that appears on top of the page.

Revesre a string :
-Strings are immutable in javascript so to reverse them we have to convert them in array and the with revesre method you can revesre a string.
-for ex : const y = x.split("").reverse().join("");

Variables :
-there are total 4 ways to declare variable using var, let, const and automatically.

Node:
node.js is a cross-platform javaScript runtime environment that allows developers to build serever side and network applications with javascript.

-javascript strings are immutable 
-JSON: javascript object notation is a lightweight data interchange format, derived from javascript
-in javascript, primitive means a basic/simple single value, primitive data types store actual values directly.
-non primitive means complex data or collection of values.
-console.log() only display output
-return sends value back from function
-every function without return automatically returns undefined

Functions advance :
-functions are object, the type of operator in javascript returns functions for functions. but,javascript function can best be described as object.
-javascript functions have both properties and method, the arguments.length returns the number of arguments received by the function
-toString() method returns the function as a string.

CallBack function :
-A callback function is a function passed as an argument into another function.
-A callback function is intended to be executed later.
-Later is typically when a specific event occurs or an asynchronous operation completes.
-The name callback stems from the idea that the outer function will call you back later when it has finishes its task.

Types of callBack :
Asynchronous callbacks : asynchronous callbacks are executed later time, allowing the main program to continue running without waiting.
                         this is essential for preventing the application from frezzing during long-running task like network requests.
Synchronous callbacks : synchronous callback are executed immediately within the outer function, blocking further operations until completion.
                        array methods like map(), filter(), and forEach() use synchronous callbacks

Event handling :
-callbacks are often used in javascript, especially in event handling.
-user interaction such as button clicks or key presses, can be handled by providing a callback function to an event listner.
when you pass a function as an argument, remember not use parenthesis.

Deferred execution : The key benifit of callback is that it allows for deferred execution, meaning the callback function does not run immediately.
-instead it runs later, after a specific condition is met, an event occurs or an asynchronous operation completes.
-this mechanism ensures that the program can continue to execute other code while waiting for long running task.

Promises :
-promises are just objects that contain the outcome of asynchronous operations. 
-when you want control the outcome of an asynchronous operation.all you have to do is wrap the asynchronous function with a promise constructor.
-the promise constructor requires you to pass a function called the executor which takes two parameters, resolve and reject

object : 
-obj = something -> replace object
-obj.key = something -> edit/add properety
-obj[key] = something -> adit/add property using variable.

the for...in loop :
-the for in loop iterates over the enumerable properties of an object it is typically used for iterating over object keys

the for...of loop :
-the for of loop iterates over the values of iterable objects such as arrays, strings, maps, sets and node lists.
-you can use for...of loop to iterative over the elements of a string
-you can use a for...of loop to iterate over the elements of an array.
-you can use a for...of loop to iterate over the elements of a set.
-you can use a for...of loop to iterate over the elements of map.
-the javascript for...of statemnet loops through the elements of an iterable object.
-in javascript the following are iterables:
  strings
  arrays
  types arrays
  sets 
  maps

differnec between for loop, for of loop, for in lopp and for each loop
-the primary difference between these loops lies in what the iterate over(keys vs values) and how they handle control flow(like breaking early)
for loop :
-the most flexible and widely supported loop.it uses a manual counter to access array elements by their index
-best for when you need a specific starting point, want to go reverse or need to skip elements.
for...of loop this loop iterates directly over the values of an iterables(arrays, strings, sets, maps)
-best for simple, readable iterations over array data.
-supports await in asynchronous loops and allows break or continue
for...in loop : this loops iterates over the enumerable property keys(names) of an object 
-best for inspecting object properties.
-avoid using this for arrays.it iterates over all enumerable properties, including inherited ones, which can lead to unexpected behavior.
for each () method technically an array property method not a statement. it executes a call back function for every element in an array
-best for performing a side effect(like logging) for every item without needing to stop.
-you can not break or continue out of a for each loop early.

for in gives index/keys of an array or object
for of gives the actual values. so to get the property of object you should use of.

-flat() method of array flatten the array 1 time if we dont pass any argument to it in flat(), but it can flatten the array number of times we want like falt(5) so it will flat the array 5 times, but if we dont know how many times array should be faltten then put infinity as argumnet in flat and it will comepletly falt the array.

-the test() function which is used with regx make regx become condition so in if you jsut put test with regx and it will be condition no extra == for comparision.

-in the function arguments you can pass multiple arguments using the rest parameter so with the help of rest parameter you can have any number of arguments for example combination(...args) so it will have multiple arguments.

-... is spread operator in js it take items out one by one and spread them.

-there are object properties or object constructor methods which are used:
  -Object.keys(obj)
  -Object.values(obj): get all values when property count is unknown
  -Object.enties(obj)

-Object.keys(): the Object.keys() static method returns an array of a given object's own enumrable string-keyed proprty names. 
                  basically give the property name(keys) of an object in an array.
-if you need the property values, use Object.values() and if you need both the property keys and value, use Object.entries().

-the Object.create() method creates an object from an exissting object.
-the fromEntries() method creates an object from a list of keys/values.
-the Object.assign() method copies properties from one or more source objects to a target object.
-all javascript values, expcept primitive, are objects.
-objects are mutable, they are addressed by reference, not by value.
-the call() and apply() methods are predefined javascript methods.they can be both used to call an object method with another object as argument.
-with the bind() method, an object can borrow a method from another object.
-Object.keys() returns an array of the keys of an object
-Object.values() returns an array of the property values of an object.
-Object.groupBy(object, callback) groups object elements according to a function. 

HTML DOM :
-id = "demo" is an HTML property
-getElementById() is a DOM method
-innerHTML is a DOM proprty 
-document is the HTML document.
-getElementById() is a document method.
-the DOM API is a standard for how to get, change, add or delete HTML DOM elements.
-javascript is the language used in browser to access the DOM thtrough the API.
-if you want to access any element in an HTML page, you always strat with accessing the document object. the document object represents your web page
-to manipulate HTML with javascript, you first need to select an element.
- document.getElementById(id) - Find an element by element id
- document.getElementByTagName(name) - find elements with tag name
- document.getElementsByClassName(name) - find elements with class name
- document.querySelector(selector) - find the first element that matches a CSS selector
- document.querySelectorAll(selector) - find all elements that match a CSS selector.
the document object is the owner of all other objects in your web page.

Changing HTML content:
-the HTML DOM allows javascript to change both the text and the content of HTML elements
-the easiest way to modify the content is by using the innerHTML proprty.
-the innerHTML property can be used to get or change any HTML element, including <html> and <body>
-the HTML DOM allows you to execute code when an event occurs.
-events are generated by the browser when things happen in HTML elements.

Amimation:
-iavascript animations are done by programing gradual changes in an element's style.
-the changes are called by a timer. when the timer intreval is small, the animation looks continous.

HTML events:
-onchange: an html element has been changed
-onclick: the user clicks an html element
-onmouseover: the user moves the mouse over an HTML element.
-onmouseout: the user moves the mouse away from an html element 
-onkeydown: the user pushes a keyboard key
-onload: the browser has finished loading the page 

Javascript event handlers: 
-an event handler is javascript code that runs when an event happens.
-event handlers can be used to handle and verify user input, user action, and browser actions.
-using addEventListener() is the recommended way to handle events.
-the addEventListener() method keeps HTML and javascript seprated.

Mouse Events:
-mouse events happen when the user interacts with the mouse
-common mouse events:
   click
   dclick
   mouseover/mouseout
   mousemove
   mousedown/mouseup

Keyboard events:
-event.key returns the value of the key. can vary based on language settings
-event.code returns the key code.constant, regardless of language settings.

Load events:
-load events happen when the browser has finished loading an element 
-the two most important load events:
   -DOMContentLoad(when HTML is ready)
   -load(waits for pages, images, css, etc).

DOMContentLoaded:
-the DOMContentLoaded event firse when the browser has fully loaded the HTML and build the Document Object Model(DOM)tree, but has not necessarily finished loading external resources like images and stylesheets.

Javascript Timing Events:
-timing events lets you run the code:
   after a delay
   or repeatedly
timing is driven by timing events generated by the system clock.
Timer functions
-setTimeout() sets a clock timeout(runs once)
-setInterval() sets a clock interval(runs repeatedly)
-clearTimeout() clears a timeout
-clearInterval() clears an interval 

The setTimeout() Method:
-the setTimeout() method executes a function after a delay in milliseconds
-the setTimeout() method is a core part of asynchronous javascript, allowing code execution to be scheduled without blocking the main execution thread

The setInterval() method:
-the setInteval() method calls a function repeatedly.

Javascript event management 
-javascript event management is all about adding, removing, and controlling events

The onload and onunload Events:
-the onload and onunload events are triggered when the user enters or leaves page.
-the onload event can be used to check the visitor's browser version, and load the proper version of the web page based on the information.
-the onload and onunload events can be used to deal with cookies.

HTML fisrt:
-HTML can validate form fields before a form is submitted.
-you can use attributes like required, minlength, and pattern.

Function call:
-when you use call(), you can decide what this should refer to.
-you can use call() to borrow a method from another object.
-the call() method can pass arguments.
-without call(), this is not the pearson object
-with call(), this is set explicitly.
-the call() method executes the function immediately
-it does not return a new function.
-call() requires argument to be listed one by one.use apply() for arrays.

Function apply:
-the apply() method lets you use write a method that can be used on different objets.
-the apply() method is used to call a function with a specific this
-the apply() method is similar to call(), but it passes arguments in an array.
-the only differnece between apply() and call() is how arguments are passed.
-the call() method takes argument sepraretly.
-the apply() method takes argument as an array.
-use apply() when your arguments are already stored in an array.

Function bind():
-unlike call() and apply(), the bind() method does not run the function immediately.
-instead, it returns a new function that can be called later.
-the new function remembers the this value you chose.
-the first argument sets the this value for the new function.
-additional arguments become fixed arguments for the new function.
-argumets passed to bind() becomes fixed values. this is something called partial applcation.

Function IIFE:
-an iife is short for an immediately invoked function expression
-an iife is a function that invokes itself when defined.
-normally, a function runs only when it is called. an IIFE runs automatically when the javascript engine reads it(compile it).
-function expression will execute automatically if the expression is followed by ().
-you can only self-invoke a function expression, you cannot self-invoke a function declaration.

Closures:
-global variable can be made local(private) with clousers
-closures make it possible for a function to have "private" variables.
-a closure is created when a function remembers the variables from its outer scope, even after the outer function has finished executing 

Variable lifetime:
-global variable live until the page is discarded, like when you navigate to another page or close the window.
-local variables have short lives. they are created when the function is invoked, and deleted when the function is finished.

Object:
-bracket notation is useful when the property name is stored in a variable.
-methods are actions that can be performed on objects.
-javascript can secure better data quality when using getter and setter.
-Object.defineProperty() method can also be used to add Getter and Setter 
the Object.defineProperty() method can be used to:
 -adding a new property to an object.
 -changing property values.
 -changing property metadata.
 -changing object getters and setters.

Property Attributes:
-all properties have a name. in addition they also have a value.
-the value is one of the property's attributes.
-other attributes are: enumerble, configurable, and writable.
-these attribues define how the property can be accessed (is it readable is it writable)
-in javascript all attributes can be read, but only the value attribute can be changed 
-the Object.getOwnPropetyNames() method can list object properties.
-Object.getOwnPropertyNames() will also list properties that are not enumerable.

Getter and setter:
-getter and setter let you control how a property is read or updated in an object.instead of directly accessing a value, javascript runs a function behind the scenes.
Getter(get) : a getter runs when you read a property
Setter(set) : a setter runs when you assign a value to a property.

Object protection method:
-Object.preventExtensions(obj) : prevents adding object properties
-Object.isExtensible(obj) : returns true if properties can be added to an object
-Object.seal(obj) : prevents adding and deleting object properties
-Object.isSealed(obj) : returns true if object is sealed
-Object.freeze(obj) : prevents any changes to an object.
-Object.isFrozen(obj) : returns true if object is frozen.

Using const:
-the most common way to protect an object from being changed is by using the const keyword.
-with const you cannot reassign the object, but you can change the value of a property, delete a property or create a new property.

Javascript class syntax:
-use the keyword class to create a class, always add a method named constructor.
-syntax: class classname { 
  constructor() {...}
}

The constructor method:
-the constructor method is special method
-it has to have the exact name "constructor"
-it is executed automatically when a new object is created.
-it is used to initialize object proerties.

Class method:
-class methods are created with the same syntax as object methods.
-use the keyword class to create a class.
-always add a constructor method.
-then add any number of methods.

Javascript class inheritence:
-class inheritence.
 -To create a class inheritence, use the extends keyword.
 -a class created with a class, inheritance inherits all method from another class.

JSON:
-JSON(javascript object notatin)is a lightweight, text-based data format used to store and transport struture data.
-because it is both human readable and easy for machine to parse.
-JSON represents data in a simple, hierarchical structure using two primary components:
  -Object(dictionaries): collection of key-value pairs enclosed in curly braces {}. the key must be string.
  -Array(lists): orderd lists of values enclosed in square brackets [].

Control Flow:
-Comtrol flow is the order in which statements are executed in a program.
-by default, javascript runs the code from top to bottom and left to right.
-Async programming can change this.

Function sequence:
-javascript functions are executed in the sequence they are called.Not in the sequence they are defined.
-Asynchronous flow refers to how javascript allows certain operations to run in the background and let their results be handleed when they are ready.
-if javascript waited for these tasks,the page would freeze.
-Async code lets the rest of the program continue to run.
-Async code does not run immediately:
  -Timers run after a specified number of milliseconds.
  -Events run when triggered by an event.
  -Network requests run when the data arrives.

Events:
-Events are actions or occurrences that happen in the browser,often triggered by user interactions(like click, keypress, or form submissions) or by the browser itself(like page loading or resizing).

Asynchronous vs parallel:
-Parallel means doing multiple things at the same time on different processors.
-Asynchronous means switching between tasks, not necessarily runnig them simultaneosly.
-A single-threaded javascript engine handles asynchronous tasks by using an event loop to switch between them, rather than utilizing multiple CPU cores.When a task finishes, it signals the main thread(via a callback, promise, or event) to handle the result.
-in short asynchronous tells the system:
  -start this task now.
  -I dont need the result immediately.
  -Notify me later when its done

The setTimeout() methods:
-the setTimeout() method schedules a function to run after a delay in milliseconds.
-it is an async operation used to delay code execution without freezing the browser.
-when you pass a function as an argument, remember not to use paranthesis.

Waiting for Intervals:
-when using the setInterval() method,you can specify function to be executed for each interval.

Callbacks:
-A callback runs after another function finishes.
-callbacks were the first solution for asynchronous javascript.
-A callback is a function that runs later.
-A callback runs after somthing has finished.
-the name "callback" stems from the idea that the function will "call you back" later when it has finished its task.

What is a Callback Function?:
-A callback function is a function passed as an argument into another function.
-The callback function is intended to be executed later, typically when a specific event occurs or an asynchronous operation completes.
-This pattern keeps your function flexible.
-this is how many older javascript APIs worked.

Event handling:
-Callbacks are often used in javascript,especially in event handling.
-user interactions,such as button clicks or key presses, can be handled by providing a callback function to an event listener.

Callback drawbacks:
-while essential for javascript programming, deeply nested callbacks can lead to complex, hard-to-read code known as "callback hell" or the "pyramid of doom".

Promises:
-Javascript promises were crerated to make asynchronous javascript easier to use.
-A promise object repersents the completion or failure of an asynchronous operation.
-A promise can be in one of three exclusive states.
   pending: Operation started(not finished).
   rejected: Operation failed.
   fulfield: Operation completed.
-A promise acts as a placeholder for a value that will be available at some point in the future, allowing you to handle asynchronous code in a cleaner way than traditional callbacks.

Promise States:
A promise can be in one of three exclusive states:
-Pending: The initial state;the operation has started but is neither fulfiled nor rejected.
-Fulfilled: The operation completed successfully, and a value is available.
-Rejected: The operation failed, and a reason(error) is available.
A promise is considered settled if it is fulfilled or rejected(not pending).
The promise constructor takes a function with two parameters.
resolve: function to run if finishes successfully.
reject: function to run if finishes with an error.

then() takes two arguments, one callback function for success and another for failure.
Both are optional, so you can add a callback function for successful or failure only.

-A promise represents a value that will be available later.
-A promise is container for a future result.
-The result can be a value or an error.
-A promise can reslove or reject only once.
-The promise object supports two properties: state and result.
-While a promise object is "pending"(working), the result is undefined.
-When a promise object is "fullfield", the result is value.
-When a Promise object is "rejected", the result is an error object.

Core methods and usage:
-Promises are consumed using methods attached to the promise object.
- .then(onFulfiled, onRejected): this method attaches handlers for both the fulfillment and rejection cases.It returns a new promise,which enables method chaining.
- .catch(onRejected): this is a shorthand for .then(null, onRejected)and its typically used to handle errors at the end of a promise chain.
- .finally(onFinally): this handler is called when the promise is settled(either fulfilled or rejected), regardless of the outcome. its useful for cleanup operations

Using then and catch:
-You do not read a promise result immediately.
-you attach code that runs when the promise finishes.
-then() runs when a promise is fulfilled.
-catch() runs when a promise is rejected.

Returning a Promise:
-Promises become powerful when you return a promise from then().

Promises and real javascript:
-many webAPIs return promises.
-fetch() is a common example.

Promise API Static methods:
-Javascript also provide static methods on the Promise object for handling multiple promises at once.
-Promise.all(iterable): Fulfills when all promises in the iterable are fulfield; rejects immediately if any promise rejects.
-Promise.allSettled(iterable): Waits for all promises to settle(either fulfill or reject)and returns an array of their results
-Promise.race(iterable): Settles(fulfills or rejects)as soon as any of the promises in the iterable settels.
-Promise.any(iterable): Fulfills as soon as any promise in the iterable fulfills; rejects if all promises reject.

Recusrion:
sum(2) computes 3
↓
sum(3) receives 3
↓
sum(2) removed from stack
↓
sum(3) continues

Async and await:
-the async keyword before a function makes the function return a promise.

The await keyword:
-the await keyword makes a function pause the execution and wait for a resloved promise before it continues.
-the await keyword can only be used inside an async function.

Handling errors with try...catch:
-promise use catch() for errors.
-async and await use try...catch

Sequential vs Parallel:
-Awaiting one by one runs tasks in sequence.
-this is correct when one step depends on the previous step.
-if task do not depend on each other, you can run them in parallel.
-use Promise.all() to wait for both.
-the two arguments(reject and resolve)are pre-defined by javascript.
-we will not create them, but call them when the execution function is ready.
-very often we will not need a reject function.

Javascript fetch API:
-fetch() is the morden way to request data from a server.
-fetch() is asynchronous and returns a promise.
-morden apps use async code to get data.
-fetch() is most common example.

fetch returns a Promise:
-fetch() does not return data.
-it returns a promise that becomes a response later.
-the result is a Response object, not the JSON data.

Getting JSON data:
-to get JSON, you must read the response body.
-response.json() returns a promise.

fetch with async and await:
-async and await make fetch code easier to read.

in programing, fetching means retrieving data from a storage location, server, or database and bringing it into the program's memory to be used.

Network error:
-A network error happens when the request cannont be completed.
-this include offline mode and DNS errors.
-network errors reject the promise.

Async Debug:
-Async debugging is about finding where the code stops.
-then you find why it stoped.
-fetch does not reject on HTTP errors like 404.
-you must check response.ok

Debugging Promise Chains:
-promises can fail anywhere in the chain.
-add logs between steps to find where it fails.: ex,.console.log("Got response");

Instance Method:
.catch(onRejected): provides a function to run when a promise is rejected.
.finally(onFinally): provides a function to run when a promise is fulfiled or rejected.
.then(onFulfilled, onRejected): provides one callback function for fulfilled and one for rejected.

Modules:
-modules are the code blocks that can exported and/or import function and values.
-modules let you break up code into seprate files.
-modules is a fundamental feature in modern javascript.

Module file:
-javascript module is usually a file, but it can also be an HTML script.
-A module file is a .js file using import/export.
-A module script is an HTML script using import/export.

How to use module:
-Modules use import and export to interchange the functionlities between modules.
-An HTML script using type="module" is treated as a module.
-Module files must be stored on a server.
-Module only works with the HTTP(s) protocol.
-A web-page opened via the file://protocol cannnot use import / export.

Modules can export:
-variable
-Functions
-Objects
-Classes 
-Modules operate in strict mode by default.

The export keyword:
-A module uses the export keyword to share values with other files.
-A module can have many named exports.
-A module can(optionally) have one default export.

Named Exports:
-A named export gives a name to each item.
-Items can be exported individually, or wrapped in {} at the bottom.

Default Exports:
-Default Export exports one main value from a module.
-This gives the clear intent about what the module's primary functionality is.
-If a file is meant to expose one primary function, class, or value, default export makes that explicit.
-you can have only one default export in a file.

Import:
-you can import modules in two ways, based on if they are named exports or default exports.

Names imports:
-Named imports match named exports in a module.
-they let you import one or more explicitly named variable or functions from a module.
-you must use the exact names enclosed in culy {} braces.
-you can import multiple items at once.
-you can rename them using as

Default Import:
-Default import is the way to import the primary exported value from a module-the one that was exported using export default.
-you can give a default export any name you like, during import, without using curly braces.

The Module Namespace Object:
-when you use the syntax:
   import * as name from "module";
-javascript creates a module namespace object.
-This is an immutable object that contains all the exported bindings from that module.

Module Namespace Support:
-Module namespace support refers to the mechanism that allows you to import all exports from a module into a single namespace object.

Namespace Export:
-with module namespace exports, you can re-export that entire namsespace from your own module - without having to import it first.

Aggregator Scripts:
-an aggregator script is a script used only to improve and re-export items from other modules.
-instead of filling your top module with many import statements, you can use a single aggregator script to do it all.

Javascript Dynamic Modules:
-dynamic import uses the syntax:
  import(module);

Metaprograming:
-metaprograming refers to a number of ways a program can manipultae itself.
  -modify objects at runtime.
  -inspect objects at runtime.
  -control objects at runtime.
  -intercept running operations.
  -mofidy functions, and class.
  -generate daynamic code.

The easy explanation:
-normally, code handles data.
-with metaprograming, code handles code.

Inspecting object:
-with the method Object.keys() you can inspect object properties.
-Using Object.keys() is a simple example of metaprograming.

Modify Objects:
-typical metaprograming task is to modify object behavior.

Generate Dynamic code:
-Metaprograming involves dynamic code generation.
-Javascript can generate functions at runtime.

Proxy Metaprograming:
-The two objects proxy and reflect allow for programing at the meta level in javascript.
-Proxy can be used to intercept property operations like reading or writing.

Proxy with reflect:
-reflect makes proxy behavior match normal object behabior.

The reflect object:
-Reflect is a object with methods for low-level operations on javascript objects.
-with the reflect object you can get, set, delete, and check object properties in a consistent way.
-Reflect is a toolbox for working with objects in a safe and consistent way.
-Reflects brings all object operations into clean methods.
  -reflect methods unifies object operations.
  -reflect methods are more predictable than operators(in/delete).
  -reflect methods provides standard return values instead of errors.
  -reflect methods are cleaner and safer for meta-programming.
  -reflect methods are tailored for the proxy object.
  -with Reflect.has(), you get the in operator as a function.
  -with Reflect.delete(), you get the delete operator as a function.
-reflect is safe and flexible, especially when used inside a Proxy.
-the Reflect.has() method checks if an object has a specific property.
-the Reflect.has() method is similar to the in operator.

Reflect.deleteProperty():
-the Reflect.deleteProperty() method deletes a property from an object.
-the Reflect.deleteProperty() method is similar to the delete operator.

Reflect.get():
-the Reflect.get() methods retrives the value of a property.
Reflect.set():
-the Reflect.set() method sets the value of a property.
Reflect.apply():
-the Reflect.apply() method calls a function with a this value and an argument array.
Reflect.construct():
-the Reflect.construct() method acts like the new operator, creating a new instance of target with the provided arguments.newTarget allows for custom new.target values for subclassing.
Reflect.defineProprty():
-The Reflect.defineProprty() defines or modifies a property.
Reflect.ownKeys():
-The Reflect.ownKeys(obj) method returns an array of an object's own property keys(string and symbol based), similar to combining Object getOwnPropertyNames() and Object.getOwnPropertySymbols.
Reflect.isExtensibl():
-the Reflect.isExtensible() method checks if an object is extenisble(can have properties added), similar to Object.isExtensible().

Javascript Proxy:
-A proxy is a javascript object that can wrap other objects.
-A proxy lets you control operations on other objects 
-A proxy can trap and intercept code when someone is:
   -reading a property(get)
   -setting a property(set)
   -Deleting a property(deleteProperty)
   -Checking if a property exists(has)
   -calling a function(apply)
   -construct an object(construct)

-A proxy lets you run your own code when someone interacts with an object.
-A proxy gan be a middleman between your code and a Javascript object.

handler.set():
-triggered when a property is changed.

handler,has():
-intercepts the in operator.

handler.deleteProperty():
-intercepts the delete operator.

handler.apply():
-triggered when a function is called.

handler.getOwnPropertyDescriptor():
-Intercepts property descriptor retrieval.

handler.defineProperty():
-Intercepts Object.defineProperty().

handler.getPropertyOf():
-intercepts prototype lookup.

Typed Arrays: 
-Typed arrays was designed for handling binary data.
-unlike arrays, typed arrays are buffers of Fixed Length.
-Typed arrays store elements of Fixed Types like 8-bit integers of 32-bit numbers.

Typed Array Benifits:
-Typed Arrays were designed to provide an efficient way to handle binary data, unlike traditional javascript arrays which can hold elements of mixed data types.
-Typed arrays are raw memory, so javascript can pass them directly to any function without converting data to another representation.
-Typed arrays are seriously faster than normal arrays for passing data to function that can use raw binary data.
-Typed arrays provide a way to handle binary data as efficiently as arrays work in C.

Difference from regular array:
-Fixed length: Typed arrays cannot be dynamically resized, using methods like push() or pop().
-Typed Restriction: Elements must adhere to the specified data type of the typed array.
-Underlying Buffer: Typed Arrays are views into an ArrayBuffer, allowing direct manipulation of binary data.

-Typed arrays are not arrays. isArray() on a typed array return false.many array methods(like push and pop) are not supported by typed arrays

Typed Array Methods:
-the from() method: the from() method creates a new typed array from any iterable object.
-the of() method creates a new typed array from a number of arguments.
-the constructor.name property: The constructor.name property returns the name(type) of a typed array.
-the BYTES_PER_ELEMENT returns the number of bytes used to store each array element.
-the fill() method: the fill() method changes all elements in a typed array to a value.
-the find() method: the find() method returns the first element that satisfies a test.
-the some() method: the some() method returns true if an element for which a provided function returns true.
Common array methods:
  -iteration: forEach(), map(), filter(), reduce(), reduseRight(), every(), some(), find(), findInex(), findLast(), findLastIndexOf().
  -searching: includes(), indexOf(), lastIndexOf().
  -manipulation: at(), copyWithin(), fill(), reverse(), set(), slice(), sort(), subarray().
  -conversion: join(), toLocalString(), toString().
  -Non-mutating methods: toReversed(), toSorted(), with(). 

Javascript Array Buffer:
-An array buffer is fixed a block of memory, often used to store typed arrays.
-On top of this block, you can create different views that interpret the bits as numbers, bytes, or other data types.

Creating an ArrayBuffer:
-use new ArrayBuffer() to create a new ArrayBuffer.
-the size of an ArrayBuffer is specified in bytes.
-the byteLength property represents the size.
-once created, the size can not be changed.

Accessing an ArrayBuffer:
-the ArrayBuffer does not have methods to read and write data.
-you must always use a view to access the data.
-Typed arrays and DataViews provide a way to read and write numeric values to an ArrayBuffer.

Using a Dataview:
-a DataView is more flexible view for an ArrayBuffer.
-A DataView lets you write values of different types.
-A DataView also lets you read and write values at any byte offset.

-the slice() method creates a new buffer.
-the slice() method does not share memory with the original buffer.

Data view:
-the data view object lets you read and write multiple numeric types in an ArrayBuffer, at any byte offset, with optional control over endianness(byte order).

What is Data View:
-A DataView is a view on top of ArrayBuffer.
-A DataView does not store data by itself, instead it lets you interpret the bytes in the buffers as different types.
-Use DataView when you work with binary data where you need full control over byte layout and types(for example network packets, file formats, or iteroperability with other languages).

Creating a DataView:
-to create a DataView you need an ArrayBuffer.
-Then you pass the ArrayBuffer to the new DataView() constructor.
-You can also create a DataView that starts at a specific offset and has a limited length.
-Multiple DataView and typed array views can share the same ArrayBuffer.

Mixed Types in One Buffer:
-One of the main advantages of DataView is that you can mix different types in a single buffer.For example:
 -1 byte for a flag
 -2 bytes for a length
 -4 bytes for a float.

The Atomic Object:
-The Atomic Object provides low-level atomic operations on shared memory.
-It is used with SharedArrayBuffer and Typed Arrays to share data between workers.

Waht are Atomics:
-When multiple threads(for example, the main thread and one or more workers) access the same data, you can get race condition.Atomic help avoid these race conditions by providing operations that:
  -work on shared typed arrays
  -are performed automatically(cannot be interrupted halfway)
  -return the previous value of the element.
-The Atomics object is a global object(like Math) with static methods such as Atomics.load(), Atomic.store(), Atomics.add(), and more.

Atomic read and wrire:
-Use Atmoics.load() to read and Atomics.store() to write an element in a shared typed Array.
-Atomics.store() returns the value you stored.
-Atomic.load() returns the current value of the element.

Atomics.add() and Atomics.sub():
-Atomics.add() and Atomics.sub() change a value and return the old value.

Atomics.exchange() and Atomics.compareExchange():
-Atomics.exchange() stes a new value and return the old one.Atomics.compareExchange() only sets a new value if the current value is equal to a given expected value.

Atomics.wait() and Atomics.notify():
-Atomics.wait()(in workers) can put a thread to sleep until the value at a position changes, and Atomics.notify() wakes up one or more sleeping threads.
-Atmoics.wait() can only be used in worker context(not on the main thread) in browsers.

Javascript HTML DOM Navigation:
-with the HTML DOM, you can nevigate the node tree using node relationships.

DOM Nodes:
-according the W3C HTML DOM standard, everything in HTML document is a node.
-with the HTML DOM, all nodes in the node tree can be accessed by javascript.
-New nodes can be created, and all nodes can be modified and deleted.

Node Relationships:
-The nodes in the node tree have a hierarchical relationship to each other.
-the term parent, child and sibling are used to describe the relationships.
  -in a node tree, the top node is called the root(or root node).
  -Every node has exactly one parent,except the root(which has no parent).
  -A node can have a number of children.
  -Siblings (brothers or sisters) are nodes with the same parent.

DOM root nodes:
-there are two special properties that allow access to the full document.
-document.body - The body of the document.
-document.documentElement - The full document.

The nodeName Property:
-The nodeName property specifies the name of a node.
 -nodeName is read-only.
 -nodeName of an element node is the same as the tag name.
 -nodeName of an attribute node is the attribute name.
 -nodeName of a text node is alwasy #text.
 -nodeName of the document node is always #document
 -nodeName always contains the uppercase tag name of an HTML element.

Javascript Window - The Browser Object Model:
-The Browser Object Model(BOM) allows javascript to "talk to" browser.

Window Location Href:
-The window.location.href property returns then URL of the current page.

Window location Hostname:
-The window.location.hostname property returns the name of the internet host(of the current page).

The Navigator Object:
-The negvigator object contains information about the visitor's browser.
-it can be written with or without the window prefix like:
-window.navigator or just navigator.

Browser Cookies:
-the cookieEnabled property returns true if cookies are enabled, otherwise false.

Javascript popup boxes:
-javascript has three kind of popup boxes:
  -Alert box
  -Confirm box
  -Prompt box

Alert box:
-An alret box is used if you want to make sure information comes through to the user.
-When an alert box pop up, the user will have to click "ok" to proceed.
-syntax: window.alert("sometext");
-the window.alert method can be written without the window prefix.

Confirm box:
-A confirm box is often used if you want the user to verify or accept something.
-When a confirm box pops up, the user will have to click either "OK" or "cancle" to proceed.
-if the user clicks "OK" the box returns true, if the user clicks "cancle" the box will returns false.
-syntax: window.confirm("sometext");

Prompt box:
-A prompt box is often used if you want the user to input a value before entering a page.
-When a prompt box pops up, the user will have to click either "OK" or "cancel" to proceed after entering an input value.
-If the user clicks "OK" the box returns the input value. If the user clicks "cancle" the box returns null.
-syntax: window.prompt("sometext", "defaulttext");

Line Breaks:
-to display line breaks inside a popup box,use a back-slash followed by the character n.

Timing events:
-The window object allows execution of code at specified time intervals
-setTimeout(function, milliseconds): Executes a function, after waiting a specified number of milliseconds.
-setInterval(function, milliseconds): Same as setTimeout(), but repeats the execution of the function continuously.
-The setTimeout() and setInterval() are both methods of the HTML DOM window object.

How to stop the execution:
-The clearTimeout() method stops the execution of the function specified in setTimeout().
-syntax: window.clearTimeout(timeoutvaribale);
-Ex: myVar = setTimeout(function, milliseconds);
     clearTimeout(myVar);
-if the function has not already been executed, you can stop the execution by calling the clearTimeout() method.
-The setInterval() method: the setInterval() method repeats a given function at every given time-interval.
-syntax: window.setInterval(function, milliseconds);
-the first parameter is the function to be executed.
-the second parameter indicates the length of the time-interval between each execution.
-the clearInteval() method stops the execution of the function specified in the setInterval() method.

Javascript cookies:
-Cookies let you store user information in web pages.

What are cookies:
-Cookies are data, stored in small text files, on your computer.
-When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.
-Cookies were invented to slove the problem "how to remember information about the user"
  -when a user visits a web page, his/her name can be stored in a cookie.
  -Next time the user visits the page, the cookie "remembers" his/her name.
-Cookies are saved in name-value pairs like:
  username = john Doe
-When a browser requests a web page from a server, cookies belonging to the page are added to the request. This way the server gets the necessary data to "remember" information about users.

Read a Cookie with javascript:
-let x = document.cookie.
-document.cookie will return all cookies in one string much like: cookie1=value; cookie2=value; cookie3=value;

The Cookie String:
-The ducument.cookie property looks like a normal text string. 

What is Web API:
-API stnads for Aplication Programing Interface.
-A web API is an application programing interface for the web.
-A browser API can extend the functionality of a web browser.
-A server API can extend the functionality of a wed server.

Browser APIs:
-All browser have a set of built-in Web APIs to support complex operations, and to help accessing data.
-For example, the Geolocation API can return the coordinates of where the browser is located.

Most Important APIs:
-The most important APIs in HTML/Javascript development are:
  -The DOM API for HTML and XML documents.
  -The Fetch API for networking.
  -The Web Storage API for client-side data.

Javascript Fetch API:
-The fetch API interface allows web browser to make HTTP requests to web servers.
-No need for XMLHttpRequest anymore.

Web Geolocation API:
-Locate the user's position.
-the HTML geolocation API is used to get the geographical position of a user.
-Since this can compromise privacy, the position is not allowed unless the user approves it.
-Geolocation is most accurate for devices with GPS, like smartphones.

Using the Geolocation API:
-the getCurrentPosition() method is used to return the user's position.
-watchPosition() - returns the current position of the user and continues to return updated position as the user moves(like the GPS in a car).
-clearWatch() - stops the watchPosition() method. You need an accurate GPS device to test this(like smartphone).

Web History API:
-The Web History API provides easy methods to access the window.history object.
-The window.history object contains the URLs(Web Sites) visited by the user.
-The back() method loads the previous URL in the windows.history list.
-it is the same as clicking the "back arrow" in your browser.
-The go() method loads a specific URL from the history list:
-window.history.go(-2): go back 2 pages.
-forward(): loads the next URL in the history list.

Pointer Events API:
-The Pointer Event API is a modern web standard that provides a unified input model for handling various pointing devices, such as a mouse, pen/stylus, and touch(finger).
-it simplifies development by consolidating seprate mouse and touch event models into a single, hardware-agnostic system.
-For the modern web, pointer events is the recommended approach to create interactive interfaces that provide a consistent experience for all users, regardless of hardware.

Event Types:
-Pointer event names are similar to mouse events.

Web Storage API:
-The Web Storage API is a simple syntax for storing and retriving data in the browser.it is very easy to use:
-localStorage.setItem("name", "john doe");

The localStorage Object:
-The localStorage Object provides access to a local storage for a particular Web Site. It allows you to store, read, add, modify, and delete data items for that domain.
-The data is stored with no expiration date, and will not be deleted when the browser is closed.
-The data will be available for days, weeks, and years.

The setItem() method:
-The localStorage.setItem() method stores a data item in a storage.
-It takes a name and a value as parameters.

The getItem() method:
-The localStorage().getItem() method retrives a data item from the storage.
-It takes a name as parameter. 

The sessionStorage Object:
-the sessionStorage Object is identical to the localStorage object.
-the difference is that the sessionStorage object stores data for one session.
-The data is deleted when the browser is closed.

Constraint Validation DOM Methods:
-checkValidity(): returns true if an input element contains valid data.
-setCustomValidity(): Sets the validationMessage property of an input element.

Web Workers API:
-A web worker is a javascript running in the background, without affecting the performance of the page.

What is Web Worker:
-When executing scripts in an HTML page, the page becomes unresponsive until the script is finished.
-A web worker is the javascript that run in the background, independently of other scripts, without affecting the performance of the page.You can continue to do whatever you want:clicking, selecting things etc...,while the web workers runs in the background.

AJAX:
-AJAX is not a programing language.
-AJAX is a technique for accessing web servers from a web page.
-AJAX stands for Asynchronous Javascript And XML.
-AJAX just uses a combination of:
   -A browser built-in XMLHttpRequest object(to request data from a web server).
   -Javascript and HTML DOM(to display or use the data).
-AJAX allows web pages to be updaed asynchronously by exchanging data with a web server behind the scenes.This means that it is possible to update parts of a web page, without reloading the whole page.

AJAX - The XMLHttpRequest Object:
-The keystone of AJAX is the XMLHttpeRequest object:
1.Create an XMLHttpRequest object.
2.Define a callback function.
3.Open the XMLHttpRequest Object.
4.Send a Request to a server.

-syntax for creating an XMLHttpRequest object:
 variable = new XMLHttpRequest();

AJAX-XMLHttpRequest:
-The XMLHttpREquest object is used to request data from a server.

Send a request to a server:
-To send a request to a server, we use the open() and send() method of the XMLHttpRequest object.

GET or POST:
-GET is simpler and faster than POST, and can be used in most cases.
-However always use POST request when:
  -A cached file is not an option(update a file or database on the server).
  -Sending a large amount of data to the server(POST has no size limitations).
  -Sending user input(which can contain unknown characters), POST is more robust and secure than GET.

AJAX - server Response:
-Server response property:
   responseText: get the response data as a string.
   responseXML: get the response data as XML data.
-AJAX can be used for interactive communication with a database.

JSON:
-JSON stands for Javascript Object Notation.
-JSON is plain text format for storing and transporting data.
-JSON is similar to the syntax for creating Javascript objects.
-JSON is used receive,send and store data.

Why JSON:
-JSON is make it easy to send and store data between computers.
-JSON is text only and language independent*.

JSON and Javascript:
-The JSON format is syntactically identical to the code for creating JavaScript objects.
-Because of this, a JavaScript program can easily convert JSON data into native JavaScript objects.
-JavaScript has a built in function for converting JSON strings into JavaScript objects:
  JSON.parse() 
-JavaScript also has a built in function for converting an object into a JSON string:
  JSON.stringify()

JSON syntax:
-JSON syntax is derived from Javascript object notation syntax.
   -data is in a name value pairs
   -data is seprated by commas
   -curly braces hold objects
   -square brackets hold arrays.
-JSON name require double qutoes.

JSON vs XML:
-Both JSON and XML can be used to receive data from a web server.
-JSON is like XML because: 
  -both JSON and XML are "self describing"(human readable)
  -both JSON and XML are hierarchical(values within values)
  -both JSON and XML can be parsed and used by lots of programming language.
  -both JSON and XML can be fetched with an XMLHttpRequest.

Why JSON is better than XML:
-XML is much more difficult to parse than JSON.
-JSON is parsed into a ready-to-use javascript.

JSON data types:
-in JSON, values must be one of the following:
  -a string
  -a number
  -an object(JSON object)
  -an array
  -a boolean
  -null 
-JSON values can not be one of the following data types:
  -a function
  -a date
  -undefined
-values in JSON can be arrays.
-values in JSON can be true/false.

JSON.parse():
-A common use of JSON is to exchange data to/from a web server.
-When receiving data from a webserver, the data is always a string.
-Parse the data with JSON.parse(), and the data becomes a Javascript object.

Exceptions:
-parsing Dates:
  -Date objects are not allowed in JSON.
  -If you need to include a date, write it as a string.
  -You can convert it back into a date object later.
-parsing Functions:
  -Functions are not allowed in JSON.
  -If you need to include a function, write it as a string.
  -You can convert it back into function later.
-you should avoid using functions in JSON, the function will lose their scope, and you would have to use eval() to convert them back into functions.

JSON.stringyfy():
-When sending data to a web server, the data has to be a string.
-You can convert any javascript datatype into a string with JSON.stringify().

JSONP:
-JSONP is method for sending JSON data without worrying about cross-domain issues.
-JSONP does not use the XMLHttpRequest object.
-JSONP uses the <script> tag instead.
-JSONP stands for JSON with padding.
-requesting a file from another domain can cause problems, due to cross-domain policy.
-requesting an external script from another domain does not have this problem.
-JSONP uses this advantage, and request files using the script tag instead of XMLHttpRequest objet.

jQuery vs javascript:
-jQuery was designed to handle browser Incompitibilties and to simplify HTML DOM Manipulation.Event Handling, Animations, and Ajax.
-for more than 10 years jQuery has been the most popular javascript library in the world.

Graphic Libraries:
-Javasctript libraries to use for all kinds of graphs:
  -Ploty.js
  -Chart.js
  -Google Chart

Ploty.js:
-Ploty.js is a charting library that comes with over 40 chart, types 3D charts, statistical graphs, and SGV maps.

Chart.js:
-Chart.js comes with many built-in chart types:
  -Scatter
  -Line
  -Bar
  -Radar
  -Pie and Doughnut
  -Polar Area
  -Bubble

Google chart:
-From simple line charts to complex tree maps, Google Chart provides a number of built-in chart types:
  -Scatter Chart.
  -Line Chrt.
  -Bae / column chart
  -Area Chart
  -Pie Chart 
  -Donut Chart
  -Org Chart
  -Map / Geo Chart

HTML Canvas:
-HTML Canvas is perfect for scatter plots
-HTML Canvas is perfect for line Graphs
-HTML Canvas is perfect for combining Scatter and Lines

Ploty.js:
-Ploty.js is charting library that comes with over 40 chart types:
  -Horizontal and vertical bar charts.
  -Pie and Donut Chart
  -Line Chart
  -Scatter and Bubble Plots
  -Equation plots
  -3D Charts
  -Statistical Graphs
  -SVG Maps
-Ploty.js is free abd open-source under MIT license.It costs nothing to install and use. You can view the source, report issues and contributing using Github.

Bubble plots:
-Bubble plots are scatter plots where markers have variable color, size and symbols.
-It is a type of 3-dimensional chart with only two axes(x and y)where the size of the bubble communicates the third dimension.

Chart.js:
-Chart.js is a free library for making HTML-based charts. It is one of the simplest visualization libraries for Javascript and comes with many built-in chart types.
  -Scatter plot
  -Line chart
  -Bar chart
  -Pie chart
  -Donut chart
  -Bubble chart
  -Area chart
  -Radar chart
  -Mixed chart

Google Chart:
-from a simple line charts to complex hierarchical tree maps, the google chart gallary provides a large number of ready-to-use chart types:
  -Scatter chart
  -Line chart
  -Bar / Column chart
  -Area Chart
  -Pie chart 
  -Donut chart
  -Org chart
  -Map / Geo Chart.

D3.js:
-D3.js is a Javascript library for manipulating HTML data.
-D3.js is easy to use.
-To use D3.js in your web page, add a link to the library.