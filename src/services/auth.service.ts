import { oauth2Client } from '../config/google';

export async function getGoogleOAuthTokens(code: string):Promise<any> {
  const { tokens } = await oauth2Client.getToken(code);
  return tokens;
}

export async function getGoogleUserInfo(idToken: string) {
  const decoded = JSON.parse(Buffer.from(idToken.split('.')[1], 'base64').toString());
  return {
    email: decoded.email,
    name: decoded.name,
    picture: decoded.picture,
    sub: decoded.sub,
  };
}
