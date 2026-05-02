import {
  BedDouble,
  CalendarDays,
  DoorOpen,
  Hotel,
  LogOut,
  RefreshCw,
  UserRound,
  Users,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Dashboard } from "./views/Dashboard.jsx";
import { GuestsView } from "./views/GuestsView.jsx";
import { LoginScreen } from "./views/LoginScreen.jsx";
import { ReservationsView } from "./views/ReservationsView.jsx";
import { RoomsView } from "./views/RoomsView.jsx";
import { StaysView } from "./views/StaysView.jsx";
import { UsersView } from "./views/UsersView.jsx";
import { flexHotelLogo, useFallbackLogo } from "./lib/branding.js";
import { today, tomorrow } from "./lib/constants.js";
import { pageTitle } from "./lib/pageTitle.js";
import { canManageUsers, isSuperUser, userHotelLabel } from "./lib/permissions.js";

const API_BASE = import.meta.env.VITE_API_URL || "/api";

const navItems = [
  { id: "dashboard", label: "Painel", icon: Hotel },
  { id: "rooms", label: "Quartos", icon: BedDouble },
  { id: "guests", label: "Hóspedes", icon: UserRound },
  { id: "reservations", label: "Reservas", icon: CalendarDays },
  { id: "stays", label: "Estadias", icon: DoorOpen },
  { id: "users", label: "Usuários", icon: Users },
];

