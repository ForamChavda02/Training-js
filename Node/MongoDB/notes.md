MongoDB Notes:

-Records in a MongoDB database are called documnets, and the field values may include numbers, strings, booleans, arrays, or even nested documnets.
-in mongoDB, a database is not actually created until it gets content

Insert Documents:
-there are two methods to insert documents into a MongoDB database.
-insertOne(): 
  -to insert a single document, use the insertOne() method.
  -This method inserts a single object into the database.
-If you try to insert documents into a collection that does not exist, MongoDB will create the collection automatically.
-insertMany(): 
  -To insert multiple documnets at once, use the insertMany() method.
  -this method inserts an array of objects into the database.

Find Data:
-There are 2 methods to find and select data from a MongoDB collection, find() and findOne().
-find():
  -to select data from a collection in MongoDB, we can use the find() method.
  -This method accepts a query object. if left empty, all documents will be returned.
-findOne():
  -To select only one document, we can use the findOne() method.
  -This method accepts a query object, if left empty, it will return the first document it finds.
  -this method only returns the first match it finds.

Querying Data:
-To query, or filter, data we can include a query in our find() or findOne() methods.

Projection:
-Both find methods accept a second prameter called projection.
-this parameter is an object that describes which fields to include in the results.
-This parameter is optional, if omitted, all fields will be included in the results.

Update Document:
-To update an existing document we can use the updateOne() or updateMany() methods.
-The first parameter is a query object to define which document or documents should be updated.
-The second parameter is an object defining the updated data.

updateOne():
-The updateOne() method will update the first document that is found matching the provided query.
-Let's see what the "like" count for the post with the title of "Post Title 1".

Insert if not found:
-If you would like to insert the document if its not found, you can use the upsert option.

updateMany():
-The updateMany() method will update all documents that match the provided query.

Delete Documents:
-We can delete documents by using the methods deleteOne() or deleteMany().
-These methods accept a query object. The matching documents will be deleted.

deleteOne():
-The deleteOne() method will delete the first document that matches the query provided.

deleteMany():
-The deleteMany() method will delete all documents that match the query provided.

MongoDB Query Operators:
-There are many query operators that can be used to compare and reference document fields.

Comparison:
-$eq: values are equal.
-$ne: values are not equal.
-$gt: value is greater than another value.
-$gte: value is greater than or equal to another value.
-$lt: Value is less than another value.
-$lte: Value is less than or equal to another value.
-$in: Value is matched within an array.

Logical:
-$and: Returns documents where both queries match.
-$or: Returns documents where either query matches.
-$nor: Returns documents where both queries fail to match.
-$not: Returns documents where the query does not match.

Evaluation:
-$regex: Allows the use of regular expressions when evaluating field values
-$text: Performs a text search.
-$where: Uses a Javascript expression to match documents.

MongoDB update operators:
-Fields: 
  -$currentDate - Sets the field value to the current date
  -$inc: Icrements the field value
  -$rename: Renames the field
  -$set: Sets the value of a field.
  -$unset: Removes the field from the document

-Array: 
  -$addToSet: Adds distinct elements to an array.
  -$pop: Removes the first or last element of an array.
  -$pull: Removes all elements from an array that match the query.
  -$push: Adds an element to an array.

MongoDB Aggregation Pipelines:
-Aggregation Pipelines:
  -Aggregation operations allow you to group, sort, perform, calculations, analyze data, and much more.
  -Aggregation pipelines can have one or more "stages". The order of these stages are important. Each stage acts upon the results of the previous stage.

Aggregation $group:
-This aggregation stage groups documents by the unique _id expression provided.

Aggregation $limit:
-This aggregate stage limits the number of documents passed to the next stage.

Aggregation $project:
-This aggregation stage passes only the specified fields along to the next aggregation stage.
-This is the same projection that is used with the find().

Aggregation $sort:
-This aggregation stage groups sorts all documents in the specified sort order.
-The sort order can be chosen by using 1 or -1 . 1 is acending and -1 decending.

Aggregation $match:
-This aggregation stage behaves like a find, it will filter documents that match the query provided.
-Using $match early in the pipeline can improve performance since it limits the number of documents the next stages must process.

Aggregation $addFields:
-This aggregation stage adds new fields to documents.

Aggregation $count:
-This aggregation stage counts the total amount of documents passed from the previous stage.
