export interface BlogAuthor {
  id: string;
  name: string;
  second_name: string;
  avatar: string;
  social_instagram?: string;
  social_facebook?: string;
  social_linkedin?: string;
  social_twitter?: string;
  created_at: Date;
  updated_at: Date;
}

export interface CreateBlogAuthor {
  name: string;
  second_name: string;
  avatar: string;
  social_instagram?: string;
  social_facebook?: string;
  social_linkedin?: string;
  social_twitter?: string;
}

export type UpdateBlogAuthor = Partial<CreateBlogAuthor>;
