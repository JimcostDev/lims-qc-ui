/** Información de usuario retornada por el endpoint "/users" */
export interface User {
  id: number | string;
  full_name: string;
  username: string;
  email: string;
  role: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}