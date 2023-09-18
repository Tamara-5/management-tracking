import React, { useEffect, useState } from "react"

import {useAppSelector} from "store";
import {routing} from "store/routing/selectors";

import { RoutingInformation } from "components/organisms"
import { GoogleMapBlock } from "components/molecules"

import "./style.scss"

const Routing: React.FC = () => {
   const [windowOpenId, setWindowOpenId] = useState(0)
   const [currentId, setCurrentId] = useState(0)
   const [directions, setDirections] = useState(null)

   const {data} = useAppSelector(routing.clientsAndOrders)
   const handleMarkerMouseOver = (id: number) => {
      setWindowOpenId(id)
   }

   const handleMarkerMouseOut = (id: number) => {
      setWindowOpenId(id)
   }

   useEffect(() => {
      if (currentId) {
         const directionsService = new window.google.maps.DirectionsService()

         // @ts-ignore
         const currentOrder = data?.find((item) => item._id === currentId)
         const from = { lat: currentOrder?.order[0].location.from.lat, lng: currentOrder?.order[0].location.from.lng }
         const to = { lat: currentOrder?.order[0].location.to.lat, lng: currentOrder?.order[0].location.to.lng }

         directionsService.route(
            {
               // @ts-ignore
               origin: from,

               // @ts-ignore
               destination: to,
               travelMode: google.maps.TravelMode.DRIVING,
            },
            (response, status) => {
               if (status === "OK") {
                  // @ts-ignore
                  setDirections(response)
               } else {
                  console.error(`Directions request failed with status: ${status}`)
               }
            },
         )
      }
   }, [currentId])

   return (
      <div className="routing">
         <RoutingInformation currentCartId={windowOpenId} currentId={currentId} setCurrentId={setCurrentId} />
         {data && <GoogleMapBlock
             orders={data}
             windowOpenId={windowOpenId}
             handleMarkerMouseOver={handleMarkerMouseOver}
             handleMarkerMouseOut={handleMarkerMouseOut}
             centerCordinats={{ lat: 40.18835040814713, lng: 44.52188208695554 }}
             directions={directions}
         /> }

      </div>
   )
}

export default Routing
