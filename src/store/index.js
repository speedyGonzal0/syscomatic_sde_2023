import { configureStore } from "@reduxjs/toolkit";
import summarySlice from "./dashboardSummary";
import ordersByOutletSlice from "./orderByOutlet";
import customerStatsSlice from "./customerStats";

const store = configureStore({
    reducer: {summary: summarySlice.reducer, obo: ordersByOutletSlice.reducer, customerStats: customerStatsSlice.reducer}
})


export default store;