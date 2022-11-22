import { configureStore } from '@reduxjs/toolkit';
import blogSlice from './features/blog/blogSlice';
import categorySlice from './features/category/categorySlice';
import courseSlice from './features/courses/courseSlice';
import providerSlice from './features/provider/providerSlice';

export const store = configureStore({
  reducer: {
    category: categorySlice,
    provider: providerSlice,
    course: courseSlice,
    blog: blogSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
