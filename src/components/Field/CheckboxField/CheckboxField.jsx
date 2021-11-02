import { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeValue } from '../../../redux/Fields/slices';
import '../Field.css';
import './CheckboxField.css';

const CheckboxField = (props) => {
    const [checked, setChecked] = useState(JSON.parse(localStorage.getItem(props.id) ?? false));
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(changeValue({id: props.id, value: !checked}));
        setChecked(!checked);
    }

    useEffect(() => {
        localStorage.setItem(props.id, JSON.stringify(checked));
    }, [props.id, checked]);

    return(
        <div className="checkbox">
            <label className="checkbox-label">{props.placeholder}{props.necessarily &&  <span className="necessarily">*</span> }</label>
            <input className="field checkbox__field" type="checkbox" onChange={() => handleChange()} checked={checked}/> 
        </div>
    )
}

export default memo(CheckboxField);