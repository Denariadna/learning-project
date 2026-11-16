import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { fetchNextArticlePage } from './fetchNextArticlePage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlePage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
    });
    test('fetchArticlesList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
    test('fetchArticlesList not called with loading', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: true,
                hasMore: true,
            },
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
