import { useAppDispatch } from "../app/hooks.ts";
import { FormEvent } from "react";
import { setCity, updateTimestamp } from "../features/slices/citySlice.ts";

const Form = () => {
    const dispatch = useAppDispatch();

    const handleClickGetWeather = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const inputElement = e.currentTarget.elements.namedItem("city") as HTMLInputElement;
        if (!inputElement) return;

        const city = inputElement.value.trim();
        if (!city) return; // Проверяем, что строка не пустая

        console.log("Setting city:", city);
        dispatch(setCity(city)); // Устанавливаем город
        setTimeout(() => dispatch(updateTimestamp()), 50); // Обновляем timestamp с задержкой

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
