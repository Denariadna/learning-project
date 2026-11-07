import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={[cls.root, className].filter(Boolean).join(' ')}>
            {t('ArticleCodeBlockComponent')}
        </div>
    );
});