function App() {
  const [session, setSession] = useState(() => {
    const saved = localStorage.getItem("flexhotel.session");
    return saved ? JSON.parse(saved) : null;
  });
  const [view, setView] = useState("dashboard");
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [available, setAvailable] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [guests, setGuests] = useState([]);
  const [users, setUsers] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [bill, setBill] = useState(null);
  const [filters, setFilters] = useState({ from: today, to: tomorrow, status: "" });

  const token = session?.token;
  const user = session?.user;

  async function request(path, options = {}) {
    const response = await fetch(`${API_BASE}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers,
      },
    });

    const text = await response.text();
    const data = text ? JSON.parse(text) : null;

    if (!response.ok) {
      throw new Error(data?.message || "Falha na requisição");
    }

    return data;
  }

  async function loadAll() {
    if (!token) return;

    setLoading(true);
    try {
      const [roomsData, guestsData, reservationsData] = await Promise.all([
        request("/rooms"),
        request("/guests?limit=100"),
        request(`/reservations?limit=80${filters.status ? `&status=${filters.status}` : ""}`),
      ]);

      setRooms(roomsData);
      setGuests(guestsData);
      setReservations(reservationsData);

      if (canManageUsers(user)) {
        const usersData = await request("/users");
        setUsers(usersData);
      }

      if (isSuperUser(user)) {
        const hotelsData = await request("/hotels");
        setHotels(hotelsData);
      }
    } catch (error) {
      showToast(error.message, "error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAll();
  }, [token, filters.status]);

  function showToast(message, type = "success") {
    setToast({ message, type });
    window.setTimeout(() => setToast(null), 3400);
  }

  function logout() {
    localStorage.removeItem("flexhotel.session");
    setSession(null);
    setRooms([]);
    setGuests([]);
    setReservations([]);
    setUsers([]);
    setHotels([]);
    setSelectedReservation(null);
    setBill(null);
  }

  async function handleLogin(credentials) {
    setLoading(true);
    try {
      const data = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      }).then(async (response) => {
        const payload = await response.json();
        if (!response.ok) throw new Error(payload.message || "Login inválido");
        return payload;
      });

      localStorage.setItem("flexhotel.session", JSON.stringify(data));
      setSession(data);
      showToast("Sessão iniciada");
    } catch (error) {
      showToast(error.message, "error");
    } finally {
      setLoading(false);
    }
  }

  async function findAvailableRooms(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const data = await request(`/rooms/available?from=${filters.from}&to=${filters.to}`);
      setAvailable(data);
      showToast(`${data.count} quarto(s) disponível(is)`);
    } catch (error) {
      showToast(error.message, "error");
    } finally {
      setLoading(false);
    }
  }

  async function updateRoomStatus(roomId, status) {
    try {
      await request(`/rooms/${roomId}/status`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });
      await loadAll();
      showToast("Status atualizado");
    } catch (error) {
      showToast(error.message, "error");
    }
  }

  async function createReservation(form) {
    try {
      await request("/reservations", {
        method: "POST",
        body: JSON.stringify(form),
      });
      await loadAll();
      showToast("Reserva criada");
    } catch (error) {
      showToast(error.message, "error");
    }
  }

  async function createGuest(form) {
    try {
      await request("/guests", {
        method: "POST",
        body: JSON.stringify(form),
      });
      await loadAll();
      showToast("Hóspede salvo");
    } catch (error) {
      showToast(error.message, "error");
    }
  }

  async function updateGuest(guestId, form) {
    try {
      await request(`/guests/${guestId}`, {
        method: "PATCH",
        body: JSON.stringify(form),
      });
      await loadAll();
      showToast("Hóspede atualizado");
    } catch (error) {
      showToast(error.message, "error");
    }
  }

  async function openReservation(reservationId) {
    try {
      const data = await request(`/reservations/${reservationId}`);
      setSelectedReservation(data);
      setView("stays");
    } catch (error) {
      showToast(error.message, "error");
    }
  }

  async function cancelReservation(reservationId) {
    try {
      await request(`/reservations/${reservationId}`, { method: "DELETE" });
      await loadAll();
      showToast("Reserva cancelada");
    } catch (error) {
      showToast(error.message, "error");
    }
  }

  async function checkin(reservationId) {
    try {
      await request(`/stays/${reservationId}/checkin`, {
        method: "POST",
        body: JSON.stringify({ generateDailyCharges: true }),
      });
      const reservation = await request(`/reservations/${reservationId}`);
      setSelectedReservation(reservation);
      await loadAll();
      showToast("Check-in realizado");
    } catch (error) {
      showToast(error.message, "error");
    }
  }

  async function getBill(stayId) {
    try {
      const data = await request(`/stays/${stayId}/bill`);
      setBill(data);
    } catch (error) {
      showToast(error.message, "error");
    }
  }

  async function addPayment(stayId, amount) {
    try {
      await request(`/stays/${stayId}/payments`, {
        method: "POST",
        body: JSON.stringify({ method: "pix", amount: Number(amount), status: "paid" }),
      });
      await getBill(stayId);
      showToast("Pagamento registrado");
    } catch (error) {
      showToast(error.message, "error");
    }
  }

  async function addCharge(stayId, form) {
    try {
      await request(`/stays/${stayId}/charges`, {
        method: "POST",
        body: JSON.stringify({ ...form, amount: Number(form.amount) }),
      });
      await getBill(stayId);
      showToast("Cobrança lançada");
    } catch (error) {
      showToast(error.message, "error");
    }
  }

  async function checkout(stayId) {
    try {
      await request(`/stays/${stayId}/checkout`, {
        method: "POST",
        body: JSON.stringify({}),
      });
      setBill(null);
      setSelectedReservation(null);
      await loadAll();
      showToast("Check-out realizado");
    } catch (error) {
      showToast(error.message, "error");
    }
  }

  async function createUser(form) {
    try {
      await request("/users", {
        method: "POST",
        body: JSON.stringify(form),
      });
      await loadAll();
      showToast("Usuário criado");
    } catch (error) {
      showToast(error.message, "error");
    }
  }

  async function updateUser(userId, form) {
    try {
      await request(`/users/${userId}`, {
        method: "PATCH",
        body: JSON.stringify(form),
      });
      await loadAll();
      showToast("Usuário atualizado");
    } catch (error) {
      showToast(error.message, "error");
    }
  }

  const metrics = useMemo(() => {
    const occupied = rooms.filter((room) => room.status === "occupied").length;
    const availableRooms = rooms.filter((room) => room.status === "available").length;
    const activeReservations = reservations.filter((reservation) =>
      ["pending", "confirmed", "checked_in"].includes(reservation.status),
    ).length;
    const expectedRevenue = reservations.reduce((total, reservation) => {
      return total + reservation.rooms.reduce((sum, item) => sum + Number(item.dailyRate || 0), 0);
    }, 0);

    return { occupied, availableRooms, activeReservations, expectedRevenue };
  }, [rooms, reservations]);

  if (!session) {
    return <LoginScreen onLogin={handleLogin} loading={loading} toast={toast} />;
  }

  return (
    <div className="min-h-screen bg-[#f4f1ec] text-[#172026]">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 border-r border-[#d8d2c7] bg-[#fbfaf7] lg:block">
        <div className="flex h-16 items-center gap-3 border-b border-[#d8d2c7] px-5">
          <div className="grid size-11 place-items-center rounded-md bg-[#031a33]">
            <img src={flexHotelLogo} alt="Flex Hotel" className="size-10 object-contain" onError={useFallbackLogo} />
          </div>
          <div>
            <p className="text-sm font-semibold">FlexHotel</p>
            <p className="text-xs text-[#66746f]">{userHotelLabel(user)}</p>
          </div>
        </div>

        <nav className="space-y-1 px-3 py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setView(item.id)}
                className={`flex h-11 w-full items-center gap-3 rounded-md px-3 text-sm font-medium transition ${
                  view === item.id
                    ? "bg-[#031a33] text-white"
                    : "text-[#46544f] hover:bg-[#ede8df]"
                }`}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-10 border-b border-[#d8d2c7] bg-[#fbfaf7]/95 backdrop-blur">
          <div className="flex min-h-16 flex-wrap items-center justify-between gap-3 px-4 py-3 lg:px-6">
            <div>
              <h1 className="text-lg font-semibold">{pageTitle(view)}</h1>
              <p className="text-sm text-[#66746f]">{user?.name} · {user?.roles?.join(", ")}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={loadAll}
                className="grid size-10 place-items-center rounded-md border border-[#cfc7ba] bg-white text-[#46544f] hover:bg-[#f3eee6]"
                title="Atualizar dados"
              >
                <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
              </button>
              <button
                type="button"
                onClick={logout}
                className="grid size-10 place-items-center rounded-md border border-[#cfc7ba] bg-white text-[#46544f] hover:bg-[#f3eee6]"
                title="Sair"
              >
                <LogOut size={18} />
              </button>
            </div>
          </div>

          <div className="flex gap-1 overflow-x-auto border-t border-[#e4ded4] px-3 py-2 lg:hidden">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setView(item.id)}
                  className={`flex h-10 min-w-24 items-center justify-center gap-2 rounded-md px-3 text-xs font-medium ${
                    view === item.id ? "bg-[#031a33] text-white" : "bg-white text-[#46544f]"
                  }`}
                >
                  <Icon size={15} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </header>

        <main className="px-4 py-5 lg:px-6">
          {view === "dashboard" && (
            <Dashboard
              metrics={metrics}
              rooms={rooms}
              reservations={reservations}
              onOpenReservation={openReservation}
            />
          )}
          {view === "rooms" && (
            <RoomsView
              rooms={rooms}
              available={available}
              filters={filters}
              setFilters={setFilters}
              onFindAvailable={findAvailableRooms}
              onUpdateStatus={updateRoomStatus}
            />
          )}
          {view === "guests" && (
            <GuestsView guests={guests} onCreate={createGuest} onUpdate={updateGuest} />
          )}
          {view === "reservations" && (
            <ReservationsView
              rooms={rooms}
              guests={guests}
              reservations={reservations}
              filters={filters}
              setFilters={setFilters}
              onCreate={createReservation}
              onOpen={openReservation}
              onCancel={cancelReservation}
              onCheckin={checkin}
            />
          )}
          {view === "stays" && (
            <StaysView
              reservation={selectedReservation}
              reservations={reservations}
              bill={bill}
              onOpen={openReservation}
              onBill={getBill}
              onAddCharge={addCharge}
              onAddPayment={addPayment}
              onCheckout={checkout}
            />
          )}
          {view === "users" && (
            <UsersView
              users={users}
              hotels={hotels}
              currentUser={user}
              onCreate={createUser}
              onUpdate={updateUser}
            />
          )}
        </main>
      </div>

      {toast && (
        <div
          className={`fixed bottom-4 right-4 z-30 max-w-sm rounded-md px-4 py-3 text-sm font-medium shadow-lg ${
            toast.type === "error" ? "bg-[#9f2d2d] text-white" : "bg-[#031a33] text-white"
          }`}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
}

export default App;
