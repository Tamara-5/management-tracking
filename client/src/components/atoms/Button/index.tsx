import React from "react"
import classNames from "classnames"
import { ButtonITF } from "./type"
import "./style.scss"

const Button: React.FC<ButtonITF> = ({
   view,
   size,
   icon,
   iconDirection,
   onClickCallBack,
   children,
   isDisable,
   ...props
}) => {
   const buttonStyle = classNames("button", view ?? "primary", size ?? "large", iconDirection ?? "")

   return (
      <button className={buttonStyle} disabled={isDisable} onClick={onClickCallBack} {...props}>
         {icon && <div className={`button_icon ${iconDirection}`}>{icon}</div>}
         <div>{children}</div>
      </button>
   )
}

export default Button
