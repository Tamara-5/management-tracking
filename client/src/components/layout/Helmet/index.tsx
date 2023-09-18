import React, { FC } from "react"
import { Helmet } from "react-helmet"

import { HelmetITF } from "./type"

const HelmetLayout: FC<HelmetITF> = ({ children, title }) => (
   <React.Fragment>
      <Helmet>
         <title>{title}</title>
      </Helmet>
      {children}
   </React.Fragment>
)

export default HelmetLayout
