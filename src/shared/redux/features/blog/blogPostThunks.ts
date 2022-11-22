import { createAsyncThunk } from '@reduxjs/toolkit';
import { BlogPost, BlogPostPayload } from '@/shared/types/blog/blog';
import { request } from '../../../utils/Axios';

export const createBlogPost = createAsyncThunk(
  'blog/createBlogPost',
  async (data: BlogPostPayload) => {
    const post = await request.post('/api/admin/blog/post', data);
    return post.data;
  }
);

export const fetchBlogPosts = createAsyncThunk(
  'blog/fetchBlogPost',
  async (payload: {
    skip: number;
    limit: number;
  }): Promise<{ message: string; body: BlogPost[]; count: number }> => {
    const post = await request.get(
      `/api/admin/blog/post?limit=${payload.limit}&skip=${payload.skip}`
    );
    return post.data;
  }
);

export const fetchBlogPostBySlug = createAsyncThunk(
  'blog/fetchBlogPostBySlug',
  async (payload: { slug: string }) => {
    const post = await request.get(`/api/admin/blog/post/${payload.slug}`);
    return post.data;
  }
);

export const updateBlogPost = createAsyncThunk(
  'blog/updateBlogPost',
  async (payload: { data: BlogPostPayload; id: string }) => {
    const post = await request.patch(
      `/api/admin/blog/post/${payload.id}`,
      payload.data
    );
    return post.data;
  }
);

export const deleteBlogPost = createAsyncThunk(
  'blog/deleteBlogPost',
  async (payload: { id: string }) => {
    const post = await request.delete(`/api/admin/post/${payload.id}`);
    return post.data;
  }
);
