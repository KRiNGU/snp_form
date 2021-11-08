const validityFunctions = {
  secondName: (value) => {
    if (value.length === 0) {
      return 'Введите фамилию';
    } else if (!/^[a-zA-Zа-яА-Я\-'/]+$/.test(value)) {
      return "Фамилия должно содержать только буквы, символ - или символ '";
    } else if (!/^[A-ZА-Я]/.test(value)) {
      return 'Первая буква фамилии должна быть заглавной';
    } else return '';
  },
  name: (value) => {
    if (value.length === 0) {
      return 'Введите имя';
    } else if (!/^[a-zA-Zа-яА-Я\-'/]+$/.test(value)) {
      return "Имя должно содержать только буквы, символ - или символ '";
    } else if (!/^[A-ZА-Я]/.test(value)) {
      return 'Первая буква имени должна быть заглавной';
    } else return '';
  },
  patronymic: (value) => {
    if (!/^[a-zA-Zа-яА-Я\-'/]+$/.test(value)) {
      return "Отчество должно содержать только буквы, символ - или символ '";
    } else if (!/^[A-ZА-Я]/.test(value)) {
      return 'Первая буква отчества должна быть заглавной';
    } else return '';
  },
  dateOfBirth: (value) => {
    if (!/^\d\d\.\d\d\.\d\d\d\d$/.test(value)) {
      return 'Введите дату рождения в формате ДД.ММ.ГГГГ';
    }
    if (!/^(0[1-9]|[12]\d|3[01])\.[0-1]\d\.(2[09]|19)\d\d$/.test(value)) {
      return 'Такая дата невозможна';
    } else return '';
  },
  email: (value) => {
    if (!/\w+@\w+\.\w+/.test(value)) {
      return 'Введите корректный Email';
    } else return '';
  },
};

export default validityFunctions;
