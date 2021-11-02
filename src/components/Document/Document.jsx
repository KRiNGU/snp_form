import { memo } from 'react';
import { useSelector } from 'react-redux';
import './Document.css';

const Document = () => {
    const name = useSelector((state) => state.name);
    const secondName = useSelector((state) => state.secondName);
    const patronymic = useSelector((state) => state.patronymic);
    const dateOfBirth = useSelector((state) => state.dateOfBirth);
    const email = useSelector((state) => state.email);
    const sex = useSelector((state) => state.sex);
    const advertising = useSelector((state) => state.advertising);

    return (
    <div className="document">
        <p>Данные, которые будут известны о вас</p>
        <ul className="data__list">
            <li className="data-list__field">Фамилия : {secondName}</li>
            <li className="data-list__field">Имя : {name}</li>
            <li className="data-list__field">Отчество : {patronymic}</li>
            <li className="data-list__field">Пол : {sex}</li>
            <li className="data-list__field">Дата рождения : {dateOfBirth}</li>
            <li className="data-list__field">Email : {email}</li>
            <li className="data-list__field">Согласен на рекламу : {advertising ? 'Да' : 'Нет'}</li>
        </ul>
    </div>)
}

export default memo(Document);