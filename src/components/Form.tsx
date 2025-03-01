import {fetchWeather} from "../features/api/asyncWeatherAction.ts";
import {weather_cache_time} from "../utils/constants.ts";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";



const Form = () => {
    const dispatch = useAppDispatch();
    const {timestamp, city: name} = useAppSelector(state => state.weatherInfo);

    const handleClickGetWeather = (e: { preventDefault: () => void; target: { city: { value: string; }; }; }) => {
        e.preventDefault();
        const city: string = e.target.city.value.trim();
        if (city !== name || Date.now() - timestamp > weather_cache_time) {
           dispatch(fetchWeather(city));
        }
        e.target.city.value = '';
    }

    return (
        <form onSubmit={handleClickGetWeather}>
            <input type={'text'} name={'city'}/>
            <button type={'submit'}>Get Weather</button>
        </form>
    );
};

export default Form;