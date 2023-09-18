import React from "react"

export type TRoutePageT = {
   readonly path: string
   readonly element: React.FC
   readonly title: string
}

export enum ERoutePaths {
   Home = "/",
   Dashboard = "/dashboard",
   Routing = "/routing",
   Note = "/note",
   EmptyWallet = "/empty-wallet",
   Calendar = "/calendar",
   UserSquare = "/user-square",
   Setting = "/setting",
}
