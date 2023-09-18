//@ts-nocheck
import {createSlice} from "@reduxjs/toolkit"
import {InitialStateITF} from "./type"
import {routingService} from "./routingService"

const initialState: InitialStateITF = {
    client: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        isErrorMessage: null,
        data: null,
        filteredData: null,
    },
}

const routingSlice = createSlice({
    name: "routing",
    initialState,
    reducers: {
        filterOrders: (state, action) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const {weight, volume, data} = action.payload
            const dataCopy = JSON.parse(JSON.stringify(data))

            if (weight && volume) {
                const data = dataCopy.filter(item => item.transport.weight === weight || item.transport.weight > weight)
                state.client.filteredData = data.filter(item => item.transport.volume === weight || item.transport.weight > volume)
            } else if (weight) {
                state.client.filteredData = dataCopy.filter(item => item.transport.weight === weight || item.transport.weight > weight)
            } else if (volume) {
                state.client.filteredData = dataCopy.filter(item => item.transport.volume === weight || item.transport.weight > volume)
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(routingService.getClientsWithRoutingOrders.pending, (state) => {
                state.client.isLoading = true
            })
            .addCase(routingService.getClientsWithRoutingOrders.fulfilled, (state, action) => {
                state.client.isLoading = false
                state.client.isSuccess = true
                state.client.isError = false
                state.client.data = action.payload.data.data
                state.client.filteredData = action.payload.data.data
            })
            .addCase(routingService.getClientsWithRoutingOrders.rejected, (state, action) => {
                state.client.isLoading = false
                state.client.isSuccess = false
                state.client.isError = true
                state.client.isErrorMessage = action.payload as null
                state.client.data = null
            })
    },
})

export const {filterOrders} = routingSlice.actions
export default routingSlice.reducer
