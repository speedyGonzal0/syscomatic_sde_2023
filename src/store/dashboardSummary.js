import { createSlice } from "@reduxjs/toolkit";


const initialState = {_id: null, totalOrders: 0, totalOrderAmount: 0, acv: 0};

const summarySlice = createSlice({
    name: "summary",
    initialState,
    reducers: {
        setState(state, action){
            state._id = action.payload._id;
            state.totalOrders = action.payload.totalOrders;
            state.totalOrderAmount = action.payload.totalOrderAmount;
            state.acv = action.payload.acv;
        }
    }
})

export const summaryActions = summarySlice.actions;

export default summarySlice;