import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import Avatar from 'shared/assets/tests/avatar.png';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entity/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        data: {
            username: 'admin',
            age: 22,
            city: 'Moscow',
            country: Country.Belarus,
            first: 'Арина',
            lastname: 'Денисова',
            currency: Currency.RUB,
            avatar: Avatar,
        },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...(args as {})} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Error = Template.bind({});
Error.args = {
    error: 'true',
};
Error.decorators = [StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
Loading.decorators = [StoreDecorator({})];
