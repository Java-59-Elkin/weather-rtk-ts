import { useAppDispatch, useAppSelector } from "../app/hooks.ts";
import { FormEvent } from "react";
import { setCity } from "../features/slices/citySlice.ts";

const Form = () => {
    const dispatch = useAppDispatch();
    const currentCity = useAppSelector(state => state.city.city);
    const currentTimeStamp = useAppSelector(state => state.city.timestamp);

    const handleClickGetWeather = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const inputElement = e.currentTarget.elements.namedItem("city") as HTMLInputElement;
        if (!inputElement) return;

        const city = inputElement.value.trim();
        const timestamp = Date.now();
        if (!city) return; // Проверяем, что строка не пустая

        console.log("Entered city:", city);

        if ((city !== currentCity) || ((timestamp - currentTimeStamp) / 1000 > 10)) {
            console.log("City changed, updating...");
            dispatch(setCity(city)); // Обновляем город → новый запрос
        } else {
            console.log("Same city, waiting for cache expiration...");
        }

        inputElement.value = ''; // Очищаем поле ввода
    };

    return (
        <form onSubmit={handleClickGetWeather}>
            <input type="text" name="city" placeholder="Enter city" />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;
