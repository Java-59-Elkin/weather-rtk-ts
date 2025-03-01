import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../api/asyncWeatherAction.ts";
import {WeatherState} from "../../utils/types";

const initialState: WeatherState = {
        country: "",
        city: "",
        temp: 0,
        pressure: 0,
        sunset: 0,
        timestamp: 0
    }

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.fulfilled, (_state, action) => action.payload)
            .addCase(fetchWeather.rejected, () => initialState)
    }
});

export default weatherSlice.reducer;