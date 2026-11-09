import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { CommentType } from 'entities/Comment';
import {
    fetchCommentsByArticleId,
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailCommentSchema } from '../types/ArticleDetailCommentSchema';

const commentsAdapter = createEntityAdapter<CommentType>({
    selectId: (comment: CommentType) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailComments || commentsAdapter.getInitialState(),
);

const articleDetailCommentsSlice = createSlice({
    name: 'articleDetailCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailCommentSchema>({
        ids: ['1', '2'],
        entities: {},
        error: undefined,
        isLoading: false,
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (
                state,
                action: PayloadAction<CommentType[]>,
            ) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = typeof action.payload === 'string'
                    ? action.payload
                    : action.error.message;
            });
    },
});

export const { reducer: acticleDetailCommentsReducer } = articleDetailCommentsSlice;
