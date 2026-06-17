DBMS:
-Database management System(DBMS) is software used to manage data from a database.It acts as an interface between the database and end users application,ensuring the data is consistently organised,easily accessible and secure.
-A Database is a structured collection of data that is stored in an electronic device.
-A relation database stores data in the form of tables, and NoSQL database stores data in the form of key-value pairs.
-A DBMS is a software that allows to create, update, and retrieval of data in an organized way.It also provides security to the database.

Types of DBMS Architecture:
-A DBMS architecture defines how users interact with the database to read, write or update information.

1-Tier Architecture:
-1-Tier-Architecture: the user works directly with the database on the same system.This means the client, server and database are all in one application.The user can open the application,interact with the data, and perform tasks without needing a seprate serevr or network connection.

2-Tier Architecture:
-The 2-Tier Architecture is similar to basic client-server model.The application at the client end directly communicates with the database on the server side. APIs like ODBC and JDBC are ued for this interaction.The server side is responsible for providing query processing and transaction management functionality.

3-Tier Architecture:
-In 3-Tier Architecture, there is another layer between client and the server.The client does not communicate with the server.Instead, it interacts with an application server which further communicates with the database system and then the query processing and transaction managemet takes place. This intermediate layer acts as a medium for the exchange of partially processed data between the server and the client.This type of architecure is used in the case of large web applications.

ER-Model:
-The Enity-Relationship model ia s conceptual model for designing a database.This model represent the logical structure of database, including entites, their attributes and relationship between them.
  -Entity: An object that is stored as data.Eg: Student, Course, or Company.
  -Attribute: Properties that describe an entity.Eg: StudentID, CourseName, EmployeeEmail.
  -Relationship: A connection between enties.Eg: Student Enrolls in a course.

Strong Entity:
-A type of entity that has a key attribute that can uniquely identify each instance of the entity.A strong Entity does not depend on any other Entity in the Schema for its identification. It has a primary key that enusres its uniqueness and is represented by rectangle in an ER diagram.

Weak Entity:
-It cannot be uniquely identified by its own attribute alone.It depends on a strong entity to be iedntified.A weak entity is represented by a double rectangle.

Types of Attributes:
-1.key attribute: The attribute which uniquely identifies each entity in the entity set is called the key attribute.Eg: Roll_No.in ER diagram,the key attribute is represent by an oval with an underline.
-2.Composite Attributes: An attribute composed of many other attributes is called composite attributes.Eg: the address attribute.
-3.Multivalued Attribute: An attributes consisting of more than one value for a given entity.Eg: phone number.In ER diagram multi-valued attribute represented by a double oval.
-4.Derived Attribute: An attribute that can be derived from other attributes of the entity types is known as derived attribute.Eg: Age; age can be derived from the DOB.in ER diagram derived attribute is represented by dashed-oval.

Relationship Type and Relationship Set:
-A Relationship type represents the association between entity pages.For example 'Enrole in' is a relationship type that exists between entity type Student and Course.In ER diagram,the relationship is represented by a diamond and connecting the entites with lines.
-A set of relationship of the same type is known as relationship set 

Degree of a relationship set:
-The number of different entity sets participating in a relationship set is called the degree of a relationship set.
-1.Unary/Recursive Relationship: When there is only ONE entity set participating in a relation.For example one pearson is married to only one pearson.
-2.Binary Relationship: When there are two entities set participating in a relationship.For example student is enrolled in a Course.
-3.Ternary Relationship: When there are three entity sets practising in a relationship.
-4.N-ary Relationship: When there are n entities set participating in a relationship, the relationship is called an n-ary relationship.

Cardinality in ER Model:
-The maximum number of times an entity of an entity set participates in a relationship ste is known as cardinality.
-Cardinality can be of different types:
-1.One-to-one: When each entity in each entity set can take part only once in the relationship, the cardinality is one-to-one 
-2.One-to-many: In a one-to-many relationship, one entity can be associated with multiple entites.
-3.Many-to-one: When entities in one entity set can take part only once in the relationship set and entities in other entity sets can take part more than once in a relationship set, cardinality is many-to-one.
-4.Many-to-Many: When entities in all entity stes can take part more than once in the relationship cardinality is many to many.

