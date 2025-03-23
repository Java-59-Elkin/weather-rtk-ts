import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    city: "",
    timestamp: Date.now(),
};

const citySlice = createSlice({
    name: "city",
    initialState,
    reducers: {
        setCity: (state, action) => {
            state.city = action.payload;
            state.timestamp = Date.now();
        }
    }
});

export const { setCity } = citySlice.actions;
export default citySlice.reducer;