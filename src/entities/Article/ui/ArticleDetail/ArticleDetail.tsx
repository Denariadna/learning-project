import { articleDetailReducer } from 'entities/Article/model/slice/articleDetailSlice';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar';
import { Skeleton } from 'shared/ui/Skeleton';
import { Text } from 'shared/ui/Text';
import { TextAlign, TextSize } from 'shared/ui/Text/Text';
import VisibilityIcon from 'shared/assets/icons/visibility.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/ui/Icon';
import {
    getArticleDetailIsLoading,
    getArticleDetailData,
    getArticleDetailError,
} from '../../model/selectors/articleDetail';
import {
    fetchArticleByIdData,
} from '../../model/services/fetchArticleById/fetchArticleById';
import cls from './ArticleDetail.module.scss';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent';

interface ArticleDetailProps {
    id: string;
}

const reducers: ReducersList = {
    articleDetail: articleDetailReducer,
};

export const ArticleDetail = memo((props: ArticleDetailProps) => {
    const { id } = props;
    const { t } = useTranslation('article-detail');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailIsLoading);
    const article = useSelector(getArticleDetailData);
    const error = useSelector(getArticleDetailError);
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') dispatch(fetchArticleByIdData(id));
    }, [dispatch, id]);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        default:
            return null;
        }
    }, []);

    let content;
    if (isLoading) {
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
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}
                    />
                </div>
                <Text
                    className={cls.title}
                    size={TextSize.L}
                    title={article?.title}
                    text={article?.subtitle}
                />
                <div className={cls.icons}>
                    <Icon
                        Svg={VisibilityIcon}
                        className={cls.logo}
                    />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.icons}>
                    <Icon
                        className={cls.logo}
                        Svg={CalendarIcon}
                    />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmout>
            {content}
        </DynamicModuleLoader>
    );
});
