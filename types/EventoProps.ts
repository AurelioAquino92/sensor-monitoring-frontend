import { Timestamp } from "firebase/firestore"

export type EventoProps = {
    idEvent: string,
    idDispositivo: string,
    timestamp: Timestamp,
    vx: number[],
    vy: number[],
    vz: number[]
}