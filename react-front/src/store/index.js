import { configureStore, createSlice } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

//createSlice() reduce와 액션같이 생성
const recordSlice = createSlice({
    name: 'counter',
    initialState: [],
    reducers: {},
});
const recordStore = configureStore(
    {
        reducer: { record: recordSlice.reducer },
    },
    composeWithDevTools
);
export const recordAction = recordStore.actions;
export default recordStore;
