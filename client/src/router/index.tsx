import React, { Suspense } from "react"
import routesList from "./routes"
import { Route, Routes } from "react-router-dom"
import HelmetLayout from "../components/layout/Helmet"

const RouterWrapper: React.FC = () => {
   return (
      <Routes>
         {routesList.map(({ element: Element, path, title }) => (
            <Route
               key={path}
               path={path}
               element={
                  <Suspense fallback={<p>Loading ...</p>}>
                     <HelmetLayout title={title}>
                        <Element />
                     </HelmetLayout>
                  </Suspense>
               }
            />
         ))}
      </Routes>
   )
}

export default RouterWrapper
