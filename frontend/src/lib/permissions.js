export function canManageUsers(user) {
  return user?.roles?.some((role) => ["SUPER_ADMIN", "ADMIN"].includes(role));
}

export function isSuperUser(user) {
  return user?.roles?.includes("SUPER_ADMIN");
}

export function userHotelLabel(user) {
  if (user?.hotelName) return user.hotelName;
  if (isSuperUser(user)) return "Acesso global";
  return "Hotel não vinculado";
}

