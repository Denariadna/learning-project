import { ArticleSortField } from 'entities/Article/model/types/article';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { SortOrder } from 'shared/types';
import { Select } from 'shared/ui/Select';
import { SelectOption } from 'shared/ui/Select/Select';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        onChangeOrder,
        onChangeSort,
        order,
        sort,
    } = props;
    const { t } = useTranslation('article-detail');
    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('По возрастанию'),
        },
        {
            value: 'desc',
            content: t('По убыванию'),
        },
    ], [t]);
    const sortOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('Дата создания'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('Название'),
        },
        {
            value: ArticleSortField.VIEW,
            content: t('Количество просмотров'),
        },
    ], [t]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select<ArticleSortField>
                label={t('Сортировка')}
                options={sortOptions}
                onChange={onChangeSort}
                value={sort}
            />
            <Select<SortOrder>
                label={t('по')}
                options={orderOptions}
                value={order}
                className={cls.order}
                onChange={onChangeOrder}
            />
        </div>
    );
});
