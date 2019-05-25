import { useState } from 'react';

const useForm = (callback) => {
    const [values, setValues] = useState({
        username: '',
        name: ''
    });

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        callback();
        setValues({
            username: '',
            name: ''
        });
    };

    const handleChange = (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value; 
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: value }));

    };

    return {
        handleChange,
        handleSubmit,
        values,
    }
};

export default useForm;