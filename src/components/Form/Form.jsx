import { memo } from 'react';
import InputField from '../InputField/InputField';
import SelectField from '../SelectField/SelectField';

const Form = (props) => {
    return (
    <>
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
                    if (!/^(0[1-9]|[12][0-9]|3[01])\.[0-1][0-9]\.(2[09]|19)[0-9][0-9]$/.test(value)) {
                        return 'Введите дату рождения в формате ДД.ММ.ГГГГ';
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
  </>)
}

export default memo(Form);