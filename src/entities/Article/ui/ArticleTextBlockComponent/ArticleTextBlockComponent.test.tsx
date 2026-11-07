import { render, screen } from '@testing-library/react';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';

describe('ArticleTextBlockComponent', () => {
    test('renders correctly', () => {
        render(<ArticleTextBlockComponent />);

        expect(screen.getByText('ArticleTextBlockComponent')).toBeTruthy();
    });
});
