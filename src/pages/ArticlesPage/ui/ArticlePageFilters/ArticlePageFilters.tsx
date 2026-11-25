import {
    ArticleView,
    ArticleViewSelector,
    ArticleSortSelector,
    ArticleSortField,
} from 'entities/Article';
import { ArticleType } from 'entities/Article/model/types/article';
import { ArticleTypeTabs } from 'entities/Article/ui/ArticleTypeTabs';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import {
    fetchArticlesList,
} from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { ArticlePageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from 'shared/types';
import { Card } from 'shared/ui/Card';
import { Input } from 'shared/ui/Input';
import cls from './ArticlePageFilters.module.scss';

interface ArticlePageFiltersProps {
    className?: string;
}

export const ArticlePageFilters = memo((props: ArticlePageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation('article-detail');
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({
            replace: true,
        }));
    }, [dispatch]);
    const debounceFetchData = useDebounce(fetchData, 500);

    const onViewChange = useCallback((newView: ArticleView) => {
        dispatch(ArticlePageActions.setView(newView));
        dispatch(ArticlePageActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);
    const onOrderChange = useCallback((sort: SortOrder) => {
        dispatch(ArticlePageActions.setOrder(sort));
        dispatch(ArticlePageActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);
    const onSortChange = useCallback((order: ArticleSortField) => {
        dispatch(ArticlePageActions.setSort(order));
        dispatch(ArticlePageActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);
    const onSerachChange = useCallback((search: string) => {
        dispatch(ArticlePageActions.setSearch(search));
        dispatch(ArticlePageActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);
    const onTypeChange = useCallback((type: ArticleType) => {
        dispatch(ArticlePageActions.setType(type));
        dispatch(ArticlePageActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);

    return (
        <div className={classNames(cls.ArticlePageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    onChangeOrder={onOrderChange}
                    order={order}
                    onChangeSort={onSortChange}
                    sort={sort}
                />
                <ArticleViewSelector
                    view={view}
                    onViewClick={onViewChange}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    placeholder={t('Поиск')}
                    value={search}
                    onChange={onSerachChange}
                />
            </Card>
            <ArticleTypeTabs
                onChangeType={onTypeChange}
                value={type}
                className={cls.tabs}
            />
        </div>
    );
});
