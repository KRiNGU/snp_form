import { memo, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeValue } from '../../../redux/Fields/slices';
import '../Field.css';
import './SelectField.css';
import PropTypes from 'prop-types';

const SelectField = ({ id, placeholder, options }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(
    localStorage.getItem(id) ?? placeholder
  );

  const handleChange = useCallback(
    (e) => {
      const value = e.target.value;
      dispatch(changeValue({ id: id, value }));
      setSelected(value);
    },
    [setSelected, dispatch, id]
  );

  useEffect(() => {
    localStorage.setItem(id, selected);
  }, [id, selected]);

  return (
    <div className="select">
      <label className="header-label">{placeholder}</label>
      <select
        className="field select-field"
        value={selected}
        onChange={handleChange}
      >
        <option value="" className="select__option">
          -
        </option>
        {options.map((option) => (
          <option className="select__option" key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectField.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
}

export default memo(SelectField);
