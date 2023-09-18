import React, { InputHTMLAttributes, ReactNode } from "react"

export type InputStatusT = "default" | "error" | "success" | "warning"
export type InputExtentT = "large" | "medium"

export interface InputITF extends InputHTMLAttributes<HTMLInputElement> {
   status?: InputStatusT
   extent?: InputExtentT
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
   name?: string
   type?: string
   iconLeft?: ReactNode
   iconRight?: ReactNode
   readOnly?: boolean
}
