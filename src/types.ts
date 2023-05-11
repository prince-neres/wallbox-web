export interface UserInfoType {
  id: number;
  username: string;
  email: string;
  token?: string;
  image?: string;
  date_created: string;
  date_updated: string;
}

export interface WallpaperType {
  id?: number;
  user?: UserInfoType;
  title?: string;
  description?: string;
  tags?: string[];
  filename?: string;
  image?: string;
  date_created?: string;
  date_updated?: string;
  is_public?: boolean;
}

export interface UserType {
  loading: boolean;
  userInfo?: UserInfoType;
  error?: string;
}

export interface PaginatedResponse {
  wallpapers: WallpaperType[];
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  pages?: number;
}

export interface WallpapersType {
  response: PaginatedResponse;
  error?: string;
  loading?: boolean;
}
