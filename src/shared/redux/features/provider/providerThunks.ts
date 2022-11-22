import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CreateProvider, UpdateProvider } from '../../../types/provider';

export const fetchProvider = createAsyncThunk(
  'provider/fetchProvider',
  async () => {
    const result = await axios.get('/api/admin/provider');
    return result.data;
  }
);

export const createProvider = createAsyncThunk(
  'provider/createProvider',
  async (data: CreateProvider) => {
    const result = await axios.post('/api/admin/provider', data);
    return result.data;
  }
);

export const editProvider = createAsyncThunk(
  'provider/editProvider',
  async (data: { provider_id: string; payload: UpdateProvider }) => {
    const result = await axios.patch(
      `/api/admin/provider/${data.provider_id}`,
      data.payload
    );
    return result.data;
  }
);

export const deleteProvider = createAsyncThunk(
  'provider/deleteprovider',
  async (provider_id: string) => {
    const result = await axios.delete(`/api/admin/provider/${provider_id}`);
    return result.data;
  }
);
