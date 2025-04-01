import { MongoClient } from 'mongodb';

// const clusterAddress = process.env.MONGODB_CLUSTER_ADDRESS;
// const dbUser = process.env.MONGODB_USERNAME;
// const dbPassword = process.env.MONGODB_PASSWORD;
// const dbName = process.env.MONGODB_DB_NAME;


const clusterAddress = "cluster1.dtbgdvm.mongodb.net";
const dbUser = "sanskarjain";
const dbPassword = "Redhat@123";
const dbName = "gha-demo";

const uri = `mongodb+srv://${dbUser}:${dbPassword}@${clusterAddress}/?retryWrites=true&w=majority&appName=cluster1`;
const client = new MongoClient(uri);

console.log('Trying to connect to db');

try {
  await client.connect();
  await client.db(dbName).command({ ping: 1 });
  console.log('Connected successfully to server');
} catch (error) {
  console.log('Connection failed.');
  await client.close();
  console.log('Connection closed.');
}

const database = client.db(dbName);

export default database;
