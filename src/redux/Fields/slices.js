import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: localStorage.getItem('name') ?? '',
  secondName: localStorage.getItem('secondName') ?? '',
  patronymic: localStorage.getItem('patronymic') ?? '',
  sex: localStorage.getItem('sex') ?? '',
  dateOfBirth: localStorage.getItem('dateOfBirth') ?? '',
  email: localStorage.getItem('email') ?? '',
  advertising: JSON.parse(localStorage.getItem('advertising') ?? false),
};

export const fieldsSlice = createSlice({
  name: 'fields',
  initialState,
  reducers: {
    changeValue: (state, { payload: { id, value } }) => {
      state[id] = value;
    },
  },
});

const { actions, reducer } = fieldsSlice;

export const { changeValue } = actions;

export default reducer;
