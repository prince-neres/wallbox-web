export interface User {
  loading: boolean;
  userInfo?: {
    username: string;
    email: string;
    token: string;
  };
  error?: string;
}
