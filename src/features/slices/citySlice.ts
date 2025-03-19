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
        },
        updateTimestamp: (state) => {
            if (Date.now() - state.timestamp >= 10000) { // Если прошло 10 секунд
                console.log("Updating timestamp after 10 seconds");
                state.timestamp = Date.now();
            }
        }
    }
});

export const { setCity, updateTimestamp } = citySlice.actions;
export default citySlice.reducer;
