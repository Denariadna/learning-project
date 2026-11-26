import {
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import {
    fetchArticleRecommendations,
} from '../services/fetchArticleRecommendation/fetchArticleRecommendations';
import { ArticleDetailRecommendationsSchema } from '../types/ArticleDetailRecommendationsSchema';

const recommendationAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id,
});

export const getArticleRecommendations = recommendationAdapter.getSelectors<StateSchema>(
    (state) => state.articleRecommendations || recommendationAdapter.getInitialState(),
);

const articleDetailPageRecommendationsSlice = createSlice({
    name: 'articleDetailPageRecommendationsSlice',
    initialState: recommendationAdapter.getInitialState<ArticleDetailRecommendationsSchema>({
        ids: [],
        entities: {},
        error: undefined,
        isLoading: false,
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                recommendationAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = typeof action.payload === 'string'
                    ? action.payload
                    : action.error.message;
            });
    },
});

export const {
    reducer: acticleDetailPageRecommendationsReducer,
} = articleDetailPageRecommendationsSlice;
