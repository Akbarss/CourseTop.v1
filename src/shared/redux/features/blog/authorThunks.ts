import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CreateBlogAuthor, UpdateBlogAuthor } from '../../../types/blog/author';

export const createAuthor = createAsyncThunk(
  'blog/createAuthor',
  async (data: CreateBlogAuthor) => {
    const res = await axios.post('/api/admin/blog/author', data);
    return res.data;
  }
);

export const fetchAuthors = createAsyncThunk('blog/fetchAuthors', async () => {
  const res = await axios.get('/api/admin/blog/author');
  return res.data;
});

export const updateAuthor = createAsyncThunk(
  'blog/updateAuthor',
  async (data: { body: UpdateBlogAuthor; id: string }) => {
    const res = await axios.patch(
      `/api/admin/blog/author/${data.id}`,
      data.body
    );
    return res.data;
  }
);

export const deleteAuthor = createAsyncThunk(
  'blog/deleteAuthor',
  async (id: string) => {
    const res = await axios.delete(`/api/admin/blog/author/${id}`);
    return res.data;
  }
);
