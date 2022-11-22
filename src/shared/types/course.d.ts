import { Category, Subcategory } from './category';
import { Provider } from './provider';

export enum COURSE_TYPE {
  ONLINE = 'ONLINE',
  OFLINE = 'OFLINE',
  BOTH = 'BOTH',
}

export enum COURSE_LEVEL {
  BEGINNER = 'BEGINNER',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED',
}

export enum TEACH_LANG {
  RU = 'RU',
  UZ = 'UZ',
  ENG = 'ENG',
  TAJ = 'TAJ',
}

export enum DAYS {
  MON = 'MON',
  TUE = 'TUE',
  WED = 'WED',
  THU = 'THU',
  FRI = 'FRI',
  SAT = 'SAT',
  SUN = 'SUN',
}

export enum PRICE_INFO {
  YEAR = 'YEAR',
  MONTH = 'MONTH',
  HOUR = 'HOUR',
  FULL = 'FULL',
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  cover_image?: string;
  provider: Provider;
  provider_id: string;
  course_type: COURSE_TYPE;
  category: Category;
  category_id: string;
  subcategory: Subcategory;
  subcategory_id: string;
  level: COURSE_LEVEL;
  duration: number;
  short_description: string;
  long_description: string;
  price: number;
  price_info: PRICE_INFO;
  num_seats?: number;
  start_date?: string;
  teaching_lang: TEACH_LANG;
  schedule?: Array<{ day: DAYS; time: string }>;
  created_at: Date;
  updated_at: Date;
  state: string;
  city: string;
  address: string;
  lat?: number;
  lon?: number;
}

export interface CreateCourse {
  title: string;
  slug: string;
  cover_image?: string;
  provider_id: string;
  course_type: COURSE_TYPE;
  subcategory_id: string;
  category_id: string;
  level: COURSE_LEVEL;
  price_info: PRICE_INFO;
  duration: number;
  short_description: string;
  long_description: string;
  price: number;
  num_seats?: number;
  start_date?: string;
  teaching_lang: TEACH_LANG;
  schedule?: Array<{ day: DAYS; time: string }>;
  state: string;
  city: string;
  address: string;
  lat?: number;
  lon?: number;
}

export type UpdateCourse = Partial<CreateCourse>;
