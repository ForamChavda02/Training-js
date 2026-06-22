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

SQL MAX() function:
-The MAX() function returns the largest value of the selected column.
-The MAX() function works with numeric, string, and date data types.

Set column Name(Alias):
-When you use MAX(), the returned column will not have name.
-Use the AS keyword, to give the column a descriptive name.

SQL COUNT() Function:
-The COUNT() function returns the number of rows that matches a specified criterion.
-The behavior of COUNT() depends on the argument used within the parentheses
  -COUNT(*)- Counts the total number of rows in a table(including NULL values).
  -COUNT(columnname)- Counts all non-null values in the column.
  -COUNT(DISTINCT columnname)- Counts only the unique, non-null values in the column.
-The COUNT(column_name) counts all non-null values in the specified column.
-You can ignore duplicates by using the DISTINCT keyword.
-The COUNT(DISTINCT column_name) counts only the unique, non-null values in the column.
-if DISTINCT is specified, rows with the same value for the specified column will be counted as one.
-You can use WHERE clause to specify conditions.
-When using COUNT(),the returned column will not have a name.Use the AS keyword to give the column a descriptive name.
-Use COUNT() with GROUP BY

SQL SUM() Function:
-The SUM() Function is used to calculate the total sum of values within a numeric column.
-The parameter inside the SUM() function can also be an expression.

SQL AVG() Function:
-The AVG() function returns the average value of a numeric column.
-The AVG() function ignores the NULL values in the column.

SQL LIKE Operator:
-The LIKE operator is used in a WHERE clause to search for a specified pattern within a column's text data.
-There are two wildcards often used in conjuction with the LIKE operator:
  -A percent sign % - represent zero, one, multiple characters
  -A underscore sign_- represents a single character

SQL Wildcards Characters:
-A wildcard character is used to substitute one or more characters in a string.
-Wildcard characters are used with the LIKE operator, The LIKE operator is used in WHERE clause to search for a specified pattern in a column.

Wild Characters:
- %: Represents zero or more characters.
- _: Represents a single character.
- []: Represents any single character within the brackets*
- ^: Represents any character not in the brackets*
- -: Represents any single character within the specified range*
- {}: Represents any escaped character**
-* not supported in postgre and mysql 
-** only supported in Oracle database.

SQL IN Operator:
-The IN operator is used in the WHERE clause to check if a specified column's value matches any value within a provided list.
-The IN operator functions as a shorthand for multiple OR conditions, making queries shorter and more readable.
-You can also use IN with a subquery in the WHERE clause.
-With subquery you can return all records from the main query that are present in the result of the subquery.

NOT IN Operator:
-By using the NOT IN operator, you return all records that are NOT any of the values in the list.
-You can also use NOT IN with select just like IN.

SQL BETWEEN Operator:
-The BETWEEN operator is used in the WHERE clause to select values within a specified range.
-The range is inclusive - the beginning and end values of the range are included in results.

NOT BETWEEN operator:
-The NOT BETWEEN operator is used in the WHERE clause to select values outside a specified range.

SQL Aliases:
-An alias is created with the AS keyword, and is often used to make a column name more readable.
-An alias only exists for the duration of that query.

Aliases with spaces:
-If you want your alias to contain one or more spaces, like "My Great Product", surround the aliasname with square brackets or double quotes.

SQL Joins:
-The join clause is used to combine rows from two or more tables, based on related column between them.
-It is a good practice to also include the table name when specifying columns in SQL joins.

SQL UNION Operator:
-The UNION operator is used to combine the result-set of two or more SELECT statements.
-The UNION operator automatically removes duplicate rows from the result set
-Requirement for UNION:
  -Every SELECT statement within UNION must have the same number of columns.
  -The columns must also have similar datatypes.
  -The columns in every SELECT statement must also be in the same order.
-Use UNION ALL to select duplicate values.

SQL GROUP BY Statement:
-The GROUP BY statement is used to group rows that have the same values into summary rows, like "Find the number of customers in each country".
-The GROUP BY statement is almost always used in conjunction with aggregate functions like COUNT(), MAX(), MIN(), SUM(), AVG(), to perform calculation on each group. 

