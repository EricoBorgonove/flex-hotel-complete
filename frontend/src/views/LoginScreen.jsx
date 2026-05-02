import { Check, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { flexHotelLoginLogo, useFallbackLogo } from "../lib/branding.js";

export function LoginScreen({ onLogin, loading, toast }) {
  const [email, setEmail] = useState("admin@demo.com");
  const [password, setPassword] = useState("123456");

  return (
    <div className="grid min-h-screen grid-cols-1 bg-[#f4f1ec] lg:grid-cols-[1.1fr_0.9fr]">
      <section className="flex min-h-[42vh] flex-col justify-between bg-[#031a33] p-6 text-white lg:min-h-screen lg:p-10">
        <div>
          <p className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm text-[#d7e8e4]">
            <ShieldCheck size={16} /> Acesso administrativo
          </p>
        </div>

        <div className="mx-auto flex max-w-2xl flex-col items-center py-8 text-center lg:py-10">
          <img src={flexHotelLoginLogo} alt="Flex Hotel" className="mb-8 h-56 w-56 rounded-md object-cover shadow-2xl shadow-black/30 sm:h-72 sm:w-72 lg:h-96 lg:w-96" onError={useFallbackLogo} />
          <p className="max-w-xl text-lg font-medium leading-8 text-white">
            Gestão hoteleira integrada para uma operação mais ágil, organizada e acolhedora.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#d7e8e4]">
            Acompanhe disponibilidade, reservas, hospedagens, contas e equipes em uma única plataforma.
          </p>
        </div>

        <div className="grid gap-3 text-sm text-[#d7e8e4] sm:grid-cols-3">
          <p className="rounded-md border border-white/15 bg-white/5 p-3">
            <span className="block font-semibold text-white">Recepção fluida</span>
            reservas, check-in e check-out
          </p>
          <p className="rounded-md border border-white/15 bg-white/5 p-3">
            <span className="block font-semibold text-white">Governança clara</span>
            quartos e disponibilidade
          </p>
          <p className="rounded-md border border-white/15 bg-white/5 p-3">
            <span className="block font-semibold text-white">Gestão segura</span>
            contas, pagamentos e perfis
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center p-5">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onLogin({ email, password });
          }}
          className="w-full max-w-md rounded-md border border-[#d8d2c7] bg-[#fbfaf7] p-6 shadow-sm"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">Entrar</h2>
            <p className="mt-1 text-sm text-[#66746f]">Use o usuário criado pelo seed ou suas credenciais.</p>
          </div>

          <label className="mb-4 block">
            <span className="mb-1 block text-sm font-medium">E-mail</span>
            <input
              className="h-11 w-full rounded-md border border-[#cfc7ba] bg-white px-3 outline-none focus:border-[#031a33]"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
            />
          </label>

          <label className="mb-5 block">
            <span className="mb-1 block text-sm font-medium">Senha</span>
            <input
              className="h-11 w-full rounded-md border border-[#cfc7ba] bg-white px-3 outline-none focus:border-[#031a33]"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#031a33] px-4 font-semibold text-white hover:bg-[#08223d]"
          >
            <Check size={18} />
            Entrar
          </button>

          {toast && (
            <p className={`mt-4 text-sm ${toast.type === "error" ? "text-[#9f2d2d]" : "text-[#031a33]"}`}>
              {toast.message}
            </p>
          )}
        </form>
      </section>
    </div>
  );
}

