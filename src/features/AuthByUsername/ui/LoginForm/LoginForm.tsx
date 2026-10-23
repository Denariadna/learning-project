import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import {
    getLoginLoading,
} from 'features/AuthByUsername/model/selectors/getLoginLoading/getLoginLoading';
import {
    getLoginPassword,
} from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import {
    getLoginUsername,
} from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';
import {
    loginByUsername,
} from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

const LoginForm = memo(({ className = '' }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);
    const store = useStore() as ReduxStoreWithManager;
    const username = useSelector(getLoginUsername);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginLoading);
    const password = useSelector(getLoginPassword);
    useEffect(() => {
        store.reducerManager.add('loginForm', loginReducer);
        dispatch({ type: '@INIT login form' });
        return () => {
            store.reducerManager.remove('loginForm');
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text
                title={t('Форма авторизации')}
            />
            {error && (
                <Text
                    text={t('Произошла ошибка при авторизации')}
                    theme={TextTheme.ERROR}
                />
            )}
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите username')}
                autoFocus
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cls.loginBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});

export default LoginForm;
