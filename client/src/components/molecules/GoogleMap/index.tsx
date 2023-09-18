import { DirectionsRenderer, GoogleMap, InfoWindow, Marker, useLoadScript } from "@react-google-maps/api"
import { useMemo } from "react"
import React from "react"

import { directionsRendererOption, googleMapStyle } from "utils"

import { LocationTwo } from "assets/icons"
import "./style.scss"

const GoogleMapBlock = ({
   orders,
   handleMarkerMouseOver,
   handleMarkerMouseOut,
   windowOpenId,
   centerCordinats,
   directions,
}: any) => {
   const ordersLocations = orders?.map((order: any) => order.order[0].location)

   const { isLoaded } = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY || "",
   })

   const onLoad = (map: { fitBounds: (arg0: google.maps.LatLngBounds) => void }) => {
      const bounds = new google.maps.LatLngBounds()
      ordersLocations?.forEach(({ to }: any) => bounds.extend({ lat: to.lat, lng: to.lng }))
      map.fitBounds(bounds)
   }

   const center = useMemo(() => centerCordinats, [])

   return (
      <div className="google-map-container">
         {!isLoaded ? (
            <h1>Loading...</h1>
         ) : (
            <GoogleMap
               mapContainerClassName="map-container"
               center={center}
               zoom={10}
               onLoad={onLoad}
               options={googleMapStyle}
            >
               <Marker
                  position={{ lat: 40.18835040814713, lng: 44.52188208695554 }}
                  icon={{
                     url: `${window.location.origin}/icon/location.svg`,
                     scaledSize: new window.google.maps.Size(50, 50),
                     origin: new window.google.maps.Point(0, 0),
                     anchor: new window.google.maps.Point(25, 50),
                  }}
               />
               {orders?.map(({ _id, order }: any) => (
                  <Marker
                     key={_id}
                     position={{ lat: order[0].location.to.lat, lng: order[0].location.to.lng }}
                     icon={{
                        url: `${window.location.origin}/icon/location-two.svg`,
                        scaledSize: new window.google.maps.Size(50, 50),
                        origin: new window.google.maps.Point(0, 0),
                        anchor: new window.google.maps.Point(25, 50),
                     }}
                     onMouseOver={() => handleMarkerMouseOver(_id)}
                     onMouseOut={() => handleMarkerMouseOut(0)}
                  >
                     {windowOpenId === _id && (
                        <InfoWindow>
                           <div className="info-window">
                              <LocationTwo />
                              <div>
                                 <span>{order[0].location.to.zip}</span>
                                 <span>{order[0].location.to.address}</span>
                              </div>
                           </div>
                        </InfoWindow>
                     )}
                  </Marker>
               ))}
               {directions && <DirectionsRenderer directions={directions} options={directionsRendererOption} />}
            </GoogleMap>
         )}
      </div>
   )
}

export default GoogleMapBlock
