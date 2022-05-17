import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface occupationInterface {
    code: string;
    title: string;
    descriptor?: string;
    alternativeTitles?: string[];
}

interface stateInterface {
    occupations: occupationInterface[];
}

const initialState: stateInterface = {
    occupations: [],
};

export const ofoSlice = createSlice({
    name: 'ofo',
    initialState,
    reducers: {
        setOfo: (
            state: stateInterface,
            action: PayloadAction<stateInterface>
        ) => {
            return { ...state, ...action.payload };
        },
    },
});

export const selectOfo = (state: { ofo: stateInterface }) => state.ofo;
export const { setOfo } = ofoSlice.actions;
export default ofoSlice.reducer;
