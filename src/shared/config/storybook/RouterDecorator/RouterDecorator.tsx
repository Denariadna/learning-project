import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (story: () => Story) => (
    <BrowserRouter>
        <StoreProvider>
            {story()}
        </StoreProvider>
    </BrowserRouter>

);
