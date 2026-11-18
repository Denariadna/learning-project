// <адрес страницы, позиция скролла>
export type Scroll = Record<string, number>

export interface ScrollSchema {
    scroll: Scroll;
}
