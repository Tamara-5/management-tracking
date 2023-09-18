import { location } from "../ShipmentCart/type"

export interface GoogleMapITF {
   id: number | string
   name: string
   surname: string
   phoneNumber: string
   transport: {
      weight: number
      volume: number
   }
   order: [
      {
         shipmentNumber: string
         shipmentType: string
         location: {
            from: location
            to: location
         }
      },
   ]
}
