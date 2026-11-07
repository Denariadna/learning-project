import { render, screen } from '@testing-library/react';
import ArticlesPage from './ArticlesPage';

describe('ArticlesPage', () => {
    test('renders correctly', () => {
        render(<ArticlesPage />);

        expect(screen.getByText('ArticlesPage')).toBeTruthy();
    });
});
