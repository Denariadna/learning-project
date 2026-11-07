import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={[cls.root, className].filter(Boolean).join(' ')}>
            {t('ArticleTextBlockComponent')}
        </div>
    );
});
