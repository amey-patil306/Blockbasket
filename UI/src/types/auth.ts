export type UserRole = 'farmer' | 'distributor' | 'retailer' | 'admin';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  email?: string;
  createdAt?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}