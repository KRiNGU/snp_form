import { memo, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeValue } from '../../../redux/Fields/slices';
import '../Field.css';
import './InputField.css';
import PropTypes from 'prop-types';

const InputField = ({ id, validityFunction, placeholder, necessarily }) => {
  const [value, setValue] = useState(localStorage.getItem(id) ?? '');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const validate = useCallback(
    (value) => {
      setError(validityFunction(value));
    },
    [validityFunction]
  );

  const handleChange = useCallback(
    (e) => {
      const value = e.target.value;
      dispatch(changeValue({ id, value }));
      setValue(value);
      validate(value);
    },
    [dispatch, id, validate]
  );

  const handleBlur = useCallback(
    (e) => {
      validate(e.target.value);
    },
    [validate]
  );

  useEffect(() => {
    localStorage.setItem(id, value);
  }, [id, value]);

  return (
    <div className="input">
      <label className="header-label">
        {placeholder}
        {necessarily && <span className="necessarily"> *</span>}
      </label>
      <input
        onBlur={handleBlur}
        className="field input__field"
        type="text"
        onChange={handleChange}
        value={value}
      />
      <label className="input__error">{error}</label>
    </div>
  );
};

InputField.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  necessarily: PropTypes.bool,
  validityFunction: PropTypes.func,
}

export default memo(InputField);
