import React from "react"
import classNames from "classnames"

import { Avatar } from "components/atoms"

import { ShipmentCrtITF } from "./type"
import { Call, Location, LocationTwo, Message } from "assets/icons"
import { PNG } from "assets/png"
import "./style.scss"

const ShipmentCart: React.FC<ShipmentCrtITF> = ({
   shipmentNumber,
   shipmentType,
   from,
   to,
   clientName,
   clientSurname,
   isActive,
   setCurrentId,
}) => {
   const shipmentCartStyle = classNames("shipment-cart", { active: isActive })

   return (
      <div
         className={shipmentCartStyle}
         onClick={() => setCurrentId()}
      >
         <div className="shipment-cart_information">
            <div className="shipment-cart_information_transport-details">
               <h6>Shipment number</h6>
               <span className="shipment-cart_information_transport-details_number">{shipmentNumber}</span>
               <span className="shipment-cart_information_transport-details_type">{shipmentType}</span>
            </div>
            <div className="shipment-cart_information_transport-img">
               <img alt="trasnport" src={PNG.Transport} />
            </div>
         </div>
         {isActive && (
            <div className="shipment-cart_additional-information">
               <div className="shipment-cart_additional-information_location">
                  <div className="shipment-cart_additional-information_location_from">
                     <Location />
                     <div>
                        <span>{from.zip}</span>
                        <span>{from.address}</span>
                     </div>
                  </div>
                  <div className="shipment-cart_additional-information_location_to">
                     <LocationTwo />
                     <div>
                        <span>{to.zip}</span>
                        <span>{to.address}</span>
                     </div>
                  </div>
               </div>
               <div className="shipment-cart_additional-information_client">
                  <div className="shipment-cart_additional-information_client_information">
                     <div className="shipment-cart_additional-information_client_information_avatar">
                        <Avatar img={PNG.AvatarTwo} />
                     </div>
                     <div className="shipment-cart_additional-information_client_information_name">
                        <h6>Client</h6>
                        <span>
                           {clientName} {clientSurname}
                        </span>
                     </div>
                  </div>
                  <div className="shipment-cart_additional-information_client_contact">
                     <Call />
                     <Message />
                  </div>
               </div>
            </div>
         )}
      </div>
   )
}

export default ShipmentCart
