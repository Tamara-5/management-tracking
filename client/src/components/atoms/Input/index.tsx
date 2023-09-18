import React from "react"
import classNames from "classnames"
import { InputITF } from "./type"
import "./style.scss"

const Input: React.FC<InputITF> = ({
   status,
   extent,
   name,
   value,
   onChange,
   type = "text",
   iconLeft,
   iconRight,
   readOnly,
   ...props
}) => {
   const inpStyle = classNames(
      status ?? "default",
      extent ?? "large",
      { paddingLeft: iconLeft },
      { paddingRight: iconRight },
   )

   return (
      <div className="inp-container">
         {iconLeft && <span className="inp-container_left-icon">{iconLeft}</span>}
         <input
            type={type}
            name={name}
            value={value}
            autoComplete="off"
            onChange={onChange}
            readOnly={readOnly}
            className={inpStyle}
            placeholder={props.placeholder}
            {...props}
         />
         {iconRight && <span className="inp-container_right-icon">{iconRight}</span>}
      </div>
   )
}

export default Input
