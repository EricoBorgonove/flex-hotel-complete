import { Check, WalletCards } from "lucide-react";
import { useState } from "react";
import { EmptyState } from "../components/EmptyState.jsx";
import { Field } from "../components/Field.jsx";
import { Info } from "../components/Info.jsx";
import { Panel } from "../components/Panel.jsx";
import { statusLabels } from "../lib/constants.js";
import { money } from "../lib/formatters.js";

export function StaysView({ reservation, reservations, bill, onOpen, onBill, onAddCharge, onAddPayment, onCheckout }) {
  const [charge, setCharge] = useState({ type: "service", description: "", amount: "" });
  const [paymentAmount, setPaymentAmount] = useState("");

  const checkedIn = reservations.filter((item) => item.status === "checked_in");
  const stayId = reservation?.stay?.id;

  return (
    <div className="grid gap-5 xl:grid-cols-[360px_1fr]">
      <Panel title="Estadias em aberto">
        <div className="space-y-2">
          {checkedIn.map((item) => (
            <button key={item.id} type="button" onClick={() => onOpen(item.id)} className="w-full rounded-md border border-[#d8d2c7] bg-white p-3 text-left hover:bg-[#f3eee6]">
              <p className="font-semibold">{item.guest?.name}</p>
              <p className="text-sm text-[#66746f]">Reserva {item.id.slice(0, 8)}</p>
            </button>
          ))}
          {!checkedIn.length && <EmptyState text="Nenhuma estadia em aberto." />}
        </div>
      </Panel>

      <Panel title="Conta e fechamento">
        {!reservation && <EmptyState text="Selecione uma reserva com check-in para gerenciar a estadia." />}
        {reservation && (
          <div className="space-y-4">
            <div className="grid gap-3 md:grid-cols-3">
              <Info label="Hóspede" value={reservation.guest?.name} />
              <Info label="Status" value={statusLabels[reservation.status] || reservation.status} />
              <Info label="Quartos" value={reservation.rooms?.map((item) => item.room.number).join(", ")} />
            </div>

            {!stayId && <p className="rounded-md border border-[#e0c36b] bg-[#fff7d7] p-3 text-sm text-[#6d5511]">Abra uma reserva já com check-in para carregar a conta.</p>}

            {stayId && (
              <>
                <div className="flex flex-wrap gap-2">
                  <button type="button" onClick={() => onBill(stayId)} className="flex h-10 items-center gap-2 rounded-md bg-[#031a33] px-4 text-sm font-semibold text-white">
                    <WalletCards size={17} /> Ver conta
                  </button>
                  <button type="button" onClick={() => onCheckout(stayId)} className="flex h-10 items-center gap-2 rounded-md bg-[#08223d] px-4 text-sm font-semibold text-white">
                    <Check size={17} /> Check-out
                  </button>
                </div>

                <div className="grid gap-3 md:grid-cols-[1fr_180px_auto]">
                  <Field label="Descrição" value={charge.description} onChange={(description) => setCharge((state) => ({ ...state, description }))} />
                  <Field label="Valor" type="number" value={charge.amount} onChange={(amount) => setCharge((state) => ({ ...state, amount }))} />
                  <button type="button" className="mt-6 h-11 rounded-md border border-[#cfc7ba] bg-white px-4 font-semibold" onClick={() => onAddCharge(stayId, charge)}>
                    Lançar
                  </button>
                </div>

                {bill && (
                  <div className="rounded-md border border-[#d8d2c7] bg-white p-4">
                    <div className="mb-4 grid gap-3 md:grid-cols-3">
                      <Info label="Cobranças" value={money(bill.totals.totalCharges)} />
                      <Info label="Pago" value={money(bill.totals.totalPaid)} />
                      <Info label="Saldo" value={money(bill.totals.balance)} />
                    </div>

                    <div className="grid gap-3 md:grid-cols-[1fr_auto]">
                      <Field label="Pagamento PIX" type="number" value={paymentAmount} onChange={setPaymentAmount} />
                      <button type="button" className="mt-6 h-11 rounded-md bg-[#031a33] px-4 font-semibold text-white" onClick={() => onAddPayment(stayId, paymentAmount)}>
                        Registrar
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </Panel>
    </div>
  );
}

