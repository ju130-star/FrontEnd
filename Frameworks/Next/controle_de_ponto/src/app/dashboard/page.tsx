"use client";

import { useEffect, useState } from "react";

interface Relatorio {
  _id: string;
  nomeFuncionario: string;
  date: string;
  horasTrabalhadas: number;
  tipoRelatorio: string;
}

export default function DashboardPage() {
  const [relatorios, setRelatorios] = useState<Relatorio[]>([]);
  const [totalHoras, setTotalHoras] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRelatorios = async () => {
      try {
        const res = await fetch("/api/relatorios"); // sua API de relatórios
        const data = await res.json();
        setRelatorios(data);

        const total = data.reduce(
          (acc: number, rel: Relatorio) => acc + rel.horasTrabalhadas,
          0
        );
        setTotalHoras(total);
      } catch (error) {
        console.error("Erro ao buscar relatórios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatorios();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Menu lateral */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <a href="/dashboard" className="text-gray-700 hover:text-teal-400">
            Início
          </a>
          <a href="/dashboard/relatorios" className="text-gray-700 hover:text-teal-400">
            Relatórios
          </a>
          <a href="/dashboard/usuarios" className="text-gray-700 hover:text-teal-400">
            Usuários
          </a>
          <a href="/logout" className="text-red-500 hover:text-red-600 mt-auto">
            Sair
          </a>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Veja o relatorio</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Card de total de horas */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center justify-center">
            <h3 className="text-gray-500 mb-2">Total de Horas</h3>
            <p className="text-2xl font-bold">{totalHoras}</p>
          </div>

          {/* Card de total de relatórios */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center justify-center">
            <h3 className="text-gray-500 mb-2">Total de Relatórios</h3>
            <p className="text-2xl font-bold">{relatorios.length}</p>
          </div>
        </div>

        {/* Tabela de relatórios */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Últimos Relatórios</h2>
          {loading ? (
            <p>Carregando...</p>
          ) : relatorios.length === 0 ? (
            <p>Nenhum relatório encontrado.</p>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4">Funcionário</th>
                  <th className="py-2 px-4">Data</th>
                  <th className="py-2 px-4">Horas Trabalhadas</th>
                  <th className="py-2 px-4">Tipo</th>
                </tr>
              </thead>
              <tbody>
                {relatorios.map((rel) => (
                  <tr key={rel._id} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{rel.nomeFuncionario}</td>
                    <td className="py-2 px-4">{new Date(rel.date).toLocaleDateString()}</td>
                    <td className="py-2 px-4">{rel.horasTrabalhadas}</td>
                    <td className="py-2 px-4">{rel.tipoRelatorio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}
