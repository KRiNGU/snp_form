import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeValue } from '../../../redux/Fields/slices';
import '../Field.css';
import './SelectField.css';

const SelectField = (props) => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(localStorage.getItem(props.id) ?? props.placeholder);

    const handleChange = (value) => {
        dispatch(changeValue({id: props.id, value}));
        setSelected(value);
    };
    
    useEffect(() => {
        localStorage.setItem(props.id, selected);
    }, [props.id, selected]);

    return (
        <div className="select">
            <label className="header-label">{props.placeholder}</label>
            <select className="field select-field" value={selected} onChange={(e) => handleChange(e.target.value)}>
                <option value="" className="select__option">-</option>
                {props.options.map(option => <option className="select__option" key={option} value={option}>{option}</option>)}
            </select>
        </div>
    )
}

export default SelectField;
