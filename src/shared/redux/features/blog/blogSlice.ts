import { BLOG_POST_STATUS } from './../../../types/blog/blog.d';
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { BlogAuthor } from '../../../types/blog/author';
import { BlogCategory } from '../../../types/blog/blog-category';
import { StateStatus } from '../../../types/misc';
import { RootState } from '../../store';
import { BlogPost } from '../../../types/blog/blog';
import {
  createAuthor,
  deleteAuthor,
  fetchAuthors,
  updateAuthor,
} from './authorThunks';
import {
  createBlogCategory,
  deleteBlogCategory,
  fetchBlogCategories,
  updateBlogCategory,
} from './categoryThunks';
import {
  createBlogPost,
  fetchBlogPosts,
  updateBlogPost,
  deleteBlogPost,
} from './blogPostThunks';

interface InitState {
  author: { data: BlogAuthor[]; status: StateStatus };
  category: { data: BlogCategory[]; status: StateStatus };
  post: { data: BlogPost[]; status: StateStatus; count: number };
  postStatus: 'idle' | BLOG_POST_STATUS;
}

const initState: InitState = {
  author: { data: [], status: 'idle' },
  category: { data: [], status: 'idle' },
  post: { data: [], status: 'idle', count: 0 },
  postStatus: 'idle',
};

