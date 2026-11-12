import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleType, Article, ArticleBlockType } from 'entities/Article/model/types/article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleDetail } from './ArticleDetail';

const article: Article = {
    id: '1',
    user: {
        id: '1',
        username: 'test',
        avatar: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png',
    },
    title: 'Javascript news',
    subtitle: 'Что нового в js за 2026',
    views: 1022,
    img: '',
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
                'Введём в консоль следующее. Для вывода текста в консоль разработчика используется метод `console.log()`. Это один из самых полезных инструментов для отладки программ.',
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
            src: '',
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

export default {
    title: 'entity/ArticleDetail',
    component: ArticleDetail,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetail>;

const Template: ComponentStory<typeof ArticleDetail> = (args) => <ArticleDetail {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        articleDetail: {
            data: article,
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        articleDetail: {
            data: article,
        },
    }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
    ThemeDecorator(Theme.GREEN),
    StoreDecorator({
        articleDetail: {
            isLoading: true,
        },
    }),
];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
    ThemeDecorator(Theme.GREEN),
    StoreDecorator({
        articleDetail: {
            error: 'error',
        },
    }),
];
