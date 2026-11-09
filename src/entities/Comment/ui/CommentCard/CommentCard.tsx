import { CommentType } from 'entities/Comment';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar';
import { Skeleton } from 'shared/ui/Skeleton';
import { Text } from 'shared/ui/Text';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment: CommentType;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton
                        border="50%"
                        width={30}
                        height={30}
                    />
                    <Skeleton
                        height={16}
                        width={100}
                        className={cls.user}
                    />
                </div>
                <Skeleton
                    height={50}
                    width="100%"
                    className={cls.text}
                />
            </div>
        );
    }
    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                {comment.user.avatar && (
                    <Avatar
                        size={30}
                        src={comment.user.avatar}
                    />
                )}
                <Text
                    className={cls.user}
                    title={comment.user.username}
                />
            </div>
            <Text
                className={cls.text}
                text={comment.text}
            />
        </div>
    );
});
