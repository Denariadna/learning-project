import { render, screen } from '@testing-library/react';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

describe('ArticleImageBlockComponent', () => {
    test('renders correctly', () => {
        render(<ArticleImageBlockComponent />);

        expect(screen.getByText('ArticleImageBlockComponent')).toBeTruthy();
    });
});
