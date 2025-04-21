import { Router } from "express";
import { googleOAuthCallback } from "../controllers/auth.controller";
import { env } from "../config/env";

const router = Router();

router.get("/login", (_req, res) => {
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${env.GOOGLE_CLIENT_ID}&redirect_uri=${env.GOOGLE_REDIRECT_URI}&scope=openid%20email%20profile&access_type=offline&prompt=consent`;
  res.redirect(authUrl);
});

router.get("/callback", googleOAuthCallback);

export default router;
