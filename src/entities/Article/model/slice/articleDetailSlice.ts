import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArticleByIdData } from '../services/fetchArticleById/fetchArticleById';
import { Article } from '../types/article';
import { ArticleDetailSchema } from '../types/articleDetailSchema';

const initialState: ArticleDetailSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const articleDetailSlice = createSlice({
    name: 'articleDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleByIdData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleByIdData.fulfilled, (
                state,
                action: PayloadAction<Article>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleByIdData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = typeof action.payload === 'string'
                    ? action.payload
                    : action.error.message;
            });
    },
});

export const { actions: articleDetailActions } = articleDetailSlice;

export const { reducer: articleDetailReducer } = articleDetailSlice;
