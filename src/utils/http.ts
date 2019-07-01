import { format } from 'util';
import request from 'request-promise';

export async function getStaticFile(fileName: string) {
  const baseUrl = format('http://localhost:%d', process.env.SERVER_PORT);
  const client = request.defaults({
    baseUrl: `${baseUrl}/public/assets`,
    json: true,
  });

  return await client.get(`/${fileName}`);
}