Participation Constraint:
-Participation Constraint is applied to the entity participating in the relationship set.
-1.Total Participation: Each entity in the entity set must participate in the relationship.If each student enroll in a cousre, the participation students will be total.Total participation is shown by a double line in the ER diagram.
-2.Partial Participation: The entity in a entity set may or may Not participate in the relationship.If some courses are not enrolled by any of the students, the participation in the course in the course will be partial.

Generalization:
-Process of extracting common properties from a set of entities and creating a generalized entity from it.it is a bottom-up approach in which two or more entites can be generalized to a higher-level entity if they have some attributes in commomn.

Specialization:
-An entity is dived into sub-entites based on its characteristicts.It is a top-down approach where the higher-level entity is specialized into two or more lower-level entities.

Inheritance:
-It is an important feature of generalization and specialization.In specialization, a higher-level entity is divided into lower-level sub-entities that inherits its attributes.in both cases,inheritance allows sub-entities to reuse the properties of the parent entity.

Aggregation:
-An ER diagram is not capable of representing the relationship between an entity and a relationship which may be required in some scenarios.
-In those cases, a relationship with its corresponding entities is aggregated into a higher-level entity.
-Aggregation is an abstraction through which we can represnt relationships as higher-level entity sets.

Relational model:
-The relational model is a fundamental concept in Database Management system that organizes data into tables.also known as relations.Each tables has multiple columns, each with a unique name. These tables are also called relations.

Terminologies:
-Relations(tables):It is the basic structure in which data is stored.Each relation is made up of rows and columns.
-Relational Schema:Schema reprsents the structure of a relation.
-Relational Instance:The set of values present in a relationship at a particular instance of time is known as relational instance.
-Attribute:Each relation is defined in terms of some properties, each of which is known as an attribute.or Each column shows an attribute of the data.
-The domain of attribue: The possible values an attribute can take in a relation is called its domain.
-Tuple: Each row of relation is known as a tuple.
-Cardinality: Cardinality refers to the number of distinct values in a column compared to the total number of rows in a table.
-Degree(Arity): The degree of relation refers to total number of attribute a relation has.It is also known as Arity
-Primary key: The primary key is an attribute or a set of attribute that help to uniquely identify the tuples(records) in the relational table.
-NULL values: Values of some attribute for some tuples may be unknown, missing, or undefined which are represented by NULL.Two NULL values in a relationship are considered different from each other.

RDBMS Vendors:
-There are several vendors that offer Relational Database Management System(RDBMS).Here are some of the most popular ones:
-Oracle, Microsoft, IBM, MySQL, PostgreSQL, SAP.

Relational Algebra:
-It is a procedural Language.It consists of a set of operators that can be performed on relations.
-Relational Algebra has mainly 9 types of operators:
   -UNION
   -INTESECTION
   -MINUS
   -TIMES
   -SELECTION
   -PROJECTION
   -JOIN
   -DIVISION
   -RENAME

-1.UNION(U): A and B are two relations. It displays total values(attributes) in both relations.It avoids duplication values in both relations.U symbols can be used.
  -A UNION B (or) A U B.
-2.INTERSECTION: A and B are two relations. It displays common element in both relations.
  -A INTRESECTION B 
-3.DIFFERENCE(-): A and B are two relations.It displays elements in relation A not in relation B.
  -A MINUS B (or) A - B.
-4.CARTESIAN PRODUCT(X):A and B are two relations.It has a new relation consisting of all pair wises combinations of all element in A and B. The relation A has "m" elements and relation B has "n" elements,then the resultant relation will be "m * n".
  -A TIMES B (or) A X B.
-5.SELECTION: Selection operation choose the subset of tuples from the relation that satisfies the given condition.
-in general the select condition is a Boolean condition(i.e. an expression using logical connection) of terms that have the form attribute1 OP attribute2
where OP is the comparison operators <, >, =, >= etc.
6.PROJECTION: It displays some specified columns in a relation.“π” operator can be used to select some specified columns in a relation.It selects tuples that specify the given predicate from a relation.It displays some specified columns by using some conditions.
  - π(col1,col2…) Relation Name
