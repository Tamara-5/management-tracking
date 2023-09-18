import { bindActionCreators } from "@reduxjs/toolkit"
import { routingService } from "store/routing/routingService"

import { useAppDispatch } from "../store"

const actions = {
   ...routingService,
}

export const useActions = () => {
   const dispatch = useAppDispatch()

   return bindActionCreators(actions, dispatch)
}
