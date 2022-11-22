import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { Course } from '../../../types/course';
import { StateStatus } from '../../../types/misc';
import { RootState } from '../../store';
import {
  createCourse,
  deleteCourse,
  editCourse,
  fetchCourses,
  fetchCoursesByProvider,
} from './courseThunk';

interface InitState {
  course: { data: Course[]; status: StateStatus; count: number };
  temp: { data: Course[]; status: StateStatus; count: number };
}

const initState: InitState = {
  course: { data: [], status: 'idle', count: 0 },
  temp: { data: [], status: 'idle', count: 0 },
};

const courseSlice = createSlice({
  name: 'course',
  initialState: initState,
  reducers: {
    clearData: (state) => {
      state.course.data = [];
      state.course.status = 'idle';
    },
    clearTemp: (state) => {
      state.temp.data = [];
      state.temp.status = 'idle';
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createCourse.pending, (state) => {
        state.course.status = 'loading';
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.course.status = 'success';
        state.course.data = [...state.course.data, action.payload.body];
        toast.success('Course created ✅');
      })
      .addCase(createCourse.rejected, (state) => {
        state.course.status === 'fail';
        toast.error('Something went wrong while creating course ❌');
      });

    builder
      .addCase(fetchCourses.pending, (state) => {
        state.course.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.course.status = 'success';
        state.course.data = action.payload.body;
      })
      .addCase(fetchCourses.rejected, (state) => {
        state.course.status === 'fail';
        toast.error('Something went wrong while creating course ❌');
      });

    builder
      .addCase(editCourse.pending, (state) => {
        state.course.status = 'loading';
      })
      .addCase(editCourse.fulfilled, (state, action) => {
        state.course.status = 'success';
        state.course.data = state.course.data.map((el) => {
          if (el.id === action.payload.body.id) {
            return (el = action.payload.body);
          }
          return el;
        });
        toast.success('course edited ✅');
      })
      .addCase(editCourse.rejected, (state) => {
        state.course.status === 'fail';
        toast.error('Something went wrong while editing course ❌');
      });

    builder
      .addCase(deleteCourse.pending, (state) => {
        state.course.status = 'loading';
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.course.status = 'success';
        state.course.data = state.course.data.filter(
          (el) => el.id !== action.payload.body
        );
        state.temp.data = state.temp.data.filter(
          (el) => el.id !== action.payload.body
        );
        toast.success('Course deleted ✅');
      })
      .addCase(deleteCourse.rejected, (state) => {
        state.course.status === 'fail';
        toast.error('Something went wrong while deleting course ❌');
      });

    builder
      .addCase(fetchCoursesByProvider.pending, (state) => {
        state.course.status = 'loading';
      })
      .addCase(fetchCoursesByProvider.fulfilled, (state, action) => {
        state.course.status = 'success';
        state.temp.data = [...state.temp.data, ...action.payload.body];
      })
      .addCase(fetchCoursesByProvider.rejected, (state) => {
        state.course.status === 'fail';
        toast.error('Something went wrong while fetching courses ❌');
      });
  },
});

export default courseSlice.reducer;

export const { clearData, clearTemp } = courseSlice.actions;

export const selectCourses = (state: RootState) => state.course.course;
export const selectTempCourses = (state: RootState) => state.course.temp;
