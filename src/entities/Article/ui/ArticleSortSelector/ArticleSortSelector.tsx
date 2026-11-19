import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={[cls.root, className].filter(Boolean).join(' ')}>
            {t('ArticleSortSelector')}
        </div>
    );
});
