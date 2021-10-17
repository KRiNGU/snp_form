import { memo } from 'react';
import InputField from '../Field/InputField/InputField.jsx';
import SelectField from '../Field/SelectField/SelectField.jsx';
import './Form.css';

const Form = (props) => {
    return (
    <div>
        <p>Форма ввода данных о пользователе:</p>
        <form className="form">
            <InputField
                id='name'
                placeholder="Имя"
                validityFunction={(value) => { 
                    if (value.length === 0) {
                        return 'Введите имя';
                    } else if (!/^[a-zA-Zа-яА-Я\-'/]+$/.test(value)) {
                        return "Имя должно содержать только буквы, символ - или символ '";
                    } else if (!/^[A-ZА-Я]/.test(value)) {
                        return 'Первая буква имени должна быть заглавной';
                    } else return '';
                }}
                necessarily={true}
            />
            <InputField
                id='secondName'
                placeholder="Фамилия"
                validityFunction={(value) => { 
                    if (value.length === 0) {
                        return 'Введите фамилию';
                    } else if (!/^[a-zA-Zа-яА-Я\-'/]+$/.test(value)) {
                        return "Фамилия должно содержать только буквы, символ - или символ '";
                    } else if (!/^[A-ZА-Я]/.test(value)) {
                        return 'Первая буква фамилии должна быть заглавной';
                    } else return '';
                }}
                necessarily={true}
            />
            <InputField
                id='patronymic'
                placeholder="Отчество"
                validityFunction={(value) => { 
                    if (!/^[a-zA-Zа-яА-Я\-'/]+$/.test(value)) {
                        return "Отчество должно содержать только буквы, символ - или символ '";
                    } else if (!/^[A-ZА-Я]/.test(value)) {
                        return 'Первая буква отчества должна быть заглавной';
                    } else return '';
                }}
            />
            <SelectField
            id='sex'
            placeholder='Выберите пол'
            options={['Мужчина', 'Женщина']}
            optional={false}
            />
            <InputField
                id='dateOfBirth'
                placeholder="Дата рождения"
                validityFunction={(value) => {
                    if (!/^[0-9][0-9]\.[0-9][0-9]\.[0-9][0-9][0-9][0-9]$/.test(value)) {
                        return 'Введите дату рождения в формате ДД.ММ.ГГГГ'
                    }
                    if (!/^(0[1-9]|[12][0-9]|3[01])\.[0-1][0-9]\.(2[09]|19)[0-9][0-9]$/.test(value)) {
                        return 'Такая дата невозможна';
                    } else return '';
                }}
            />
            <InputField
                id='email'
                placeholder="Email"
                validityFunction={(value) => {
                    if (!/\w+@\w+\.\w+/.test(value)) {
                        return 'Введите корректный Email';
                    } else return '';
                }}
            />
    </form>
  </div>)
}

export default memo(Form);