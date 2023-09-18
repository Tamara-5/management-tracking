import React from "react"
import { AvatarT } from "./type"

const Avatar: React.FC<AvatarT> = ({ img }) => {
   return (
      <div className="avatar">
         <img alt="avatar" src={img} />
      </div>
   )
}

export default Avatar
