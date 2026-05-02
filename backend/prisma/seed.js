require("dotenv").config();
const prisma = require("../src/lib/prisma");
const { hashPassword } = require("../src/lib/hash");

const roleNames = ["SUPER_ADMIN", "ADMIN", "RECEPTION", "FINANCE", "HOUSEKEEPING", "MANAGER"];

const hotelDemoId = "demo-hotel-id";
const hotelBranchId = "branch-hotel-id";

const guestIds = [
  "guest-ana-ribeiro",
  "guest-carlos-mendes",
  "guest-marina-costa",
  "guest-roberto-alves",
  "guest-julia-nunes",
  "guest-paulo-santos",
  "guest-beatriz-lima",
  "guest-lucas-freitas",
];

const reservationIds = [
  "res-ana-open-101",
  "res-carlos-future-102",
  "res-marina-pending-204",
  "res-roberto-closed-103",
  "res-julia-cancelled-202",
  "res-paulo-noshow-204",
  "res-beatriz-open-201",
  "res-lucas-future-301",
];

const stayIds = ["stay-ana-open", "stay-roberto-closed", "stay-beatriz-open"];
const roomBlockIds = ["block-203-maintenance", "block-branch-12-event"];

function utcDate(value) {
  return new Date(`${value}T00:00:00.000Z`);
}

function utcDateTime(value) {
  return new Date(`${value}.000Z`);
}

async function resetDemoOperationalData() {
  await prisma.payment.deleteMany({ where: { stayId: { in: stayIds } } });
  await prisma.charge.deleteMany({ where: { stayId: { in: stayIds } } });
  await prisma.stayGuest.deleteMany({ where: { stayId: { in: stayIds } } });
  await prisma.stay.deleteMany({ where: { id: { in: stayIds } } });
  await prisma.reservationRoom.deleteMany({ where: { reservationId: { in: reservationIds } } });
  await prisma.reservation.deleteMany({ where: { id: { in: reservationIds } } });
  await prisma.roomBlock.deleteMany({ where: { id: { in: roomBlockIds } } });
  await prisma.guest.deleteMany({ where: { id: { in: guestIds } } });
}

