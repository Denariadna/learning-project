import { ArticleDetailCommentSchema } from '../types/ArticleDetailCommentSchema';
import { ArticleDetailRecommendationsSchema } from '../types/ArticleDetailRecommendationsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailCommentSchema;
    recommendations: ArticleDetailRecommendationsSchema;
}
