import app_config, { KnownConfigKey } from './configurations/app-config';

app_config.init();

import { app } from './app';

const serverPort = +app_config.get(KnownConfigKey.ServerPort, '3000');

app.listen(serverPort, () => {
  // tslint:disable-next-line: no-console
  console.log(`app is listening on port ${serverPort}`);
});
