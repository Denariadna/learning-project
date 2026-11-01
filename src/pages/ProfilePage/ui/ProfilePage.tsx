import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfilePageHeader } from './ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};
const ProfilePage = () => {
    const dispatch = useAppDispatch();
    const form = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstName = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            first: value || '',
        }));
    }, [dispatch]);

    const onChangeLastName = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            lastname: value || '',
        }));
    }, [dispatch]);
    const onChangeCity = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            city: value || '',
        }));
    }, [dispatch]);
    const onChangeAge = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            age: Number(value) || 0,
        }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader
            removeAfterUnmout
            reducers={reducers}
        >
            <ProfilePageHeader />
            <ProfileCard
                data={form}
                isLoading={isLoading}
                error={error}
                onChangeFirstName={onChangeFirstName}
                onChangeLastName={onChangeLastName}
                onChangeCity={onChangeCity}
                onChangeAge={onChangeAge}
                readonly={readonly}
            />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
