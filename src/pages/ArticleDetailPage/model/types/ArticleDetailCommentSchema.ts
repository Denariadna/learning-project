import { EntityState } from '@reduxjs/toolkit';
import { CommentType } from 'entities/Comment';

export interface ArticleDetailCommentSchema
extends EntityState<CommentType> {
    isLoading?: boolean;
    error?: string;
}
