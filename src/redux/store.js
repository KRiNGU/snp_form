import { configureStore } from '@reduxjs/toolkit';
import fieldReducer from './Fields/slices.js';

export const store = configureStore({
    reducer: fieldReducer,
    devTools: process.env.NODE_EN !== 'production',
});