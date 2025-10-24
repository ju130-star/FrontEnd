"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    // Limpa o token ou dados do usuário (exemplo localStorage)
    localStorage.removeItem("token"); // ou "user" se você armazenar info do usuário

    // Redireciona para a página de login
    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
    >
      Sair
    </button>
  );
}
