const express = require ("express");
const routerMediciones = express.Router();
const mongodb = require ("./../../db/mongo");

routerMediciones.get('/', function(req,res){
    res.send('Esto es measurements');

});

// Obtener última medición del dispositivo
routerMediciones.get('/last/:id', async function(req, res, next) {
    console.log("Devices recibe thingid:", req.params.id);
    const query = {"metadata.thingid":`${req.params.id}`};
    const collection = 'mediciones';
    const tipo = 'single'
    const options = {};
    console.log("Ejecutando request....");
    try {
        const result = await mongodb.runQuery(collection, query, options, tipo);
        console.log("Request respondido...");
        console.log(result);
        res.send(result);
      } catch (err) {
        console.log("Error en Dispositivos");
        res.status(400).send(err);
      }
});


// Obtener últimas 10 mediciones del dispositivo
routerMediciones.get('/last10/:id', async function(req, res, next) {
    console.log("Devices recibe thingid:", req.params.id);
    const query = {"metadata.thingid":`${req.params.id}`};
    const collection = 'mediciones';
    const tipo = 'all'
    const options = {
        // sort matched documents in descending order by timestamp
        sort: {"measurements.timestamp":-1},
        // Limita la cantidad de resultados
        limit: 5,
        // Oculta el ID del objeto
        projection: { _id: 0},
      };
    console.log("Ejecutando request....");
    try {
        const result = await mongodb.runQuery(collection, query, options, tipo);
        console.log("Request respondido...");
        console.log(result);
        res.send(result);
      } catch (err) {
        console.log("Error en Dispositivos");
        res.status(400).send(err);
      }
});

// Obtener todas las mediciones de un dispositivo específico
routerMediciones.get('/:id', async function(req, res, next) {
    console.log("Devices recibe thingid:", req.params.id);
    const query = {"metadata.thingid":`${req.params.id}`};
    const collection = 'mediciones';
    const tipo = 'all'
    const options = {
      // sort matched documents in descending order by timestamp
      sort: {"measurements.timestamp":-1},
      // Oculta el ID del objeto
      projection: { _id: 0},
    };
    console.log("Ejecutando request....");
    try {
        const result = await mongodb.runQuery(collection, query, options, tipo);
        console.log("Request respondido...");
        console.log(result);
        res.send(result);
      } catch (err) {
        console.log("Error en Dispositivos");
        res.status(400).send(err);
      }
});

module.exports = routerMediciones;