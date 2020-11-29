import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgress',
  host: 'localhost',
  password: 'password',
  database: 'firstapi',
  port: 5432,
});
