
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Hotel
 * 
 */
export type Hotel = $Result.DefaultSelection<Prisma.$HotelPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model RoomCategory
 * 
 */
export type RoomCategory = $Result.DefaultSelection<Prisma.$RoomCategoryPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Guest
 * 
 */
export type Guest = $Result.DefaultSelection<Prisma.$GuestPayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>
/**
 * Model ReservationRoom
 * 
 */
export type ReservationRoom = $Result.DefaultSelection<Prisma.$ReservationRoomPayload>
/**
 * Model Stay
 * 
 */
export type Stay = $Result.DefaultSelection<Prisma.$StayPayload>
/**
 * Model StayGuest
 * 
 */
export type StayGuest = $Result.DefaultSelection<Prisma.$StayGuestPayload>
/**
 * Model Charge
 * 
 */
export type Charge = $Result.DefaultSelection<Prisma.$ChargePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model RoomBlock
 * 
 */
export type RoomBlock = $Result.DefaultSelection<Prisma.$RoomBlockPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoomStatus: {
  available: 'available',
  occupied: 'occupied',
  cleaning: 'cleaning',
  maintenance: 'maintenance',
  blocked: 'blocked'
};

export type RoomStatus = (typeof RoomStatus)[keyof typeof RoomStatus]


export const ReservationStatus: {
  pending: 'pending',
  confirmed: 'confirmed',
  checked_in: 'checked_in',
  checked_out: 'checked_out',
  cancelled: 'cancelled',
  no_show: 'no_show'
};

export type ReservationStatus = (typeof ReservationStatus)[keyof typeof ReservationStatus]


export const StayStatus: {
  open: 'open',
  closed: 'closed'
};

export type StayStatus = (typeof StayStatus)[keyof typeof StayStatus]


export const ChargeType: {
  daily: 'daily',
  service: 'service',
  fee: 'fee',
  discount: 'discount'
};

export type ChargeType = (typeof ChargeType)[keyof typeof ChargeType]


