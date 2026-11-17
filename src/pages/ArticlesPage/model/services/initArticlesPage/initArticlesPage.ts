import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageInited,
} from '../../selectors/articlesPageSelectors';
import { ArticlePageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articles/initArticlesPage',
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const inited = getArticlesPageInited(getState());
        if (!inited) {
            dispatch(ArticlePageActions.initState());

            dispatch(fetchArticlesList({
                page: 1,
            }));
        }
    },
);