7.JOIN():It combines two or more relations. It can be mainly divided into mainly 4 types. These are mainly:
  -Inner Join
  -Outer Join
  -Left Outer join
  -Right Outer join 
8.DIVIDE(÷): It divides the tuple from one relation to another relation.
  -A DIVIDE B (or) A ÷ B
9.RENAME(ρ):It gives another name to the relation.
  -ρ(OLD RELATION, NEW RELATION)

Features of the Relational Model:
-Tables/Relations: The basic building block of the relational model is the table or relation, which represents a collection of related data. Each table consists of columns, also known as attributes or fields, and rows, also known as tuples or records.
-Primary Keys: In the relational model, each row in a table must have a unique identifier, which is known as the primary key. This ensures that each row is unique and can be accessed and manipulated easily.
-Foreign key: Foreign keys are used to link tables together and enforce referential integrity. They ensure that data in one table is consistent with data in another table.
-Normalization: The process of organizing data into tables and eliminating redundancy is known as normalization.Normalization is important in relational model because it helps to ensure that data is consistent and easy to maintain.
-Codd's Rules: Codd's Rules are a set of 12 rules that define the characteristics of a true relational DBMS. These rules ensure that the DBMS is consistent, reliable, and easy to use.
-Atomicity, Consistency, Isolation, Durability(ACID): The ACID properties are a set of properties that ensures that transactions are processed reliably in the relational model.Transactions are set of operations that are executed as a single unit, ensuring that data is consistent and accurate.

Keys in Relational Model:
-Keys are fundamental elements of the relational database model that ensure uiqueness, data integrity, and efficient data access.

Types of Database Keys:
-1.Candidate key: The minimal set of attributes that can uniquely identify a tuple is known as a candidate key. For example, STUD_NO in STUDENT relation.
-2.Super Key: The set of one or more attributes(columns) that can uniquely identify a tuple(record) is known as Super key.It may not include extra attributes that aren't important for uniqueness but still uniquely identify the row.For Example, STUD_NO.
-3.Alternate key: An alternate key is any candidate key in a table that is not chosen as the primary key. In other words, all the keys that are not selected as the primary key are considerd alternate keys.
-4.Foreign key: A foreign key is an attribute in one table that refers to the primary key in another tabel.the table that contains the foreign key is called the referencing table and the table that is referenced is called the referenced table.
-5.Partial key: A partial key is chosen from a weak entity to help identity records, but it cannot uniquely identify a record by itself.
-6.Primary key: A primary key is chosen from the set of candidate keys to uniqely identify each record in a table.
-7.Secondary key: A secondary key is an attribute or a combination of attributes used to search or query records in a table, but it doesn't gurantee uniqueness.
-8.unique key: A unique key is a database constraint that ensures that all values in a specific column or a combination of columns are unique across all the rows in a table.It guarantees that no two rows in the table can have the same value in the columns defined as part of the unique key.
-9.Composite key: Sometimes, a single column is not enough to identify all records in a table, so a combination of multiple attributes is used.An optimal set of such attributes is chosen to ensure that every row is uniquely identifiable.It acts as a primary key if there is no primary key in a table.
-10.Surrogate keys: A surrogate key is an artifical attribute created to uniquely identify each record in a table when no suitable natural key is available.

Join operators:
-Combine data from two or more relations based on a related attribute, allowing for more complex queries and data retrieval.Different types of joins:
  -1.Inner join: combines rows from two relations based on matching condition and only returns rows where there is a match in both relations.If a record in one relation doesn't have a corresponding match in the other, it is excluded from the result.This is the most common type of join.
    -Conditional Join: A conditional join is an inner join where the matching condition can involve any comparision operators like = , greater than.
    -Equi join: An equi join is a type of conditional join where the condition is specifically equality(=) between two columns from both relations.
    -Natural join: A natural join automatically combines relations based on columns with the same name and type, removing duplicte columns in the result.It is more efficient way of joining.
  -2.Outer join: Returns all rows from one relation, and the matching rows from the other relation.If there is no match, the result will still include all rows from the outer relation will be NULL values in the columns from the unmatched relation.
    -Left Outer Join: A left outer join returns all rows from the left relation and the matching rows from the right relation.
    -Right Outer Join: A right outer join returns all rows from the right relation and the matching rows from the left relation.
  -3.Full Outer Join: A full outer join returns all rows when there is a match in either the left or right relation.

