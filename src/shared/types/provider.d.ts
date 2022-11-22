export interface Provider {
  id: string;
  title: string;
  slug: string;
  ceo_name: string;
  address: string;
  state: string;
  city: string;
  phone: string;
  logo: string;
  about: string;
  photo_assets: string[];
  video_assets: string[];
  website_url?: string;
  telegram_url?: string;
  instagram_url?: string;
  facebook_url?: string;
  created_at: Date;
  updated_at: Date;
  // Course        Course[];
}

export interface CreateProvider {
  title: string;
  slug: string;
  ceo_name: string;
  address: string;
  state: string;
  city: string;
  phone: string;
  logo: string;
  about: string;
  photo_assets: string[];
  video_assets: string[];
  website_url?: string;
  telegram_url?: string;
  instagram_url?: string;
  facebook_url?: string;
}

export type UpdateProvider = Partial<CreateProvider>;
