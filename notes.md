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
