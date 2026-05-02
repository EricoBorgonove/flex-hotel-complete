import { Check, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { DataTable } from "../components/DataTable.jsx";
import { Field } from "../components/Field.jsx";
import { IconButton } from "../components/IconButton.jsx";
import { Panel } from "../components/Panel.jsx";

export function GuestsView({ guests, onCreate, onUpdate }) {
  const emptyForm = { name: "", document: "", phone: "", email: "" };
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState("");

  const selectedGuest = guests.find((guest) => guest.id === editingId);

  useEffect(() => {
    if (selectedGuest) {
      setForm({
        name: selectedGuest.name || "",
        document: selectedGuest.document || "",
        phone: selectedGuest.phone || "",
        email: selectedGuest.email || "",
      });
    }
  }, [editingId, selectedGuest]);

  function submit(event) {
    event.preventDefault();
    const payload = Object.fromEntries(
      Object.entries(form).map(([key, value]) => [key, value.trim() || undefined]),
    );

    if (editingId) {
      onUpdate(editingId, payload);
    } else {
      onCreate(payload);
    }

    setForm(emptyForm);
    setEditingId("");
  }

  return (
    <div className="grid gap-5 xl:grid-cols-[380px_1fr]">
      <Panel title={editingId ? "Editar hóspede" : "Novo hóspede"}>
        <form className="space-y-3" onSubmit={submit}>
          <Field label="Nome" value={form.name} onChange={(name) => setForm((state) => ({ ...state, name }))} />
          <Field label="Documento" value={form.document} onChange={(document) => setForm((state) => ({ ...state, document }))} required={false} />
          <Field label="Telefone" value={form.phone} onChange={(phone) => setForm((state) => ({ ...state, phone }))} required={false} />
          <Field label="E-mail" type="email" value={form.email} onChange={(email) => setForm((state) => ({ ...state, email }))} required={false} />
          <div className="flex gap-2">
            <button type="submit" className="flex h-11 flex-1 items-center justify-center gap-2 rounded-md bg-[#031a33] font-semibold text-white">
              <Check size={18} /> Salvar
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

      <Panel title="Hóspedes cadastrados">
        <DataTable
          headers={["Nome", "Documento", "Telefone", "E-mail", "Reservas", ""]}
          rows={guests.map((guest) => [
            <span className="font-semibold">{guest.name}</span>,
            guest.document || "-",
            guest.phone || "-",
            guest.email || "-",
            guest._count?.reservations ?? 0,
            <IconButton key={guest.id} icon={Search} onClick={() => setEditingId(guest.id)} />,
          ])}
        />
      </Panel>
    </div>
  );
}

