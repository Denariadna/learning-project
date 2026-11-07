import { render, screen } from '@testing-library/react';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

describe('ArticleCodeBlockComponent', () => {
    test('renders correctly', () => {
        render(<ArticleCodeBlockComponent />);

        expect(screen.getByText('ArticleCodeBlockComponent')).toBeTruthy();
    });
});
