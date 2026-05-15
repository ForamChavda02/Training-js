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