Join Operations vs Nested Query in DBMS:
-Relational databases often store data in multiple tables to reduce redundancy and improve efficiency through normalization. However, meaningful information is often spread across these tables.To retrive and process such data, SQL provides two key mechanisms - Joins and Nested Queries(subqueries).
-while both achieve similar objectives-combining and filtering data - they differ in performance,readability and use cases.Understanding their difference is crucial for writing efficient and maintaiable SQL queries.
-Joins are generally faster for large datasets, but subquries offer flexibility for complex conditions and smaller datasets.

Tuple Relational Calculus(TRC) in DBMS:
-Tuple Relational Calculus is a non-procedural query language used to retrieve data from relational databases by describing the properties of the required data(not how to fetch it).It is based on first-order predicate logic and uses tuple variables to represents rows of tables.

Domain Relational Calculus in DBMS:
-Domain Relational Calculus(DRC) is a formal query language for relational databases.

Armstrong's Aximos in Functional Dependency in DBMS:
-Armstrong's Aximos refer to a set of inference rules that are used to test the logical implimentation of functioanl dependencies.
-Aximos Reflexivity: If A is a set of attributes and B is subset of A, then A holds B.if B ⊆ A then A → B.This property is trivial property.
-Axiom Augmentation: If A → B holds and Y is the attribute set, then AY → BY also holds.That is adding attributes to dependencies,does not change the basic dependencies.If A → B, then AC → BC for any C.
-Axiom of Transitivity: Same as transitive rule in algebra.if A→B holds and B→C holds, then A→C also holds.In the dependency A → B we say that A functionally determines B.

Normal Forms in DBMS:
-Normal forms are a set of progressive rules(or designed checkpoints)for relational schemas that reduce redundancy and prevent data anomlaies.Each normal form(1NF, 2NF, 3NF, BCNF, 4NF, 5NF)is stricter than a previous one: meeting a higher normal form implies the lower ones as satisfied.Think of them as layers of clanliness for your tables:the deeper you go,the fewer redundancy and integrity problems you'll have.

Benifits of using normal form:
-Reduce duplicate data and wasted storage .
-Prevent insert, update, and delete anomalies.
-Improve data consistency and integrity.
-Make the schema easier to maintain and evolve.

1.First Normal form(1NF):Eliminating duplicate records
-A table is in 1NF if it satifies the following conditions:
  -all columns contain atomic values(i.e., indivisible value).
  -Each row is unique(i.e., no duplicate value).
  -Each column has a unique name.
  -The order in which data is stored does not matter.
  -Ex: If a table has a column "Phone Number" that stores multiple phone numbers in a single cell, it violets 1NF.Tobringe it into 1NF, you need to separate phone numbers into individual rows.
2.Second Normal Form(2NF):Eliminating Partial Dependency.
-A relation is in 2Nf if it satisfies the conditions of 1NF and additionaly, contains no partial dependency exists, meaning every non-prime attribute (non-key attribute) must depend on the entire primary key, not just a part of it.
-Example:For a composite key(StudentId, CourseID), if the "Student Name" depends only on "StudentID" and not on the entire key, it violates 2NF.To normalize, move StudentName into a seprate table where it depends on "StudentID".
3.Third Noraml Form(3NF):Eliminating Transitive Dependency.
-A relation is in 3NF if it satisfies 2NF and additionally, there are no transitive dependencies. In simpler terms, non-prime attributes should not depend on other non-prime attributes.
-Example:Consider a table with(StudentId, CourseID, Instructor).If Instructor depends on "CourseID",and "CourseID" depends on "StudentID", the instructor indirectly depends on "StudentID", then instructor indirectly depends on "StudentID", which violates 3NF.To reslove this, place Instructor in a seprate table linked by "CourseID".
4.Boyce-Codd Normal Form(BCNF):The Strongest Form of 3NF
-BCNF is stricter verison of 3NF where for every non-trivial functional dependency(X → Y), X must be a superkey(a unique identifier for a record in the table).
-Example: If a table has a dependency (StudentID, CourseID) → Instructor, but neither "StudentID" nor "CourseID" is a superkey, then it violates BCNF.To bring it into BCNF, decompose the table so that each determinante is a candiadte key.
5.Fourth Normal Form(4NF):Removing Multi-Valued Dependencies:
-A table is in 4NF if it is in BCNF and has no multi-valued dependencies. A multi-valued dependency occurs when one attribute determines another and both attributes are independent of all other attributes in the table.
-Example: If a table contains(StudentID, Course, Instrutor) and there is a dependency where all combinations of these columns are needed for a specific relationship, you would split them into smaller tables to remove redudancy.

