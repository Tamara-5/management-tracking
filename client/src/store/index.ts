import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux"

import routingReducer from "./routing/routingSlice"

export const store = configureStore({
   reducer: {
      routing: routingReducer,
   },
   middleware: getDefaultMiddleware =>
       getDefaultMiddleware({
          serializableCheck: false,
       }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
