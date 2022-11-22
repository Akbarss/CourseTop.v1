import { BlogCategory } from '@/shared/types/blog/blog-category';
import { BlogAuthor } from './author.d';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  cover_image: string;
  read_time: number;
  preview_text: string;
  body: string;
  author: BlogAuthor;
  author_id: string;
  category: BlogCategory;
  category_id: string;
  created_at: number;
  updated_at: number;
}

export interface BlogPostPayload {
  title: string;
  slug: string;
  read_time: number;
  cover_image: string;
  preview_text: string;
  body: string;
  author: string;
  category: string;
}

export type BLOG_POST_STATUS =
  | 'FETCH_POST_LOADING'
  | 'FETCH_POST_SUCCESS'
  | 'FETCH_POST_FAIL'
  | 'CREATE_POST_LOADING'
  | 'CREATE_POST_SUCCESS'
  | 'CREATE_POST_FAIL'
  | 'UPDATE_POST_LOADING'
  | 'UPDATE_POST_SUCCESS'
  | 'UPDATE_POST_FAIL'
  | 'DELETE_POST_LOADING'
  | 'DELETE_POST_SUCCESS'
  | 'DELETE_POST_FAIL';

export type BLOG_CATEGORY_STATUS =
  | 'FETCH_CATEGORY_LOADING'
  | 'FETCH_CATEGORY_SUCCESS'
  | 'FETCH_CATEGORY_FAIL'
  | 'CREATE_CATEGORY_LOADING'
  | 'CREATE_CATEGORY_SUCCESS'
  | 'CREATE_CATEGORY_FAIL'
  | 'UPDATE_CATEGORY_LOADING'
  | 'UPDATE_CATEGORY_SUCCESS'
  | 'UPDATE_CATEGORY_FAIL'
  | 'DELETE_CATEGORY_LOADING'
  | 'DELETE_CATEGORY_SUCCESS'
  | 'DELETE_CATEGORY_FAIL';

export type BLOG_AUTHOR_STATUS =
  | 'FETCH_AUTHOR_LOADING'
  | 'FETCH_AUTHOR_SUCCESS'
  | 'FETCH_AUTHOR_FAIL'
  | 'CREATE_AUTHOR_LOADING'
  | 'CREATE_AUTHOR_SUCCESS'
  | 'CREATE_AUTHOR_FAIL'
  | 'UPDATE_AUTHOR_LOADING'
  | 'UPDATE_AUTHOR_SUCCESS'
  | 'UPDATE_AUTHOR_FAIL'
  | 'DELETE_AUTHOR_LOADING'
  | 'DELETE_AUTHOR_SUCCESS'
  | 'DELETE_AUTHOR_FAIL';
