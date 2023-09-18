import {RootState} from "../index"

const clientsAndOrders = (state:RootState) => state.routing.client

export const routing = {
    clientsAndOrders,
}

