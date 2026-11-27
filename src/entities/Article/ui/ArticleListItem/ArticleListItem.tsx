import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card';
import { Icon } from 'shared/ui/Icon';
import { Text } from 'shared/ui/Text';
import View from 'shared/assets/icons/visibility.svg';
import { Avatar } from 'shared/ui/Avatar';
import { Button } from 'shared/ui/Button/ui/Button';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
    HTMLAttributeAnchorTarget,
} from 'react';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const {
        className,
        article,
        target = '',
        view = ArticleView.SMALL,
    } = props;
    const types = (
        <Text
            text={article.type.join(', ')}
            className={cls.types}
        />
    );
    const { t } = useTranslation('article-detail');
    const views = (
        <>
            <Text
                text={String(article.views)}
                className={cls.views}
            />
            <Icon Svg={View} />
        </>
    );
    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar
                            size={30}
                            src={article.user.avatar}
                        />
                        <Text
                            text={article.user.username}
                            className={cls.username}
                        />
                        <Text
                            text={article.createdAt}
                            className={cls.date}
                        />
                    </div>
                    <Text title={article.title} />
                    {types}
                    <img src={article.img} alt={article.title} className={cls.img} />
                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={cls.textblock}
                        />
                    )}
                    <div
                        className={cls.footer}
                    >
                        <AppLink
                            target={target}
                            to={RoutePath.article_detail + article.id}
                        >
                            <Button>
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }
    return (
        <AppLink
            target={target}
            className={classNames('', {}, [className, cls[view]])}
            to={RoutePath.article_detail + article.id}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    <Text
                        text={article.createdAt}
                        className={cls.date}
                    />
                </div>
                <div className={cls.info}>
                    {types}
                    {views}
                </div>
                <Text
                    text={article.title}
                    className={cls.title}
                />
            </Card>
        </AppLink>
    );
};
