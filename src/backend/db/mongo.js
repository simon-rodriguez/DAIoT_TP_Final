const config = require("./../config");
const DB_ENV = config.services.DATABASE.MONGO;
const { MongoClient } = require("mongodb");

const db_srv = DB_ENV.HOST !== "localhost" ? "+srv" : "";
const port = DB_ENV.PORT ? `:${DB_ENV.PORT}` : "";

function connectMongo(){
  // Replace the uri string with your connection string.
  const uri = `mongodb+srv://${DB_ENV.USERNAME}:${DB_ENV.PASSWORD}@${DB_ENV.HOST}/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);
  return client;
}

async function runQuery(colname, query, options, tipo) {
  const client = connectMongo();
  if (tipo == 'single') {
    try {
      const database = client.db(`daiot`);
      const collection = database.collection(colname);
      const result = await collection.findOne(query, options);
      console.log('resultados "enviados"');
      return result;
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }} else {
      try {
        const documents = [];
        const database = client.db(`daiot`);
        const collection = database.collection(colname);
        const cursor = collection.find(query, options);

        // print a message if no documents were found
        if ((await collection.countDocuments(query)) === 0) {
          console.log("No hay documentos!");
        }
        for await (const doc of cursor) {
          documents.push(doc);
          console.dir(doc);
        }
        const result = documents;
        console.log('resultados "enviados"');
        return result;
      } catch (err) {
        console.log(`Error: ${err}`)
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }
}

//const query = { "thing.name":"Dispositivo_test"};
//runQuery('dispositivos')//.catch(console.dir);
//connectMongo();
module.exports = {runQuery};