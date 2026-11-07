import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailPage.module.scss';

interface ArticleDetailPageProps {
    className?: string;
}

const ArticleDetailPage = memo((props: ArticleDetailPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={[cls.root, className].filter(Boolean).join(' ')}>
            {t('ArticleDetailPage')}
        </div>
    );
});

export default memo(ArticleDetailPage);
