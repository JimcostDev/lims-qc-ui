// Configuración de la API
const API_BASE_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:8000/api/v1';

interface RegisterData {
  email: string;
  username: string;
  full_name: string;
  password: string;
  confirm_password: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface AuthResponse {
  access_token: string;
  token_type: string;
}

interface ApiError {
  detail: string | { msg: string; type: string }[];
}

/**
 * Realiza peticiones a la API
 */
async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const config: RequestInit = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw {
        status: response.status,
        message: data.detail || 'Error en la petición',
        data,
      };
    }

    return data;
  } catch (error: any) {
    // Si el error ya fue procesado por nosotros, lo lanzamos tal cual
    if (error.status) {
      throw error;
    }
    // Error de red u otro tipo
    throw {
      status: 0,
      message: 'Error de conexión. Verifica tu conexión a internet.',
      data: null,
    };
  }
}

/**
 * Registra un nuevo usuario
 */
export async function registerUser(userData: RegisterData): Promise<any> {
  return apiFetch('/users', {
    method: 'POST',
    body: JSON.stringify(userData),
  });
}

/**
 * Inicia sesión de usuario
 */
export async function loginUser(credentials: LoginData): Promise<AuthResponse> {
  // CORREGIDO: El backend espera 'username_or_email' no 'email'
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username_or_email: credentials.email,
      password: credentials.password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw {
      status: response.status,
      message: data.detail || 'Error al iniciar sesión',
      data,
    };
  }

  return data;
}

/**
 * Guarda el token en el almacenamiento del navegador
 */
export function saveToken(token: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('access_token', token);
  }
}

/**
 * Obtiene el token guardado
 */
export function getToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('access_token');
  }
  return null;
}

/**
 * Elimina el token guardado
 */
export function removeToken(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('access_token');
  }
}

/**
 * Obtiene la información del usuario actual
 */
export async function getCurrentUser(): Promise<any> {
  const token = getToken();

  if (!token) {
    throw {
      status: 401,
      message: 'No hay sesión activa',
      data: null,
    };
  }

  return apiFetch('/users/me', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
}

/**
 * Verifica si el usuario está autenticado
 */
export function isAuthenticated(): boolean {
  return getToken() !== null;
}