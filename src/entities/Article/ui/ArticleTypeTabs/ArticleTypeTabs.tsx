import { ArticleType } from 'entities/Article';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Tabs } from 'shared/ui/Tabs';
import { TabItem } from 'shared/ui/Tabs/Tabs';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (value: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const {
        className,
        value,
        onChangeType,
    } = props;
    const { t } = useTranslation('article-detail');

    const onTypeClick = useCallback((type: TabItem) => {
        onChangeType(type.value as ArticleType);
    }, [onChangeType]);
    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('Все'),
        },
        {
            value: ArticleType.IT,
            content: t('Айти'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука'),
        },
    ], [t]);
    return (
        <Tabs
            tabs={typeTabs}
            onTabClick={onTypeClick}
            value={value}
            className={classNames('', {}, [className])}
        />
    );
});
