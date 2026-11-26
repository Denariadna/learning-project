import {
    AnyAction, Dispatch, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailSchema } from 'entities/Article/model/types/articleDetailSchema';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { LoginSchema } from 'features/AuthByUsername/model/types/loginSchema';
import { ScrollSchema } from 'features/scroll';
import {
    ArticleDetailCommentSchema,
    ArticleDetailRecommendationsSchema,
} from 'pages/ArticleDetailPage';
import { ArticlesPageSchema } from 'pages/ArticlesPage';

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    scroll: ScrollSchema;

    // Асинхронные редьюсеры
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetail?: ArticleDetailSchema
    articleDetailComments?: ArticleDetailCommentSchema;
    addCommentForm?: AddCommentFormSchema
    articlesPage?: ArticlesPageSchema;
    articleRecommendations?: ArticleDetailRecommendationsSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MoutedReducers = OptionRecord<StateSchemaKey, boolean>

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema | undefined, action: AnyAction) => StateSchema;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
   // true - вмонтирован, fasle - демонтирован
    getMountedReducers: () => MoutedReducers
}

export interface ReduxStoreWithManager
    extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    dispatch?: Dispatch;
    state: StateSchema;
}
