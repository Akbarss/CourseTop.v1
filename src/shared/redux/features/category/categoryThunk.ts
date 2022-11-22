import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  CreateCategory,
  CreateSubcategory,
  UpdateSubcategory,
} from '../../../types/category';

// ============================ Category ============================
export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async () => {
    const result = await axios.get('/api/admin/category');
    return result.data;
  }
);

export const createCategory = createAsyncThunk(
  'category/createCategory',
  async (data: CreateCategory) => {
    const result = await axios.post('/api/admin/category', data);
    return result.data;
  }
);

export const editCategory = createAsyncThunk(
  'category/editCategory',
  async (data: { category_id: string; payload: CreateCategory }) => {
    const result = await axios.patch(
      `/api/admin/category/${data.category_id}`,
      data.payload
    );
    return result.data;
  }
);

export const deleteCategory = createAsyncThunk(
  'category/deleteCategory',
  async (category_id: string) => {
    const result = await axios.delete(`/api/admin/category/${category_id}`);
    return result.data;
  }
);

// ============================ Subcategory ============================
export const fetchSubcategories = createAsyncThunk(
  'category/fetchSubcategories',
  async () => {
    const result = await axios.get('/api/admin/subcategory');
    return result.data;
  }
);

export const createSubcategory = createAsyncThunk(
  'category/createSubcategory',
  async (data: CreateSubcategory) => {
    const result = await axios.post('/api/admin/subcategory', data);
    return result.data;
  }
);

export const editSubcategory = createAsyncThunk(
  'category/editSubcategory',
  async (data: { subcategory_id: string; payload: UpdateSubcategory }) => {
    const result = await axios.patch(
      `/api/admin/subcategory/${data.subcategory_id}`,
      data.payload
    );
    return result.data;
  }
);

export const deleteSubcategory = createAsyncThunk(
  'category/deleteSubcategory',
  async (subcategory_id: string) => {
    const result = await axios.delete(
      `/api/admin/subcategory/${subcategory_id}`
    );
    return result.data;
  }
);
