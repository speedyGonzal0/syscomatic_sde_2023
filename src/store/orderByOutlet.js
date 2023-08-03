import { createSlice } from "@reduxjs/toolkit";


const initialState = [{_id: null, outletName: 0, totalOrderAmount: 0}];

const ordersByOutletSlice = createSlice({
    name: "obo",
    initialState: {
        orderByOutletData: [{_id: null, outletName: 0, totalOrderAmount: 0}]
    },
    reducers: {
        setState(state, action){
            state.orderByOutletData = structuredClone(action.payload);            
        }
    }
})

export const ordersByOutletActions = ordersByOutletSlice.actions;

export default ordersByOutletSlice;