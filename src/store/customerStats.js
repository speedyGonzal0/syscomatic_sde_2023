import { createSlice } from "@reduxjs/toolkit";

const customerStatsSlice = createSlice({
    name: "customerStats",
    initialState: {
        customerData: [{
            _id: "New",
            category: "New",
            orders: 500,
            customers: 500,
            totalOrderAmount: 60509,
            acv: 121.018,
            customerPercentage: "66.76",
            orderPercentage: "Infinity"
        },
        {
            _id: "New",
            category: "New",
            orders: 500,
            customers: 500,
            totalOrderAmount: 60509,
            acv: 121.018,
            customerPercentage: "66.76",
            orderPercentage: "Infinity"
        }]
    },
    reducers: {
        setState(state, action){
            state.customerData = structuredClone(action.payload) 
        }
    }
})

export const customerStatsActions = customerStatsSlice.actions;

export default customerStatsSlice;