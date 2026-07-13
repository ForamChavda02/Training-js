use('ecommerece');

// db.produts.find({ price: { $gte: 2000, $lte: 3000} });
// db.produts.find({ $or: [{ category: "Electronics" }, { stock: { $lt: 50}}]});
// db.produts.find({}, { name: 1, price: 1, _id: 0 });
// db.produts.find().sort({ price: -1 }).skip(1).limit(2);
// db.produts.updateOne(
//     { name: "Gaming Laptop" },
//     { $set: { price: 89999 } }
// )
// db.produts.updateMany(
//     { category: "Electronics"},
//     {$inc: {price: 899}}
// )
// db.produts.find({});
// db.produts.updateMany(
//      { name: "Wireless Mouse"},
//      { $push: { tags: "Mouse" }}
// )
// db.produts.deleteOne({ name: "Wireless Mouse" } )
db.produts.find({});
// db.produts.deleteMany( {  name: "Mechanical keyboard"  } );