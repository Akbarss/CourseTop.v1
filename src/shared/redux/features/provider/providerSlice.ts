import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { StateStatus } from '../../../types/misc';
import { Provider } from '../../../types/provider';
import { RootState } from '../../store';
import {
  createProvider,
  deleteProvider,
  editProvider,
  fetchProvider,
} from './providerThunks';

interface InitState {
  provider: { data: Provider[]; status: StateStatus };
}

const initState: InitState = {
  provider: { data: [], status: 'idle' },
};

const providerSlice = createSlice({
  name: 'provider',
  initialState: initState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createProvider.pending, (state) => {
        state.provider.status = 'loading';
      })
      .addCase(createProvider.fulfilled, (state, action) => {
        state.provider.status = 'success';
        state.provider.data = [...state.provider.data, action.payload.body];
        toast.success('Provider created ✅');
      })
      .addCase(createProvider.rejected, (state) => {
        state.provider.status === 'fail';
        toast.error('Something went wrong while creating provider ❌');
      });

    builder
      .addCase(fetchProvider.pending, (state) => {
        state.provider.status = 'loading';
      })
      .addCase(fetchProvider.fulfilled, (state, action) => {
        state.provider.status = 'success';
        state.provider.data = action.payload.body;
      })
      .addCase(fetchProvider.rejected, (state) => {
        state.provider.status === 'fail';
        toast.error('Something went wrong while creating provider ❌');
      });

    builder
      .addCase(editProvider.pending, (state) => {
        state.provider.status = 'loading';
      })
      .addCase(editProvider.fulfilled, (state, action) => {
        state.provider.status = 'success';
        state.provider.data = state.provider.data.map((el) => {
          if (el.id === action.payload.body.id) {
            return (el = action.payload.body);
          }
          return el;
        });
        toast.success('Provider edited ✅');
      })
      .addCase(editProvider.rejected, (state) => {
        state.provider.status === 'fail';
        toast.error('Something went wrong while editing provider ❌');
      });

    builder
      .addCase(deleteProvider.pending, (state) => {
        state.provider.status = 'loading';
      })
      .addCase(deleteProvider.fulfilled, (state, action) => {
        state.provider.status = 'success';
        state.provider.data = state.provider.data.filter(
          (el) => el.id !== action.payload.body
        );
        toast.success('Provider deleted ✅');
      })
      .addCase(deleteProvider.rejected, (state) => {
        state.provider.status === 'fail';
        toast.error('Something went wrong while deleting provider ❌');
      });
  },
});

export default providerSlice.reducer;

export const selectProvider = (state: RootState) => state.provider.provider;
