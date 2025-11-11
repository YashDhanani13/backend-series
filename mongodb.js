// mongo db database : -

// mongodb is no sql

// ex:-
// -----------------------------------------------------------------------------------
/// document example how can make thise

// {
//   "_id": ObjectId("507f1f77bcf86cd799439011"),
//   "username": "john_doe",
//   "email": "john@example.com",
//   "age": 28,
//   "address": {
//     "street": "123 Main St",
//     "city": "New York",
//     "zipcode": "10001"
//   },
//   "hobbies": ["reading", "gaming", "hiking"],
//   "created_at": ISODate("2024-01-15T10:30:00Z")
// }

// ----------------------------------------------

// // create  insert doucment
// create  one user / one doucemnr then it type used

// const result = await useSyncExternalStore.insertone({
//     username: "jonny stat",
//     email: "jonny@11gamil.com",
//     age : 18,
//     hobbies : [ "reading"  , "gaming "]
// });

// console.log(` inser ther doucmen t ${result.insertdId}`);
// -------------------------------------------------------------------------------------------------

// insert the multiple user / doucmnert then

// const result = await useSyncExternalStore.insertone([
// {
//     username: "tony jai",
//     email: "tony@11gamil.com",
//     age : 20,
//     hobbies : [ "acting"  , "draving"]
// },
// {
//     username: "time davind",
//     email: "time12@gmail.com",
//     age: 22,
//     hobbies: ["dancing" , "cricket " ,"reading"];

// }];

// -----------------------------------------------------------------------------------
// showws database anhd switch

// show dbs            : - show  databases oyly with dataa

// use database // switchto or creare  database myDatabaser
// db .show current database

// ----------------------------------------------------------------------------------/- /
//  - // creare and vieww the database

// db.createCollection("users")

// show collections

// -------------------------------------------------------------------------
// insertOne  :-   // when  only one create  usere ./ documemt then  ity used it

// db.users.insertOne({
//   name: "Yash",
//   email: "yash@example.com",
//   age: 22,
// });

// insertMany  :-    //   it whene is  used the multiple  user the n it used it inderstmany : -

//   db.users.insertMany([
//     {
//         name : "jayesh" ,
//         email : "jayesh12@gamil.com"
//     },
//     {
//         name: "ramesh ",
//         email : "ravi@examppe.com"
//     }
//   ])



// -------------------------------------------------------------------------------

// read database : -



// db.users.find()  // find all returns cursor 














// mongodb commanad : -
//    show dbv : it show database4

// create  database : -

// i) insertOne: -
// ii) inserMany :-

// read database








// 1. show  dbs     =  it show all dabse name show it

// 2. use database_name    =  create database name 

// 3. db == thise  is Object

// 4. db.createCollection("name of collection") ==    this create a collection 

// 5. show collections  == = show all the database  
                                
// 6. db.student.renameCollection("student");   ===   rename of collection
  
// 7. db.student.help()  ==  show all command withg this work it 


// remove the collection 
            // db.librbary.drop()