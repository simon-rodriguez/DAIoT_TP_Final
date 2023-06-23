const express = require ("express");
const routerDispositivos = express.Router();
const mongodb = require ("./../../db/mongo");

// Devuelve una lista de todos los dispositivos
routerDispositivos.get('/', async function(req, res, next) {
    const query = {};
    const collection = 'dispositivos';
    const tipo = 'all'
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

// Devuelve un solo dispositivo
routerDispositivos.get('/:id', async function(req, res, next) {
    console.log("Devices recibe thingid:", req.params.id);
    const query = {"thing.thingid":`${req.params.id}`};
    console.log(query);
    const collection = 'dispositivos';
    const tipo = 'single';
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

module.exports = routerDispositivos;