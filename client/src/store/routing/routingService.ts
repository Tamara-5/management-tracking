import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const getClientsWithRoutingOrders = createAsyncThunk("get/clients/order/routing", async (_, thunkAPI) => {
   try {
      return await axios.get(`${process.env.REACT_APP_HOST}/routing/clients`)
   } catch {
      return thunkAPI.rejectWithValue("Something went wrong")
   }
})

export const routingService = {
   getClientsWithRoutingOrders,
}