The Problem of Redundancy in Database:
-Redundancy means having multiple copies of the same data in database. This problem arises when a database is not normalized.Suppose a table of student details attributes is: studentId, student Name, collage name, collage rank, and course opted.
-Major problems caused by redundancy are called anomalies.

Types of Anomalies:
1.Insertion Anomaly: in insertion anomaly, if a student's details have to be inserted whose course has not been decided yet, then insertion will not be possible till the course is decided for the student.
2.Deletion Anomaly: in Deletion anomaly, if the details of students in this table are deleted then the details of the college will also get deleted which should not occur by common sense. This anomaly happens when the deletion of a data record results in losing some unrelated information that was stored as part of the record that was deleted from a table.
3.Updation Anomaly: in Updation Anomaly, Suppose the rank of the college changes that changes will have to be all over the database which will be time-consuming and computationally costly. All places should be updated, if updation does not occur at all places then the database will be in an inconsistent state.

Denormalization in database:
-Denormalization is a datbase optimization technique where redudant data is intentionally added to one or more tables to reduce the need for complex joins and improve query performance.It is not the oppostie of normalization, but rather an optimization applied after normalization.

ACID Properties in DBMS:
-Transactions are fundamental operations that allow us to modify and retrive data.However, to ensure the integrity of a databse, it is important that these transactions are executed in a way that maintains consistency, correctness, and reliability even in the case of failures/errors.This is where the ACID properties come into play.
-ACID properties in DBMS: 
   ACID: A = Atomicity -> all or nothing transactions.
         C = Consistency -> Valid State maintenance.
         I = Isolation -> Transactions do not affect each other
         D = Durability -> Permanent changes after commitment.
-1.Atomicity: Atomicity means a transaction is all-or-nothing either all its operation succeed, or none are appled.If any part fails the entire transaction is roll back to keep the database consistent.
-2.Consistency: Consistency in transactions means that the database must remain in a valid state before and after a transaction. 
-3.Isolation: Isolation ensures that transaction run independently without affecting each other.Changes made by one transaction are not visible to others until they are commited.It ensures that result of concurrent transactions is the same as if they were run one after another,preventing issues.
4.Durability: Durability ensures that once a transaction is committed, its changes are permanently saved, even if the system fails. The data is stored in non-volatile memory, so the database can recover to its last commited state without losing data.

Types of Schedules in DBMS:
-Scheduling is the process of determining the order in which transactions are executed.When multiple transactions run concurrently, scheduling ensures that operations are executed in a way that prevents conflicts or overlaps between them.
1.Serial schedule
  -Schedules in which transactions execute one after another without interleaving.i.e, no transaction starts utnil a running transaction has ended are called serial schedules.
2.Non-Serial schedule
  -Transactions execute in an interleaved manner in Non-Serial Schedule.
  -Non-Serial schedules are of two types:
    Seralizabel Scheduling(Concurrency control):
     -A non-serial schedule that behaves like a serial schedule.

Concurrency Control in DBMS:
-in a Database management system(DBMS),Concurrency control is a mechanism in DBMS that allows simultaneous execution of transactions while maintaining ACID properties.It maintains the integrity, accuracy and relaibility of data when multiple users or processes perform read/write operations concurrently.

Graph based concurrency control protocol in DBMS:
-In a database management system, multiple transactions often execute concurrently, which can lead to conflicts when they access the same data items.The graph-based concurrency control protocol manages these conflicts using a directed graph structure to ensure conflict serializable and consistency.

Multiple Granularity Locking in DBMS:
-Granularity refers to the size of the data item on which a lock is applied. Multiple Granularity locking introduces a hierarchical structure, where locks can be applied at various levels(e.g., Database, file, record) to balance efficiency and concurrency.

