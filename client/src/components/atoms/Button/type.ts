import React, { ButtonHTMLAttributes } from "react"

export type buttonViewT = "primary" | "secondary" | "outline" | "danger" | "opacity"
export type buttonSizeT = "large" | "medium" | "small"

export interface ButtonITF extends ButtonHTMLAttributes<HTMLButtonElement> {
   view?: buttonViewT
   size?: buttonSizeT
   icon?: React.ReactNode
   iconDirection?: "right"
   isDisable?: boolean
   onClickCallBack: () => void
}
