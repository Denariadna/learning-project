import { articleDetailReducer } from 'entities/Article/model/slice/articleDetailSlice';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Skeleton } from 'shared/ui/Skeleton';
import { Text } from 'shared/ui/Text';
import { TextAlign } from 'shared/ui/Text/Text';
import {
    getArticleDetailIsLoading,
    getArticleDetailData,
    getArticleDetailError,
} from '../../model/selectors/articleDetail';
import {
    fetchArticleByIdData,
} from '../../model/services/fetchArticleById/fetchArticleById';
import cls from './ArticleDetail.module.scss';

interface ArticleDetailProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetail: articleDetailReducer,
};

export const ArticleDetail = memo((props: ArticleDetailProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article-detail');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailIsLoading);
    const article = useSelector(getArticleDetailData);
    const error = useSelector(getArticleDetailError);
    useEffect(() => {
        dispatch(fetchArticleByIdData(id));
    }, [dispatch, id]);
    let content;
    if (true) {
        content = (
            <div>
                <Skeleton
                    width={200}
                    height={200}
                    border="50%"
                    className={cls.avatar}
                />
                <Skeleton
                    width={300}
                    height={24}
                    className={cls.title}
                />
                <Skeleton
                    width="100%"
                    height={300}
                    className={cls.skeleton}
                />
                <Skeleton
                    width="100%"
                    height={200}
                    className={cls.skeleton}
                />
            </div>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('Произошла ошибка при загрузке статьи')}
            />
        );
    } else {
        content = (
            <div className={[cls.root, className].filter(Boolean).join(' ')}>
                {t('ArticleDetail')}
            </div>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmout>
            {content}
        </DynamicModuleLoader>
    );
});
