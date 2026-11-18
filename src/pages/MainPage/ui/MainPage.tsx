import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { Page } from 'widgets/Page';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState<string>('');
    const onChange = (val: string) => {
        setValue(val);
    };
    return (
        <Page>
            <Counter />
            <BugButton />
            {t('Главная страница')}
            <Input
                placeholder="TEXT"
                value={value}
                onChange={onChange}
            />
        </Page>
    );
};

export default MainPage;
