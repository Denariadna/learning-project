import { Profile } from 'entities/Profile/model/types/profile';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text } from 'shared/ui/Text';
import { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    onChangeFirstName: (value: string) => void;
    onChangeLastName: (value: string) => void;
    onChangeAge: (value: string) => void;
    onChangeCity: (value: string) => void;
    readonly?: boolean
}

export const ProfileCard = ({
    className,
    data,
    error,
    isLoading,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    readonly,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(
                cls.ProfileCard,
                {},
                [className, cls.loading],
            )}
            >
                <Loader />
            </div>
        );
    }
    if (error) {
        return (
            <div className={classNames(
                cls.ProfileCard,
                {},
                [className, cls.error],
            )}
            >
                <Text
                    theme={TextTheme.ERROR}
                    text={t('Попробуйте перезагрузить страницу')}
                    title={t('Произошла ошибка при подгрузке профиля')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Ваш город')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
