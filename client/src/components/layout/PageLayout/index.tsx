import React from "react"
import { SideBar } from "components/molecules"
import RouterWrapper from "router"

import "./style.scss"

const PageLayout: React.FC = () => {
   return (
      <main className="wrapper">
         <section className="wrapper_content">
            <SideBar />
            <RouterWrapper />
         </section>
      </main>
   )
}

export default PageLayout
