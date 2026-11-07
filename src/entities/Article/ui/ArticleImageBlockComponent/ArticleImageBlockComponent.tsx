import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={[cls.root, className].filter(Boolean).join(' ')}>
            {t('ArticleImageBlockComponent')}
        </div>
    );
});
