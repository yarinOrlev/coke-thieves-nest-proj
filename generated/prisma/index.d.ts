
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Thief
 * 
 */
export type Thief = $Result.DefaultSelection<Prisma.$ThiefPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SuspicionLevel: {
  Low: 'Low',
  Medium: 'Medium',
  High: 'High'
};

export type SuspicionLevel = (typeof SuspicionLevel)[keyof typeof SuspicionLevel]

}

export type SuspicionLevel = $Enums.SuspicionLevel

export const SuspicionLevel: typeof $Enums.SuspicionLevel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Thieves
 * const thieves = await prisma.thief.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Thieves
   * const thieves = await prisma.thief.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.thief`: Exposes CRUD operations for the **Thief** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Thieves
    * const thieves = await prisma.thief.findMany()
    * ```
    */
  get thief(): Prisma.ThiefDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Thief: 'Thief'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "thief"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Thief: {
        payload: Prisma.$ThiefPayload<ExtArgs>
        fields: Prisma.ThiefFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThiefFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThiefPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThiefFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThiefPayload>
          }
          findFirst: {
            args: Prisma.ThiefFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThiefPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThiefFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThiefPayload>
          }
          findMany: {
            args: Prisma.ThiefFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThiefPayload>[]
          }
          create: {
            args: Prisma.ThiefCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThiefPayload>
          }
          createMany: {
            args: Prisma.ThiefCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ThiefCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThiefPayload>[]
          }
          delete: {
            args: Prisma.ThiefDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThiefPayload>
          }
          update: {
            args: Prisma.ThiefUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThiefPayload>
          }
          deleteMany: {
            args: Prisma.ThiefDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ThiefUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ThiefUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThiefPayload>[]
          }
          upsert: {
            args: Prisma.ThiefUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThiefPayload>
          }
          aggregate: {
            args: Prisma.ThiefAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateThief>
          }
          groupBy: {
            args: Prisma.ThiefGroupByArgs<ExtArgs>
            result: $Utils.Optional<ThiefGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThiefCountArgs<ExtArgs>
            result: $Utils.Optional<ThiefCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    thief?: ThiefOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model Thief
   */

  export type AggregateThief = {
    _count: ThiefCountAggregateOutputType | null
    _avg: ThiefAvgAggregateOutputType | null
    _sum: ThiefSumAggregateOutputType | null
    _min: ThiefMinAggregateOutputType | null
    _max: ThiefMaxAggregateOutputType | null
  }

  export type ThiefAvgAggregateOutputType = {
    id: number | null
  }

  export type ThiefSumAggregateOutputType = {
    id: number | null
  }

  export type ThiefMinAggregateOutputType = {
    id: number | null
    name: string | null
    birthDate: string | null
    levelOfSuspicion: $Enums.SuspicionLevel | null
    dateOfSuspicion: string | null
    dateOfLastUpdate: string | null
  }

  export type ThiefMaxAggregateOutputType = {
    id: number | null
    name: string | null
    birthDate: string | null
    levelOfSuspicion: $Enums.SuspicionLevel | null
    dateOfSuspicion: string | null
    dateOfLastUpdate: string | null
  }

  export type ThiefCountAggregateOutputType = {
    id: number
    name: number
    birthDate: number
    levelOfSuspicion: number
    dateOfSuspicion: number
    dateOfLastUpdate: number
    _all: number
  }


  export type ThiefAvgAggregateInputType = {
    id?: true
  }

  export type ThiefSumAggregateInputType = {
    id?: true
  }

  export type ThiefMinAggregateInputType = {
    id?: true
    name?: true
    birthDate?: true
    levelOfSuspicion?: true
    dateOfSuspicion?: true
    dateOfLastUpdate?: true
  }

  export type ThiefMaxAggregateInputType = {
    id?: true
    name?: true
    birthDate?: true
    levelOfSuspicion?: true
    dateOfSuspicion?: true
    dateOfLastUpdate?: true
  }

  export type ThiefCountAggregateInputType = {
    id?: true
    name?: true
    birthDate?: true
    levelOfSuspicion?: true
    dateOfSuspicion?: true
    dateOfLastUpdate?: true
    _all?: true
  }

  export type ThiefAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Thief to aggregate.
     */
    where?: ThiefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Thieves to fetch.
     */
    orderBy?: ThiefOrderByWithRelationInput | ThiefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThiefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Thieves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Thieves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Thieves
    **/
    _count?: true | ThiefCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThiefAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThiefSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThiefMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThiefMaxAggregateInputType
  }

  export type GetThiefAggregateType<T extends ThiefAggregateArgs> = {
        [P in keyof T & keyof AggregateThief]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThief[P]>
      : GetScalarType<T[P], AggregateThief[P]>
  }




  export type ThiefGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThiefWhereInput
    orderBy?: ThiefOrderByWithAggregationInput | ThiefOrderByWithAggregationInput[]
    by: ThiefScalarFieldEnum[] | ThiefScalarFieldEnum
    having?: ThiefScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThiefCountAggregateInputType | true
    _avg?: ThiefAvgAggregateInputType
    _sum?: ThiefSumAggregateInputType
    _min?: ThiefMinAggregateInputType
    _max?: ThiefMaxAggregateInputType
  }

  export type ThiefGroupByOutputType = {
    id: number
    name: string
    birthDate: string
    levelOfSuspicion: $Enums.SuspicionLevel
    dateOfSuspicion: string
    dateOfLastUpdate: string
    _count: ThiefCountAggregateOutputType | null
    _avg: ThiefAvgAggregateOutputType | null
    _sum: ThiefSumAggregateOutputType | null
    _min: ThiefMinAggregateOutputType | null
    _max: ThiefMaxAggregateOutputType | null
  }

  type GetThiefGroupByPayload<T extends ThiefGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThiefGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThiefGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThiefGroupByOutputType[P]>
            : GetScalarType<T[P], ThiefGroupByOutputType[P]>
        }
      >
    >


  export type ThiefSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birthDate?: boolean
    levelOfSuspicion?: boolean
    dateOfSuspicion?: boolean
    dateOfLastUpdate?: boolean
  }, ExtArgs["result"]["thief"]>

  export type ThiefSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birthDate?: boolean
    levelOfSuspicion?: boolean
    dateOfSuspicion?: boolean
    dateOfLastUpdate?: boolean
  }, ExtArgs["result"]["thief"]>

  export type ThiefSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birthDate?: boolean
    levelOfSuspicion?: boolean
    dateOfSuspicion?: boolean
    dateOfLastUpdate?: boolean
  }, ExtArgs["result"]["thief"]>

  export type ThiefSelectScalar = {
    id?: boolean
    name?: boolean
    birthDate?: boolean
    levelOfSuspicion?: boolean
    dateOfSuspicion?: boolean
    dateOfLastUpdate?: boolean
  }

  export type ThiefOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "birthDate" | "levelOfSuspicion" | "dateOfSuspicion" | "dateOfLastUpdate", ExtArgs["result"]["thief"]>

  export type $ThiefPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Thief"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      birthDate: string
      levelOfSuspicion: $Enums.SuspicionLevel
      dateOfSuspicion: string
      dateOfLastUpdate: string
    }, ExtArgs["result"]["thief"]>
    composites: {}
  }

  type ThiefGetPayload<S extends boolean | null | undefined | ThiefDefaultArgs> = $Result.GetResult<Prisma.$ThiefPayload, S>

  type ThiefCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ThiefFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ThiefCountAggregateInputType | true
    }

  export interface ThiefDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Thief'], meta: { name: 'Thief' } }
    /**
     * Find zero or one Thief that matches the filter.
     * @param {ThiefFindUniqueArgs} args - Arguments to find a Thief
     * @example
     * // Get one Thief
     * const thief = await prisma.thief.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ThiefFindUniqueArgs>(args: SelectSubset<T, ThiefFindUniqueArgs<ExtArgs>>): Prisma__ThiefClient<$Result.GetResult<Prisma.$ThiefPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Thief that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ThiefFindUniqueOrThrowArgs} args - Arguments to find a Thief
     * @example
     * // Get one Thief
     * const thief = await prisma.thief.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ThiefFindUniqueOrThrowArgs>(args: SelectSubset<T, ThiefFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ThiefClient<$Result.GetResult<Prisma.$ThiefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Thief that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThiefFindFirstArgs} args - Arguments to find a Thief
     * @example
     * // Get one Thief
     * const thief = await prisma.thief.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ThiefFindFirstArgs>(args?: SelectSubset<T, ThiefFindFirstArgs<ExtArgs>>): Prisma__ThiefClient<$Result.GetResult<Prisma.$ThiefPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Thief that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThiefFindFirstOrThrowArgs} args - Arguments to find a Thief
     * @example
     * // Get one Thief
     * const thief = await prisma.thief.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ThiefFindFirstOrThrowArgs>(args?: SelectSubset<T, ThiefFindFirstOrThrowArgs<ExtArgs>>): Prisma__ThiefClient<$Result.GetResult<Prisma.$ThiefPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Thieves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThiefFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Thieves
     * const thieves = await prisma.thief.findMany()
     * 
     * // Get first 10 Thieves
     * const thieves = await prisma.thief.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const thiefWithIdOnly = await prisma.thief.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ThiefFindManyArgs>(args?: SelectSubset<T, ThiefFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThiefPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Thief.
     * @param {ThiefCreateArgs} args - Arguments to create a Thief.
     * @example
     * // Create one Thief
     * const Thief = await prisma.thief.create({
     *   data: {
     *     // ... data to create a Thief
     *   }
     * })
     * 
     */
    create<T extends ThiefCreateArgs>(args: SelectSubset<T, ThiefCreateArgs<ExtArgs>>): Prisma__ThiefClient<$Result.GetResult<Prisma.$ThiefPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Thieves.
     * @param {ThiefCreateManyArgs} args - Arguments to create many Thieves.
     * @example
     * // Create many Thieves
     * const thief = await prisma.thief.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ThiefCreateManyArgs>(args?: SelectSubset<T, ThiefCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Thieves and returns the data saved in the database.
     * @param {ThiefCreateManyAndReturnArgs} args - Arguments to create many Thieves.
     * @example
     * // Create many Thieves
     * const thief = await prisma.thief.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Thieves and only return the `id`
     * const thiefWithIdOnly = await prisma.thief.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ThiefCreateManyAndReturnArgs>(args?: SelectSubset<T, ThiefCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThiefPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Thief.
     * @param {ThiefDeleteArgs} args - Arguments to delete one Thief.
     * @example
     * // Delete one Thief
     * const Thief = await prisma.thief.delete({
     *   where: {
     *     // ... filter to delete one Thief
     *   }
     * })
     * 
     */
    delete<T extends ThiefDeleteArgs>(args: SelectSubset<T, ThiefDeleteArgs<ExtArgs>>): Prisma__ThiefClient<$Result.GetResult<Prisma.$ThiefPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Thief.
     * @param {ThiefUpdateArgs} args - Arguments to update one Thief.
     * @example
     * // Update one Thief
     * const thief = await prisma.thief.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ThiefUpdateArgs>(args: SelectSubset<T, ThiefUpdateArgs<ExtArgs>>): Prisma__ThiefClient<$Result.GetResult<Prisma.$ThiefPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Thieves.
     * @param {ThiefDeleteManyArgs} args - Arguments to filter Thieves to delete.
     * @example
     * // Delete a few Thieves
     * const { count } = await prisma.thief.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ThiefDeleteManyArgs>(args?: SelectSubset<T, ThiefDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Thieves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThiefUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Thieves
     * const thief = await prisma.thief.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ThiefUpdateManyArgs>(args: SelectSubset<T, ThiefUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Thieves and returns the data updated in the database.
     * @param {ThiefUpdateManyAndReturnArgs} args - Arguments to update many Thieves.
     * @example
     * // Update many Thieves
     * const thief = await prisma.thief.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Thieves and only return the `id`
     * const thiefWithIdOnly = await prisma.thief.updateManyAndReturn({
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
    updateManyAndReturn<T extends ThiefUpdateManyAndReturnArgs>(args: SelectSubset<T, ThiefUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThiefPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Thief.
     * @param {ThiefUpsertArgs} args - Arguments to update or create a Thief.
     * @example
     * // Update or create a Thief
     * const thief = await prisma.thief.upsert({
     *   create: {
     *     // ... data to create a Thief
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Thief we want to update
     *   }
     * })
     */
    upsert<T extends ThiefUpsertArgs>(args: SelectSubset<T, ThiefUpsertArgs<ExtArgs>>): Prisma__ThiefClient<$Result.GetResult<Prisma.$ThiefPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Thieves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThiefCountArgs} args - Arguments to filter Thieves to count.
     * @example
     * // Count the number of Thieves
     * const count = await prisma.thief.count({
     *   where: {
     *     // ... the filter for the Thieves we want to count
     *   }
     * })
    **/
    count<T extends ThiefCountArgs>(
      args?: Subset<T, ThiefCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThiefCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Thief.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThiefAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ThiefAggregateArgs>(args: Subset<T, ThiefAggregateArgs>): Prisma.PrismaPromise<GetThiefAggregateType<T>>

    /**
     * Group by Thief.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThiefGroupByArgs} args - Group by arguments.
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
      T extends ThiefGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThiefGroupByArgs['orderBy'] }
        : { orderBy?: ThiefGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ThiefGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThiefGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Thief model
   */
  readonly fields: ThiefFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Thief.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThiefClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Thief model
   */
  interface ThiefFieldRefs {
    readonly id: FieldRef<"Thief", 'Int'>
    readonly name: FieldRef<"Thief", 'String'>
    readonly birthDate: FieldRef<"Thief", 'String'>
    readonly levelOfSuspicion: FieldRef<"Thief", 'SuspicionLevel'>
    readonly dateOfSuspicion: FieldRef<"Thief", 'String'>
    readonly dateOfLastUpdate: FieldRef<"Thief", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Thief findUnique
   */
  export type ThiefFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thief
     */
    select?: ThiefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thief
     */
    omit?: ThiefOmit<ExtArgs> | null
    /**
     * Filter, which Thief to fetch.
     */
    where: ThiefWhereUniqueInput
  }

  /**
   * Thief findUniqueOrThrow
   */
  export type ThiefFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thief
     */
    select?: ThiefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thief
     */
    omit?: ThiefOmit<ExtArgs> | null
    /**
     * Filter, which Thief to fetch.
     */
    where: ThiefWhereUniqueInput
  }

  /**
   * Thief findFirst
   */
  export type ThiefFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thief
     */
    select?: ThiefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thief
     */
    omit?: ThiefOmit<ExtArgs> | null
    /**
     * Filter, which Thief to fetch.
     */
    where?: ThiefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Thieves to fetch.
     */
    orderBy?: ThiefOrderByWithRelationInput | ThiefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Thieves.
     */
    cursor?: ThiefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Thieves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Thieves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Thieves.
     */
    distinct?: ThiefScalarFieldEnum | ThiefScalarFieldEnum[]
  }

  /**
   * Thief findFirstOrThrow
   */
  export type ThiefFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thief
     */
    select?: ThiefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thief
     */
    omit?: ThiefOmit<ExtArgs> | null
    /**
     * Filter, which Thief to fetch.
     */
    where?: ThiefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Thieves to fetch.
     */
    orderBy?: ThiefOrderByWithRelationInput | ThiefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Thieves.
     */
    cursor?: ThiefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Thieves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Thieves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Thieves.
     */
    distinct?: ThiefScalarFieldEnum | ThiefScalarFieldEnum[]
  }

  /**
   * Thief findMany
   */
  export type ThiefFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thief
     */
    select?: ThiefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thief
     */
    omit?: ThiefOmit<ExtArgs> | null
    /**
     * Filter, which Thieves to fetch.
     */
    where?: ThiefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Thieves to fetch.
     */
    orderBy?: ThiefOrderByWithRelationInput | ThiefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Thieves.
     */
    cursor?: ThiefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Thieves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Thieves.
     */
    skip?: number
    distinct?: ThiefScalarFieldEnum | ThiefScalarFieldEnum[]
  }

  /**
   * Thief create
   */
  export type ThiefCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thief
     */
    select?: ThiefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thief
     */
    omit?: ThiefOmit<ExtArgs> | null
    /**
     * The data needed to create a Thief.
     */
    data: XOR<ThiefCreateInput, ThiefUncheckedCreateInput>
  }

  /**
   * Thief createMany
   */
  export type ThiefCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Thieves.
     */
    data: ThiefCreateManyInput | ThiefCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Thief createManyAndReturn
   */
  export type ThiefCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thief
     */
    select?: ThiefSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Thief
     */
    omit?: ThiefOmit<ExtArgs> | null
    /**
     * The data used to create many Thieves.
     */
    data: ThiefCreateManyInput | ThiefCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Thief update
   */
  export type ThiefUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thief
     */
    select?: ThiefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thief
     */
    omit?: ThiefOmit<ExtArgs> | null
    /**
     * The data needed to update a Thief.
     */
    data: XOR<ThiefUpdateInput, ThiefUncheckedUpdateInput>
    /**
     * Choose, which Thief to update.
     */
    where: ThiefWhereUniqueInput
  }

  /**
   * Thief updateMany
   */
  export type ThiefUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Thieves.
     */
    data: XOR<ThiefUpdateManyMutationInput, ThiefUncheckedUpdateManyInput>
    /**
     * Filter which Thieves to update
     */
    where?: ThiefWhereInput
    /**
     * Limit how many Thieves to update.
     */
    limit?: number
  }

  /**
   * Thief updateManyAndReturn
   */
  export type ThiefUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thief
     */
    select?: ThiefSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Thief
     */
    omit?: ThiefOmit<ExtArgs> | null
    /**
     * The data used to update Thieves.
     */
    data: XOR<ThiefUpdateManyMutationInput, ThiefUncheckedUpdateManyInput>
    /**
     * Filter which Thieves to update
     */
    where?: ThiefWhereInput
    /**
     * Limit how many Thieves to update.
     */
    limit?: number
  }

  /**
   * Thief upsert
   */
  export type ThiefUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thief
     */
    select?: ThiefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thief
     */
    omit?: ThiefOmit<ExtArgs> | null
    /**
     * The filter to search for the Thief to update in case it exists.
     */
    where: ThiefWhereUniqueInput
    /**
     * In case the Thief found by the `where` argument doesn't exist, create a new Thief with this data.
     */
    create: XOR<ThiefCreateInput, ThiefUncheckedCreateInput>
    /**
     * In case the Thief was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThiefUpdateInput, ThiefUncheckedUpdateInput>
  }

  /**
   * Thief delete
   */
  export type ThiefDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thief
     */
    select?: ThiefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thief
     */
    omit?: ThiefOmit<ExtArgs> | null
    /**
     * Filter which Thief to delete.
     */
    where: ThiefWhereUniqueInput
  }

  /**
   * Thief deleteMany
   */
  export type ThiefDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Thieves to delete
     */
    where?: ThiefWhereInput
    /**
     * Limit how many Thieves to delete.
     */
    limit?: number
  }

  /**
   * Thief without action
   */
  export type ThiefDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thief
     */
    select?: ThiefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thief
     */
    omit?: ThiefOmit<ExtArgs> | null
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


  export const ThiefScalarFieldEnum: {
    id: 'id',
    name: 'name',
    birthDate: 'birthDate',
    levelOfSuspicion: 'levelOfSuspicion',
    dateOfSuspicion: 'dateOfSuspicion',
    dateOfLastUpdate: 'dateOfLastUpdate'
  };

  export type ThiefScalarFieldEnum = (typeof ThiefScalarFieldEnum)[keyof typeof ThiefScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'SuspicionLevel'
   */
  export type EnumSuspicionLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SuspicionLevel'>
    


  /**
   * Reference to a field of type 'SuspicionLevel[]'
   */
  export type ListEnumSuspicionLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SuspicionLevel[]'>
    


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


  export type ThiefWhereInput = {
    AND?: ThiefWhereInput | ThiefWhereInput[]
    OR?: ThiefWhereInput[]
    NOT?: ThiefWhereInput | ThiefWhereInput[]
    id?: IntFilter<"Thief"> | number
    name?: StringFilter<"Thief"> | string
    birthDate?: StringFilter<"Thief"> | string
    levelOfSuspicion?: EnumSuspicionLevelFilter<"Thief"> | $Enums.SuspicionLevel
    dateOfSuspicion?: StringFilter<"Thief"> | string
    dateOfLastUpdate?: StringFilter<"Thief"> | string
  }

  export type ThiefOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    levelOfSuspicion?: SortOrder
    dateOfSuspicion?: SortOrder
    dateOfLastUpdate?: SortOrder
  }

  export type ThiefWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ThiefWhereInput | ThiefWhereInput[]
    OR?: ThiefWhereInput[]
    NOT?: ThiefWhereInput | ThiefWhereInput[]
    name?: StringFilter<"Thief"> | string
    birthDate?: StringFilter<"Thief"> | string
    levelOfSuspicion?: EnumSuspicionLevelFilter<"Thief"> | $Enums.SuspicionLevel
    dateOfSuspicion?: StringFilter<"Thief"> | string
    dateOfLastUpdate?: StringFilter<"Thief"> | string
  }, "id">

  export type ThiefOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    levelOfSuspicion?: SortOrder
    dateOfSuspicion?: SortOrder
    dateOfLastUpdate?: SortOrder
    _count?: ThiefCountOrderByAggregateInput
    _avg?: ThiefAvgOrderByAggregateInput
    _max?: ThiefMaxOrderByAggregateInput
    _min?: ThiefMinOrderByAggregateInput
    _sum?: ThiefSumOrderByAggregateInput
  }

  export type ThiefScalarWhereWithAggregatesInput = {
    AND?: ThiefScalarWhereWithAggregatesInput | ThiefScalarWhereWithAggregatesInput[]
    OR?: ThiefScalarWhereWithAggregatesInput[]
    NOT?: ThiefScalarWhereWithAggregatesInput | ThiefScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Thief"> | number
    name?: StringWithAggregatesFilter<"Thief"> | string
    birthDate?: StringWithAggregatesFilter<"Thief"> | string
    levelOfSuspicion?: EnumSuspicionLevelWithAggregatesFilter<"Thief"> | $Enums.SuspicionLevel
    dateOfSuspicion?: StringWithAggregatesFilter<"Thief"> | string
    dateOfLastUpdate?: StringWithAggregatesFilter<"Thief"> | string
  }

  export type ThiefCreateInput = {
    name: string
    birthDate: string
    levelOfSuspicion: $Enums.SuspicionLevel
    dateOfSuspicion: string
    dateOfLastUpdate: string
  }

  export type ThiefUncheckedCreateInput = {
    id?: number
    name: string
    birthDate: string
    levelOfSuspicion: $Enums.SuspicionLevel
    dateOfSuspicion: string
    dateOfLastUpdate: string
  }

  export type ThiefUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    levelOfSuspicion?: EnumSuspicionLevelFieldUpdateOperationsInput | $Enums.SuspicionLevel
    dateOfSuspicion?: StringFieldUpdateOperationsInput | string
    dateOfLastUpdate?: StringFieldUpdateOperationsInput | string
  }

  export type ThiefUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    levelOfSuspicion?: EnumSuspicionLevelFieldUpdateOperationsInput | $Enums.SuspicionLevel
    dateOfSuspicion?: StringFieldUpdateOperationsInput | string
    dateOfLastUpdate?: StringFieldUpdateOperationsInput | string
  }

  export type ThiefCreateManyInput = {
    id?: number
    name: string
    birthDate: string
    levelOfSuspicion: $Enums.SuspicionLevel
    dateOfSuspicion: string
    dateOfLastUpdate: string
  }

  export type ThiefUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    levelOfSuspicion?: EnumSuspicionLevelFieldUpdateOperationsInput | $Enums.SuspicionLevel
    dateOfSuspicion?: StringFieldUpdateOperationsInput | string
    dateOfLastUpdate?: StringFieldUpdateOperationsInput | string
  }

  export type ThiefUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    levelOfSuspicion?: EnumSuspicionLevelFieldUpdateOperationsInput | $Enums.SuspicionLevel
    dateOfSuspicion?: StringFieldUpdateOperationsInput | string
    dateOfLastUpdate?: StringFieldUpdateOperationsInput | string
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

  export type EnumSuspicionLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.SuspicionLevel | EnumSuspicionLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SuspicionLevel[] | ListEnumSuspicionLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SuspicionLevel[] | ListEnumSuspicionLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSuspicionLevelFilter<$PrismaModel> | $Enums.SuspicionLevel
  }

  export type ThiefCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    levelOfSuspicion?: SortOrder
    dateOfSuspicion?: SortOrder
    dateOfLastUpdate?: SortOrder
  }

  export type ThiefAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ThiefMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    levelOfSuspicion?: SortOrder
    dateOfSuspicion?: SortOrder
    dateOfLastUpdate?: SortOrder
  }

  export type ThiefMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    levelOfSuspicion?: SortOrder
    dateOfSuspicion?: SortOrder
    dateOfLastUpdate?: SortOrder
  }

  export type ThiefSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumSuspicionLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SuspicionLevel | EnumSuspicionLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SuspicionLevel[] | ListEnumSuspicionLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SuspicionLevel[] | ListEnumSuspicionLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSuspicionLevelWithAggregatesFilter<$PrismaModel> | $Enums.SuspicionLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSuspicionLevelFilter<$PrismaModel>
    _max?: NestedEnumSuspicionLevelFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumSuspicionLevelFieldUpdateOperationsInput = {
    set?: $Enums.SuspicionLevel
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedEnumSuspicionLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.SuspicionLevel | EnumSuspicionLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SuspicionLevel[] | ListEnumSuspicionLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SuspicionLevel[] | ListEnumSuspicionLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSuspicionLevelFilter<$PrismaModel> | $Enums.SuspicionLevel
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

  export type NestedEnumSuspicionLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SuspicionLevel | EnumSuspicionLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SuspicionLevel[] | ListEnumSuspicionLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SuspicionLevel[] | ListEnumSuspicionLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSuspicionLevelWithAggregatesFilter<$PrismaModel> | $Enums.SuspicionLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSuspicionLevelFilter<$PrismaModel>
    _max?: NestedEnumSuspicionLevelFilter<$PrismaModel>
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