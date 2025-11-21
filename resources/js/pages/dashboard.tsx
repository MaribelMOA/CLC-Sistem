"use client";

import { Head, Link } from "@inertiajs/react";
import { useMemo } from "react";
import Navbar from "@/components/Navbar";

interface DashboardProps {
  auth: {
    user: {
      name: string;
      role?: string | null;
    };
  };
}

interface DashboardStats {
  todayPatients: number;
  todaySurgeries: number;
  totalPatients: number;
  pendingConsultations: number;
  recentActivity: Array<{
    id: string;
    type: "consultation" | "surgery" | "patient";
    description: string;
    time: string;
    patient?: string;
  }>;
  upcomingConsultations: Array<{
    id: string;
    patientName: string;
    time: string;
    type: string;
  }>;
}

export default function Dashboard({ auth }: DashboardProps) {
  const user = auth.user;

  const role = (user.role ?? "ADMIN").toUpperCase();
  const isDoctor = role === "DOCTOR";
  const isReception = role === "RECEPTION";

  // Datos simulados del dashboard
  const stats: DashboardStats = useMemo(
    () => ({
      todayPatients: 12,
      todaySurgeries: 3,
      totalPatients: 847,
      pendingConsultations: 5,
      recentActivity: [
        {
          id: "1",
          type: "consultation",
          description: "Nueva consulta registrada",
          time: "10:30 AM",
          patient: "María González",
        },
        {
          id: "2",
          type: "surgery",
          description: "Cirugía de catarata completada",
          time: "09:15 AM",
          patient: "Carlos Ruiz",
        },
        {
          id: "3",
          type: "patient",
          description: "Nuevo paciente registrado",
          time: "08:45 AM",
          patient: "Ana López",
        },
      ],
      upcomingConsultations: [
        {
          id: "1",
          patientName: "Roberto Martínez",
          time: "11:30 AM",
          type: "Consulta de seguimiento",
        },
        {
          id: "2",
          patientName: "Elena Vásquez",
          time: "12:00 PM",
          type: "Primera consulta",
        },
        {
          id: "3",
          patientName: "José Hernández",
          time: "12:30 PM",
          type: "Control postoperatorio",
        },
      ],
    }),
    []
  );

  const todayFormatted = useMemo(
    () =>
      new Date().toLocaleDateString("es-MX", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    []
  );

  const handleStartConsultation = (patientId: string) => {
    console.log("Iniciar consulta para paciente", patientId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head title="Dashboard" />
      {/* navbar */}
      <Navbar />

      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">
                Bienvenido, {user.name} — {todayFormatted}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tarjetas de stats principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">
                  {stats.todayPatients}
                </p>
                <p className="text-gray-600">Pacientes Hoy</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">
                  {stats.todaySurgeries}
                </p>
                <p className="text-gray-600">Cirugías Hoy</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">
                  {stats.pendingConsultations}
                </p>
                <p className="text-gray-600">Consultas Pendientes</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">
                  {stats.totalPatients}
                </p>
                <p className="text-gray-600">Total Pacientes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {isDoctor && (
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Siguientes Consultas
                </h2>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Ver todas
                </Link>
              </div>

              <div className="space-y-4">
                {stats.upcomingConsultations.map((consultation) => (
                  <div
                    key={consultation.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-sm">
                          {consultation.patientName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {consultation.patientName}
                        </p>
                        <p className="text-sm text-gray-600">
                          {consultation.type}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">
                        {consultation.time}
                      </p>
                      <button
                        type="button"
                        onClick={() =>
                          handleStartConsultation(consultation.id)
                        }
                        className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Iniciar consulta
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actividad reciente */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Actividad Reciente
              </h2>
              <Link
                href="#"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Ver auditoría
              </Link>
            </div>

            <div className="space-y-4">
              {stats.recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === "consultation"
                        ? "bg-blue-100"
                        : activity.type === "surgery"
                        ? "bg-green-100"
                        : "bg-gray-100"
                    }`}
                  >
                    {activity.type === "consultation" && (
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    )}
                    {activity.type === "surgery" && (
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                    {activity.type === "patient" && (
                      <svg
                        className="w-4 h-4 text-gray-600"
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
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      {activity.description}
                    </p>
                    {activity.patient && (
                      <p className="text-sm text-gray-600">
                        {activity.patient}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        {/* Accesos rápidos*/}
        {/* No doctor*/}
        {!isDoctor && (
        <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Accesos Rápidos
            </h2>

            <div className="grid grid-cols-2 gap-4">
            {/* Pacientes */}
            <Link
                href="#"
                className="p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors text-center"
            >
                <div className="w-8 h-8 bg-blue-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
                </div>
                <p className="text-sm font-medium text-gray-900">Pacientes</p>
            </Link>

            {/* recepcion */}
            {isReception && (
                <Link
                href="#"
                className="p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors text-center"
                >
                <div className="w-8 h-8 bg-green-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                    </svg>
                </div>
                <p className="text-sm font-medium text-gray-900">
                    Nueva Consulta
                </p>
                </Link>
            )}

            {/* Catálogo */}
            <Link
                href="#"
                className="p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors text-center"
            >
                <div className="w-8 h-8 bg-purple-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                </svg>
                </div>
                <p className="text-sm font-medium text-gray-900">
                Catálogo
                </p>
            </Link>

            {/* Cirugías */}
            <Link
                href="#"
                className="p-4 bg-orange-50 hover:bg-orange-100 rounded-xl transition-colors text-center"
            >
                <div className="w-8 h-8 bg-orange-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <svg
                    className="w-4 h-4 text-white"
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
                <p className="text-sm font-medium text-gray-900">
                Cirugías
                </p>
            </Link>

            {/* Auditoría */}
            <Link
                href="#"
                className="p-4 bg-red-50 hover:bg-red-100 rounded-xl transition-colors text-center"
            >
                <div className="w-8 h-8 bg-red-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                </svg>
                </div>
                <p className="text-sm font-medium text-gray-900">
                Auditoría
                </p>
            </Link>
            </div>
        </div>
        )}
        </div>
      </div>
    </div>
  );
}
