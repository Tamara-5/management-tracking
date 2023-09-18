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
   label,
   math,
   readOnly,
   ...props
}) => {
   const inpStyle = classNames(status ?? "default", extent ?? "large")

   return (
      <div className="inp-math-container">
         {label && <label className="inp-math-container_label">{label}</label>}
         <div className="inp-math-container_block">
            <div>
               <span>{math}</span>
            </div>
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
         </div>
      </div>
   )
}

export default Input
