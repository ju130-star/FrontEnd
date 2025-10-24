"use client";

import { useEffect, useState } from "react";
import LogoutButton from "../../components/LogoutButton";

interface Relatorio {
  _id: string;
  nomeFuncionario: string;
  date: string;
  horasTrabalhadas: number;
  tipoRelatorio: string;
}

interface Usuario {
  _id: string;
  nome: string;
  email: string;
  tipoUsuario: string;
}

export default function FuncionarioDashboard() {
  const [relatorios, setRelatorios] = useState<Relatorio[]>([]);
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [totalHoras, setTotalHoras] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        // Buscar dados do usuário logado (ex: token/localStorage)
        const userStr = localStorage.getItem("user");
        if (userStr) {
          setUsuario(JSON.parse(userStr));
        }

        // Buscar relatórios do funcionário logado
        const res = await fetch("/api/relatorios/funcionario/" + (usuario?._id || ""));
        const data: Relatorio[] = await res.json();
        setRelatorios(data);

        const total = data.reduce((acc, rel) => acc + rel.horasTrabalhadas, 0);
        setTotalHoras(total);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDados();
  }, [usuario?._id]);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Menu lateral */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <a href="/funcionario/dashboard" className="text-gray-700 hover:text-teal-400">
            Início
          </a>
          <a href="/funcionario/relatorios" className="text-gray-700 hover:text-teal-400">
            Meus Relatórios
          </a>
          <div className="mt-auto">
            <LogoutButton />
          </div>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">
          Bem-vindo{usuario ? `, ${usuario.nome}` : ""}
        </h1>

        {/* Card de total de horas */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mb-8">
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center justify-center">
            <h3 className="text-gray-500 mb-2">Total de Horas Trabalhadas</h3>
            <p className="text-2xl font-bold">{totalHoras}</p>
          </div>
        </div>

        {/* Últimos relatórios */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Meus Últimos Relatórios</h2>
          {loading ? (
            <p>Carregando...</p>
          ) : relatorios.length === 0 ? (
            <p>Nenhum relatório encontrado.</p>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4">Data</th>
                  <th className="py-2 px-4">Horas Trabalhadas</th>
                  <th className="py-2 px-4">Tipo</th>
                </tr>
              </thead>
              <tbody>
                {relatorios.map((rel) => (
                  <tr key={rel._id} className="border-b hover:bg-gray-50">
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
