import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';
import { ArticlePageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlePage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articles/fetchNextArticlePage',
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPageNum(getState());
        const isLoading = getArticlesPageIsLoading(getState());
        if (hasMore && !isLoading) {
            dispatch(ArticlePageActions.setPage(page + 1));
            dispatch(fetchArticlesList({
                page: page + 1,
            }));
        }
    },
);
