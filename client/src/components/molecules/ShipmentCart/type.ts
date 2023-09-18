export type location = { zip: string; address: string; lat: number; lng: number }
export interface ShipmentCrtITF {
   shipmentNumber: string
   shipmentType: string
   from: location
   to: location
   clientName: string
   clientSurname: string
   isActive: boolean
   setCurrentId: (id?: number) => void
}
