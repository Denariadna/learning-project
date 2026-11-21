import {
    ArticleView,
    ArticleViewSelector,
    ArticleSortSelector,
    ArticleSortField,
} from 'entities/Article';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { ArticlePageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
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

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList);
    }, []);

    const onViewChange = useCallback((newView: ArticleView) => {
        dispatch(ArticlePageActions.setView(newView));
        dispatch(ArticlePageActions.setPage(1));
    }, [dispatch]);
    const onOrderChange = useCallback((sort: SortOrder) => {
        dispatch(ArticlePageActions.setOrder(sort));
        dispatch(ArticlePageActions.setPage(1));
    }, [dispatch]);
    const onSortChange = useCallback((order: ArticleSortField) => {
        dispatch(ArticlePageActions.setSort(order));
        dispatch(ArticlePageActions.setPage(1));
    }, [dispatch]);
    const onSerachChange = useCallback((search: string) => {
        dispatch(ArticlePageActions.setSearch(search));
        dispatch(ArticlePageActions.setPage(1));
    }, [dispatch]);
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
        </div>
    );
});
