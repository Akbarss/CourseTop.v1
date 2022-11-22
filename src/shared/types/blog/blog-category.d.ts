export interface BlogCategory {
  id: string;
  title_uz: string;
  title_ru: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
}

export interface CreateBlogCategory {
  title_uz: string;
  title_ru: string;
  slug: string;
}

export type UpdateBlogCategory = Partial<CreateBlogCategory>;
