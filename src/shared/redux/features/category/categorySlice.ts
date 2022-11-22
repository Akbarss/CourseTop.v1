import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { Category, Subcategory } from '../../../types/category';
import { StateStatus } from '../../../types/misc';
import { RootState } from '../../store';
import {
  createCategory,
  createSubcategory,
  deleteCategory,
  deleteSubcategory,
  editCategory,
  editSubcategory,
  fetchCategories,
  fetchSubcategories,
} from './categoryThunk';

interface InitState {
  category: { data: Category[]; status: StateStatus };
  subcategory: { data: Subcategory[]; status: StateStatus };
}

const initState: InitState = {
  category: { data: [], status: 'idle' },
  subcategory: { data: [], status: 'idle' },
};

const categorySlice = createSlice({
  name: 'category',
  initialState: initState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.category.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.category.status = 'success';
        state.category.data = action.payload.body;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.category.status = 'fail';
        toast.error('Something went wrong while fetching categories ❌');
      });
    builder
      .addCase(createCategory.pending, (state) => {
        state.category.status = 'loading';
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.category.status = 'success';
        state.category.data = [...state.category.data, action.payload.body];
        toast.success('Category created ✅');
      })
      .addCase(createCategory.rejected, (state) => {
        state.category.status === 'fail';
        toast.error('Something went wrong while creating category ❌');
      });
    builder
      .addCase(editCategory.pending, (state) => {
        state.category.status = 'loading';
      })
      .addCase(editCategory.fulfilled, (state, action) => {
        state.category.status = 'success';
        state.category.data = state.category.data.map((category) => {
          if (category.id === action.payload.body.id) {
            return (category = action.payload.body);
          }
          return category;
        });
        toast.success('Category edited ✅');
      })
      .addCase(editCategory.rejected, (state) => {
        state.category.status = 'fail';
        toast.error('Something went wrong while editing category ❌');
      });
    builder
      .addCase(deleteCategory.pending, (state) => {
        state.category.status = 'loading';
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.category.status = 'success';
        state.category.data = state.category.data.filter(
          (category) => category.id !== action.payload.body
        );
        toast.success('Category deleted ✅');
      })
      .addCase(deleteCategory.rejected, (state) => {
        state.category.status = 'fail';
        toast.error('Something went wrong while deleting category ❌');
      });

    // ===================================Subcategory===================================
    builder
      .addCase(fetchSubcategories.pending, (state) => {
        state.subcategory.status = 'loading';
      })
      .addCase(fetchSubcategories.fulfilled, (state, action) => {
        state.subcategory.status = 'success';
        state.subcategory.data = action.payload.body;
      })
      .addCase(fetchSubcategories.rejected, (state) => {
        state.subcategory.status = 'fail';
        toast.error('Something went wrong while loading subcategories ❌');
      });

    builder
      .addCase(createSubcategory.pending, (state) => {
        state.subcategory.status = 'loading';
        toast.success('Subcategory created ✅');
      })
      .addCase(createSubcategory.fulfilled, (state, action) => {
        state.subcategory.status = 'success';
        state.subcategory.data = [
          ...state.subcategory.data,
          action.payload.body,
        ];
      })
      .addCase(createSubcategory.rejected, (state) => {
        state.subcategory.status = 'fail';
        toast.error('Something went wrong while creating subcategory ❌');
      });

    builder
      .addCase(editSubcategory.pending, (state) => {
        state.subcategory.status = 'loading';
        toast.success('Subcategory edited ✅');
      })
      .addCase(editSubcategory.fulfilled, (state, action) => {
        state.subcategory.status = 'success';
        state.subcategory.data = state.subcategory.data.map((el) => {
          if (el.id === action.payload.body.id) {
            return (el = action.payload.body);
          }
          return el;
        });
      })
      .addCase(editSubcategory.rejected, (state) => {
        state.subcategory.status = 'fail';
        toast.error('Something went wrong while editing subcategory ❌');
      });

    builder
      .addCase(deleteSubcategory.pending, (state) => {
        state.subcategory.status = 'loading';
        toast.success('Subcategory deleted ✅');
      })
      .addCase(deleteSubcategory.fulfilled, (state, action) => {
        state.subcategory.status = 'success';
        state.subcategory.data = state.subcategory.data.filter(
          (el) => el.id !== action.payload.body
        );
      })
      .addCase(deleteSubcategory.rejected, (state) => {
        state.subcategory.status = 'fail';
        toast.error('Something went wrong while deleting subcategory ❌');
      });
  },
});

export default categorySlice.reducer;

export const selectCategory = (state: RootState) => state.category.category;

export const selectSubcategory = (state: RootState) =>
  state.category.subcategory;
