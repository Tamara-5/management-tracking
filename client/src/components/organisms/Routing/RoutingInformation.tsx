//@ts-nocheck
import React, { useEffect, useState } from "react"

import { useActions } from "hooks/useActions"

import {routing} from "store/routing/selectors";
import {useAppDispatch, useAppSelector} from "store";
import {filterOrders} from "store/routing/routingSlice";

import { Input, InputMath, Button } from "components/atoms"
import { ShipmentCart } from "components/molecules"
import { Search, SettingsTwo } from "assets/icons"
import { RoutingT } from "./type"

import "./style.scss"

const RoutingInformation: React.FC<RoutingT> = ({ currentCartId, setCurrentId, currentId }) => {
   const [search, setSearch] = useState("")
   const [weight, setWeight] = useState("")
   const [volume, setVolume] = useState("")
   const dispatch = useAppDispatch()

   const {filteredData,data} = useAppSelector(routing.clientsAndOrders)
   const { getClientsWithRoutingOrders } = useActions()

   useEffect(() => {
      getClientsWithRoutingOrders()
   }, [])

   const filter = () => {
      if(weight || volume){
         dispatch(filterOrders({weight,volume,data}))
      }
   }

   return (
      <div className="routing_information-block">
         <div className="routing_information-block_search">
            <Input
               onChange={(e: any) => setSearch(e.target.value)}
               placeholder="Search..."
               value={search}
               iconLeft={<Search />}
               iconRight={<SettingsTwo />}
            />
         </div>
         <div className="routing_information-block_vehicle-profile">
            <h5>Vehicle Profile</h5>
            <div className="routing_information-block_vehicle-profile_inputs">
               <InputMath
                  onChange={(e: any) => setWeight(e.target.value)}
                  placeholder="0.000"
                  type="number"
                  value={weight}
                  label="weight"
                  math="kg"
               />
               <InputMath
                  onChange={(e: any) => setVolume(e.target.value)}
                  placeholder="0.000"
                  type="number"
                  value={volume}
                  label="volume"
                  math="m"
               />
            </div>
            <Button size="medium" onClickCallBack={() => filter()}>
               Find Routes
            </Button>
         </div>
         <div className="routing_information-block_overview">
            <h5>Overview</h5>
            <div className="routing_information-block_overview_shipments">
               {filteredData?.map((data, index) => (
                  <ShipmentCart
                     key={index}
                     clientName={data.name}
                     clientSurname={data.surname}
                     to={data.order[0].location.to}
                     from={data.order[0].location.from}
                     shipmentType={data.order[0].shipmentType}
                     shipmentNumber={data.order[0].shipmentNumber}
                     isActive={currentCartId === data._id || currentId === data._id}
                     setCurrentId={() => setCurrentId(data._id)}
                  />
               ))}
            </div>
         </div>
      </div>
   )
}

export default RoutingInformation
