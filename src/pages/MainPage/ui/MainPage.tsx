import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState<string>('');
    const onChange = (val: string) => {
        setValue(val);
    };
    return (
        <div>
            <Counter />
            <BugButton />
            {t('Главная страница')}
            <Input
                placeholder="TEXT"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default MainPage;
