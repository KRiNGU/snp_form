import { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeValue } from '../../../redux/Fields/slices';
import '../Field.css';
import './InputField.css';

const InputField = (props) => {
    const [value, setValue] = useState(localStorage.getItem(props.id) ?? '');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const validate = (value) => {
        setError(props.validityFunction(value));
    }

    const handleChange = (value) => {
        dispatch(changeValue({id: props.id, value}));
        setValue(value);
        validate(value);
    }

    const handleBlur = (value) => {
        validate(value);
    }

    useEffect(() => {
        localStorage.setItem(props.id, value);
    }, [props.id, value]);

    return(
        <div className="input">
            <label className="header-label">{props.placeholder}{props.necessarily &&  <span className="necessarily"> *</span> }</label>
            <input onBlur={(e) => handleBlur(e.target.value)} className="field input__field" type="text" onChange={(e) => handleChange(e.target.value)} value={value}/> 
            <label className="input__error">{error}</label>
        </div>
    )
}

export default memo(InputField);