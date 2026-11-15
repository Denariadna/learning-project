import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleView } from 'entities/Article/model/types/article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticlePageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { ArticleViewSelector } from './ArticleViewSelector';

export default {
    title: 'entity/Article/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const LightBig = Template.bind({});
LightBig.args = {
    view: ArticleView.BIG,
};

export const DarkSmall = Template.bind({});
DarkSmall.args = {
    view: ArticleView.SMALL,
};
DarkSmall.decorators = [ThemeDecorator(Theme.DARK)];

export const GreenSmall: ComponentStory<typeof ArticleViewSelector> = (args) => {
    const dispatch = useAppDispatch();
    const [view, setView] = useState(ArticleView.SMALL);

    const onViewClick = (newView: ArticleView) => {
        setView(newView);
        dispatch(ArticlePageActions.setView(newView));
    };

    return (
        <ArticleViewSelector
            {...args}
            view={view}
            onViewClick={onViewClick}
        />
    );
};

GreenSmall.args = {
    view: ArticleView.SMALL,
};

GreenSmall.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Theme.GREEN),
];
