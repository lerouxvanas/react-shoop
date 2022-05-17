import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ofoReducer from '../features/ofo/ofoSlice';
import postsReducer from '../features/posts/postsSlice';

export const store = configureStore({
    reducer: {
        ofo: ofoReducer,
        posts: postsReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
