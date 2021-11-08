import { memo } from 'react';
import CheckboxField from '../Field/CheckboxField/CheckboxField.jsx';
import InputField from '../Field/InputField/InputField.jsx';
import SelectField from '../Field/SelectField/SelectField.jsx';
import './Form.css';
import validation from '../../utils/ValidateFunctions';

const Form = () => (
  <div>
    <p>Форма ввода данных о пользователе</p>
    <form className="form">
      <InputField
        id="secondName"
        placeholder="Фамилия"
        validityFunction={validation.secondName}
        necessarily
      />
      <InputField
        id="name"
        placeholder="Имя"
        validityFunction={validation.name}
        necessarily
      />
      <InputField
        id="patronymic"
        placeholder="Отчество"
        validityFunction={validation.patronymic}
      />
      <SelectField
        id="sex"
        placeholder="Пол"
        options={['Мужчина', 'Женщина']}
        optional={false}
      />
      <InputField
        id="dateOfBirth"
        placeholder="Дата рождения"
        validityFunction={validation.dateOfBirth}
      />
      <InputField
        id="email"
        placeholder="Email"
        validityFunction={validation.email}
      />
      <CheckboxField
        id="advertising"
        placeholder="Согласен на обработку рекламы"
      />
    </form>
  </div>
);

export default memo(Form);
