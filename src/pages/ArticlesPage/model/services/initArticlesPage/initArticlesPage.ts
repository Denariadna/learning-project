import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types';
import {
    getArticlesPageInited,
} from '../../selectors/articlesPageSelectors';
import { ArticlePageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    'articles/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const inited = getArticlesPageInited(getState());
        if (!inited) {
            const orderFromURL = searchParams.get('order');
            const sortFromURL = searchParams.get('sort');
            const searchFromURL = searchParams.get('search');

            if (orderFromURL) {
                dispatch(ArticlePageActions.setOrder(orderFromURL as SortOrder));
            }
            if (sortFromURL) {
                dispatch(ArticlePageActions.setSort(searchFromURL as ArticleSortField));
            }
            if (searchFromURL) {
                dispatch(ArticlePageActions.setSearch(searchFromURL));
            }

            dispatch(ArticlePageActions.initState());

            dispatch(fetchArticlesList({
                replace: false,
            }));
        }
    },
);
