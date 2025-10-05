/** Información de usuario retornada por el endpoint "/users" */
export interface User {
  id: number | string;
  full_name: string;
  username: string;
  email: string;
  roles: string[];
}