import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import {
    Article, ArticleBlockType, ArticleType, ArticleView,
} from 'entities/Article/model/types/article';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { ArticleListItem } from './ArticleListItem';

export default {
    title: 'entity/Article/ArticleListItem',
    component: ArticleListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

const article: Article = {
    id: '1',
    user: {
        id: '1',
        username: 'test',
        avatar: '/images/avatar.png',
    },
    title: 'Javascript news',
    subtitle: 'Что нового в js за 2026',
    img: '/images/javascript.webp',
    views: 1022,
    createdAt: '26/06/2026',
    type: [
        ArticleType.IT,
        ArticleType.ECONOMICS,
    ],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Введение в JavaScript и традиция «Hello, world!»',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Для того чтобы её написать, если вы пользуетесь Google Chrome, откройте меню браузера и выберите в нём команду Дополнительные инструменты > Инструменты разработчика. Окно браузера окажется разделённым на две части. В одной из них будет видна страница, в другой откроется панель с инструментами разработчика, содержащая несколько закладок. Нас интересует закладка Console (Консоль). Щёлкните по ней. Не обращайте внимания на то, что уже может в консоли присутствовать (для её очистки можете воспользоваться комбинацией клавиш Ctrl + L). Нас сейчас интересует приглашение консоли. Именно сюда можно вводить JavaScript-код, который выполняется по нажатию клавиши Enter.',
            ],
        },
        {
            id: '2',
            type: ArticleBlockType.TEXT,
            title: 'Первый код в консоли',
            paragraphs: [
                'Введём в консоли следующее. Для вывода текста в консоль разработчика используется метод `console.log()`. Это один из самых полезных инструментов для отладки программ.',
                'После того как вы нажмёте Enter, консоль выведет ваше сообщение и вернёт значение `undefined`. Не пугайтесь, это нормально — функция `console.log` ничего не возвращает, поэтому консоль показывает результат выполнения выражения.',
            ],
        },
        {
            id: '3',
            type: ArticleBlockType.CODE,
            code: 'console.log("Hello, world!");\n// В консоли появится: Hello, world!\n// А ниже будет строка: undefined',
        },
        {
            id: '4',
            type: ArticleBlockType.IMAGE,
            src: 'https://placehold.co/800x400/2d2d2d/ffffff?text=Console+Output',
            title: 'Картинка 1 - Вывод сообщения в консоли',
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'Создание полноценного HTML-документа',
            paragraphs: [
                'Консоль — это отличный инструмент для проверки идей, но настоящие веб-страницы создаются с помощью HTML. Давайте создадим простейший HTML-документ, который будет содержать наш JavaScript-код.',
                'Структура HTML-документа всегда начинается с тега `<!DOCTYPE html>`. Затем идёт корневой тег `<html>`, внутри которого находятся две основные секции: `<head>` (для метаданных, заголовка страницы и подключения стилей) и `<body>` (для видимого контента).',
                'В нашем примере мы создадим пустой параграф с идентификатором `id="hello"`, а затем добавим скрипт, который найдёт этот параграф и изменит его содержимое с помощью метода `innerHTML`.',
            ],
        },
        {
            id: '6',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>',
        },
    ],
};

export const LightBig = Template.bind({});
LightBig.args = {
    view: ArticleView.BIG,
    article,
};

export const DarkSmall = Template.bind({});
DarkSmall.args = {
    view: ArticleView.SMALL,
    article,
};
DarkSmall.decorators = [ThemeDecorator(Theme.DARK)];
