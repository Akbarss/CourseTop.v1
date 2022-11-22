import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Course, CreateCourse, UpdateCourse } from '../../../types/course';

export const fetchCourses = createAsyncThunk(
  'course/fetchCourses',
  async (): Promise<{ body: Course[]; count: number }> => {
    const result = await axios.get('/api/admin/course');
    return result.data;
  }
);

export const createCourse = createAsyncThunk(
  'course/createCourse',
  async (data: CreateCourse): Promise<{ body: Course }> => {
    const result = await axios.post('/api/admin/course', data);
    return result.data;
  }
);

export const editCourse = createAsyncThunk(
  'course/editCourse',
  async (data: {
    course_id: string;
    payload: UpdateCourse;
  }): Promise<{ body: Course }> => {
    const result = await axios.patch(
      `/api/admin/course/${data.course_id}`,
      data.payload
    );
    return result.data;
  }
);

export const deleteCourse = createAsyncThunk(
  'course/deleteCourse',
  async (course_id: string): Promise<{ body: string }> => {
    const result = await axios.delete(`/api/admin/course/${course_id}`);
    return result.data;
  }
);

export const fetchCoursesByProvider = createAsyncThunk(
  'course/fetchCoursesByProvider',
  async (query: {
    provider_slug: string;
    skip: number;
    limit: number;
  }): Promise<{ body: Course[]; count: number }> => {
    const result = await axios.get(
      `/api/admin/provider/course/${query.provider_slug}?skip=${
        query.skip || 0
      }&limit=${query.limit || 20}`
    );

    return result.data;
  }
);