The EXISTS Operator:
-The EXISTS operator is used in WHERE caluse to check whether a subquery returns any rows.
-The EXIXTS operator evaluate to TRUE if the subquery returns at least one row, and FALSE otherwise.

The ANY Operator:
-The ANY Operator is used to compare a value to every value returned by a subquery.
-The ANY Operator evaluates to TRUE if at least one value in the subquery result-set meet the condition.
-The operator must be a standard comparision operator(=, <>, !=, >, >=, <, <=).

The SQL ALL Operator:
-The ALL operator is used to compare a value to every value returned by a subquery.
-The ALL operator evaluates to TRUE if every value in the subquery result-set meet the condition.
-The ALL operator is typically used with WHERE and HAVING statements.

The SQL SELECT INTO Statement:
-The SELECT INTO Statement is used to create a new table and fill it with data from an existing table.
-The SELECT INTO statement is useful for creating backups or for creating a temporary table for analysis.
-The SELECT INTO statement is useful for creating backups of for creating a temporary table for analysis.

The SQL INSERT INTO SELECT Statement:
-The INSERT INTO SELECT statement is used to copy data from an existing table and insert it into another existing table.
-The INSERT INTO SELECT statement requires that the data types in source and target tables match.
-The existing records in the target table are uneffected.

The SQl CASE Expression:
-The CASE expression is used to define dofferent results based on specified condition in an SQL statement.
-The CASE expression goes through the condition and stops at the first match(like an if-then-else statement).So once a condition is true it will stop processing and return the result.If no conditions are true, it returns the value in the ELSE clause, If there is no ELSE clause and no conditions are true, it returns NULL.

SQL NULL Functions:
-Most common functions are:
  -COALCASE()- The preffered standard.(works in MySQL, SQL Server and Oracle).
  -IFNULL()- (MYSQL)
  -ISNULL()- (SQL Server)
  -NVL()- (Oracle)
  -IsNULL()- (MS Access).
-A NULL value represent an unknown or missing data in a database field.It is not a value itself, but a placeholder to indicate the absence of data.

The BACKUP DATABASE Statement:
-The BACKUP DATABASE statement is used in SQL Server to create a full backup of an existing SQL database.
-Syntax: BACKUP DATABASE databasename
         TO DISK = 'filepath';

The BACKUP WITH DIFFERENTIAL Statement:
-A differential backup olny captures the data that has changed since the last full backup.
-A differential backup is required at least one prior full backup.
-A differential backup reduces the backup time(since only the changes are backed up).

SQL CREATE TABLE Statement:
-The CREATE TABLE statement is used to create a new table in a database.

-In most databases you cannot drop a table that is referenced by a foreign key constraint in another table.To solve this you must remove the foreign key constraint or drop the dependent table
-The ALTER TABLE statement is used to add, delete, or modify columns in an existing table.

SQL Constraints:
-SQL constraints are rules for data in a table.
-Constraints are used to prevent insertion of invalid data in a table, and ensure the accuracy and relaiblity of the data in a table.If there is any violation between the constraint and the data action, the action is aborted.
-Constraints can be specified in two ways:
 -When a table is created(through CREATE TABLE statement).
 -After a table is created(throuhgh ALTER TABLe statement).

SQL Constraint Types:
-NOT NULL: Ensures that a column cannot hava a NULL value.
-UNIQUE: Ensures that all values in a column are unique.
-PRIMARY KEY: Uniquely identify each row in a table(a combination of NOT NULL and UNIQUE).
-FOREIGN KEY: Establishes a link between data in two tables. and prevents action that will destroy the link between them.
-CHECK: Ensures that the values in a column satisfies a specific condition.
-DEFAULT: Sets a default value for a column if no value is specified.
-CREATE INDEX: Creates indexes on columns to retrieve data from the database faster.

SQL NOT NULL Constraint:
-The NOT NULL constraint enforces a column to NOT accept NULL values. This enforces a field to always contain a value, Which means that you cannot insert a new record, or update a record without adding a value to this field.

SQL UNIQUE Constraint:
-The UNIQUE constraint ensures that all values in a column are unique.
-Both UNIQUE and PRIMARY kEY contraints provide a guarantee for uniqueness for a column or set of column or set of columns.However, you can have many UNIQUE constraints per tabel, but only one PRIMARY KEY constraint per table.

