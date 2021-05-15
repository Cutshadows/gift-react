import {useState} from 'react';

export const useForm=(initialState={})=>{
    const [value, setValues] = useState(initialState);

    const reset=()=>{
        setValues(initialState);
    }
    const handleChange=({target})=>{
        setValues({
            ...value,
            [target.name]:target.value
        });
    }

    return [value, handleChange, reset];
}