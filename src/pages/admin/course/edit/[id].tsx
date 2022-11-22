import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CourseForm from '../../../../admin/components/forms/CourseForm';
import AdminLayout from '../../../../admin/layout/AdminLayout';

import { Course } from '../../../../shared/types/course';

const Index = () => {
  const router = useRouter();
  const [course, setCourse] = useState<Course | null>();
  const [title, setTitle] = useState('');

  const fetchProviderBySlug = async (id: string) => {
    const { data } = await axios.get(`/api/admin/course/${id}`);
    setCourse(data.body);
    setTitle(`Admin - Provider - ${data?.body?.title}`);
  };

  useEffect(() => {
    if (router.query.id) {
      fetchProviderBySlug(router.query.id as string);
    }
  }, [router.query.id]);

  console.log(course);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <AdminLayout>
        {course ? <CourseForm editMode={true} {...course} /> : ''}
      </AdminLayout>
    </>
  );
};

export default Index;