const blogSlice = createSlice({
  name: 'blog',
  initialState: initState,
  reducers: {},
  extraReducers(builder) {
    /**
     * Author CRUD reducers
     */
    builder
      .addCase(createAuthor.pending, (state) => {
        state.author.status = 'loading';
      })
      .addCase(createAuthor.fulfilled, (state, action) => {
        state.author.data = [...state.author.data, action.payload.body];
        state.author.status = 'success';
        toast.success('Author created ✅');
      })
      .addCase(createAuthor.rejected, (state) => {
        state.author.status = 'fail';
        toast.error('Something went wrong ❌');
      });

    builder
      .addCase(fetchAuthors.pending, (state) => {
        state.author.status = 'loading';
      })
      .addCase(fetchAuthors.fulfilled, (state, action) => {
        state.author.data = action.payload.body;
        state.author.status = 'success';
      })
      .addCase(fetchAuthors.rejected, (state) => {
        state.author.status = 'fail';
        toast.error('Something went wrong ❌');
      });

    builder
      .addCase(updateAuthor.pending, (state) => {
        state.author.status = 'loading';
      })
      .addCase(updateAuthor.fulfilled, (state, action) => {
        state.author.data = state.author.data.map((author) => {
          if (author.id === action.payload.body.id) {
            return (author = action.payload.body);
          }
          return author;
        });
        toast.success('Author updated ✅');

        state.author.status = 'success';
      })
      .addCase(updateAuthor.rejected, (state) => {
        state.author.status = 'fail';
        toast.error('Something went wrong ❌');
      });

    builder
      .addCase(deleteAuthor.pending, (state) => {
        state.author.status = 'loading';
      })
      .addCase(deleteAuthor.fulfilled, (state, action) => {
        state.author.data = state.author.data.filter(
          (author) => author.id !== action.payload.body
        );
        toast.success('Author deleted ✅');

        state.author.status = 'success';
      })
      .addCase(deleteAuthor.rejected, (state) => {
        state.author.status = 'fail';
        toast.error('Something went wrong ❌');
      });

    // ====================================

    /**
     * Category CRUD reducers
     */
    builder
      .addCase(createBlogCategory.pending, (state) => {
        state.category.status = 'loading';
      })
      .addCase(createBlogCategory.fulfilled, (state, action) => {
        state.category.data = [...state.category.data, action.payload.body];
        state.category.status = 'success';
        toast.success('Category created ✅');
      })
      .addCase(createBlogCategory.rejected, (state) => {
        state.category.status = 'fail';
        toast.error('Something went wrong ❌');
      });

    builder
      .addCase(fetchBlogCategories.pending, (state) => {
        state.category.status = 'loading';
      })
      .addCase(fetchBlogCategories.fulfilled, (state, action) => {
        state.category.data = action.payload.body;
        state.category.status = 'success';
      })
      .addCase(fetchBlogCategories.rejected, (state) => {
        state.category.status = 'fail';
        toast.error('Something went wrong ❌');
      });

    builder
      .addCase(updateBlogCategory.pending, (state) => {
        state.category.status = 'loading';
      })
      .addCase(updateBlogCategory.fulfilled, (state, action) => {
        state.category.data = state.category.data.map((category) => {
          if (category.id === action.payload.body.id) {
            return (category = action.payload.body);
          }
          return category;
        });
        toast.success('Category updated ✅');

        state.category.status = 'success';
      })
      .addCase(updateBlogCategory.rejected, (state) => {
        state.category.status = 'fail';
        toast.error('Something went wrong ❌');
      });

    builder
      .addCase(deleteBlogCategory.pending, (state) => {
        state.category.status = 'loading';
      })
      .addCase(deleteBlogCategory.fulfilled, (state, action) => {
        state.category.data = state.category.data.filter(
          (category) => category.id !== action.payload.body
        );
        toast.success('Category deleted ✅');

        state.category.status = 'success';
      })
      .addCase(deleteBlogCategory.rejected, (state) => {
        state.category.status = 'fail';
        toast.error('Something went wrong ❌');
      });

    // ------------------- POST --------------------

    builder
      .addCase(createBlogPost.pending, (state) => {
        state.postStatus = 'CREATE_POST_LOADING';
      })
      .addCase(createBlogPost.fulfilled, (state, action) => {
        state.postStatus = 'CREATE_POST_SUCCESS';
        state.post.data = [...state.post.data, action.payload.body];
        toast.success('Blog post created ✅');
      })
      .addCase(createBlogPost.rejected, (state) => {
        state.postStatus = 'CREATE_POST_FAIL';
        toast.error('Something went wrong while creating blog post ❌');
      });
    builder
      .addCase(fetchBlogPosts.pending, (state) => {
        state.postStatus = 'FETCH_POST_LOADING';
      })
      .addCase(fetchBlogPosts.fulfilled, (state, action) => {
        state.postStatus = 'FETCH_POST_SUCCESS';
        state.post.data = [...state.post.data, ...action.payload.body];
        state.post.count = action.payload.count;
      })
      .addCase(fetchBlogPosts.rejected, (state) => {
        state.postStatus = 'FETCH_POST_FAIL';
        toast.error('Something went wrong while loading blog posts ❌');
      });
    builder
      .addCase(updateBlogPost.pending, (state) => {
        state.postStatus = 'UPDATE_POST_LOADING';
      })
      .addCase(updateBlogPost.fulfilled, (state, action) => {
        state.postStatus = 'UPDATE_POST_SUCCESS';
        state.post.data = state.post.data.map((p) => {
          if (p.id === action.payload.body._id) {
            return (p = action.payload.body);
          }
          return p;
        });
        toast.success('Blog post updated ✅');
      })
      .addCase(updateBlogPost.rejected, (state) => {
        state.postStatus = 'UPDATE_POST_FAIL';
        toast.error('Something went wrong while updating blog post ❌');
      });
    builder
      .addCase(deleteBlogPost.pending, (state) => {
        state.postStatus = 'DELETE_POST_LOADING';
      })
      .addCase(deleteBlogPost.fulfilled, (state, action) => {
        state.postStatus = 'DELETE_POST_SUCCESS';
        state.post.data = state.post.data.filter(
          (p) => p.id !== action.payload.body
        );
        toast.success('Blog post deleted ✅');
      })
      .addCase(deleteBlogPost.rejected, (state) => {
        state.postStatus = 'DELETE_POST_SUCCESS';
        toast.error('Something went wrong while deleting blog post ❌');
      });
    // ------------------- -------- --------------------
  },
});

export default blogSlice.reducer;

export const selectBlogAuthor = (state: RootState) => state.blog.author;
export const selectBlogCategory = (state: RootState) => state.blog.category;

export const selectBlogPosts = (state: RootState) => state.blog.post;
export const selectBlogPostStatus = (state: RootState) => state.blog.postStatus;
