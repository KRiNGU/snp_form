import { memo } from 'react';
import { useSelector } from 'react-redux';
import './Document.css';

const Document = (props) => {
    const name = useSelector((state) => state.name);
    const secondName = useSelector((state) => state.secondName);
    const patronymic = useSelector((state) => state.patronymic);
    const dateOfBirth = useSelector((state) => state.dateOfBirth);
    const email = useSelector((state) => state.email);
    const sex = useSelector((state) => state.sex);

    return (
    <div className="document">
        Данные, которые будут известны о вас:
        <ul className="data__list">
            <li>Имя : {name}</li>
            <li>Фамилия : {secondName}</li>
            <li>Отчество : {patronymic}</li>
            <li>Пол : {sex}</li>
            <li>Дата рождения : {dateOfBirth}</li>
            <li>Email : {email}</li>
        </ul>
    </div>)
}

export default memo(Document);