async function seedRoles() {
  for (const name of roleNames) {
    await prisma.role.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  return prisma.role.findMany({ where: { name: { in: roleNames } } });
}

async function seedHotels() {
  const hotel = await prisma.hotel.upsert({
    where: { id: hotelDemoId },
    update: { name: "Hotel Demo Manaus", city: "Manaus" },
    create: { id: hotelDemoId, name: "Hotel Demo Manaus", city: "Manaus" },
  });

  const branch = await prisma.hotel.upsert({
    where: { id: hotelBranchId },
    update: { name: "FlexHotel Praia", city: "Fortaleza" },
    create: { id: hotelBranchId, name: "FlexHotel Praia", city: "Fortaleza" },
  });

  return { hotel, branch };
}

async function seedUsers({ hotel, branch, roles }) {
  const passwordHash = await hashPassword("123456");
  const roleByName = Object.fromEntries(roles.map((role) => [role.name, role]));

  const users = [
    { name: "Super Admin", email: "super@demo.com", hotelId: null, roles: ["SUPER_ADMIN"] },
    { name: "Admin Demo", email: "admin@demo.com", hotelId: hotel.id, roles: ["ADMIN"] },
    { name: "Recepcao Demo", email: "recepcao@demo.com", hotelId: hotel.id, roles: ["RECEPTION"] },
    { name: "Financeiro Demo", email: "financeiro@demo.com", hotelId: hotel.id, roles: ["FINANCE"] },
    { name: "Governanca Demo", email: "governanca@demo.com", hotelId: hotel.id, roles: ["HOUSEKEEPING"] },
    { name: "Gerente Demo", email: "gerente@demo.com", hotelId: hotel.id, roles: ["MANAGER"] },
    { name: "Admin Praia", email: "admin.praia@demo.com", hotelId: branch.id, roles: ["ADMIN"] },
  ];

  for (const item of users) {
    const user = await prisma.user.upsert({
      where: { email: item.email },
      update: {
        name: item.name,
        hotelId: item.hotelId,
        isActive: true,
      },
      create: {
        name: item.name,
        email: item.email,
        passwordHash,
        hotelId: item.hotelId,
      },
    });

    await prisma.userRole.deleteMany({ where: { userId: user.id } });
    await prisma.userRole.createMany({
      data: item.roles.map((roleName) => ({
        userId: user.id,
        roleId: roleByName[roleName].id,
      })),
    });
  }
}

async function seedCategories({ hotel, branch }) {
  const categories = [
    { hotelId: hotel.id, name: "Standard", capacity: 2, basePrice: 220 },
    { hotelId: hotel.id, name: "Luxo", capacity: 3, basePrice: 360 },
    { hotelId: hotel.id, name: "Suite Familia", capacity: 5, basePrice: 520 },
    { hotelId: branch.id, name: "Vista Mar", capacity: 2, basePrice: 480 },
    { hotelId: branch.id, name: "Familia Praia", capacity: 4, basePrice: 650 },
  ];

  const result = {};
  for (const category of categories) {
    const row = await prisma.roomCategory.upsert({
      where: { hotelId_name: { hotelId: category.hotelId, name: category.name } },
      update: {
        capacity: category.capacity,
        basePrice: category.basePrice,
      },
      create: category,
    });
    result[`${category.hotelId}:${category.name}`] = row;
  }

  return result;
}

async function seedRooms({ hotel, branch, categories }) {
  const rooms = [
    { hotelId: hotel.id, category: "Standard", number: "101", floor: "1", status: "occupied" },
    { hotelId: hotel.id, category: "Standard", number: "102", floor: "1", status: "available" },
    { hotelId: hotel.id, category: "Standard", number: "103", floor: "1", status: "cleaning" },
    { hotelId: hotel.id, category: "Luxo", number: "104", floor: "1", status: "maintenance" },
    { hotelId: hotel.id, category: "Luxo", number: "201", floor: "2", status: "occupied" },
    { hotelId: hotel.id, category: "Luxo", number: "202", floor: "2", status: "available" },
    { hotelId: hotel.id, category: "Suite Familia", number: "203", floor: "2", status: "blocked" },
    { hotelId: hotel.id, category: "Suite Familia", number: "204", floor: "2", status: "available" },
    { hotelId: hotel.id, category: "Suite Familia", number: "301", floor: "3", status: "available" },
    { hotelId: branch.id, category: "Vista Mar", number: "11", floor: "1", status: "available" },
    { hotelId: branch.id, category: "Vista Mar", number: "12", floor: "1", status: "blocked" },
    { hotelId: branch.id, category: "Familia Praia", number: "21", floor: "2", status: "available" },
  ];

  const result = {};
  for (const room of rooms) {
    const category = categories[`${room.hotelId}:${room.category}`];
    const row = await prisma.room.upsert({
      where: { hotelId_number: { hotelId: room.hotelId, number: room.number } },
      update: {
        floor: room.floor,
        status: room.status,
        roomCategoryId: category.id,
      },
      create: {
        hotelId: room.hotelId,
        roomCategoryId: category.id,
        number: room.number,
        floor: room.floor,
        status: room.status,
      },
      include: { category: true },
    });
    result[`${room.hotelId}:${room.number}`] = row;
  }

  return result;
}

async function seedGuests({ hotel, branch }) {
  const guests = [
    {
      id: "guest-ana-ribeiro",
      hotelId: hotel.id,
      name: "Ana Ribeiro",
      document: "11122233344",
      phone: "92991110001",
      email: "ana.ribeiro@example.com",
    },
    {
      id: "guest-carlos-mendes",
      hotelId: hotel.id,
      name: "Carlos Mendes",
      document: "22233344455",
      phone: "92992220002",
      email: "carlos.mendes@example.com",
    },
    {
      id: "guest-marina-costa",
      hotelId: hotel.id,
      name: "Marina Costa",
      document: "33344455566",
      phone: "92993330003",
      email: "marina.costa@example.com",
    },
    {
      id: "guest-roberto-alves",
      hotelId: hotel.id,
      name: "Roberto Alves",
      document: "44455566677",
      phone: "92994440004",
      email: "roberto.alves@example.com",
    },
    {
      id: "guest-julia-nunes",
      hotelId: hotel.id,
      name: "Julia Nunes",
      document: "55566677788",
      phone: "92995550005",
      email: "julia.nunes@example.com",
    },
    {
      id: "guest-paulo-santos",
      hotelId: hotel.id,
      name: "Paulo Santos",
      document: "66677788899",
      phone: "92996660006",
      email: "paulo.santos@example.com",
    },
    {
      id: "guest-beatriz-lima",
      hotelId: hotel.id,
      name: "Beatriz Lima",
      document: "77788899900",
      phone: "92997770007",
      email: "beatriz.lima@example.com",
    },
    {
      id: "guest-lucas-freitas",
      hotelId: branch.id,
      name: "Lucas Freitas",
      document: "88899900011",
      phone: "85998880008",
      email: "lucas.freitas@example.com",
    },
  ];

  const result = {};
  for (const guest of guests) {
    const row = await prisma.guest.create({ data: guest });
    result[guest.id] = row;
  }

  return result;
}

async function createReservationWithRooms({ id, hotelId, guestId, checkInDate, checkOutDate, status, source, notes, rooms }) {
  const reservation = await prisma.reservation.create({
    data: {
      id,
      hotelId,
      guestId,
      checkInDate: utcDate(checkInDate),
      checkOutDate: utcDate(checkOutDate),
      status,
      source,
      notes,
    },
  });

  await prisma.reservationRoom.createMany({
    data: rooms.map((item) => ({
      reservationId: reservation.id,
      roomId: item.room.id,
      dailyRate: item.dailyRate ?? item.room.category.basePrice,
      adults: item.adults ?? 1,
      children: item.children ?? 0,
    })),
  });

  return reservation;
}

async function seedReservations({ hotel, branch, rooms }) {
  await createReservationWithRooms({
    id: "res-ana-open-101",
    hotelId: hotel.id,
    guestId: "guest-ana-ribeiro",
    checkInDate: "2026-04-28",
    checkOutDate: "2026-05-02",
    status: "checked_in",
    source: "Direto",
    notes: "Hospede solicitou late checkout se houver disponibilidade.",
    rooms: [{ room: rooms[`${hotel.id}:101`], adults: 2 }],
  });

  await createReservationWithRooms({
    id: "res-carlos-future-102",
    hotelId: hotel.id,
    guestId: "guest-carlos-mendes",
    checkInDate: "2026-05-03",
    checkOutDate: "2026-05-06",
    status: "confirmed",
    source: "Booking",
    notes: "Chegada prevista para 18h.",
    rooms: [{ room: rooms[`${hotel.id}:102`], adults: 1 }],
  });

  await createReservationWithRooms({
    id: "res-marina-pending-204",
    hotelId: hotel.id,
    guestId: "guest-marina-costa",
    checkInDate: "2026-05-08",
    checkOutDate: "2026-05-12",
    status: "pending",
    source: "WhatsApp",
    notes: "Aguardando confirmacao de pagamento.",
    rooms: [{ room: rooms[`${hotel.id}:204`], adults: 2, children: 1 }],
  });

  await createReservationWithRooms({
    id: "res-roberto-closed-103",
    hotelId: hotel.id,
    guestId: "guest-roberto-alves",
    checkInDate: "2026-04-20",
    checkOutDate: "2026-04-23",
    status: "checked_out",
    source: "Corporativo",
    notes: "Hospedagem faturada e quitada.",
    rooms: [{ room: rooms[`${hotel.id}:103`], adults: 1 }],
  });

  await createReservationWithRooms({
    id: "res-julia-cancelled-202",
    hotelId: hotel.id,
    guestId: "guest-julia-nunes",
    checkInDate: "2026-04-25",
    checkOutDate: "2026-04-27",
    status: "cancelled",
    source: "Direto",
    notes: "Cancelamento solicitado pelo hospede.",
    rooms: [{ room: rooms[`${hotel.id}:202`], adults: 2 }],
  });

  await createReservationWithRooms({
    id: "res-paulo-noshow-204",
    hotelId: hotel.id,
    guestId: "guest-paulo-santos",
    checkInDate: "2026-04-18",
    checkOutDate: "2026-04-19",
    status: "no_show",
    source: "Site",
    notes: "Cliente nao compareceu.",
    rooms: [{ room: rooms[`${hotel.id}:204`], adults: 1 }],
  });

  await createReservationWithRooms({
    id: "res-beatriz-open-201",
    hotelId: hotel.id,
    guestId: "guest-beatriz-lima",
    checkInDate: "2026-04-29",
    checkOutDate: "2026-05-01",
    status: "checked_in",
    source: "Agencia",
    notes: "Reserva com frigobar liberado.",
    rooms: [{ room: rooms[`${hotel.id}:201`], adults: 2 }],
  });

  await createReservationWithRooms({
    id: "res-lucas-future-301",
    hotelId: branch.id,
    guestId: "guest-lucas-freitas",
    checkInDate: "2026-05-05",
    checkOutDate: "2026-05-09",
    status: "confirmed",
    source: "Direto",
    notes: "Reserva da filial para testar isolamento por hotel.",
    rooms: [{ room: rooms[`${branch.id}:21`], adults: 2, children: 2 }],
  });
}

async function seedStays() {
  await prisma.stay.create({
    data: {
      id: "stay-ana-open",
      reservationId: "res-ana-open-101",
      checkInAt: utcDateTime("2026-04-28T14:35:00"),
      status: "open",
      stayGuests: {
        create: [{ guestId: "guest-ana-ribeiro" }],
      },
      charges: {
        create: [
          {
            type: "daily",
            description: "Diarias (4 noites) - Quarto 101",
            amount: 880,
            occurredAt: utcDateTime("2026-04-28T14:35:00"),
          },
          {
            type: "service",
            description: "Lavanderia",
            amount: 60,
            occurredAt: utcDateTime("2026-04-29T11:20:00"),
          },
          {
            type: "fee",
            description: "Taxa de turismo",
            amount: 25,
            occurredAt: utcDateTime("2026-04-29T12:00:00"),
          },
        ],
      },
      payments: {
        create: [
          {
            method: "pix",
            amount: 500,
            status: "paid",
            paidAt: utcDateTime("2026-04-28T15:00:00"),
          },
        ],
      },
    },
  });

  await prisma.stay.create({
    data: {
      id: "stay-roberto-closed",
      reservationId: "res-roberto-closed-103",
      checkInAt: utcDateTime("2026-04-20T13:50:00"),
      checkOutAt: utcDateTime("2026-04-23T10:10:00"),
      status: "closed",
      stayGuests: {
        create: [{ guestId: "guest-roberto-alves" }],
      },
      charges: {
        create: [
          {
            type: "daily",
            description: "Diarias (3 noites) - Quarto 103",
            amount: 660,
            occurredAt: utcDateTime("2026-04-20T13:50:00"),
          },
          {
            type: "service",
            description: "Restaurante",
            amount: 140,
            occurredAt: utcDateTime("2026-04-21T20:30:00"),
          },
          {
            type: "discount",
            description: "Desconto convenio corporativo",
            amount: -80,
            occurredAt: utcDateTime("2026-04-23T09:30:00"),
          },
        ],
      },
      payments: {
        create: [
          {
            method: "card",
            amount: 720,
            status: "paid",
            paidAt: utcDateTime("2026-04-23T10:05:00"),
          },
        ],
      },
    },
  });

  await prisma.stay.create({
    data: {
      id: "stay-beatriz-open",
      reservationId: "res-beatriz-open-201",
      checkInAt: utcDateTime("2026-04-29T16:10:00"),
      status: "open",
      stayGuests: {
        create: [{ guestId: "guest-beatriz-lima" }],
      },
      charges: {
        create: [
          {
            type: "daily",
            description: "Diarias (2 noites) - Quarto 201",
            amount: 720,
            occurredAt: utcDateTime("2026-04-29T16:10:00"),
          },
          {
            type: "service",
            description: "Frigobar",
            amount: 95,
            occurredAt: utcDateTime("2026-04-30T09:25:00"),
          },
        ],
      },
      payments: {
        create: [
          {
            method: "cash",
            amount: 815,
            status: "paid",
            paidAt: utcDateTime("2026-04-30T10:00:00"),
          },
        ],
      },
    },
  });
}

async function seedRoomBlocks({ hotel, branch, rooms }) {
  await prisma.roomBlock.create({
    data: {
      id: "block-203-maintenance",
      roomId: rooms[`${hotel.id}:203`].id,
      startDate: utcDate("2026-04-30"),
      endDate: utcDate("2026-05-04"),
      reason: "Manutencao preventiva do ar-condicionado",
    },
  });

  await prisma.roomBlock.create({
    data: {
      id: "block-branch-12-event",
      roomId: rooms[`${branch.id}:12`].id,
      startDate: utcDate("2026-04-29"),
      endDate: utcDate("2026-05-03"),
      reason: "Bloqueio para comitiva de evento",
    },
  });
}

async function printSummary() {
  const [hotels, users, guests, rooms, reservations, stays, charges, payments, blocks] = await Promise.all([
    prisma.hotel.count(),
    prisma.user.count(),
    prisma.guest.count(),
    prisma.room.count(),
    prisma.reservation.count(),
    prisma.stay.count(),
    prisma.charge.count(),
    prisma.payment.count(),
    prisma.roomBlock.count(),
  ]);

  console.log("Seed OK");
  console.log("Login demo:");
  console.log("  admin@demo.com / 123456");
  console.log("  recepcao@demo.com / 123456");
  console.log("  financeiro@demo.com / 123456");
  console.log("  governanca@demo.com / 123456");
  console.log("  gerente@demo.com / 123456");
  console.log("  super@demo.com / 123456");
  console.log("Dados no banco:");
  console.log(`  Hotels: ${hotels}`);
  console.log(`  Users: ${users}`);
  console.log(`  Guests: ${guests}`);
  console.log(`  Rooms: ${rooms}`);
  console.log(`  Reservations: ${reservations}`);
  console.log(`  Stays: ${stays}`);
  console.log(`  Charges: ${charges}`);
  console.log(`  Payments: ${payments}`);
  console.log(`  RoomBlocks: ${blocks}`);
}

async function main() {
  await resetDemoOperationalData();

  const roles = await seedRoles();
  const { hotel, branch } = await seedHotels();
  await seedUsers({ hotel, branch, roles });
  const categories = await seedCategories({ hotel, branch });
  const rooms = await seedRooms({ hotel, branch, categories });
  await seedGuests({ hotel, branch });
  await seedReservations({ hotel, branch, rooms });
  await seedStays();
  await seedRoomBlocks({ hotel, branch, rooms });
  await printSummary();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
