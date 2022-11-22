import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  CreateBlogCategory,
  UpdateBlogCategory,
} from '../../../types/blog/blog-category';

export const createBlogCategory = createAsyncThunk(
  'blog/createCategory',
  async (data: CreateBlogCategory) => {
    const res = await axios.post('/api/admin/blog/category', data);
    return res.data;
  }
);

export const fetchBlogCategories = createAsyncThunk(
  'blog/fetchCategories',
  async () => {
    const res = await axios.get('/api/admin/blog/category');
    return res.data;
  }
);

export const updateBlogCategory = createAsyncThunk(
  'blog/updateCategory',
  async (data: { body: UpdateBlogCategory; id: string }) => {
    const res = await axios.patch(
      `/api/admin/blog/category/${data.id}`,
      data.body
    );
    return res.data;
  }
);

export const deleteBlogCategory = createAsyncThunk(
  'blog/deleteCategory',
  async (id: string) => {
    const res = await axios.delete(`/api/admin/blog/category/${id}`);
    return res.data;
  }
);
