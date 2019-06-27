import { app } from './app';
import jwt_config, { KnownConfigKey } from './configurations/jwt-config';

const serverPort = +jwt_config.get(KnownConfigKey.ServerPort, '3000');

app.listen(serverPort, () => {
  // tslint:disable-next-line: no-console
  console.log(`app is listening on port ${serverPort}`);
});
