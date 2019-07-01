import app_config, { KnownConfigKey } from './configurations/app-config';

app_config.init();

import { app } from './app';
import { APP_PORT } from './consts/app.consts';
import * as store from './store';

const serverPort = +app_config.get(
  KnownConfigKey.ServerPort,
  APP_PORT.toString(),
);

app.listen(serverPort, () => {
  // tslint:disable-next-line: no-console
  console.log(`app is listening on port ${serverPort}`);
  store.initStore();
});
