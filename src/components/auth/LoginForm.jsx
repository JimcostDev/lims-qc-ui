import { useState } from 'react';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí irá la lógica de consumo del API
    console.log('Login data:', { ...formData, rememberMe });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <svg 
                  className="w-5 h-5 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" 
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-semibold text-gray-900">
                LIMS-QC
              </h1>
            </div>
            <p className="text-sm text-gray-500">
              Sistema de Gestión de Información de Laboratorio
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="usuario@laboratorio.com"
                required
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label 
                  htmlFor="password" 
                  className="block text-sm font-medium text-gray-700"
                >
                  Contraseña
                </label>
                <a 
                  href="/forgot-password" 
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="••••••••"
                required
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <label 
                htmlFor="rememberMe" 
                className="ml-2 text-sm text-gray-700"
              >
                Recordar sesión
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-medium mt-6"
            >
              Iniciar sesión
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                ¿Nuevo en el sistema?
              </span>
            </div>
          </div>

          {/* Register Link */}
          <a
            href="/register"
            className="block w-full text-center px-6 py-2.5 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition font-medium"
          >
            Crear una cuenta
          </a>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            Sistema certificado bajo ISO 15189:2022
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Control documental y trazabilidad de muestras
          </p>
        </div>
      </div>
    </div>
  );
}