import passport from 'passport';
import jwt from 'jsonwebtoken';
import { IVerifyOptions } from 'passport-local';
import { Request, Response, NextFunction } from 'express';
import app_config, { KnownConfigKey } from '../configurations/app-config';

const jwtSecret = app_config.get(KnownConfigKey.JwtSecret);

export const authenticate = (req: Request, res: Response, next: NextFunction) =>
  passport.authenticate(
    'local',
    { session: false },
    (err: Error, user: any, info: IVerifyOptions) => {
      if (err || !user) {
        return res.status(400).send({
          message: 'Failed',
          user,
        });
      }

      req.login(user, { session: false }, error => {
        if (error) {
          res.send(error);
        }

        const token = jwt.sign(user, jwtSecret);
        return res.send({ user, token });
      });
    },
  )(req, res);
