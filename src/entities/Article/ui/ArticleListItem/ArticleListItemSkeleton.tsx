import { ArticleView } from 'entities/Article/model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card';
import { Skeleton } from 'shared/ui/Skeleton';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view?: ArticleView;
}

export const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
    const {
        className,
        view = ArticleView.SMALL,
    } = props;
    if (view === ArticleView.BIG) {
        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton
                            width={30}
                            height={30}
                            border="50%"
                        />
                        <Skeleton
                            width={150}
                            height={16}
                            className={cls.username}
                        />
                        <Skeleton
                            width={150}
                            height={16}
                            className={cls.date}
                        />
                    </div>
                    <Skeleton
                        className={cls.title}
                        width={250}
                        height={24}
                    />
                    <Skeleton
                        height={200}
                        className={cls.img}
                    />
                    <div
                        className={cls.footer}
                    >
                        <Skeleton
                            height={26}
                            width={200}
                            className={cls.img}
                        />
                    </div>
                </Card>
            </div>
        );
    }
    return (
        <div className={classNames('', {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton
                        width={200}
                        height={200}
                    />
                </div>
                <div className={cls.info}>
                    <Skeleton
                        width={130}
                        height={16}
                    />
                </div>
                <Skeleton
                    width={150}
                    height={16}
                />
            </Card>
        </div>
    );
};
