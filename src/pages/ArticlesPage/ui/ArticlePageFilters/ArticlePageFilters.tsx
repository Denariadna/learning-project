import { ArticleView, ArticleViewSelector } from 'entities/Article';
import { getArticlesPageView } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { ArticlePageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from 'shared/ui/Card';
import { Input } from 'shared/ui/Input';
import { Select } from 'shared/ui/Select';
import cls from './ArticlePageFilters.module.scss';

interface ArticlePageFiltersProps {
    className?: string;
}

export const ArticlePageFilters = memo((props: ArticlePageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation('article-detail');
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const onViewChange = useCallback((newView: ArticleView) => {
        dispatch(ArticlePageActions.setView(newView));
    }, [dispatch]);
    return (
        <div className={classNames(cls.ArticlePageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <Select
                    label={t('Сортировка')}
                />
                <ArticleViewSelector
                    view={view}
                    onViewClick={onViewChange}
                />
            </div>
            <Card className={cls.search}>
                <Input placeholder={t('Поиск')} />
            </Card>
        </div>
    );
});
