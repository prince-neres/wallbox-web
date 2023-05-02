export interface UserInfoType {
  id: number;
  username: string;
  email: string;
  token?: string;
  date_created: string;
  date_updated: string;
}

export interface WallpaperType {
  id: number;
  user?: UserInfoType;
  title: string;
  description: string;
  tags?: string[];
  filename: string;
  image: string;
  date_created: string;
  date_updated: string;
}

export interface UserType {
  loading: boolean;
  userInfo?: UserInfoType;
  error?: string;
}
