import {useAppSelector} from "../app/hooks.ts";
import {WeatherState} from "../utils/types";

const Weather = () => {
    const message = useAppSelector(state => state.message);
    const weather: WeatherState = useAppSelector(state => state.weatherInfo);

    return (
        <div className={'infoWeath'}>
            {!message &&
                <>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {new Date(weather.sunset).toLocaleTimeString()}</p>
                </>
            }
            {message}
        </div>
    );
}

export default Weather;