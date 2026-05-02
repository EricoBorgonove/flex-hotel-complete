const { z } = require("zod");

const dateOnlySchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Expected date in YYYY-MM-DD format")
  .refine((value) => {
    const [year, month, day] = value.split("-").map(Number);
    const date = new Date(Date.UTC(year, month - 1, day));

    return (
      date.getUTCFullYear() === year &&
      date.getUTCMonth() === month - 1 &&
      date.getUTCDate() === day
    );
  }, "Invalid calendar date");

// ============= Auth Validators =============
const authLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

// ============= Users Validators =============
const usersListQuerySchema = z.object({
  hotelId: z.string().uuid().optional(),
});

const usersCreateSchema = z.object({
  hotelId: z.string().uuid().optional(),
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  isActive: z.boolean().optional(),
  roles: z.array(z.enum(["SUPER_ADMIN", "ADMIN", "RECEPTION", "FINANCE", "HOUSEKEEPING", "MANAGER"])).min(1),
});

const usersUpdateSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email().optional(),
  password: z.string().min(6).optional(),
  hotelId: z.string().uuid().nullable().optional(),
  isActive: z.boolean().optional(),
  roles: z.array(z.enum(["SUPER_ADMIN", "ADMIN", "RECEPTION", "FINANCE", "HOUSEKEEPING", "MANAGER"])).min(1).optional(),
});

const usersSetRolesSchema = z.object({
  roles: z.array(z.enum(["SUPER_ADMIN", "ADMIN", "RECEPTION", "FINANCE", "HOUSEKEEPING", "MANAGER"])).min(1),
});

// ============= Guests Validators =============
const guestsListQuerySchema = z.object({
  hotelId: z.string().uuid().optional(),
  q: z.string().trim().optional(),
  page: z.coerce.number().int().min(0).optional(),
  limit: z.coerce.number().int().min(1).max(100).optional(),
});

const guestsCreateSchema = z.object({
  hotelId: z.string().uuid().optional(),
  name: z.string().min(2),
  document: z.string().trim().optional(),
  phone: z.string().trim().optional(),
  email: z.string().email().optional(),
});

const guestsUpdateSchema = z.object({
  name: z.string().min(2).optional(),
  document: z.string().trim().optional(),
  phone: z.string().trim().optional(),
  email: z.string().email().optional(),
});

// ============= Hotels Validators =============
const hotelsCreateSchema = z.object({
  name: z.string().min(2),
  city: z.string().optional(),
});

const hotelsUpdateSchema = z.object({
  name: z.string().min(2).optional(),
  city: z.string().optional(),
});

// ============= Rooms Validators =============
const roomsAvailableQuerySchema = z.object({
  from: dateOnlySchema,
  to: dateOnlySchema,
  hotelId: z.string().uuid().optional(),
});

const roomsUpdateStatusSchema = z.object({
  status: z.enum(["available", "occupied", "cleaning", "maintenance", "blocked"]),
});

// ============= Reservations Validators =============
const reservationsCreateSchema = z.object({
  guest: z.object({
    guestId: z.string().uuid().optional(),
    name: z.string().min(2).optional(),
    document: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().email().optional(),
  }),
  checkInDate: dateOnlySchema,
  checkOutDate: dateOnlySchema,
  roomIds: z.array(z.string().uuid()).min(1),
  source: z.string().optional(),
  notes: z.string().optional(),
  status: z.enum(["pending", "confirmed"]).optional(),
  occupants: z.object({
    adults: z.number().int().min(1).default(1),
    children: z.number().int().min(0).default(0),
  }).optional(),
});

const reservationsUpdateSchema = z.object({
  notes: z.string().optional(),
  source: z.string().optional(),
  status: z.enum(["pending", "confirmed"]).optional(),
});

const reservationsListQuerySchema = z.object({
  status: z.enum(["pending", "confirmed", "checked_in", "checked_out", "cancelled", "no_show"]).optional(),
  guestId: z.string().uuid().optional(),
  hotelId: z.string().uuid().optional(),
  page: z.coerce.number().int().min(0).optional(),
  limit: z.coerce.number().int().min(1).max(100).optional(),
});

// ============= Stays Validators =============
const staysCheckinSchema = z.object({
  checkInAt: z.string().datetime().optional(),
  generateDailyCharges: z.boolean().default(true),
});

const staysCheckoutSchema = z.object({
  checkOutAt: z.string().datetime().optional(),
});

const staysChargeSchema = z.object({
  type: z.enum(["daily", "service", "fee", "discount"]),
  description: z.string().min(2),
  amount: z.number().positive(),
  occurredAt: z.string().datetime().optional(),
});

const staysPaymentSchema = z.object({
  method: z.enum(["cash", "card", "pix", "transfer"]),
  amount: z.number().positive(),
  paidAt: z.string().datetime().optional(),
  status: z.enum(["pending", "paid", "failed", "refunded"]).default("paid"),
});

module.exports = {
  // Auth
  authLoginSchema,
  
  // Users
  usersListQuerySchema,
  usersCreateSchema,
  usersUpdateSchema,
  usersSetRolesSchema,

  // Guests
  guestsListQuerySchema,
  guestsCreateSchema,
  guestsUpdateSchema,
  
  // Hotels
  hotelsCreateSchema,
  hotelsUpdateSchema,
  
  // Rooms
  roomsAvailableQuerySchema,
  roomsUpdateStatusSchema,
  
  // Reservations
  reservationsCreateSchema,
  reservationsUpdateSchema,
  reservationsListQuerySchema,
  
  // Stays
  staysCheckinSchema,
  staysCheckoutSchema,
  staysChargeSchema,
  staysPaymentSchema,
};
