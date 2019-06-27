import * as dotenv from 'dotenv';

export enum KnownConfigKey {
  JwtSecret = 'JWT_SIGN_SECRET',
  ServerPort = 'SERVER_PORT',
}

function init() {
  dotenv.config({ path: process.env.DOTENV_CONFIG_PATH });
}

function get(key: string, fallback = ''): string {
  return process.env[key] || fallback;
}

export default {
  init,
  get,
};
