The SQL SELECT DISTINCT Statement:
-The SELECT DISTINCT statement is used to return only distinct(unique) values.
-By using the COUNT() function with the DISTINCT keyword, we can count the number of unique elements.

SQL WHERE Clause:
-the WHERE clause is used to filter records.
-the WHERE clause is used to extract only those records that full fill specific condition.

Text Fields vs. Numeric Fields:
-SQL requires single quotes around text values(most database systems will also allow double quotes)

Operators in WHERE clause:
-You can use other operators than the = operator to filter the search.
- =, >, <, >=, <=
- <>: Not equal. Note: in some verions of SQL this operator may be wriiten as !=.
-BETWEEN: between a certain range.
-LIKE: Search for a pattern.
-IN: To specify multiple possible values for a column. 

SQL ORDERED BY keyword:
-The ORDERED BY keyword is used to sort the result-set in ascending and descending oreder.
-The ORDERED BY keyword sorts the result-set in ascending order by default.

ORDER BY DESC:
-To sort the records in descending order, use the DESC keyword.

SQL AND operator:
-the WHERE clause can contain one or many AND operators.
-the AND operator is used to filter records based on more than one condition.
-the AND operator displays a record if all the conditions are true.

AND vs. OR:
-The AND operator displays a record if all the conditions are TRUE.
-The OR operator displays a record if any of the conditions are TRUE.
-The WHERE clause can contain one or more OR operators.
-The OR operator is used to filter records based on more than one condition.
-The OR operator displays a record if any of the conditions are TRUE.

SQL NOT Operator:
-The NOT operator is used in the WHERE clause to return all records that DO NOT match the specified criteria.It reverse the result of a condition from true to false and vice-versa.
-The NOT operator is also usedin combination with other operators to exclude data, such as:
  -NOT LIKE
  -NOT BETWEEN
  -NOT IN
  -IS NOT NULL
  -NOT EXISTS 
-The NOT LIKE Operator is used in the WHERE clause to exclude rows that match a specified character pattern.
-There are two wildcards often used in conjunction with the NOT LIKE operator:
  -A percent sign % - represent zero, one or multiple characters
  -A underscore sign _ -represents a singel character
-The NOT BETWEEN operator is used in the WHERE clause to select rows where a values falls outside a specified inclusive range.
-The NOT BETWEEN operator can be used with numeric, text, or date values.
-The NOT IN operator is used in the WHERE clause to exclude rows that match any value in a specified list or a subquery result set.
-In SQL, the "NOT Greater Than" condition is most often expressed with the standard greater than or equal to (>=) operator.

SQL INSERT INTO Statement:
-The INSERT INTO statement is used to insert new records in a table.

SQL NULL Values:
-if a field in a table is optional, it is possibel to insert or update a record withoiut adding any value to this field.This way the field will be saved with a NULL value.
-A NULL value represents an unkown, missing, or inapplicable data in a database field.It is not a value itself, but a placeholder to indicate the absence of data. 

How to Test for NULL Values:
-It is not possible to test for NULL values with comparison opereator, such as =, < or <>.
-We will have to use the IS NULL and IS NOT NULL operators instead.

The IS NULL Operator:
-The IS NULL operator is used to test for empty values(NULL values).
-Always use IS NULL to look for NULL values.

The IS NOT NULL operator:
-The IS NOT NULL operator is used to test for non-empty values(NOT NULL values).

SQL UPDATE Statement:
-The UPDATE statement is used to update or modify one or more records in a table.
-Be carefull when updating records in a table! Notice the WHERE clause in the UPDATE statement. The WHERE clause specifies which records that should be updated. If you omit the WHERE clause, all records in the table will be updated!

UPDATE Multiple records:
-The WHERE clause determines which records that will be updated.

SQL DELETE Statement:
-The DELETE statement is used to delete existing records in a table.

The SQL SELECT TOP Clause:
-The SELECT TOP clause is used to limit the number of records to return.
-The SELECT TOP clause is useful on large tables with thousands of records.Returning a large number of records can impact performance.

SQL Aggregrate Functions:
-An aggrefrate function is a function that performs a calculation on a set of values, and return a single value.
-Aggregate functions are often used with the GROUP BY clause of the SELECT statement. The GROUP BY clause splits the result-set into groups of values and the aggregate function can be used to return a single value for each group.
-The most commonly used SQL aggregate functions are:
  -MIN()- returns the smallest value of a column.
  -MAX()- returns the largest value of a column.
  -COUNT() -returns the number of rows in a set.
  -SUM()- returns the sum of a numerical column
  -AVG()- returns the avg value of a numerical column
-Aggregate functions ignore null values(except for COUNT(*)).

SQL MIN() Function:
-The MIN() function returns the smallest value of the selected column.
-The MIN() function works with numeric, string, and data types.

Set Column Name(Alias):
-When using MIN(), the returned column will not have a name.
-Use the AS keyword to give the column a descriptive name.

Use MIN with GROUP BY:
-Here we use the MIN() function and the GROUP BY clause, to return the smallest price for each category in the Products table.