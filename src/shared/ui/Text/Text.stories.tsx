import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa esse fugit cupiditate molestiae numquam aliquam velit? Accusamus earum adipisci vero eos, quas cum placeat numquam! Earum natus animi iure corporis?',
        isOpen: true,
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    title: 'Lorem ipsun',
    text: 'Обычный текст Description',
};

export const Dark = Template.bind({});
Dark.args = {
    title: 'Lorem ipsun',
    text: 'Обычный текст Description',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightTitle = Template.bind({});
LightTitle.args = {
    title: 'TITLE',
};

export const DarkTitle = Template.bind({});
DarkTitle.args = {
    title: 'TITLE',
};
DarkTitle.decorators = [ThemeDecorator(Theme.DARK)];

export const LightText = Template.bind({});
LightText.args = {
    text: 'Description Description Description Description',
};

export const DarkText = Template.bind({});
DarkText.args = {
    text: 'Description Description Description Description',
};
DarkText.decorators = [ThemeDecorator(Theme.DARK)];

export const LightError = Template.bind({});
LightError.args = {
    title: 'title',
    text: 'Description Description Description Description',
    theme: TextTheme.ERROR,
};

export const DarkError = Template.bind({});
DarkError.args = {
    title: 'title',
    text: 'Description Description Description Description',
    theme: TextTheme.ERROR,
};
DarkError.decorators = [ThemeDecorator(Theme.DARK)];
