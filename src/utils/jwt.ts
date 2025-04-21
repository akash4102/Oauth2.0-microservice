import jwt from 'jsonwebtoken';
import { env } from '../config/env';

export function signJwt(payload: object): string {
  return jwt.sign(payload, env.JWT_SECRET, { expiresIn: '7d' });
}

export function verifyJwt(token: string): any {
  return jwt.verify(token, env.JWT_SECRET);
}
