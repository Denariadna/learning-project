import { render, screen } from '@testing-library/react';
import ArticleDetailPage from './ArticleDetailPage';

describe('ArticleDetailPage', () => {
    test('renders correctly', () => {
        render(<ArticleDetailPage />);

        expect(screen.getByText('ArticleDetailPage')).toBeTruthy();
    });
});
