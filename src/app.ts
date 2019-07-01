import cors from 'cors';
import path from 'path';
import express from 'express';
import { log } from './middlewares/log';
import expressWinston from 'express-winston';
import error from './middlewares/error';
import exphbs from 'express-handlebars';
import { initPassport } from './utils/passport';
import { createExpressWinstonOptions } from './utils/logger';
import {
  config as routesConfig,
  clients
} from './configurations/routes-config';

initPassport();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(log);
app.use(expressWinston.logger(createExpressWinstonOptions()));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main',
  }),
);
app.set('view engine', 'handlebars');

clients.forEach(client => app.use(`/app${client.prefix}`, client.router));

Object.keys(routesConfig).forEach(routeName => {
  const routeConfig = routesConfig[routeName];
  app.use(routeConfig.prefix, routeConfig.router);
});

app.use(expressWinston.errorLogger(createExpressWinstonOptions()));
app.use(error);

export { app };
