import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import classNames from "classnames"

import { SideBarItemITF } from "./type"

import "./style.scss"

const SideBarItem: React.FC<SideBarItemITF> = ({ route, children }) => {
   const navigate = useNavigate()
   const { pathname } = useLocation()

   const sideBarItemStyle = classNames("side-bar_item", {
      active: pathname === route,
   })

   return (
      <button className={sideBarItemStyle} onClick={() => navigate(route)}>
         {children}
      </button>
   )
}

export default SideBarItem
