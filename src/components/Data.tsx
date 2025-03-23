import Form from "./Form.tsx";
import Weather from "./Weather.tsx";
import {useAppSelector} from "../app/hooks.ts";

const Data = () => {
    const city = useAppSelector(state => state.city.city);
    const timestamp = useAppSelector(state => state.city.timestamp);

    return (
        <div className={'col-sm-7 form'}>
            <Form/>
            <Weather key={`${city}-${timestamp}`} />
        </div>
    );
};

export default Data;

