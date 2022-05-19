import {
    createSlice,
    PayloadAction,
    createAsyncThunk,
    ThunkAction,
} from '@reduxjs/toolkit';
import { AppThunk } from '../../store/store';
import { fetchOfo } from './ofoApi';
export interface occupationInterface {
    code: string;
    title: string;
    descriptor?: string;
    alternativeTitles?: string[];
}

interface stateInterface {
    occupations: occupationInterface[];
    loading?: 'idle' | 'pending' | 'succeeded' | 'failed';
    error?: any;
}

const initialState: stateInterface = {
    occupations: [],
    loading: 'idle',
    error: null,
};

export const fetchOfoByCode: any = createAsyncThunk(
    'ofo/fetchOfoByCode',
    async (ofoCode: string) => {
        const fetchedData = await fetchOfo(ofoCode);
        return { occupations: fetchedData.data };
    }
);

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
    extraReducers: (builder) => {
        builder
            .addCase(fetchOfoByCode.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchOfoByCode.fulfilled, (state, action) => {
                return { ...state, ...action.payload, loading: 'succeeded' };
            })
            .addCase(fetchOfoByCode.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action;
            });
    },
});

export const selectOfoOccupations = (state: {
    ofo: stateInterface;
}): occupationInterface[] => state.ofo.occupations;
export const selectOfoError = (state: { ofo: stateInterface }) =>
    state.ofo.error;
export const selectOfoStatus = (state: { ofo: stateInterface }) =>
    state.ofo.loading;

export const selectOfo = (state: { ofo: stateInterface }) => state.ofo;
export const { setOfo } = ofoSlice.actions;
export default ofoSlice.reducer;
