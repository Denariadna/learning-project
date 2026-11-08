import { ArticleTextBlock } from 'entities/Article/model/types/article';
import { memo } from 'react';
import { Text } from 'shared/ui/Text';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;

    return (
        <div className={className}>
            {block.title && (
                <Text
                    title={block.title}
                    className={cls.title}
                />
            )}
            {block.paragraphs.map((text) => (
                <Text
                    key={text}
                    text={text}
                    className={cls.paragraph}
                />
            ))}
        </div>
    );
});