export const PaymentMethod: {
  cash: 'cash',
  card: 'card',
  pix: 'pix',
  transfer: 'transfer'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const PaymentStatus: {
  pending: 'pending',
  paid: 'paid',
  failed: 'failed',
  refunded: 'refunded'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type RoomStatus = $Enums.RoomStatus

export const RoomStatus: typeof $Enums.RoomStatus

export type ReservationStatus = $Enums.ReservationStatus

export const ReservationStatus: typeof $Enums.ReservationStatus

export type StayStatus = $Enums.StayStatus

export const StayStatus: typeof $Enums.StayStatus

export type ChargeType = $Enums.ChargeType

export const ChargeType: typeof $Enums.ChargeType

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Hotels
 * const hotels = await prisma.hotel.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Hotels
   * const hotels = await prisma.hotel.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.hotel`: Exposes CRUD operations for the **Hotel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hotels
    * const hotels = await prisma.hotel.findMany()
    * ```
    */
  get hotel(): Prisma.HotelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomCategory`: Exposes CRUD operations for the **RoomCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomCategories
    * const roomCategories = await prisma.roomCategory.findMany()
    * ```
    */
  get roomCategory(): Prisma.RoomCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guest`: Exposes CRUD operations for the **Guest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guests
    * const guests = await prisma.guest.findMany()
    * ```
    */
  get guest(): Prisma.GuestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservationRoom`: Exposes CRUD operations for the **ReservationRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReservationRooms
    * const reservationRooms = await prisma.reservationRoom.findMany()
    * ```
    */
  get reservationRoom(): Prisma.ReservationRoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stay`: Exposes CRUD operations for the **Stay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stays
    * const stays = await prisma.stay.findMany()
    * ```
    */
  get stay(): Prisma.StayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stayGuest`: Exposes CRUD operations for the **StayGuest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StayGuests
    * const stayGuests = await prisma.stayGuest.findMany()
    * ```
    */
  get stayGuest(): Prisma.StayGuestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.charge`: Exposes CRUD operations for the **Charge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Charges
    * const charges = await prisma.charge.findMany()
    * ```
    */
  get charge(): Prisma.ChargeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomBlock`: Exposes CRUD operations for the **RoomBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomBlocks
    * const roomBlocks = await prisma.roomBlock.findMany()
    * ```
    */
  get roomBlock(): Prisma.RoomBlockDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Hotel: 'Hotel',
    User: 'User',
    Role: 'Role',
    UserRole: 'UserRole',
    RoomCategory: 'RoomCategory',
    Room: 'Room',
    Guest: 'Guest',
    Reservation: 'Reservation',
    ReservationRoom: 'ReservationRoom',
    Stay: 'Stay',
    StayGuest: 'StayGuest',
    Charge: 'Charge',
    Payment: 'Payment',
    RoomBlock: 'RoomBlock'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "hotel" | "user" | "role" | "userRole" | "roomCategory" | "room" | "guest" | "reservation" | "reservationRoom" | "stay" | "stayGuest" | "charge" | "payment" | "roomBlock"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Hotel: {
        payload: Prisma.$HotelPayload<ExtArgs>
        fields: Prisma.HotelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HotelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HotelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          findFirst: {
            args: Prisma.HotelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HotelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          findMany: {
            args: Prisma.HotelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>[]
          }
          create: {
            args: Prisma.HotelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          createMany: {
            args: Prisma.HotelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HotelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>[]
          }
          delete: {
            args: Prisma.HotelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          update: {
            args: Prisma.HotelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          deleteMany: {
            args: Prisma.HotelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HotelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HotelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>[]
          }
          upsert: {
            args: Prisma.HotelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          aggregate: {
            args: Prisma.HotelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotel>
          }
          groupBy: {
            args: Prisma.HotelGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotelGroupByOutputType>[]
          }
          count: {
            args: Prisma.HotelCountArgs<ExtArgs>
            result: $Utils.Optional<HotelCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      RoomCategory: {
        payload: Prisma.$RoomCategoryPayload<ExtArgs>
        fields: Prisma.RoomCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomCategoryPayload>
          }
          findFirst: {
            args: Prisma.RoomCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomCategoryPayload>
          }
          findMany: {
            args: Prisma.RoomCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomCategoryPayload>[]
          }
          create: {
            args: Prisma.RoomCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomCategoryPayload>
          }
          createMany: {
            args: Prisma.RoomCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomCategoryPayload>[]
          }
          delete: {
            args: Prisma.RoomCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomCategoryPayload>
          }
          update: {
            args: Prisma.RoomCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomCategoryPayload>
          }
          deleteMany: {
            args: Prisma.RoomCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomCategoryPayload>[]
          }
          upsert: {
            args: Prisma.RoomCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomCategoryPayload>
          }
          aggregate: {
            args: Prisma.RoomCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomCategory>
          }
          groupBy: {
            args: Prisma.RoomCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCategoryCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Guest: {
        payload: Prisma.$GuestPayload<ExtArgs>
        fields: Prisma.GuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          findFirst: {
            args: Prisma.GuestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          findMany: {
            args: Prisma.GuestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          create: {
            args: Prisma.GuestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          createMany: {
            args: Prisma.GuestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          delete: {
            args: Prisma.GuestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          update: {
            args: Prisma.GuestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          deleteMany: {
            args: Prisma.GuestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          upsert: {
            args: Prisma.GuestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          aggregate: {
            args: Prisma.GuestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuest>
          }
          groupBy: {
            args: Prisma.GuestGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuestCountArgs<ExtArgs>
            result: $Utils.Optional<GuestCountAggregateOutputType> | number
          }
        }
      }
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
      ReservationRoom: {
        payload: Prisma.$ReservationRoomPayload<ExtArgs>
        fields: Prisma.ReservationRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationRoomPayload>
          }
          findFirst: {
            args: Prisma.ReservationRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationRoomPayload>
          }
          findMany: {
            args: Prisma.ReservationRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationRoomPayload>[]
          }
          create: {
            args: Prisma.ReservationRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationRoomPayload>
          }
          createMany: {
            args: Prisma.ReservationRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationRoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationRoomPayload>[]
          }
          delete: {
            args: Prisma.ReservationRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationRoomPayload>
          }
          update: {
            args: Prisma.ReservationRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationRoomPayload>
          }
          deleteMany: {
            args: Prisma.ReservationRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservationRoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationRoomPayload>[]
          }
          upsert: {
            args: Prisma.ReservationRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationRoomPayload>
          }
          aggregate: {
            args: Prisma.ReservationRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservationRoom>
          }
          groupBy: {
            args: Prisma.ReservationRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationRoomCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationRoomCountAggregateOutputType> | number
          }
        }
      }
      Stay: {
        payload: Prisma.$StayPayload<ExtArgs>
        fields: Prisma.StayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StayPayload>
          }
          findFirst: {
            args: Prisma.StayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StayPayload>
          }
          findMany: {
            args: Prisma.StayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StayPayload>[]
          }
          create: {
            args: Prisma.StayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StayPayload>
          }
          createMany: {
            args: Prisma.StayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StayPayload>[]
          }
          delete: {
            args: Prisma.StayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StayPayload>
          }
          update: {
            args: Prisma.StayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StayPayload>
          }
          deleteMany: {
            args: Prisma.StayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StayPayload>[]
          }
          upsert: {
            args: Prisma.StayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StayPayload>
          }
          aggregate: {
            args: Prisma.StayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStay>
          }
          groupBy: {
            args: Prisma.StayGroupByArgs<ExtArgs>
            result: $Utils.Optional<StayGroupByOutputType>[]
          }
          count: {
            args: Prisma.StayCountArgs<ExtArgs>
            result: $Utils.Optional<StayCountAggregateOutputType> | number
          }
        }
      }
      StayGuest: {
        payload: Prisma.$StayGuestPayload<ExtArgs>
        fields: Prisma.StayGuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StayGuestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StayGuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StayGuestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StayGuestPayload>
          }
          findFirst: {
            args: Prisma.StayGuestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StayGuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StayGuestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StayGuestPayload>
          }
          findMany: {
            args: Prisma.StayGuestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StayGuestPayload>[]
          }
          create: {
            args: Prisma.StayGuestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StayGuestPayload>
          }
          createMany: {
            args: Prisma.StayGuestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StayGuestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StayGuestPayload>[]
          }
          delete: {
            args: Prisma.StayGuestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StayGuestPayload>
          }
          update: {
            args: Prisma.StayGuestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StayGuestPayload>
          }
          deleteMany: {
            args: Prisma.StayGuestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StayGuestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StayGuestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StayGuestPayload>[]
          }
          upsert: {
            args: Prisma.StayGuestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StayGuestPayload>
          }
          aggregate: {
            args: Prisma.StayGuestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStayGuest>
          }
          groupBy: {
            args: Prisma.StayGuestGroupByArgs<ExtArgs>
            result: $Utils.Optional<StayGuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.StayGuestCountArgs<ExtArgs>
            result: $Utils.Optional<StayGuestCountAggregateOutputType> | number
          }
        }
      }
      Charge: {
        payload: Prisma.$ChargePayload<ExtArgs>
        fields: Prisma.ChargeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChargeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChargeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargePayload>
          }
          findFirst: {
            args: Prisma.ChargeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChargeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargePayload>
          }
          findMany: {
            args: Prisma.ChargeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargePayload>[]
          }
          create: {
            args: Prisma.ChargeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargePayload>
          }
          createMany: {
            args: Prisma.ChargeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChargeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargePayload>[]
          }
          delete: {
            args: Prisma.ChargeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargePayload>
          }
          update: {
            args: Prisma.ChargeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargePayload>
          }
          deleteMany: {
            args: Prisma.ChargeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChargeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChargeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargePayload>[]
          }
          upsert: {
            args: Prisma.ChargeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargePayload>
          }
          aggregate: {
            args: Prisma.ChargeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharge>
          }
          groupBy: {
            args: Prisma.ChargeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChargeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChargeCountArgs<ExtArgs>
            result: $Utils.Optional<ChargeCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      RoomBlock: {
        payload: Prisma.$RoomBlockPayload<ExtArgs>
        fields: Prisma.RoomBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomBlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomBlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomBlockPayload>
          }
          findFirst: {
            args: Prisma.RoomBlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomBlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomBlockPayload>
          }
          findMany: {
            args: Prisma.RoomBlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomBlockPayload>[]
          }
          create: {
            args: Prisma.RoomBlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomBlockPayload>
          }
          createMany: {
            args: Prisma.RoomBlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomBlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomBlockPayload>[]
          }
          delete: {
            args: Prisma.RoomBlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomBlockPayload>
          }
          update: {
            args: Prisma.RoomBlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomBlockPayload>
          }
          deleteMany: {
            args: Prisma.RoomBlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomBlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomBlockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomBlockPayload>[]
          }
          upsert: {
            args: Prisma.RoomBlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomBlockPayload>
          }
          aggregate: {
            args: Prisma.RoomBlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomBlock>
          }
          groupBy: {
            args: Prisma.RoomBlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomBlockCountArgs<ExtArgs>
            result: $Utils.Optional<RoomBlockCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    hotel?: HotelOmit
    user?: UserOmit
    role?: RoleOmit
    userRole?: UserRoleOmit
    roomCategory?: RoomCategoryOmit
    room?: RoomOmit
    guest?: GuestOmit
    reservation?: ReservationOmit
    reservationRoom?: ReservationRoomOmit
    stay?: StayOmit
    stayGuest?: StayGuestOmit
    charge?: ChargeOmit
    payment?: PaymentOmit
    roomBlock?: RoomBlockOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type HotelCountOutputType
   */

  export type HotelCountOutputType = {
    users: number
    guests: number
    roomCategories: number
    rooms: number
    reservations: number
  }

  export type HotelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | HotelCountOutputTypeCountUsersArgs
    guests?: boolean | HotelCountOutputTypeCountGuestsArgs
    roomCategories?: boolean | HotelCountOutputTypeCountRoomCategoriesArgs
    rooms?: boolean | HotelCountOutputTypeCountRoomsArgs
    reservations?: boolean | HotelCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelCountOutputType
     */
    select?: HotelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountGuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestWhereInput
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountRoomCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomCategoryWhereInput
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userRoles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRoles?: boolean | UserCountOutputTypeCountUserRolesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    userRoles: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRoles?: boolean | RoleCountOutputTypeCountUserRolesArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }


  /**
   * Count Type RoomCategoryCountOutputType
   */

  export type RoomCategoryCountOutputType = {
    rooms: number
  }

  export type RoomCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | RoomCategoryCountOutputTypeCountRoomsArgs
  }

  // Custom InputTypes
  /**
   * RoomCategoryCountOutputType without action
   */
  export type RoomCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategoryCountOutputType
     */
    select?: RoomCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCategoryCountOutputType without action
   */
  export type RoomCategoryCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    reservationRooms: number
    blocks: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservationRooms?: boolean | RoomCountOutputTypeCountReservationRoomsArgs
    blocks?: boolean | RoomCountOutputTypeCountBlocksArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountReservationRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationRoomWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomBlockWhereInput
  }


  /**
   * Count Type GuestCountOutputType
   */

  export type GuestCountOutputType = {
    reservations: number
    stayGuests: number
  }

  export type GuestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | GuestCountOutputTypeCountReservationsArgs
    stayGuests?: boolean | GuestCountOutputTypeCountStayGuestsArgs
  }

  // Custom InputTypes
  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestCountOutputType
     */
    select?: GuestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeCountStayGuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StayGuestWhereInput
  }


  /**
   * Count Type ReservationCountOutputType
   */

  export type ReservationCountOutputType = {
    rooms: number
  }

  export type ReservationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | ReservationCountOutputTypeCountRoomsArgs
  }

  // Custom InputTypes
  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationCountOutputType
     */
    select?: ReservationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationRoomWhereInput
  }


  /**
   * Count Type StayCountOutputType
   */

  export type StayCountOutputType = {
    charges: number
    payments: number
    stayGuests: number
  }

  export type StayCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    charges?: boolean | StayCountOutputTypeCountChargesArgs
    payments?: boolean | StayCountOutputTypeCountPaymentsArgs
    stayGuests?: boolean | StayCountOutputTypeCountStayGuestsArgs
  }

  // Custom InputTypes
  /**
   * StayCountOutputType without action
   */
  export type StayCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StayCountOutputType
     */
    select?: StayCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StayCountOutputType without action
   */
  export type StayCountOutputTypeCountChargesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChargeWhereInput
  }

  /**
   * StayCountOutputType without action
   */
  export type StayCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * StayCountOutputType without action
   */
  export type StayCountOutputTypeCountStayGuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StayGuestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Hotel
   */

  export type AggregateHotel = {
    _count: HotelCountAggregateOutputType | null
    _min: HotelMinAggregateOutputType | null
    _max: HotelMaxAggregateOutputType | null
  }

  export type HotelMinAggregateOutputType = {
    id: string | null
    name: string | null
    city: string | null
    createdAt: Date | null
  }

  export type HotelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    city: string | null
    createdAt: Date | null
  }

  export type HotelCountAggregateOutputType = {
    id: number
    name: number
    city: number
    createdAt: number
    _all: number
  }


  export type HotelMinAggregateInputType = {
    id?: true
    name?: true
    city?: true
    createdAt?: true
  }

  export type HotelMaxAggregateInputType = {
    id?: true
    name?: true
    city?: true
    createdAt?: true
  }

  export type HotelCountAggregateInputType = {
    id?: true
    name?: true
    city?: true
    createdAt?: true
    _all?: true
  }

  export type HotelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotel to aggregate.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hotels
    **/
    _count?: true | HotelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotelMaxAggregateInputType
  }

  export type GetHotelAggregateType<T extends HotelAggregateArgs> = {
        [P in keyof T & keyof AggregateHotel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotel[P]>
      : GetScalarType<T[P], AggregateHotel[P]>
  }




  export type HotelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelWhereInput
    orderBy?: HotelOrderByWithAggregationInput | HotelOrderByWithAggregationInput[]
    by: HotelScalarFieldEnum[] | HotelScalarFieldEnum
    having?: HotelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotelCountAggregateInputType | true
    _min?: HotelMinAggregateInputType
    _max?: HotelMaxAggregateInputType
  }

  export type HotelGroupByOutputType = {
    id: string
    name: string
    city: string | null
    createdAt: Date
    _count: HotelCountAggregateOutputType | null
    _min: HotelMinAggregateOutputType | null
    _max: HotelMaxAggregateOutputType | null
  }

  type GetHotelGroupByPayload<T extends HotelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotelGroupByOutputType[P]>
            : GetScalarType<T[P], HotelGroupByOutputType[P]>
        }
      >
    >


  export type HotelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    createdAt?: boolean
    users?: boolean | Hotel$usersArgs<ExtArgs>
    guests?: boolean | Hotel$guestsArgs<ExtArgs>
    roomCategories?: boolean | Hotel$roomCategoriesArgs<ExtArgs>
    rooms?: boolean | Hotel$roomsArgs<ExtArgs>
    reservations?: boolean | Hotel$reservationsArgs<ExtArgs>
    _count?: boolean | HotelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotel"]>

  export type HotelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["hotel"]>

  export type HotelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["hotel"]>

  export type HotelSelectScalar = {
    id?: boolean
    name?: boolean
    city?: boolean
    createdAt?: boolean
  }

  export type HotelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "city" | "createdAt", ExtArgs["result"]["hotel"]>
  export type HotelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Hotel$usersArgs<ExtArgs>
    guests?: boolean | Hotel$guestsArgs<ExtArgs>
    roomCategories?: boolean | Hotel$roomCategoriesArgs<ExtArgs>
    rooms?: boolean | Hotel$roomsArgs<ExtArgs>
    reservations?: boolean | Hotel$reservationsArgs<ExtArgs>
    _count?: boolean | HotelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HotelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HotelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HotelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hotel"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      guests: Prisma.$GuestPayload<ExtArgs>[]
      roomCategories: Prisma.$RoomCategoryPayload<ExtArgs>[]
      rooms: Prisma.$RoomPayload<ExtArgs>[]
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      city: string | null
      createdAt: Date
    }, ExtArgs["result"]["hotel"]>
    composites: {}
  }

  type HotelGetPayload<S extends boolean | null | undefined | HotelDefaultArgs> = $Result.GetResult<Prisma.$HotelPayload, S>

  type HotelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HotelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HotelCountAggregateInputType | true
    }

  export interface HotelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hotel'], meta: { name: 'Hotel' } }
    /**
     * Find zero or one Hotel that matches the filter.
     * @param {HotelFindUniqueArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HotelFindUniqueArgs>(args: SelectSubset<T, HotelFindUniqueArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hotel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HotelFindUniqueOrThrowArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HotelFindUniqueOrThrowArgs>(args: SelectSubset<T, HotelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindFirstArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HotelFindFirstArgs>(args?: SelectSubset<T, HotelFindFirstArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindFirstOrThrowArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HotelFindFirstOrThrowArgs>(args?: SelectSubset<T, HotelFindFirstOrThrowArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hotels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hotels
     * const hotels = await prisma.hotel.findMany()
     * 
     * // Get first 10 Hotels
     * const hotels = await prisma.hotel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hotelWithIdOnly = await prisma.hotel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HotelFindManyArgs>(args?: SelectSubset<T, HotelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hotel.
     * @param {HotelCreateArgs} args - Arguments to create a Hotel.
     * @example
     * // Create one Hotel
     * const Hotel = await prisma.hotel.create({
     *   data: {
     *     // ... data to create a Hotel
     *   }
     * })
     * 
     */
    create<T extends HotelCreateArgs>(args: SelectSubset<T, HotelCreateArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hotels.
     * @param {HotelCreateManyArgs} args - Arguments to create many Hotels.
     * @example
     * // Create many Hotels
     * const hotel = await prisma.hotel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HotelCreateManyArgs>(args?: SelectSubset<T, HotelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hotels and returns the data saved in the database.
     * @param {HotelCreateManyAndReturnArgs} args - Arguments to create many Hotels.
     * @example
     * // Create many Hotels
     * const hotel = await prisma.hotel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hotels and only return the `id`
     * const hotelWithIdOnly = await prisma.hotel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HotelCreateManyAndReturnArgs>(args?: SelectSubset<T, HotelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hotel.
     * @param {HotelDeleteArgs} args - Arguments to delete one Hotel.
     * @example
     * // Delete one Hotel
     * const Hotel = await prisma.hotel.delete({
     *   where: {
     *     // ... filter to delete one Hotel
     *   }
     * })
     * 
     */
    delete<T extends HotelDeleteArgs>(args: SelectSubset<T, HotelDeleteArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hotel.
     * @param {HotelUpdateArgs} args - Arguments to update one Hotel.
     * @example
     * // Update one Hotel
     * const hotel = await prisma.hotel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HotelUpdateArgs>(args: SelectSubset<T, HotelUpdateArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hotels.
     * @param {HotelDeleteManyArgs} args - Arguments to filter Hotels to delete.
     * @example
     * // Delete a few Hotels
     * const { count } = await prisma.hotel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HotelDeleteManyArgs>(args?: SelectSubset<T, HotelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hotels
     * const hotel = await prisma.hotel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HotelUpdateManyArgs>(args: SelectSubset<T, HotelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotels and returns the data updated in the database.
     * @param {HotelUpdateManyAndReturnArgs} args - Arguments to update many Hotels.
     * @example
     * // Update many Hotels
     * const hotel = await prisma.hotel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hotels and only return the `id`
     * const hotelWithIdOnly = await prisma.hotel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HotelUpdateManyAndReturnArgs>(args: SelectSubset<T, HotelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hotel.
     * @param {HotelUpsertArgs} args - Arguments to update or create a Hotel.
     * @example
     * // Update or create a Hotel
     * const hotel = await prisma.hotel.upsert({
     *   create: {
     *     // ... data to create a Hotel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hotel we want to update
     *   }
     * })
     */
    upsert<T extends HotelUpsertArgs>(args: SelectSubset<T, HotelUpsertArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelCountArgs} args - Arguments to filter Hotels to count.
     * @example
     * // Count the number of Hotels
     * const count = await prisma.hotel.count({
     *   where: {
     *     // ... the filter for the Hotels we want to count
     *   }
     * })
    **/
    count<T extends HotelCountArgs>(
      args?: Subset<T, HotelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hotel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HotelAggregateArgs>(args: Subset<T, HotelAggregateArgs>): Prisma.PrismaPromise<GetHotelAggregateType<T>>

    /**
     * Group by Hotel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HotelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotelGroupByArgs['orderBy'] }
        : { orderBy?: HotelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HotelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hotel model
   */
  readonly fields: HotelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hotel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HotelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Hotel$usersArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    guests<T extends Hotel$guestsArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$guestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roomCategories<T extends Hotel$roomCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$roomCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rooms<T extends Hotel$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservations<T extends Hotel$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Hotel model
   */
  interface HotelFieldRefs {
    readonly id: FieldRef<"Hotel", 'String'>
    readonly name: FieldRef<"Hotel", 'String'>
    readonly city: FieldRef<"Hotel", 'String'>
    readonly createdAt: FieldRef<"Hotel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hotel findUnique
   */
  export type HotelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel findUniqueOrThrow
   */
  export type HotelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel findFirst
   */
  export type HotelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel findFirstOrThrow
   */
  export type HotelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel findMany
   */
  export type HotelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotels to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel create
   */
  export type HotelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The data needed to create a Hotel.
     */
    data: XOR<HotelCreateInput, HotelUncheckedCreateInput>
  }

  /**
   * Hotel createMany
   */
  export type HotelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hotels.
     */
    data: HotelCreateManyInput | HotelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hotel createManyAndReturn
   */
  export type HotelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * The data used to create many Hotels.
     */
    data: HotelCreateManyInput | HotelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hotel update
   */
  export type HotelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The data needed to update a Hotel.
     */
    data: XOR<HotelUpdateInput, HotelUncheckedUpdateInput>
    /**
     * Choose, which Hotel to update.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel updateMany
   */
  export type HotelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hotels.
     */
    data: XOR<HotelUpdateManyMutationInput, HotelUncheckedUpdateManyInput>
    /**
     * Filter which Hotels to update
     */
    where?: HotelWhereInput
    /**
     * Limit how many Hotels to update.
     */
    limit?: number
  }

  /**
   * Hotel updateManyAndReturn
   */
  export type HotelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * The data used to update Hotels.
     */
    data: XOR<HotelUpdateManyMutationInput, HotelUncheckedUpdateManyInput>
    /**
     * Filter which Hotels to update
     */
    where?: HotelWhereInput
    /**
     * Limit how many Hotels to update.
     */
    limit?: number
  }

  /**
   * Hotel upsert
   */
  export type HotelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The filter to search for the Hotel to update in case it exists.
     */
    where: HotelWhereUniqueInput
    /**
     * In case the Hotel found by the `where` argument doesn't exist, create a new Hotel with this data.
     */
    create: XOR<HotelCreateInput, HotelUncheckedCreateInput>
    /**
     * In case the Hotel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HotelUpdateInput, HotelUncheckedUpdateInput>
  }

  /**
   * Hotel delete
   */
  export type HotelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter which Hotel to delete.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel deleteMany
   */
  export type HotelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotels to delete
     */
    where?: HotelWhereInput
    /**
     * Limit how many Hotels to delete.
     */
    limit?: number
  }

  /**
   * Hotel.users
   */
  export type Hotel$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Hotel.guests
   */
  export type Hotel$guestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    where?: GuestWhereInput
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    cursor?: GuestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Hotel.roomCategories
   */
  export type Hotel$roomCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategory
     */
    select?: RoomCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomCategory
     */
    omit?: RoomCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomCategoryInclude<ExtArgs> | null
    where?: RoomCategoryWhereInput
    orderBy?: RoomCategoryOrderByWithRelationInput | RoomCategoryOrderByWithRelationInput[]
    cursor?: RoomCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomCategoryScalarFieldEnum | RoomCategoryScalarFieldEnum[]
  }

  /**
   * Hotel.rooms
   */
  export type Hotel$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Hotel.reservations
   */
  export type Hotel$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Hotel without action
   */
  export type HotelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    hotelId: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLoginAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    hotelId: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLoginAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    hotelId: number
    name: number
    email: number
    passwordHash: number
    isActive: number
    createdAt: number
    updatedAt: number
    lastLoginAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    hotelId?: true
    name?: true
    email?: true
    passwordHash?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    hotelId?: true
    name?: true
    email?: true
    passwordHash?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    hotelId?: true
    name?: true
    email?: true
    passwordHash?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    hotelId: string | null
    name: string
    email: string
    passwordHash: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    lastLoginAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
    hotel?: boolean | User$hotelArgs<ExtArgs>
    userRoles?: boolean | User$userRolesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
    hotel?: boolean | User$hotelArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
    hotel?: boolean | User$hotelArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    hotelId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hotelId" | "name" | "email" | "passwordHash" | "isActive" | "createdAt" | "updatedAt" | "lastLoginAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | User$hotelArgs<ExtArgs>
    userRoles?: boolean | User$userRolesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | User$hotelArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | User$hotelArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      hotel: Prisma.$HotelPayload<ExtArgs> | null
      userRoles: Prisma.$UserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hotelId: string | null
      name: string
      email: string
      passwordHash: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      lastLoginAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hotel<T extends User$hotelArgs<ExtArgs> = {}>(args?: Subset<T, User$hotelArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    userRoles<T extends User$userRolesArgs<ExtArgs> = {}>(args?: Subset<T, User$userRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly hotelId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.hotel
   */
  export type User$hotelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    where?: HotelWhereInput
  }

  /**
   * User.userRoles
   */
  export type User$userRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    userRoles?: boolean | Role$userRolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRoles?: boolean | Role$userRolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      userRoles: Prisma.$UserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userRoles<T extends Role$userRolesArgs<ExtArgs> = {}>(args?: Subset<T, Role$userRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.userRoles
   */
  export type Role$userRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleMinAggregateOutputType = {
    userId: string | null
    roleId: string | null
  }

  export type UserRoleMaxAggregateOutputType = {
    userId: string | null
    roleId: string | null
  }

  export type UserRoleCountAggregateOutputType = {
    userId: number
    roleId: number
    _all: number
  }


  export type UserRoleMinAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserRoleMaxAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserRoleCountAggregateInputType = {
    userId?: true
    roleId?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    userId: string
    roleId: string
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectScalar = {
    userId?: boolean
    roleId?: boolean
  }

  export type UserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "roleId", ExtArgs["result"]["userRole"]>
  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      roleId: string
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoles and returns the data saved in the database.
     * @param {UserRoleCreateManyAndReturnArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoles and only return the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles and returns the data updated in the database.
     * @param {UserRoleUpdateManyAndReturnArgs} args - Arguments to update many UserRoles.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRoles and only return the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRole model
   */
  interface UserRoleFieldRefs {
    readonly userId: FieldRef<"UserRole", 'String'>
    readonly roleId: FieldRef<"UserRole", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole createManyAndReturn
   */
  export type UserRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole updateManyAndReturn
   */
  export type UserRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to delete.
     */
    limit?: number
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
  }


  /**
   * Model RoomCategory
   */

  export type AggregateRoomCategory = {
    _count: RoomCategoryCountAggregateOutputType | null
    _avg: RoomCategoryAvgAggregateOutputType | null
    _sum: RoomCategorySumAggregateOutputType | null
    _min: RoomCategoryMinAggregateOutputType | null
    _max: RoomCategoryMaxAggregateOutputType | null
  }

  export type RoomCategoryAvgAggregateOutputType = {
    capacity: number | null
    basePrice: Decimal | null
  }

  export type RoomCategorySumAggregateOutputType = {
    capacity: number | null
    basePrice: Decimal | null
  }

  export type RoomCategoryMinAggregateOutputType = {
    id: string | null
    hotelId: string | null
    name: string | null
    capacity: number | null
    basePrice: Decimal | null
    createdAt: Date | null
  }

  export type RoomCategoryMaxAggregateOutputType = {
    id: string | null
    hotelId: string | null
    name: string | null
    capacity: number | null
    basePrice: Decimal | null
    createdAt: Date | null
  }

  export type RoomCategoryCountAggregateOutputType = {
    id: number
    hotelId: number
    name: number
    capacity: number
    basePrice: number
    createdAt: number
    _all: number
  }


  export type RoomCategoryAvgAggregateInputType = {
    capacity?: true
    basePrice?: true
  }

  export type RoomCategorySumAggregateInputType = {
    capacity?: true
    basePrice?: true
  }

  export type RoomCategoryMinAggregateInputType = {
    id?: true
    hotelId?: true
    name?: true
    capacity?: true
    basePrice?: true
    createdAt?: true
  }

  export type RoomCategoryMaxAggregateInputType = {
    id?: true
    hotelId?: true
    name?: true
    capacity?: true
    basePrice?: true
    createdAt?: true
  }

  export type RoomCategoryCountAggregateInputType = {
    id?: true
    hotelId?: true
    name?: true
    capacity?: true
    basePrice?: true
    createdAt?: true
    _all?: true
  }

  export type RoomCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomCategory to aggregate.
     */
    where?: RoomCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomCategories to fetch.
     */
    orderBy?: RoomCategoryOrderByWithRelationInput | RoomCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomCategories
    **/
    _count?: true | RoomCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomCategoryMaxAggregateInputType
  }

  export type GetRoomCategoryAggregateType<T extends RoomCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomCategory[P]>
      : GetScalarType<T[P], AggregateRoomCategory[P]>
  }




  export type RoomCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomCategoryWhereInput
    orderBy?: RoomCategoryOrderByWithAggregationInput | RoomCategoryOrderByWithAggregationInput[]
    by: RoomCategoryScalarFieldEnum[] | RoomCategoryScalarFieldEnum
    having?: RoomCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCategoryCountAggregateInputType | true
    _avg?: RoomCategoryAvgAggregateInputType
    _sum?: RoomCategorySumAggregateInputType
    _min?: RoomCategoryMinAggregateInputType
    _max?: RoomCategoryMaxAggregateInputType
  }

  export type RoomCategoryGroupByOutputType = {
    id: string
    hotelId: string
    name: string
    capacity: number
    basePrice: Decimal
    createdAt: Date
    _count: RoomCategoryCountAggregateOutputType | null
    _avg: RoomCategoryAvgAggregateOutputType | null
    _sum: RoomCategorySumAggregateOutputType | null
    _min: RoomCategoryMinAggregateOutputType | null
    _max: RoomCategoryMaxAggregateOutputType | null
  }

  type GetRoomCategoryGroupByPayload<T extends RoomCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], RoomCategoryGroupByOutputType[P]>
        }
      >
    >


  export type RoomCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    name?: boolean
    capacity?: boolean
    basePrice?: boolean
    createdAt?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    rooms?: boolean | RoomCategory$roomsArgs<ExtArgs>
    _count?: boolean | RoomCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomCategory"]>

  export type RoomCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    name?: boolean
    capacity?: boolean
    basePrice?: boolean
    createdAt?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomCategory"]>

  export type RoomCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    name?: boolean
    capacity?: boolean
    basePrice?: boolean
    createdAt?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomCategory"]>

  export type RoomCategorySelectScalar = {
    id?: boolean
    hotelId?: boolean
    name?: boolean
    capacity?: boolean
    basePrice?: boolean
    createdAt?: boolean
  }

  export type RoomCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hotelId" | "name" | "capacity" | "basePrice" | "createdAt", ExtArgs["result"]["roomCategory"]>
  export type RoomCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    rooms?: boolean | RoomCategory$roomsArgs<ExtArgs>
    _count?: boolean | RoomCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }
  export type RoomCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }

  export type $RoomCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomCategory"
    objects: {
      hotel: Prisma.$HotelPayload<ExtArgs>
      rooms: Prisma.$RoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hotelId: string
      name: string
      capacity: number
      basePrice: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["roomCategory"]>
    composites: {}
  }

  type RoomCategoryGetPayload<S extends boolean | null | undefined | RoomCategoryDefaultArgs> = $Result.GetResult<Prisma.$RoomCategoryPayload, S>

  type RoomCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCategoryCountAggregateInputType | true
    }

  export interface RoomCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomCategory'], meta: { name: 'RoomCategory' } }
    /**
     * Find zero or one RoomCategory that matches the filter.
     * @param {RoomCategoryFindUniqueArgs} args - Arguments to find a RoomCategory
     * @example
     * // Get one RoomCategory
     * const roomCategory = await prisma.roomCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomCategoryFindUniqueArgs>(args: SelectSubset<T, RoomCategoryFindUniqueArgs<ExtArgs>>): Prisma__RoomCategoryClient<$Result.GetResult<Prisma.$RoomCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomCategoryFindUniqueOrThrowArgs} args - Arguments to find a RoomCategory
     * @example
     * // Get one RoomCategory
     * const roomCategory = await prisma.roomCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomCategoryClient<$Result.GetResult<Prisma.$RoomCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCategoryFindFirstArgs} args - Arguments to find a RoomCategory
     * @example
     * // Get one RoomCategory
     * const roomCategory = await prisma.roomCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomCategoryFindFirstArgs>(args?: SelectSubset<T, RoomCategoryFindFirstArgs<ExtArgs>>): Prisma__RoomCategoryClient<$Result.GetResult<Prisma.$RoomCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCategoryFindFirstOrThrowArgs} args - Arguments to find a RoomCategory
     * @example
     * // Get one RoomCategory
     * const roomCategory = await prisma.roomCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomCategoryClient<$Result.GetResult<Prisma.$RoomCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomCategories
     * const roomCategories = await prisma.roomCategory.findMany()
     * 
     * // Get first 10 RoomCategories
     * const roomCategories = await prisma.roomCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomCategoryWithIdOnly = await prisma.roomCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomCategoryFindManyArgs>(args?: SelectSubset<T, RoomCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomCategory.
     * @param {RoomCategoryCreateArgs} args - Arguments to create a RoomCategory.
     * @example
     * // Create one RoomCategory
     * const RoomCategory = await prisma.roomCategory.create({
     *   data: {
     *     // ... data to create a RoomCategory
     *   }
     * })
     * 
     */
    create<T extends RoomCategoryCreateArgs>(args: SelectSubset<T, RoomCategoryCreateArgs<ExtArgs>>): Prisma__RoomCategoryClient<$Result.GetResult<Prisma.$RoomCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomCategories.
     * @param {RoomCategoryCreateManyArgs} args - Arguments to create many RoomCategories.
     * @example
     * // Create many RoomCategories
     * const roomCategory = await prisma.roomCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCategoryCreateManyArgs>(args?: SelectSubset<T, RoomCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomCategories and returns the data saved in the database.
     * @param {RoomCategoryCreateManyAndReturnArgs} args - Arguments to create many RoomCategories.
     * @example
     * // Create many RoomCategories
     * const roomCategory = await prisma.roomCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomCategories and only return the `id`
     * const roomCategoryWithIdOnly = await prisma.roomCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomCategory.
     * @param {RoomCategoryDeleteArgs} args - Arguments to delete one RoomCategory.
     * @example
     * // Delete one RoomCategory
     * const RoomCategory = await prisma.roomCategory.delete({
     *   where: {
     *     // ... filter to delete one RoomCategory
     *   }
     * })
     * 
     */
    delete<T extends RoomCategoryDeleteArgs>(args: SelectSubset<T, RoomCategoryDeleteArgs<ExtArgs>>): Prisma__RoomCategoryClient<$Result.GetResult<Prisma.$RoomCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomCategory.
     * @param {RoomCategoryUpdateArgs} args - Arguments to update one RoomCategory.
     * @example
     * // Update one RoomCategory
     * const roomCategory = await prisma.roomCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomCategoryUpdateArgs>(args: SelectSubset<T, RoomCategoryUpdateArgs<ExtArgs>>): Prisma__RoomCategoryClient<$Result.GetResult<Prisma.$RoomCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomCategories.
     * @param {RoomCategoryDeleteManyArgs} args - Arguments to filter RoomCategories to delete.
     * @example
     * // Delete a few RoomCategories
     * const { count } = await prisma.roomCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomCategoryDeleteManyArgs>(args?: SelectSubset<T, RoomCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomCategories
     * const roomCategory = await prisma.roomCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomCategoryUpdateManyArgs>(args: SelectSubset<T, RoomCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomCategories and returns the data updated in the database.
     * @param {RoomCategoryUpdateManyAndReturnArgs} args - Arguments to update many RoomCategories.
     * @example
     * // Update many RoomCategories
     * const roomCategory = await prisma.roomCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomCategories and only return the `id`
     * const roomCategoryWithIdOnly = await prisma.roomCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomCategory.
     * @param {RoomCategoryUpsertArgs} args - Arguments to update or create a RoomCategory.
     * @example
     * // Update or create a RoomCategory
     * const roomCategory = await prisma.roomCategory.upsert({
     *   create: {
     *     // ... data to create a RoomCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomCategory we want to update
     *   }
     * })
     */
    upsert<T extends RoomCategoryUpsertArgs>(args: SelectSubset<T, RoomCategoryUpsertArgs<ExtArgs>>): Prisma__RoomCategoryClient<$Result.GetResult<Prisma.$RoomCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCategoryCountArgs} args - Arguments to filter RoomCategories to count.
     * @example
     * // Count the number of RoomCategories
     * const count = await prisma.roomCategory.count({
     *   where: {
     *     // ... the filter for the RoomCategories we want to count
     *   }
     * })
    **/
    count<T extends RoomCategoryCountArgs>(
      args?: Subset<T, RoomCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomCategoryAggregateArgs>(args: Subset<T, RoomCategoryAggregateArgs>): Prisma.PrismaPromise<GetRoomCategoryAggregateType<T>>

    /**
     * Group by RoomCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomCategoryGroupByArgs['orderBy'] }
        : { orderBy?: RoomCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomCategory model
   */
  readonly fields: RoomCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rooms<T extends RoomCategory$roomsArgs<ExtArgs> = {}>(args?: Subset<T, RoomCategory$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomCategory model
   */
  interface RoomCategoryFieldRefs {
    readonly id: FieldRef<"RoomCategory", 'String'>
    readonly hotelId: FieldRef<"RoomCategory", 'String'>
    readonly name: FieldRef<"RoomCategory", 'String'>
    readonly capacity: FieldRef<"RoomCategory", 'Int'>
    readonly basePrice: FieldRef<"RoomCategory", 'Decimal'>
    readonly createdAt: FieldRef<"RoomCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomCategory findUnique
   */
  export type RoomCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategory
     */
    select?: RoomCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomCategory
     */
    omit?: RoomCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomCategoryInclude<ExtArgs> | null
    /**
     * Filter, which RoomCategory to fetch.
     */
    where: RoomCategoryWhereUniqueInput
  }

  /**
   * RoomCategory findUniqueOrThrow
   */
  export type RoomCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategory
     */
    select?: RoomCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomCategory
     */
    omit?: RoomCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomCategoryInclude<ExtArgs> | null
    /**
     * Filter, which RoomCategory to fetch.
     */
    where: RoomCategoryWhereUniqueInput
  }

  /**
   * RoomCategory findFirst
   */
  export type RoomCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategory
     */
    select?: RoomCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomCategory
     */
    omit?: RoomCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomCategoryInclude<ExtArgs> | null
    /**
     * Filter, which RoomCategory to fetch.
     */
    where?: RoomCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomCategories to fetch.
     */
    orderBy?: RoomCategoryOrderByWithRelationInput | RoomCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomCategories.
     */
    cursor?: RoomCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomCategories.
     */
    distinct?: RoomCategoryScalarFieldEnum | RoomCategoryScalarFieldEnum[]
  }

  /**
   * RoomCategory findFirstOrThrow
   */
  export type RoomCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategory
     */
    select?: RoomCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomCategory
     */
    omit?: RoomCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomCategoryInclude<ExtArgs> | null
    /**
     * Filter, which RoomCategory to fetch.
     */
    where?: RoomCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomCategories to fetch.
     */
    orderBy?: RoomCategoryOrderByWithRelationInput | RoomCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomCategories.
     */
    cursor?: RoomCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomCategories.
     */
    distinct?: RoomCategoryScalarFieldEnum | RoomCategoryScalarFieldEnum[]
  }

  /**
   * RoomCategory findMany
   */
  export type RoomCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategory
     */
    select?: RoomCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomCategory
     */
    omit?: RoomCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomCategoryInclude<ExtArgs> | null
    /**
     * Filter, which RoomCategories to fetch.
     */
    where?: RoomCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomCategories to fetch.
     */
    orderBy?: RoomCategoryOrderByWithRelationInput | RoomCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomCategories.
     */
    cursor?: RoomCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomCategories.
     */
    skip?: number
    distinct?: RoomCategoryScalarFieldEnum | RoomCategoryScalarFieldEnum[]
  }

  /**
   * RoomCategory create
   */
  export type RoomCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategory
     */
    select?: RoomCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomCategory
     */
    omit?: RoomCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomCategory.
     */
    data: XOR<RoomCategoryCreateInput, RoomCategoryUncheckedCreateInput>
  }

  /**
   * RoomCategory createMany
   */
  export type RoomCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomCategories.
     */
    data: RoomCategoryCreateManyInput | RoomCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomCategory createManyAndReturn
   */
  export type RoomCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategory
     */
    select?: RoomCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomCategory
     */
    omit?: RoomCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many RoomCategories.
     */
    data: RoomCategoryCreateManyInput | RoomCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomCategory update
   */
  export type RoomCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategory
     */
    select?: RoomCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomCategory
     */
    omit?: RoomCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomCategory.
     */
    data: XOR<RoomCategoryUpdateInput, RoomCategoryUncheckedUpdateInput>
    /**
     * Choose, which RoomCategory to update.
     */
    where: RoomCategoryWhereUniqueInput
  }

  /**
   * RoomCategory updateMany
   */
  export type RoomCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomCategories.
     */
    data: XOR<RoomCategoryUpdateManyMutationInput, RoomCategoryUncheckedUpdateManyInput>
    /**
     * Filter which RoomCategories to update
     */
    where?: RoomCategoryWhereInput
    /**
     * Limit how many RoomCategories to update.
     */
    limit?: number
  }

  /**
   * RoomCategory updateManyAndReturn
   */
  export type RoomCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategory
     */
    select?: RoomCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomCategory
     */
    omit?: RoomCategoryOmit<ExtArgs> | null
    /**
     * The data used to update RoomCategories.
     */
    data: XOR<RoomCategoryUpdateManyMutationInput, RoomCategoryUncheckedUpdateManyInput>
    /**
     * Filter which RoomCategories to update
     */
    where?: RoomCategoryWhereInput
    /**
     * Limit how many RoomCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomCategory upsert
   */
  export type RoomCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategory
     */
    select?: RoomCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomCategory
     */
    omit?: RoomCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomCategory to update in case it exists.
     */
    where: RoomCategoryWhereUniqueInput
    /**
     * In case the RoomCategory found by the `where` argument doesn't exist, create a new RoomCategory with this data.
     */
    create: XOR<RoomCategoryCreateInput, RoomCategoryUncheckedCreateInput>
    /**
     * In case the RoomCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomCategoryUpdateInput, RoomCategoryUncheckedUpdateInput>
  }

  /**
   * RoomCategory delete
   */
  export type RoomCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategory
     */
    select?: RoomCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomCategory
     */
    omit?: RoomCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomCategoryInclude<ExtArgs> | null
    /**
     * Filter which RoomCategory to delete.
     */
    where: RoomCategoryWhereUniqueInput
  }

  /**
   * RoomCategory deleteMany
   */
  export type RoomCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomCategories to delete
     */
    where?: RoomCategoryWhereInput
    /**
     * Limit how many RoomCategories to delete.
     */
    limit?: number
  }

  /**
   * RoomCategory.rooms
   */
  export type RoomCategory$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * RoomCategory without action
   */
  export type RoomCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategory
     */
    select?: RoomCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomCategory
     */
    omit?: RoomCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    hotelId: string | null
    roomCategoryId: string | null
    number: string | null
    floor: string | null
    status: $Enums.RoomStatus | null
    createdAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    hotelId: string | null
    roomCategoryId: string | null
    number: string | null
    floor: string | null
    status: $Enums.RoomStatus | null
    createdAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    hotelId: number
    roomCategoryId: number
    number: number
    floor: number
    status: number
    createdAt: number
    _all: number
  }


  export type RoomMinAggregateInputType = {
    id?: true
    hotelId?: true
    roomCategoryId?: true
    number?: true
    floor?: true
    status?: true
    createdAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    hotelId?: true
    roomCategoryId?: true
    number?: true
    floor?: true
    status?: true
    createdAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    hotelId?: true
    roomCategoryId?: true
    number?: true
    floor?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    hotelId: string
    roomCategoryId: string
    number: string
    floor: string | null
    status: $Enums.RoomStatus
    createdAt: Date
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    roomCategoryId?: boolean
    number?: boolean
    floor?: boolean
    status?: boolean
    createdAt?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    category?: boolean | RoomCategoryDefaultArgs<ExtArgs>
    reservationRooms?: boolean | Room$reservationRoomsArgs<ExtArgs>
    blocks?: boolean | Room$blocksArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    roomCategoryId?: boolean
    number?: boolean
    floor?: boolean
    status?: boolean
    createdAt?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    category?: boolean | RoomCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    roomCategoryId?: boolean
    number?: boolean
    floor?: boolean
    status?: boolean
    createdAt?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    category?: boolean | RoomCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    hotelId?: boolean
    roomCategoryId?: boolean
    number?: boolean
    floor?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hotelId" | "roomCategoryId" | "number" | "floor" | "status" | "createdAt", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    category?: boolean | RoomCategoryDefaultArgs<ExtArgs>
    reservationRooms?: boolean | Room$reservationRoomsArgs<ExtArgs>
    blocks?: boolean | Room$blocksArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    category?: boolean | RoomCategoryDefaultArgs<ExtArgs>
  }
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    category?: boolean | RoomCategoryDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      hotel: Prisma.$HotelPayload<ExtArgs>
      category: Prisma.$RoomCategoryPayload<ExtArgs>
      reservationRooms: Prisma.$ReservationRoomPayload<ExtArgs>[]
      blocks: Prisma.$RoomBlockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hotelId: string
      roomCategoryId: string
      number: string
      floor: string | null
      status: $Enums.RoomStatus
      createdAt: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends RoomCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomCategoryDefaultArgs<ExtArgs>>): Prisma__RoomCategoryClient<$Result.GetResult<Prisma.$RoomCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reservationRooms<T extends Room$reservationRoomsArgs<ExtArgs> = {}>(args?: Subset<T, Room$reservationRoomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blocks<T extends Room$blocksArgs<ExtArgs> = {}>(args?: Subset<T, Room$blocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly hotelId: FieldRef<"Room", 'String'>
    readonly roomCategoryId: FieldRef<"Room", 'String'>
    readonly number: FieldRef<"Room", 'String'>
    readonly floor: FieldRef<"Room", 'String'>
    readonly status: FieldRef<"Room", 'RoomStatus'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.reservationRooms
   */
  export type Room$reservationRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationRoom
     */
    select?: ReservationRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationRoom
     */
    omit?: ReservationRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationRoomInclude<ExtArgs> | null
    where?: ReservationRoomWhereInput
    orderBy?: ReservationRoomOrderByWithRelationInput | ReservationRoomOrderByWithRelationInput[]
    cursor?: ReservationRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationRoomScalarFieldEnum | ReservationRoomScalarFieldEnum[]
  }

  /**
   * Room.blocks
   */
  export type Room$blocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomBlock
     */
    select?: RoomBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomBlock
     */
    omit?: RoomBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomBlockInclude<ExtArgs> | null
    where?: RoomBlockWhereInput
    orderBy?: RoomBlockOrderByWithRelationInput | RoomBlockOrderByWithRelationInput[]
    cursor?: RoomBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomBlockScalarFieldEnum | RoomBlockScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Guest
   */

  export type AggregateGuest = {
    _count: GuestCountAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  export type GuestMinAggregateOutputType = {
    id: string | null
    hotelId: string | null
    name: string | null
    document: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
  }

  export type GuestMaxAggregateOutputType = {
    id: string | null
    hotelId: string | null
    name: string | null
    document: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
  }

  export type GuestCountAggregateOutputType = {
    id: number
    hotelId: number
    name: number
    document: number
    phone: number
    email: number
    createdAt: number
    _all: number
  }


  export type GuestMinAggregateInputType = {
    id?: true
    hotelId?: true
    name?: true
    document?: true
    phone?: true
    email?: true
    createdAt?: true
  }

  export type GuestMaxAggregateInputType = {
    id?: true
    hotelId?: true
    name?: true
    document?: true
    phone?: true
    email?: true
    createdAt?: true
  }

  export type GuestCountAggregateInputType = {
    id?: true
    hotelId?: true
    name?: true
    document?: true
    phone?: true
    email?: true
    createdAt?: true
    _all?: true
  }

  export type GuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guest to aggregate.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guests
    **/
    _count?: true | GuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuestMaxAggregateInputType
  }

  export type GetGuestAggregateType<T extends GuestAggregateArgs> = {
        [P in keyof T & keyof AggregateGuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuest[P]>
      : GetScalarType<T[P], AggregateGuest[P]>
  }




  export type GuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestWhereInput
    orderBy?: GuestOrderByWithAggregationInput | GuestOrderByWithAggregationInput[]
    by: GuestScalarFieldEnum[] | GuestScalarFieldEnum
    having?: GuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuestCountAggregateInputType | true
    _min?: GuestMinAggregateInputType
    _max?: GuestMaxAggregateInputType
  }

  export type GuestGroupByOutputType = {
    id: string
    hotelId: string
    name: string
    document: string | null
    phone: string | null
    email: string | null
    createdAt: Date
    _count: GuestCountAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  type GetGuestGroupByPayload<T extends GuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuestGroupByOutputType[P]>
            : GetScalarType<T[P], GuestGroupByOutputType[P]>
        }
      >
    >


  export type GuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    name?: boolean
    document?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    reservations?: boolean | Guest$reservationsArgs<ExtArgs>
    stayGuests?: boolean | Guest$stayGuestsArgs<ExtArgs>
    _count?: boolean | GuestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    name?: boolean
    document?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    name?: boolean
    document?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectScalar = {
    id?: boolean
    hotelId?: boolean
    name?: boolean
    document?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
  }

  export type GuestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hotelId" | "name" | "document" | "phone" | "email" | "createdAt", ExtArgs["result"]["guest"]>
  export type GuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    reservations?: boolean | Guest$reservationsArgs<ExtArgs>
    stayGuests?: boolean | Guest$stayGuestsArgs<ExtArgs>
    _count?: boolean | GuestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }
  export type GuestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }

  export type $GuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guest"
    objects: {
      hotel: Prisma.$HotelPayload<ExtArgs>
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      stayGuests: Prisma.$StayGuestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hotelId: string
      name: string
      document: string | null
      phone: string | null
      email: string | null
      createdAt: Date
    }, ExtArgs["result"]["guest"]>
    composites: {}
  }

  type GuestGetPayload<S extends boolean | null | undefined | GuestDefaultArgs> = $Result.GetResult<Prisma.$GuestPayload, S>

  type GuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuestCountAggregateInputType | true
    }

  export interface GuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guest'], meta: { name: 'Guest' } }
    /**
     * Find zero or one Guest that matches the filter.
     * @param {GuestFindUniqueArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuestFindUniqueArgs>(args: SelectSubset<T, GuestFindUniqueArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuestFindUniqueOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuestFindUniqueOrThrowArgs>(args: SelectSubset<T, GuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindFirstArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuestFindFirstArgs>(args?: SelectSubset<T, GuestFindFirstArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindFirstOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuestFindFirstOrThrowArgs>(args?: SelectSubset<T, GuestFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Guests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guests
     * const guests = await prisma.guest.findMany()
     * 
     * // Get first 10 Guests
     * const guests = await prisma.guest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guestWithIdOnly = await prisma.guest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuestFindManyArgs>(args?: SelectSubset<T, GuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guest.
     * @param {GuestCreateArgs} args - Arguments to create a Guest.
     * @example
     * // Create one Guest
     * const Guest = await prisma.guest.create({
     *   data: {
     *     // ... data to create a Guest
     *   }
     * })
     * 
     */
    create<T extends GuestCreateArgs>(args: SelectSubset<T, GuestCreateArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Guests.
     * @param {GuestCreateManyArgs} args - Arguments to create many Guests.
     * @example
     * // Create many Guests
     * const guest = await prisma.guest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuestCreateManyArgs>(args?: SelectSubset<T, GuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Guests and returns the data saved in the database.
     * @param {GuestCreateManyAndReturnArgs} args - Arguments to create many Guests.
     * @example
     * // Create many Guests
     * const guest = await prisma.guest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Guests and only return the `id`
     * const guestWithIdOnly = await prisma.guest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuestCreateManyAndReturnArgs>(args?: SelectSubset<T, GuestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Guest.
     * @param {GuestDeleteArgs} args - Arguments to delete one Guest.
     * @example
     * // Delete one Guest
     * const Guest = await prisma.guest.delete({
     *   where: {
     *     // ... filter to delete one Guest
     *   }
     * })
     * 
     */
    delete<T extends GuestDeleteArgs>(args: SelectSubset<T, GuestDeleteArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guest.
     * @param {GuestUpdateArgs} args - Arguments to update one Guest.
     * @example
     * // Update one Guest
     * const guest = await prisma.guest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuestUpdateArgs>(args: SelectSubset<T, GuestUpdateArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Guests.
     * @param {GuestDeleteManyArgs} args - Arguments to filter Guests to delete.
     * @example
     * // Delete a few Guests
     * const { count } = await prisma.guest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuestDeleteManyArgs>(args?: SelectSubset<T, GuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guests
     * const guest = await prisma.guest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuestUpdateManyArgs>(args: SelectSubset<T, GuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guests and returns the data updated in the database.
     * @param {GuestUpdateManyAndReturnArgs} args - Arguments to update many Guests.
     * @example
     * // Update many Guests
     * const guest = await prisma.guest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Guests and only return the `id`
     * const guestWithIdOnly = await prisma.guest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuestUpdateManyAndReturnArgs>(args: SelectSubset<T, GuestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Guest.
     * @param {GuestUpsertArgs} args - Arguments to update or create a Guest.
     * @example
     * // Update or create a Guest
     * const guest = await prisma.guest.upsert({
     *   create: {
     *     // ... data to create a Guest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guest we want to update
     *   }
     * })
     */
    upsert<T extends GuestUpsertArgs>(args: SelectSubset<T, GuestUpsertArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestCountArgs} args - Arguments to filter Guests to count.
     * @example
     * // Count the number of Guests
     * const count = await prisma.guest.count({
     *   where: {
     *     // ... the filter for the Guests we want to count
     *   }
     * })
    **/
    count<T extends GuestCountArgs>(
      args?: Subset<T, GuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuestAggregateArgs>(args: Subset<T, GuestAggregateArgs>): Prisma.PrismaPromise<GetGuestAggregateType<T>>

    /**
     * Group by Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuestGroupByArgs['orderBy'] }
        : { orderBy?: GuestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guest model
   */
  readonly fields: GuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reservations<T extends Guest$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Guest$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stayGuests<T extends Guest$stayGuestsArgs<ExtArgs> = {}>(args?: Subset<T, Guest$stayGuestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StayGuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Guest model
   */
  interface GuestFieldRefs {
    readonly id: FieldRef<"Guest", 'String'>
    readonly hotelId: FieldRef<"Guest", 'String'>
    readonly name: FieldRef<"Guest", 'String'>
    readonly document: FieldRef<"Guest", 'String'>
    readonly phone: FieldRef<"Guest", 'String'>
    readonly email: FieldRef<"Guest", 'String'>
    readonly createdAt: FieldRef<"Guest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Guest findUnique
   */
  export type GuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest findUniqueOrThrow
   */
  export type GuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest findFirst
   */
  export type GuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest findFirstOrThrow
   */
  export type GuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest findMany
   */
  export type GuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guests to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest create
   */
  export type GuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The data needed to create a Guest.
     */
    data: XOR<GuestCreateInput, GuestUncheckedCreateInput>
  }

  /**
   * Guest createMany
   */
  export type GuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guests.
     */
    data: GuestCreateManyInput | GuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guest createManyAndReturn
   */
  export type GuestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * The data used to create many Guests.
     */
    data: GuestCreateManyInput | GuestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Guest update
   */
  export type GuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The data needed to update a Guest.
     */
    data: XOR<GuestUpdateInput, GuestUncheckedUpdateInput>
    /**
     * Choose, which Guest to update.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest updateMany
   */
  export type GuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guests.
     */
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyInput>
    /**
     * Filter which Guests to update
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to update.
     */
    limit?: number
  }

  /**
   * Guest updateManyAndReturn
   */
  export type GuestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * The data used to update Guests.
     */
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyInput>
    /**
     * Filter which Guests to update
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Guest upsert
   */
  export type GuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The filter to search for the Guest to update in case it exists.
     */
    where: GuestWhereUniqueInput
    /**
     * In case the Guest found by the `where` argument doesn't exist, create a new Guest with this data.
     */
    create: XOR<GuestCreateInput, GuestUncheckedCreateInput>
    /**
     * In case the Guest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuestUpdateInput, GuestUncheckedUpdateInput>
  }

  /**
   * Guest delete
   */
  export type GuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter which Guest to delete.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest deleteMany
   */
  export type GuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guests to delete
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to delete.
     */
    limit?: number
  }

  /**
   * Guest.reservations
   */
  export type Guest$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Guest.stayGuests
   */
  export type Guest$stayGuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StayGuest
     */
    select?: StayGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StayGuest
     */
    omit?: StayGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayGuestInclude<ExtArgs> | null
    where?: StayGuestWhereInput
    orderBy?: StayGuestOrderByWithRelationInput | StayGuestOrderByWithRelationInput[]
    cursor?: StayGuestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StayGuestScalarFieldEnum | StayGuestScalarFieldEnum[]
  }

  /**
   * Guest without action
   */
  export type GuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
  }


  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationMinAggregateOutputType = {
    id: string | null
    hotelId: string | null
    guestId: string | null
    checkInDate: Date | null
    checkOutDate: Date | null
    status: $Enums.ReservationStatus | null
    source: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type ReservationMaxAggregateOutputType = {
    id: string | null
    hotelId: string | null
    guestId: string | null
    checkInDate: Date | null
    checkOutDate: Date | null
    status: $Enums.ReservationStatus | null
    source: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type ReservationCountAggregateOutputType = {
    id: number
    hotelId: number
    guestId: number
    checkInDate: number
    checkOutDate: number
    status: number
    source: number
    notes: number
    createdAt: number
    _all: number
  }


  export type ReservationMinAggregateInputType = {
    id?: true
    hotelId?: true
    guestId?: true
    checkInDate?: true
    checkOutDate?: true
    status?: true
    source?: true
    notes?: true
    createdAt?: true
  }

  export type ReservationMaxAggregateInputType = {
    id?: true
    hotelId?: true
    guestId?: true
    checkInDate?: true
    checkOutDate?: true
    status?: true
    source?: true
    notes?: true
    createdAt?: true
  }

  export type ReservationCountAggregateInputType = {
    id?: true
    hotelId?: true
    guestId?: true
    checkInDate?: true
    checkOutDate?: true
    status?: true
    source?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    id: string
    hotelId: string
    guestId: string
    checkInDate: Date
    checkOutDate: Date
    status: $Enums.ReservationStatus
    source: string | null
    notes: string | null
    createdAt: Date
    _count: ReservationCountAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    guestId?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    status?: boolean
    source?: boolean
    notes?: boolean
    createdAt?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    rooms?: boolean | Reservation$roomsArgs<ExtArgs>
    stay?: boolean | Reservation$stayArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    guestId?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    status?: boolean
    source?: boolean
    notes?: boolean
    createdAt?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelId?: boolean
    guestId?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    status?: boolean
    source?: boolean
    notes?: boolean
    createdAt?: boolean
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectScalar = {
    id?: boolean
    hotelId?: boolean
    guestId?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    status?: boolean
    source?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type ReservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hotelId" | "guestId" | "checkInDate" | "checkOutDate" | "status" | "source" | "notes" | "createdAt", ExtArgs["result"]["reservation"]>
  export type ReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    rooms?: boolean | Reservation$roomsArgs<ExtArgs>
    stay?: boolean | Reservation$stayArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      hotel: Prisma.$HotelPayload<ExtArgs>
      guest: Prisma.$GuestPayload<ExtArgs>
      rooms: Prisma.$ReservationRoomPayload<ExtArgs>[]
      stay: Prisma.$StayPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hotelId: string
      guestId: string
      checkInDate: Date
      checkOutDate: Date
      status: $Enums.ReservationStatus
      source: string | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationFindUniqueArgs>(args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationFindFirstArgs>(args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationWithIdOnly = await prisma.reservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationFindManyArgs>(args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
     */
    create<T extends ReservationCreateArgs>(args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservations.
     * @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationCreateManyArgs>(args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservations and returns the data saved in the database.
     * @param {ReservationCreateManyAndReturnArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
     */
    delete<T extends ReservationDeleteArgs>(args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationUpdateArgs>(args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationDeleteManyArgs>(args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationUpdateManyArgs>(args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations and returns the data updated in the database.
     * @param {ReservationUpdateManyAndReturnArgs} args - Arguments to update many Reservations.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReservationUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     */
    upsert<T extends ReservationUpsertArgs>(args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    guest<T extends GuestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuestDefaultArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rooms<T extends Reservation$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stay<T extends Reservation$stayArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$stayArgs<ExtArgs>>): Prisma__StayClient<$Result.GetResult<Prisma.$StayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reservation model
   */
  interface ReservationFieldRefs {
    readonly id: FieldRef<"Reservation", 'String'>
    readonly hotelId: FieldRef<"Reservation", 'String'>
    readonly guestId: FieldRef<"Reservation", 'String'>
    readonly checkInDate: FieldRef<"Reservation", 'DateTime'>
    readonly checkOutDate: FieldRef<"Reservation", 'DateTime'>
    readonly status: FieldRef<"Reservation", 'ReservationStatus'>
    readonly source: FieldRef<"Reservation", 'String'>
    readonly notes: FieldRef<"Reservation", 'String'>
    readonly createdAt: FieldRef<"Reservation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }

  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservation createManyAndReturn
   */
  export type ReservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservation updateManyAndReturn
   */
  export type ReservationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }

  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to delete.
     */
    limit?: number
  }

  /**
   * Reservation.rooms
   */
  export type Reservation$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationRoom
     */
    select?: ReservationRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationRoom
     */
    omit?: ReservationRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationRoomInclude<ExtArgs> | null
    where?: ReservationRoomWhereInput
    orderBy?: ReservationRoomOrderByWithRelationInput | ReservationRoomOrderByWithRelationInput[]
    cursor?: ReservationRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationRoomScalarFieldEnum | ReservationRoomScalarFieldEnum[]
  }

  /**
   * Reservation.stay
   */
  export type Reservation$stayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stay
     */
    select?: StaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stay
     */
    omit?: StayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayInclude<ExtArgs> | null
    where?: StayWhereInput
  }

  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
  }


  /**
   * Model ReservationRoom
   */

  export type AggregateReservationRoom = {
    _count: ReservationRoomCountAggregateOutputType | null
    _avg: ReservationRoomAvgAggregateOutputType | null
    _sum: ReservationRoomSumAggregateOutputType | null
    _min: ReservationRoomMinAggregateOutputType | null
    _max: ReservationRoomMaxAggregateOutputType | null
  }

  export type ReservationRoomAvgAggregateOutputType = {
    dailyRate: Decimal | null
    adults: number | null
    children: number | null
  }

  export type ReservationRoomSumAggregateOutputType = {
    dailyRate: Decimal | null
    adults: number | null
    children: number | null
  }

  export type ReservationRoomMinAggregateOutputType = {
    id: string | null
    reservationId: string | null
    roomId: string | null
    dailyRate: Decimal | null
    adults: number | null
    children: number | null
  }

  export type ReservationRoomMaxAggregateOutputType = {
    id: string | null
    reservationId: string | null
    roomId: string | null
    dailyRate: Decimal | null
    adults: number | null
    children: number | null
  }

  export type ReservationRoomCountAggregateOutputType = {
    id: number
    reservationId: number
    roomId: number
    dailyRate: number
    adults: number
    children: number
    _all: number
  }


  export type ReservationRoomAvgAggregateInputType = {
    dailyRate?: true
    adults?: true
    children?: true
  }

  export type ReservationRoomSumAggregateInputType = {
    dailyRate?: true
    adults?: true
    children?: true
  }

  export type ReservationRoomMinAggregateInputType = {
    id?: true
    reservationId?: true
    roomId?: true
    dailyRate?: true
    adults?: true
    children?: true
  }

  export type ReservationRoomMaxAggregateInputType = {
    id?: true
    reservationId?: true
    roomId?: true
    dailyRate?: true
    adults?: true
    children?: true
  }

  export type ReservationRoomCountAggregateInputType = {
    id?: true
    reservationId?: true
    roomId?: true
    dailyRate?: true
    adults?: true
    children?: true
    _all?: true
  }

  export type ReservationRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReservationRoom to aggregate.
     */
    where?: ReservationRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationRooms to fetch.
     */
    orderBy?: ReservationRoomOrderByWithRelationInput | ReservationRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReservationRooms
    **/
    _count?: true | ReservationRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationRoomMaxAggregateInputType
  }

  export type GetReservationRoomAggregateType<T extends ReservationRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateReservationRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservationRoom[P]>
      : GetScalarType<T[P], AggregateReservationRoom[P]>
  }




  export type ReservationRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationRoomWhereInput
    orderBy?: ReservationRoomOrderByWithAggregationInput | ReservationRoomOrderByWithAggregationInput[]
    by: ReservationRoomScalarFieldEnum[] | ReservationRoomScalarFieldEnum
    having?: ReservationRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationRoomCountAggregateInputType | true
    _avg?: ReservationRoomAvgAggregateInputType
    _sum?: ReservationRoomSumAggregateInputType
    _min?: ReservationRoomMinAggregateInputType
    _max?: ReservationRoomMaxAggregateInputType
  }

  export type ReservationRoomGroupByOutputType = {
    id: string
    reservationId: string
    roomId: string
    dailyRate: Decimal
    adults: number
    children: number
    _count: ReservationRoomCountAggregateOutputType | null
    _avg: ReservationRoomAvgAggregateOutputType | null
    _sum: ReservationRoomSumAggregateOutputType | null
    _min: ReservationRoomMinAggregateOutputType | null
    _max: ReservationRoomMaxAggregateOutputType | null
  }

  type GetReservationRoomGroupByPayload<T extends ReservationRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationRoomGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationRoomGroupByOutputType[P]>
        }
      >
    >


  export type ReservationRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    roomId?: boolean
    dailyRate?: boolean
    adults?: boolean
    children?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservationRoom"]>

  export type ReservationRoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    roomId?: boolean
    dailyRate?: boolean
    adults?: boolean
    children?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservationRoom"]>

  export type ReservationRoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    roomId?: boolean
    dailyRate?: boolean
    adults?: boolean
    children?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservationRoom"]>

  export type ReservationRoomSelectScalar = {
    id?: boolean
    reservationId?: boolean
    roomId?: boolean
    dailyRate?: boolean
    adults?: boolean
    children?: boolean
  }

  export type ReservationRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reservationId" | "roomId" | "dailyRate" | "adults" | "children", ExtArgs["result"]["reservationRoom"]>
  export type ReservationRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type ReservationRoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type ReservationRoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $ReservationRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReservationRoom"
    objects: {
      reservation: Prisma.$ReservationPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reservationId: string
      roomId: string
      dailyRate: Prisma.Decimal
      adults: number
      children: number
    }, ExtArgs["result"]["reservationRoom"]>
    composites: {}
  }

  type ReservationRoomGetPayload<S extends boolean | null | undefined | ReservationRoomDefaultArgs> = $Result.GetResult<Prisma.$ReservationRoomPayload, S>

  type ReservationRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationRoomCountAggregateInputType | true
    }

  export interface ReservationRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReservationRoom'], meta: { name: 'ReservationRoom' } }
    /**
     * Find zero or one ReservationRoom that matches the filter.
     * @param {ReservationRoomFindUniqueArgs} args - Arguments to find a ReservationRoom
     * @example
     * // Get one ReservationRoom
     * const reservationRoom = await prisma.reservationRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationRoomFindUniqueArgs>(args: SelectSubset<T, ReservationRoomFindUniqueArgs<ExtArgs>>): Prisma__ReservationRoomClient<$Result.GetResult<Prisma.$ReservationRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReservationRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationRoomFindUniqueOrThrowArgs} args - Arguments to find a ReservationRoom
     * @example
     * // Get one ReservationRoom
     * const reservationRoom = await prisma.reservationRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationRoomClient<$Result.GetResult<Prisma.$ReservationRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReservationRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationRoomFindFirstArgs} args - Arguments to find a ReservationRoom
     * @example
     * // Get one ReservationRoom
     * const reservationRoom = await prisma.reservationRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationRoomFindFirstArgs>(args?: SelectSubset<T, ReservationRoomFindFirstArgs<ExtArgs>>): Prisma__ReservationRoomClient<$Result.GetResult<Prisma.$ReservationRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReservationRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationRoomFindFirstOrThrowArgs} args - Arguments to find a ReservationRoom
     * @example
     * // Get one ReservationRoom
     * const reservationRoom = await prisma.reservationRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationRoomClient<$Result.GetResult<Prisma.$ReservationRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReservationRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReservationRooms
     * const reservationRooms = await prisma.reservationRoom.findMany()
     * 
     * // Get first 10 ReservationRooms
     * const reservationRooms = await prisma.reservationRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationRoomWithIdOnly = await prisma.reservationRoom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationRoomFindManyArgs>(args?: SelectSubset<T, ReservationRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReservationRoom.
     * @param {ReservationRoomCreateArgs} args - Arguments to create a ReservationRoom.
     * @example
     * // Create one ReservationRoom
     * const ReservationRoom = await prisma.reservationRoom.create({
     *   data: {
     *     // ... data to create a ReservationRoom
     *   }
     * })
     * 
     */
    create<T extends ReservationRoomCreateArgs>(args: SelectSubset<T, ReservationRoomCreateArgs<ExtArgs>>): Prisma__ReservationRoomClient<$Result.GetResult<Prisma.$ReservationRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReservationRooms.
     * @param {ReservationRoomCreateManyArgs} args - Arguments to create many ReservationRooms.
     * @example
     * // Create many ReservationRooms
     * const reservationRoom = await prisma.reservationRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationRoomCreateManyArgs>(args?: SelectSubset<T, ReservationRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReservationRooms and returns the data saved in the database.
     * @param {ReservationRoomCreateManyAndReturnArgs} args - Arguments to create many ReservationRooms.
     * @example
     * // Create many ReservationRooms
     * const reservationRoom = await prisma.reservationRoom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReservationRooms and only return the `id`
     * const reservationRoomWithIdOnly = await prisma.reservationRoom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationRoomCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationRoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationRoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReservationRoom.
     * @param {ReservationRoomDeleteArgs} args - Arguments to delete one ReservationRoom.
     * @example
     * // Delete one ReservationRoom
     * const ReservationRoom = await prisma.reservationRoom.delete({
     *   where: {
     *     // ... filter to delete one ReservationRoom
     *   }
     * })
     * 
     */
    delete<T extends ReservationRoomDeleteArgs>(args: SelectSubset<T, ReservationRoomDeleteArgs<ExtArgs>>): Prisma__ReservationRoomClient<$Result.GetResult<Prisma.$ReservationRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReservationRoom.
     * @param {ReservationRoomUpdateArgs} args - Arguments to update one ReservationRoom.
     * @example
     * // Update one ReservationRoom
     * const reservationRoom = await prisma.reservationRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationRoomUpdateArgs>(args: SelectSubset<T, ReservationRoomUpdateArgs<ExtArgs>>): Prisma__ReservationRoomClient<$Result.GetResult<Prisma.$ReservationRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReservationRooms.
     * @param {ReservationRoomDeleteManyArgs} args - Arguments to filter ReservationRooms to delete.
     * @example
     * // Delete a few ReservationRooms
     * const { count } = await prisma.reservationRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationRoomDeleteManyArgs>(args?: SelectSubset<T, ReservationRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReservationRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReservationRooms
     * const reservationRoom = await prisma.reservationRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationRoomUpdateManyArgs>(args: SelectSubset<T, ReservationRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReservationRooms and returns the data updated in the database.
     * @param {ReservationRoomUpdateManyAndReturnArgs} args - Arguments to update many ReservationRooms.
     * @example
     * // Update many ReservationRooms
     * const reservationRoom = await prisma.reservationRoom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReservationRooms and only return the `id`
     * const reservationRoomWithIdOnly = await prisma.reservationRoom.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReservationRoomUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservationRoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationRoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReservationRoom.
     * @param {ReservationRoomUpsertArgs} args - Arguments to update or create a ReservationRoom.
     * @example
     * // Update or create a ReservationRoom
     * const reservationRoom = await prisma.reservationRoom.upsert({
     *   create: {
     *     // ... data to create a ReservationRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReservationRoom we want to update
     *   }
     * })
     */
    upsert<T extends ReservationRoomUpsertArgs>(args: SelectSubset<T, ReservationRoomUpsertArgs<ExtArgs>>): Prisma__ReservationRoomClient<$Result.GetResult<Prisma.$ReservationRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReservationRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationRoomCountArgs} args - Arguments to filter ReservationRooms to count.
     * @example
     * // Count the number of ReservationRooms
     * const count = await prisma.reservationRoom.count({
     *   where: {
     *     // ... the filter for the ReservationRooms we want to count
     *   }
     * })
    **/
    count<T extends ReservationRoomCountArgs>(
      args?: Subset<T, ReservationRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReservationRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservationRoomAggregateArgs>(args: Subset<T, ReservationRoomAggregateArgs>): Prisma.PrismaPromise<GetReservationRoomAggregateType<T>>

    /**
     * Group by ReservationRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationRoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservationRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationRoomGroupByArgs['orderBy'] }
        : { orderBy?: ReservationRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservationRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReservationRoom model
   */
  readonly fields: ReservationRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReservationRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservation<T extends ReservationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservationDefaultArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReservationRoom model
   */
  interface ReservationRoomFieldRefs {
    readonly id: FieldRef<"ReservationRoom", 'String'>
    readonly reservationId: FieldRef<"ReservationRoom", 'String'>
    readonly roomId: FieldRef<"ReservationRoom", 'String'>
    readonly dailyRate: FieldRef<"ReservationRoom", 'Decimal'>
    readonly adults: FieldRef<"ReservationRoom", 'Int'>
    readonly children: FieldRef<"ReservationRoom", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ReservationRoom findUnique
   */
  export type ReservationRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationRoom
     */
    select?: ReservationRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationRoom
     */
    omit?: ReservationRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationRoomInclude<ExtArgs> | null
    /**
     * Filter, which ReservationRoom to fetch.
     */
    where: ReservationRoomWhereUniqueInput
  }

  /**
   * ReservationRoom findUniqueOrThrow
   */
  export type ReservationRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationRoom
     */
    select?: ReservationRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationRoom
     */
    omit?: ReservationRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationRoomInclude<ExtArgs> | null
    /**
     * Filter, which ReservationRoom to fetch.
     */
    where: ReservationRoomWhereUniqueInput
  }

  /**
   * ReservationRoom findFirst
   */
  export type ReservationRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationRoom
     */
    select?: ReservationRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationRoom
     */
    omit?: ReservationRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationRoomInclude<ExtArgs> | null
    /**
     * Filter, which ReservationRoom to fetch.
     */
    where?: ReservationRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationRooms to fetch.
     */
    orderBy?: ReservationRoomOrderByWithRelationInput | ReservationRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservationRooms.
     */
    cursor?: ReservationRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservationRooms.
     */
    distinct?: ReservationRoomScalarFieldEnum | ReservationRoomScalarFieldEnum[]
  }

  /**
   * ReservationRoom findFirstOrThrow
   */
  export type ReservationRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationRoom
     */
    select?: ReservationRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationRoom
     */
    omit?: ReservationRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationRoomInclude<ExtArgs> | null
    /**
     * Filter, which ReservationRoom to fetch.
     */
    where?: ReservationRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationRooms to fetch.
     */
    orderBy?: ReservationRoomOrderByWithRelationInput | ReservationRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservationRooms.
     */
    cursor?: ReservationRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservationRooms.
     */
    distinct?: ReservationRoomScalarFieldEnum | ReservationRoomScalarFieldEnum[]
  }

  /**
   * ReservationRoom findMany
   */
  export type ReservationRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationRoom
     */
    select?: ReservationRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationRoom
     */
    omit?: ReservationRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationRoomInclude<ExtArgs> | null
    /**
     * Filter, which ReservationRooms to fetch.
     */
    where?: ReservationRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationRooms to fetch.
     */
    orderBy?: ReservationRoomOrderByWithRelationInput | ReservationRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReservationRooms.
     */
    cursor?: ReservationRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationRooms.
     */
    skip?: number
    distinct?: ReservationRoomScalarFieldEnum | ReservationRoomScalarFieldEnum[]
  }

  /**
   * ReservationRoom create
   */
  export type ReservationRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationRoom
     */
    select?: ReservationRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationRoom
     */
    omit?: ReservationRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a ReservationRoom.
     */
    data: XOR<ReservationRoomCreateInput, ReservationRoomUncheckedCreateInput>
  }

  /**
   * ReservationRoom createMany
   */
  export type ReservationRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReservationRooms.
     */
    data: ReservationRoomCreateManyInput | ReservationRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReservationRoom createManyAndReturn
   */
  export type ReservationRoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationRoom
     */
    select?: ReservationRoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationRoom
     */
    omit?: ReservationRoomOmit<ExtArgs> | null
    /**
     * The data used to create many ReservationRooms.
     */
    data: ReservationRoomCreateManyInput | ReservationRoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationRoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReservationRoom update
   */
  export type ReservationRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationRoom
     */
    select?: ReservationRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationRoom
     */
    omit?: ReservationRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a ReservationRoom.
     */
    data: XOR<ReservationRoomUpdateInput, ReservationRoomUncheckedUpdateInput>
    /**
     * Choose, which ReservationRoom to update.
     */
    where: ReservationRoomWhereUniqueInput
  }

  /**
   * ReservationRoom updateMany
   */
  export type ReservationRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReservationRooms.
     */
    data: XOR<ReservationRoomUpdateManyMutationInput, ReservationRoomUncheckedUpdateManyInput>
    /**
     * Filter which ReservationRooms to update
     */
    where?: ReservationRoomWhereInput
    /**
     * Limit how many ReservationRooms to update.
     */
    limit?: number
  }

  /**
   * ReservationRoom updateManyAndReturn
   */
  export type ReservationRoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationRoom
     */
    select?: ReservationRoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationRoom
     */
    omit?: ReservationRoomOmit<ExtArgs> | null
    /**
     * The data used to update ReservationRooms.
     */
    data: XOR<ReservationRoomUpdateManyMutationInput, ReservationRoomUncheckedUpdateManyInput>
    /**
     * Filter which ReservationRooms to update
     */
    where?: ReservationRoomWhereInput
    /**
     * Limit how many ReservationRooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationRoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReservationRoom upsert
   */
  export type ReservationRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationRoom
     */
    select?: ReservationRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationRoom
     */
    omit?: ReservationRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the ReservationRoom to update in case it exists.
     */
    where: ReservationRoomWhereUniqueInput
    /**
     * In case the ReservationRoom found by the `where` argument doesn't exist, create a new ReservationRoom with this data.
     */
    create: XOR<ReservationRoomCreateInput, ReservationRoomUncheckedCreateInput>
    /**
     * In case the ReservationRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationRoomUpdateInput, ReservationRoomUncheckedUpdateInput>
  }

  /**
   * ReservationRoom delete
   */
  export type ReservationRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationRoom
     */
    select?: ReservationRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationRoom
     */
    omit?: ReservationRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationRoomInclude<ExtArgs> | null
    /**
     * Filter which ReservationRoom to delete.
     */
    where: ReservationRoomWhereUniqueInput
  }

  /**
   * ReservationRoom deleteMany
   */
  export type ReservationRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReservationRooms to delete
     */
    where?: ReservationRoomWhereInput
    /**
     * Limit how many ReservationRooms to delete.
     */
    limit?: number
  }

  /**
   * ReservationRoom without action
   */
  export type ReservationRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationRoom
     */
    select?: ReservationRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationRoom
     */
    omit?: ReservationRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationRoomInclude<ExtArgs> | null
  }


  /**
   * Model Stay
   */

  export type AggregateStay = {
    _count: StayCountAggregateOutputType | null
    _min: StayMinAggregateOutputType | null
    _max: StayMaxAggregateOutputType | null
  }

  export type StayMinAggregateOutputType = {
    id: string | null
    reservationId: string | null
    checkInAt: Date | null
    checkOutAt: Date | null
    status: $Enums.StayStatus | null
  }

  export type StayMaxAggregateOutputType = {
    id: string | null
    reservationId: string | null
    checkInAt: Date | null
    checkOutAt: Date | null
    status: $Enums.StayStatus | null
  }

  export type StayCountAggregateOutputType = {
    id: number
    reservationId: number
    checkInAt: number
    checkOutAt: number
    status: number
    _all: number
  }


  export type StayMinAggregateInputType = {
    id?: true
    reservationId?: true
    checkInAt?: true
    checkOutAt?: true
    status?: true
  }

  export type StayMaxAggregateInputType = {
    id?: true
    reservationId?: true
    checkInAt?: true
    checkOutAt?: true
    status?: true
  }

  export type StayCountAggregateInputType = {
    id?: true
    reservationId?: true
    checkInAt?: true
    checkOutAt?: true
    status?: true
    _all?: true
  }

  export type StayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stay to aggregate.
     */
    where?: StayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stays to fetch.
     */
    orderBy?: StayOrderByWithRelationInput | StayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stays
    **/
    _count?: true | StayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StayMaxAggregateInputType
  }

  export type GetStayAggregateType<T extends StayAggregateArgs> = {
        [P in keyof T & keyof AggregateStay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStay[P]>
      : GetScalarType<T[P], AggregateStay[P]>
  }




  export type StayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StayWhereInput
    orderBy?: StayOrderByWithAggregationInput | StayOrderByWithAggregationInput[]
    by: StayScalarFieldEnum[] | StayScalarFieldEnum
    having?: StayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StayCountAggregateInputType | true
    _min?: StayMinAggregateInputType
    _max?: StayMaxAggregateInputType
  }

  export type StayGroupByOutputType = {
    id: string
    reservationId: string
    checkInAt: Date | null
    checkOutAt: Date | null
    status: $Enums.StayStatus
    _count: StayCountAggregateOutputType | null
    _min: StayMinAggregateOutputType | null
    _max: StayMaxAggregateOutputType | null
  }

  type GetStayGroupByPayload<T extends StayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StayGroupByOutputType[P]>
            : GetScalarType<T[P], StayGroupByOutputType[P]>
        }
      >
    >


  export type StaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    checkInAt?: boolean
    checkOutAt?: boolean
    status?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
    charges?: boolean | Stay$chargesArgs<ExtArgs>
    payments?: boolean | Stay$paymentsArgs<ExtArgs>
    stayGuests?: boolean | Stay$stayGuestsArgs<ExtArgs>
    _count?: boolean | StayCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stay"]>

  export type StaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    checkInAt?: boolean
    checkOutAt?: boolean
    status?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stay"]>

  export type StaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    checkInAt?: boolean
    checkOutAt?: boolean
    status?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stay"]>

  export type StaySelectScalar = {
    id?: boolean
    reservationId?: boolean
    checkInAt?: boolean
    checkOutAt?: boolean
    status?: boolean
  }

  export type StayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reservationId" | "checkInAt" | "checkOutAt" | "status", ExtArgs["result"]["stay"]>
  export type StayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
    charges?: boolean | Stay$chargesArgs<ExtArgs>
    payments?: boolean | Stay$paymentsArgs<ExtArgs>
    stayGuests?: boolean | Stay$stayGuestsArgs<ExtArgs>
    _count?: boolean | StayCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }
  export type StayIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }

  export type $StayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stay"
    objects: {
      reservation: Prisma.$ReservationPayload<ExtArgs>
      charges: Prisma.$ChargePayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      stayGuests: Prisma.$StayGuestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reservationId: string
      checkInAt: Date | null
      checkOutAt: Date | null
      status: $Enums.StayStatus
    }, ExtArgs["result"]["stay"]>
    composites: {}
  }

  type StayGetPayload<S extends boolean | null | undefined | StayDefaultArgs> = $Result.GetResult<Prisma.$StayPayload, S>

  type StayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StayCountAggregateInputType | true
    }

  export interface StayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stay'], meta: { name: 'Stay' } }
    /**
     * Find zero or one Stay that matches the filter.
     * @param {StayFindUniqueArgs} args - Arguments to find a Stay
     * @example
     * // Get one Stay
     * const stay = await prisma.stay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StayFindUniqueArgs>(args: SelectSubset<T, StayFindUniqueArgs<ExtArgs>>): Prisma__StayClient<$Result.GetResult<Prisma.$StayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stay that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StayFindUniqueOrThrowArgs} args - Arguments to find a Stay
     * @example
     * // Get one Stay
     * const stay = await prisma.stay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StayFindUniqueOrThrowArgs>(args: SelectSubset<T, StayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StayClient<$Result.GetResult<Prisma.$StayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StayFindFirstArgs} args - Arguments to find a Stay
     * @example
     * // Get one Stay
     * const stay = await prisma.stay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StayFindFirstArgs>(args?: SelectSubset<T, StayFindFirstArgs<ExtArgs>>): Prisma__StayClient<$Result.GetResult<Prisma.$StayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StayFindFirstOrThrowArgs} args - Arguments to find a Stay
     * @example
     * // Get one Stay
     * const stay = await prisma.stay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StayFindFirstOrThrowArgs>(args?: SelectSubset<T, StayFindFirstOrThrowArgs<ExtArgs>>): Prisma__StayClient<$Result.GetResult<Prisma.$StayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stays
     * const stays = await prisma.stay.findMany()
     * 
     * // Get first 10 Stays
     * const stays = await prisma.stay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stayWithIdOnly = await prisma.stay.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StayFindManyArgs>(args?: SelectSubset<T, StayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stay.
     * @param {StayCreateArgs} args - Arguments to create a Stay.
     * @example
     * // Create one Stay
     * const Stay = await prisma.stay.create({
     *   data: {
     *     // ... data to create a Stay
     *   }
     * })
     * 
     */
    create<T extends StayCreateArgs>(args: SelectSubset<T, StayCreateArgs<ExtArgs>>): Prisma__StayClient<$Result.GetResult<Prisma.$StayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stays.
     * @param {StayCreateManyArgs} args - Arguments to create many Stays.
     * @example
     * // Create many Stays
     * const stay = await prisma.stay.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StayCreateManyArgs>(args?: SelectSubset<T, StayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stays and returns the data saved in the database.
     * @param {StayCreateManyAndReturnArgs} args - Arguments to create many Stays.
     * @example
     * // Create many Stays
     * const stay = await prisma.stay.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stays and only return the `id`
     * const stayWithIdOnly = await prisma.stay.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StayCreateManyAndReturnArgs>(args?: SelectSubset<T, StayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stay.
     * @param {StayDeleteArgs} args - Arguments to delete one Stay.
     * @example
     * // Delete one Stay
     * const Stay = await prisma.stay.delete({
     *   where: {
     *     // ... filter to delete one Stay
     *   }
     * })
     * 
     */
    delete<T extends StayDeleteArgs>(args: SelectSubset<T, StayDeleteArgs<ExtArgs>>): Prisma__StayClient<$Result.GetResult<Prisma.$StayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stay.
     * @param {StayUpdateArgs} args - Arguments to update one Stay.
     * @example
     * // Update one Stay
     * const stay = await prisma.stay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StayUpdateArgs>(args: SelectSubset<T, StayUpdateArgs<ExtArgs>>): Prisma__StayClient<$Result.GetResult<Prisma.$StayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stays.
     * @param {StayDeleteManyArgs} args - Arguments to filter Stays to delete.
     * @example
     * // Delete a few Stays
     * const { count } = await prisma.stay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StayDeleteManyArgs>(args?: SelectSubset<T, StayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stays
     * const stay = await prisma.stay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StayUpdateManyArgs>(args: SelectSubset<T, StayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stays and returns the data updated in the database.
     * @param {StayUpdateManyAndReturnArgs} args - Arguments to update many Stays.
     * @example
     * // Update many Stays
     * const stay = await prisma.stay.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stays and only return the `id`
     * const stayWithIdOnly = await prisma.stay.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StayUpdateManyAndReturnArgs>(args: SelectSubset<T, StayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stay.
     * @param {StayUpsertArgs} args - Arguments to update or create a Stay.
     * @example
     * // Update or create a Stay
     * const stay = await prisma.stay.upsert({
     *   create: {
     *     // ... data to create a Stay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stay we want to update
     *   }
     * })
     */
    upsert<T extends StayUpsertArgs>(args: SelectSubset<T, StayUpsertArgs<ExtArgs>>): Prisma__StayClient<$Result.GetResult<Prisma.$StayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StayCountArgs} args - Arguments to filter Stays to count.
     * @example
     * // Count the number of Stays
     * const count = await prisma.stay.count({
     *   where: {
     *     // ... the filter for the Stays we want to count
     *   }
     * })
    **/
    count<T extends StayCountArgs>(
      args?: Subset<T, StayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StayAggregateArgs>(args: Subset<T, StayAggregateArgs>): Prisma.PrismaPromise<GetStayAggregateType<T>>

    /**
     * Group by Stay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StayGroupByArgs['orderBy'] }
        : { orderBy?: StayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stay model
   */
  readonly fields: StayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservation<T extends ReservationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservationDefaultArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    charges<T extends Stay$chargesArgs<ExtArgs> = {}>(args?: Subset<T, Stay$chargesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Stay$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Stay$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stayGuests<T extends Stay$stayGuestsArgs<ExtArgs> = {}>(args?: Subset<T, Stay$stayGuestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StayGuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stay model
   */
  interface StayFieldRefs {
    readonly id: FieldRef<"Stay", 'String'>
    readonly reservationId: FieldRef<"Stay", 'String'>
    readonly checkInAt: FieldRef<"Stay", 'DateTime'>
    readonly checkOutAt: FieldRef<"Stay", 'DateTime'>
    readonly status: FieldRef<"Stay", 'StayStatus'>
  }
    

  // Custom InputTypes
  /**
   * Stay findUnique
   */
  export type StayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stay
     */
    select?: StaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stay
     */
    omit?: StayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayInclude<ExtArgs> | null
    /**
     * Filter, which Stay to fetch.
     */
    where: StayWhereUniqueInput
  }

  /**
   * Stay findUniqueOrThrow
   */
  export type StayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stay
     */
    select?: StaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stay
     */
    omit?: StayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayInclude<ExtArgs> | null
    /**
     * Filter, which Stay to fetch.
     */
    where: StayWhereUniqueInput
  }

  /**
   * Stay findFirst
   */
  export type StayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stay
     */
    select?: StaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stay
     */
    omit?: StayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayInclude<ExtArgs> | null
    /**
     * Filter, which Stay to fetch.
     */
    where?: StayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stays to fetch.
     */
    orderBy?: StayOrderByWithRelationInput | StayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stays.
     */
    cursor?: StayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stays.
     */
    distinct?: StayScalarFieldEnum | StayScalarFieldEnum[]
  }

  /**
   * Stay findFirstOrThrow
   */
  export type StayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stay
     */
    select?: StaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stay
     */
    omit?: StayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayInclude<ExtArgs> | null
    /**
     * Filter, which Stay to fetch.
     */
    where?: StayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stays to fetch.
     */
    orderBy?: StayOrderByWithRelationInput | StayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stays.
     */
    cursor?: StayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stays.
     */
    distinct?: StayScalarFieldEnum | StayScalarFieldEnum[]
  }

  /**
   * Stay findMany
   */
  export type StayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stay
     */
    select?: StaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stay
     */
    omit?: StayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayInclude<ExtArgs> | null
    /**
     * Filter, which Stays to fetch.
     */
    where?: StayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stays to fetch.
     */
    orderBy?: StayOrderByWithRelationInput | StayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stays.
     */
    cursor?: StayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stays.
     */
    skip?: number
    distinct?: StayScalarFieldEnum | StayScalarFieldEnum[]
  }

  /**
   * Stay create
   */
  export type StayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stay
     */
    select?: StaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stay
     */
    omit?: StayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayInclude<ExtArgs> | null
    /**
     * The data needed to create a Stay.
     */
    data: XOR<StayCreateInput, StayUncheckedCreateInput>
  }

  /**
   * Stay createMany
   */
  export type StayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stays.
     */
    data: StayCreateManyInput | StayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stay createManyAndReturn
   */
  export type StayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stay
     */
    select?: StaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stay
     */
    omit?: StayOmit<ExtArgs> | null
    /**
     * The data used to create many Stays.
     */
    data: StayCreateManyInput | StayCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stay update
   */
  export type StayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stay
     */
    select?: StaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stay
     */
    omit?: StayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayInclude<ExtArgs> | null
    /**
     * The data needed to update a Stay.
     */
    data: XOR<StayUpdateInput, StayUncheckedUpdateInput>
    /**
     * Choose, which Stay to update.
     */
    where: StayWhereUniqueInput
  }

  /**
   * Stay updateMany
   */
  export type StayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stays.
     */
    data: XOR<StayUpdateManyMutationInput, StayUncheckedUpdateManyInput>
    /**
     * Filter which Stays to update
     */
    where?: StayWhereInput
    /**
     * Limit how many Stays to update.
     */
    limit?: number
  }

  /**
   * Stay updateManyAndReturn
   */
  export type StayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stay
     */
    select?: StaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stay
     */
    omit?: StayOmit<ExtArgs> | null
    /**
     * The data used to update Stays.
     */
    data: XOR<StayUpdateManyMutationInput, StayUncheckedUpdateManyInput>
    /**
     * Filter which Stays to update
     */
    where?: StayWhereInput
    /**
     * Limit how many Stays to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stay upsert
   */
  export type StayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stay
     */
    select?: StaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stay
     */
    omit?: StayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayInclude<ExtArgs> | null
    /**
     * The filter to search for the Stay to update in case it exists.
     */
    where: StayWhereUniqueInput
    /**
     * In case the Stay found by the `where` argument doesn't exist, create a new Stay with this data.
     */
    create: XOR<StayCreateInput, StayUncheckedCreateInput>
    /**
     * In case the Stay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StayUpdateInput, StayUncheckedUpdateInput>
  }

  /**
   * Stay delete
   */
  export type StayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stay
     */
    select?: StaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stay
     */
    omit?: StayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayInclude<ExtArgs> | null
    /**
     * Filter which Stay to delete.
     */
    where: StayWhereUniqueInput
  }

  /**
   * Stay deleteMany
   */
  export type StayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stays to delete
     */
    where?: StayWhereInput
    /**
     * Limit how many Stays to delete.
     */
    limit?: number
  }

  /**
   * Stay.charges
   */
  export type Stay$chargesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charge
     */
    select?: ChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charge
     */
    omit?: ChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeInclude<ExtArgs> | null
    where?: ChargeWhereInput
    orderBy?: ChargeOrderByWithRelationInput | ChargeOrderByWithRelationInput[]
    cursor?: ChargeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChargeScalarFieldEnum | ChargeScalarFieldEnum[]
  }

  /**
   * Stay.payments
   */
  export type Stay$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Stay.stayGuests
   */
  export type Stay$stayGuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StayGuest
     */
    select?: StayGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StayGuest
     */
    omit?: StayGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayGuestInclude<ExtArgs> | null
    where?: StayGuestWhereInput
    orderBy?: StayGuestOrderByWithRelationInput | StayGuestOrderByWithRelationInput[]
    cursor?: StayGuestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StayGuestScalarFieldEnum | StayGuestScalarFieldEnum[]
  }

  /**
   * Stay without action
   */
  export type StayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stay
     */
    select?: StaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stay
     */
    omit?: StayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayInclude<ExtArgs> | null
  }


  /**
   * Model StayGuest
   */

  export type AggregateStayGuest = {
    _count: StayGuestCountAggregateOutputType | null
    _min: StayGuestMinAggregateOutputType | null
    _max: StayGuestMaxAggregateOutputType | null
  }

  export type StayGuestMinAggregateOutputType = {
    stayId: string | null
    guestId: string | null
  }

  export type StayGuestMaxAggregateOutputType = {
    stayId: string | null
    guestId: string | null
  }

  export type StayGuestCountAggregateOutputType = {
    stayId: number
    guestId: number
    _all: number
  }


  export type StayGuestMinAggregateInputType = {
    stayId?: true
    guestId?: true
  }

  export type StayGuestMaxAggregateInputType = {
    stayId?: true
    guestId?: true
  }

  export type StayGuestCountAggregateInputType = {
    stayId?: true
    guestId?: true
    _all?: true
  }

  export type StayGuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StayGuest to aggregate.
     */
    where?: StayGuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StayGuests to fetch.
     */
    orderBy?: StayGuestOrderByWithRelationInput | StayGuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StayGuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StayGuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StayGuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StayGuests
    **/
    _count?: true | StayGuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StayGuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StayGuestMaxAggregateInputType
  }

  export type GetStayGuestAggregateType<T extends StayGuestAggregateArgs> = {
        [P in keyof T & keyof AggregateStayGuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStayGuest[P]>
      : GetScalarType<T[P], AggregateStayGuest[P]>
  }




  export type StayGuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StayGuestWhereInput
    orderBy?: StayGuestOrderByWithAggregationInput | StayGuestOrderByWithAggregationInput[]
    by: StayGuestScalarFieldEnum[] | StayGuestScalarFieldEnum
    having?: StayGuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StayGuestCountAggregateInputType | true
    _min?: StayGuestMinAggregateInputType
    _max?: StayGuestMaxAggregateInputType
  }

  export type StayGuestGroupByOutputType = {
    stayId: string
    guestId: string
    _count: StayGuestCountAggregateOutputType | null
    _min: StayGuestMinAggregateOutputType | null
    _max: StayGuestMaxAggregateOutputType | null
  }

  type GetStayGuestGroupByPayload<T extends StayGuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StayGuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StayGuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StayGuestGroupByOutputType[P]>
            : GetScalarType<T[P], StayGuestGroupByOutputType[P]>
        }
      >
    >


  export type StayGuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stayId?: boolean
    guestId?: boolean
    stay?: boolean | StayDefaultArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stayGuest"]>

  export type StayGuestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stayId?: boolean
    guestId?: boolean
    stay?: boolean | StayDefaultArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stayGuest"]>

  export type StayGuestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stayId?: boolean
    guestId?: boolean
    stay?: boolean | StayDefaultArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stayGuest"]>

  export type StayGuestSelectScalar = {
    stayId?: boolean
    guestId?: boolean
  }

  export type StayGuestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"stayId" | "guestId", ExtArgs["result"]["stayGuest"]>
  export type StayGuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stay?: boolean | StayDefaultArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }
  export type StayGuestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stay?: boolean | StayDefaultArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }
  export type StayGuestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stay?: boolean | StayDefaultArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }

  export type $StayGuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StayGuest"
    objects: {
      stay: Prisma.$StayPayload<ExtArgs>
      guest: Prisma.$GuestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      stayId: string
      guestId: string
    }, ExtArgs["result"]["stayGuest"]>
    composites: {}
  }

  type StayGuestGetPayload<S extends boolean | null | undefined | StayGuestDefaultArgs> = $Result.GetResult<Prisma.$StayGuestPayload, S>

  type StayGuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StayGuestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StayGuestCountAggregateInputType | true
    }

  export interface StayGuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StayGuest'], meta: { name: 'StayGuest' } }
    /**
     * Find zero or one StayGuest that matches the filter.
     * @param {StayGuestFindUniqueArgs} args - Arguments to find a StayGuest
     * @example
     * // Get one StayGuest
     * const stayGuest = await prisma.stayGuest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StayGuestFindUniqueArgs>(args: SelectSubset<T, StayGuestFindUniqueArgs<ExtArgs>>): Prisma__StayGuestClient<$Result.GetResult<Prisma.$StayGuestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StayGuest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StayGuestFindUniqueOrThrowArgs} args - Arguments to find a StayGuest
     * @example
     * // Get one StayGuest
     * const stayGuest = await prisma.stayGuest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StayGuestFindUniqueOrThrowArgs>(args: SelectSubset<T, StayGuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StayGuestClient<$Result.GetResult<Prisma.$StayGuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StayGuest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StayGuestFindFirstArgs} args - Arguments to find a StayGuest
     * @example
     * // Get one StayGuest
     * const stayGuest = await prisma.stayGuest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StayGuestFindFirstArgs>(args?: SelectSubset<T, StayGuestFindFirstArgs<ExtArgs>>): Prisma__StayGuestClient<$Result.GetResult<Prisma.$StayGuestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StayGuest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StayGuestFindFirstOrThrowArgs} args - Arguments to find a StayGuest
     * @example
     * // Get one StayGuest
     * const stayGuest = await prisma.stayGuest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StayGuestFindFirstOrThrowArgs>(args?: SelectSubset<T, StayGuestFindFirstOrThrowArgs<ExtArgs>>): Prisma__StayGuestClient<$Result.GetResult<Prisma.$StayGuestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StayGuests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StayGuestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StayGuests
     * const stayGuests = await prisma.stayGuest.findMany()
     * 
     * // Get first 10 StayGuests
     * const stayGuests = await prisma.stayGuest.findMany({ take: 10 })
     * 
     * // Only select the `stayId`
     * const stayGuestWithStayIdOnly = await prisma.stayGuest.findMany({ select: { stayId: true } })
     * 
     */
    findMany<T extends StayGuestFindManyArgs>(args?: SelectSubset<T, StayGuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StayGuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StayGuest.
     * @param {StayGuestCreateArgs} args - Arguments to create a StayGuest.
     * @example
     * // Create one StayGuest
     * const StayGuest = await prisma.stayGuest.create({
     *   data: {
     *     // ... data to create a StayGuest
     *   }
     * })
     * 
     */
    create<T extends StayGuestCreateArgs>(args: SelectSubset<T, StayGuestCreateArgs<ExtArgs>>): Prisma__StayGuestClient<$Result.GetResult<Prisma.$StayGuestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StayGuests.
     * @param {StayGuestCreateManyArgs} args - Arguments to create many StayGuests.
     * @example
     * // Create many StayGuests
     * const stayGuest = await prisma.stayGuest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StayGuestCreateManyArgs>(args?: SelectSubset<T, StayGuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StayGuests and returns the data saved in the database.
     * @param {StayGuestCreateManyAndReturnArgs} args - Arguments to create many StayGuests.
     * @example
     * // Create many StayGuests
     * const stayGuest = await prisma.stayGuest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StayGuests and only return the `stayId`
     * const stayGuestWithStayIdOnly = await prisma.stayGuest.createManyAndReturn({
     *   select: { stayId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StayGuestCreateManyAndReturnArgs>(args?: SelectSubset<T, StayGuestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StayGuestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StayGuest.
     * @param {StayGuestDeleteArgs} args - Arguments to delete one StayGuest.
     * @example
     * // Delete one StayGuest
     * const StayGuest = await prisma.stayGuest.delete({
     *   where: {
     *     // ... filter to delete one StayGuest
     *   }
     * })
     * 
     */
    delete<T extends StayGuestDeleteArgs>(args: SelectSubset<T, StayGuestDeleteArgs<ExtArgs>>): Prisma__StayGuestClient<$Result.GetResult<Prisma.$StayGuestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StayGuest.
     * @param {StayGuestUpdateArgs} args - Arguments to update one StayGuest.
     * @example
     * // Update one StayGuest
     * const stayGuest = await prisma.stayGuest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StayGuestUpdateArgs>(args: SelectSubset<T, StayGuestUpdateArgs<ExtArgs>>): Prisma__StayGuestClient<$Result.GetResult<Prisma.$StayGuestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StayGuests.
     * @param {StayGuestDeleteManyArgs} args - Arguments to filter StayGuests to delete.
     * @example
     * // Delete a few StayGuests
     * const { count } = await prisma.stayGuest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StayGuestDeleteManyArgs>(args?: SelectSubset<T, StayGuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StayGuests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StayGuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StayGuests
     * const stayGuest = await prisma.stayGuest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StayGuestUpdateManyArgs>(args: SelectSubset<T, StayGuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StayGuests and returns the data updated in the database.
     * @param {StayGuestUpdateManyAndReturnArgs} args - Arguments to update many StayGuests.
     * @example
     * // Update many StayGuests
     * const stayGuest = await prisma.stayGuest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StayGuests and only return the `stayId`
     * const stayGuestWithStayIdOnly = await prisma.stayGuest.updateManyAndReturn({
     *   select: { stayId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StayGuestUpdateManyAndReturnArgs>(args: SelectSubset<T, StayGuestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StayGuestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StayGuest.
     * @param {StayGuestUpsertArgs} args - Arguments to update or create a StayGuest.
     * @example
     * // Update or create a StayGuest
     * const stayGuest = await prisma.stayGuest.upsert({
     *   create: {
     *     // ... data to create a StayGuest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StayGuest we want to update
     *   }
     * })
     */
    upsert<T extends StayGuestUpsertArgs>(args: SelectSubset<T, StayGuestUpsertArgs<ExtArgs>>): Prisma__StayGuestClient<$Result.GetResult<Prisma.$StayGuestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StayGuests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StayGuestCountArgs} args - Arguments to filter StayGuests to count.
     * @example
     * // Count the number of StayGuests
     * const count = await prisma.stayGuest.count({
     *   where: {
     *     // ... the filter for the StayGuests we want to count
     *   }
     * })
    **/
    count<T extends StayGuestCountArgs>(
      args?: Subset<T, StayGuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StayGuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StayGuest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StayGuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StayGuestAggregateArgs>(args: Subset<T, StayGuestAggregateArgs>): Prisma.PrismaPromise<GetStayGuestAggregateType<T>>

    /**
     * Group by StayGuest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StayGuestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StayGuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StayGuestGroupByArgs['orderBy'] }
        : { orderBy?: StayGuestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StayGuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStayGuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StayGuest model
   */
  readonly fields: StayGuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StayGuest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StayGuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stay<T extends StayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StayDefaultArgs<ExtArgs>>): Prisma__StayClient<$Result.GetResult<Prisma.$StayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    guest<T extends GuestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuestDefaultArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StayGuest model
   */
  interface StayGuestFieldRefs {
    readonly stayId: FieldRef<"StayGuest", 'String'>
    readonly guestId: FieldRef<"StayGuest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StayGuest findUnique
   */
  export type StayGuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StayGuest
     */
    select?: StayGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StayGuest
     */
    omit?: StayGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayGuestInclude<ExtArgs> | null
    /**
     * Filter, which StayGuest to fetch.
     */
    where: StayGuestWhereUniqueInput
  }

  /**
   * StayGuest findUniqueOrThrow
   */
  export type StayGuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StayGuest
     */
    select?: StayGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StayGuest
     */
    omit?: StayGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayGuestInclude<ExtArgs> | null
    /**
     * Filter, which StayGuest to fetch.
     */
    where: StayGuestWhereUniqueInput
  }

  /**
   * StayGuest findFirst
   */
  export type StayGuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StayGuest
     */
    select?: StayGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StayGuest
     */
    omit?: StayGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayGuestInclude<ExtArgs> | null
    /**
     * Filter, which StayGuest to fetch.
     */
    where?: StayGuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StayGuests to fetch.
     */
    orderBy?: StayGuestOrderByWithRelationInput | StayGuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StayGuests.
     */
    cursor?: StayGuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StayGuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StayGuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StayGuests.
     */
    distinct?: StayGuestScalarFieldEnum | StayGuestScalarFieldEnum[]
  }

  /**
   * StayGuest findFirstOrThrow
   */
  export type StayGuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StayGuest
     */
    select?: StayGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StayGuest
     */
    omit?: StayGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayGuestInclude<ExtArgs> | null
    /**
     * Filter, which StayGuest to fetch.
     */
    where?: StayGuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StayGuests to fetch.
     */
    orderBy?: StayGuestOrderByWithRelationInput | StayGuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StayGuests.
     */
    cursor?: StayGuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StayGuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StayGuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StayGuests.
     */
    distinct?: StayGuestScalarFieldEnum | StayGuestScalarFieldEnum[]
  }

  /**
   * StayGuest findMany
   */
  export type StayGuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StayGuest
     */
    select?: StayGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StayGuest
     */
    omit?: StayGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayGuestInclude<ExtArgs> | null
    /**
     * Filter, which StayGuests to fetch.
     */
    where?: StayGuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StayGuests to fetch.
     */
    orderBy?: StayGuestOrderByWithRelationInput | StayGuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StayGuests.
     */
    cursor?: StayGuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StayGuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StayGuests.
     */
    skip?: number
    distinct?: StayGuestScalarFieldEnum | StayGuestScalarFieldEnum[]
  }

  /**
   * StayGuest create
   */
  export type StayGuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StayGuest
     */
    select?: StayGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StayGuest
     */
    omit?: StayGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayGuestInclude<ExtArgs> | null
    /**
     * The data needed to create a StayGuest.
     */
    data: XOR<StayGuestCreateInput, StayGuestUncheckedCreateInput>
  }

  /**
   * StayGuest createMany
   */
  export type StayGuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StayGuests.
     */
    data: StayGuestCreateManyInput | StayGuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StayGuest createManyAndReturn
   */
  export type StayGuestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StayGuest
     */
    select?: StayGuestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StayGuest
     */
    omit?: StayGuestOmit<ExtArgs> | null
    /**
     * The data used to create many StayGuests.
     */
    data: StayGuestCreateManyInput | StayGuestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayGuestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StayGuest update
   */
  export type StayGuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StayGuest
     */
    select?: StayGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StayGuest
     */
    omit?: StayGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayGuestInclude<ExtArgs> | null
    /**
     * The data needed to update a StayGuest.
     */
    data: XOR<StayGuestUpdateInput, StayGuestUncheckedUpdateInput>
    /**
     * Choose, which StayGuest to update.
     */
    where: StayGuestWhereUniqueInput
  }

  /**
   * StayGuest updateMany
   */
  export type StayGuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StayGuests.
     */
    data: XOR<StayGuestUpdateManyMutationInput, StayGuestUncheckedUpdateManyInput>
    /**
     * Filter which StayGuests to update
     */
    where?: StayGuestWhereInput
    /**
     * Limit how many StayGuests to update.
     */
    limit?: number
  }

  /**
   * StayGuest updateManyAndReturn
   */
  export type StayGuestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StayGuest
     */
    select?: StayGuestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StayGuest
     */
    omit?: StayGuestOmit<ExtArgs> | null
    /**
     * The data used to update StayGuests.
     */
    data: XOR<StayGuestUpdateManyMutationInput, StayGuestUncheckedUpdateManyInput>
    /**
     * Filter which StayGuests to update
     */
    where?: StayGuestWhereInput
    /**
     * Limit how many StayGuests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayGuestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StayGuest upsert
   */
  export type StayGuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StayGuest
     */
    select?: StayGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StayGuest
     */
    omit?: StayGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayGuestInclude<ExtArgs> | null
    /**
     * The filter to search for the StayGuest to update in case it exists.
     */
    where: StayGuestWhereUniqueInput
    /**
     * In case the StayGuest found by the `where` argument doesn't exist, create a new StayGuest with this data.
     */
    create: XOR<StayGuestCreateInput, StayGuestUncheckedCreateInput>
    /**
     * In case the StayGuest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StayGuestUpdateInput, StayGuestUncheckedUpdateInput>
  }

  /**
   * StayGuest delete
   */
  export type StayGuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StayGuest
     */
    select?: StayGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StayGuest
     */
    omit?: StayGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayGuestInclude<ExtArgs> | null
    /**
     * Filter which StayGuest to delete.
     */
    where: StayGuestWhereUniqueInput
  }

  /**
   * StayGuest deleteMany
   */
  export type StayGuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StayGuests to delete
     */
    where?: StayGuestWhereInput
    /**
     * Limit how many StayGuests to delete.
     */
    limit?: number
  }

  /**
   * StayGuest without action
   */
  export type StayGuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StayGuest
     */
    select?: StayGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StayGuest
     */
    omit?: StayGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StayGuestInclude<ExtArgs> | null
  }


  /**
   * Model Charge
   */

  export type AggregateCharge = {
    _count: ChargeCountAggregateOutputType | null
    _avg: ChargeAvgAggregateOutputType | null
    _sum: ChargeSumAggregateOutputType | null
    _min: ChargeMinAggregateOutputType | null
    _max: ChargeMaxAggregateOutputType | null
  }

  export type ChargeAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type ChargeSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type ChargeMinAggregateOutputType = {
    id: string | null
    stayId: string | null
    type: $Enums.ChargeType | null
    description: string | null
    amount: Decimal | null
    occurredAt: Date | null
  }

  export type ChargeMaxAggregateOutputType = {
    id: string | null
    stayId: string | null
    type: $Enums.ChargeType | null
    description: string | null
    amount: Decimal | null
    occurredAt: Date | null
  }

  export type ChargeCountAggregateOutputType = {
    id: number
    stayId: number
    type: number
    description: number
    amount: number
    occurredAt: number
    _all: number
  }


  export type ChargeAvgAggregateInputType = {
    amount?: true
  }

  export type ChargeSumAggregateInputType = {
    amount?: true
  }

  export type ChargeMinAggregateInputType = {
    id?: true
    stayId?: true
    type?: true
    description?: true
    amount?: true
    occurredAt?: true
  }

  export type ChargeMaxAggregateInputType = {
    id?: true
    stayId?: true
    type?: true
    description?: true
    amount?: true
    occurredAt?: true
  }

  export type ChargeCountAggregateInputType = {
    id?: true
    stayId?: true
    type?: true
    description?: true
    amount?: true
    occurredAt?: true
    _all?: true
  }

  export type ChargeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Charge to aggregate.
     */
    where?: ChargeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charges to fetch.
     */
    orderBy?: ChargeOrderByWithRelationInput | ChargeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChargeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Charges
    **/
    _count?: true | ChargeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChargeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChargeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChargeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChargeMaxAggregateInputType
  }

  export type GetChargeAggregateType<T extends ChargeAggregateArgs> = {
        [P in keyof T & keyof AggregateCharge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharge[P]>
      : GetScalarType<T[P], AggregateCharge[P]>
  }




  export type ChargeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChargeWhereInput
    orderBy?: ChargeOrderByWithAggregationInput | ChargeOrderByWithAggregationInput[]
    by: ChargeScalarFieldEnum[] | ChargeScalarFieldEnum
    having?: ChargeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChargeCountAggregateInputType | true
    _avg?: ChargeAvgAggregateInputType
    _sum?: ChargeSumAggregateInputType
    _min?: ChargeMinAggregateInputType
    _max?: ChargeMaxAggregateInputType
  }

  export type ChargeGroupByOutputType = {
    id: string
    stayId: string
    type: $Enums.ChargeType
    description: string
    amount: Decimal
    occurredAt: Date
    _count: ChargeCountAggregateOutputType | null
    _avg: ChargeAvgAggregateOutputType | null
    _sum: ChargeSumAggregateOutputType | null
    _min: ChargeMinAggregateOutputType | null
    _max: ChargeMaxAggregateOutputType | null
  }

  type GetChargeGroupByPayload<T extends ChargeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChargeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChargeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChargeGroupByOutputType[P]>
            : GetScalarType<T[P], ChargeGroupByOutputType[P]>
        }
      >
    >


  export type ChargeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stayId?: boolean
    type?: boolean
    description?: boolean
    amount?: boolean
    occurredAt?: boolean
    stay?: boolean | StayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["charge"]>

  export type ChargeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stayId?: boolean
    type?: boolean
    description?: boolean
    amount?: boolean
    occurredAt?: boolean
    stay?: boolean | StayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["charge"]>

  export type ChargeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stayId?: boolean
    type?: boolean
    description?: boolean
    amount?: boolean
    occurredAt?: boolean
    stay?: boolean | StayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["charge"]>

  export type ChargeSelectScalar = {
    id?: boolean
    stayId?: boolean
    type?: boolean
    description?: boolean
    amount?: boolean
    occurredAt?: boolean
  }

  export type ChargeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stayId" | "type" | "description" | "amount" | "occurredAt", ExtArgs["result"]["charge"]>
  export type ChargeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stay?: boolean | StayDefaultArgs<ExtArgs>
  }
  export type ChargeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stay?: boolean | StayDefaultArgs<ExtArgs>
  }
  export type ChargeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stay?: boolean | StayDefaultArgs<ExtArgs>
  }

  export type $ChargePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Charge"
    objects: {
      stay: Prisma.$StayPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      stayId: string
      type: $Enums.ChargeType
      description: string
      amount: Prisma.Decimal
      occurredAt: Date
    }, ExtArgs["result"]["charge"]>
    composites: {}
  }

  type ChargeGetPayload<S extends boolean | null | undefined | ChargeDefaultArgs> = $Result.GetResult<Prisma.$ChargePayload, S>

  type ChargeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChargeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChargeCountAggregateInputType | true
    }

  export interface ChargeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Charge'], meta: { name: 'Charge' } }
    /**
     * Find zero or one Charge that matches the filter.
     * @param {ChargeFindUniqueArgs} args - Arguments to find a Charge
     * @example
     * // Get one Charge
     * const charge = await prisma.charge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChargeFindUniqueArgs>(args: SelectSubset<T, ChargeFindUniqueArgs<ExtArgs>>): Prisma__ChargeClient<$Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Charge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChargeFindUniqueOrThrowArgs} args - Arguments to find a Charge
     * @example
     * // Get one Charge
     * const charge = await prisma.charge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChargeFindUniqueOrThrowArgs>(args: SelectSubset<T, ChargeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChargeClient<$Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Charge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeFindFirstArgs} args - Arguments to find a Charge
     * @example
     * // Get one Charge
     * const charge = await prisma.charge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChargeFindFirstArgs>(args?: SelectSubset<T, ChargeFindFirstArgs<ExtArgs>>): Prisma__ChargeClient<$Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Charge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeFindFirstOrThrowArgs} args - Arguments to find a Charge
     * @example
     * // Get one Charge
     * const charge = await prisma.charge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChargeFindFirstOrThrowArgs>(args?: SelectSubset<T, ChargeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChargeClient<$Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Charges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Charges
     * const charges = await prisma.charge.findMany()
     * 
     * // Get first 10 Charges
     * const charges = await prisma.charge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chargeWithIdOnly = await prisma.charge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChargeFindManyArgs>(args?: SelectSubset<T, ChargeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Charge.
     * @param {ChargeCreateArgs} args - Arguments to create a Charge.
     * @example
     * // Create one Charge
     * const Charge = await prisma.charge.create({
     *   data: {
     *     // ... data to create a Charge
     *   }
     * })
     * 
     */
    create<T extends ChargeCreateArgs>(args: SelectSubset<T, ChargeCreateArgs<ExtArgs>>): Prisma__ChargeClient<$Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Charges.
     * @param {ChargeCreateManyArgs} args - Arguments to create many Charges.
     * @example
     * // Create many Charges
     * const charge = await prisma.charge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChargeCreateManyArgs>(args?: SelectSubset<T, ChargeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Charges and returns the data saved in the database.
     * @param {ChargeCreateManyAndReturnArgs} args - Arguments to create many Charges.
     * @example
     * // Create many Charges
     * const charge = await prisma.charge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Charges and only return the `id`
     * const chargeWithIdOnly = await prisma.charge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChargeCreateManyAndReturnArgs>(args?: SelectSubset<T, ChargeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Charge.
     * @param {ChargeDeleteArgs} args - Arguments to delete one Charge.
     * @example
     * // Delete one Charge
     * const Charge = await prisma.charge.delete({
     *   where: {
     *     // ... filter to delete one Charge
     *   }
     * })
     * 
     */
    delete<T extends ChargeDeleteArgs>(args: SelectSubset<T, ChargeDeleteArgs<ExtArgs>>): Prisma__ChargeClient<$Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Charge.
     * @param {ChargeUpdateArgs} args - Arguments to update one Charge.
     * @example
     * // Update one Charge
     * const charge = await prisma.charge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChargeUpdateArgs>(args: SelectSubset<T, ChargeUpdateArgs<ExtArgs>>): Prisma__ChargeClient<$Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Charges.
     * @param {ChargeDeleteManyArgs} args - Arguments to filter Charges to delete.
     * @example
     * // Delete a few Charges
     * const { count } = await prisma.charge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChargeDeleteManyArgs>(args?: SelectSubset<T, ChargeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Charges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Charges
     * const charge = await prisma.charge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChargeUpdateManyArgs>(args: SelectSubset<T, ChargeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Charges and returns the data updated in the database.
     * @param {ChargeUpdateManyAndReturnArgs} args - Arguments to update many Charges.
     * @example
     * // Update many Charges
     * const charge = await prisma.charge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Charges and only return the `id`
     * const chargeWithIdOnly = await prisma.charge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChargeUpdateManyAndReturnArgs>(args: SelectSubset<T, ChargeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Charge.
     * @param {ChargeUpsertArgs} args - Arguments to update or create a Charge.
     * @example
     * // Update or create a Charge
     * const charge = await prisma.charge.upsert({
     *   create: {
     *     // ... data to create a Charge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Charge we want to update
     *   }
     * })
     */
    upsert<T extends ChargeUpsertArgs>(args: SelectSubset<T, ChargeUpsertArgs<ExtArgs>>): Prisma__ChargeClient<$Result.GetResult<Prisma.$ChargePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Charges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeCountArgs} args - Arguments to filter Charges to count.
     * @example
     * // Count the number of Charges
     * const count = await prisma.charge.count({
     *   where: {
     *     // ... the filter for the Charges we want to count
     *   }
     * })
    **/
    count<T extends ChargeCountArgs>(
      args?: Subset<T, ChargeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChargeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Charge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChargeAggregateArgs>(args: Subset<T, ChargeAggregateArgs>): Prisma.PrismaPromise<GetChargeAggregateType<T>>

    /**
     * Group by Charge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChargeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChargeGroupByArgs['orderBy'] }
        : { orderBy?: ChargeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChargeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChargeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Charge model
   */
  readonly fields: ChargeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Charge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChargeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stay<T extends StayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StayDefaultArgs<ExtArgs>>): Prisma__StayClient<$Result.GetResult<Prisma.$StayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Charge model
   */
  interface ChargeFieldRefs {
    readonly id: FieldRef<"Charge", 'String'>
    readonly stayId: FieldRef<"Charge", 'String'>
    readonly type: FieldRef<"Charge", 'ChargeType'>
    readonly description: FieldRef<"Charge", 'String'>
    readonly amount: FieldRef<"Charge", 'Decimal'>
    readonly occurredAt: FieldRef<"Charge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Charge findUnique
   */
  export type ChargeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charge
     */
    select?: ChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charge
     */
    omit?: ChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeInclude<ExtArgs> | null
    /**
     * Filter, which Charge to fetch.
     */
    where: ChargeWhereUniqueInput
  }

  /**
   * Charge findUniqueOrThrow
   */
  export type ChargeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charge
     */
    select?: ChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charge
     */
    omit?: ChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeInclude<ExtArgs> | null
    /**
     * Filter, which Charge to fetch.
     */
    where: ChargeWhereUniqueInput
  }

  /**
   * Charge findFirst
   */
  export type ChargeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charge
     */
    select?: ChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charge
     */
    omit?: ChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeInclude<ExtArgs> | null
    /**
     * Filter, which Charge to fetch.
     */
    where?: ChargeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charges to fetch.
     */
    orderBy?: ChargeOrderByWithRelationInput | ChargeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Charges.
     */
    cursor?: ChargeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Charges.
     */
    distinct?: ChargeScalarFieldEnum | ChargeScalarFieldEnum[]
  }

  /**
   * Charge findFirstOrThrow
   */
  export type ChargeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charge
     */
    select?: ChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charge
     */
    omit?: ChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeInclude<ExtArgs> | null
    /**
     * Filter, which Charge to fetch.
     */
    where?: ChargeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charges to fetch.
     */
    orderBy?: ChargeOrderByWithRelationInput | ChargeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Charges.
     */
    cursor?: ChargeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Charges.
     */
    distinct?: ChargeScalarFieldEnum | ChargeScalarFieldEnum[]
  }

  /**
   * Charge findMany
   */
  export type ChargeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charge
     */
    select?: ChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charge
     */
    omit?: ChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeInclude<ExtArgs> | null
    /**
     * Filter, which Charges to fetch.
     */
    where?: ChargeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charges to fetch.
     */
    orderBy?: ChargeOrderByWithRelationInput | ChargeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Charges.
     */
    cursor?: ChargeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charges.
     */
    skip?: number
    distinct?: ChargeScalarFieldEnum | ChargeScalarFieldEnum[]
  }

  /**
   * Charge create
   */
  export type ChargeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charge
     */
    select?: ChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charge
     */
    omit?: ChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeInclude<ExtArgs> | null
    /**
     * The data needed to create a Charge.
     */
    data: XOR<ChargeCreateInput, ChargeUncheckedCreateInput>
  }

  /**
   * Charge createMany
   */
  export type ChargeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Charges.
     */
    data: ChargeCreateManyInput | ChargeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Charge createManyAndReturn
   */
  export type ChargeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charge
     */
    select?: ChargeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Charge
     */
    omit?: ChargeOmit<ExtArgs> | null
    /**
     * The data used to create many Charges.
     */
    data: ChargeCreateManyInput | ChargeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Charge update
   */
  export type ChargeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charge
     */
    select?: ChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charge
     */
    omit?: ChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeInclude<ExtArgs> | null
    /**
     * The data needed to update a Charge.
     */
    data: XOR<ChargeUpdateInput, ChargeUncheckedUpdateInput>
    /**
     * Choose, which Charge to update.
     */
    where: ChargeWhereUniqueInput
  }

  /**
   * Charge updateMany
   */
  export type ChargeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Charges.
     */
    data: XOR<ChargeUpdateManyMutationInput, ChargeUncheckedUpdateManyInput>
    /**
     * Filter which Charges to update
     */
    where?: ChargeWhereInput
    /**
     * Limit how many Charges to update.
     */
    limit?: number
  }

  /**
   * Charge updateManyAndReturn
   */
  export type ChargeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charge
     */
    select?: ChargeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Charge
     */
    omit?: ChargeOmit<ExtArgs> | null
    /**
     * The data used to update Charges.
     */
    data: XOR<ChargeUpdateManyMutationInput, ChargeUncheckedUpdateManyInput>
    /**
     * Filter which Charges to update
     */
    where?: ChargeWhereInput
    /**
     * Limit how many Charges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Charge upsert
   */
  export type ChargeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charge
     */
    select?: ChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charge
     */
    omit?: ChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeInclude<ExtArgs> | null
    /**
     * The filter to search for the Charge to update in case it exists.
     */
    where: ChargeWhereUniqueInput
    /**
     * In case the Charge found by the `where` argument doesn't exist, create a new Charge with this data.
     */
    create: XOR<ChargeCreateInput, ChargeUncheckedCreateInput>
    /**
     * In case the Charge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChargeUpdateInput, ChargeUncheckedUpdateInput>
  }

  /**
   * Charge delete
   */
  export type ChargeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charge
     */
    select?: ChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charge
     */
    omit?: ChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeInclude<ExtArgs> | null
    /**
     * Filter which Charge to delete.
     */
    where: ChargeWhereUniqueInput
  }

  /**
   * Charge deleteMany
   */
  export type ChargeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Charges to delete
     */
    where?: ChargeWhereInput
    /**
     * Limit how many Charges to delete.
     */
    limit?: number
  }

  /**
   * Charge without action
   */
  export type ChargeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charge
     */
    select?: ChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charge
     */
    omit?: ChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargeInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    stayId: string | null
    method: $Enums.PaymentMethod | null
    amount: Decimal | null
    paidAt: Date | null
    status: $Enums.PaymentStatus | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    stayId: string | null
    method: $Enums.PaymentMethod | null
    amount: Decimal | null
    paidAt: Date | null
    status: $Enums.PaymentStatus | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    stayId: number
    method: number
    amount: number
    paidAt: number
    status: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    stayId?: true
    method?: true
    amount?: true
    paidAt?: true
    status?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    stayId?: true
    method?: true
    amount?: true
    paidAt?: true
    status?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    stayId?: true
    method?: true
    amount?: true
    paidAt?: true
    status?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    stayId: string
    method: $Enums.PaymentMethod
    amount: Decimal
    paidAt: Date
    status: $Enums.PaymentStatus
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stayId?: boolean
    method?: boolean
    amount?: boolean
    paidAt?: boolean
    status?: boolean
    stay?: boolean | StayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stayId?: boolean
    method?: boolean
    amount?: boolean
    paidAt?: boolean
    status?: boolean
    stay?: boolean | StayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stayId?: boolean
    method?: boolean
    amount?: boolean
    paidAt?: boolean
    status?: boolean
    stay?: boolean | StayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    stayId?: boolean
    method?: boolean
    amount?: boolean
    paidAt?: boolean
    status?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stayId" | "method" | "amount" | "paidAt" | "status", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stay?: boolean | StayDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stay?: boolean | StayDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stay?: boolean | StayDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      stay: Prisma.$StayPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      stayId: string
      method: $Enums.PaymentMethod
      amount: Prisma.Decimal
      paidAt: Date
      status: $Enums.PaymentStatus
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stay<T extends StayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StayDefaultArgs<ExtArgs>>): Prisma__StayClient<$Result.GetResult<Prisma.$StayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly stayId: FieldRef<"Payment", 'String'>
    readonly method: FieldRef<"Payment", 'PaymentMethod'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model RoomBlock
   */

  export type AggregateRoomBlock = {
    _count: RoomBlockCountAggregateOutputType | null
    _min: RoomBlockMinAggregateOutputType | null
    _max: RoomBlockMaxAggregateOutputType | null
  }

  export type RoomBlockMinAggregateOutputType = {
    id: string | null
    roomId: string | null
    startDate: Date | null
    endDate: Date | null
    reason: string | null
    createdAt: Date | null
  }

  export type RoomBlockMaxAggregateOutputType = {
    id: string | null
    roomId: string | null
    startDate: Date | null
    endDate: Date | null
    reason: string | null
    createdAt: Date | null
  }

  export type RoomBlockCountAggregateOutputType = {
    id: number
    roomId: number
    startDate: number
    endDate: number
    reason: number
    createdAt: number
    _all: number
  }


  export type RoomBlockMinAggregateInputType = {
    id?: true
    roomId?: true
    startDate?: true
    endDate?: true
    reason?: true
    createdAt?: true
  }

  export type RoomBlockMaxAggregateInputType = {
    id?: true
    roomId?: true
    startDate?: true
    endDate?: true
    reason?: true
    createdAt?: true
  }

  export type RoomBlockCountAggregateInputType = {
    id?: true
    roomId?: true
    startDate?: true
    endDate?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type RoomBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomBlock to aggregate.
     */
    where?: RoomBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomBlocks to fetch.
     */
    orderBy?: RoomBlockOrderByWithRelationInput | RoomBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomBlocks
    **/
    _count?: true | RoomBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomBlockMaxAggregateInputType
  }

  export type GetRoomBlockAggregateType<T extends RoomBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomBlock[P]>
      : GetScalarType<T[P], AggregateRoomBlock[P]>
  }




  export type RoomBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomBlockWhereInput
    orderBy?: RoomBlockOrderByWithAggregationInput | RoomBlockOrderByWithAggregationInput[]
    by: RoomBlockScalarFieldEnum[] | RoomBlockScalarFieldEnum
    having?: RoomBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomBlockCountAggregateInputType | true
    _min?: RoomBlockMinAggregateInputType
    _max?: RoomBlockMaxAggregateInputType
  }

  export type RoomBlockGroupByOutputType = {
    id: string
    roomId: string
    startDate: Date
    endDate: Date
    reason: string | null
    createdAt: Date
    _count: RoomBlockCountAggregateOutputType | null
    _min: RoomBlockMinAggregateOutputType | null
    _max: RoomBlockMaxAggregateOutputType | null
  }

  type GetRoomBlockGroupByPayload<T extends RoomBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomBlockGroupByOutputType[P]>
            : GetScalarType<T[P], RoomBlockGroupByOutputType[P]>
        }
      >
    >


  export type RoomBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    createdAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomBlock"]>

  export type RoomBlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    createdAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomBlock"]>

  export type RoomBlockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    createdAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomBlock"]>

  export type RoomBlockSelectScalar = {
    id?: boolean
    roomId?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type RoomBlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "startDate" | "endDate" | "reason" | "createdAt", ExtArgs["result"]["roomBlock"]>
  export type RoomBlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type RoomBlockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type RoomBlockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $RoomBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomBlock"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomId: string
      startDate: Date
      endDate: Date
      reason: string | null
      createdAt: Date
    }, ExtArgs["result"]["roomBlock"]>
    composites: {}
  }

  type RoomBlockGetPayload<S extends boolean | null | undefined | RoomBlockDefaultArgs> = $Result.GetResult<Prisma.$RoomBlockPayload, S>

  type RoomBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomBlockCountAggregateInputType | true
    }

  export interface RoomBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomBlock'], meta: { name: 'RoomBlock' } }
    /**
     * Find zero or one RoomBlock that matches the filter.
     * @param {RoomBlockFindUniqueArgs} args - Arguments to find a RoomBlock
     * @example
     * // Get one RoomBlock
     * const roomBlock = await prisma.roomBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomBlockFindUniqueArgs>(args: SelectSubset<T, RoomBlockFindUniqueArgs<ExtArgs>>): Prisma__RoomBlockClient<$Result.GetResult<Prisma.$RoomBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomBlock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomBlockFindUniqueOrThrowArgs} args - Arguments to find a RoomBlock
     * @example
     * // Get one RoomBlock
     * const roomBlock = await prisma.roomBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomBlockFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomBlockClient<$Result.GetResult<Prisma.$RoomBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomBlockFindFirstArgs} args - Arguments to find a RoomBlock
     * @example
     * // Get one RoomBlock
     * const roomBlock = await prisma.roomBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomBlockFindFirstArgs>(args?: SelectSubset<T, RoomBlockFindFirstArgs<ExtArgs>>): Prisma__RoomBlockClient<$Result.GetResult<Prisma.$RoomBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomBlockFindFirstOrThrowArgs} args - Arguments to find a RoomBlock
     * @example
     * // Get one RoomBlock
     * const roomBlock = await prisma.roomBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomBlockFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomBlockClient<$Result.GetResult<Prisma.$RoomBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomBlocks
     * const roomBlocks = await prisma.roomBlock.findMany()
     * 
     * // Get first 10 RoomBlocks
     * const roomBlocks = await prisma.roomBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomBlockWithIdOnly = await prisma.roomBlock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomBlockFindManyArgs>(args?: SelectSubset<T, RoomBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomBlock.
     * @param {RoomBlockCreateArgs} args - Arguments to create a RoomBlock.
     * @example
     * // Create one RoomBlock
     * const RoomBlock = await prisma.roomBlock.create({
     *   data: {
     *     // ... data to create a RoomBlock
     *   }
     * })
     * 
     */
    create<T extends RoomBlockCreateArgs>(args: SelectSubset<T, RoomBlockCreateArgs<ExtArgs>>): Prisma__RoomBlockClient<$Result.GetResult<Prisma.$RoomBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomBlocks.
     * @param {RoomBlockCreateManyArgs} args - Arguments to create many RoomBlocks.
     * @example
     * // Create many RoomBlocks
     * const roomBlock = await prisma.roomBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomBlockCreateManyArgs>(args?: SelectSubset<T, RoomBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomBlocks and returns the data saved in the database.
     * @param {RoomBlockCreateManyAndReturnArgs} args - Arguments to create many RoomBlocks.
     * @example
     * // Create many RoomBlocks
     * const roomBlock = await prisma.roomBlock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomBlocks and only return the `id`
     * const roomBlockWithIdOnly = await prisma.roomBlock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomBlockCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomBlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomBlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomBlock.
     * @param {RoomBlockDeleteArgs} args - Arguments to delete one RoomBlock.
     * @example
     * // Delete one RoomBlock
     * const RoomBlock = await prisma.roomBlock.delete({
     *   where: {
     *     // ... filter to delete one RoomBlock
     *   }
     * })
     * 
     */
    delete<T extends RoomBlockDeleteArgs>(args: SelectSubset<T, RoomBlockDeleteArgs<ExtArgs>>): Prisma__RoomBlockClient<$Result.GetResult<Prisma.$RoomBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomBlock.
     * @param {RoomBlockUpdateArgs} args - Arguments to update one RoomBlock.
     * @example
     * // Update one RoomBlock
     * const roomBlock = await prisma.roomBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomBlockUpdateArgs>(args: SelectSubset<T, RoomBlockUpdateArgs<ExtArgs>>): Prisma__RoomBlockClient<$Result.GetResult<Prisma.$RoomBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomBlocks.
     * @param {RoomBlockDeleteManyArgs} args - Arguments to filter RoomBlocks to delete.
     * @example
     * // Delete a few RoomBlocks
     * const { count } = await prisma.roomBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomBlockDeleteManyArgs>(args?: SelectSubset<T, RoomBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomBlocks
     * const roomBlock = await prisma.roomBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomBlockUpdateManyArgs>(args: SelectSubset<T, RoomBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomBlocks and returns the data updated in the database.
     * @param {RoomBlockUpdateManyAndReturnArgs} args - Arguments to update many RoomBlocks.
     * @example
     * // Update many RoomBlocks
     * const roomBlock = await prisma.roomBlock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomBlocks and only return the `id`
     * const roomBlockWithIdOnly = await prisma.roomBlock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomBlockUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomBlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomBlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomBlock.
     * @param {RoomBlockUpsertArgs} args - Arguments to update or create a RoomBlock.
     * @example
     * // Update or create a RoomBlock
     * const roomBlock = await prisma.roomBlock.upsert({
     *   create: {
     *     // ... data to create a RoomBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomBlock we want to update
     *   }
     * })
     */
    upsert<T extends RoomBlockUpsertArgs>(args: SelectSubset<T, RoomBlockUpsertArgs<ExtArgs>>): Prisma__RoomBlockClient<$Result.GetResult<Prisma.$RoomBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomBlockCountArgs} args - Arguments to filter RoomBlocks to count.
     * @example
     * // Count the number of RoomBlocks
     * const count = await prisma.roomBlock.count({
     *   where: {
     *     // ... the filter for the RoomBlocks we want to count
     *   }
     * })
    **/
    count<T extends RoomBlockCountArgs>(
      args?: Subset<T, RoomBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomBlockAggregateArgs>(args: Subset<T, RoomBlockAggregateArgs>): Prisma.PrismaPromise<GetRoomBlockAggregateType<T>>

    /**
     * Group by RoomBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomBlockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomBlockGroupByArgs['orderBy'] }
        : { orderBy?: RoomBlockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomBlock model
   */
  readonly fields: RoomBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomBlock model
   */
  interface RoomBlockFieldRefs {
    readonly id: FieldRef<"RoomBlock", 'String'>
    readonly roomId: FieldRef<"RoomBlock", 'String'>
    readonly startDate: FieldRef<"RoomBlock", 'DateTime'>
    readonly endDate: FieldRef<"RoomBlock", 'DateTime'>
    readonly reason: FieldRef<"RoomBlock", 'String'>
    readonly createdAt: FieldRef<"RoomBlock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomBlock findUnique
   */
  export type RoomBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomBlock
     */
    select?: RoomBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomBlock
     */
    omit?: RoomBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomBlockInclude<ExtArgs> | null
    /**
     * Filter, which RoomBlock to fetch.
     */
    where: RoomBlockWhereUniqueInput
  }

  /**
   * RoomBlock findUniqueOrThrow
   */
  export type RoomBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomBlock
     */
    select?: RoomBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomBlock
     */
    omit?: RoomBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomBlockInclude<ExtArgs> | null
    /**
     * Filter, which RoomBlock to fetch.
     */
    where: RoomBlockWhereUniqueInput
  }

  /**
   * RoomBlock findFirst
   */
  export type RoomBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomBlock
     */
    select?: RoomBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomBlock
     */
    omit?: RoomBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomBlockInclude<ExtArgs> | null
    /**
     * Filter, which RoomBlock to fetch.
     */
    where?: RoomBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomBlocks to fetch.
     */
    orderBy?: RoomBlockOrderByWithRelationInput | RoomBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomBlocks.
     */
    cursor?: RoomBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomBlocks.
     */
    distinct?: RoomBlockScalarFieldEnum | RoomBlockScalarFieldEnum[]
  }

  /**
   * RoomBlock findFirstOrThrow
   */
  export type RoomBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomBlock
     */
    select?: RoomBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomBlock
     */
    omit?: RoomBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomBlockInclude<ExtArgs> | null
    /**
     * Filter, which RoomBlock to fetch.
     */
    where?: RoomBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomBlocks to fetch.
     */
    orderBy?: RoomBlockOrderByWithRelationInput | RoomBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomBlocks.
     */
    cursor?: RoomBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomBlocks.
     */
    distinct?: RoomBlockScalarFieldEnum | RoomBlockScalarFieldEnum[]
  }

  /**
   * RoomBlock findMany
   */
  export type RoomBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomBlock
     */
    select?: RoomBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomBlock
     */
    omit?: RoomBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomBlockInclude<ExtArgs> | null
    /**
     * Filter, which RoomBlocks to fetch.
     */
    where?: RoomBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomBlocks to fetch.
     */
    orderBy?: RoomBlockOrderByWithRelationInput | RoomBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomBlocks.
     */
    cursor?: RoomBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomBlocks.
     */
    skip?: number
    distinct?: RoomBlockScalarFieldEnum | RoomBlockScalarFieldEnum[]
  }

  /**
   * RoomBlock create
   */
  export type RoomBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomBlock
     */
    select?: RoomBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomBlock
     */
    omit?: RoomBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomBlockInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomBlock.
     */
    data: XOR<RoomBlockCreateInput, RoomBlockUncheckedCreateInput>
  }

  /**
   * RoomBlock createMany
   */
  export type RoomBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomBlocks.
     */
    data: RoomBlockCreateManyInput | RoomBlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomBlock createManyAndReturn
   */
  export type RoomBlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomBlock
     */
    select?: RoomBlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomBlock
     */
    omit?: RoomBlockOmit<ExtArgs> | null
    /**
     * The data used to create many RoomBlocks.
     */
    data: RoomBlockCreateManyInput | RoomBlockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomBlockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomBlock update
   */
  export type RoomBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomBlock
     */
    select?: RoomBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomBlock
     */
    omit?: RoomBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomBlockInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomBlock.
     */
    data: XOR<RoomBlockUpdateInput, RoomBlockUncheckedUpdateInput>
    /**
     * Choose, which RoomBlock to update.
     */
    where: RoomBlockWhereUniqueInput
  }

  /**
   * RoomBlock updateMany
   */
  export type RoomBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomBlocks.
     */
    data: XOR<RoomBlockUpdateManyMutationInput, RoomBlockUncheckedUpdateManyInput>
    /**
     * Filter which RoomBlocks to update
     */
    where?: RoomBlockWhereInput
    /**
     * Limit how many RoomBlocks to update.
     */
    limit?: number
  }

  /**
   * RoomBlock updateManyAndReturn
   */
  export type RoomBlockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomBlock
     */
    select?: RoomBlockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomBlock
     */
    omit?: RoomBlockOmit<ExtArgs> | null
    /**
     * The data used to update RoomBlocks.
     */
    data: XOR<RoomBlockUpdateManyMutationInput, RoomBlockUncheckedUpdateManyInput>
    /**
     * Filter which RoomBlocks to update
     */
    where?: RoomBlockWhereInput
    /**
     * Limit how many RoomBlocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomBlockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomBlock upsert
   */
  export type RoomBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomBlock
     */
    select?: RoomBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomBlock
     */
    omit?: RoomBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomBlockInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomBlock to update in case it exists.
     */
    where: RoomBlockWhereUniqueInput
    /**
     * In case the RoomBlock found by the `where` argument doesn't exist, create a new RoomBlock with this data.
     */
    create: XOR<RoomBlockCreateInput, RoomBlockUncheckedCreateInput>
    /**
     * In case the RoomBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomBlockUpdateInput, RoomBlockUncheckedUpdateInput>
  }

  /**
   * RoomBlock delete
   */
  export type RoomBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomBlock
     */
    select?: RoomBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomBlock
     */
    omit?: RoomBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomBlockInclude<ExtArgs> | null
    /**
     * Filter which RoomBlock to delete.
     */
    where: RoomBlockWhereUniqueInput
  }

  /**
   * RoomBlock deleteMany
   */
  export type RoomBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomBlocks to delete
     */
    where?: RoomBlockWhereInput
    /**
     * Limit how many RoomBlocks to delete.
     */
    limit?: number
  }

  /**
   * RoomBlock without action
   */
  export type RoomBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomBlock
     */
    select?: RoomBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomBlock
     */
    omit?: RoomBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomBlockInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const HotelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    city: 'city',
    createdAt: 'createdAt'
  };

  export type HotelScalarFieldEnum = (typeof HotelScalarFieldEnum)[keyof typeof HotelScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    hotelId: 'hotelId',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastLoginAt: 'lastLoginAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    userId: 'userId',
    roleId: 'roleId'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const RoomCategoryScalarFieldEnum: {
    id: 'id',
    hotelId: 'hotelId',
    name: 'name',
    capacity: 'capacity',
    basePrice: 'basePrice',
    createdAt: 'createdAt'
  };

  export type RoomCategoryScalarFieldEnum = (typeof RoomCategoryScalarFieldEnum)[keyof typeof RoomCategoryScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    hotelId: 'hotelId',
    roomCategoryId: 'roomCategoryId',
    number: 'number',
    floor: 'floor',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const GuestScalarFieldEnum: {
    id: 'id',
    hotelId: 'hotelId',
    name: 'name',
    document: 'document',
    phone: 'phone',
    email: 'email',
    createdAt: 'createdAt'
  };

  export type GuestScalarFieldEnum = (typeof GuestScalarFieldEnum)[keyof typeof GuestScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    id: 'id',
    hotelId: 'hotelId',
    guestId: 'guestId',
    checkInDate: 'checkInDate',
    checkOutDate: 'checkOutDate',
    status: 'status',
    source: 'source',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const ReservationRoomScalarFieldEnum: {
    id: 'id',
    reservationId: 'reservationId',
    roomId: 'roomId',
    dailyRate: 'dailyRate',
    adults: 'adults',
    children: 'children'
  };

  export type ReservationRoomScalarFieldEnum = (typeof ReservationRoomScalarFieldEnum)[keyof typeof ReservationRoomScalarFieldEnum]


  export const StayScalarFieldEnum: {
    id: 'id',
    reservationId: 'reservationId',
    checkInAt: 'checkInAt',
    checkOutAt: 'checkOutAt',
    status: 'status'
  };

  export type StayScalarFieldEnum = (typeof StayScalarFieldEnum)[keyof typeof StayScalarFieldEnum]


  export const StayGuestScalarFieldEnum: {
    stayId: 'stayId',
    guestId: 'guestId'
  };

  export type StayGuestScalarFieldEnum = (typeof StayGuestScalarFieldEnum)[keyof typeof StayGuestScalarFieldEnum]


  export const ChargeScalarFieldEnum: {
    id: 'id',
    stayId: 'stayId',
    type: 'type',
    description: 'description',
    amount: 'amount',
    occurredAt: 'occurredAt'
  };

  export type ChargeScalarFieldEnum = (typeof ChargeScalarFieldEnum)[keyof typeof ChargeScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    stayId: 'stayId',
    method: 'method',
    amount: 'amount',
    paidAt: 'paidAt',
    status: 'status'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const RoomBlockScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    startDate: 'startDate',
    endDate: 'endDate',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type RoomBlockScalarFieldEnum = (typeof RoomBlockScalarFieldEnum)[keyof typeof RoomBlockScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'RoomStatus'
   */
  export type EnumRoomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomStatus'>
    


  /**
   * Reference to a field of type 'RoomStatus[]'
   */
  export type ListEnumRoomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomStatus[]'>
    


  /**
   * Reference to a field of type 'ReservationStatus'
   */
  export type EnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus'>
    


  /**
   * Reference to a field of type 'ReservationStatus[]'
   */
  export type ListEnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus[]'>
    


  /**
   * Reference to a field of type 'StayStatus'
   */
  export type EnumStayStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StayStatus'>
    


  /**
   * Reference to a field of type 'StayStatus[]'
   */
  export type ListEnumStayStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StayStatus[]'>
    


  /**
   * Reference to a field of type 'ChargeType'
   */
  export type EnumChargeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChargeType'>
    


  /**
   * Reference to a field of type 'ChargeType[]'
   */
  export type ListEnumChargeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChargeType[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type HotelWhereInput = {
    AND?: HotelWhereInput | HotelWhereInput[]
    OR?: HotelWhereInput[]
    NOT?: HotelWhereInput | HotelWhereInput[]
    id?: StringFilter<"Hotel"> | string
    name?: StringFilter<"Hotel"> | string
    city?: StringNullableFilter<"Hotel"> | string | null
    createdAt?: DateTimeFilter<"Hotel"> | Date | string
    users?: UserListRelationFilter
    guests?: GuestListRelationFilter
    roomCategories?: RoomCategoryListRelationFilter
    rooms?: RoomListRelationFilter
    reservations?: ReservationListRelationFilter
  }

  export type HotelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    guests?: GuestOrderByRelationAggregateInput
    roomCategories?: RoomCategoryOrderByRelationAggregateInput
    rooms?: RoomOrderByRelationAggregateInput
    reservations?: ReservationOrderByRelationAggregateInput
  }

  export type HotelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HotelWhereInput | HotelWhereInput[]
    OR?: HotelWhereInput[]
    NOT?: HotelWhereInput | HotelWhereInput[]
    name?: StringFilter<"Hotel"> | string
    city?: StringNullableFilter<"Hotel"> | string | null
    createdAt?: DateTimeFilter<"Hotel"> | Date | string
    users?: UserListRelationFilter
    guests?: GuestListRelationFilter
    roomCategories?: RoomCategoryListRelationFilter
    rooms?: RoomListRelationFilter
    reservations?: ReservationListRelationFilter
  }, "id">

  export type HotelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: HotelCountOrderByAggregateInput
    _max?: HotelMaxOrderByAggregateInput
    _min?: HotelMinOrderByAggregateInput
  }

  export type HotelScalarWhereWithAggregatesInput = {
    AND?: HotelScalarWhereWithAggregatesInput | HotelScalarWhereWithAggregatesInput[]
    OR?: HotelScalarWhereWithAggregatesInput[]
    NOT?: HotelScalarWhereWithAggregatesInput | HotelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hotel"> | string
    name?: StringWithAggregatesFilter<"Hotel"> | string
    city?: StringNullableWithAggregatesFilter<"Hotel"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Hotel"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    hotelId?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    hotel?: XOR<HotelNullableScalarRelationFilter, HotelWhereInput> | null
    userRoles?: UserRoleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    hotelId?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    hotel?: HotelOrderByWithRelationInput
    userRoles?: UserRoleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    hotelId?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    hotel?: XOR<HotelNullableScalarRelationFilter, HotelWhereInput> | null
    userRoles?: UserRoleListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    hotelId?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    hotelId?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    userRoles?: UserRoleListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    userRoles?: UserRoleOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    createdAt?: DateTimeFilter<"Role"> | Date | string
    userRoles?: UserRoleListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type UserRoleOrderByWithRelationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    user?: UserOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    userId_roleId?: UserRoleUserIdRoleIdCompoundUniqueInput
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "userId_roleId">

  export type UserRoleOrderByWithAggregationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserRole"> | string
    roleId?: StringWithAggregatesFilter<"UserRole"> | string
  }

  export type RoomCategoryWhereInput = {
    AND?: RoomCategoryWhereInput | RoomCategoryWhereInput[]
    OR?: RoomCategoryWhereInput[]
    NOT?: RoomCategoryWhereInput | RoomCategoryWhereInput[]
    id?: StringFilter<"RoomCategory"> | string
    hotelId?: StringFilter<"RoomCategory"> | string
    name?: StringFilter<"RoomCategory"> | string
    capacity?: IntFilter<"RoomCategory"> | number
    basePrice?: DecimalFilter<"RoomCategory"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"RoomCategory"> | Date | string
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    rooms?: RoomListRelationFilter
  }

  export type RoomCategoryOrderByWithRelationInput = {
    id?: SortOrder
    hotelId?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    hotel?: HotelOrderByWithRelationInput
    rooms?: RoomOrderByRelationAggregateInput
  }

  export type RoomCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    hotelId_name?: RoomCategoryHotelIdNameCompoundUniqueInput
    AND?: RoomCategoryWhereInput | RoomCategoryWhereInput[]
    OR?: RoomCategoryWhereInput[]
    NOT?: RoomCategoryWhereInput | RoomCategoryWhereInput[]
    hotelId?: StringFilter<"RoomCategory"> | string
    name?: StringFilter<"RoomCategory"> | string
    capacity?: IntFilter<"RoomCategory"> | number
    basePrice?: DecimalFilter<"RoomCategory"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"RoomCategory"> | Date | string
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    rooms?: RoomListRelationFilter
  }, "id" | "hotelId_name">

  export type RoomCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    hotelId?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    _count?: RoomCategoryCountOrderByAggregateInput
    _avg?: RoomCategoryAvgOrderByAggregateInput
    _max?: RoomCategoryMaxOrderByAggregateInput
    _min?: RoomCategoryMinOrderByAggregateInput
    _sum?: RoomCategorySumOrderByAggregateInput
  }

  export type RoomCategoryScalarWhereWithAggregatesInput = {
    AND?: RoomCategoryScalarWhereWithAggregatesInput | RoomCategoryScalarWhereWithAggregatesInput[]
    OR?: RoomCategoryScalarWhereWithAggregatesInput[]
    NOT?: RoomCategoryScalarWhereWithAggregatesInput | RoomCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoomCategory"> | string
    hotelId?: StringWithAggregatesFilter<"RoomCategory"> | string
    name?: StringWithAggregatesFilter<"RoomCategory"> | string
    capacity?: IntWithAggregatesFilter<"RoomCategory"> | number
    basePrice?: DecimalWithAggregatesFilter<"RoomCategory"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"RoomCategory"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    hotelId?: StringFilter<"Room"> | string
    roomCategoryId?: StringFilter<"Room"> | string
    number?: StringFilter<"Room"> | string
    floor?: StringNullableFilter<"Room"> | string | null
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    createdAt?: DateTimeFilter<"Room"> | Date | string
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    category?: XOR<RoomCategoryScalarRelationFilter, RoomCategoryWhereInput>
    reservationRooms?: ReservationRoomListRelationFilter
    blocks?: RoomBlockListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    hotelId?: SortOrder
    roomCategoryId?: SortOrder
    number?: SortOrder
    floor?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    hotel?: HotelOrderByWithRelationInput
    category?: RoomCategoryOrderByWithRelationInput
    reservationRooms?: ReservationRoomOrderByRelationAggregateInput
    blocks?: RoomBlockOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    hotelId_number?: RoomHotelIdNumberCompoundUniqueInput
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    hotelId?: StringFilter<"Room"> | string
    roomCategoryId?: StringFilter<"Room"> | string
    number?: StringFilter<"Room"> | string
    floor?: StringNullableFilter<"Room"> | string | null
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    createdAt?: DateTimeFilter<"Room"> | Date | string
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    category?: XOR<RoomCategoryScalarRelationFilter, RoomCategoryWhereInput>
    reservationRooms?: ReservationRoomListRelationFilter
    blocks?: RoomBlockListRelationFilter
  }, "id" | "hotelId_number">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    hotelId?: SortOrder
    roomCategoryId?: SortOrder
    number?: SortOrder
    floor?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    hotelId?: StringWithAggregatesFilter<"Room"> | string
    roomCategoryId?: StringWithAggregatesFilter<"Room"> | string
    number?: StringWithAggregatesFilter<"Room"> | string
    floor?: StringNullableWithAggregatesFilter<"Room"> | string | null
    status?: EnumRoomStatusWithAggregatesFilter<"Room"> | $Enums.RoomStatus
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type GuestWhereInput = {
    AND?: GuestWhereInput | GuestWhereInput[]
    OR?: GuestWhereInput[]
    NOT?: GuestWhereInput | GuestWhereInput[]
    id?: StringFilter<"Guest"> | string
    hotelId?: StringFilter<"Guest"> | string
    name?: StringFilter<"Guest"> | string
    document?: StringNullableFilter<"Guest"> | string | null
    phone?: StringNullableFilter<"Guest"> | string | null
    email?: StringNullableFilter<"Guest"> | string | null
    createdAt?: DateTimeFilter<"Guest"> | Date | string
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    reservations?: ReservationListRelationFilter
    stayGuests?: StayGuestListRelationFilter
  }

  export type GuestOrderByWithRelationInput = {
    id?: SortOrder
    hotelId?: SortOrder
    name?: SortOrder
    document?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    hotel?: HotelOrderByWithRelationInput
    reservations?: ReservationOrderByRelationAggregateInput
    stayGuests?: StayGuestOrderByRelationAggregateInput
  }

  export type GuestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GuestWhereInput | GuestWhereInput[]
    OR?: GuestWhereInput[]
    NOT?: GuestWhereInput | GuestWhereInput[]
    hotelId?: StringFilter<"Guest"> | string
    name?: StringFilter<"Guest"> | string
    document?: StringNullableFilter<"Guest"> | string | null
    phone?: StringNullableFilter<"Guest"> | string | null
    email?: StringNullableFilter<"Guest"> | string | null
    createdAt?: DateTimeFilter<"Guest"> | Date | string
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    reservations?: ReservationListRelationFilter
    stayGuests?: StayGuestListRelationFilter
  }, "id">

  export type GuestOrderByWithAggregationInput = {
    id?: SortOrder
    hotelId?: SortOrder
    name?: SortOrder
    document?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: GuestCountOrderByAggregateInput
    _max?: GuestMaxOrderByAggregateInput
    _min?: GuestMinOrderByAggregateInput
  }

  export type GuestScalarWhereWithAggregatesInput = {
    AND?: GuestScalarWhereWithAggregatesInput | GuestScalarWhereWithAggregatesInput[]
    OR?: GuestScalarWhereWithAggregatesInput[]
    NOT?: GuestScalarWhereWithAggregatesInput | GuestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Guest"> | string
    hotelId?: StringWithAggregatesFilter<"Guest"> | string
    name?: StringWithAggregatesFilter<"Guest"> | string
    document?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    email?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Guest"> | Date | string
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    id?: StringFilter<"Reservation"> | string
    hotelId?: StringFilter<"Reservation"> | string
    guestId?: StringFilter<"Reservation"> | string
    checkInDate?: DateTimeFilter<"Reservation"> | Date | string
    checkOutDate?: DateTimeFilter<"Reservation"> | Date | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    source?: StringNullableFilter<"Reservation"> | string | null
    notes?: StringNullableFilter<"Reservation"> | string | null
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
    rooms?: ReservationRoomListRelationFilter
    stay?: XOR<StayNullableScalarRelationFilter, StayWhereInput> | null
  }

  export type ReservationOrderByWithRelationInput = {
    id?: SortOrder
    hotelId?: SortOrder
    guestId?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    status?: SortOrder
    source?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    hotel?: HotelOrderByWithRelationInput
    guest?: GuestOrderByWithRelationInput
    rooms?: ReservationRoomOrderByRelationAggregateInput
    stay?: StayOrderByWithRelationInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    hotelId?: StringFilter<"Reservation"> | string
    guestId?: StringFilter<"Reservation"> | string
    checkInDate?: DateTimeFilter<"Reservation"> | Date | string
    checkOutDate?: DateTimeFilter<"Reservation"> | Date | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    source?: StringNullableFilter<"Reservation"> | string | null
    notes?: StringNullableFilter<"Reservation"> | string | null
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
    rooms?: ReservationRoomListRelationFilter
    stay?: XOR<StayNullableScalarRelationFilter, StayWhereInput> | null
  }, "id">

  export type ReservationOrderByWithAggregationInput = {
    id?: SortOrder
    hotelId?: SortOrder
    guestId?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    status?: SortOrder
    source?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reservation"> | string
    hotelId?: StringWithAggregatesFilter<"Reservation"> | string
    guestId?: StringWithAggregatesFilter<"Reservation"> | string
    checkInDate?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    checkOutDate?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    status?: EnumReservationStatusWithAggregatesFilter<"Reservation"> | $Enums.ReservationStatus
    source?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
  }

  export type ReservationRoomWhereInput = {
    AND?: ReservationRoomWhereInput | ReservationRoomWhereInput[]
    OR?: ReservationRoomWhereInput[]
    NOT?: ReservationRoomWhereInput | ReservationRoomWhereInput[]
    id?: StringFilter<"ReservationRoom"> | string
    reservationId?: StringFilter<"ReservationRoom"> | string
    roomId?: StringFilter<"ReservationRoom"> | string
    dailyRate?: DecimalFilter<"ReservationRoom"> | Decimal | DecimalJsLike | number | string
    adults?: IntFilter<"ReservationRoom"> | number
    children?: IntFilter<"ReservationRoom"> | number
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type ReservationRoomOrderByWithRelationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    roomId?: SortOrder
    dailyRate?: SortOrder
    adults?: SortOrder
    children?: SortOrder
    reservation?: ReservationOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
  }

  export type ReservationRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reservationId_roomId?: ReservationRoomReservationIdRoomIdCompoundUniqueInput
    AND?: ReservationRoomWhereInput | ReservationRoomWhereInput[]
    OR?: ReservationRoomWhereInput[]
    NOT?: ReservationRoomWhereInput | ReservationRoomWhereInput[]
    reservationId?: StringFilter<"ReservationRoom"> | string
    roomId?: StringFilter<"ReservationRoom"> | string
    dailyRate?: DecimalFilter<"ReservationRoom"> | Decimal | DecimalJsLike | number | string
    adults?: IntFilter<"ReservationRoom"> | number
    children?: IntFilter<"ReservationRoom"> | number
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id" | "reservationId_roomId">

  export type ReservationRoomOrderByWithAggregationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    roomId?: SortOrder
    dailyRate?: SortOrder
    adults?: SortOrder
    children?: SortOrder
    _count?: ReservationRoomCountOrderByAggregateInput
    _avg?: ReservationRoomAvgOrderByAggregateInput
    _max?: ReservationRoomMaxOrderByAggregateInput
    _min?: ReservationRoomMinOrderByAggregateInput
    _sum?: ReservationRoomSumOrderByAggregateInput
  }

  export type ReservationRoomScalarWhereWithAggregatesInput = {
    AND?: ReservationRoomScalarWhereWithAggregatesInput | ReservationRoomScalarWhereWithAggregatesInput[]
    OR?: ReservationRoomScalarWhereWithAggregatesInput[]
    NOT?: ReservationRoomScalarWhereWithAggregatesInput | ReservationRoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReservationRoom"> | string
    reservationId?: StringWithAggregatesFilter<"ReservationRoom"> | string
    roomId?: StringWithAggregatesFilter<"ReservationRoom"> | string
    dailyRate?: DecimalWithAggregatesFilter<"ReservationRoom"> | Decimal | DecimalJsLike | number | string
    adults?: IntWithAggregatesFilter<"ReservationRoom"> | number
    children?: IntWithAggregatesFilter<"ReservationRoom"> | number
  }

  export type StayWhereInput = {
    AND?: StayWhereInput | StayWhereInput[]
    OR?: StayWhereInput[]
    NOT?: StayWhereInput | StayWhereInput[]
    id?: StringFilter<"Stay"> | string
    reservationId?: StringFilter<"Stay"> | string
    checkInAt?: DateTimeNullableFilter<"Stay"> | Date | string | null
    checkOutAt?: DateTimeNullableFilter<"Stay"> | Date | string | null
    status?: EnumStayStatusFilter<"Stay"> | $Enums.StayStatus
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
    charges?: ChargeListRelationFilter
    payments?: PaymentListRelationFilter
    stayGuests?: StayGuestListRelationFilter
  }

  export type StayOrderByWithRelationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    checkInAt?: SortOrderInput | SortOrder
    checkOutAt?: SortOrderInput | SortOrder
    status?: SortOrder
    reservation?: ReservationOrderByWithRelationInput
    charges?: ChargeOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    stayGuests?: StayGuestOrderByRelationAggregateInput
  }

  export type StayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reservationId?: string
    AND?: StayWhereInput | StayWhereInput[]
    OR?: StayWhereInput[]
    NOT?: StayWhereInput | StayWhereInput[]
    checkInAt?: DateTimeNullableFilter<"Stay"> | Date | string | null
    checkOutAt?: DateTimeNullableFilter<"Stay"> | Date | string | null
    status?: EnumStayStatusFilter<"Stay"> | $Enums.StayStatus
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
    charges?: ChargeListRelationFilter
    payments?: PaymentListRelationFilter
    stayGuests?: StayGuestListRelationFilter
  }, "id" | "reservationId">

  export type StayOrderByWithAggregationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    checkInAt?: SortOrderInput | SortOrder
    checkOutAt?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: StayCountOrderByAggregateInput
    _max?: StayMaxOrderByAggregateInput
    _min?: StayMinOrderByAggregateInput
  }

  export type StayScalarWhereWithAggregatesInput = {
    AND?: StayScalarWhereWithAggregatesInput | StayScalarWhereWithAggregatesInput[]
    OR?: StayScalarWhereWithAggregatesInput[]
    NOT?: StayScalarWhereWithAggregatesInput | StayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stay"> | string
    reservationId?: StringWithAggregatesFilter<"Stay"> | string
    checkInAt?: DateTimeNullableWithAggregatesFilter<"Stay"> | Date | string | null
    checkOutAt?: DateTimeNullableWithAggregatesFilter<"Stay"> | Date | string | null
    status?: EnumStayStatusWithAggregatesFilter<"Stay"> | $Enums.StayStatus
  }

  export type StayGuestWhereInput = {
    AND?: StayGuestWhereInput | StayGuestWhereInput[]
    OR?: StayGuestWhereInput[]
    NOT?: StayGuestWhereInput | StayGuestWhereInput[]
    stayId?: StringFilter<"StayGuest"> | string
    guestId?: StringFilter<"StayGuest"> | string
    stay?: XOR<StayScalarRelationFilter, StayWhereInput>
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
  }

  export type StayGuestOrderByWithRelationInput = {
    stayId?: SortOrder
    guestId?: SortOrder
    stay?: StayOrderByWithRelationInput
    guest?: GuestOrderByWithRelationInput
  }

  export type StayGuestWhereUniqueInput = Prisma.AtLeast<{
    stayId_guestId?: StayGuestStayIdGuestIdCompoundUniqueInput
    AND?: StayGuestWhereInput | StayGuestWhereInput[]
    OR?: StayGuestWhereInput[]
    NOT?: StayGuestWhereInput | StayGuestWhereInput[]
    stayId?: StringFilter<"StayGuest"> | string
    guestId?: StringFilter<"StayGuest"> | string
    stay?: XOR<StayScalarRelationFilter, StayWhereInput>
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
  }, "stayId_guestId">

  export type StayGuestOrderByWithAggregationInput = {
    stayId?: SortOrder
    guestId?: SortOrder
    _count?: StayGuestCountOrderByAggregateInput
    _max?: StayGuestMaxOrderByAggregateInput
    _min?: StayGuestMinOrderByAggregateInput
  }

  export type StayGuestScalarWhereWithAggregatesInput = {
    AND?: StayGuestScalarWhereWithAggregatesInput | StayGuestScalarWhereWithAggregatesInput[]
    OR?: StayGuestScalarWhereWithAggregatesInput[]
    NOT?: StayGuestScalarWhereWithAggregatesInput | StayGuestScalarWhereWithAggregatesInput[]
    stayId?: StringWithAggregatesFilter<"StayGuest"> | string
    guestId?: StringWithAggregatesFilter<"StayGuest"> | string
  }

  export type ChargeWhereInput = {
    AND?: ChargeWhereInput | ChargeWhereInput[]
    OR?: ChargeWhereInput[]
    NOT?: ChargeWhereInput | ChargeWhereInput[]
    id?: StringFilter<"Charge"> | string
    stayId?: StringFilter<"Charge"> | string
    type?: EnumChargeTypeFilter<"Charge"> | $Enums.ChargeType
    description?: StringFilter<"Charge"> | string
    amount?: DecimalFilter<"Charge"> | Decimal | DecimalJsLike | number | string
    occurredAt?: DateTimeFilter<"Charge"> | Date | string
    stay?: XOR<StayScalarRelationFilter, StayWhereInput>
  }

  export type ChargeOrderByWithRelationInput = {
    id?: SortOrder
    stayId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    occurredAt?: SortOrder
    stay?: StayOrderByWithRelationInput
  }

  export type ChargeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChargeWhereInput | ChargeWhereInput[]
    OR?: ChargeWhereInput[]
    NOT?: ChargeWhereInput | ChargeWhereInput[]
    stayId?: StringFilter<"Charge"> | string
    type?: EnumChargeTypeFilter<"Charge"> | $Enums.ChargeType
    description?: StringFilter<"Charge"> | string
    amount?: DecimalFilter<"Charge"> | Decimal | DecimalJsLike | number | string
    occurredAt?: DateTimeFilter<"Charge"> | Date | string
    stay?: XOR<StayScalarRelationFilter, StayWhereInput>
  }, "id">

  export type ChargeOrderByWithAggregationInput = {
    id?: SortOrder
    stayId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    occurredAt?: SortOrder
    _count?: ChargeCountOrderByAggregateInput
    _avg?: ChargeAvgOrderByAggregateInput
    _max?: ChargeMaxOrderByAggregateInput
    _min?: ChargeMinOrderByAggregateInput
    _sum?: ChargeSumOrderByAggregateInput
  }

  export type ChargeScalarWhereWithAggregatesInput = {
    AND?: ChargeScalarWhereWithAggregatesInput | ChargeScalarWhereWithAggregatesInput[]
    OR?: ChargeScalarWhereWithAggregatesInput[]
    NOT?: ChargeScalarWhereWithAggregatesInput | ChargeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Charge"> | string
    stayId?: StringWithAggregatesFilter<"Charge"> | string
    type?: EnumChargeTypeWithAggregatesFilter<"Charge"> | $Enums.ChargeType
    description?: StringWithAggregatesFilter<"Charge"> | string
    amount?: DecimalWithAggregatesFilter<"Charge"> | Decimal | DecimalJsLike | number | string
    occurredAt?: DateTimeWithAggregatesFilter<"Charge"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    stayId?: StringFilter<"Payment"> | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeFilter<"Payment"> | Date | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    stay?: XOR<StayScalarRelationFilter, StayWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    stayId?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    paidAt?: SortOrder
    status?: SortOrder
    stay?: StayOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    stayId?: StringFilter<"Payment"> | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeFilter<"Payment"> | Date | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    stay?: XOR<StayScalarRelationFilter, StayWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    stayId?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    paidAt?: SortOrder
    status?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    stayId?: StringWithAggregatesFilter<"Payment"> | string
    method?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
  }

  export type RoomBlockWhereInput = {
    AND?: RoomBlockWhereInput | RoomBlockWhereInput[]
    OR?: RoomBlockWhereInput[]
    NOT?: RoomBlockWhereInput | RoomBlockWhereInput[]
    id?: StringFilter<"RoomBlock"> | string
    roomId?: StringFilter<"RoomBlock"> | string
    startDate?: DateTimeFilter<"RoomBlock"> | Date | string
    endDate?: DateTimeFilter<"RoomBlock"> | Date | string
    reason?: StringNullableFilter<"RoomBlock"> | string | null
    createdAt?: DateTimeFilter<"RoomBlock"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type RoomBlockOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    room?: RoomOrderByWithRelationInput
  }

  export type RoomBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomBlockWhereInput | RoomBlockWhereInput[]
    OR?: RoomBlockWhereInput[]
    NOT?: RoomBlockWhereInput | RoomBlockWhereInput[]
    roomId?: StringFilter<"RoomBlock"> | string
    startDate?: DateTimeFilter<"RoomBlock"> | Date | string
    endDate?: DateTimeFilter<"RoomBlock"> | Date | string
    reason?: StringNullableFilter<"RoomBlock"> | string | null
    createdAt?: DateTimeFilter<"RoomBlock"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id">

  export type RoomBlockOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RoomBlockCountOrderByAggregateInput
    _max?: RoomBlockMaxOrderByAggregateInput
    _min?: RoomBlockMinOrderByAggregateInput
  }

  export type RoomBlockScalarWhereWithAggregatesInput = {
    AND?: RoomBlockScalarWhereWithAggregatesInput | RoomBlockScalarWhereWithAggregatesInput[]
    OR?: RoomBlockScalarWhereWithAggregatesInput[]
    NOT?: RoomBlockScalarWhereWithAggregatesInput | RoomBlockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoomBlock"> | string
    roomId?: StringWithAggregatesFilter<"RoomBlock"> | string
    startDate?: DateTimeWithAggregatesFilter<"RoomBlock"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"RoomBlock"> | Date | string
    reason?: StringNullableWithAggregatesFilter<"RoomBlock"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RoomBlock"> | Date | string
  }

  export type HotelCreateInput = {
    id?: string
    name: string
    city?: string | null
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutHotelInput
    guests?: GuestCreateNestedManyWithoutHotelInput
    roomCategories?: RoomCategoryCreateNestedManyWithoutHotelInput
    rooms?: RoomCreateNestedManyWithoutHotelInput
    reservations?: ReservationCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateInput = {
    id?: string
    name: string
    city?: string | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutHotelInput
    guests?: GuestUncheckedCreateNestedManyWithoutHotelInput
    roomCategories?: RoomCategoryUncheckedCreateNestedManyWithoutHotelInput
    rooms?: RoomUncheckedCreateNestedManyWithoutHotelInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutHotelNestedInput
    guests?: GuestUpdateManyWithoutHotelNestedInput
    roomCategories?: RoomCategoryUpdateManyWithoutHotelNestedInput
    rooms?: RoomUpdateManyWithoutHotelNestedInput
    reservations?: ReservationUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutHotelNestedInput
    guests?: GuestUncheckedUpdateManyWithoutHotelNestedInput
    roomCategories?: RoomCategoryUncheckedUpdateManyWithoutHotelNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutHotelNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type HotelCreateManyInput = {
    id?: string
    name: string
    city?: string | null
    createdAt?: Date | string
  }

  export type HotelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    hotel?: HotelCreateNestedOneWithoutUsersInput
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    hotelId?: string | null
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hotel?: HotelUpdateOneWithoutUsersNestedInput
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    hotelId?: string | null
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    userRoles?: UserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: UserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateInput = {
    user: UserCreateNestedOneWithoutUserRolesInput
    role: RoleCreateNestedOneWithoutUserRolesInput
  }

  export type UserRoleUncheckedCreateInput = {
    userId: string
    roleId: string
  }

  export type UserRoleUpdateInput = {
    user?: UserUpdateOneRequiredWithoutUserRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleCreateManyInput = {
    userId: string
    roleId: string
  }

  export type UserRoleUpdateManyMutationInput = {

  }

  export type UserRoleUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type RoomCategoryCreateInput = {
    id?: string
    name: string
    capacity: number
    basePrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    hotel: HotelCreateNestedOneWithoutRoomCategoriesInput
    rooms?: RoomCreateNestedManyWithoutCategoryInput
  }

  export type RoomCategoryUncheckedCreateInput = {
    id?: string
    hotelId: string
    name: string
    capacity: number
    basePrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type RoomCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutRoomCategoriesNestedInput
    rooms?: RoomUpdateManyWithoutCategoryNestedInput
  }

  export type RoomCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type RoomCategoryCreateManyInput = {
    id?: string
    hotelId: string
    name: string
    capacity: number
    basePrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type RoomCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    id?: string
    number: string
    floor?: string | null
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    hotel: HotelCreateNestedOneWithoutRoomsInput
    category: RoomCategoryCreateNestedOneWithoutRoomsInput
    reservationRooms?: ReservationRoomCreateNestedManyWithoutRoomInput
    blocks?: RoomBlockCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    hotelId: string
    roomCategoryId: string
    number: string
    floor?: string | null
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    reservationRooms?: ReservationRoomUncheckedCreateNestedManyWithoutRoomInput
    blocks?: RoomBlockUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutRoomsNestedInput
    category?: RoomCategoryUpdateOneRequiredWithoutRoomsNestedInput
    reservationRooms?: ReservationRoomUpdateManyWithoutRoomNestedInput
    blocks?: RoomBlockUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    roomCategoryId?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservationRooms?: ReservationRoomUncheckedUpdateManyWithoutRoomNestedInput
    blocks?: RoomBlockUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    hotelId: string
    roomCategoryId: string
    number: string
    floor?: string | null
    status?: $Enums.RoomStatus
    createdAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    roomCategoryId?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestCreateInput = {
    id?: string
    name: string
    document?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    hotel: HotelCreateNestedOneWithoutGuestsInput
    reservations?: ReservationCreateNestedManyWithoutGuestInput
    stayGuests?: StayGuestCreateNestedManyWithoutGuestInput
  }

  export type GuestUncheckedCreateInput = {
    id?: string
    hotelId: string
    name: string
    document?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutGuestInput
    stayGuests?: StayGuestUncheckedCreateNestedManyWithoutGuestInput
  }

  export type GuestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutGuestsNestedInput
    reservations?: ReservationUpdateManyWithoutGuestNestedInput
    stayGuests?: StayGuestUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutGuestNestedInput
    stayGuests?: StayGuestUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type GuestCreateManyInput = {
    id?: string
    hotelId: string
    name: string
    document?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
  }

  export type GuestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateInput = {
    id?: string
    checkInDate: Date | string
    checkOutDate: Date | string
    status?: $Enums.ReservationStatus
    source?: string | null
    notes?: string | null
    createdAt?: Date | string
    hotel: HotelCreateNestedOneWithoutReservationsInput
    guest: GuestCreateNestedOneWithoutReservationsInput
    rooms?: ReservationRoomCreateNestedManyWithoutReservationInput
    stay?: StayCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateInput = {
    id?: string
    hotelId: string
    guestId: string
    checkInDate: Date | string
    checkOutDate: Date | string
    status?: $Enums.ReservationStatus
    source?: string | null
    notes?: string | null
    createdAt?: Date | string
    rooms?: ReservationRoomUncheckedCreateNestedManyWithoutReservationInput
    stay?: StayUncheckedCreateNestedOneWithoutReservationInput
  }

  export type ReservationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    source?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutReservationsNestedInput
    guest?: GuestUpdateOneRequiredWithoutReservationsNestedInput
    rooms?: ReservationRoomUpdateManyWithoutReservationNestedInput
    stay?: StayUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    source?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: ReservationRoomUncheckedUpdateManyWithoutReservationNestedInput
    stay?: StayUncheckedUpdateOneWithoutReservationNestedInput
  }

  export type ReservationCreateManyInput = {
    id?: string
    hotelId: string
    guestId: string
    checkInDate: Date | string
    checkOutDate: Date | string
    status?: $Enums.ReservationStatus
    source?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type ReservationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    source?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    source?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationRoomCreateInput = {
    id?: string
    dailyRate: Decimal | DecimalJsLike | number | string
    adults?: number
    children?: number
    reservation: ReservationCreateNestedOneWithoutRoomsInput
    room: RoomCreateNestedOneWithoutReservationRoomsInput
  }

  export type ReservationRoomUncheckedCreateInput = {
    id?: string
    reservationId: string
    roomId: string
    dailyRate: Decimal | DecimalJsLike | number | string
    adults?: number
    children?: number
  }

  export type ReservationRoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    reservation?: ReservationUpdateOneRequiredWithoutRoomsNestedInput
    room?: RoomUpdateOneRequiredWithoutReservationRoomsNestedInput
  }

  export type ReservationRoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    dailyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationRoomCreateManyInput = {
    id?: string
    reservationId: string
    roomId: string
    dailyRate: Decimal | DecimalJsLike | number | string
    adults?: number
    children?: number
  }

  export type ReservationRoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationRoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    dailyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
  }

  export type StayCreateInput = {
    id?: string
    checkInAt?: Date | string | null
    checkOutAt?: Date | string | null
    status?: $Enums.StayStatus
    reservation: ReservationCreateNestedOneWithoutStayInput
    charges?: ChargeCreateNestedManyWithoutStayInput
    payments?: PaymentCreateNestedManyWithoutStayInput
    stayGuests?: StayGuestCreateNestedManyWithoutStayInput
  }

  export type StayUncheckedCreateInput = {
    id?: string
    reservationId: string
    checkInAt?: Date | string | null
    checkOutAt?: Date | string | null
    status?: $Enums.StayStatus
    charges?: ChargeUncheckedCreateNestedManyWithoutStayInput
    payments?: PaymentUncheckedCreateNestedManyWithoutStayInput
    stayGuests?: StayGuestUncheckedCreateNestedManyWithoutStayInput
  }

  export type StayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStayStatusFieldUpdateOperationsInput | $Enums.StayStatus
    reservation?: ReservationUpdateOneRequiredWithoutStayNestedInput
    charges?: ChargeUpdateManyWithoutStayNestedInput
    payments?: PaymentUpdateManyWithoutStayNestedInput
    stayGuests?: StayGuestUpdateManyWithoutStayNestedInput
  }

  export type StayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStayStatusFieldUpdateOperationsInput | $Enums.StayStatus
    charges?: ChargeUncheckedUpdateManyWithoutStayNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutStayNestedInput
    stayGuests?: StayGuestUncheckedUpdateManyWithoutStayNestedInput
  }

  export type StayCreateManyInput = {
    id?: string
    reservationId: string
    checkInAt?: Date | string | null
    checkOutAt?: Date | string | null
    status?: $Enums.StayStatus
  }

  export type StayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStayStatusFieldUpdateOperationsInput | $Enums.StayStatus
  }

  export type StayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStayStatusFieldUpdateOperationsInput | $Enums.StayStatus
  }

  export type StayGuestCreateInput = {
    stay: StayCreateNestedOneWithoutStayGuestsInput
    guest: GuestCreateNestedOneWithoutStayGuestsInput
  }

  export type StayGuestUncheckedCreateInput = {
    stayId: string
    guestId: string
  }

  export type StayGuestUpdateInput = {
    stay?: StayUpdateOneRequiredWithoutStayGuestsNestedInput
    guest?: GuestUpdateOneRequiredWithoutStayGuestsNestedInput
  }

  export type StayGuestUncheckedUpdateInput = {
    stayId?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
  }

  export type StayGuestCreateManyInput = {
    stayId: string
    guestId: string
  }

  export type StayGuestUpdateManyMutationInput = {

  }

  export type StayGuestUncheckedUpdateManyInput = {
    stayId?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
  }

  export type ChargeCreateInput = {
    id?: string
    type: $Enums.ChargeType
    description: string
    amount: Decimal | DecimalJsLike | number | string
    occurredAt?: Date | string
    stay: StayCreateNestedOneWithoutChargesInput
  }

  export type ChargeUncheckedCreateInput = {
    id?: string
    stayId: string
    type: $Enums.ChargeType
    description: string
    amount: Decimal | DecimalJsLike | number | string
    occurredAt?: Date | string
  }

  export type ChargeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stay?: StayUpdateOneRequiredWithoutChargesNestedInput
  }

  export type ChargeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stayId?: StringFieldUpdateOperationsInput | string
    type?: EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargeCreateManyInput = {
    id?: string
    stayId: string
    type: $Enums.ChargeType
    description: string
    amount: Decimal | DecimalJsLike | number | string
    occurredAt?: Date | string
  }

  export type ChargeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stayId?: StringFieldUpdateOperationsInput | string
    type?: EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    method: $Enums.PaymentMethod
    amount: Decimal | DecimalJsLike | number | string
    paidAt?: Date | string
    status?: $Enums.PaymentStatus
    stay: StayCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    stayId: string
    method: $Enums.PaymentMethod
    amount: Decimal | DecimalJsLike | number | string
    paidAt?: Date | string
    status?: $Enums.PaymentStatus
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stay?: StayUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stayId?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentCreateManyInput = {
    id?: string
    stayId: string
    method: $Enums.PaymentMethod
    amount: Decimal | DecimalJsLike | number | string
    paidAt?: Date | string
    status?: $Enums.PaymentStatus
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stayId?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type RoomBlockCreateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    createdAt?: Date | string
    room: RoomCreateNestedOneWithoutBlocksInput
  }

  export type RoomBlockUncheckedCreateInput = {
    id?: string
    roomId: string
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    createdAt?: Date | string
  }

  export type RoomBlockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutBlocksNestedInput
  }

  export type RoomBlockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomBlockCreateManyInput = {
    id?: string
    roomId: string
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    createdAt?: Date | string
  }

  export type RoomBlockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomBlockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type GuestListRelationFilter = {
    every?: GuestWhereInput
    some?: GuestWhereInput
    none?: GuestWhereInput
  }

  export type RoomCategoryListRelationFilter = {
    every?: RoomCategoryWhereInput
    some?: RoomCategoryWhereInput
    none?: RoomCategoryWhereInput
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HotelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
  }

  export type HotelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
  }

  export type HotelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type HotelNullableScalarRelationFilter = {
    is?: HotelWhereInput | null
    isNot?: HotelWhereInput | null
  }

  export type UserRoleListRelationFilter = {
    every?: UserRoleWhereInput
    some?: UserRoleWhereInput
    none?: UserRoleWhereInput
  }

  export type UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserRoleUserIdRoleIdCompoundUniqueInput = {
    userId: string
    roleId: string
  }

  export type UserRoleCountOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type HotelScalarRelationFilter = {
    is?: HotelWhereInput
    isNot?: HotelWhereInput
  }

  export type RoomCategoryHotelIdNameCompoundUniqueInput = {
    hotelId: string
    name: string
  }

  export type RoomCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomCategoryAvgOrderByAggregateInput = {
    capacity?: SortOrder
    basePrice?: SortOrder
  }

  export type RoomCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomCategorySumOrderByAggregateInput = {
    capacity?: SortOrder
    basePrice?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type RoomCategoryScalarRelationFilter = {
    is?: RoomCategoryWhereInput
    isNot?: RoomCategoryWhereInput
  }

  export type ReservationRoomListRelationFilter = {
    every?: ReservationRoomWhereInput
    some?: ReservationRoomWhereInput
    none?: ReservationRoomWhereInput
  }

  export type RoomBlockListRelationFilter = {
    every?: RoomBlockWhereInput
    some?: RoomBlockWhereInput
    none?: RoomBlockWhereInput
  }

  export type ReservationRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomBlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomHotelIdNumberCompoundUniqueInput = {
    hotelId: string
    number: string
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    roomCategoryId?: SortOrder
    number?: SortOrder
    floor?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    roomCategoryId?: SortOrder
    number?: SortOrder
    floor?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    roomCategoryId?: SortOrder
    number?: SortOrder
    floor?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type StayGuestListRelationFilter = {
    every?: StayGuestWhereInput
    some?: StayGuestWhereInput
    none?: StayGuestWhereInput
  }

  export type StayGuestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuestCountOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    name?: SortOrder
    document?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type GuestMaxOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    name?: SortOrder
    document?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type GuestMinOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    name?: SortOrder
    document?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type GuestScalarRelationFilter = {
    is?: GuestWhereInput
    isNot?: GuestWhereInput
  }

  export type StayNullableScalarRelationFilter = {
    is?: StayWhereInput | null
    isNot?: StayWhereInput | null
  }

  export type ReservationCountOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    guestId?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    status?: SortOrder
    source?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    guestId?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    status?: SortOrder
    source?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id?: SortOrder
    hotelId?: SortOrder
    guestId?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    status?: SortOrder
    source?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type ReservationScalarRelationFilter = {
    is?: ReservationWhereInput
    isNot?: ReservationWhereInput
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type ReservationRoomReservationIdRoomIdCompoundUniqueInput = {
    reservationId: string
    roomId: string
  }

  export type ReservationRoomCountOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    roomId?: SortOrder
    dailyRate?: SortOrder
    adults?: SortOrder
    children?: SortOrder
  }

  export type ReservationRoomAvgOrderByAggregateInput = {
    dailyRate?: SortOrder
    adults?: SortOrder
    children?: SortOrder
  }

  export type ReservationRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    roomId?: SortOrder
    dailyRate?: SortOrder
    adults?: SortOrder
    children?: SortOrder
  }

  export type ReservationRoomMinOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    roomId?: SortOrder
    dailyRate?: SortOrder
    adults?: SortOrder
    children?: SortOrder
  }

  export type ReservationRoomSumOrderByAggregateInput = {
    dailyRate?: SortOrder
    adults?: SortOrder
    children?: SortOrder
  }

  export type EnumStayStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StayStatus | EnumStayStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StayStatus[] | ListEnumStayStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StayStatus[] | ListEnumStayStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStayStatusFilter<$PrismaModel> | $Enums.StayStatus
  }

  export type ChargeListRelationFilter = {
    every?: ChargeWhereInput
    some?: ChargeWhereInput
    none?: ChargeWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type ChargeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StayCountOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    checkInAt?: SortOrder
    checkOutAt?: SortOrder
    status?: SortOrder
  }

  export type StayMaxOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    checkInAt?: SortOrder
    checkOutAt?: SortOrder
    status?: SortOrder
  }

  export type StayMinOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    checkInAt?: SortOrder
    checkOutAt?: SortOrder
    status?: SortOrder
  }

  export type EnumStayStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StayStatus | EnumStayStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StayStatus[] | ListEnumStayStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StayStatus[] | ListEnumStayStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStayStatusWithAggregatesFilter<$PrismaModel> | $Enums.StayStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStayStatusFilter<$PrismaModel>
    _max?: NestedEnumStayStatusFilter<$PrismaModel>
  }

  export type StayScalarRelationFilter = {
    is?: StayWhereInput
    isNot?: StayWhereInput
  }

  export type StayGuestStayIdGuestIdCompoundUniqueInput = {
    stayId: string
    guestId: string
  }

  export type StayGuestCountOrderByAggregateInput = {
    stayId?: SortOrder
    guestId?: SortOrder
  }

  export type StayGuestMaxOrderByAggregateInput = {
    stayId?: SortOrder
    guestId?: SortOrder
  }

  export type StayGuestMinOrderByAggregateInput = {
    stayId?: SortOrder
    guestId?: SortOrder
  }

  export type EnumChargeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChargeType | EnumChargeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChargeType[] | ListEnumChargeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChargeType[] | ListEnumChargeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChargeTypeFilter<$PrismaModel> | $Enums.ChargeType
  }

  export type ChargeCountOrderByAggregateInput = {
    id?: SortOrder
    stayId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    occurredAt?: SortOrder
  }

  export type ChargeAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ChargeMaxOrderByAggregateInput = {
    id?: SortOrder
    stayId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    occurredAt?: SortOrder
  }

  export type ChargeMinOrderByAggregateInput = {
    id?: SortOrder
    stayId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    occurredAt?: SortOrder
  }

  export type ChargeSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumChargeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChargeType | EnumChargeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChargeType[] | ListEnumChargeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChargeType[] | ListEnumChargeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChargeTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChargeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChargeTypeFilter<$PrismaModel>
    _max?: NestedEnumChargeTypeFilter<$PrismaModel>
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    stayId?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    paidAt?: SortOrder
    status?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    stayId?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    paidAt?: SortOrder
    status?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    stayId?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    paidAt?: SortOrder
    status?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type RoomBlockCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomBlockMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCreateNestedManyWithoutHotelInput = {
    create?: XOR<UserCreateWithoutHotelInput, UserUncheckedCreateWithoutHotelInput> | UserCreateWithoutHotelInput[] | UserUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHotelInput | UserCreateOrConnectWithoutHotelInput[]
    createMany?: UserCreateManyHotelInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type GuestCreateNestedManyWithoutHotelInput = {
    create?: XOR<GuestCreateWithoutHotelInput, GuestUncheckedCreateWithoutHotelInput> | GuestCreateWithoutHotelInput[] | GuestUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutHotelInput | GuestCreateOrConnectWithoutHotelInput[]
    createMany?: GuestCreateManyHotelInputEnvelope
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
  }

  export type RoomCategoryCreateNestedManyWithoutHotelInput = {
    create?: XOR<RoomCategoryCreateWithoutHotelInput, RoomCategoryUncheckedCreateWithoutHotelInput> | RoomCategoryCreateWithoutHotelInput[] | RoomCategoryUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomCategoryCreateOrConnectWithoutHotelInput | RoomCategoryCreateOrConnectWithoutHotelInput[]
    createMany?: RoomCategoryCreateManyHotelInputEnvelope
    connect?: RoomCategoryWhereUniqueInput | RoomCategoryWhereUniqueInput[]
  }

  export type RoomCreateNestedManyWithoutHotelInput = {
    create?: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput> | RoomCreateWithoutHotelInput[] | RoomUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHotelInput | RoomCreateOrConnectWithoutHotelInput[]
    createMany?: RoomCreateManyHotelInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type ReservationCreateNestedManyWithoutHotelInput = {
    create?: XOR<ReservationCreateWithoutHotelInput, ReservationUncheckedCreateWithoutHotelInput> | ReservationCreateWithoutHotelInput[] | ReservationUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutHotelInput | ReservationCreateOrConnectWithoutHotelInput[]
    createMany?: ReservationCreateManyHotelInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<UserCreateWithoutHotelInput, UserUncheckedCreateWithoutHotelInput> | UserCreateWithoutHotelInput[] | UserUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHotelInput | UserCreateOrConnectWithoutHotelInput[]
    createMany?: UserCreateManyHotelInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type GuestUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<GuestCreateWithoutHotelInput, GuestUncheckedCreateWithoutHotelInput> | GuestCreateWithoutHotelInput[] | GuestUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutHotelInput | GuestCreateOrConnectWithoutHotelInput[]
    createMany?: GuestCreateManyHotelInputEnvelope
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
  }

  export type RoomCategoryUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<RoomCategoryCreateWithoutHotelInput, RoomCategoryUncheckedCreateWithoutHotelInput> | RoomCategoryCreateWithoutHotelInput[] | RoomCategoryUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomCategoryCreateOrConnectWithoutHotelInput | RoomCategoryCreateOrConnectWithoutHotelInput[]
    createMany?: RoomCategoryCreateManyHotelInputEnvelope
    connect?: RoomCategoryWhereUniqueInput | RoomCategoryWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput> | RoomCreateWithoutHotelInput[] | RoomUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHotelInput | RoomCreateOrConnectWithoutHotelInput[]
    createMany?: RoomCreateManyHotelInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<ReservationCreateWithoutHotelInput, ReservationUncheckedCreateWithoutHotelInput> | ReservationCreateWithoutHotelInput[] | ReservationUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutHotelInput | ReservationCreateOrConnectWithoutHotelInput[]
    createMany?: ReservationCreateManyHotelInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutHotelNestedInput = {
    create?: XOR<UserCreateWithoutHotelInput, UserUncheckedCreateWithoutHotelInput> | UserCreateWithoutHotelInput[] | UserUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHotelInput | UserCreateOrConnectWithoutHotelInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutHotelInput | UserUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: UserCreateManyHotelInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutHotelInput | UserUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: UserUpdateManyWithWhereWithoutHotelInput | UserUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type GuestUpdateManyWithoutHotelNestedInput = {
    create?: XOR<GuestCreateWithoutHotelInput, GuestUncheckedCreateWithoutHotelInput> | GuestCreateWithoutHotelInput[] | GuestUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutHotelInput | GuestCreateOrConnectWithoutHotelInput[]
    upsert?: GuestUpsertWithWhereUniqueWithoutHotelInput | GuestUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: GuestCreateManyHotelInputEnvelope
    set?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    disconnect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    delete?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    update?: GuestUpdateWithWhereUniqueWithoutHotelInput | GuestUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: GuestUpdateManyWithWhereWithoutHotelInput | GuestUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: GuestScalarWhereInput | GuestScalarWhereInput[]
  }

  export type RoomCategoryUpdateManyWithoutHotelNestedInput = {
    create?: XOR<RoomCategoryCreateWithoutHotelInput, RoomCategoryUncheckedCreateWithoutHotelInput> | RoomCategoryCreateWithoutHotelInput[] | RoomCategoryUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomCategoryCreateOrConnectWithoutHotelInput | RoomCategoryCreateOrConnectWithoutHotelInput[]
    upsert?: RoomCategoryUpsertWithWhereUniqueWithoutHotelInput | RoomCategoryUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: RoomCategoryCreateManyHotelInputEnvelope
    set?: RoomCategoryWhereUniqueInput | RoomCategoryWhereUniqueInput[]
    disconnect?: RoomCategoryWhereUniqueInput | RoomCategoryWhereUniqueInput[]
    delete?: RoomCategoryWhereUniqueInput | RoomCategoryWhereUniqueInput[]
    connect?: RoomCategoryWhereUniqueInput | RoomCategoryWhereUniqueInput[]
    update?: RoomCategoryUpdateWithWhereUniqueWithoutHotelInput | RoomCategoryUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: RoomCategoryUpdateManyWithWhereWithoutHotelInput | RoomCategoryUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: RoomCategoryScalarWhereInput | RoomCategoryScalarWhereInput[]
  }

  export type RoomUpdateManyWithoutHotelNestedInput = {
    create?: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput> | RoomCreateWithoutHotelInput[] | RoomUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHotelInput | RoomCreateOrConnectWithoutHotelInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutHotelInput | RoomUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: RoomCreateManyHotelInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutHotelInput | RoomUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutHotelInput | RoomUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type ReservationUpdateManyWithoutHotelNestedInput = {
    create?: XOR<ReservationCreateWithoutHotelInput, ReservationUncheckedCreateWithoutHotelInput> | ReservationCreateWithoutHotelInput[] | ReservationUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutHotelInput | ReservationCreateOrConnectWithoutHotelInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutHotelInput | ReservationUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: ReservationCreateManyHotelInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutHotelInput | ReservationUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutHotelInput | ReservationUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<UserCreateWithoutHotelInput, UserUncheckedCreateWithoutHotelInput> | UserCreateWithoutHotelInput[] | UserUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHotelInput | UserCreateOrConnectWithoutHotelInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutHotelInput | UserUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: UserCreateManyHotelInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutHotelInput | UserUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: UserUpdateManyWithWhereWithoutHotelInput | UserUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type GuestUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<GuestCreateWithoutHotelInput, GuestUncheckedCreateWithoutHotelInput> | GuestCreateWithoutHotelInput[] | GuestUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutHotelInput | GuestCreateOrConnectWithoutHotelInput[]
    upsert?: GuestUpsertWithWhereUniqueWithoutHotelInput | GuestUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: GuestCreateManyHotelInputEnvelope
    set?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    disconnect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    delete?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    update?: GuestUpdateWithWhereUniqueWithoutHotelInput | GuestUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: GuestUpdateManyWithWhereWithoutHotelInput | GuestUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: GuestScalarWhereInput | GuestScalarWhereInput[]
  }

  export type RoomCategoryUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<RoomCategoryCreateWithoutHotelInput, RoomCategoryUncheckedCreateWithoutHotelInput> | RoomCategoryCreateWithoutHotelInput[] | RoomCategoryUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomCategoryCreateOrConnectWithoutHotelInput | RoomCategoryCreateOrConnectWithoutHotelInput[]
    upsert?: RoomCategoryUpsertWithWhereUniqueWithoutHotelInput | RoomCategoryUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: RoomCategoryCreateManyHotelInputEnvelope
    set?: RoomCategoryWhereUniqueInput | RoomCategoryWhereUniqueInput[]
    disconnect?: RoomCategoryWhereUniqueInput | RoomCategoryWhereUniqueInput[]
    delete?: RoomCategoryWhereUniqueInput | RoomCategoryWhereUniqueInput[]
    connect?: RoomCategoryWhereUniqueInput | RoomCategoryWhereUniqueInput[]
    update?: RoomCategoryUpdateWithWhereUniqueWithoutHotelInput | RoomCategoryUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: RoomCategoryUpdateManyWithWhereWithoutHotelInput | RoomCategoryUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: RoomCategoryScalarWhereInput | RoomCategoryScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput> | RoomCreateWithoutHotelInput[] | RoomUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHotelInput | RoomCreateOrConnectWithoutHotelInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutHotelInput | RoomUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: RoomCreateManyHotelInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutHotelInput | RoomUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutHotelInput | RoomUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<ReservationCreateWithoutHotelInput, ReservationUncheckedCreateWithoutHotelInput> | ReservationCreateWithoutHotelInput[] | ReservationUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutHotelInput | ReservationCreateOrConnectWithoutHotelInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutHotelInput | ReservationUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: ReservationCreateManyHotelInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutHotelInput | ReservationUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutHotelInput | ReservationUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type HotelCreateNestedOneWithoutUsersInput = {
    create?: XOR<HotelCreateWithoutUsersInput, HotelUncheckedCreateWithoutUsersInput>
    connectOrCreate?: HotelCreateOrConnectWithoutUsersInput
    connect?: HotelWhereUniqueInput
  }

  export type UserRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type HotelUpdateOneWithoutUsersNestedInput = {
    create?: XOR<HotelCreateWithoutUsersInput, HotelUncheckedCreateWithoutUsersInput>
    connectOrCreate?: HotelCreateOrConnectWithoutUsersInput
    upsert?: HotelUpsertWithoutUsersInput
    disconnect?: HotelWhereInput | boolean
    delete?: HotelWhereInput | boolean
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutUsersInput, HotelUpdateWithoutUsersInput>, HotelUncheckedUpdateWithoutUsersInput>
  }

  export type UserRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserRolesInput = {
    create?: XOR<UserCreateWithoutUserRolesInput, UserUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRolesInput
    connect?: UserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUserRolesInput = {
    create?: XOR<RoleCreateWithoutUserRolesInput, RoleUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserRolesInput
    connect?: RoleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserRolesNestedInput = {
    create?: XOR<UserCreateWithoutUserRolesInput, UserUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRolesInput
    upsert?: UserUpsertWithoutUserRolesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserRolesInput, UserUpdateWithoutUserRolesInput>, UserUncheckedUpdateWithoutUserRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutUserRolesNestedInput = {
    create?: XOR<RoleCreateWithoutUserRolesInput, RoleUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserRolesInput
    upsert?: RoleUpsertWithoutUserRolesInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUserRolesInput, RoleUpdateWithoutUserRolesInput>, RoleUncheckedUpdateWithoutUserRolesInput>
  }

  export type HotelCreateNestedOneWithoutRoomCategoriesInput = {
    create?: XOR<HotelCreateWithoutRoomCategoriesInput, HotelUncheckedCreateWithoutRoomCategoriesInput>
    connectOrCreate?: HotelCreateOrConnectWithoutRoomCategoriesInput
    connect?: HotelWhereUniqueInput
  }

  export type RoomCreateNestedManyWithoutCategoryInput = {
    create?: XOR<RoomCreateWithoutCategoryInput, RoomUncheckedCreateWithoutCategoryInput> | RoomCreateWithoutCategoryInput[] | RoomUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCategoryInput | RoomCreateOrConnectWithoutCategoryInput[]
    createMany?: RoomCreateManyCategoryInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<RoomCreateWithoutCategoryInput, RoomUncheckedCreateWithoutCategoryInput> | RoomCreateWithoutCategoryInput[] | RoomUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCategoryInput | RoomCreateOrConnectWithoutCategoryInput[]
    createMany?: RoomCreateManyCategoryInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type HotelUpdateOneRequiredWithoutRoomCategoriesNestedInput = {
    create?: XOR<HotelCreateWithoutRoomCategoriesInput, HotelUncheckedCreateWithoutRoomCategoriesInput>
    connectOrCreate?: HotelCreateOrConnectWithoutRoomCategoriesInput
    upsert?: HotelUpsertWithoutRoomCategoriesInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutRoomCategoriesInput, HotelUpdateWithoutRoomCategoriesInput>, HotelUncheckedUpdateWithoutRoomCategoriesInput>
  }

  export type RoomUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<RoomCreateWithoutCategoryInput, RoomUncheckedCreateWithoutCategoryInput> | RoomCreateWithoutCategoryInput[] | RoomUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCategoryInput | RoomCreateOrConnectWithoutCategoryInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutCategoryInput | RoomUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: RoomCreateManyCategoryInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutCategoryInput | RoomUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutCategoryInput | RoomUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<RoomCreateWithoutCategoryInput, RoomUncheckedCreateWithoutCategoryInput> | RoomCreateWithoutCategoryInput[] | RoomUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCategoryInput | RoomCreateOrConnectWithoutCategoryInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutCategoryInput | RoomUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: RoomCreateManyCategoryInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutCategoryInput | RoomUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutCategoryInput | RoomUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type HotelCreateNestedOneWithoutRoomsInput = {
    create?: XOR<HotelCreateWithoutRoomsInput, HotelUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: HotelCreateOrConnectWithoutRoomsInput
    connect?: HotelWhereUniqueInput
  }

  export type RoomCategoryCreateNestedOneWithoutRoomsInput = {
    create?: XOR<RoomCategoryCreateWithoutRoomsInput, RoomCategoryUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: RoomCategoryCreateOrConnectWithoutRoomsInput
    connect?: RoomCategoryWhereUniqueInput
  }

  export type ReservationRoomCreateNestedManyWithoutRoomInput = {
    create?: XOR<ReservationRoomCreateWithoutRoomInput, ReservationRoomUncheckedCreateWithoutRoomInput> | ReservationRoomCreateWithoutRoomInput[] | ReservationRoomUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReservationRoomCreateOrConnectWithoutRoomInput | ReservationRoomCreateOrConnectWithoutRoomInput[]
    createMany?: ReservationRoomCreateManyRoomInputEnvelope
    connect?: ReservationRoomWhereUniqueInput | ReservationRoomWhereUniqueInput[]
  }

  export type RoomBlockCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomBlockCreateWithoutRoomInput, RoomBlockUncheckedCreateWithoutRoomInput> | RoomBlockCreateWithoutRoomInput[] | RoomBlockUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomBlockCreateOrConnectWithoutRoomInput | RoomBlockCreateOrConnectWithoutRoomInput[]
    createMany?: RoomBlockCreateManyRoomInputEnvelope
    connect?: RoomBlockWhereUniqueInput | RoomBlockWhereUniqueInput[]
  }

  export type ReservationRoomUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<ReservationRoomCreateWithoutRoomInput, ReservationRoomUncheckedCreateWithoutRoomInput> | ReservationRoomCreateWithoutRoomInput[] | ReservationRoomUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReservationRoomCreateOrConnectWithoutRoomInput | ReservationRoomCreateOrConnectWithoutRoomInput[]
    createMany?: ReservationRoomCreateManyRoomInputEnvelope
    connect?: ReservationRoomWhereUniqueInput | ReservationRoomWhereUniqueInput[]
  }

  export type RoomBlockUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomBlockCreateWithoutRoomInput, RoomBlockUncheckedCreateWithoutRoomInput> | RoomBlockCreateWithoutRoomInput[] | RoomBlockUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomBlockCreateOrConnectWithoutRoomInput | RoomBlockCreateOrConnectWithoutRoomInput[]
    createMany?: RoomBlockCreateManyRoomInputEnvelope
    connect?: RoomBlockWhereUniqueInput | RoomBlockWhereUniqueInput[]
  }

  export type EnumRoomStatusFieldUpdateOperationsInput = {
    set?: $Enums.RoomStatus
  }

  export type HotelUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<HotelCreateWithoutRoomsInput, HotelUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: HotelCreateOrConnectWithoutRoomsInput
    upsert?: HotelUpsertWithoutRoomsInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutRoomsInput, HotelUpdateWithoutRoomsInput>, HotelUncheckedUpdateWithoutRoomsInput>
  }

  export type RoomCategoryUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<RoomCategoryCreateWithoutRoomsInput, RoomCategoryUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: RoomCategoryCreateOrConnectWithoutRoomsInput
    upsert?: RoomCategoryUpsertWithoutRoomsInput
    connect?: RoomCategoryWhereUniqueInput
    update?: XOR<XOR<RoomCategoryUpdateToOneWithWhereWithoutRoomsInput, RoomCategoryUpdateWithoutRoomsInput>, RoomCategoryUncheckedUpdateWithoutRoomsInput>
  }

  export type ReservationRoomUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ReservationRoomCreateWithoutRoomInput, ReservationRoomUncheckedCreateWithoutRoomInput> | ReservationRoomCreateWithoutRoomInput[] | ReservationRoomUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReservationRoomCreateOrConnectWithoutRoomInput | ReservationRoomCreateOrConnectWithoutRoomInput[]
    upsert?: ReservationRoomUpsertWithWhereUniqueWithoutRoomInput | ReservationRoomUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ReservationRoomCreateManyRoomInputEnvelope
    set?: ReservationRoomWhereUniqueInput | ReservationRoomWhereUniqueInput[]
    disconnect?: ReservationRoomWhereUniqueInput | ReservationRoomWhereUniqueInput[]
    delete?: ReservationRoomWhereUniqueInput | ReservationRoomWhereUniqueInput[]
    connect?: ReservationRoomWhereUniqueInput | ReservationRoomWhereUniqueInput[]
    update?: ReservationRoomUpdateWithWhereUniqueWithoutRoomInput | ReservationRoomUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ReservationRoomUpdateManyWithWhereWithoutRoomInput | ReservationRoomUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ReservationRoomScalarWhereInput | ReservationRoomScalarWhereInput[]
  }

  export type RoomBlockUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomBlockCreateWithoutRoomInput, RoomBlockUncheckedCreateWithoutRoomInput> | RoomBlockCreateWithoutRoomInput[] | RoomBlockUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomBlockCreateOrConnectWithoutRoomInput | RoomBlockCreateOrConnectWithoutRoomInput[]
    upsert?: RoomBlockUpsertWithWhereUniqueWithoutRoomInput | RoomBlockUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomBlockCreateManyRoomInputEnvelope
    set?: RoomBlockWhereUniqueInput | RoomBlockWhereUniqueInput[]
    disconnect?: RoomBlockWhereUniqueInput | RoomBlockWhereUniqueInput[]
    delete?: RoomBlockWhereUniqueInput | RoomBlockWhereUniqueInput[]
    connect?: RoomBlockWhereUniqueInput | RoomBlockWhereUniqueInput[]
    update?: RoomBlockUpdateWithWhereUniqueWithoutRoomInput | RoomBlockUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomBlockUpdateManyWithWhereWithoutRoomInput | RoomBlockUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomBlockScalarWhereInput | RoomBlockScalarWhereInput[]
  }

  export type ReservationRoomUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ReservationRoomCreateWithoutRoomInput, ReservationRoomUncheckedCreateWithoutRoomInput> | ReservationRoomCreateWithoutRoomInput[] | ReservationRoomUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReservationRoomCreateOrConnectWithoutRoomInput | ReservationRoomCreateOrConnectWithoutRoomInput[]
    upsert?: ReservationRoomUpsertWithWhereUniqueWithoutRoomInput | ReservationRoomUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ReservationRoomCreateManyRoomInputEnvelope
    set?: ReservationRoomWhereUniqueInput | ReservationRoomWhereUniqueInput[]
    disconnect?: ReservationRoomWhereUniqueInput | ReservationRoomWhereUniqueInput[]
    delete?: ReservationRoomWhereUniqueInput | ReservationRoomWhereUniqueInput[]
    connect?: ReservationRoomWhereUniqueInput | ReservationRoomWhereUniqueInput[]
    update?: ReservationRoomUpdateWithWhereUniqueWithoutRoomInput | ReservationRoomUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ReservationRoomUpdateManyWithWhereWithoutRoomInput | ReservationRoomUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ReservationRoomScalarWhereInput | ReservationRoomScalarWhereInput[]
  }

  export type RoomBlockUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomBlockCreateWithoutRoomInput, RoomBlockUncheckedCreateWithoutRoomInput> | RoomBlockCreateWithoutRoomInput[] | RoomBlockUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomBlockCreateOrConnectWithoutRoomInput | RoomBlockCreateOrConnectWithoutRoomInput[]
    upsert?: RoomBlockUpsertWithWhereUniqueWithoutRoomInput | RoomBlockUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomBlockCreateManyRoomInputEnvelope
    set?: RoomBlockWhereUniqueInput | RoomBlockWhereUniqueInput[]
    disconnect?: RoomBlockWhereUniqueInput | RoomBlockWhereUniqueInput[]
    delete?: RoomBlockWhereUniqueInput | RoomBlockWhereUniqueInput[]
    connect?: RoomBlockWhereUniqueInput | RoomBlockWhereUniqueInput[]
    update?: RoomBlockUpdateWithWhereUniqueWithoutRoomInput | RoomBlockUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomBlockUpdateManyWithWhereWithoutRoomInput | RoomBlockUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomBlockScalarWhereInput | RoomBlockScalarWhereInput[]
  }

  export type HotelCreateNestedOneWithoutGuestsInput = {
    create?: XOR<HotelCreateWithoutGuestsInput, HotelUncheckedCreateWithoutGuestsInput>
    connectOrCreate?: HotelCreateOrConnectWithoutGuestsInput
    connect?: HotelWhereUniqueInput
  }

  export type ReservationCreateNestedManyWithoutGuestInput = {
    create?: XOR<ReservationCreateWithoutGuestInput, ReservationUncheckedCreateWithoutGuestInput> | ReservationCreateWithoutGuestInput[] | ReservationUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutGuestInput | ReservationCreateOrConnectWithoutGuestInput[]
    createMany?: ReservationCreateManyGuestInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type StayGuestCreateNestedManyWithoutGuestInput = {
    create?: XOR<StayGuestCreateWithoutGuestInput, StayGuestUncheckedCreateWithoutGuestInput> | StayGuestCreateWithoutGuestInput[] | StayGuestUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: StayGuestCreateOrConnectWithoutGuestInput | StayGuestCreateOrConnectWithoutGuestInput[]
    createMany?: StayGuestCreateManyGuestInputEnvelope
    connect?: StayGuestWhereUniqueInput | StayGuestWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutGuestInput = {
    create?: XOR<ReservationCreateWithoutGuestInput, ReservationUncheckedCreateWithoutGuestInput> | ReservationCreateWithoutGuestInput[] | ReservationUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutGuestInput | ReservationCreateOrConnectWithoutGuestInput[]
    createMany?: ReservationCreateManyGuestInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type StayGuestUncheckedCreateNestedManyWithoutGuestInput = {
    create?: XOR<StayGuestCreateWithoutGuestInput, StayGuestUncheckedCreateWithoutGuestInput> | StayGuestCreateWithoutGuestInput[] | StayGuestUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: StayGuestCreateOrConnectWithoutGuestInput | StayGuestCreateOrConnectWithoutGuestInput[]
    createMany?: StayGuestCreateManyGuestInputEnvelope
    connect?: StayGuestWhereUniqueInput | StayGuestWhereUniqueInput[]
  }

  export type HotelUpdateOneRequiredWithoutGuestsNestedInput = {
    create?: XOR<HotelCreateWithoutGuestsInput, HotelUncheckedCreateWithoutGuestsInput>
    connectOrCreate?: HotelCreateOrConnectWithoutGuestsInput
    upsert?: HotelUpsertWithoutGuestsInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutGuestsInput, HotelUpdateWithoutGuestsInput>, HotelUncheckedUpdateWithoutGuestsInput>
  }

  export type ReservationUpdateManyWithoutGuestNestedInput = {
    create?: XOR<ReservationCreateWithoutGuestInput, ReservationUncheckedCreateWithoutGuestInput> | ReservationCreateWithoutGuestInput[] | ReservationUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutGuestInput | ReservationCreateOrConnectWithoutGuestInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutGuestInput | ReservationUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: ReservationCreateManyGuestInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutGuestInput | ReservationUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutGuestInput | ReservationUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type StayGuestUpdateManyWithoutGuestNestedInput = {
    create?: XOR<StayGuestCreateWithoutGuestInput, StayGuestUncheckedCreateWithoutGuestInput> | StayGuestCreateWithoutGuestInput[] | StayGuestUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: StayGuestCreateOrConnectWithoutGuestInput | StayGuestCreateOrConnectWithoutGuestInput[]
    upsert?: StayGuestUpsertWithWhereUniqueWithoutGuestInput | StayGuestUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: StayGuestCreateManyGuestInputEnvelope
    set?: StayGuestWhereUniqueInput | StayGuestWhereUniqueInput[]
    disconnect?: StayGuestWhereUniqueInput | StayGuestWhereUniqueInput[]
    delete?: StayGuestWhereUniqueInput | StayGuestWhereUniqueInput[]
    connect?: StayGuestWhereUniqueInput | StayGuestWhereUniqueInput[]
    update?: StayGuestUpdateWithWhereUniqueWithoutGuestInput | StayGuestUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: StayGuestUpdateManyWithWhereWithoutGuestInput | StayGuestUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: StayGuestScalarWhereInput | StayGuestScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: XOR<ReservationCreateWithoutGuestInput, ReservationUncheckedCreateWithoutGuestInput> | ReservationCreateWithoutGuestInput[] | ReservationUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutGuestInput | ReservationCreateOrConnectWithoutGuestInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutGuestInput | ReservationUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: ReservationCreateManyGuestInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutGuestInput | ReservationUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutGuestInput | ReservationUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type StayGuestUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: XOR<StayGuestCreateWithoutGuestInput, StayGuestUncheckedCreateWithoutGuestInput> | StayGuestCreateWithoutGuestInput[] | StayGuestUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: StayGuestCreateOrConnectWithoutGuestInput | StayGuestCreateOrConnectWithoutGuestInput[]
    upsert?: StayGuestUpsertWithWhereUniqueWithoutGuestInput | StayGuestUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: StayGuestCreateManyGuestInputEnvelope
    set?: StayGuestWhereUniqueInput | StayGuestWhereUniqueInput[]
    disconnect?: StayGuestWhereUniqueInput | StayGuestWhereUniqueInput[]
    delete?: StayGuestWhereUniqueInput | StayGuestWhereUniqueInput[]
    connect?: StayGuestWhereUniqueInput | StayGuestWhereUniqueInput[]
    update?: StayGuestUpdateWithWhereUniqueWithoutGuestInput | StayGuestUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: StayGuestUpdateManyWithWhereWithoutGuestInput | StayGuestUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: StayGuestScalarWhereInput | StayGuestScalarWhereInput[]
  }

  export type HotelCreateNestedOneWithoutReservationsInput = {
    create?: XOR<HotelCreateWithoutReservationsInput, HotelUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: HotelCreateOrConnectWithoutReservationsInput
    connect?: HotelWhereUniqueInput
  }

  export type GuestCreateNestedOneWithoutReservationsInput = {
    create?: XOR<GuestCreateWithoutReservationsInput, GuestUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: GuestCreateOrConnectWithoutReservationsInput
    connect?: GuestWhereUniqueInput
  }

  export type ReservationRoomCreateNestedManyWithoutReservationInput = {
    create?: XOR<ReservationRoomCreateWithoutReservationInput, ReservationRoomUncheckedCreateWithoutReservationInput> | ReservationRoomCreateWithoutReservationInput[] | ReservationRoomUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationRoomCreateOrConnectWithoutReservationInput | ReservationRoomCreateOrConnectWithoutReservationInput[]
    createMany?: ReservationRoomCreateManyReservationInputEnvelope
    connect?: ReservationRoomWhereUniqueInput | ReservationRoomWhereUniqueInput[]
  }

  export type StayCreateNestedOneWithoutReservationInput = {
    create?: XOR<StayCreateWithoutReservationInput, StayUncheckedCreateWithoutReservationInput>
    connectOrCreate?: StayCreateOrConnectWithoutReservationInput
    connect?: StayWhereUniqueInput
  }

  export type ReservationRoomUncheckedCreateNestedManyWithoutReservationInput = {
    create?: XOR<ReservationRoomCreateWithoutReservationInput, ReservationRoomUncheckedCreateWithoutReservationInput> | ReservationRoomCreateWithoutReservationInput[] | ReservationRoomUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationRoomCreateOrConnectWithoutReservationInput | ReservationRoomCreateOrConnectWithoutReservationInput[]
    createMany?: ReservationRoomCreateManyReservationInputEnvelope
    connect?: ReservationRoomWhereUniqueInput | ReservationRoomWhereUniqueInput[]
  }

  export type StayUncheckedCreateNestedOneWithoutReservationInput = {
    create?: XOR<StayCreateWithoutReservationInput, StayUncheckedCreateWithoutReservationInput>
    connectOrCreate?: StayCreateOrConnectWithoutReservationInput
    connect?: StayWhereUniqueInput
  }

  export type EnumReservationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReservationStatus
  }

  export type HotelUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<HotelCreateWithoutReservationsInput, HotelUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: HotelCreateOrConnectWithoutReservationsInput
    upsert?: HotelUpsertWithoutReservationsInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutReservationsInput, HotelUpdateWithoutReservationsInput>, HotelUncheckedUpdateWithoutReservationsInput>
  }

  export type GuestUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<GuestCreateWithoutReservationsInput, GuestUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: GuestCreateOrConnectWithoutReservationsInput
    upsert?: GuestUpsertWithoutReservationsInput
    connect?: GuestWhereUniqueInput
    update?: XOR<XOR<GuestUpdateToOneWithWhereWithoutReservationsInput, GuestUpdateWithoutReservationsInput>, GuestUncheckedUpdateWithoutReservationsInput>
  }

  export type ReservationRoomUpdateManyWithoutReservationNestedInput = {
    create?: XOR<ReservationRoomCreateWithoutReservationInput, ReservationRoomUncheckedCreateWithoutReservationInput> | ReservationRoomCreateWithoutReservationInput[] | ReservationRoomUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationRoomCreateOrConnectWithoutReservationInput | ReservationRoomCreateOrConnectWithoutReservationInput[]
    upsert?: ReservationRoomUpsertWithWhereUniqueWithoutReservationInput | ReservationRoomUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: ReservationRoomCreateManyReservationInputEnvelope
    set?: ReservationRoomWhereUniqueInput | ReservationRoomWhereUniqueInput[]
    disconnect?: ReservationRoomWhereUniqueInput | ReservationRoomWhereUniqueInput[]
    delete?: ReservationRoomWhereUniqueInput | ReservationRoomWhereUniqueInput[]
    connect?: ReservationRoomWhereUniqueInput | ReservationRoomWhereUniqueInput[]
    update?: ReservationRoomUpdateWithWhereUniqueWithoutReservationInput | ReservationRoomUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: ReservationRoomUpdateManyWithWhereWithoutReservationInput | ReservationRoomUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: ReservationRoomScalarWhereInput | ReservationRoomScalarWhereInput[]
  }

  export type StayUpdateOneWithoutReservationNestedInput = {
    create?: XOR<StayCreateWithoutReservationInput, StayUncheckedCreateWithoutReservationInput>
    connectOrCreate?: StayCreateOrConnectWithoutReservationInput
    upsert?: StayUpsertWithoutReservationInput
    disconnect?: StayWhereInput | boolean
    delete?: StayWhereInput | boolean
    connect?: StayWhereUniqueInput
    update?: XOR<XOR<StayUpdateToOneWithWhereWithoutReservationInput, StayUpdateWithoutReservationInput>, StayUncheckedUpdateWithoutReservationInput>
  }

  export type ReservationRoomUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: XOR<ReservationRoomCreateWithoutReservationInput, ReservationRoomUncheckedCreateWithoutReservationInput> | ReservationRoomCreateWithoutReservationInput[] | ReservationRoomUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationRoomCreateOrConnectWithoutReservationInput | ReservationRoomCreateOrConnectWithoutReservationInput[]
    upsert?: ReservationRoomUpsertWithWhereUniqueWithoutReservationInput | ReservationRoomUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: ReservationRoomCreateManyReservationInputEnvelope
    set?: ReservationRoomWhereUniqueInput | ReservationRoomWhereUniqueInput[]
    disconnect?: ReservationRoomWhereUniqueInput | ReservationRoomWhereUniqueInput[]
    delete?: ReservationRoomWhereUniqueInput | ReservationRoomWhereUniqueInput[]
    connect?: ReservationRoomWhereUniqueInput | ReservationRoomWhereUniqueInput[]
    update?: ReservationRoomUpdateWithWhereUniqueWithoutReservationInput | ReservationRoomUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: ReservationRoomUpdateManyWithWhereWithoutReservationInput | ReservationRoomUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: ReservationRoomScalarWhereInput | ReservationRoomScalarWhereInput[]
  }

  export type StayUncheckedUpdateOneWithoutReservationNestedInput = {
    create?: XOR<StayCreateWithoutReservationInput, StayUncheckedCreateWithoutReservationInput>
    connectOrCreate?: StayCreateOrConnectWithoutReservationInput
    upsert?: StayUpsertWithoutReservationInput
    disconnect?: StayWhereInput | boolean
    delete?: StayWhereInput | boolean
    connect?: StayWhereUniqueInput
    update?: XOR<XOR<StayUpdateToOneWithWhereWithoutReservationInput, StayUpdateWithoutReservationInput>, StayUncheckedUpdateWithoutReservationInput>
  }

  export type ReservationCreateNestedOneWithoutRoomsInput = {
    create?: XOR<ReservationCreateWithoutRoomsInput, ReservationUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutRoomsInput
    connect?: ReservationWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutReservationRoomsInput = {
    create?: XOR<RoomCreateWithoutReservationRoomsInput, RoomUncheckedCreateWithoutReservationRoomsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutReservationRoomsInput
    connect?: RoomWhereUniqueInput
  }

  export type ReservationUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<ReservationCreateWithoutRoomsInput, ReservationUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutRoomsInput
    upsert?: ReservationUpsertWithoutRoomsInput
    connect?: ReservationWhereUniqueInput
    update?: XOR<XOR<ReservationUpdateToOneWithWhereWithoutRoomsInput, ReservationUpdateWithoutRoomsInput>, ReservationUncheckedUpdateWithoutRoomsInput>
  }

  export type RoomUpdateOneRequiredWithoutReservationRoomsNestedInput = {
    create?: XOR<RoomCreateWithoutReservationRoomsInput, RoomUncheckedCreateWithoutReservationRoomsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutReservationRoomsInput
    upsert?: RoomUpsertWithoutReservationRoomsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutReservationRoomsInput, RoomUpdateWithoutReservationRoomsInput>, RoomUncheckedUpdateWithoutReservationRoomsInput>
  }

  export type ReservationCreateNestedOneWithoutStayInput = {
    create?: XOR<ReservationCreateWithoutStayInput, ReservationUncheckedCreateWithoutStayInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutStayInput
    connect?: ReservationWhereUniqueInput
  }

  export type ChargeCreateNestedManyWithoutStayInput = {
    create?: XOR<ChargeCreateWithoutStayInput, ChargeUncheckedCreateWithoutStayInput> | ChargeCreateWithoutStayInput[] | ChargeUncheckedCreateWithoutStayInput[]
    connectOrCreate?: ChargeCreateOrConnectWithoutStayInput | ChargeCreateOrConnectWithoutStayInput[]
    createMany?: ChargeCreateManyStayInputEnvelope
    connect?: ChargeWhereUniqueInput | ChargeWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutStayInput = {
    create?: XOR<PaymentCreateWithoutStayInput, PaymentUncheckedCreateWithoutStayInput> | PaymentCreateWithoutStayInput[] | PaymentUncheckedCreateWithoutStayInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutStayInput | PaymentCreateOrConnectWithoutStayInput[]
    createMany?: PaymentCreateManyStayInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type StayGuestCreateNestedManyWithoutStayInput = {
    create?: XOR<StayGuestCreateWithoutStayInput, StayGuestUncheckedCreateWithoutStayInput> | StayGuestCreateWithoutStayInput[] | StayGuestUncheckedCreateWithoutStayInput[]
    connectOrCreate?: StayGuestCreateOrConnectWithoutStayInput | StayGuestCreateOrConnectWithoutStayInput[]
    createMany?: StayGuestCreateManyStayInputEnvelope
    connect?: StayGuestWhereUniqueInput | StayGuestWhereUniqueInput[]
  }

  export type ChargeUncheckedCreateNestedManyWithoutStayInput = {
    create?: XOR<ChargeCreateWithoutStayInput, ChargeUncheckedCreateWithoutStayInput> | ChargeCreateWithoutStayInput[] | ChargeUncheckedCreateWithoutStayInput[]
    connectOrCreate?: ChargeCreateOrConnectWithoutStayInput | ChargeCreateOrConnectWithoutStayInput[]
    createMany?: ChargeCreateManyStayInputEnvelope
    connect?: ChargeWhereUniqueInput | ChargeWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutStayInput = {
    create?: XOR<PaymentCreateWithoutStayInput, PaymentUncheckedCreateWithoutStayInput> | PaymentCreateWithoutStayInput[] | PaymentUncheckedCreateWithoutStayInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutStayInput | PaymentCreateOrConnectWithoutStayInput[]
    createMany?: PaymentCreateManyStayInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type StayGuestUncheckedCreateNestedManyWithoutStayInput = {
    create?: XOR<StayGuestCreateWithoutStayInput, StayGuestUncheckedCreateWithoutStayInput> | StayGuestCreateWithoutStayInput[] | StayGuestUncheckedCreateWithoutStayInput[]
    connectOrCreate?: StayGuestCreateOrConnectWithoutStayInput | StayGuestCreateOrConnectWithoutStayInput[]
    createMany?: StayGuestCreateManyStayInputEnvelope
    connect?: StayGuestWhereUniqueInput | StayGuestWhereUniqueInput[]
  }

  export type EnumStayStatusFieldUpdateOperationsInput = {
    set?: $Enums.StayStatus
  }

  export type ReservationUpdateOneRequiredWithoutStayNestedInput = {
    create?: XOR<ReservationCreateWithoutStayInput, ReservationUncheckedCreateWithoutStayInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutStayInput
    upsert?: ReservationUpsertWithoutStayInput
    connect?: ReservationWhereUniqueInput
    update?: XOR<XOR<ReservationUpdateToOneWithWhereWithoutStayInput, ReservationUpdateWithoutStayInput>, ReservationUncheckedUpdateWithoutStayInput>
  }

  export type ChargeUpdateManyWithoutStayNestedInput = {
    create?: XOR<ChargeCreateWithoutStayInput, ChargeUncheckedCreateWithoutStayInput> | ChargeCreateWithoutStayInput[] | ChargeUncheckedCreateWithoutStayInput[]
    connectOrCreate?: ChargeCreateOrConnectWithoutStayInput | ChargeCreateOrConnectWithoutStayInput[]
    upsert?: ChargeUpsertWithWhereUniqueWithoutStayInput | ChargeUpsertWithWhereUniqueWithoutStayInput[]
    createMany?: ChargeCreateManyStayInputEnvelope
    set?: ChargeWhereUniqueInput | ChargeWhereUniqueInput[]
    disconnect?: ChargeWhereUniqueInput | ChargeWhereUniqueInput[]
    delete?: ChargeWhereUniqueInput | ChargeWhereUniqueInput[]
    connect?: ChargeWhereUniqueInput | ChargeWhereUniqueInput[]
    update?: ChargeUpdateWithWhereUniqueWithoutStayInput | ChargeUpdateWithWhereUniqueWithoutStayInput[]
    updateMany?: ChargeUpdateManyWithWhereWithoutStayInput | ChargeUpdateManyWithWhereWithoutStayInput[]
    deleteMany?: ChargeScalarWhereInput | ChargeScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutStayNestedInput = {
    create?: XOR<PaymentCreateWithoutStayInput, PaymentUncheckedCreateWithoutStayInput> | PaymentCreateWithoutStayInput[] | PaymentUncheckedCreateWithoutStayInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutStayInput | PaymentCreateOrConnectWithoutStayInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutStayInput | PaymentUpsertWithWhereUniqueWithoutStayInput[]
    createMany?: PaymentCreateManyStayInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutStayInput | PaymentUpdateWithWhereUniqueWithoutStayInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutStayInput | PaymentUpdateManyWithWhereWithoutStayInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type StayGuestUpdateManyWithoutStayNestedInput = {
    create?: XOR<StayGuestCreateWithoutStayInput, StayGuestUncheckedCreateWithoutStayInput> | StayGuestCreateWithoutStayInput[] | StayGuestUncheckedCreateWithoutStayInput[]
    connectOrCreate?: StayGuestCreateOrConnectWithoutStayInput | StayGuestCreateOrConnectWithoutStayInput[]
    upsert?: StayGuestUpsertWithWhereUniqueWithoutStayInput | StayGuestUpsertWithWhereUniqueWithoutStayInput[]
    createMany?: StayGuestCreateManyStayInputEnvelope
    set?: StayGuestWhereUniqueInput | StayGuestWhereUniqueInput[]
    disconnect?: StayGuestWhereUniqueInput | StayGuestWhereUniqueInput[]
    delete?: StayGuestWhereUniqueInput | StayGuestWhereUniqueInput[]
    connect?: StayGuestWhereUniqueInput | StayGuestWhereUniqueInput[]
    update?: StayGuestUpdateWithWhereUniqueWithoutStayInput | StayGuestUpdateWithWhereUniqueWithoutStayInput[]
    updateMany?: StayGuestUpdateManyWithWhereWithoutStayInput | StayGuestUpdateManyWithWhereWithoutStayInput[]
    deleteMany?: StayGuestScalarWhereInput | StayGuestScalarWhereInput[]
  }

  export type ChargeUncheckedUpdateManyWithoutStayNestedInput = {
    create?: XOR<ChargeCreateWithoutStayInput, ChargeUncheckedCreateWithoutStayInput> | ChargeCreateWithoutStayInput[] | ChargeUncheckedCreateWithoutStayInput[]
    connectOrCreate?: ChargeCreateOrConnectWithoutStayInput | ChargeCreateOrConnectWithoutStayInput[]
    upsert?: ChargeUpsertWithWhereUniqueWithoutStayInput | ChargeUpsertWithWhereUniqueWithoutStayInput[]
    createMany?: ChargeCreateManyStayInputEnvelope
    set?: ChargeWhereUniqueInput | ChargeWhereUniqueInput[]
    disconnect?: ChargeWhereUniqueInput | ChargeWhereUniqueInput[]
    delete?: ChargeWhereUniqueInput | ChargeWhereUniqueInput[]
    connect?: ChargeWhereUniqueInput | ChargeWhereUniqueInput[]
    update?: ChargeUpdateWithWhereUniqueWithoutStayInput | ChargeUpdateWithWhereUniqueWithoutStayInput[]
    updateMany?: ChargeUpdateManyWithWhereWithoutStayInput | ChargeUpdateManyWithWhereWithoutStayInput[]
    deleteMany?: ChargeScalarWhereInput | ChargeScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutStayNestedInput = {
    create?: XOR<PaymentCreateWithoutStayInput, PaymentUncheckedCreateWithoutStayInput> | PaymentCreateWithoutStayInput[] | PaymentUncheckedCreateWithoutStayInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutStayInput | PaymentCreateOrConnectWithoutStayInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutStayInput | PaymentUpsertWithWhereUniqueWithoutStayInput[]
    createMany?: PaymentCreateManyStayInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutStayInput | PaymentUpdateWithWhereUniqueWithoutStayInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutStayInput | PaymentUpdateManyWithWhereWithoutStayInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type StayGuestUncheckedUpdateManyWithoutStayNestedInput = {
    create?: XOR<StayGuestCreateWithoutStayInput, StayGuestUncheckedCreateWithoutStayInput> | StayGuestCreateWithoutStayInput[] | StayGuestUncheckedCreateWithoutStayInput[]
    connectOrCreate?: StayGuestCreateOrConnectWithoutStayInput | StayGuestCreateOrConnectWithoutStayInput[]
    upsert?: StayGuestUpsertWithWhereUniqueWithoutStayInput | StayGuestUpsertWithWhereUniqueWithoutStayInput[]
    createMany?: StayGuestCreateManyStayInputEnvelope
    set?: StayGuestWhereUniqueInput | StayGuestWhereUniqueInput[]
    disconnect?: StayGuestWhereUniqueInput | StayGuestWhereUniqueInput[]
    delete?: StayGuestWhereUniqueInput | StayGuestWhereUniqueInput[]
    connect?: StayGuestWhereUniqueInput | StayGuestWhereUniqueInput[]
    update?: StayGuestUpdateWithWhereUniqueWithoutStayInput | StayGuestUpdateWithWhereUniqueWithoutStayInput[]
    updateMany?: StayGuestUpdateManyWithWhereWithoutStayInput | StayGuestUpdateManyWithWhereWithoutStayInput[]
    deleteMany?: StayGuestScalarWhereInput | StayGuestScalarWhereInput[]
  }

  export type StayCreateNestedOneWithoutStayGuestsInput = {
    create?: XOR<StayCreateWithoutStayGuestsInput, StayUncheckedCreateWithoutStayGuestsInput>
    connectOrCreate?: StayCreateOrConnectWithoutStayGuestsInput
    connect?: StayWhereUniqueInput
  }

  export type GuestCreateNestedOneWithoutStayGuestsInput = {
    create?: XOR<GuestCreateWithoutStayGuestsInput, GuestUncheckedCreateWithoutStayGuestsInput>
    connectOrCreate?: GuestCreateOrConnectWithoutStayGuestsInput
    connect?: GuestWhereUniqueInput
  }

  export type StayUpdateOneRequiredWithoutStayGuestsNestedInput = {
    create?: XOR<StayCreateWithoutStayGuestsInput, StayUncheckedCreateWithoutStayGuestsInput>
    connectOrCreate?: StayCreateOrConnectWithoutStayGuestsInput
    upsert?: StayUpsertWithoutStayGuestsInput
    connect?: StayWhereUniqueInput
    update?: XOR<XOR<StayUpdateToOneWithWhereWithoutStayGuestsInput, StayUpdateWithoutStayGuestsInput>, StayUncheckedUpdateWithoutStayGuestsInput>
  }

  export type GuestUpdateOneRequiredWithoutStayGuestsNestedInput = {
    create?: XOR<GuestCreateWithoutStayGuestsInput, GuestUncheckedCreateWithoutStayGuestsInput>
    connectOrCreate?: GuestCreateOrConnectWithoutStayGuestsInput
    upsert?: GuestUpsertWithoutStayGuestsInput
    connect?: GuestWhereUniqueInput
    update?: XOR<XOR<GuestUpdateToOneWithWhereWithoutStayGuestsInput, GuestUpdateWithoutStayGuestsInput>, GuestUncheckedUpdateWithoutStayGuestsInput>
  }

  export type StayCreateNestedOneWithoutChargesInput = {
    create?: XOR<StayCreateWithoutChargesInput, StayUncheckedCreateWithoutChargesInput>
    connectOrCreate?: StayCreateOrConnectWithoutChargesInput
    connect?: StayWhereUniqueInput
  }

  export type EnumChargeTypeFieldUpdateOperationsInput = {
    set?: $Enums.ChargeType
  }

  export type StayUpdateOneRequiredWithoutChargesNestedInput = {
    create?: XOR<StayCreateWithoutChargesInput, StayUncheckedCreateWithoutChargesInput>
    connectOrCreate?: StayCreateOrConnectWithoutChargesInput
    upsert?: StayUpsertWithoutChargesInput
    connect?: StayWhereUniqueInput
    update?: XOR<XOR<StayUpdateToOneWithWhereWithoutChargesInput, StayUpdateWithoutChargesInput>, StayUncheckedUpdateWithoutChargesInput>
  }

  export type StayCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<StayCreateWithoutPaymentsInput, StayUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: StayCreateOrConnectWithoutPaymentsInput
    connect?: StayWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type StayUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<StayCreateWithoutPaymentsInput, StayUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: StayCreateOrConnectWithoutPaymentsInput
    upsert?: StayUpsertWithoutPaymentsInput
    connect?: StayWhereUniqueInput
    update?: XOR<XOR<StayUpdateToOneWithWhereWithoutPaymentsInput, StayUpdateWithoutPaymentsInput>, StayUncheckedUpdateWithoutPaymentsInput>
  }

  export type RoomCreateNestedOneWithoutBlocksInput = {
    create?: XOR<RoomCreateWithoutBlocksInput, RoomUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBlocksInput
    connect?: RoomWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutBlocksNestedInput = {
    create?: XOR<RoomCreateWithoutBlocksInput, RoomUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBlocksInput
    upsert?: RoomUpsertWithoutBlocksInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutBlocksInput, RoomUpdateWithoutBlocksInput>, RoomUncheckedUpdateWithoutBlocksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type NestedEnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type NestedEnumStayStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StayStatus | EnumStayStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StayStatus[] | ListEnumStayStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StayStatus[] | ListEnumStayStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStayStatusFilter<$PrismaModel> | $Enums.StayStatus
  }

  export type NestedEnumStayStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StayStatus | EnumStayStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StayStatus[] | ListEnumStayStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StayStatus[] | ListEnumStayStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStayStatusWithAggregatesFilter<$PrismaModel> | $Enums.StayStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStayStatusFilter<$PrismaModel>
    _max?: NestedEnumStayStatusFilter<$PrismaModel>
  }

  export type NestedEnumChargeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChargeType | EnumChargeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChargeType[] | ListEnumChargeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChargeType[] | ListEnumChargeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChargeTypeFilter<$PrismaModel> | $Enums.ChargeType
  }

  export type NestedEnumChargeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChargeType | EnumChargeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChargeType[] | ListEnumChargeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChargeType[] | ListEnumChargeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChargeTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChargeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChargeTypeFilter<$PrismaModel>
    _max?: NestedEnumChargeTypeFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type UserCreateWithoutHotelInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHotelInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHotelInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHotelInput, UserUncheckedCreateWithoutHotelInput>
  }

  export type UserCreateManyHotelInputEnvelope = {
    data: UserCreateManyHotelInput | UserCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type GuestCreateWithoutHotelInput = {
    id?: string
    name: string
    document?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutGuestInput
    stayGuests?: StayGuestCreateNestedManyWithoutGuestInput
  }

  export type GuestUncheckedCreateWithoutHotelInput = {
    id?: string
    name: string
    document?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutGuestInput
    stayGuests?: StayGuestUncheckedCreateNestedManyWithoutGuestInput
  }

  export type GuestCreateOrConnectWithoutHotelInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestCreateWithoutHotelInput, GuestUncheckedCreateWithoutHotelInput>
  }

  export type GuestCreateManyHotelInputEnvelope = {
    data: GuestCreateManyHotelInput | GuestCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type RoomCategoryCreateWithoutHotelInput = {
    id?: string
    name: string
    capacity: number
    basePrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutCategoryInput
  }

  export type RoomCategoryUncheckedCreateWithoutHotelInput = {
    id?: string
    name: string
    capacity: number
    basePrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type RoomCategoryCreateOrConnectWithoutHotelInput = {
    where: RoomCategoryWhereUniqueInput
    create: XOR<RoomCategoryCreateWithoutHotelInput, RoomCategoryUncheckedCreateWithoutHotelInput>
  }

  export type RoomCategoryCreateManyHotelInputEnvelope = {
    data: RoomCategoryCreateManyHotelInput | RoomCategoryCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type RoomCreateWithoutHotelInput = {
    id?: string
    number: string
    floor?: string | null
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    category: RoomCategoryCreateNestedOneWithoutRoomsInput
    reservationRooms?: ReservationRoomCreateNestedManyWithoutRoomInput
    blocks?: RoomBlockCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutHotelInput = {
    id?: string
    roomCategoryId: string
    number: string
    floor?: string | null
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    reservationRooms?: ReservationRoomUncheckedCreateNestedManyWithoutRoomInput
    blocks?: RoomBlockUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutHotelInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput>
  }

  export type RoomCreateManyHotelInputEnvelope = {
    data: RoomCreateManyHotelInput | RoomCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type ReservationCreateWithoutHotelInput = {
    id?: string
    checkInDate: Date | string
    checkOutDate: Date | string
    status?: $Enums.ReservationStatus
    source?: string | null
    notes?: string | null
    createdAt?: Date | string
    guest: GuestCreateNestedOneWithoutReservationsInput
    rooms?: ReservationRoomCreateNestedManyWithoutReservationInput
    stay?: StayCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutHotelInput = {
    id?: string
    guestId: string
    checkInDate: Date | string
    checkOutDate: Date | string
    status?: $Enums.ReservationStatus
    source?: string | null
    notes?: string | null
    createdAt?: Date | string
    rooms?: ReservationRoomUncheckedCreateNestedManyWithoutReservationInput
    stay?: StayUncheckedCreateNestedOneWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutHotelInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutHotelInput, ReservationUncheckedCreateWithoutHotelInput>
  }

  export type ReservationCreateManyHotelInputEnvelope = {
    data: ReservationCreateManyHotelInput | ReservationCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutHotelInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutHotelInput, UserUncheckedUpdateWithoutHotelInput>
    create: XOR<UserCreateWithoutHotelInput, UserUncheckedCreateWithoutHotelInput>
  }

  export type UserUpdateWithWhereUniqueWithoutHotelInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutHotelInput, UserUncheckedUpdateWithoutHotelInput>
  }

  export type UserUpdateManyWithWhereWithoutHotelInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutHotelInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    hotelId?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type GuestUpsertWithWhereUniqueWithoutHotelInput = {
    where: GuestWhereUniqueInput
    update: XOR<GuestUpdateWithoutHotelInput, GuestUncheckedUpdateWithoutHotelInput>
    create: XOR<GuestCreateWithoutHotelInput, GuestUncheckedCreateWithoutHotelInput>
  }

  export type GuestUpdateWithWhereUniqueWithoutHotelInput = {
    where: GuestWhereUniqueInput
    data: XOR<GuestUpdateWithoutHotelInput, GuestUncheckedUpdateWithoutHotelInput>
  }

  export type GuestUpdateManyWithWhereWithoutHotelInput = {
    where: GuestScalarWhereInput
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyWithoutHotelInput>
  }

  export type GuestScalarWhereInput = {
    AND?: GuestScalarWhereInput | GuestScalarWhereInput[]
    OR?: GuestScalarWhereInput[]
    NOT?: GuestScalarWhereInput | GuestScalarWhereInput[]
    id?: StringFilter<"Guest"> | string
    hotelId?: StringFilter<"Guest"> | string
    name?: StringFilter<"Guest"> | string
    document?: StringNullableFilter<"Guest"> | string | null
    phone?: StringNullableFilter<"Guest"> | string | null
    email?: StringNullableFilter<"Guest"> | string | null
    createdAt?: DateTimeFilter<"Guest"> | Date | string
  }

  export type RoomCategoryUpsertWithWhereUniqueWithoutHotelInput = {
    where: RoomCategoryWhereUniqueInput
    update: XOR<RoomCategoryUpdateWithoutHotelInput, RoomCategoryUncheckedUpdateWithoutHotelInput>
    create: XOR<RoomCategoryCreateWithoutHotelInput, RoomCategoryUncheckedCreateWithoutHotelInput>
  }

  export type RoomCategoryUpdateWithWhereUniqueWithoutHotelInput = {
    where: RoomCategoryWhereUniqueInput
    data: XOR<RoomCategoryUpdateWithoutHotelInput, RoomCategoryUncheckedUpdateWithoutHotelInput>
  }

  export type RoomCategoryUpdateManyWithWhereWithoutHotelInput = {
    where: RoomCategoryScalarWhereInput
    data: XOR<RoomCategoryUpdateManyMutationInput, RoomCategoryUncheckedUpdateManyWithoutHotelInput>
  }

  export type RoomCategoryScalarWhereInput = {
    AND?: RoomCategoryScalarWhereInput | RoomCategoryScalarWhereInput[]
    OR?: RoomCategoryScalarWhereInput[]
    NOT?: RoomCategoryScalarWhereInput | RoomCategoryScalarWhereInput[]
    id?: StringFilter<"RoomCategory"> | string
    hotelId?: StringFilter<"RoomCategory"> | string
    name?: StringFilter<"RoomCategory"> | string
    capacity?: IntFilter<"RoomCategory"> | number
    basePrice?: DecimalFilter<"RoomCategory"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"RoomCategory"> | Date | string
  }

  export type RoomUpsertWithWhereUniqueWithoutHotelInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutHotelInput, RoomUncheckedUpdateWithoutHotelInput>
    create: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutHotelInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutHotelInput, RoomUncheckedUpdateWithoutHotelInput>
  }

  export type RoomUpdateManyWithWhereWithoutHotelInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutHotelInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: StringFilter<"Room"> | string
    hotelId?: StringFilter<"Room"> | string
    roomCategoryId?: StringFilter<"Room"> | string
    number?: StringFilter<"Room"> | string
    floor?: StringNullableFilter<"Room"> | string | null
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    createdAt?: DateTimeFilter<"Room"> | Date | string
  }

  export type ReservationUpsertWithWhereUniqueWithoutHotelInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutHotelInput, ReservationUncheckedUpdateWithoutHotelInput>
    create: XOR<ReservationCreateWithoutHotelInput, ReservationUncheckedCreateWithoutHotelInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutHotelInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutHotelInput, ReservationUncheckedUpdateWithoutHotelInput>
  }

  export type ReservationUpdateManyWithWhereWithoutHotelInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutHotelInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    id?: StringFilter<"Reservation"> | string
    hotelId?: StringFilter<"Reservation"> | string
    guestId?: StringFilter<"Reservation"> | string
    checkInDate?: DateTimeFilter<"Reservation"> | Date | string
    checkOutDate?: DateTimeFilter<"Reservation"> | Date | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    source?: StringNullableFilter<"Reservation"> | string | null
    notes?: StringNullableFilter<"Reservation"> | string | null
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
  }

  export type HotelCreateWithoutUsersInput = {
    id?: string
    name: string
    city?: string | null
    createdAt?: Date | string
    guests?: GuestCreateNestedManyWithoutHotelInput
    roomCategories?: RoomCategoryCreateNestedManyWithoutHotelInput
    rooms?: RoomCreateNestedManyWithoutHotelInput
    reservations?: ReservationCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    city?: string | null
    createdAt?: Date | string
    guests?: GuestUncheckedCreateNestedManyWithoutHotelInput
    roomCategories?: RoomCategoryUncheckedCreateNestedManyWithoutHotelInput
    rooms?: RoomUncheckedCreateNestedManyWithoutHotelInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutUsersInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutUsersInput, HotelUncheckedCreateWithoutUsersInput>
  }

  export type UserRoleCreateWithoutUserInput = {
    role: RoleCreateNestedOneWithoutUserRolesInput
  }

  export type UserRoleUncheckedCreateWithoutUserInput = {
    roleId: string
  }

  export type UserRoleCreateOrConnectWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleCreateManyUserInputEnvelope = {
    data: UserRoleCreateManyUserInput | UserRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HotelUpsertWithoutUsersInput = {
    update: XOR<HotelUpdateWithoutUsersInput, HotelUncheckedUpdateWithoutUsersInput>
    create: XOR<HotelCreateWithoutUsersInput, HotelUncheckedCreateWithoutUsersInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutUsersInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutUsersInput, HotelUncheckedUpdateWithoutUsersInput>
  }

  export type HotelUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: GuestUpdateManyWithoutHotelNestedInput
    roomCategories?: RoomCategoryUpdateManyWithoutHotelNestedInput
    rooms?: RoomUpdateManyWithoutHotelNestedInput
    reservations?: ReservationUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: GuestUncheckedUpdateManyWithoutHotelNestedInput
    roomCategories?: RoomCategoryUncheckedUpdateManyWithoutHotelNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutHotelNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type UserRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutUserInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRoleScalarWhereInput = {
    AND?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    OR?: UserRoleScalarWhereInput[]
    NOT?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
  }

  export type UserRoleCreateWithoutRoleInput = {
    user: UserCreateNestedOneWithoutUserRolesInput
  }

  export type UserRoleUncheckedCreateWithoutRoleInput = {
    userId: string
  }

  export type UserRoleCreateOrConnectWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleCreateManyRoleInputEnvelope = {
    data: UserRoleCreateManyRoleInput | UserRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserCreateWithoutUserRolesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    hotel?: HotelCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutUserRolesInput = {
    id?: string
    hotelId?: string | null
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
  }

  export type UserCreateOrConnectWithoutUserRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserRolesInput, UserUncheckedCreateWithoutUserRolesInput>
  }

  export type RoleCreateWithoutUserRolesInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type RoleUncheckedCreateWithoutUserRolesInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type RoleCreateOrConnectWithoutUserRolesInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUserRolesInput, RoleUncheckedCreateWithoutUserRolesInput>
  }

  export type UserUpsertWithoutUserRolesInput = {
    update: XOR<UserUpdateWithoutUserRolesInput, UserUncheckedUpdateWithoutUserRolesInput>
    create: XOR<UserCreateWithoutUserRolesInput, UserUncheckedCreateWithoutUserRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserRolesInput, UserUncheckedUpdateWithoutUserRolesInput>
  }

  export type UserUpdateWithoutUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hotel?: HotelUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleUpsertWithoutUserRolesInput = {
    update: XOR<RoleUpdateWithoutUserRolesInput, RoleUncheckedUpdateWithoutUserRolesInput>
    create: XOR<RoleCreateWithoutUserRolesInput, RoleUncheckedCreateWithoutUserRolesInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUserRolesInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUserRolesInput, RoleUncheckedUpdateWithoutUserRolesInput>
  }

  export type RoleUpdateWithoutUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateWithoutUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelCreateWithoutRoomCategoriesInput = {
    id?: string
    name: string
    city?: string | null
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutHotelInput
    guests?: GuestCreateNestedManyWithoutHotelInput
    rooms?: RoomCreateNestedManyWithoutHotelInput
    reservations?: ReservationCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutRoomCategoriesInput = {
    id?: string
    name: string
    city?: string | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutHotelInput
    guests?: GuestUncheckedCreateNestedManyWithoutHotelInput
    rooms?: RoomUncheckedCreateNestedManyWithoutHotelInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutRoomCategoriesInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutRoomCategoriesInput, HotelUncheckedCreateWithoutRoomCategoriesInput>
  }

  export type RoomCreateWithoutCategoryInput = {
    id?: string
    number: string
    floor?: string | null
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    hotel: HotelCreateNestedOneWithoutRoomsInput
    reservationRooms?: ReservationRoomCreateNestedManyWithoutRoomInput
    blocks?: RoomBlockCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutCategoryInput = {
    id?: string
    hotelId: string
    number: string
    floor?: string | null
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    reservationRooms?: ReservationRoomUncheckedCreateNestedManyWithoutRoomInput
    blocks?: RoomBlockUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutCategoryInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutCategoryInput, RoomUncheckedCreateWithoutCategoryInput>
  }

  export type RoomCreateManyCategoryInputEnvelope = {
    data: RoomCreateManyCategoryInput | RoomCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type HotelUpsertWithoutRoomCategoriesInput = {
    update: XOR<HotelUpdateWithoutRoomCategoriesInput, HotelUncheckedUpdateWithoutRoomCategoriesInput>
    create: XOR<HotelCreateWithoutRoomCategoriesInput, HotelUncheckedCreateWithoutRoomCategoriesInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutRoomCategoriesInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutRoomCategoriesInput, HotelUncheckedUpdateWithoutRoomCategoriesInput>
  }

  export type HotelUpdateWithoutRoomCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutHotelNestedInput
    guests?: GuestUpdateManyWithoutHotelNestedInput
    rooms?: RoomUpdateManyWithoutHotelNestedInput
    reservations?: ReservationUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutRoomCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutHotelNestedInput
    guests?: GuestUncheckedUpdateManyWithoutHotelNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutHotelNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type RoomUpsertWithWhereUniqueWithoutCategoryInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutCategoryInput, RoomUncheckedUpdateWithoutCategoryInput>
    create: XOR<RoomCreateWithoutCategoryInput, RoomUncheckedCreateWithoutCategoryInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutCategoryInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutCategoryInput, RoomUncheckedUpdateWithoutCategoryInput>
  }

  export type RoomUpdateManyWithWhereWithoutCategoryInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutCategoryInput>
  }

  export type HotelCreateWithoutRoomsInput = {
    id?: string
    name: string
    city?: string | null
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutHotelInput
    guests?: GuestCreateNestedManyWithoutHotelInput
    roomCategories?: RoomCategoryCreateNestedManyWithoutHotelInput
    reservations?: ReservationCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutRoomsInput = {
    id?: string
    name: string
    city?: string | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutHotelInput
    guests?: GuestUncheckedCreateNestedManyWithoutHotelInput
    roomCategories?: RoomCategoryUncheckedCreateNestedManyWithoutHotelInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutRoomsInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutRoomsInput, HotelUncheckedCreateWithoutRoomsInput>
  }

  export type RoomCategoryCreateWithoutRoomsInput = {
    id?: string
    name: string
    capacity: number
    basePrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    hotel: HotelCreateNestedOneWithoutRoomCategoriesInput
  }

  export type RoomCategoryUncheckedCreateWithoutRoomsInput = {
    id?: string
    hotelId: string
    name: string
    capacity: number
    basePrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type RoomCategoryCreateOrConnectWithoutRoomsInput = {
    where: RoomCategoryWhereUniqueInput
    create: XOR<RoomCategoryCreateWithoutRoomsInput, RoomCategoryUncheckedCreateWithoutRoomsInput>
  }

  export type ReservationRoomCreateWithoutRoomInput = {
    id?: string
    dailyRate: Decimal | DecimalJsLike | number | string
    adults?: number
    children?: number
    reservation: ReservationCreateNestedOneWithoutRoomsInput
  }

  export type ReservationRoomUncheckedCreateWithoutRoomInput = {
    id?: string
    reservationId: string
    dailyRate: Decimal | DecimalJsLike | number | string
    adults?: number
    children?: number
  }

  export type ReservationRoomCreateOrConnectWithoutRoomInput = {
    where: ReservationRoomWhereUniqueInput
    create: XOR<ReservationRoomCreateWithoutRoomInput, ReservationRoomUncheckedCreateWithoutRoomInput>
  }

  export type ReservationRoomCreateManyRoomInputEnvelope = {
    data: ReservationRoomCreateManyRoomInput | ReservationRoomCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type RoomBlockCreateWithoutRoomInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    createdAt?: Date | string
  }

  export type RoomBlockUncheckedCreateWithoutRoomInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    createdAt?: Date | string
  }

  export type RoomBlockCreateOrConnectWithoutRoomInput = {
    where: RoomBlockWhereUniqueInput
    create: XOR<RoomBlockCreateWithoutRoomInput, RoomBlockUncheckedCreateWithoutRoomInput>
  }

  export type RoomBlockCreateManyRoomInputEnvelope = {
    data: RoomBlockCreateManyRoomInput | RoomBlockCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type HotelUpsertWithoutRoomsInput = {
    update: XOR<HotelUpdateWithoutRoomsInput, HotelUncheckedUpdateWithoutRoomsInput>
    create: XOR<HotelCreateWithoutRoomsInput, HotelUncheckedCreateWithoutRoomsInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutRoomsInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutRoomsInput, HotelUncheckedUpdateWithoutRoomsInput>
  }

  export type HotelUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutHotelNestedInput
    guests?: GuestUpdateManyWithoutHotelNestedInput
    roomCategories?: RoomCategoryUpdateManyWithoutHotelNestedInput
    reservations?: ReservationUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutHotelNestedInput
    guests?: GuestUncheckedUpdateManyWithoutHotelNestedInput
    roomCategories?: RoomCategoryUncheckedUpdateManyWithoutHotelNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type RoomCategoryUpsertWithoutRoomsInput = {
    update: XOR<RoomCategoryUpdateWithoutRoomsInput, RoomCategoryUncheckedUpdateWithoutRoomsInput>
    create: XOR<RoomCategoryCreateWithoutRoomsInput, RoomCategoryUncheckedCreateWithoutRoomsInput>
    where?: RoomCategoryWhereInput
  }

  export type RoomCategoryUpdateToOneWithWhereWithoutRoomsInput = {
    where?: RoomCategoryWhereInput
    data: XOR<RoomCategoryUpdateWithoutRoomsInput, RoomCategoryUncheckedUpdateWithoutRoomsInput>
  }

  export type RoomCategoryUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutRoomCategoriesNestedInput
  }

  export type RoomCategoryUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationRoomUpsertWithWhereUniqueWithoutRoomInput = {
    where: ReservationRoomWhereUniqueInput
    update: XOR<ReservationRoomUpdateWithoutRoomInput, ReservationRoomUncheckedUpdateWithoutRoomInput>
    create: XOR<ReservationRoomCreateWithoutRoomInput, ReservationRoomUncheckedCreateWithoutRoomInput>
  }

  export type ReservationRoomUpdateWithWhereUniqueWithoutRoomInput = {
    where: ReservationRoomWhereUniqueInput
    data: XOR<ReservationRoomUpdateWithoutRoomInput, ReservationRoomUncheckedUpdateWithoutRoomInput>
  }

  export type ReservationRoomUpdateManyWithWhereWithoutRoomInput = {
    where: ReservationRoomScalarWhereInput
    data: XOR<ReservationRoomUpdateManyMutationInput, ReservationRoomUncheckedUpdateManyWithoutRoomInput>
  }

  export type ReservationRoomScalarWhereInput = {
    AND?: ReservationRoomScalarWhereInput | ReservationRoomScalarWhereInput[]
    OR?: ReservationRoomScalarWhereInput[]
    NOT?: ReservationRoomScalarWhereInput | ReservationRoomScalarWhereInput[]
    id?: StringFilter<"ReservationRoom"> | string
    reservationId?: StringFilter<"ReservationRoom"> | string
    roomId?: StringFilter<"ReservationRoom"> | string
    dailyRate?: DecimalFilter<"ReservationRoom"> | Decimal | DecimalJsLike | number | string
    adults?: IntFilter<"ReservationRoom"> | number
    children?: IntFilter<"ReservationRoom"> | number
  }

  export type RoomBlockUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomBlockWhereUniqueInput
    update: XOR<RoomBlockUpdateWithoutRoomInput, RoomBlockUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomBlockCreateWithoutRoomInput, RoomBlockUncheckedCreateWithoutRoomInput>
  }

  export type RoomBlockUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomBlockWhereUniqueInput
    data: XOR<RoomBlockUpdateWithoutRoomInput, RoomBlockUncheckedUpdateWithoutRoomInput>
  }

  export type RoomBlockUpdateManyWithWhereWithoutRoomInput = {
    where: RoomBlockScalarWhereInput
    data: XOR<RoomBlockUpdateManyMutationInput, RoomBlockUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomBlockScalarWhereInput = {
    AND?: RoomBlockScalarWhereInput | RoomBlockScalarWhereInput[]
    OR?: RoomBlockScalarWhereInput[]
    NOT?: RoomBlockScalarWhereInput | RoomBlockScalarWhereInput[]
    id?: StringFilter<"RoomBlock"> | string
    roomId?: StringFilter<"RoomBlock"> | string
    startDate?: DateTimeFilter<"RoomBlock"> | Date | string
    endDate?: DateTimeFilter<"RoomBlock"> | Date | string
    reason?: StringNullableFilter<"RoomBlock"> | string | null
    createdAt?: DateTimeFilter<"RoomBlock"> | Date | string
  }

  export type HotelCreateWithoutGuestsInput = {
    id?: string
    name: string
    city?: string | null
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutHotelInput
    roomCategories?: RoomCategoryCreateNestedManyWithoutHotelInput
    rooms?: RoomCreateNestedManyWithoutHotelInput
    reservations?: ReservationCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutGuestsInput = {
    id?: string
    name: string
    city?: string | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutHotelInput
    roomCategories?: RoomCategoryUncheckedCreateNestedManyWithoutHotelInput
    rooms?: RoomUncheckedCreateNestedManyWithoutHotelInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutGuestsInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutGuestsInput, HotelUncheckedCreateWithoutGuestsInput>
  }

  export type ReservationCreateWithoutGuestInput = {
    id?: string
    checkInDate: Date | string
    checkOutDate: Date | string
    status?: $Enums.ReservationStatus
    source?: string | null
    notes?: string | null
    createdAt?: Date | string
    hotel: HotelCreateNestedOneWithoutReservationsInput
    rooms?: ReservationRoomCreateNestedManyWithoutReservationInput
    stay?: StayCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutGuestInput = {
    id?: string
    hotelId: string
    checkInDate: Date | string
    checkOutDate: Date | string
    status?: $Enums.ReservationStatus
    source?: string | null
    notes?: string | null
    createdAt?: Date | string
    rooms?: ReservationRoomUncheckedCreateNestedManyWithoutReservationInput
    stay?: StayUncheckedCreateNestedOneWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutGuestInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutGuestInput, ReservationUncheckedCreateWithoutGuestInput>
  }

  export type ReservationCreateManyGuestInputEnvelope = {
    data: ReservationCreateManyGuestInput | ReservationCreateManyGuestInput[]
    skipDuplicates?: boolean
  }

  export type StayGuestCreateWithoutGuestInput = {
    stay: StayCreateNestedOneWithoutStayGuestsInput
  }

  export type StayGuestUncheckedCreateWithoutGuestInput = {
    stayId: string
  }

  export type StayGuestCreateOrConnectWithoutGuestInput = {
    where: StayGuestWhereUniqueInput
    create: XOR<StayGuestCreateWithoutGuestInput, StayGuestUncheckedCreateWithoutGuestInput>
  }

  export type StayGuestCreateManyGuestInputEnvelope = {
    data: StayGuestCreateManyGuestInput | StayGuestCreateManyGuestInput[]
    skipDuplicates?: boolean
  }

  export type HotelUpsertWithoutGuestsInput = {
    update: XOR<HotelUpdateWithoutGuestsInput, HotelUncheckedUpdateWithoutGuestsInput>
    create: XOR<HotelCreateWithoutGuestsInput, HotelUncheckedCreateWithoutGuestsInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutGuestsInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutGuestsInput, HotelUncheckedUpdateWithoutGuestsInput>
  }

  export type HotelUpdateWithoutGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutHotelNestedInput
    roomCategories?: RoomCategoryUpdateManyWithoutHotelNestedInput
    rooms?: RoomUpdateManyWithoutHotelNestedInput
    reservations?: ReservationUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutHotelNestedInput
    roomCategories?: RoomCategoryUncheckedUpdateManyWithoutHotelNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutHotelNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type ReservationUpsertWithWhereUniqueWithoutGuestInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutGuestInput, ReservationUncheckedUpdateWithoutGuestInput>
    create: XOR<ReservationCreateWithoutGuestInput, ReservationUncheckedCreateWithoutGuestInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutGuestInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutGuestInput, ReservationUncheckedUpdateWithoutGuestInput>
  }

  export type ReservationUpdateManyWithWhereWithoutGuestInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutGuestInput>
  }

  export type StayGuestUpsertWithWhereUniqueWithoutGuestInput = {
    where: StayGuestWhereUniqueInput
    update: XOR<StayGuestUpdateWithoutGuestInput, StayGuestUncheckedUpdateWithoutGuestInput>
    create: XOR<StayGuestCreateWithoutGuestInput, StayGuestUncheckedCreateWithoutGuestInput>
  }

  export type StayGuestUpdateWithWhereUniqueWithoutGuestInput = {
    where: StayGuestWhereUniqueInput
    data: XOR<StayGuestUpdateWithoutGuestInput, StayGuestUncheckedUpdateWithoutGuestInput>
  }

  export type StayGuestUpdateManyWithWhereWithoutGuestInput = {
    where: StayGuestScalarWhereInput
    data: XOR<StayGuestUpdateManyMutationInput, StayGuestUncheckedUpdateManyWithoutGuestInput>
  }

  export type StayGuestScalarWhereInput = {
    AND?: StayGuestScalarWhereInput | StayGuestScalarWhereInput[]
    OR?: StayGuestScalarWhereInput[]
    NOT?: StayGuestScalarWhereInput | StayGuestScalarWhereInput[]
    stayId?: StringFilter<"StayGuest"> | string
    guestId?: StringFilter<"StayGuest"> | string
  }

  export type HotelCreateWithoutReservationsInput = {
    id?: string
    name: string
    city?: string | null
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutHotelInput
    guests?: GuestCreateNestedManyWithoutHotelInput
    roomCategories?: RoomCategoryCreateNestedManyWithoutHotelInput
    rooms?: RoomCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutReservationsInput = {
    id?: string
    name: string
    city?: string | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutHotelInput
    guests?: GuestUncheckedCreateNestedManyWithoutHotelInput
    roomCategories?: RoomCategoryUncheckedCreateNestedManyWithoutHotelInput
    rooms?: RoomUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutReservationsInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutReservationsInput, HotelUncheckedCreateWithoutReservationsInput>
  }

  export type GuestCreateWithoutReservationsInput = {
    id?: string
    name: string
    document?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    hotel: HotelCreateNestedOneWithoutGuestsInput
    stayGuests?: StayGuestCreateNestedManyWithoutGuestInput
  }

  export type GuestUncheckedCreateWithoutReservationsInput = {
    id?: string
    hotelId: string
    name: string
    document?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    stayGuests?: StayGuestUncheckedCreateNestedManyWithoutGuestInput
  }

  export type GuestCreateOrConnectWithoutReservationsInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestCreateWithoutReservationsInput, GuestUncheckedCreateWithoutReservationsInput>
  }

  export type ReservationRoomCreateWithoutReservationInput = {
    id?: string
    dailyRate: Decimal | DecimalJsLike | number | string
    adults?: number
    children?: number
    room: RoomCreateNestedOneWithoutReservationRoomsInput
  }

  export type ReservationRoomUncheckedCreateWithoutReservationInput = {
    id?: string
    roomId: string
    dailyRate: Decimal | DecimalJsLike | number | string
    adults?: number
    children?: number
  }

  export type ReservationRoomCreateOrConnectWithoutReservationInput = {
    where: ReservationRoomWhereUniqueInput
    create: XOR<ReservationRoomCreateWithoutReservationInput, ReservationRoomUncheckedCreateWithoutReservationInput>
  }

  export type ReservationRoomCreateManyReservationInputEnvelope = {
    data: ReservationRoomCreateManyReservationInput | ReservationRoomCreateManyReservationInput[]
    skipDuplicates?: boolean
  }

  export type StayCreateWithoutReservationInput = {
    id?: string
    checkInAt?: Date | string | null
    checkOutAt?: Date | string | null
    status?: $Enums.StayStatus
    charges?: ChargeCreateNestedManyWithoutStayInput
    payments?: PaymentCreateNestedManyWithoutStayInput
    stayGuests?: StayGuestCreateNestedManyWithoutStayInput
  }

  export type StayUncheckedCreateWithoutReservationInput = {
    id?: string
    checkInAt?: Date | string | null
    checkOutAt?: Date | string | null
    status?: $Enums.StayStatus
    charges?: ChargeUncheckedCreateNestedManyWithoutStayInput
    payments?: PaymentUncheckedCreateNestedManyWithoutStayInput
    stayGuests?: StayGuestUncheckedCreateNestedManyWithoutStayInput
  }

  export type StayCreateOrConnectWithoutReservationInput = {
    where: StayWhereUniqueInput
    create: XOR<StayCreateWithoutReservationInput, StayUncheckedCreateWithoutReservationInput>
  }

  export type HotelUpsertWithoutReservationsInput = {
    update: XOR<HotelUpdateWithoutReservationsInput, HotelUncheckedUpdateWithoutReservationsInput>
    create: XOR<HotelCreateWithoutReservationsInput, HotelUncheckedCreateWithoutReservationsInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutReservationsInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutReservationsInput, HotelUncheckedUpdateWithoutReservationsInput>
  }

  export type HotelUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutHotelNestedInput
    guests?: GuestUpdateManyWithoutHotelNestedInput
    roomCategories?: RoomCategoryUpdateManyWithoutHotelNestedInput
    rooms?: RoomUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutHotelNestedInput
    guests?: GuestUncheckedUpdateManyWithoutHotelNestedInput
    roomCategories?: RoomCategoryUncheckedUpdateManyWithoutHotelNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type GuestUpsertWithoutReservationsInput = {
    update: XOR<GuestUpdateWithoutReservationsInput, GuestUncheckedUpdateWithoutReservationsInput>
    create: XOR<GuestCreateWithoutReservationsInput, GuestUncheckedCreateWithoutReservationsInput>
    where?: GuestWhereInput
  }

  export type GuestUpdateToOneWithWhereWithoutReservationsInput = {
    where?: GuestWhereInput
    data: XOR<GuestUpdateWithoutReservationsInput, GuestUncheckedUpdateWithoutReservationsInput>
  }

  export type GuestUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutGuestsNestedInput
    stayGuests?: StayGuestUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stayGuests?: StayGuestUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type ReservationRoomUpsertWithWhereUniqueWithoutReservationInput = {
    where: ReservationRoomWhereUniqueInput
    update: XOR<ReservationRoomUpdateWithoutReservationInput, ReservationRoomUncheckedUpdateWithoutReservationInput>
    create: XOR<ReservationRoomCreateWithoutReservationInput, ReservationRoomUncheckedCreateWithoutReservationInput>
  }

  export type ReservationRoomUpdateWithWhereUniqueWithoutReservationInput = {
    where: ReservationRoomWhereUniqueInput
    data: XOR<ReservationRoomUpdateWithoutReservationInput, ReservationRoomUncheckedUpdateWithoutReservationInput>
  }

  export type ReservationRoomUpdateManyWithWhereWithoutReservationInput = {
    where: ReservationRoomScalarWhereInput
    data: XOR<ReservationRoomUpdateManyMutationInput, ReservationRoomUncheckedUpdateManyWithoutReservationInput>
  }

  export type StayUpsertWithoutReservationInput = {
    update: XOR<StayUpdateWithoutReservationInput, StayUncheckedUpdateWithoutReservationInput>
    create: XOR<StayCreateWithoutReservationInput, StayUncheckedCreateWithoutReservationInput>
    where?: StayWhereInput
  }

  export type StayUpdateToOneWithWhereWithoutReservationInput = {
    where?: StayWhereInput
    data: XOR<StayUpdateWithoutReservationInput, StayUncheckedUpdateWithoutReservationInput>
  }

  export type StayUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStayStatusFieldUpdateOperationsInput | $Enums.StayStatus
    charges?: ChargeUpdateManyWithoutStayNestedInput
    payments?: PaymentUpdateManyWithoutStayNestedInput
    stayGuests?: StayGuestUpdateManyWithoutStayNestedInput
  }

  export type StayUncheckedUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStayStatusFieldUpdateOperationsInput | $Enums.StayStatus
    charges?: ChargeUncheckedUpdateManyWithoutStayNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutStayNestedInput
    stayGuests?: StayGuestUncheckedUpdateManyWithoutStayNestedInput
  }

  export type ReservationCreateWithoutRoomsInput = {
    id?: string
    checkInDate: Date | string
    checkOutDate: Date | string
    status?: $Enums.ReservationStatus
    source?: string | null
    notes?: string | null
    createdAt?: Date | string
    hotel: HotelCreateNestedOneWithoutReservationsInput
    guest: GuestCreateNestedOneWithoutReservationsInput
    stay?: StayCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutRoomsInput = {
    id?: string
    hotelId: string
    guestId: string
    checkInDate: Date | string
    checkOutDate: Date | string
    status?: $Enums.ReservationStatus
    source?: string | null
    notes?: string | null
    createdAt?: Date | string
    stay?: StayUncheckedCreateNestedOneWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutRoomsInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutRoomsInput, ReservationUncheckedCreateWithoutRoomsInput>
  }

  export type RoomCreateWithoutReservationRoomsInput = {
    id?: string
    number: string
    floor?: string | null
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    hotel: HotelCreateNestedOneWithoutRoomsInput
    category: RoomCategoryCreateNestedOneWithoutRoomsInput
    blocks?: RoomBlockCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutReservationRoomsInput = {
    id?: string
    hotelId: string
    roomCategoryId: string
    number: string
    floor?: string | null
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    blocks?: RoomBlockUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutReservationRoomsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutReservationRoomsInput, RoomUncheckedCreateWithoutReservationRoomsInput>
  }

  export type ReservationUpsertWithoutRoomsInput = {
    update: XOR<ReservationUpdateWithoutRoomsInput, ReservationUncheckedUpdateWithoutRoomsInput>
    create: XOR<ReservationCreateWithoutRoomsInput, ReservationUncheckedCreateWithoutRoomsInput>
    where?: ReservationWhereInput
  }

  export type ReservationUpdateToOneWithWhereWithoutRoomsInput = {
    where?: ReservationWhereInput
    data: XOR<ReservationUpdateWithoutRoomsInput, ReservationUncheckedUpdateWithoutRoomsInput>
  }

  export type ReservationUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    source?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutReservationsNestedInput
    guest?: GuestUpdateOneRequiredWithoutReservationsNestedInput
    stay?: StayUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    source?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stay?: StayUncheckedUpdateOneWithoutReservationNestedInput
  }

  export type RoomUpsertWithoutReservationRoomsInput = {
    update: XOR<RoomUpdateWithoutReservationRoomsInput, RoomUncheckedUpdateWithoutReservationRoomsInput>
    create: XOR<RoomCreateWithoutReservationRoomsInput, RoomUncheckedCreateWithoutReservationRoomsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutReservationRoomsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutReservationRoomsInput, RoomUncheckedUpdateWithoutReservationRoomsInput>
  }

  export type RoomUpdateWithoutReservationRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutRoomsNestedInput
    category?: RoomCategoryUpdateOneRequiredWithoutRoomsNestedInput
    blocks?: RoomBlockUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutReservationRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    roomCategoryId?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: RoomBlockUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type ReservationCreateWithoutStayInput = {
    id?: string
    checkInDate: Date | string
    checkOutDate: Date | string
    status?: $Enums.ReservationStatus
    source?: string | null
    notes?: string | null
    createdAt?: Date | string
    hotel: HotelCreateNestedOneWithoutReservationsInput
    guest: GuestCreateNestedOneWithoutReservationsInput
    rooms?: ReservationRoomCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutStayInput = {
    id?: string
    hotelId: string
    guestId: string
    checkInDate: Date | string
    checkOutDate: Date | string
    status?: $Enums.ReservationStatus
    source?: string | null
    notes?: string | null
    createdAt?: Date | string
    rooms?: ReservationRoomUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutStayInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutStayInput, ReservationUncheckedCreateWithoutStayInput>
  }

  export type ChargeCreateWithoutStayInput = {
    id?: string
    type: $Enums.ChargeType
    description: string
    amount: Decimal | DecimalJsLike | number | string
    occurredAt?: Date | string
  }

  export type ChargeUncheckedCreateWithoutStayInput = {
    id?: string
    type: $Enums.ChargeType
    description: string
    amount: Decimal | DecimalJsLike | number | string
    occurredAt?: Date | string
  }

  export type ChargeCreateOrConnectWithoutStayInput = {
    where: ChargeWhereUniqueInput
    create: XOR<ChargeCreateWithoutStayInput, ChargeUncheckedCreateWithoutStayInput>
  }

  export type ChargeCreateManyStayInputEnvelope = {
    data: ChargeCreateManyStayInput | ChargeCreateManyStayInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutStayInput = {
    id?: string
    method: $Enums.PaymentMethod
    amount: Decimal | DecimalJsLike | number | string
    paidAt?: Date | string
    status?: $Enums.PaymentStatus
  }

  export type PaymentUncheckedCreateWithoutStayInput = {
    id?: string
    method: $Enums.PaymentMethod
    amount: Decimal | DecimalJsLike | number | string
    paidAt?: Date | string
    status?: $Enums.PaymentStatus
  }

  export type PaymentCreateOrConnectWithoutStayInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutStayInput, PaymentUncheckedCreateWithoutStayInput>
  }

  export type PaymentCreateManyStayInputEnvelope = {
    data: PaymentCreateManyStayInput | PaymentCreateManyStayInput[]
    skipDuplicates?: boolean
  }

  export type StayGuestCreateWithoutStayInput = {
    guest: GuestCreateNestedOneWithoutStayGuestsInput
  }

  export type StayGuestUncheckedCreateWithoutStayInput = {
    guestId: string
  }

  export type StayGuestCreateOrConnectWithoutStayInput = {
    where: StayGuestWhereUniqueInput
    create: XOR<StayGuestCreateWithoutStayInput, StayGuestUncheckedCreateWithoutStayInput>
  }

  export type StayGuestCreateManyStayInputEnvelope = {
    data: StayGuestCreateManyStayInput | StayGuestCreateManyStayInput[]
    skipDuplicates?: boolean
  }

  export type ReservationUpsertWithoutStayInput = {
    update: XOR<ReservationUpdateWithoutStayInput, ReservationUncheckedUpdateWithoutStayInput>
    create: XOR<ReservationCreateWithoutStayInput, ReservationUncheckedCreateWithoutStayInput>
    where?: ReservationWhereInput
  }

  export type ReservationUpdateToOneWithWhereWithoutStayInput = {
    where?: ReservationWhereInput
    data: XOR<ReservationUpdateWithoutStayInput, ReservationUncheckedUpdateWithoutStayInput>
  }

  export type ReservationUpdateWithoutStayInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    source?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutReservationsNestedInput
    guest?: GuestUpdateOneRequiredWithoutReservationsNestedInput
    rooms?: ReservationRoomUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutStayInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    source?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: ReservationRoomUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ChargeUpsertWithWhereUniqueWithoutStayInput = {
    where: ChargeWhereUniqueInput
    update: XOR<ChargeUpdateWithoutStayInput, ChargeUncheckedUpdateWithoutStayInput>
    create: XOR<ChargeCreateWithoutStayInput, ChargeUncheckedCreateWithoutStayInput>
  }

  export type ChargeUpdateWithWhereUniqueWithoutStayInput = {
    where: ChargeWhereUniqueInput
    data: XOR<ChargeUpdateWithoutStayInput, ChargeUncheckedUpdateWithoutStayInput>
  }

  export type ChargeUpdateManyWithWhereWithoutStayInput = {
    where: ChargeScalarWhereInput
    data: XOR<ChargeUpdateManyMutationInput, ChargeUncheckedUpdateManyWithoutStayInput>
  }

  export type ChargeScalarWhereInput = {
    AND?: ChargeScalarWhereInput | ChargeScalarWhereInput[]
    OR?: ChargeScalarWhereInput[]
    NOT?: ChargeScalarWhereInput | ChargeScalarWhereInput[]
    id?: StringFilter<"Charge"> | string
    stayId?: StringFilter<"Charge"> | string
    type?: EnumChargeTypeFilter<"Charge"> | $Enums.ChargeType
    description?: StringFilter<"Charge"> | string
    amount?: DecimalFilter<"Charge"> | Decimal | DecimalJsLike | number | string
    occurredAt?: DateTimeFilter<"Charge"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutStayInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutStayInput, PaymentUncheckedUpdateWithoutStayInput>
    create: XOR<PaymentCreateWithoutStayInput, PaymentUncheckedCreateWithoutStayInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutStayInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutStayInput, PaymentUncheckedUpdateWithoutStayInput>
  }

  export type PaymentUpdateManyWithWhereWithoutStayInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutStayInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    stayId?: StringFilter<"Payment"> | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeFilter<"Payment"> | Date | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
  }

  export type StayGuestUpsertWithWhereUniqueWithoutStayInput = {
    where: StayGuestWhereUniqueInput
    update: XOR<StayGuestUpdateWithoutStayInput, StayGuestUncheckedUpdateWithoutStayInput>
    create: XOR<StayGuestCreateWithoutStayInput, StayGuestUncheckedCreateWithoutStayInput>
  }

  export type StayGuestUpdateWithWhereUniqueWithoutStayInput = {
    where: StayGuestWhereUniqueInput
    data: XOR<StayGuestUpdateWithoutStayInput, StayGuestUncheckedUpdateWithoutStayInput>
  }

  export type StayGuestUpdateManyWithWhereWithoutStayInput = {
    where: StayGuestScalarWhereInput
    data: XOR<StayGuestUpdateManyMutationInput, StayGuestUncheckedUpdateManyWithoutStayInput>
  }

  export type StayCreateWithoutStayGuestsInput = {
    id?: string
    checkInAt?: Date | string | null
    checkOutAt?: Date | string | null
    status?: $Enums.StayStatus
    reservation: ReservationCreateNestedOneWithoutStayInput
    charges?: ChargeCreateNestedManyWithoutStayInput
    payments?: PaymentCreateNestedManyWithoutStayInput
  }

  export type StayUncheckedCreateWithoutStayGuestsInput = {
    id?: string
    reservationId: string
    checkInAt?: Date | string | null
    checkOutAt?: Date | string | null
    status?: $Enums.StayStatus
    charges?: ChargeUncheckedCreateNestedManyWithoutStayInput
    payments?: PaymentUncheckedCreateNestedManyWithoutStayInput
  }

  export type StayCreateOrConnectWithoutStayGuestsInput = {
    where: StayWhereUniqueInput
    create: XOR<StayCreateWithoutStayGuestsInput, StayUncheckedCreateWithoutStayGuestsInput>
  }

  export type GuestCreateWithoutStayGuestsInput = {
    id?: string
    name: string
    document?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    hotel: HotelCreateNestedOneWithoutGuestsInput
    reservations?: ReservationCreateNestedManyWithoutGuestInput
  }

  export type GuestUncheckedCreateWithoutStayGuestsInput = {
    id?: string
    hotelId: string
    name: string
    document?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutGuestInput
  }

  export type GuestCreateOrConnectWithoutStayGuestsInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestCreateWithoutStayGuestsInput, GuestUncheckedCreateWithoutStayGuestsInput>
  }

  export type StayUpsertWithoutStayGuestsInput = {
    update: XOR<StayUpdateWithoutStayGuestsInput, StayUncheckedUpdateWithoutStayGuestsInput>
    create: XOR<StayCreateWithoutStayGuestsInput, StayUncheckedCreateWithoutStayGuestsInput>
    where?: StayWhereInput
  }

  export type StayUpdateToOneWithWhereWithoutStayGuestsInput = {
    where?: StayWhereInput
    data: XOR<StayUpdateWithoutStayGuestsInput, StayUncheckedUpdateWithoutStayGuestsInput>
  }

  export type StayUpdateWithoutStayGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStayStatusFieldUpdateOperationsInput | $Enums.StayStatus
    reservation?: ReservationUpdateOneRequiredWithoutStayNestedInput
    charges?: ChargeUpdateManyWithoutStayNestedInput
    payments?: PaymentUpdateManyWithoutStayNestedInput
  }

  export type StayUncheckedUpdateWithoutStayGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStayStatusFieldUpdateOperationsInput | $Enums.StayStatus
    charges?: ChargeUncheckedUpdateManyWithoutStayNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutStayNestedInput
  }

  export type GuestUpsertWithoutStayGuestsInput = {
    update: XOR<GuestUpdateWithoutStayGuestsInput, GuestUncheckedUpdateWithoutStayGuestsInput>
    create: XOR<GuestCreateWithoutStayGuestsInput, GuestUncheckedCreateWithoutStayGuestsInput>
    where?: GuestWhereInput
  }

  export type GuestUpdateToOneWithWhereWithoutStayGuestsInput = {
    where?: GuestWhereInput
    data: XOR<GuestUpdateWithoutStayGuestsInput, GuestUncheckedUpdateWithoutStayGuestsInput>
  }

  export type GuestUpdateWithoutStayGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutGuestsNestedInput
    reservations?: ReservationUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateWithoutStayGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type StayCreateWithoutChargesInput = {
    id?: string
    checkInAt?: Date | string | null
    checkOutAt?: Date | string | null
    status?: $Enums.StayStatus
    reservation: ReservationCreateNestedOneWithoutStayInput
    payments?: PaymentCreateNestedManyWithoutStayInput
    stayGuests?: StayGuestCreateNestedManyWithoutStayInput
  }

  export type StayUncheckedCreateWithoutChargesInput = {
    id?: string
    reservationId: string
    checkInAt?: Date | string | null
    checkOutAt?: Date | string | null
    status?: $Enums.StayStatus
    payments?: PaymentUncheckedCreateNestedManyWithoutStayInput
    stayGuests?: StayGuestUncheckedCreateNestedManyWithoutStayInput
  }

  export type StayCreateOrConnectWithoutChargesInput = {
    where: StayWhereUniqueInput
    create: XOR<StayCreateWithoutChargesInput, StayUncheckedCreateWithoutChargesInput>
  }

  export type StayUpsertWithoutChargesInput = {
    update: XOR<StayUpdateWithoutChargesInput, StayUncheckedUpdateWithoutChargesInput>
    create: XOR<StayCreateWithoutChargesInput, StayUncheckedCreateWithoutChargesInput>
    where?: StayWhereInput
  }

  export type StayUpdateToOneWithWhereWithoutChargesInput = {
    where?: StayWhereInput
    data: XOR<StayUpdateWithoutChargesInput, StayUncheckedUpdateWithoutChargesInput>
  }

  export type StayUpdateWithoutChargesInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStayStatusFieldUpdateOperationsInput | $Enums.StayStatus
    reservation?: ReservationUpdateOneRequiredWithoutStayNestedInput
    payments?: PaymentUpdateManyWithoutStayNestedInput
    stayGuests?: StayGuestUpdateManyWithoutStayNestedInput
  }

  export type StayUncheckedUpdateWithoutChargesInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStayStatusFieldUpdateOperationsInput | $Enums.StayStatus
    payments?: PaymentUncheckedUpdateManyWithoutStayNestedInput
    stayGuests?: StayGuestUncheckedUpdateManyWithoutStayNestedInput
  }

  export type StayCreateWithoutPaymentsInput = {
    id?: string
    checkInAt?: Date | string | null
    checkOutAt?: Date | string | null
    status?: $Enums.StayStatus
    reservation: ReservationCreateNestedOneWithoutStayInput
    charges?: ChargeCreateNestedManyWithoutStayInput
    stayGuests?: StayGuestCreateNestedManyWithoutStayInput
  }

  export type StayUncheckedCreateWithoutPaymentsInput = {
    id?: string
    reservationId: string
    checkInAt?: Date | string | null
    checkOutAt?: Date | string | null
    status?: $Enums.StayStatus
    charges?: ChargeUncheckedCreateNestedManyWithoutStayInput
    stayGuests?: StayGuestUncheckedCreateNestedManyWithoutStayInput
  }

  export type StayCreateOrConnectWithoutPaymentsInput = {
    where: StayWhereUniqueInput
    create: XOR<StayCreateWithoutPaymentsInput, StayUncheckedCreateWithoutPaymentsInput>
  }

  export type StayUpsertWithoutPaymentsInput = {
    update: XOR<StayUpdateWithoutPaymentsInput, StayUncheckedUpdateWithoutPaymentsInput>
    create: XOR<StayCreateWithoutPaymentsInput, StayUncheckedCreateWithoutPaymentsInput>
    where?: StayWhereInput
  }

  export type StayUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: StayWhereInput
    data: XOR<StayUpdateWithoutPaymentsInput, StayUncheckedUpdateWithoutPaymentsInput>
  }

  export type StayUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStayStatusFieldUpdateOperationsInput | $Enums.StayStatus
    reservation?: ReservationUpdateOneRequiredWithoutStayNestedInput
    charges?: ChargeUpdateManyWithoutStayNestedInput
    stayGuests?: StayGuestUpdateManyWithoutStayNestedInput
  }

  export type StayUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStayStatusFieldUpdateOperationsInput | $Enums.StayStatus
    charges?: ChargeUncheckedUpdateManyWithoutStayNestedInput
    stayGuests?: StayGuestUncheckedUpdateManyWithoutStayNestedInput
  }

  export type RoomCreateWithoutBlocksInput = {
    id?: string
    number: string
    floor?: string | null
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    hotel: HotelCreateNestedOneWithoutRoomsInput
    category: RoomCategoryCreateNestedOneWithoutRoomsInput
    reservationRooms?: ReservationRoomCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutBlocksInput = {
    id?: string
    hotelId: string
    roomCategoryId: string
    number: string
    floor?: string | null
    status?: $Enums.RoomStatus
    createdAt?: Date | string
    reservationRooms?: ReservationRoomUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutBlocksInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutBlocksInput, RoomUncheckedCreateWithoutBlocksInput>
  }

  export type RoomUpsertWithoutBlocksInput = {
    update: XOR<RoomUpdateWithoutBlocksInput, RoomUncheckedUpdateWithoutBlocksInput>
    create: XOR<RoomCreateWithoutBlocksInput, RoomUncheckedCreateWithoutBlocksInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutBlocksInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutBlocksInput, RoomUncheckedUpdateWithoutBlocksInput>
  }

  export type RoomUpdateWithoutBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutRoomsNestedInput
    category?: RoomCategoryUpdateOneRequiredWithoutRoomsNestedInput
    reservationRooms?: ReservationRoomUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    roomCategoryId?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservationRooms?: ReservationRoomUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserCreateManyHotelInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
  }

  export type GuestCreateManyHotelInput = {
    id?: string
    name: string
    document?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
  }

  export type RoomCategoryCreateManyHotelInput = {
    id?: string
    name: string
    capacity: number
    basePrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type RoomCreateManyHotelInput = {
    id?: string
    roomCategoryId: string
    number: string
    floor?: string | null
    status?: $Enums.RoomStatus
    createdAt?: Date | string
  }

  export type ReservationCreateManyHotelInput = {
    id?: string
    guestId: string
    checkInDate: Date | string
    checkOutDate: Date | string
    status?: $Enums.ReservationStatus
    source?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GuestUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutGuestNestedInput
    stayGuests?: StayGuestUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutGuestNestedInput
    stayGuests?: StayGuestUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCategoryUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutCategoryNestedInput
  }

  export type RoomCategoryUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type RoomCategoryUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: RoomCategoryUpdateOneRequiredWithoutRoomsNestedInput
    reservationRooms?: ReservationRoomUpdateManyWithoutRoomNestedInput
    blocks?: RoomBlockUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomCategoryId?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservationRooms?: ReservationRoomUncheckedUpdateManyWithoutRoomNestedInput
    blocks?: RoomBlockUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomCategoryId?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    source?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guest?: GuestUpdateOneRequiredWithoutReservationsNestedInput
    rooms?: ReservationRoomUpdateManyWithoutReservationNestedInput
    stay?: StayUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    source?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: ReservationRoomUncheckedUpdateManyWithoutReservationNestedInput
    stay?: StayUncheckedUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    source?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateManyUserInput = {
    roleId: string
  }

  export type UserRoleUpdateWithoutUserInput = {
    role?: RoleUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutUserInput = {
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleUncheckedUpdateManyWithoutUserInput = {
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleCreateManyRoleInput = {
    userId: string
  }

  export type UserRoleUpdateWithoutRoleInput = {
    user?: UserUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutRoleInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RoomCreateManyCategoryInput = {
    id?: string
    hotelId: string
    number: string
    floor?: string | null
    status?: $Enums.RoomStatus
    createdAt?: Date | string
  }

  export type RoomUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutRoomsNestedInput
    reservationRooms?: ReservationRoomUpdateManyWithoutRoomNestedInput
    blocks?: RoomBlockUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservationRooms?: ReservationRoomUncheckedUpdateManyWithoutRoomNestedInput
    blocks?: RoomBlockUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationRoomCreateManyRoomInput = {
    id?: string
    reservationId: string
    dailyRate: Decimal | DecimalJsLike | number | string
    adults?: number
    children?: number
  }

  export type RoomBlockCreateManyRoomInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    createdAt?: Date | string
  }

  export type ReservationRoomUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    reservation?: ReservationUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type ReservationRoomUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    dailyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationRoomUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    dailyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
  }

  export type RoomBlockUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomBlockUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomBlockUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateManyGuestInput = {
    id?: string
    hotelId: string
    checkInDate: Date | string
    checkOutDate: Date | string
    status?: $Enums.ReservationStatus
    source?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type StayGuestCreateManyGuestInput = {
    stayId: string
  }

  export type ReservationUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    source?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutReservationsNestedInput
    rooms?: ReservationRoomUpdateManyWithoutReservationNestedInput
    stay?: StayUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    source?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: ReservationRoomUncheckedUpdateManyWithoutReservationNestedInput
    stay?: StayUncheckedUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    source?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StayGuestUpdateWithoutGuestInput = {
    stay?: StayUpdateOneRequiredWithoutStayGuestsNestedInput
  }

  export type StayGuestUncheckedUpdateWithoutGuestInput = {
    stayId?: StringFieldUpdateOperationsInput | string
  }

  export type StayGuestUncheckedUpdateManyWithoutGuestInput = {
    stayId?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationRoomCreateManyReservationInput = {
    id?: string
    roomId: string
    dailyRate: Decimal | DecimalJsLike | number | string
    adults?: number
    children?: number
  }

  export type ReservationRoomUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    room?: RoomUpdateOneRequiredWithoutReservationRoomsNestedInput
  }

  export type ReservationRoomUncheckedUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    dailyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationRoomUncheckedUpdateManyWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    dailyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
  }

  export type ChargeCreateManyStayInput = {
    id?: string
    type: $Enums.ChargeType
    description: string
    amount: Decimal | DecimalJsLike | number | string
    occurredAt?: Date | string
  }

  export type PaymentCreateManyStayInput = {
    id?: string
    method: $Enums.PaymentMethod
    amount: Decimal | DecimalJsLike | number | string
    paidAt?: Date | string
    status?: $Enums.PaymentStatus
  }

  export type StayGuestCreateManyStayInput = {
    guestId: string
  }

  export type ChargeUpdateWithoutStayInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargeUncheckedUpdateWithoutStayInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargeUncheckedUpdateManyWithoutStayInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutStayInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentUncheckedUpdateWithoutStayInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentUncheckedUpdateManyWithoutStayInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type StayGuestUpdateWithoutStayInput = {
    guest?: GuestUpdateOneRequiredWithoutStayGuestsNestedInput
  }

  export type StayGuestUncheckedUpdateWithoutStayInput = {
    guestId?: StringFieldUpdateOperationsInput | string
  }

  export type StayGuestUncheckedUpdateManyWithoutStayInput = {
    guestId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}