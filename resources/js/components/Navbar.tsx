"use client";

import { Link, router, usePage } from "@inertiajs/react";

type UserRole = "ADMIN" | "DOCTOR" | "RECEPTION" | string;

interface PageProps {
  auth: {
    user: {
      name: string;
      email: string;
      role?: UserRole;
    } | null;
  };
  [key: string]: unknown;
}

const roleLabel: Record<UserRole, string> = {
  ADMIN: "Administrador",
  DOCTOR: "Médico",
  RECEPTION: "Recepción",
};

export default function Navbar() {
  const { auth } = usePage<PageProps>().props;
  const user = auth?.user;

  if (!user) return null;

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    router.post("/logout");
  };

  // RUTAS
  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: "🏠" },
    { name: "Pacientes", href: "#", icon: "👥" },
    { name: "Catálogo", href: "#", icon: "⚕️" },
    { name: "Cirugías", href: "#", icon: "🔬" },
    { name: "Auditoría", href: "#", icon: "🔍" },
    { name: "Sistema", href: "#", icon: "⚙️" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* logo */}
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  Sistema Clínico
                </h1>
                <p className="text-xs text-gray-500">
                  Clínica CLC · Oftalmología
                </p>
              </div>
            </Link>
          </div>

          {/* navegación */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>

          {/* Menú usuario */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-gray-900">
                {user.name}
              </p>
              <p className="text-xs text-gray-500">
                {roleLabel[user.role ?? ""] ?? "Usuario"}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <Link
                href="#"
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                title="Mi Perfil"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Link>

              <button
                onClick={handleLogout}
                className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Cerrar sesión"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navegación móvil */}
      <div className="md:hidden border-t bg-gray-50">
        <div className="px-4 py-2">
          <div className="flex space-x-1 overflow-x-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex-shrink-0 px-3 py-2 rounded-lg text-xs font-medium transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <span className="mr-1">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
