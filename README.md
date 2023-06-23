# (EN CONSTRUCCIÓN)

# Aplicación



# Base de datos

* Se utiliza una base de datos documental (MongoDB).
* La base de datos se encuentra alojada en la nube (Atlas).
* La estructura de las colecciones está estandarizada.

* Nombre de la Base de Datos: daiot
* Colecciones en la base de datos:
## dispositivos

```json
{
    thing: {
        thingid: string,    // ID del objeto/dispositivo
        name: string,       // Nombre descriptivo del objeto/dispositivo
        model: string,      // Modelo del objeto/dispositivo
        type: string,       // Determina si el objeto es local o remoto (local: datos del sensor / remoto: datos externos)
        SubPub: string      // Determina si el objeto está configurado para suscribirse, publicar, o ambos. (op: "Sub Only", "Pub Only", "Both")
    },
    sensors: {              // Tener en cuenta necesidad de array en caso de varios sensores.
        sensorid: string,   // ID del sensor
        name: string,       // Nombre del sensor
        temp: string,       // Indica si el sensor mide temperatura
        hum: string         // Indica si el sensor mide humedad
    }
}
```

```json
{
    thing: {
        thingid: string,    // ID del objeto/dispositivo
        name: string,       // Nombre descriptivo del objeto/dispositivo
        model: string,      // Modelo del objeto/dispositivo
        type: string,       // Determina si el objeto es local o remoto (local: datos del sensor / remoto: datos externos)
        SubPub: string      // Determina si el objeto está configurado para suscribirse, publicar, o ambos. (op: "Sub Only", "Pub Only", "Both")
    },
    sensors: {              // Tener en cuenta necesidad de array en caso de varios sensores.
        sensorid: string,   // ID del sensor
        name: string,       // Nombre del sensor
        temp: string,       // Indica si el sensor mide temperatura
        hum: string         // Indica si el sensor mide humedad
    }
}
```

## mediciones

```json
{
    metadata: {
        thingid: string,        // ID del objeto/dispositivo
        thingname: string,      // Nombre del objeto/dispositivo
        task: string,           // Tarea que agrega la entrda a la base de datos (origen)
        topic: string,          // En caso de venir de un mensaje MQTT, indica el topic
    },
    measurements: {
        timestamp: timestamp,   // Timestamp de **entrada a BD** / envío de información / captura de la medición
        temp: int,              // Indica si el sensor mide temperatura
        hum: int                // Indica si el sensor mide humedad
    }
}
```


# Backend

# Frontend

## Estructura general



# Dispositivos (Things)

## Dispositivo de Prueba (generadas)

```json
{
    thing: {
        thingid: "TEST01",
        name: "Dispositivo de Prueba 01",
        model: "manual",
        type: "remote",
        SubPub: "Pub Only"
    },
    sensors: {
        sensorid: "test",
        name: "Sensor Manual",
        temp: "yes",
        hum: "yes"
    }
}
```


## Mediciones de Prueba (generadas)

```json
{
    metadata: {
        thingid: "TEST01",
        thingname: "Dispositivo de Prueba 01",
        task: "manual",
        topic: ""
    },
    measurements: {
        $currentDate:{timestamp: { $type: "timestamp" }},
        temp: 12,
        hum: 25
    }
}
```