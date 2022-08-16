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
{})
}

else{
  console.log("Collection Already Exists!!")
}

export default collection;



