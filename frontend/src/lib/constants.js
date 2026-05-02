export const roomStatuses = ["available", "occupied", "cleaning", "maintenance", "blocked"];

export const reservationStatuses = [
  "pending",
  "confirmed",
  "checked_in",
  "checked_out",
  "cancelled",
  "no_show",
];

export const roles = ["ADMIN", "RECEPTION", "FINANCE", "HOUSEKEEPING", "MANAGER", "SUPER_ADMIN"];

export const statusLabels = {
  available: "Disponível",
  occupied: "Ocupado",
  cleaning: "Limpeza",
  maintenance: "Manutenção",
  blocked: "Bloqueado",
  pending: "Pendente",
  confirmed: "Confirmada",
  checked_in: "Check-in",
  checked_out: "Check-out",
  cancelled: "Cancelada",
  no_show: "No-show",
  open: "Aberta",
  closed: "Fechada",
  paid: "Pago",
};

export const today = new Date().toISOString().slice(0, 10);
export const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

