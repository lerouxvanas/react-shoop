import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

export interface postArgsInterface {
    code: string;
    title: string;
    descriptor?: string;
}

export interface postInterface {
    id: string;
    code: string;
    title: string;
}

const initialState: postInterface[] = [
    { id: '1', code: '000000', title: 'Test post one' },
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(
                state: postInterface[],
                action: PayloadAction<postInterface>
            ) {
                state.push(action.payload);
            },
            prepare({ code, title, descriptor }: postArgsInterface) {
                return {
                    payload: {
                        id: nanoid(),
                        code,
                        title,
                        descriptor,
                    },
                };
            },
        },
    },
});

export const selectPosts = (state: { posts: postInterface[] }) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
