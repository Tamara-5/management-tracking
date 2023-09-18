import { lazy } from "react"

import { ERoutePaths, type TRoutePageT } from "./type"

const EmptyWallet = lazy(() => import("pages/EmptyWallet"))
const UserSquare = lazy(() => import("pages/UserSquare"))
const Dashboard = lazy(() => import("pages/Dashboard"))
const Calendar = lazy(() => import("pages/Calendar"))
const Settings = lazy(() => import("pages/Settings"))
const Routing = lazy(() => import("pages/Routing"))
const Home = lazy(() => import("pages/Home"))
const Note = lazy(() => import("pages/Note"))

const routesList: TRoutePageT[] = [
   {
      element: Home,
      path: ERoutePaths.Home,
      title: "Home",
   },
   {
      element: Dashboard,
      path: ERoutePaths.Dashboard,
      title: "Dashboard",
   },
   {
      element: Calendar,
      path: ERoutePaths.Calendar,
      title: "Calendar",
   },
   {
      element: Settings,
      path: ERoutePaths.Setting,
      title: "Settings",
   },
   {
      element: UserSquare,
      path: ERoutePaths.UserSquare,
      title: "User Square",
   },
   {
      element: EmptyWallet,
      path: ERoutePaths.EmptyWallet,
      title: "",
   },
   {
      element: Note,
      path: ERoutePaths.Note,
      title: "Noute",
   },
   {
      element: Routing,
      path: ERoutePaths.Routing,
      title: "Routing",
   },
]

export default routesList
