export interface Dispositivo {
    mongoId: number,
    thing: {
        thingid: string,
        name: string,
        model: string,
        type: string,
        SubPub: string
    },
    sensors: {
        sensorid: string,
        name: string,
        temp: string,
        hum: string
    }
}