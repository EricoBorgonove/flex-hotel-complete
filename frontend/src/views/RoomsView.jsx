import { Search } from "lucide-react";
import { Badge } from "../components/Badge.jsx";
import { DataTable } from "../components/DataTable.jsx";
import { Field } from "../components/Field.jsx";
import { Panel } from "../components/Panel.jsx";
import { roomStatuses, statusLabels } from "../lib/constants.js";
import { money } from "../lib/formatters.js";

export function RoomsView({ rooms, available, filters, setFilters, onFindAvailable, onUpdateStatus }) {
  return (
    <div className="space-y-5">
      <Panel title="Disponibilidade">
        <form className="grid gap-3 md:grid-cols-[1fr_1fr_auto]" onSubmit={onFindAvailable}>
          <Field label="Entrada" type="date" value={filters.from} onChange={(from) => setFilters((state) => ({ ...state, from }))} />
          <Field label="Saída" type="date" value={filters.to} onChange={(to) => setFilters((state) => ({ ...state, to }))} />
          <button className="mt-6 flex h-11 items-center justify-center gap-2 rounded-md bg-[#031a33] px-4 font-semibold text-white" type="submit">
            <Search size={18} /> Buscar
          </button>
        </form>

        {available && (
          <div className="mt-4 rounded-md border border-[#d8d2c7] bg-white p-4">
            <p className="font-medium">{available.count} quarto(s) disponível(is)</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {available.rooms.map((room) => (
                <span key={room.id} className="rounded-md bg-[#e8edf3] px-3 py-2 text-sm">
                  {room.hotel?.name ? `${room.hotel.name} · ` : ""}{room.number} · {room.category.name} · {money(room.category.basePrice)}
                </span>
              ))}
            </div>
          </div>
        )}
      </Panel>

      <Panel title="Quartos">
        <DataTable
          headers={["Hotel", "Número", "Andar", "Categoria", "Capacidade", "Status", "Alterar"]}
          rows={rooms.map((room) => [
            room.hotel?.name || room.hotelId || "-",
            <span className="font-semibold">{room.number}</span>,
            room.floor || "-",
            room.category?.name || "-",
            room.category?.capacity || "-",
            <Badge value={room.status} />,
            <select
              key={room.id}
              className="h-9 rounded-md border border-[#cfc7ba] bg-white px-2 text-sm"
              value={room.status}
              onChange={(event) => onUpdateStatus(room.id, event.target.value)}
            >
              {roomStatuses.map((status) => (
                <option key={status} value={status}>{statusLabels[status]}</option>
              ))}
            </select>,
          ])}
        />
      </Panel>
    </div>
  );
}

