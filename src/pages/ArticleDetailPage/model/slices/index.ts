import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { acticleDetailCommentsReducer } from './articleDetailCommentsSlice';
import { acticleDetailPageRecommendationsReducer } from './articleDetailPageRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: acticleDetailPageRecommendationsReducer,
    comments: acticleDetailCommentsReducer,
});
