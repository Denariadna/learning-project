/* eslint-disable max-len */
import { ArticleList } from 'entities/Article';
import {
    Article, ArticleBlockType, ArticleType, ArticleView,
} from 'entities/Article/model/types/article';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const article: Article = {
    id: '1',
    user: {
        id: '1',
        username: 'test',
        avatar: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png',
    },
    title: 'Javascript news',
    subtitle: 'Что нового в js за 2026',
    img: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png',
    views: 1022,
    createdAt: '26/06/2026',
    type: [
        ArticleType.IT,
        ArticleType.SCIENCE,
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
        {
            id: '7',
            type: ArticleBlockType.TEXT,
            title: 'Почему важно подключать скрипт в конце body?',
            paragraphs: [
                'Обратите внимание, что тег `<script>` расположен в самом конце элемента `<body>`, после параграфа. Это сделано намеренно.',
                'Браузер читает HTML-код сверху вниз. Когда он доходит до тега `<script>`, он начинает выполнять JavaScript. Если бы скрипт находился в секции `<head>`, он бы попытался найти элемент с `id="hello"` до того, как этот элемент был бы создан браузером. В результате мы получили бы ошибку `null`.',
                'Размещая скрипты в конце `<body>`, мы гарантируем, что весь HTML-код уже загружен и доступен для манипуляций.',
            ],
        },
        {
            id: '8',
            type: ArticleBlockType.IMAGE,
            src: 'https://placehold.co/800x400/00599c/ffffff?text=Browser+Window',
            title: 'Картинка 2 - Окно браузера с результатом',
        },
        {
            id: '9',
            type: ArticleBlockType.TEXT,
            title: 'Работа с переменными',
            paragraphs: [
                'Давайте немного усложним наш код. Вместо того чтобы жёстко прописывать строку в методе `innerHTML`, мы создадим переменную.',
                'Переменная — это «контейнер» для хранения данных. В современном JavaScript для создания переменных используются ключевые слова `let` и `const`. `let` используется, если значение переменной планируется менять, а `const` — если значение должно оставаться неизменным.',
                'Создадим переменную `message`, сохраним в неё приветствие, а затем выведем его на страницу.',
            ],
        },
        {
            id: '10',
            type: ArticleBlockType.CODE,
            code: "// Файл script.js\nconst message = \"Привет, мир!\";\nconst element = document.getElementById(\"hello\");\n\nif (element) {\n  element.innerHTML = message;\n} else {\n  console.error(\"Элемент с id 'hello' не найден!\");\n}",
        },
        {
            id: '11',
            type: ArticleBlockType.TEXT,
            title: 'Добавление стилей',
            paragraphs: [
                'Чтобы наша страница выглядела красивее, добавим немного CSS. Для этого используется тег `<style>`, который обычно располагается в секции `<head>`.',
                'Мы можем изменить цвет текста, его размер, а также добавить отступы. Давайте сделаем наш текст крупным и синим.',
            ],
        },
        {
            id: '12',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <head>\n    <title>Моя первая страница</title>\n    <style>\n      #hello {\n        color: #007bff;\n        font-size: 24px;\n        font-family: sans-serif;\n        text-align: center;\n        margin-top: 50px;\n      }\n    </style>\n  </head>\n  <body>\n    <p id="hello"></p>\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>',
        },
        {
            id: '13',
            type: ArticleBlockType.IMAGE,
            src: 'https://placehold.co/800x400/28a745/ffffff?text=Styled+Text',
            title: 'Картинка 3 - Стилизованный вывод',
        },
        {
            id: '14',
            type: ArticleBlockType.TEXT,
            title: 'Итоги',
            paragraphs: [
                'Мы прошли путь от простого вывода строки в консоль до создания полноценного HTML-документа с JavaScript-логикой и CSS-стилями.',
                'Теперь вы знаете, как работает DOM (Document Object Model), как находить элементы на странице с помощью `document.getElementById`, и как изменять их содержимое.',
                'Попробуйте поэкспериментировать с этим кодом: измените текст, цвета, размеры шрифта. JavaScript — это язык, который лучше всего изучать на практике!',
            ],
        },
    ],
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList
                view={ArticleView.BIG}
                articles={
                    new Array(16).fill(0).map((item, i) => ({
                        ...article,
                        id: String(i),
                    }))
                }
            />
        </div>
    );
};

export default memo(ArticlesPage);
