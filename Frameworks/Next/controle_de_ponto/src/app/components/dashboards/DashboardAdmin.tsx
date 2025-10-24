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

export default function AdminDashboard() {
  const [relatorios, setRelatorios] = useState<Relatorio[]>([]);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [totalHoras, setTotalHoras] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        // Buscar relatórios
        const resRel = await fetch("/api/relatorios");
        const dataRel = await resRel.json();
        setRelatorios(dataRel);

        const total = dataRel.reduce(
          (acc: number, rel: Relatorio) => acc + rel.horasTrabalhadas,
          0
        );
        setTotalHoras(total);

        // Buscar usuários
        const resUser = await fetch("/api/usuarios");
        const dataUser = await resUser.json();
        setUsuarios(dataUser);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDados();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Menu lateral */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <a href="/admin/dashboard" className="text-gray-700 hover:text-teal-400">
            Início
          </a>
          <a href="/admin/relatorios" className="text-gray-700 hover:text-teal-400">
            Relatórios
          </a>
          <a href="/admin/usuarios" className="text-gray-700 hover:text-teal-400">
            Usuários
          </a>
          <a href="/admin/config" className="text-gray-700 hover:text-teal-400">
            Configurações
          </a>
          <div className="mt-auto">
            <LogoutButton />
          </div>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Bem-vindo, Administrador</h1>

        {/* Cards de resumo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center justify-center">
            <h3 className="text-gray-500 mb-2">Total de Horas</h3>
            <p className="text-2xl font-bold">{totalHoras}</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center justify-center">
            <h3 className="text-gray-500 mb-2">Total de Relatórios</h3>
            <p className="text-2xl font-bold">{relatorios.length}</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center justify-center">
            <h3 className="text-gray-500 mb-2">Total de Usuários</h3>
            <p className="text-2xl font-bold">{usuarios.length}</p>
          </div>
        </div>

        {/* Últimos relatórios */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
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
                  <th className="py-2 px-4">Horas</th>
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

        {/* Lista de usuários */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Usuários</h2>
          {loading ? (
            <p>Carregando...</p>
          ) : usuarios.length === 0 ? (
            <p>Nenhum usuário encontrado.</p>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4">Nome</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Tipo</th>
                  <th className="py-2 px-4">Ações</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((user) => (
                  <tr key={user._id} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{user.nome}</td>
                    <td className="py-2 px-4">{user.email}</td>
                    <td className="py-2 px-4">{user.tipoUsuario}</td>
                    <td className="py-2 px-4 flex gap-2">
                      <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded">
                        Editar
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">
                        Remover
                      </button>
                    </td>
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
