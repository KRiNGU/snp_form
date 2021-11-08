import { memo, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeValue } from '../../../redux/Fields/slices';
import '../Field.css';
import './CheckboxField.css';
import PropTypes from 'prop-types';

const CheckboxField = ({ id, placeholder, necessarily }) => {
  const [checked, setChecked] = useState(
    JSON.parse(localStorage.getItem(id) ?? false)
  );
  const dispatch = useDispatch();

  const handleChange = useCallback(() => {
    dispatch(changeValue({ id: id, value: !checked }));
    setChecked(!checked);
  }, [dispatch, setChecked, id, checked]);

  useEffect(() => {
    localStorage.setItem(id, JSON.stringify(checked));
  }, [id, checked]);

  return (
    <div className="checkbox">
      <label className="checkbox-label">
        {placeholder}
        {necessarily && <span className="necessarily">*</span>}
        <input
          className="field checkbox__field"
          type="checkbox"
          onChange={handleChange}
          checked={checked}
        />{' '}
      </label>
    </div>
  );
};

CheckboxField.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  necessarily: PropTypes.bool,
}

export default memo(CheckboxField);