Database recovery techniques in DBMS:
-Database systems, like any other computer system, are subject to failures.Whether it's sudden power outage, a software bug, a hardware crash, a Database management system needs a way to get back up and running without losing data or leaving it in a corrupted state. This process of restoring the database to a correct and consistent state is called recovery.
Types of Recovery Techniques:
  -Atomicity: A transaction should either complete or fully or not at all.
  -Durability: Once a transaction is commited, its changes must stay in the database even if a failure occurs afterwards
-Some of the main database recovery techniques are:
1.Log Based Recovery: One of the most common recovery methods in modern databases.The keeps a log file(or journal) on stable storage that records every change-insert, update, delete-before it is applied to database.
  if a failure occurs DBMS reads log to decide what to do:
  -Undo: Reverse changes from transactions that didn't finish(ensuring atomicity).
  -Redo: Reapply changes from commited transaction(ensuring durability).
2.Shadow paging:
Shadow paging is alternative recovery technique that avoids the need for a log.It works by keeping two versions of the database pages during a transaction: a current page table and a shadow page table.
-the shadow page table points to the original, unmodified database pages from before the transaction began.It's a shadow of the consistent database state.
-When a transaction starts modifying data, new copies of the modified pages are created.The curent page table is updated to point to these new pages while the shadow page table remains unchanged.
3.checkpointing: Making recivery faster
Checkpointing is not a standalone recovery technique but a crucial optimization that works with Log-Based Recovery.Without it recovery from a crash require DBMS to process the entire log file, which could take a very long time.A checkpoint is like a bookmark in the log.
4.Backup and Restore:
This serves as the last safeguard against severe failures,such as a complete disk crash, by keeping backup copies of the databases files.

Deadlock in DBMS:
A deadlock occurs in a multi-user database envionment when two or more transactions block each other indefinitely by each holding a resource the other needs.This results in a cycle of dependencies(circular wait) where no transaction can proceed.

Necessary condition of Deadlock:
For a deadlock to occur, all four of these conditions must be true:
-Mutual Exclusion: Only one transaction can hold a particular resource at a time.
-Hold and Wait: The transactions holding resource may request additional resources held by others.
-No Preemption: The resources can not be forcibly taken from the transaction holding them.
-Circular Wait: A cycle of transactions exists where each transaction is waiting for the resource held by the next transaction in the cycle.

Indexing in Databases:
-Indexing in databases is a data structure technique used to speed up data retrieval operations by minimizing the number of disk accesses required to locate records.
-Stores copies of selected column(search key)values.
-Maintains pointers to the actual data rows in the main table.
-Allows faster searching without scanning the entire table.

Attributes of Indexing:
-Several important attributes of indexing affect the performance and efficiency of database operations:
-1.Access Types:This refers to the type of access, such as value based search, range access, etc.
-2.Access Time: Refers to the time needed to find a particular data element or set of elements.
-3.Insertion Time: To the time taken to find the appropriate space and insert new data.
-4.Deletion Time: Time taken to find an item and delted it as well as update the index structure.
-5.Space Overhead: It refers to the additional space required by the index.

Featuers:
-Efficient data structures: indexes use efficient data structure like B-trees, B+ trees, and hash tables to enable fast data retrieval.
-Periodic Index Maintenance: Maintainance task include updating, rebuilding, or removing obsolete indexes.
-Query Optimization: The DBMS query optimizer uses indexes to determine the most efficient execution plan for a query.
-Handling Fragmentation: Regular defragmentation can help maintain optimal performance.

B-Tree:
-A B-tree is a specialized m-way tree desinged to optimze data access, especially on disk-based storage systems.
-In a B-tree of oreder m, each node can have up to m children and m-1 keys, allowing it to efficiently manage large datasets.
-The value of m is decided based on disk block and key sizes.
-One of the standout feature of a B-tree is its ability to store a significant number of keys within a single node, including large key values.It significantly reduces the tree's height, hence reducing costly disk operations.
-B tree allow faster data retrival and updates, making them an ideal choice for systems requiring efficint and scalble data management.By maintaing balanced structured of all times,
-B-trees deliver consistent and efficient performance for critical operations such as search, insertion and deletion.