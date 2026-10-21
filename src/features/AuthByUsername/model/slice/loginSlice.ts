import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
    isLodaing: false,
    password: '',
    username: '',
};

export const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined;
                state.isLodaing = true;
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLodaing = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLodaing = false;
                state.error = typeof action.payload === 'string'
                    ? action.payload
                    : action.error.message;
            });
    },
});

export const { actions: loginActions } = loginSlice;

export const { reducer: loginReducer } = loginSlice;
