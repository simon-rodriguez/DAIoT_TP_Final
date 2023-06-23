export interface Medicion {
    mongoId: number,
    metadata: {
        thingid: string,
        thingname: string,
        task: string,
        topic: string,
    },
    measurements: {
        timestamp: string,
        temp: string,
        hum: string
    }
}