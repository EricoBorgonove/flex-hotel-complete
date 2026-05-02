import { Check, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { DataTable } from "../components/DataTable.jsx";
import { EmptyState } from "../components/EmptyState.jsx";
import { Field } from "../components/Field.jsx";
import { IconButton } from "../components/IconButton.jsx";
import { Panel } from "../components/Panel.jsx";
import { roles } from "../lib/constants.js";
import { formatDate } from "../lib/formatters.js";
import { canManageUsers, isSuperUser } from "../lib/permissions.js";

export function UsersView({ users, hotels, currentUser, onCreate, onUpdate }) {
  const emptyForm = {
    name: "",
    email: "",
    password: "123456",
    hotelId: currentUser?.hotelId || "",
    isActive: true,
    role: "RECEPTION",
  };
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState("");

  const editingUser = users.find((item) => item.id === editingId);
  const superAdmin = isSuperUser(currentUser);

  useEffect(() => {
    if (!editingUser) return;

    setForm({
      name: editingUser.name || "",
      email: editingUser.email || "",
      password: "",
      hotelId: editingUser.hotelId || "",
      isActive: Boolean(editingUser.isActive),
      role: editingUser.roles?.[0] || "RECEPTION",
    });
  }, [editingId, editingUser]);

  if (!canManageUsers(currentUser)) {
    return <Panel title="Usuários"><EmptyState text="Seu perfil não tem acesso à administração de usuários." /></Panel>;
  }

  function submit(event) {
    event.preventDefault();

    const payload = editingId && !superAdmin ? {
      name: form.name,
      isActive: form.isActive,
    } : {
      name: form.name,
      email: form.email,
      isActive: form.isActive,
      roles: [form.role],
    };

    if (form.password) payload.password = form.password;

    if (superAdmin) {
      payload.hotelId = form.hotelId || null;
    }

    if (editingId) {
      onUpdate(editingId, payload);
    } else {
      onCreate({
        ...payload,
        password: form.password || "123456",
        roles: [form.role],
      });
    }

    setEditingId("");
    setForm(emptyForm);
  }

  return (
    <div className="grid gap-5 xl:grid-cols-[360px_1fr]">
      <Panel title={editingId ? "Editar usuário" : "Novo usuário"}>
        <form className="space-y-3" onSubmit={submit}>
          <Field label="Nome" value={form.name} onChange={(name) => setForm((state) => ({ ...state, name }))} />
          <Field label="E-mail" type="email" value={form.email} onChange={(email) => setForm((state) => ({ ...state, email }))} />
          <Field
            label={editingId ? "Nova senha" : "Senha inicial"}
            type="text"
            value={form.password}
            onChange={(password) => setForm((state) => ({ ...state, password }))}
            required={!editingId}
          />
          {superAdmin && (
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Hotel</span>
              <select
                className="h-11 w-full rounded-md border border-[#cfc7ba] bg-white px-3"
                value={form.hotelId}
                onChange={(event) => setForm((state) => ({ ...state, hotelId: event.target.value }))}
              >
                <option value="">Usuário global</option>
                {hotels.map((hotel) => (
                  <option key={hotel.id} value={hotel.id}>{hotel.name}</option>
                ))}
              </select>
            </label>
          )}
          <label className="block">
            <span className="mb-1 block text-sm font-medium">Perfil</span>
            <select
              className="h-11 w-full rounded-md border border-[#cfc7ba] bg-white px-3"
              value={form.role}
              onChange={(event) => setForm((state) => ({ ...state, role: event.target.value }))}
              disabled={!superAdmin}
            >
              {roles
                .filter((role) => superAdmin || role !== "SUPER_ADMIN")
                .map((role) => <option key={role} value={role}>{role}</option>)}
            </select>
          </label>
          <label className="flex h-11 items-center gap-3 rounded-md border border-[#cfc7ba] bg-white px-3 text-sm font-medium">
            <input
              type="checkbox"
              checked={form.isActive}
              onChange={(event) => setForm((state) => ({ ...state, isActive: event.target.checked }))}
              className="size-4"
            />
            Usuário ativo
          </label>
          <div className="flex gap-2">
            <button type="submit" className="flex h-11 flex-1 items-center justify-center gap-2 rounded-md bg-[#031a33] font-semibold text-white">
              <Check size={18} /> {editingId ? "Salvar" : "Criar"}
            </button>
            {editingId && (
              <button
                type="button"
                className="h-11 rounded-md border border-[#cfc7ba] bg-white px-4 font-semibold"
                onClick={() => {
                  setEditingId("");
                  setForm(emptyForm);
                }}
              >
                Limpar
              </button>
            )}
          </div>
        </form>
      </Panel>

      <Panel title="Equipe">
        <DataTable
          headers={["Nome", "E-mail", "Hotel", "Perfis", "Ativo", "Último login", ""]}
          rows={users.map((item) => [
            item.name,
            item.email,
            item.hotelName || "Global",
            item.roles.join(", "),
            item.isActive ? "Sim" : "Não",
            item.lastLoginAt ? formatDate(item.lastLoginAt) : "-",
            <IconButton key={item.id} icon={Search} onClick={() => setEditingId(item.id)} />,
          ])}
        />
      </Panel>
    </div>
  );
}

