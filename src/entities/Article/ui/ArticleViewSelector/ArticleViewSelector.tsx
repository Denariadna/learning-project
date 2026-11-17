import { ArticleView } from 'entities/Article/model/types/article';
import { memo } from 'react';
import ViewBig from 'shared/assets/icons/viewBig.svg';
import ViewSmall from 'shared/assets/icons/viewSmall.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Icon } from 'shared/ui/Icon';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView,
    onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.BIG,
        icon: ViewBig,
    },
    {
        view: ArticleView.SMALL,
        icon: ViewSmall,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const {
        className,
        view,
        onViewClick,
    } = props;
    const onClick = (newView: ArticleView) => {
        onViewClick?.(newView);
    };
    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={() => onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                    />
                </Button>
            ))}
        </div>
    );
});
