import passport from 'passport';
import { isAuthRequired } from '../utils/auth';
import { Request, Response, NextFunction } from 'express';
import { UserRole, UserCredential } from '../models/credentials';

export function authenticate() {
  return isAuthRequired()
    ? passport.authenticate('jwt', { session: false })
    : (request: Request, response: Response, next: NextFunction) => next();
}

export function authorize(...roles: UserRole[]) {
  return isAuthRequired()
    ? (request: Request, response: Response, next: NextFunction) => {
        if (isAuthRequired()) {
          if (!request.isAuthenticated()) response.sendStatus(401);
          const user = request.user as UserCredential;
          if (!roles.find(role => user.roles.indexOf(role) >= 0)) {
            return response.sendStatus(403);
          }
        }
        next();
      }
    : (request: Request, response: Response, next: NextFunction) => next();
}
