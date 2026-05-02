import { BedDouble, CalendarDays, CircleDollarSign, Moon, Search } from "lucide-react";
import { Badge } from "../components/Badge.jsx";
import { DataTable } from "../components/DataTable.jsx";
import { IconButton } from "../components/IconButton.jsx";
import { Panel } from "../components/Panel.jsx";
import { formatDate, money } from "../lib/formatters.js";

export function Dashboard({ metrics, rooms, reservations, onOpenReservation }) {
  const cards = [
    { label: "Quartos disponíveis", value: metrics.availableRooms, icon: BedDouble },
    { label: "Quartos ocupados", value: metrics.occupied, icon: Moon },
    { label: "Reservas ativas", value: metrics.activeReservations, icon: CalendarDays },
    { label: "Receita prevista", value: money(metrics.expectedRevenue), icon: CircleDollarSign },
  ];

  return (
    <div className="space-y-5">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="rounded-md border border-[#d8d2c7] bg-[#fbfaf7] p-4">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm text-[#66746f]">{card.label}</p>
                <Icon size={18} className="text-[#031a33]" />
              </div>
              <p className="text-2xl font-semibold">{card.value}</p>
            </div>
          );
        })}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1fr_1.2fr]">
        <Panel title="Mapa rápido de quartos">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {rooms.slice(0, 12).map((room) => (
              <div key={room.id} className="rounded-md border border-[#ded7cc] bg-white p-3">
                <p className="font-semibold">Quarto {room.number}</p>
                <p className="text-xs text-[#66746f]">{room.hotel?.name || "Hotel não informado"}</p>
                <p className="text-xs text-[#66746f]">{room.category?.name}</p>
                <Badge value={room.status} />
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Próximas reservas">
          <DataTable
            headers={["Hóspede", "Entrada", "Saída", "Status", ""]}
            rows={reservations.slice(0, 8).map((reservation) => [
              reservation.guest?.name,
              formatDate(reservation.checkInDate),
              formatDate(reservation.checkOutDate),
              <Badge value={reservation.status} />,
              <IconButton key={reservation.id} icon={Search} onClick={() => onOpenReservation(reservation.id)} />,
            ])}
          />
        </Panel>
      </section>
    </div>
  );
}

