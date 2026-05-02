import { Check, DoorOpen, Plus, Search } from "lucide-react";
import { useState } from "react";
import { Badge } from "../components/Badge.jsx";
import { DataTable } from "../components/DataTable.jsx";
import { Field } from "../components/Field.jsx";
import { IconButton } from "../components/IconButton.jsx";
import { Panel } from "../components/Panel.jsx";
import { reservationStatuses, statusLabels, today, tomorrow } from "../lib/constants.js";
import { formatDate } from "../lib/formatters.js";

export function ReservationsView({ rooms, guests, reservations, filters, setFilters, onCreate, onOpen, onCancel, onCheckin }) {
  const [guestMode, setGuestMode] = useState("existing");
  const [guestId, setGuestId] = useState("");
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestDocument, setGuestDocument] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [roomId, setRoomId] = useState("");
  const [checkInDate, setCheckInDate] = useState(today);
  const [checkOutDate, setCheckOutDate] = useState(tomorrow);

  return (
    <div className="grid gap-5 xl:grid-cols-[380px_1fr]">
      <Panel title="Nova reserva">
        <form
          className="space-y-3"
          onSubmit={(event) => {
            event.preventDefault();
            onCreate({
              guest:
                guestMode === "existing"
                  ? { guestId }
                  : {
                      name: guestName,
                      email: guestEmail || undefined,
                      document: guestDocument || undefined,
                      phone: guestPhone || undefined,
                    },
              checkInDate,
              checkOutDate,
              roomIds: [roomId],
              status: "confirmed",
            });
          }}
        >
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setGuestMode("existing")}
              className={`h-10 rounded-md border text-sm font-semibold ${guestMode === "existing" ? "border-[#031a33] bg-[#e8edf3] text-[#031a33]" : "border-[#cfc7ba] bg-white"}`}
            >
              Existente
            </button>
            <button
              type="button"
              onClick={() => setGuestMode("new")}
              className={`h-10 rounded-md border text-sm font-semibold ${guestMode === "new" ? "border-[#031a33] bg-[#e8edf3] text-[#031a33]" : "border-[#cfc7ba] bg-white"}`}
            >
              Novo
            </button>
          </div>

          {guestMode === "existing" ? (
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Hóspede</span>
              <select className="h-11 w-full rounded-md border border-[#cfc7ba] bg-white px-3" value={guestId} onChange={(event) => setGuestId(event.target.value)} required>
                <option value="">Selecione</option>
                {guests.map((guest) => (
                  <option key={guest.id} value={guest.id}>
                    {guest.name}{guest.document ? ` · ${guest.document}` : ""}
                  </option>
                ))}
              </select>
            </label>
          ) : (
            <>
              <Field label="Hóspede" value={guestName} onChange={setGuestName} />
              <Field label="Documento" value={guestDocument} onChange={setGuestDocument} required={false} />
              <Field label="Telefone" value={guestPhone} onChange={setGuestPhone} required={false} />
              <Field label="E-mail" type="email" value={guestEmail} onChange={setGuestEmail} required={false} />
            </>
          )}
          <Field label="Entrada" type="date" value={checkInDate} onChange={setCheckInDate} />
          <Field label="Saída" type="date" value={checkOutDate} onChange={setCheckOutDate} />
          <label className="block">
            <span className="mb-1 block text-sm font-medium">Quarto</span>
            <select className="h-11 w-full rounded-md border border-[#cfc7ba] bg-white px-3" value={roomId} onChange={(event) => setRoomId(event.target.value)} required>
              <option value="">Selecione</option>
              {rooms.filter((room) => room.status === "available").map((room) => (
                <option key={room.id} value={room.id}>Quarto {room.number} · {room.category?.name}</option>
              ))}
            </select>
          </label>
          <button type="submit" className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#031a33] font-semibold text-white">
            <Plus size={18} /> Criar reserva
          </button>
        </form>
      </Panel>

      <Panel title="Reservas">
        <div className="mb-4 flex flex-wrap items-end gap-3">
          <label>
            <span className="mb-1 block text-sm font-medium">Status</span>
            <select className="h-10 rounded-md border border-[#cfc7ba] bg-white px-3" value={filters.status} onChange={(event) => setFilters((state) => ({ ...state, status: event.target.value }))}>
              <option value="">Todos</option>
              {reservationStatuses.map((status) => (
                <option key={status} value={status}>{statusLabels[status]}</option>
              ))}
            </select>
          </label>
        </div>

        <DataTable
          headers={["Hóspede", "Quartos", "Período", "Status", "Ações"]}
          rows={reservations.map((reservation) => [
            reservation.guest?.name,
            reservation.rooms.map((item) => item.room.number).join(", "),
            `${formatDate(reservation.checkInDate)} - ${formatDate(reservation.checkOutDate)}`,
            <Badge value={reservation.status} />,
            <div key={reservation.id} className="flex gap-2">
              <IconButton icon={Search} onClick={() => onOpen(reservation.id)} />
              <IconButton icon={DoorOpen} onClick={() => onCheckin(reservation.id)} disabled={reservation.status !== "confirmed"} />
              <IconButton icon={Check} onClick={() => onCancel(reservation.id)} disabled={["checked_in", "checked_out", "cancelled"].includes(reservation.status)} />
            </div>,
          ])}
        />
      </Panel>
    </div>
  );
}

