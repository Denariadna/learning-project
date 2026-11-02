import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        placeholder: 'Text',
        value: '123',
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Light = Template.bind({});
Light.args = {
    label: 'Текст для тестирования',
    options: [
        {
            value: '123',
            content: 'первый',
        },
        {
            value: '2',
            content: 'второй',
        },
        {
            value: '3',
            content: 'третий',
        },
    ],
};

export const Dark = Template.bind({});
Dark.args = {
    label: 'Текст для тестирования',
    options: [
        {
            value: '123',
            content: 'первый',
        },
        {
            value: '2',
            content: 'второй',
        },
        {
            value: '3',
            content: 'третий',
        },
    ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
