import React from "react"

import SideBarItem from "./SideBarItem"
import { Avatar } from "components/atoms"

import { Calendar, Dashboard, EmptyWallet, Logo, LogoText, Note, Routing, Settings, UserSquare } from "assets/icons"
import { ERoutePaths } from "router/type"
import { PNG } from "assets/png"

import "./style.scss"

const SideBar: React.FC = () => {
   return (
      <div className="side-bar">
         <div className="side-bar_top">
            <Logo />
            <LogoText />
         </div>
         <div className="side-bar_middle">
            <div>
               <SideBarItem route={ERoutePaths.Dashboard}>
                  <Dashboard />
               </SideBarItem>
               <SideBarItem route={ERoutePaths.Routing}>
                  <Routing />
               </SideBarItem>
               <SideBarItem route={ERoutePaths.Note}>
                  <Note />
               </SideBarItem>
               <SideBarItem route={ERoutePaths.EmptyWallet}>
                  <EmptyWallet />
               </SideBarItem>
               <SideBarItem route={ERoutePaths.Calendar}>
                  <Calendar />
               </SideBarItem>
            </div>
            <div>
               <SideBarItem route={ERoutePaths.UserSquare}>
                  <UserSquare />
               </SideBarItem>
               <SideBarItem route={ERoutePaths.Setting}>
                  <Settings />
               </SideBarItem>
            </div>
         </div>
         <div className="side-bar_bottom">
            <Avatar img={PNG.AvatarOne} />
         </div>
      </div>
   )
}

export default SideBar
