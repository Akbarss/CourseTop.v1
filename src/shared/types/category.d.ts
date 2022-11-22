export interface Category {
  id: string;
  title: string;
  slug: string;
  icon: string;
  created_at: Date;
  updated_at: Date;
}

export interface CategoryCont {
  map(arg0: (i: any) => JSX.Element): import('react').ReactNode;
  id: string;
  title: string;
  slug: string;
  icon: string;
  created_at: Date;
  updated_at: Date;
  Subjects: {
    id: string;
    title: string;
    slug: string;
    description: string;
    category_id: string;
    created_at: Date;
    updated_at: Date;
  };
}

export interface CreateCategory {
  title: string;
  icon: string;
  slug: string;
}

export type UpdateCategory = Partial<CreateCategory>;

export interface Subcategory {
  id: string;
  title: string;
  slug: string;
  description: string;
  category_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface CreateSubcategory {
  title: string;
  description: string;
  category_id: string;
  slug: string;
}

export type UpdateSubcategory = Partial<CreateSubcategory>;
