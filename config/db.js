import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'EventDB';
await client.connect();
console.log('Connected successfully to server');
const db = client.db(dbName);
const collection=db.collection("Event")
if(!collection){
db.createCollection("Event",
{
  validator: {
  $jsonSchema: {
     bsonType: "object",
     required: [ "name" ],
     properties: {
        name: {
           bsonType: "string",
           description: "must be a string and is required"
        },
        tagline: {
           bsonType: "string",
           description: ""
        },
        schedule: {
          bsonType:"timestamp"
        },
        description: {
           bsonType: "string"
        },
        image:{
          bsonType:"string",
          description:""
        },
        moderator:{
         enum: [ "admin","user" ],
         description: "can only be one of the enum values and is required"
        },
        category:{
         enum: [ "category1","category2"],
         description: "can only be one of the enum values and is required"
        },
        sub_category:{
         enum: [ "sub_category1","sub_category2"],
         description: "can only be one of the enum values and is required"
        },
        rigor_rank:{
          bsonType:"int"
        },
        attendees:{
          bsonType:["objectId"]
        }
    }
  }
}
})
}

else{
  console.log("Collection Already Exists!!")
}

export default collection;



