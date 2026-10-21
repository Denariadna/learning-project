import { loginByUsername } from 'features/AuthByUsername';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className = '' }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);
    const {
        username, password, isLodaing, error,
    } = useSelector(getLoginState);
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
                    text={error}
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
                disabled={isLodaing}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
