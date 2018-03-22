export as namespace mysql2;

import './promise';
// import * as mysql from 'mysql';
// export * from 'mysql';
import * as mysql from 'mysql';
export * from 'mysql';

export interface Connection extends mysql.Connection {
  execute<
    T extends
      | mysql.RowDataPacket[][]
      | mysql.RowDataPacket[]
      | mysql.OkPacket
      | mysql.OkPacket[]
  >(
    sql: string,
    callback?: (
      err: mysql.QueryError | null,
      result: T,
      fields: mysql.FieldPacket[]
    ) => any
  ): mysql.Query;
  execute<
    T extends
      | mysql.RowDataPacket[][]
      | mysql.RowDataPacket[]
      | mysql.OkPacket
      | mysql.OkPacket[]
  >(
    sql: string,
    values: any | any[] | { [param: string]: any },
    callback?: (
      err: mysql.QueryError | null,
      result: T,
      fields: mysql.FieldPacket[]
    ) => any
  ): mysql.Query;
  execute<
    T extends
      | mysql.RowDataPacket[][]
      | mysql.RowDataPacket[]
      | mysql.OkPacket
      | mysql.OkPacket[]
  >(
    options: mysql.QueryOptions,
    callback?: (
      err: mysql.QueryError | null,
      result: T,
      fields?: mysql.FieldPacket[]
    ) => any
  ): mysql.Query;
  execute<
    T extends
      | mysql.RowDataPacket[][]
      | mysql.RowDataPacket[]
      | mysql.OkPacket
      | mysql.OkPacket[]
  >(
    options: mysql.QueryOptions,
    values: any | any[] | { [param: string]: any },
    callback?: (
      err: mysql.QueryError | null,
      result: T,
      fields: mysql.FieldPacket[]
    ) => any
  ): mysql.Query;
}

export interface PoolConnection extends mysql.PoolConnection, Connection {}

export interface Pool extends mysql.Connection {
  execute<
    T extends
      | mysql.RowDataPacket[][]
      | mysql.RowDataPacket[]
      | mysql.OkPacket
      | mysql.OkPacket[]
  >(
    sql: string,
    callback?: (
      err: mysql.QueryError | null,
      result: T,
      fields: mysql.FieldPacket[]
    ) => any
  ): mysql.Query;
  execute<
    T extends
      | mysql.RowDataPacket[][]
      | mysql.RowDataPacket[]
      | mysql.OkPacket
      | mysql.OkPacket[]
  >(
    sql: string,
    values: any | any[] | { [param: string]: any },
    callback?: (
      err: mysql.QueryError | null,
      result: T,
      fields: mysql.FieldPacket[]
    ) => any
  ): mysql.Query;
  execute<
    T extends
      | mysql.RowDataPacket[][]
      | mysql.RowDataPacket[]
      | mysql.OkPacket
      | mysql.OkPacket[]
  >(
    options: mysql.QueryOptions,
    callback?: (
      err: mysql.QueryError | null,
      result: T,
      fields?: mysql.FieldPacket[]
    ) => any
  ): mysql.Query;
  execute<
    T extends
      | mysql.RowDataPacket[][]
      | mysql.RowDataPacket[]
      | mysql.OkPacket
      | mysql.OkPacket[]
  >(
    options: mysql.QueryOptions,
    values: any | any[] | { [param: string]: any },
    callback?: (
      err: mysql.QueryError | null,
      result: T,
      fields: mysql.FieldPacket[]
    ) => any
  ): mysql.Query;
  getConnection(
    callback: (err: NodeJS.ErrnoException, connection: PoolConnection) => any
  ): void;
  on(event: 'connection', listener: (connection: PoolConnection) => any): this;
}

export function createConnection(connectionUri: string): Connection;
export function createConnection(config: mysql.ConnectionOptions): Connection;
export function createPool(config: mysql.PoolOptions): Pool;
