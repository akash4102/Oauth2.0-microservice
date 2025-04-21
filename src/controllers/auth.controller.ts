import { Request, Response } from "express";
import {
  getGoogleOAuthTokens,
  getGoogleUserInfo,
} from "../services/auth.service";
import { signJwt } from "../utils/jwt";

export async function googleOAuthCallback(
  req: Request,
  res: Response
): Promise<void> {
  const { code } = req.query;
  if (!code || typeof code !== "string") {
    res.status(400).send("Missing code");
    return;
  }

  try {
    const { id_token } = await getGoogleOAuthTokens(code);
    const user = await getGoogleUserInfo(id_token!);

    const appToken = signJwt({
      email: user.email,
      name: user.name,
      sub: user.sub,
    });
    res.json({ token: appToken, user });
  } catch (err) {
    console.error(err);
    res.status(500).send("Auth failed");
  }
}
