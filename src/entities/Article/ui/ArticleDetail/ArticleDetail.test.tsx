import { render, screen } from '@testing-library/react';
import { ArticleDetail } from './ArticleDetail';

describe('ArticleDetail', () => {
    test('renders correctly', () => {
        render(<ArticleDetail />);

        expect(screen.getByText('ArticleDetail')).toBeTruthy();
    });
});
