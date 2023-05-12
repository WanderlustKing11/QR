const env = process.env

export const HOST = env.HOST ?? 'localhost';
export const PORT = env.PORT ?? 8080;
export const SERVER_URL = `http://${HOST}:${PORT}`;

export default {
  HOST,
  PORT,
  SERVER_URL,
}