SQL PRIMARY KEY Constraint:
-The PRIMARY KEY constraint uniquely identifies each record in a database table.
-A PRIMARY KEY constraint ensures unique values, and cannot contain NULL values(it is a combination of both a UNIQUE constraint and a NOT NULL constraint).
-A table can only have ONE PRIMARY KEY contraint, The primary key can either be a single column, or a combination of columns.

SQL FOREIGN KEY Constraint:
-The FOREIGN KEY constraint establishes a link between two tables, and prevents action that will destroy the link between them.
-A FOREIGN KEY is a column in a table that refers to the PRIMARY KEY in another table.
-The table with the foreign key column is called the child table, and the table with the primary key column is called the referenced or parent table.
-The FOREIGN KEY constraint prevents invalid data from being inserted into the foreign key column(in the child table), because the value has to exist in the paraent table.
-The FOREIGN KEY constraint also prevents you from deleting a record in the parent table, if related rows still exist in the child table.

SQL CHECK Constraint:
-The CHECK constraint is used to ensure that the values in a column satisfies a sepecific column.
-The CHECK constraint evaluates the data to TRUE or FALSE. If the data evaluates to TRUE, the operation is ok. If the data evaluates to FALSE, the entire INSERT or UPDATE operation is aborted, and an error is raised.

SQL DEFAULT Constraint:
-The DEFAULT constraint is used to automatically insert a default value for a column, if no value is specified.
-The default value will be added to all new records (if no other value is specified).
-The DEFAULT constraint can also be used to insert system values, by using functions like CURRENT DATE() to insert current date.

SQL CREATE INDEX Statement:
-The CREATE INDEX statement is used to create indexes on tables in database, to speed up data retrieval.
-The users cannot see the indexes, they are just used to speed up searches/queries.
-Updating tables with indexes are more time consuming than tables without indexes(because the indexes must also be uodated).So, only create indexes on columns that are frequently searched against.

Types of indexes:
-There are two types of indexes:
-CREATE INDEX- Creates a non - unique index(duplicate values are allowed).
-CREATE UNIQUE INDEX- Creates a unique index(duplicate values are not allowed).
-The DROP INDEX Statement is used to remove an index.

SQL AUTO Increment field:
-An autoincrement field is a numeric column that automatically generates a unique number, when a new record is inserted into a table.
-The auto-increment field is typically the PRIMARY KEY filed that we want to automatically be assigned a unique number, every time a new record is inserted.

Synatx for SQL Server:
-The SQL uses the 'IDENTITY' keyword to perform an auto-increment feature.
-To specify that the "id" column should start at value 10 and increment by 5, change it to IDENTITY(10, 5).

SQL Dates:
-The most difficult part when working with database, is to be sure that the format of the date you are trying to insert/select, matches the format of the date column in the database.
-To keep your queries simple and easy to maintain, do not use time-components in your dates, unless you have to.

SQL VIEW:
-An SQL view is a virtual table based on the result-set of an SQL statement.An SQL view contains rows and columns, just like a real table. The fields in the view are feilds from one or more real tables in the database.
-You can add SQL statements and functions to a veiw and present the data as if it were coming from one single table.
-A view is created with the CREATE VIEW statement.
-In SQL server view can be updated with the ALTER VIEW statement.
-A view is deleted with the DROP VIEW statement.

SQL Injection: 
-SQL injection is a code injection that can destroy your database. SQL injections are a common web hacking technique.

SQL Parameters:
-SQL Parameters prevent SQL Injection.
-SQL parameters (Parameterized Queries) can be used to protect a web site from SQL injections.
-A parameterized query is a SQL statement that uses placeholders instead of directly adding the input values into the query text. The placeholder get replaced with the actual values when the query executes.This makes the queries more safe and more reusable.

SQL Prepared Statements:
-SQL Prepared Statements - Prevent SQL Injection.
-Prepared statements seperates the query structure(the SQL) from the actual data(user input).

SQL Hosting:
-If you want your web site to store and retrieve data from a databse, your webserver must have to access to a database-system.
-If your web server is hosted by an internet Service Provider(ISP), you will have to look for SQL hosting plans.
-Some common SQL hosting databases are MYSQL, PostgreSQL, SQL Server and Oracle.
