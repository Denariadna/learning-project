import { ArticleDetail } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    useInitialEffect,
} from 'shared/lib/hooks/useAppDispatch/useInitialEffect/useInitialEffect';
import { Text } from 'shared/ui/Text';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';
import {
    fetchCommentsByArticleId,
} from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
    acticleDetailCommentsReducer,
    getArticleComments,
} from '../model/slices/articleDetailCommentsSlice';
import cls from './ArticleDetailPage.module.scss';

interface ArticleDetailPageProps {
    className?: string;
}

const reducerList: ReducersList = {
    articleDetailComments: acticleDetailCommentsReducer,
};

const ArticleDetailPage = memo((props: ArticleDetailPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-detail');
    const { id } = useParams<{id: string}>();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useDispatch();
    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });
    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducerList} removeAfterUnmout>
            <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
                <ArticleDetail id={id} />
                <Text
                    className={cls.commentTitle}
                    title={t('Комментарии')}
                />
                <CommentList
                    isLoading={isLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
});

export default memo(ArticleDetailPage);
