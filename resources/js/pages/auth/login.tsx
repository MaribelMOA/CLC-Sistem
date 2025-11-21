"use client";

import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    post("/login", {
      onError: () => {
        setErrorMessage("Credenciales inválidas");
      },
    });
  };

  const demoUsers = [
    { email: "superadmin@clinica.com", password: "super123", name: "Super Administrador" },
    { email: "admin@clinica.com", password: "admin123", name: "Administrador" },
    { email: "maria.gonzalez@clinica.com", password: "medic123", name: "Dra. María González" },
    { email: "ana.admin@clinica.com", password: "staff123", name: "Ana Administrativa" },
  ];

  const handleDemoLogin = (user: (typeof demoUsers)[0]) => {
    setData("email", user.email);
    setData("password", user.password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-4">
      <Head title="Iniciar sesión" />

      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sistema Clínico</h1>
          <p className="text-gray-600 text-lg">Oftalmología Digital</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Correo Electrónico</label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                  className="w-full px-4 py-3 text-lg rounded-xl bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="usuario@clinica.com"
                required
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Contraseña</label>
              <input
                type="password"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
                className="w-full px-4 py-3 text-lg rounded-xl bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="••••••••"
                required
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Error general */}
            {errorMessage && (
              <div className="bg-red-50 border border-red-300 text-red-700 p-3 rounded-lg text-lg">
                {errorMessage}
              </div>
            )}

            {/* Botón */}
            <button
              type="submit"
              disabled={processing}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold py-4 px-6 rounded-xl text-lg transition"
            >
              {processing ? "Iniciando..." : "Iniciar Sesión"}
            </button>
          </form>

          {/* Demo users */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-600 mb-4 text-lg">Usuarios Demo:</p>
            <div className="grid grid-cols-1 gap-3">
              {demoUsers.map((user, index) => (
                <button
                  key={index}
                  onClick={() => handleDemoLogin(user)}
                  className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl text-left"
                >
                  <div className="font-medium text-gray-900">{user.name}</div>
                  <div className="text-sm text-gray-600">{user.email}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">🔒 Prototipo Simulado - Datos de demostración únicamente</p>
        </div>
      </div>
    </div>
  );
}
